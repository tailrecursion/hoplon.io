(ns util
  (:require [markdown.core    :as md]
            [clojure.data.xml :as xml]))

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
