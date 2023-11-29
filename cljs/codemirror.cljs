(require '[clojure.string :as str])

(declare cm)

(defn eval-me []
  (prn "Last eval timestamp: " (.toISOString (js/Date.)))
  (js/scittle.core.eval_string (-> cm .-state .-doc .toString))
  true)

(defn toggle-editor []
  (let [elem (.getElementById js/document "editor")
        button (.getElementById js/document "toggleEditor")
        hidden? (= "none" (.-display (.-style elem)))]
    (set! (.-display (.-style elem))
      (if hidden?
        ""
        "none"))
    (set! (.-innerHTML button)
      (if hidden?
        "Hide Editor"
        "Show Editor"))))

(def extension
  (.of js/cv.keymap (.concat (clj->js [{:key "Mod-Enter"
                                        :run eval-me}])
                      js/clj_m.complete_keymap  )))

(def cm
  (let [doc (str/trim "
(require
  '[hoplon.core :as h]
  '[javelin.core :as j])

(defn view []
  (h/div
    (h/h1 \"Hello Hoplon\")))

(.replaceChildren (.getElementById js/document \"app\") (view))
")]
    (js/cm.EditorView. #js {:doc doc
                            :extensions #js [extension,
                                             js/cm.basicSetup,
                                             (js/cm.EditorView.theme #js {"&.cm-editor" #js {"max-height" "90vh"}
                                                                          ".cm-scroller" #js {"overflow" "auto"}}),
                                             js/clj_m.default_extensions]
                            :parent (js/document.querySelector "#editor")})))
(set! (.-eval_me js/globalThis) eval-me)
(set! (.-toggle_editor js/globalThis) toggle-editor)
(set! (.-cm_instance js/globalThis) cm)

(defn linux? []
  (some? (re-find #"(Linux)|(X11)" js/navigator.userAgent)))

(defn mac? []
  (and (not (linux?))
       (some? (re-find #"(Mac)|(iPhone)|(iPad)|(iPod)" js/navigator.platform))))

(let [elt (js/document.getElementById "evalMe")
      txt (.-innerText elt)
      mod-symbol (if (mac?)
                   "⌘"
                   "⌃")
      txt (str txt " " mod-symbol"-⏎")]
  (set! (.-innerHTML elt) txt))

(eval-me)
