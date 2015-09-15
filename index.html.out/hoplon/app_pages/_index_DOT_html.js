// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__11040){
var vec__11041 = p__11040;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(1),null);
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,title) : hoplon.core.a.call(null,cljs.core.cst$kw$href,url,title));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://hoplon.discoursehosting.net/","Discourse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://webchat.freenode.net/?channels=hoplon","IRC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://clojurians.net/","Slack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://github.com/hoplon/hoplon/wiki","Wiki"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://github.com/hoplon","Code"], null)], null));
/**
 * Create deep nested elements following a regular attribute pattern.
 * 
 * (| div :class ["foo" "bar" "baz"] (p "Hello"))
 * 
 * is analagous to:
 * 
 * (div :class "foo"
 * (div :class "bar"
 * (div :class "baz"
 * (p "Hello"))))
 */
hoplon.app_pages._index_DOT_html._BAR_ = (function hoplon$app_pages$_index_DOT_html$_BAR_(){
var args__6066__auto__ = [];
var len__6059__auto___11047 = arguments.length;
var i__6060__auto___11048 = (0);
while(true){
if((i__6060__auto___11048 < len__6059__auto___11047)){
args__6066__auto__.push((arguments[i__6060__auto___11048]));

var G__11049 = (i__6060__auto___11048 + (1));
i__6060__auto___11048 = G__11049;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((3) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((3)),(0))):null);
return hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_ctor,attr_kw,attr_vals,kids){
var vec__11046 = cljs.core.reverse(attr_vals);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(0),null);
var outers = cljs.core.nthnext(vec__11046,(1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__11046,inner,outers){
return (function (p1__3330_SHARP_,p2__3329_SHARP_){
return (elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,p2__3329_SHARP_,p1__3330_SHARP_) : elem_ctor.call(null,attr_kw,p2__3329_SHARP_,p1__3330_SHARP_));
});})(vec__11046,inner,outers))
,(elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,inner,kids) : elem_ctor.call(null,attr_kw,inner,kids)),outers);
});

hoplon.app_pages._index_DOT_html._BAR_.cljs$lang$maxFixedArity = (3);

hoplon.app_pages._index_DOT_html._BAR_.cljs$lang$applyTo = (function (seq11042){
var G__11043 = cljs.core.first(seq11042);
var seq11042__$1 = cljs.core.next(seq11042);
var G__11044 = cljs.core.first(seq11042__$1);
var seq11042__$2 = cljs.core.next(seq11042__$1);
var G__11045 = cljs.core.first(seq11042__$2);
var seq11042__$3 = cljs.core.next(seq11042__$2);
return hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(G__11043,G__11044,G__11045,seq11042__$3);
});
hoplon.app_pages._index_DOT_html.loud = (function hoplon$app_pages$_index_DOT_html$loud(){
var args__6066__auto__ = [];
var len__6059__auto___11051 = arguments.length;
var i__6060__auto___11052 = (0);
while(true){
if((i__6060__auto___11052 < len__6059__auto___11051)){
args__6066__auto__.push((arguments[i__6060__auto___11052]));

var G__11053 = (i__6060__auto___11052 + (1));
i__6060__auto___11052 = G__11053;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"text-transform:uppercase;",children) : hoplon.core.div.call(null,cljs.core.cst$kw$style,"text-transform:uppercase;",children));
});

hoplon.app_pages._index_DOT_html.loud.cljs$lang$maxFixedArity = (0);

hoplon.app_pages._index_DOT_html.loud.cljs$lang$applyTo = (function (seq11050){
return hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11050));
});
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.timer = (function() { 
var hoplon$app_pages$_index_DOT_html$timer__delegate = function (args__8349__auto__){
var vec__11059 = hoplon.core.parse_args(args__8349__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,(1),null);
var seconds = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
window.setInterval(((function (seconds,vec__11059,attrs,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);
});})(seconds,vec__11059,attrs,children))
,(1000));

var G__11061 = attrs;
var G__11062 = javelin.core.formula(((function (G__11061,seconds,vec__11059,attrs,children){
return (function (G__11063){
return [cljs.core.str("Seconds Elapsed: "),cljs.core.str(G__11063)].join('');
});})(G__11061,seconds,vec__11059,attrs,children))
).call(null,seconds);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__11061,G__11062) : hoplon.core.div.call(null,G__11061,G__11062));
};
var hoplon$app_pages$_index_DOT_html$timer = function (var_args){
var args__8349__auto__ = null;
if (arguments.length > 0) {
var G__11064__i = 0, G__11064__a = new Array(arguments.length -  0);
while (G__11064__i < G__11064__a.length) {G__11064__a[G__11064__i] = arguments[G__11064__i + 0]; ++G__11064__i;}
  args__8349__auto__ = new cljs.core.IndexedSeq(G__11064__a,0);
} 
return hoplon$app_pages$_index_DOT_html$timer__delegate.call(this,args__8349__auto__);};
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$applyTo = (function (arglist__11065){
var args__8349__auto__ = cljs.core.seq(arglist__11065);
return hoplon$app_pages$_index_DOT_html$timer__delegate(args__8349__auto__);
});
hoplon$app_pages$_index_DOT_html$timer.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$timer__delegate;
return hoplon$app_pages$_index_DOT_html$timer;
})()
;
hoplon.app_pages._index_DOT_html.todo_list = (function hoplon$app_pages$_index_DOT_html$todo_list(){
var todo_items = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_item = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__11091 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("TODO") : hoplon.core.h3.call(null,"TODO"));
var G__11092 = (function (){var G__11096 = cljs.core.cst$kw$style;
var G__11097 = "margin-left: 20px;";
var G__11098 = hoplon.core.loop_tpl_STAR_(todo_items,((function (G__11096,G__11097,G__11091,todo_items,new_item){
return (function (item__8389__auto__){
var vec__11099 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__11096,G__11097,G__11091,todo_items,new_item){
return (function (todo){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo], null);
});})(G__11096,G__11097,G__11091,todo_items,new_item))
).call(null,item__8389__auto__));
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11099,(0),null);
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"list-style-type:disc;",todo) : hoplon.core.li.call(null,cljs.core.cst$kw$style,"list-style-type:disc;",todo));
});})(G__11096,G__11097,G__11091,todo_items,new_item))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__11096,G__11097,G__11098) : hoplon.core.ul.call(null,G__11096,G__11097,G__11098));
})();
var G__11093 = (function (){var G__11102 = cljs.core.cst$kw$type;
var G__11103 = "text";
var G__11104 = cljs.core.cst$kw$value;
var G__11105 = new_item;
var G__11106 = cljs.core.cst$kw$change;
var G__11107 = ((function (G__11102,G__11103,G__11104,G__11105,G__11106,G__11091,G__11092,todo_items,new_item){
return (function (p1__3331_SHARP_){
var G__11108 = new_item;
var G__11109 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__3331_SHARP_) : cljs.core.deref.call(null,p1__3331_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11108,G__11109) : cljs.core.reset_BANG_.call(null,G__11108,G__11109));
});})(G__11102,G__11103,G__11104,G__11105,G__11106,G__11091,G__11092,todo_items,new_item))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__11102,G__11103,G__11104,G__11105,G__11106,G__11107) : hoplon.core.input.call(null,G__11102,G__11103,G__11104,G__11105,G__11106,G__11107));
})();
var G__11094 = (function (){var G__11110 = cljs.core.cst$kw$click;
var G__11111 = ((function (G__11110,G__11091,G__11092,G__11093,todo_items,new_item){
return (function (){
return javelin.core.dosync_STAR_(((function (G__11110,G__11091,G__11092,G__11093,todo_items,new_item){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo_items,cljs.core.conj,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_item) : cljs.core.deref.call(null,new_item)));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(new_item,"") : cljs.core.reset_BANG_.call(null,new_item,""));
});})(G__11110,G__11091,G__11092,G__11093,todo_items,new_item))
);
});})(G__11110,G__11091,G__11092,G__11093,todo_items,new_item))
;
var G__11112 = (function (){var t__8410__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8410__auto__,G__11110,G__11111,G__11091,G__11092,G__11093,todo_items,new_item){
return (function (G__11113,G__11114,G__11115){
return G__11113.nodeValue = [cljs.core.str("Add #"),cljs.core.str(((G__11114.cljs$core$IFn$_invoke$arity$1 ? G__11114.cljs$core$IFn$_invoke$arity$1(G__11115) : G__11114.call(null,G__11115)) + (1)))].join('');
});})(t__8410__auto__,G__11110,G__11111,G__11091,G__11092,G__11093,todo_items,new_item))
).call(null,t__8410__auto__,cljs.core.count,todo_items);

return t__8410__auto__;
})();
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11110,G__11111,G__11112) : hoplon.core.button.call(null,G__11110,G__11111,G__11112));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__11091,G__11092,G__11093,G__11094) : hoplon.core.div.call(null,G__11091,G__11092,G__11093,G__11094));
});
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11116 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charset,"utf-8") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$charset,"utf-8"));
var G__11117 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0"));
var G__11118 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge"));
var G__11119 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Hoplon, a ClojureScript Web Framework") : hoplon.core.title.call(null,"Hoplon, a ClojureScript Web Framework"));
var G__11120 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework"));
var G__11121 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__11122 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__11123 = (hoplon.core.style.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.style.cljs$core$IFn$_invoke$arity$1("body{display:none;}") : hoplon.core.style.call(null,"body{display:none;}"));
var G__11124 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/syntax.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/syntax.css"));
var G__11125 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/main.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/main.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$10(G__11116,G__11117,G__11118,G__11119,G__11120,G__11121,G__11122,G__11123,G__11124,G__11125) : hoplon.core.head.call(null,G__11116,G__11117,G__11118,G__11119,G__11120,G__11121,G__11122,G__11123,G__11124,G__11125));
})(),(function (){var G__11976 = cljs.core.cst$kw$class;
var G__11977 = "home";
var G__11978 = (function (){var G__12010 = cljs.core.cst$kw$id;
var G__12011 = "page";
var G__12012 = cljs.core.cst$kw$class;
var G__12013 = "page";
var G__12014 = (function (){var G__12018 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-mobile","nav-mobile-content"], null),cljs.core.array_seq([hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_], 0));
var G__12019 = (function (){var G__12027 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(function (){var G__12028 = cljs.core.cst$kw$class;
var G__12029 = "header-logo";
var G__12030 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(images/logos/hoplon-logo.png);","Adzerk") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(images/logos/hoplon-logo.png);","Adzerk"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12028,G__12029,G__12030) : hoplon.core.div.call(null,G__12028,G__12029,G__12030));
})(),(hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_) : hoplon.core.div.call(null,cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_)),(function (){var G__12031 = cljs.core.cst$kw$class;
var G__12032 = "header-menu";
var G__12033 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$href,"#menu") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"#menu"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12031,G__12032,G__12033) : hoplon.core.div.call(null,G__12031,G__12032,G__12033));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$1(G__12027) : hoplon.core.nav.call(null,G__12027));
})();
var G__12020 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header-promo","ui-cols","ui-col-10 ui-skip-1","header-promo-content"], null),cljs.core.array_seq([(function (){var G__12037 = cljs.core.cst$kw$class;
var G__12038 = "header-promo-logo";
var G__12039 = (function (){var G__12040 = cljs.core.cst$kw$href;
var G__12041 = "http://hoplon.io";
var G__12042 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__12040,G__12041,G__12042) : hoplon.core.a.call(null,G__12040,G__12041,G__12042));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12037,G__12038,G__12039) : hoplon.core.div.call(null,G__12037,G__12038,G__12039));
})(),(function (){var G__12043 = cljs.core.cst$kw$class;
var G__12044 = "header-promo-text";
var G__12045 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Hoplon") : hoplon.core.h1.call(null,"Hoplon"));
var G__12046 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("ClojureScript Web Framework") : hoplon.core.h3.call(null,"ClojureScript Web Framework"));
var G__12047 = (function (){var G__12048 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started"));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__12048) : hoplon.core.p.call(null,G__12048));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12043,G__12044,G__12045,G__12046,G__12047) : hoplon.core.div.call(null,G__12043,G__12044,G__12045,G__12046,G__12047));
})()], 0));
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$3(G__12018,G__12019,G__12020) : hoplon.core.header.call(null,G__12018,G__12019,G__12020));
})();
var G__12015 = (function (){var G__12345 = cljs.core.cst$kw$id;
var G__12346 = "content";
var G__12347 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post","ui-cols","ui-col-10 ui-skip-1","post-body"], null),cljs.core.array_seq([(function (){var G__12364 = cljs.core.cst$kw$class;
var G__12365 = "promo";
var G__12366 = (function (){var G__12367 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Clojure and ClojureScript, everywhere.") : hoplon.core.h2.call(null,"Clojure and ClojureScript, everywhere."));
var G__12368 = (function (){var G__12369 = cljs.core.PersistentArrayMap.EMPTY;
var G__12370 = "Hoplon is a set of ";
var G__12371 = (function (){var G__12377 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://clojure.org"], null);
var G__12378 = "Clojure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12377,G__12378) : hoplon.core.a.call(null,G__12377,G__12378));
})();
var G__12372 = " and ";
var G__12373 = (function (){var G__12379 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/clojure/clojurescript"], null);
var G__12380 = "ClojureScript";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12379,G__12380) : hoplon.core.a.call(null,G__12379,G__12380));
})();
var G__12374 = " libraries that pave over the web's idiosyncrasies and present a simpler way to design and build single-page web applications. ";
var G__12375 = (function (){var G__12381 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki"], null);
var G__12382 = "Learn more on our wiki";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12381,G__12382) : hoplon.core.a.call(null,G__12381,G__12382));
})();
var G__12376 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12369,G__12370,G__12371,G__12372,G__12373,G__12374,G__12375,G__12376) : hoplon.core.p.call(null,G__12369,G__12370,G__12371,G__12372,G__12373,G__12374,G__12375,G__12376));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12367,G__12368) : hoplon.core.div.call(null,G__12367,G__12368));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12364,G__12365,G__12366) : hoplon.core.div.call(null,G__12364,G__12365,G__12366));
})(),(function (){var G__12428 = cljs.core.cst$kw$class;
var G__12429 = "features";
var G__12430 = (function (){var G__12441 = (function (){var G__12444 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"images/graphics/custom-elements.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"images/graphics/custom-elements.png"));
var G__12445 = (function (){var G__12446 = cljs.core.PersistentArrayMap.EMPTY;
var G__12447 = (function (){var G__12450 = cljs.core.PersistentArrayMap.EMPTY;
var G__12451 = "Custom HTML elements are regular functions";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12450,G__12451) : hoplon.core.strong.call(null,G__12450,G__12451));
})();
var G__12448 = " and can be created and composed functionally with ";
var G__12449 = (function (){var G__12452 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/HLisp"], null);
var G__12453 = "HLisp";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12452,G__12453) : hoplon.core.a.call(null,G__12452,G__12453));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(G__12446,G__12447,G__12448,G__12449) : hoplon.core.span.call(null,G__12446,G__12447,G__12448,G__12449));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12444,G__12445) : hoplon.core.li.call(null,G__12444,G__12445));
})();
var G__12442 = (function (){var G__12454 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"images/graphics/spreadsheet.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"images/graphics/spreadsheet.png"));
var G__12455 = (function (){var G__12456 = cljs.core.PersistentArrayMap.EMPTY;
var G__12457 = (function (){var G__12461 = cljs.core.PersistentArrayMap.EMPTY;
var G__12462 = "Spreadsheet-like dataflow";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12461,G__12462) : hoplon.core.strong.call(null,G__12461,G__12462));
})();
var G__12458 = " with the ";
var G__12459 = (function (){var G__12463 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__12464 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12463,G__12464) : hoplon.core.a.call(null,G__12463,G__12464));
})();
var G__12460 = " ClojureScript library. Intuitively model reactive behavior using cells and formulas.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__12456,G__12457,G__12458,G__12459,G__12460) : hoplon.core.span.call(null,G__12456,G__12457,G__12458,G__12459,G__12460));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12454,G__12455) : hoplon.core.li.call(null,G__12454,G__12455));
})();
var G__12443 = (function (){var G__12465 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"images/graphics/uncoupled.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"images/graphics/uncoupled.png"));
var G__12466 = (function (){var G__12467 = cljs.core.PersistentArrayMap.EMPTY;
var G__12468 = (function (){var G__12472 = cljs.core.PersistentArrayMap.EMPTY;
var G__12473 = "Interact with the server";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12472,G__12473) : hoplon.core.strong.call(null,G__12472,G__12473));
})();
var G__12469 = " with the ";
var G__12470 = (function (){var G__12474 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/castra"], null);
var G__12475 = "Castra";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12474,G__12475) : hoplon.core.a.call(null,G__12474,G__12475));
})();
var G__12471 = " Clojure and ClojureScript library. Define functions on the server, call them from the client.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__12467,G__12468,G__12469,G__12470,G__12471) : hoplon.core.span.call(null,G__12467,G__12468,G__12469,G__12470,G__12471));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12465,G__12466) : hoplon.core.li.call(null,G__12465,G__12466));
})();
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__12441,G__12442,G__12443) : hoplon.core.ul.call(null,G__12441,G__12442,G__12443));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12428,G__12429,G__12430) : hoplon.core.div.call(null,G__12428,G__12429,G__12430));
})(),(function (){var G__12500 = cljs.core.cst$kw$class;
var G__12501 = "demos";
var G__12502 = cljs.core.cst$kw$style;
var G__12503 = "font-size: 0.9em;";
var G__12504 = (function (){var G__12507 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("A simple custom element") : hoplon.core.h4.call(null,"A simple custom element"));
var G__12508 = (function (){var G__12511 = cljs.core.PersistentArrayMap.EMPTY;
var G__12512 = "Elements and custom elements are regular functions. The function below, ";
var G__12513 = (function (){var G__12519 = cljs.core.PersistentArrayMap.EMPTY;
var G__12520 = "loud";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12519,G__12520) : hoplon.core.code.call(null,G__12519,G__12520));
})();
var G__12514 = ", accepts any number of children. It constructs and returns a ";
var G__12515 = (function (){var G__12521 = cljs.core.PersistentArrayMap.EMPTY;
var G__12522 = "div";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12521,G__12522) : hoplon.core.code.call(null,G__12521,G__12522));
})();
var G__12516 = " containing the uppercased ";
var G__12517 = (function (){var G__12523 = cljs.core.PersistentArrayMap.EMPTY;
var G__12524 = "children";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12523,G__12524) : hoplon.core.code.call(null,G__12523,G__12524));
})();
var G__12518 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12511,G__12512,G__12513,G__12514,G__12515,G__12516,G__12517,G__12518) : hoplon.core.p.call(null,G__12511,G__12512,G__12513,G__12514,G__12515,G__12516,G__12517,G__12518));
})();
var G__12509 = (function (){var G__12525 = cljs.core.cst$kw$style;
var G__12526 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12527 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defn loud [& children]\n  (div :style \"text-transform:uppercase\" children))\n\n(loud \"Lisp Can Do It\")") : hoplon.core.pre.call(null,"(defn loud [& children]\n  (div :style \"text-transform:uppercase\" children))\n\n(loud \"Lisp Can Do It\")"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12525,G__12526,G__12527) : hoplon.core.div.call(null,G__12525,G__12526,G__12527));
})();
var G__12510 = (function (){var G__12528 = cljs.core.cst$kw$style;
var G__12529 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12530 = hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Lisp Can Do It"], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12528,G__12529,G__12530) : hoplon.core.div.call(null,G__12528,G__12529,G__12530));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12507,G__12508,G__12509,G__12510) : hoplon.core.div.call(null,G__12507,G__12508,G__12509,G__12510));
})();
var G__12505 = (function (){var G__12531 = cljs.core.cst$kw$style;
var G__12532 = "padding-top:20px; clear:both;";
var G__12533 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("A stateful custom element") : hoplon.core.h4.call(null,"A stateful custom element"));
var G__12534 = (function (){var G__12538 = cljs.core.PersistentArrayMap.EMPTY;
var G__12539 = "In this example, the ";
var G__12540 = (function (){var G__12552 = cljs.core.PersistentArrayMap.EMPTY;
var G__12553 = "timer";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12552,G__12553) : hoplon.core.code.call(null,G__12552,G__12553));
})();
var G__12541 = " function initializes a ";
var G__12542 = (function (){var G__12554 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__12555 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12554,G__12555) : hoplon.core.a.call(null,G__12554,G__12555));
})();
var G__12543 = " input cell and schedules it for periodic update using ";
var G__12544 = (function (){var G__12556 = cljs.core.PersistentArrayMap.EMPTY;
var G__12557 = "window.setInterval";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12556,G__12557) : hoplon.core.code.call(null,G__12556,G__12557));
})();
var G__12545 = ". The text of the returned ";
var G__12546 = (function (){var G__12558 = cljs.core.PersistentArrayMap.EMPTY;
var G__12559 = "div";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12558,G__12559) : hoplon.core.code.call(null,G__12558,G__12559));
})();
var G__12547 = " is attached reactively to ";
var G__12548 = (function (){var G__12560 = cljs.core.PersistentArrayMap.EMPTY;
var G__12561 = "seconds";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12560,G__12561) : hoplon.core.code.call(null,G__12560,G__12561));
})();
var G__12549 = " through a formula cell created using  ";
var G__12550 = (function (){var G__12562 = cljs.core.PersistentArrayMap.EMPTY;
var G__12563 = "cell=";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12562,G__12563) : hoplon.core.code.call(null,G__12562,G__12563));
})();
var G__12551 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$14(G__12538,G__12539,G__12540,G__12541,G__12542,G__12543,G__12544,G__12545,G__12546,G__12547,G__12548,G__12549,G__12550,G__12551) : hoplon.core.p.call(null,G__12538,G__12539,G__12540,G__12541,G__12542,G__12543,G__12544,G__12545,G__12546,G__12547,G__12548,G__12549,G__12550,G__12551));
})();
var G__12535 = (function (){var G__12564 = cljs.core.PersistentArrayMap.EMPTY;
var G__12565 = (function (){var G__12567 = cljs.core.PersistentArrayMap.EMPTY;
var G__12568 = "defelem";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12567,G__12568) : hoplon.core.code.call(null,G__12567,G__12568));
})();
var G__12566 = " is a convenience macro for creating functions that handle attribute arguments naturally.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__12564,G__12565,G__12566) : hoplon.core.p.call(null,G__12564,G__12565,G__12566));
})();
var G__12536 = (function (){var G__12569 = cljs.core.cst$kw$style;
var G__12570 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12571 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defelem timer [attrs children]\n  (let [seconds (cell 0)]\n    (.setInterval js/window #(swap! seconds inc) 1000)\n    (div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n\n(p (timer :style \"color: green;\"))\n\n(apply ol (map li (repeatedly 3 timer)))") : hoplon.core.pre.call(null,"(defelem timer [attrs children]\n  (let [seconds (cell 0)]\n    (.setInterval js/window #(swap! seconds inc) 1000)\n    (div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n\n(p (timer :style \"color: green;\"))\n\n(apply ol (map li (repeatedly 3 timer)))"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12569,G__12570,G__12571) : hoplon.core.div.call(null,G__12569,G__12570,G__12571));
})();
var G__12537 = (function (){var G__12573 = cljs.core.cst$kw$style;
var G__12574 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12575 = (function (){var G__12577 = hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"color: green;"], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__12577) : hoplon.core.p.call(null,G__12577));
})();
var G__12576 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ol,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoplon.core.li,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),hoplon.app_pages._index_DOT_html.timer)));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12573,G__12574,G__12575,G__12576) : hoplon.core.div.call(null,G__12573,G__12574,G__12575,G__12576));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__12531,G__12532,G__12533,G__12534,G__12535,G__12536,G__12537) : hoplon.core.div.call(null,G__12531,G__12532,G__12533,G__12534,G__12535,G__12536,G__12537));
})();
var G__12506 = (function (){var G__12578 = cljs.core.cst$kw$style;
var G__12579 = "padding-top:20px; clear:both;fd";
var G__12580 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("An application") : hoplon.core.h4.call(null,"An application"));
var G__12581 = (function (){var G__12587 = cljs.core.PersistentArrayMap.EMPTY;
var G__12588 = "In this final example, we create a function, ";
var G__12589 = (function (){var G__12593 = cljs.core.PersistentArrayMap.EMPTY;
var G__12594 = "todo-list";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12593,G__12594) : hoplon.core.code.call(null,G__12593,G__12594));
})();
var G__12590 = ", that returns instances of a simple application. The application responds to user input by updating input cell values when ";
var G__12591 = (function (){var G__12595 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://en.wikipedia.org/wiki/DOM_events"], null);
var G__12596 = "DOM events";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12595,G__12596) : hoplon.core.a.call(null,G__12595,G__12596));
})();
var G__12592 = " occur.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$6(G__12587,G__12588,G__12589,G__12590,G__12591,G__12592) : hoplon.core.p.call(null,G__12587,G__12588,G__12589,G__12590,G__12591,G__12592));
})();
var G__12582 = (function (){var G__12597 = cljs.core.PersistentArrayMap.EMPTY;
var G__12598 = "The ";
var G__12599 = (function (){var G__12603 = cljs.core.PersistentArrayMap.EMPTY;
var G__12604 = ":change";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12603,G__12604) : hoplon.core.code.call(null,G__12603,G__12604));
})();
var G__12600 = " event on the text input is attached to a function that updates the ";
var G__12601 = (function (){var G__12605 = cljs.core.PersistentArrayMap.EMPTY;
var G__12606 = "new-item";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12605,G__12606) : hoplon.core.code.call(null,G__12605,G__12606));
})();
var G__12602 = " input cell as keystrokes occur.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$6(G__12597,G__12598,G__12599,G__12600,G__12601,G__12602) : hoplon.core.p.call(null,G__12597,G__12598,G__12599,G__12600,G__12601,G__12602));
})();
var G__12583 = (function (){var G__12607 = cljs.core.PersistentArrayMap.EMPTY;
var G__12608 = "The ";
var G__12609 = (function (){var G__12615 = cljs.core.PersistentArrayMap.EMPTY;
var G__12616 = ":click";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12615,G__12616) : hoplon.core.code.call(null,G__12615,G__12616));
})();
var G__12610 = " event on the button is attached to a function that transactionally moves the value of ";
var G__12611 = (function (){var G__12617 = cljs.core.PersistentArrayMap.EMPTY;
var G__12618 = "new-item";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12617,G__12618) : hoplon.core.code.call(null,G__12617,G__12618));
})();
var G__12612 = " to the end of the ";
var G__12613 = (function (){var G__12619 = cljs.core.PersistentArrayMap.EMPTY;
var G__12620 = "todo-items";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12619,G__12620) : hoplon.core.code.call(null,G__12619,G__12620));
})();
var G__12614 = " vector.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12607,G__12608,G__12609,G__12610,G__12611,G__12612,G__12613,G__12614) : hoplon.core.p.call(null,G__12607,G__12608,G__12609,G__12610,G__12611,G__12612,G__12613,G__12614));
})();
var G__12584 = (function (){var G__12621 = cljs.core.PersistentArrayMap.EMPTY;
var G__12622 = (function (){var G__12630 = cljs.core.PersistentArrayMap.EMPTY;
var G__12631 = "todo-items";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12630,G__12631) : hoplon.core.code.call(null,G__12630,G__12631));
})();
var G__12623 = " are rendered as ";
var G__12624 = (function (){var G__12632 = cljs.core.PersistentArrayMap.EMPTY;
var G__12633 = "li";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12632,G__12633) : hoplon.core.code.call(null,G__12632,G__12633));
})();
var G__12625 = " elements using the ";
var G__12626 = (function (){var G__12634 = cljs.core.PersistentArrayMap.EMPTY;
var G__12635 = "loop-tpl";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12634,G__12635) : hoplon.core.code.call(null,G__12634,G__12635));
})();
var G__12627 = " macro. ";
var G__12628 = (function (){var G__12636 = cljs.core.PersistentArrayMap.EMPTY;
var G__12637 = "loop-tpl";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12636,G__12637) : hoplon.core.code.call(null,G__12636,G__12637));
})();
var G__12629 = " efficiently maps dynamically-sized collections to DOM nodes.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$9(G__12621,G__12622,G__12623,G__12624,G__12625,G__12626,G__12627,G__12628,G__12629) : hoplon.core.p.call(null,G__12621,G__12622,G__12623,G__12624,G__12625,G__12626,G__12627,G__12628,G__12629));
})();
var G__12585 = (function (){var G__12638 = cljs.core.cst$kw$style;
var G__12639 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12640 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defn todo-list []\n  (let [todo-items (cell [])\n        new-item   (cell \"\")]\n    (div\n      (h3 \"TODO\")\n      (ul\n        (loop-tpl :bindings [todo todo-items]\n          (li todo)))\n      (input\n        :type \"text\"\n        :value new-item\n        :change #(reset! new-item @%))\n      (button :click #(dosync\n                       (swap! todo-items conj @new-item)\n                       (reset! new-item \"\"))\n        (text \"Add #~{(inc (count todo-items))}\")))))") : hoplon.core.pre.call(null,"(defn todo-list []\n  (let [todo-items (cell [])\n        new-item   (cell \"\")]\n    (div\n      (h3 \"TODO\")\n      (ul\n        (loop-tpl :bindings [todo todo-items]\n          (li todo)))\n      (input\n        :type \"text\"\n        :value new-item\n        :change #(reset! new-item @%))\n      (button :click #(dosync\n                       (swap! todo-items conj @new-item)\n                       (reset! new-item \"\"))\n        (text \"Add #~{(inc (count todo-items))}\")))))"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12638,G__12639,G__12640) : hoplon.core.div.call(null,G__12638,G__12639,G__12640));
})();
var G__12586 = (function (){var G__12641 = cljs.core.cst$kw$style;
var G__12642 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12643 = hoplon.app_pages._index_DOT_html.todo_list();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12641,G__12642,G__12643) : hoplon.core.div.call(null,G__12641,G__12642,G__12643));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__12578,G__12579,G__12580,G__12581,G__12582,G__12583,G__12584,G__12585,G__12586) : hoplon.core.div.call(null,G__12578,G__12579,G__12580,G__12581,G__12582,G__12583,G__12584,G__12585,G__12586));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__12500,G__12501,G__12502,G__12503,G__12504,G__12505,G__12506) : hoplon.core.div.call(null,G__12500,G__12501,G__12502,G__12503,G__12504,G__12505,G__12506));
})()], 0));
return (hoplon.core.main.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.main.cljs$core$IFn$_invoke$arity$3(G__12345,G__12346,G__12347) : hoplon.core.main.call(null,G__12345,G__12346,G__12347));
})();
var G__12016 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mention","ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk")),(function (){var G__12644 = cljs.core.PersistentArrayMap.EMPTY;
var G__12645 = (function (){var G__12648 = cljs.core.PersistentArrayMap.EMPTY;
var G__12649 = "Made at ";
var G__12650 = (function (){var G__12651 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__12652 = "Adzerk";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12651,G__12652) : hoplon.core.a.call(null,G__12651,G__12652));
})();
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$3(G__12648,G__12649,G__12650) : hoplon.core.strong.call(null,G__12648,G__12649,G__12650));
})();
var G__12646 = " | ";
var G__12647 = (function (){var G__12653 = cljs.core.PersistentArrayMap.EMPTY;
var G__12654 = (function (){var G__12656 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__12657 = "Ad serving infrastructure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12656,G__12657) : hoplon.core.a.call(null,G__12656,G__12657));
})();
var G__12655 = " for awesome companies";
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__12653,G__12654,G__12655) : hoplon.core.em.call(null,G__12653,G__12654,G__12655));
})();
return (hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4(G__12644,G__12645,G__12646,G__12647) : hoplon.core.blockquote.call(null,G__12644,G__12645,G__12646,G__12647));
})()], 0));
var G__12017 = (function (){var G__12743 = (function (){var G__12785 = cljs.core.cst$kw$class;
var G__12786 = "ui-cols";
var G__12787 = (function (){var G__12792 = cljs.core.cst$kw$class;
var G__12793 = "ui-col-10 ui-skip-1";
var G__12794 = (function (){var G__12796 = cljs.core.cst$kw$class;
var G__12797 = "footer-links";
var G__12798 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github"));
var G__12799 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"https://github.com/tailrecursion/hoplon.io","Site Source") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/tailrecursion/hoplon.io","Site Source"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12796,G__12797,G__12798,G__12799) : hoplon.core.div.call(null,G__12796,G__12797,G__12798,G__12799));
})();
var G__12795 = (function (){var G__12813 = cljs.core.cst$kw$class;
var G__12814 = "footer-privacy";
var G__12815 = (function (){var G__12816 = cljs.core.PersistentArrayMap.EMPTY;
var G__12817 = "Copyright \u00A9 2015 ";
var G__12818 = (function (){var G__12823 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://tailrecursion.com/~alan/"], null);
var G__12824 = "Alan Dipert";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12823,G__12824) : hoplon.core.a.call(null,G__12823,G__12824));
})();
var G__12819 = ", ";
var G__12820 = (function (){var G__12825 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/micha"], null);
var G__12826 = "Micha Niskin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12825,G__12826) : hoplon.core.a.call(null,G__12825,G__12826));
})();
var G__12821 = ", ";
var G__12822 = (function (){var G__12827 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/somegoodpixels"], null);
var G__12828 = "Joshua Smith";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12827,G__12828) : hoplon.core.a.call(null,G__12827,G__12828));
})();
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$7(G__12816,G__12817,G__12818,G__12819,G__12820,G__12821,G__12822) : hoplon.core.small.call(null,G__12816,G__12817,G__12818,G__12819,G__12820,G__12821,G__12822));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12813,G__12814,G__12815) : hoplon.core.div.call(null,G__12813,G__12814,G__12815));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12792,G__12793,G__12794,G__12795) : hoplon.core.div.call(null,G__12792,G__12793,G__12794,G__12795));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12785,G__12786,G__12787) : hoplon.core.div.call(null,G__12785,G__12786,G__12787));
})();
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__12743) : hoplon.core.footer.call(null,G__12743));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__12010,G__12011,G__12012,G__12013,G__12014,G__12015,G__12016,G__12017) : hoplon.core.div.call(null,G__12010,G__12011,G__12012,G__12013,G__12014,G__12015,G__12016,G__12017));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__11976,G__11977,G__11978) : hoplon.core.body.call(null,G__11976,G__11977,G__11978));
})()], 0));
