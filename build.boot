#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.0.0"

(set-env!
  :project       'bootstrap-test
  :version       "1.0.0-SNAPSHOT"
  :description   "Hoplon UI kit for Twitter Bootstrap."
  :url           "https://github.com/tailrecursion/bootstrap-test"
  :license       {:name "Eclipse Public License",
                  :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies  [['tailrecursion/boot.core "2.0.0"]
                  ['tailrecursion/boot.task "2.0.0"]
                  ['tailrecursion/hoplon "5.0.0"]
                  ['org.clojure/clojurescript "0.0-2156"]
                  ['markdown-clj "0.9.38"]]
  :src-paths     #{"src"}
  :out-path      "resources/public")

(add-sync! (get-env :out-path) #{"resources/assets"})

(require
  ['tailrecursion.hoplon.boot :refer :all]
  ['tailrecursion.boot.task :refer :all])

(deftask dev
  "Build hoplon.io for local development."
  []
  (comp (watch) (hoplon {:pretty-print  true
                         :prerender     false
                         :optimizations :whitespace})))

(deftask prod
  "Build hoplon.io for production deployment."
  []
  (hoplon {:optimizations :advanced}))
