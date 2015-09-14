// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__10299){
var vec__10300 = p__10299;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10300,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10300,(1),null);
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,title) : hoplon.core.a.call(null,cljs.core.cst$kw$href,url,title));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://hoplon.discoursehosting.net/","Discourse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://webchat.freenode.net/?channels=hoplon","IRC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://clojurians.net/","Slack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://github.com/hoplon/hoplon/wiki","Wiki"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://github.com/hoplon","Code"], null)], null));
/**
 * Create deep nested elements following a regular attribute pattern.
 * 
 * (>- div :class ["foo" "bar" "baz"] (p "Hello"))
 * 
 * is analagous to:
 * 
 * (div :class "foo"
 * (div :class "bar"
 * (div :class "baz"
 * (p "Hello"))))
 */
hoplon.app_pages._index_DOT_html._GT__ = (function hoplon$app_pages$_index_DOT_html$_GT__(){
var args__6066__auto__ = [];
var len__6059__auto___10306 = arguments.length;
var i__6060__auto___10307 = (0);
while(true){
if((i__6060__auto___10307 < len__6059__auto___10306)){
args__6066__auto__.push((arguments[i__6060__auto___10307]));

var G__10308 = (i__6060__auto___10307 + (1));
i__6060__auto___10307 = G__10308;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((3) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((3)),(0))):null);
return hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic = (function (elem_ctor,attr_kw,attr_vals,kids){
var vec__10305 = cljs.core.reverse(attr_vals);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10305,(0),null);
var outers = cljs.core.nthnext(vec__10305,(1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__10305,inner,outers){
return (function (p1__3330_SHARP_,p2__3329_SHARP_){
return (elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,p2__3329_SHARP_,p1__3330_SHARP_) : elem_ctor.call(null,attr_kw,p2__3329_SHARP_,p1__3330_SHARP_));
});})(vec__10305,inner,outers))
,(elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,inner,kids) : elem_ctor.call(null,attr_kw,inner,kids)),outers);
});

hoplon.app_pages._index_DOT_html._GT__.cljs$lang$maxFixedArity = (3);

hoplon.app_pages._index_DOT_html._GT__.cljs$lang$applyTo = (function (seq10301){
var G__10302 = cljs.core.first(seq10301);
var seq10301__$1 = cljs.core.next(seq10301);
var G__10303 = cljs.core.first(seq10301__$1);
var seq10301__$2 = cljs.core.next(seq10301__$1);
var G__10304 = cljs.core.first(seq10301__$2);
var seq10301__$3 = cljs.core.next(seq10301__$2);
return hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic(G__10302,G__10303,G__10304,seq10301__$3);
});
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__10309 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charset,"utf-8") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$charset,"utf-8"));
var G__10310 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0"));
var G__10311 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge"));
var G__10312 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Hoplon, a ClojureScript Web Framework") : hoplon.core.title.call(null,"Hoplon, a ClojureScript Web Framework"));
var G__10313 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework"));
var G__10314 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__10315 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__10316 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"/css/syntax.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"/css/syntax.css"));
var G__10317 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"/css/main.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"/css/main.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$9(G__10309,G__10310,G__10311,G__10312,G__10313,G__10314,G__10315,G__10316,G__10317) : hoplon.core.head.call(null,G__10309,G__10310,G__10311,G__10312,G__10313,G__10314,G__10315,G__10316,G__10317));
})(),(function (){var G__10832 = cljs.core.cst$kw$class;
var G__10833 = "home";
var G__10834 = (function (){var G__10866 = cljs.core.cst$kw$id;
var G__10867 = "page";
var G__10868 = cljs.core.cst$kw$class;
var G__10869 = "page";
var G__10870 = (function (){var G__10874 = hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-mobile","nav-mobile-content"], null),cljs.core.array_seq([hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_], 0));
var G__10875 = (function (){var G__10883 = hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(function (){var G__10884 = cljs.core.cst$kw$class;
var G__10885 = "header-logo";
var G__10886 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(/images/logos/hoplon-logo.png);","Adzerk") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(/images/logos/hoplon-logo.png);","Adzerk"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10884,G__10885,G__10886) : hoplon.core.div.call(null,G__10884,G__10885,G__10886));
})(),(hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_) : hoplon.core.div.call(null,cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_)),(function (){var G__10887 = cljs.core.cst$kw$class;
var G__10888 = "header-menu";
var G__10889 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$href,"#menu") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"#menu"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10887,G__10888,G__10889) : hoplon.core.div.call(null,G__10887,G__10888,G__10889));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$1(G__10883) : hoplon.core.nav.call(null,G__10883));
})();
var G__10876 = hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header-promo","ui-cols","ui-col-10 ui-skip-1","header-promo-content"], null),cljs.core.array_seq([(function (){var G__10893 = cljs.core.cst$kw$class;
var G__10894 = "header-promo-logo";
var G__10895 = (function (){var G__10896 = cljs.core.cst$kw$href;
var G__10897 = "http://hoplon.io";
var G__10898 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__10896,G__10897,G__10898) : hoplon.core.a.call(null,G__10896,G__10897,G__10898));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10893,G__10894,G__10895) : hoplon.core.div.call(null,G__10893,G__10894,G__10895));
})(),(function (){var G__10899 = cljs.core.cst$kw$class;
var G__10900 = "header-promo-text";
var G__10901 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Hoplon") : hoplon.core.h1.call(null,"Hoplon"));
var G__10902 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("ClojureScript Web Framework") : hoplon.core.h3.call(null,"ClojureScript Web Framework"));
var G__10903 = (function (){var G__10904 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started"));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__10904) : hoplon.core.p.call(null,G__10904));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__10899,G__10900,G__10901,G__10902,G__10903) : hoplon.core.div.call(null,G__10899,G__10900,G__10901,G__10902,G__10903));
})()], 0));
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$3(G__10874,G__10875,G__10876) : hoplon.core.header.call(null,G__10874,G__10875,G__10876));
})();
var G__10871 = (function (){var G__11033 = cljs.core.cst$kw$id;
var G__11034 = "content";
var G__11035 = hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post","ui-cols","ui-col-10 ui-skip-1","post-body"], null),cljs.core.array_seq([(function (){var G__11052 = cljs.core.cst$kw$class;
var G__11053 = "promo";
var G__11054 = (function (){var G__11055 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Clojure and ClojureScript, everywhere.") : hoplon.core.h2.call(null,"Clojure and ClojureScript, everywhere."));
var G__11056 = (function (){var G__11057 = cljs.core.PersistentArrayMap.EMPTY;
var G__11058 = "Hoplon is a set of ";
var G__11059 = (function (){var G__11065 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://clojure.org"], null);
var G__11066 = "Clojure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11065,G__11066) : hoplon.core.a.call(null,G__11065,G__11066));
})();
var G__11060 = " and ";
var G__11061 = (function (){var G__11067 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/clojure/clojurescript"], null);
var G__11068 = "ClojureScript";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11067,G__11068) : hoplon.core.a.call(null,G__11067,G__11068));
})();
var G__11062 = " libraries that pave over the web's idiosyncrasies and present a simpler way to design and build single-page web applications. ";
var G__11063 = (function (){var G__11069 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki"], null);
var G__11070 = "Learn more on our wiki";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11069,G__11070) : hoplon.core.a.call(null,G__11069,G__11070));
})();
var G__11064 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__11057,G__11058,G__11059,G__11060,G__11061,G__11062,G__11063,G__11064) : hoplon.core.p.call(null,G__11057,G__11058,G__11059,G__11060,G__11061,G__11062,G__11063,G__11064));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__11055,G__11056) : hoplon.core.div.call(null,G__11055,G__11056));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11052,G__11053,G__11054) : hoplon.core.div.call(null,G__11052,G__11053,G__11054));
})(),(function (){var G__11116 = cljs.core.cst$kw$class;
var G__11117 = "features";
var G__11118 = (function (){var G__11129 = (function (){var G__11132 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"/images/graphics/custom-elements.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"/images/graphics/custom-elements.png"));
var G__11133 = (function (){var G__11134 = cljs.core.PersistentArrayMap.EMPTY;
var G__11135 = (function (){var G__11138 = cljs.core.PersistentArrayMap.EMPTY;
var G__11139 = "Custom HTML elements are regular functions";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__11138,G__11139) : hoplon.core.strong.call(null,G__11138,G__11139));
})();
var G__11136 = " and can be created and composed functionally with ";
var G__11137 = (function (){var G__11140 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/HLisp"], null);
var G__11141 = "HLisp";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11140,G__11141) : hoplon.core.a.call(null,G__11140,G__11141));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(G__11134,G__11135,G__11136,G__11137) : hoplon.core.span.call(null,G__11134,G__11135,G__11136,G__11137));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__11132,G__11133) : hoplon.core.li.call(null,G__11132,G__11133));
})();
var G__11130 = (function (){var G__11142 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"/images/graphics/spreadsheet.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"/images/graphics/spreadsheet.png"));
var G__11143 = (function (){var G__11144 = cljs.core.PersistentArrayMap.EMPTY;
var G__11145 = (function (){var G__11149 = cljs.core.PersistentArrayMap.EMPTY;
var G__11150 = "Spreadsheet-like dataflow";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__11149,G__11150) : hoplon.core.strong.call(null,G__11149,G__11150));
})();
var G__11146 = " with the ";
var G__11147 = (function (){var G__11151 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__11152 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11151,G__11152) : hoplon.core.a.call(null,G__11151,G__11152));
})();
var G__11148 = " ClojureScript library. Intuitively model reactive behavior using cells and formulas.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__11144,G__11145,G__11146,G__11147,G__11148) : hoplon.core.span.call(null,G__11144,G__11145,G__11146,G__11147,G__11148));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__11142,G__11143) : hoplon.core.li.call(null,G__11142,G__11143));
})();
var G__11131 = (function (){var G__11153 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"/images/graphics/uncoupled.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"/images/graphics/uncoupled.png"));
var G__11154 = (function (){var G__11155 = cljs.core.PersistentArrayMap.EMPTY;
var G__11156 = (function (){var G__11160 = cljs.core.PersistentArrayMap.EMPTY;
var G__11161 = "Interact with the server";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__11160,G__11161) : hoplon.core.strong.call(null,G__11160,G__11161));
})();
var G__11157 = " with the ";
var G__11158 = (function (){var G__11162 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/castra"], null);
var G__11163 = "Castra";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11162,G__11163) : hoplon.core.a.call(null,G__11162,G__11163));
})();
var G__11159 = " Clojure and ClojureScript library. Define functions on the server, call them from the client.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__11155,G__11156,G__11157,G__11158,G__11159) : hoplon.core.span.call(null,G__11155,G__11156,G__11157,G__11158,G__11159));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__11153,G__11154) : hoplon.core.li.call(null,G__11153,G__11154));
})();
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__11129,G__11130,G__11131) : hoplon.core.ul.call(null,G__11129,G__11130,G__11131));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11116,G__11117,G__11118) : hoplon.core.div.call(null,G__11116,G__11117,G__11118));
})()], 0));
return (hoplon.core.main.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.main.cljs$core$IFn$_invoke$arity$3(G__11033,G__11034,G__11035) : hoplon.core.main.call(null,G__11033,G__11034,G__11035));
})();
var G__10872 = hoplon.app_pages._index_DOT_html._GT__.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mention","ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk")),(function (){var G__11164 = cljs.core.PersistentArrayMap.EMPTY;
var G__11165 = (function (){var G__11168 = cljs.core.PersistentArrayMap.EMPTY;
var G__11169 = "Made at ";
var G__11170 = (function (){var G__11171 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__11172 = "Adzerk";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11171,G__11172) : hoplon.core.a.call(null,G__11171,G__11172));
})();
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$3(G__11168,G__11169,G__11170) : hoplon.core.strong.call(null,G__11168,G__11169,G__11170));
})();
var G__11166 = " | ";
var G__11167 = (function (){var G__11173 = cljs.core.PersistentArrayMap.EMPTY;
var G__11174 = (function (){var G__11176 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__11177 = "Ad serving infrastructure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11176,G__11177) : hoplon.core.a.call(null,G__11176,G__11177));
})();
var G__11175 = " for awesome companies";
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__11173,G__11174,G__11175) : hoplon.core.em.call(null,G__11173,G__11174,G__11175));
})();
return (hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4(G__11164,G__11165,G__11166,G__11167) : hoplon.core.blockquote.call(null,G__11164,G__11165,G__11166,G__11167));
})()], 0));
var G__10873 = (function (){var G__11263 = (function (){var G__11305 = cljs.core.cst$kw$class;
var G__11306 = "ui-cols";
var G__11307 = (function (){var G__11312 = cljs.core.cst$kw$class;
var G__11313 = "ui-col-10 ui-skip-1";
var G__11314 = (function (){var G__11316 = cljs.core.cst$kw$class;
var G__11317 = "footer-links";
var G__11318 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github"));
var G__11319 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon.github.io","Site Source") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon.github.io","Site Source"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__11316,G__11317,G__11318,G__11319) : hoplon.core.div.call(null,G__11316,G__11317,G__11318,G__11319));
})();
var G__11315 = (function (){var G__11333 = cljs.core.cst$kw$class;
var G__11334 = "footer-privacy";
var G__11335 = (function (){var G__11336 = cljs.core.PersistentArrayMap.EMPTY;
var G__11337 = "Copyright \u00A9 2015 ";
var G__11338 = (function (){var G__11343 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://tailrecursion.com/~alan/"], null);
var G__11344 = "Alan Dipert";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11343,G__11344) : hoplon.core.a.call(null,G__11343,G__11344));
})();
var G__11339 = ", ";
var G__11340 = (function (){var G__11345 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/micha"], null);
var G__11346 = "Micha Niskin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11345,G__11346) : hoplon.core.a.call(null,G__11345,G__11346));
})();
var G__11341 = ", ";
var G__11342 = (function (){var G__11347 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/somegoodpixels"], null);
var G__11348 = "Joshua Smith";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__11347,G__11348) : hoplon.core.a.call(null,G__11347,G__11348));
})();
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$7(G__11336,G__11337,G__11338,G__11339,G__11340,G__11341,G__11342) : hoplon.core.small.call(null,G__11336,G__11337,G__11338,G__11339,G__11340,G__11341,G__11342));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11333,G__11334,G__11335) : hoplon.core.div.call(null,G__11333,G__11334,G__11335));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__11312,G__11313,G__11314,G__11315) : hoplon.core.div.call(null,G__11312,G__11313,G__11314,G__11315));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11305,G__11306,G__11307) : hoplon.core.div.call(null,G__11305,G__11306,G__11307));
})();
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__11263) : hoplon.core.footer.call(null,G__11263));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__10866,G__10867,G__10868,G__10869,G__10870,G__10871,G__10872,G__10873) : hoplon.core.div.call(null,G__10866,G__10867,G__10868,G__10869,G__10870,G__10871,G__10872,G__10873));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__10832,G__10833,G__10834) : hoplon.core.body.call(null,G__10832,G__10833,G__10834));
})()], 0));
