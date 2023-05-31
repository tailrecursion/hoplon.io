(ns hoplon-home.page
  (:require
    [hoplon.core :as h]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= dosync]]))

(defn highlight [& content]
  (h/pre (h/code :class "language-clojure" content)))

(def +nav-links+
  (mapv
    (fn [[url title]] (h/a :href url title))
    [["http://clojurians.net/" "Slack"]
     ["https://github.com/hoplon/hoplon/wiki" "Wiki"]
     ["https://github.com/hoplon" "Code"]]))

(defn javelin-link
  []
  (h/a :href "https://github.com/hoplon/javelin" "Javelin"))

(defn |
  "Create deep nested elements following a regular attribute pattern.

  (| div :class [\"foo\" \"bar\" \"baz\"] (p \"Hello\"))

  is analagous to:

  (div :class \"foo\"
    (div :class \"bar\"
      (div :class \"baz\"
        (p \"Hello\"))))"
  [elem-ctor attr-kw attr-vals & kids]
  (let [[inner & outers] (reverse attr-vals)]
    (reduce #(elem-ctor attr-kw %2 %1) (elem-ctor attr-kw inner kids) outers)))

(defn loud [& children]
  (h/div :css {:text-transform "uppercase"}
    children))

(h/defelem timer [attrs _children]
  (let [start   (or (:start attrs) 0)
        seconds (cell start)]
    (.setInterval js/window #(swap! seconds inc) 1000)
    (h/div attrs (cell= (str "Seconds Elapsed: " seconds)))))

(h/defelem todo-list [{:keys [title]} _]
  (let [todo-items (cell [])
        new-item   (cell "")]
    (h/div (h/h3 (or title "TODO"))
      (h/ul :style "margin-left: 20px;"
        (h/loop-tpl :bindings [todo todo-items]
          (h/li :style "list-style-type:disc;" todo)))
      (h/input :type "text"
        :value new-item
        :change #(reset! new-item @%))
      (h/button :click #(dosync
                          (swap! todo-items conj @new-item)
                          (reset! new-item ""))
        (h/text "Add #~{(inc (count todo-items))}")))))

(defn scroll-here []
  (let [marker "marker"]
    (js/jQuery #(set! (.-location js/window) (str "#" marker)))
    (h/a :name marker)))

(h/defelem index []
  (h/div :id "page" :class "page" :toggle (not h/prerendering?)
    (h/header
      (| h/div :class ["nav-mobile" "nav-mobile-content"] +nav-links+)
      (h/nav
        (| h/div :class ["ui-cols" "ui-col-10 ui-skip-1"]
          (h/div :class "header-logo"
            (h/a :href "/" :style "background-image: url(images/logos/hoplon-logo.png);"))
          (h/div :class "header-links" +nav-links+)
          (h/div :class "header-menu" (h/a :href "#menu"))))
      (| h/div :class ["header-promo" "ui-cols" "ui-col-10 ui-skip-1" "header-promo-content"]
        (h/div :class "header-promo-logo"
          (h/a :href "http://hoplon.io"
            (h/img :src "/images/logos/hoplon-logo.png"
              :alt "Hoplon, a ClojureScript Web Library")))
        (h/div :class "header-promo-text"
          (h/h1 "Hoplon")
          (h/h3 "ClojureScript Web Library")
          (h/p (h/a :href "https://github.com/hoplon/hoplon/wiki/Get-Started"
                 :class "ui-action ui-action-large"
                 "Get Started")))))
    (h/main :id "content"
      (| h/div :class ["post" "ui-cols" "ui-col-10 ui-skip-1" "post-body"]
        (h/div :class "promo"
          (h/div
            (h/h2 "A simple way to build for the Web")
            (h/p
              "Hoplon is a "
              (h/a :href "https://github.com/clojure/clojurescript" "ClojureScript")
              " library that paves over the web's idiosyncrasies and present a "
              "simpler way to design and build single-page web applications. "
              (h/a :href "https://github.com/hoplon/hoplon/wiki" "Learn more on our wiki"))))
        (h/div :class "features"
          (h/ul
            (h/li
              (h/img :alt "Custom Elements icon"
                :src "images/graphics/custom-elements.png")
              (h/p
                (h/strong "Custom HTML elements are regular functions")
                " and can be created and composed functionally with "
                (h/a :href "https://github.com/hoplon/hoplon/wiki/HLisp" "HLisp")))
            (h/li
              (h/img :alt "Spreadsheet Icon"
                :src "images/graphics/spreadsheet.png")
              (h/p
                (h/strong "Spreadsheet-like dataflow")
                " with the "
                (javelin-link)
                " ClojureScript library. Intuitively model reactive behavior"
                " using cells and formulas."))
            (h/li
              (h/img :alt "Backend Icon"
                :src "images/graphics/uncoupled.png")
              (h/p
                (h/strong "Interact with the server")
                " using whatever backend you want."))))

        (h/div :class "demos" :style "font-size: 0.9em;"
          (h/div
            (h/h4 "A simple custom element")
            (h/p
              "Elements and custom elements are regular functions. The function below, "
              (h/code "loud") ", accepts any number of " (h/code "children")". It "
              "constructs and returns a " (h/code "div") " containing the uppercased "
              (h/code "children") ".")
            (h/div :class "code-example"
              (h/div :class "code-container"
                (highlight
                  "(defn loud [& children]\n"
                     "  (h/div :css {:text-transform \"uppercase\"} children))\n"
                  "(loud \"Lisp Can Do It\")"))
              (h/div :class "code-result-container"
                (loud "Lisp Can Do It"))))
          (h/div :style "padding-top:20px; clear:both;"
            (h/h4 "A stateful custom element")
            (h/p
              "In this example, the `timer` function initializes a "
              (javelin-link)
              " input cell and schedules it for periodic update using "
              (h/code "window.setInterval") ". The text of the returned "
              (h/code "div") " is attached reactively to " (h/code"seconds")
              " through a formula cell created using " (h/code "cell=")".")
            (h/p (h/code "h/defelem") " is a convenience macro for creating functions "
              "that handle attribute arguments naturally.")
            (h/div :class "code-example"
            (h/div :class "code-container"
              (highlight
                "(h/defelem timer [attrs children]\n"
                "  (let [start   (or (:start attrs) 0)\n"
                "        seconds (cell start)]\n"
                "    (.setInterval js/window #(swap! seconds inc) 1000)\n"
                "    (h/div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n"
                "\n"
                ";; our first timer will start at 0 and count up\n"
                "(h/p (timer :style \"color: green;\" :start 0))\n"
                "\n"
                ";; start 3 more timers, each with different starting values\n"
                "(apply h/ol (map h/li (for [r (range 1 4)] (timer :start r))))"))
            (h/div :class "code-result-container"
              (h/p (timer :style "color: green;" :start 0))
              (apply h/ol (map h/li (for [r (range 1 4)] (timer :start r)))))))
          (h/div :style "padding-top:20px; clear:both;fd"
            (h/h4 "An application")
            (h/p
              "In this final example, " (h/code "todo-list") " is a function that returns "
              "an instance of a simple todo list application. The "
              "application responds to user input by updating input cell "
              "values when " (h/a :href "https://en.wikipedia.org/wiki/DOM_events" "DOM events") " occur.")
            (h/p
              "The " (h/code ":change") " event on the text input is attached to a
              function that updates the " (h/code "new-item") " input cell as keystrokes
              occur.")
            (h/p
              "The " (h/code ":click") " event on the button is attached to a function "
              "that appends the value of " (h/code "new-item") " to the end of "
              (h/code "todo-items") " inside a " (h/code "dosync") ". " (h/code "dosync")
              " is a transactional construct that suspends the propagation of new values "
              "through the cell graph while updating multiple cells.")
            (h/p
              (h/code "todo-items") " are rendered as " (h/code "li") " elements using the "
              (h/code "loop-tpl") " macro. " (h/code "loop-tpl") " efficiently maps "
              "dynamically-sized collections to DOM nodes.")
            (h/div :class "code-example"
            (h/div :class "code-container"
              (highlight
                "(h/defelem todo-list [{:keys [title]} _]\n"
                "  (let [todo-items (cell [])\n"
                "        new-item   (cell \"\")]\n"
                "    (h/div\n"
                "      (h/h3 (or title \"TODO\"))\n"
                "      (h/ul\n"
                "        (h/loop-tpl :bindings [todo todo-items]\n"
                "          (h/li todo)))\n"
                "    (h/input :type \"text\"\n"
                "             :value new-item\n"
                "             :change #(reset! new-item @%))\n"
                "    (h/button :click #(dosync\n"
                "                        (swap! todo-items conj @new-item)\n"
                "                        (reset! new-item \"\"))\n"
                "      (h/text \"Add #~{(inc (count todo-items))}\")))))\n"
                "\n"
                "(todo-list :title \"TODO List\")"))
            (h/div :class "code-result-container"
              (todo-list :title "TODO List")))))))
    (h/div :class "mention")
    (h/footer
      (h/div :class "ui-cols"
        (h/div :class "ui-col-10 ui-skip-1"
          (h/div :class "footer-links"
            (h/a :href "http://github.com/hoplon" :class "network github" "Github")
            (h/a :href "https://github.com/tailrecursion/hoplon.io" "Site Source"))
          (h/div :class "footer-privacy"
            (h/small "Copyright © 2015 "
              (h/a :href "http://tailrecursion.com/~alan/" "Alan Dipert") ", "
              (h/a :href "https://github.com/micha" "Micha Niskin") ", "
              (h/a :href "https://github.com/somegoodpixels" "Joshua Smith"))))))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (index)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
