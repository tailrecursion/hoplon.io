(ns util
  (:import org.python.util.PythonInterpreter)
  (:require [markdown.core    :as md]
            [clojure.data.xml :as xml]))

(defn pygmentize [file-ext code]
  (try
    (-> (doto (PythonInterpreter.)
          (.set  "code" code)
          (.set  "file" (str "test." file-ext))
          (.exec "from pygments import highlight\n")
          (.exec "from pygments.lexers import guess_lexer_for_filename\n")
          (.exec "from pygments.formatters import HtmlFormatter\n")
          (.exec "lex = guess_lexer_for_filename(file, code)\n")
          (.exec "fmt = HtmlFormatter(noclasses=True)\n")
          (.exec "result = highlight(code, lex, fmt)"))
        (.get "result" java.lang.String))
    (catch Throwable t
      (throw (ex-info "pygments exception" {:file-ext file-ext :code code} t)))))

(defn xml->hoplon
  [{:keys [tag attrs content] :as elem}]
  `(~(symbol (name tag)) ~attrs
    ~@(map #(if (string? %) % (xml->hoplon %)) content)))

(defmacro md
  ([s] `(md ~'span ~s))
  ([wrapper-sym s]
   (->> s
        md/md-to-html-string
        xml/parse-str
        xml->hoplon
        ((fn [[_ & kids]] `(~wrapper-sym ~@kids))))))

(defmacro highlight [file-ext code]
  (->> (pygmentize (name file-ext) code)
       xml/parse-str
       xml->hoplon))
