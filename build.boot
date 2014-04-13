#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.3.1"

(set-env!
  :dependencies  '[[tailrecursion/boot.task   "2.1.2"]
                   [tailrecursion/hoplon      "5.7.0"]
                   [markdown-clj              "0.9.41"]
                   [tailrecursion/boot.ring   "0.1.0-SNAPSHOT"]
                   [org.clojure/clojurescript "0.0-2156"]]
  :src-paths     #{"src"}
  :out-path      "resources/public")

(add-sync! (get-env :out-path) #{"resources/assets"})

(require
  '[tailrecursion.boot.task   :refer :all]
  '[tailrecursion.boot.task.ring   :refer [dev-server]]
  '[tailrecursion.hoplon.boot :refer :all])

(deftask dev
  "Build hoplon.io for local development."
  []
  (comp (watch) (hoplon {:pretty-print  true
                         :prerender     false
                         :optimizations :whitespace}) (dev-server)))

(deftask prod
  "Build hoplon.io for production deployment."
  []
  (hoplon {:optimizations :advanced}))
