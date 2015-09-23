(ns util
  (:import org.python.util.PythonInterpreter)
  (:require [markdown.core          :as md]
            [pl.danieljanus.tagsoup :as ts]))

(defn pygmentize [file-ext code]
  (try
    (-> (doto (PythonInterpreter.)
          (.set  "code" code)
          (.set  "file" (str "test." file-ext))
          (.exec "from pygments import highlight\n")
          (.exec "from pygments.lexers import guess_lexer_for_filename\n")
          (.exec "from pygments.formatters import HtmlFormatter\n")
          (.exec "lex = guess_lexer_for_filename(file, code)\n")
          (.exec "fmt = HtmlFormatter()\n")
          (.exec "result = highlight(code, lex, fmt)"))
        (.get "result" java.lang.String))
    (catch Throwable t
      (throw (ex-info "pygments exception" {:file-ext file-ext :code code} t)))))

(defn html->hoplon
  [[tag attrs & content]]
  `(~(symbol (name tag)) ~attrs
    ~@(map #(if (string? %) % (html->hoplon %)) content)))

(defn parse-string [s]
  (-> (ts/parse-string s :strip-whitespace false)
      (get-in [2 2])))

(defmacro md
  ([s] `(md ~'span ~s))
  ([wrapper-sym s]
    (-> s
        md/md-to-html-string
        parse-string
        html->hoplon
        ((fn [[_ & kids]] `(~wrapper-sym ~@kids))))))

(defmacro highlight [file-ext code]
  (-> (pygmentize (name file-ext) code)
      parse-string
      html->hoplon))
