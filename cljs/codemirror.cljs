(require
  '[clojure.string :as str]
  '[hoplon.core :as h]
  '[javelin.core :as j]
  '[promesa.core :as p])

(defn utoa [s]
  (js/window.btoa (js/unescape (js/encodeURIComponent s))))

(defn atou [s]
  (js/decodeURIComponent (js/escape (js/window.atob s))))

(defn eval-code
  [code]
  (prn "Last eval timestamp: " (.toISOString (js/Date.)))
  (js/scittle.core.eval_string code)
  true)

(defn gist-json->code [json]
  (->> json
       .-files
       js/Object.values
       seq
       (map (fn [o] (js->clj o :keywordize-keys true)))
       (filter (comp #{"Clojure"} :language)) ; incl. clj, cljs, cljc
       (sort-by :filename) ; we started with a map, which has no natural order
       (map #(do (assert (not (:truncated %)) "Can't handle truncated files")
                 (str ";; " (:filename %) "\n" (:content %))))
       (str/join "\n;;---\n")))

(defn async-fetch-gist [gist-id]
  (p/let [resp (js/fetch (str "https://api.github.com/gists/" gist-id)
                         {:headers {"Accept" "application/vnd.github+json"
                                    "X-GitHub-Api-Version" "2022-11-28"}})
          _ (when-not (.-ok resp) (throw (ex-info (str "Bad HTTP status "
                                                       (.-status resp) " "
                                                       (.-statusText resp))
                                                  {})))
          json (.json resp)
          code (gist-json->code json)]
    (if (seq code)
      code
      "; No Clojure code found in the gist.")))

(defn editor-contents
  []
  (-> js/cm_instance .-state .-doc .toString))

(defn eval-me []
  (eval-code (editor-contents)))

(set! (.-eval_me js/globalThis) eval-me)

(def extension
  (.of js/cv.keymap (.concat (clj->js [{:key "Mod-Enter"
                                        :run eval-me}])
                      js/clj_m.complete_keymap  )))

(def default-code
  (str/trim "
(require
  '[hoplon.core :as h]
  '[javelin.core :as j])

(defn view []
  (h/div
    (h/h1 \"Hello Hoplon\")))

(.replaceChildren (.getElementById js/document \"app\") (view))
"))

(defn linux? []
  (some? (re-find #"(Linux)|(X11)" js/navigator.userAgent)))

(defn mac? []
  (and (not (linux?))
       (some? (re-find #"(Mac)|(iPhone)|(iPad)|(iPod)" js/navigator.platform))))

(j/defc show-editor? true)
(j/defc show-editor-interface? false)
(j/defc= button-text (if show-editor? "Hide Editor" "Show Editor"))

(j/defc content nil)

(j/defc= html-content
  (str/trim
    (str "
<!DOCTYPE html>
<html>
  <head>
    <title>Hoplon Playground</title>
    <script src=\"https://cdn.jsdelivr.net/npm/scittle-hoplon@0.0.1/dist/scittle.js\" type=\"application/javascript\"></script>
    <script src=\"https://cdn.jsdelivr.net/npm/scittle-hoplon@0.0.1/dist/scittle.promesa.js\" type=\"application/javascript\"></script>
    <script src=\"https://cdn.jsdelivr.net/npm/scittle-hoplon@0.0.1/dist/scittle.javelin.js\" type=\"application/javascript\"></script>
    <script src=\"https://cdn.jsdelivr.net/npm/scittle-hoplon@0.0.1/dist/scittle.hoplon.js\" type=\"application/javascript\"></script>
    <script type=\"application/x-scittle\">
"
    content "
    </script>
  </head>
  <body>
  <div id=\"app\"> </div>
  </body>
</html>
    ")))

(j/defc= blob-url
  (js/window.URL.createObjectURL  (js/Blob. (clj->js [html-content]) #js {:type "text/plain"})))

(j/defc gist-result nil)

(defn view
  []
  (let [mod-symbol (if (mac?)
                     "⌘"
                     "⌃")]
    (h/body
      (h/div :toggle show-editor-interface?
        (h/div :id "editor" :toggle show-editor?)
        (h/div
          (h/button :click eval-me
            "Eval " mod-symbol "-⏎")
          (h/button :click #(swap! show-editor? not)
            button-text)
          (h/a :href blob-url
            :mouseover #(reset! content (editor-contents))
            :focus #(reset! content (editor-contents))
            :target "_blank"
            :download "hoplon.html"
            :click #(reset! content (editor-contents))
            "Download as html")))
      (h/cond-tpl
        (j/cell= (:loading gist-result)) (h/div (j/cell= (str "Loading gist: " (:loading gist-result))))
        (j/cell= (:error gist-result))   (h/div (j/cell= (:error gist-result))))
      (h/div :id "app" :toggle show-editor-interface?
        "Loading Hoplon App"))))

(defn bind-editor!
  [code]
  (set! (.-cm_instance js/globalThis)
    (js/cm.EditorView. #js {:doc code
                            :extensions #js [extension,
                                             js/cm.basicSetup,
                                             (js/cm.EditorView.theme #js {"&.cm-editor" #js {"max-height" "90vh"}
                                                                          ".cm-scroller" #js {"overflow" "auto"}}),
                                             js/clj_m.default_extensions]
                            :parent (js/document.querySelector "#editor")}))
  (reset! show-editor-interface? true))

(defn ^:export init []
  (view)
  (if-some [gist-id (->> js/document .-location .-search
                      (re-find #"[?&]gist=(\w+)")
                      second)]
    (do
      (reset! gist-result {:loading gist-id})
      (-> (async-fetch-gist gist-id)
        (p/then #(let [res (eval-code %)]
                   (println "Initial evaluation => " res)
                   (if (::error res)
                     (reset! gist-result {:error (str "Auto-evaluating the gist failed. Cause: " (::error res))})
                     (reset! gist-result {:ok %}))
                   (bind-editor! %)))
        (p/catch #(reset! gist-result {:error (str "Loading gist FAILED: " (ex-message %))}))))
    (do
      (bind-editor! default-code)
      (eval-me)))
  (println "Init run"))

(init)
