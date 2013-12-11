(ns bootstrap.code
  (:require
    [clojure.java.shell                     :refer [sh]]
    [clojure.string                         :refer [join]]
    [tailrecursion.hoplon.compiler.tagsoup  :refer [parse-snip]]))

(create-ns 'tailrecursion.hoplon)

(defn do-pygments [lexer body]
  (when (= 0 (:exit (sh "which" "pygmentize")))
    (-> (sh "pygmentize" "-l" lexer "-f" "html" :in body)
        :out parse-snip)))

(defn do-highlight [lexer body]
  (or (and (not= "none" lexer) (do-pygments lexer body))
      `(tailrecursion.hoplon/pre (tailrecursion.hoplon/code ~body))))

(defmacro highlight
  [lang body]
  (do-highlight (name lang) body))

(defmacro clj   [body] (do-highlight "clj"  body))
(defmacro html  [body] (do-highlight "html" body))
(defmacro xml   [body] (do-highlight "xml"  body))
(defmacro bash  [body] (do-highlight "bash" body))

