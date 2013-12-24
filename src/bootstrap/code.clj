(ns bootstrap.code
  (:require
    [clojure.java.shell                     :refer [sh]]
    [clojure.string                         :refer [join]]
    [markdown.core                          :refer [md-to-html-string]]
    [tailrecursion.hoplon.compiler.tagsoup  :refer [parse-snip]]))

(create-ns 'tailrecursion.hoplon)

(defn do-pygments [lexer body]
  (when (= 0 (:exit (sh "which" "pygmentize")))
    (-> (sh "pygmentize" "-l" lexer "-f" "html" :in body)
        :out parse-snip)))

(defn do-highlight [lexer body]
  (or (and (not= "none" lexer) (do-pygments lexer body))
      `(tailrecursion.hoplon/pre (tailrecursion.hoplon/code ~body))))

(defn do-markdown [body]
  (parse-snip (str "<div>" (md-to-html-string body) "</div>")))

(defmacro highlight [lang body]
  (do-highlight (name lang) body))

(defmacro markdown [body]
  (do-markdown body))
