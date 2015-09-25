(set-env!
 :dependencies '[[adzerk/boot-cljs             "1.7.48-3"]
                 [adzerk/boot-reload           "0.3.2"]
                 [org.clojure/clojurescript    "1.7.48"]
                 [org.clojure/clojure          "1.7.0"]
                 [hoplon/boot-hoplon           "0.1.5"]
                 [hoplon                       "6.0.0-alpha10"]
                 [alandipert/storage-atom      "1.2.4"]
                 [mathias/boot-sassc           "0.1.5"]
                 [pandeiro/boot-http           "0.6.3"]
                 [clj-tagsoup                  "0.3.0"]
                 [markdown-clj                 "0.9.74"]
                 [tailrecursion/boot-heredoc   "0.1.0"]
                 [org.python/jython-standalone "2.7.0"]
                 [org.pygments/pygments        "2.0.2"]]
 :resource-paths #{"assets"}
 :source-paths #{"src"})

(require
 '[boot.core          :as    core]
 '[boot.util          :as    util]
 '[clojure.java.io    :as    io]
 '[adzerk.boot-cljs   :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[mathias.boot-sassc :refer [sass]]
 '[boot.heredoc       :refer [heredoc]]
 '[pandeiro.boot-http :refer [serve]])

(defn- copy [tf dir]
  (let [f (core/tmp-file tf)]
    (util/with-let [to (doto (io/file dir (:path tf)) io/make-parents)]
      (io/copy f to))))

(defn inject-scripts [html scripts]
  (reduce #(.replaceFirst %1 "</head>" (format "<script>%s</script></head>" %2))
          html
          scripts))

(deftask inject
  "Injects a <script> tag into the head of an HTML file in the fileset."
  [f file FILE str "FileSet root-relative path of the HTML file to tinker with."
   s scripts JAVASCRIPT [str] "JavaScript files to inject as <script> tags in <head>."]
  (assert (and file (seq scripts)) "inject: file and scripts are required arguments")
  (let [tgt (core/tmp-dir!)]
    (core/with-pre-wrap [fs]
      (core/empty-dir! tgt)
      (if-let [html-file (first (by-name [file] (core/input-files fs)))]
        (let [f   (copy html-file tgt)
              txt (slurp f)]
          (spit f (inject-scripts txt (->> fs
                                           core/input-files
                                           (by-name scripts)
                                           (map (comp slurp core/tmp-file)))))
          (-> fs
              (core/rm [html-file])
              (core/add-resource tgt)
              core/commit!))
        fs))))

(deftask dev
  "Build for local development."
  []
  (comp
   (watch)
   (speak)
   (heredoc)
   (hoplon)
   (reload)
   (cljs)
   (serve)))

(deftask prod
  "Build for production deployment."
  []
  (comp
   (heredoc)
   (hoplon)
   (cljs :optimizations :advanced)
   (prerender)
   (inject :file "index.html" :scripts ["ga.js"])))
