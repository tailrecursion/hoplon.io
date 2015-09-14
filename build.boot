(set-env!
 :dependencies '[[adzerk/boot-cljs           "1.7.48-3"]
                 [adzerk/boot-reload         "0.3.2"]
                 [org.clojure/clojurescript  "1.7.48"]
                 [org.clojure/clojure        "1.7.0"]
                 [hoplon/boot-hoplon         "0.1.5"]
                 [hoplon                     "6.0.0-alpha10"]
                 [alandipert/storage-atom    "1.2.4"]
                 [mathias/boot-sassc         "0.1.5"]
                 [pandeiro/boot-http         "0.6.3"]
                 [org.clojure/data.xml       "0.0.8"]
                 [markdown-clj               "0.9.74"]
                 [tailrecursion/boot-heredoc "0.1.0"]]
 :resource-paths #{"assets"}
 :source-paths #{"src"})

(require
 '[adzerk.boot-cljs   :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[mathias.boot-sassc :refer [sass]]
 '[boot.heredoc       :refer [heredoc]]
 '[pandeiro.boot-http :refer [serve]])

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
   (serve :port 4002)))

(deftask prod
  "Build for production deployment."
  []
  (comp
   (heredoc)
   (hoplon)
   (cljs :optimizations :advanced)
   (prerender)))
