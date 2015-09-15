// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__11087){
var vec__11088 = p__11087;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11088,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11088,(1),null);
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
var len__6059__auto___11094 = arguments.length;
var i__6060__auto___11095 = (0);
while(true){
if((i__6060__auto___11095 < len__6059__auto___11094)){
args__6066__auto__.push((arguments[i__6060__auto___11095]));

var G__11096 = (i__6060__auto___11095 + (1));
i__6060__auto___11095 = G__11096;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((3) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((3)),(0))):null);
return hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_ctor,attr_kw,attr_vals,kids){
var vec__11093 = cljs.core.reverse(attr_vals);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11093,(0),null);
var outers = cljs.core.nthnext(vec__11093,(1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__11093,inner,outers){
return (function (p1__3330_SHARP_,p2__3329_SHARP_){
return (elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,p2__3329_SHARP_,p1__3330_SHARP_) : elem_ctor.call(null,attr_kw,p2__3329_SHARP_,p1__3330_SHARP_));
});})(vec__11093,inner,outers))
,(elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,inner,kids) : elem_ctor.call(null,attr_kw,inner,kids)),outers);
});

hoplon.app_pages._index_DOT_html._BAR_.cljs$lang$maxFixedArity = (3);

hoplon.app_pages._index_DOT_html._BAR_.cljs$lang$applyTo = (function (seq11089){
var G__11090 = cljs.core.first(seq11089);
var seq11089__$1 = cljs.core.next(seq11089);
var G__11091 = cljs.core.first(seq11089__$1);
var seq11089__$2 = cljs.core.next(seq11089__$1);
var G__11092 = cljs.core.first(seq11089__$2);
var seq11089__$3 = cljs.core.next(seq11089__$2);
return hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(G__11090,G__11091,G__11092,seq11089__$3);
});
hoplon.app_pages._index_DOT_html.loud = (function hoplon$app_pages$_index_DOT_html$loud(){
var args__6066__auto__ = [];
var len__6059__auto___11101 = arguments.length;
var i__6060__auto___11102 = (0);
while(true){
if((i__6060__auto___11102 < len__6059__auto___11101)){
args__6066__auto__.push((arguments[i__6060__auto___11102]));

var G__11103 = (i__6060__auto___11102 + (1));
i__6060__auto___11102 = G__11103;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__11098 = cljs.core.cst$kw$css;
var G__11099 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_transform,"uppercase"], null);
var G__11100 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11098,G__11099,G__11100) : hoplon.core.div.call(null,G__11098,G__11099,G__11100));
});

hoplon.app_pages._index_DOT_html.loud.cljs$lang$maxFixedArity = (0);

hoplon.app_pages._index_DOT_html.loud.cljs$lang$applyTo = (function (seq11097){
return hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11097));
});
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.timer = (function() { 
var hoplon$app_pages$_index_DOT_html$timer__delegate = function (args__8349__auto__){
var vec__11109 = hoplon.core.parse_args(args__8349__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109,(1),null);
var seconds = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
window.setInterval(((function (seconds,vec__11109,attrs,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);
});})(seconds,vec__11109,attrs,children))
,(1000));

var G__11111 = attrs;
var G__11112 = javelin.core.formula(((function (G__11111,seconds,vec__11109,attrs,children){
return (function (G__11113){
return [cljs.core.str("Seconds Elapsed: "),cljs.core.str(G__11113)].join('');
});})(G__11111,seconds,vec__11109,attrs,children))
).call(null,seconds);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__11111,G__11112) : hoplon.core.div.call(null,G__11111,G__11112));
};
var hoplon$app_pages$_index_DOT_html$timer = function (var_args){
var args__8349__auto__ = null;
if (arguments.length > 0) {
var G__11114__i = 0, G__11114__a = new Array(arguments.length -  0);
while (G__11114__i < G__11114__a.length) {G__11114__a[G__11114__i] = arguments[G__11114__i + 0]; ++G__11114__i;}
  args__8349__auto__ = new cljs.core.IndexedSeq(G__11114__a,0);
} 
return hoplon$app_pages$_index_DOT_html$timer__delegate.call(this,args__8349__auto__);};
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$applyTo = (function (arglist__11115){
var args__8349__auto__ = cljs.core.seq(arglist__11115);
return hoplon$app_pages$_index_DOT_html$timer__delegate(args__8349__auto__);
});
hoplon$app_pages$_index_DOT_html$timer.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$timer__delegate;
return hoplon$app_pages$_index_DOT_html$timer;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.todo_list = (function() { 
var hoplon$app_pages$_index_DOT_html$todo_list__delegate = function (args__8349__auto__){
var vec__11146 = hoplon.core.parse_args(args__8349__auto__);
var map__11147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11146,(0),null);
var map__11147__$1 = ((((!((map__11147 == null)))?((((map__11147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11147):map__11147);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11147__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11146,(1),null);
var todo_items = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_item = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__11150 = (function (){var G__11154 = (function (){var or__5020__auto__ = title;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return "TODO";
}
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1(G__11154) : hoplon.core.h3.call(null,G__11154));
})();
var G__11151 = (function (){var G__11156 = cljs.core.cst$kw$style;
var G__11157 = "margin-left: 20px;";
var G__11158 = hoplon.core.loop_tpl_STAR_(todo_items,((function (G__11156,G__11157,G__11150,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_){
return (function (item__8389__auto__){
var vec__11159 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__11156,G__11157,G__11150,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_){
return (function (todo){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo], null);
});})(G__11156,G__11157,G__11150,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_))
).call(null,item__8389__auto__));
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11159,(0),null);
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"list-style-type:disc;",todo) : hoplon.core.li.call(null,cljs.core.cst$kw$style,"list-style-type:disc;",todo));
});})(G__11156,G__11157,G__11150,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__11156,G__11157,G__11158) : hoplon.core.ul.call(null,G__11156,G__11157,G__11158));
})();
var G__11152 = (function (){var G__11162 = cljs.core.cst$kw$type;
var G__11163 = "text";
var G__11164 = cljs.core.cst$kw$value;
var G__11165 = new_item;
var G__11166 = cljs.core.cst$kw$change;
var G__11167 = ((function (G__11162,G__11163,G__11164,G__11165,G__11166,G__11150,G__11151,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_){
return (function (p1__3331_SHARP_){
var G__11168 = new_item;
var G__11169 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__3331_SHARP_) : cljs.core.deref.call(null,p1__3331_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11168,G__11169) : cljs.core.reset_BANG_.call(null,G__11168,G__11169));
});})(G__11162,G__11163,G__11164,G__11165,G__11166,G__11150,G__11151,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__11162,G__11163,G__11164,G__11165,G__11166,G__11167) : hoplon.core.input.call(null,G__11162,G__11163,G__11164,G__11165,G__11166,G__11167));
})();
var G__11153 = (function (){var G__11170 = cljs.core.cst$kw$click;
var G__11171 = ((function (G__11170,G__11150,G__11151,G__11152,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_){
return (function (){
return javelin.core.dosync_STAR_(((function (G__11170,G__11150,G__11151,G__11152,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo_items,cljs.core.conj,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_item) : cljs.core.deref.call(null,new_item)));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(new_item,"") : cljs.core.reset_BANG_.call(null,new_item,""));
});})(G__11170,G__11150,G__11151,G__11152,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_))
);
});})(G__11170,G__11150,G__11151,G__11152,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_))
;
var G__11172 = (function (){var t__8410__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8410__auto__,G__11170,G__11171,G__11150,G__11151,G__11152,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_){
return (function (G__11173,G__11174,G__11175){
return G__11173.nodeValue = [cljs.core.str("Add #"),cljs.core.str(((G__11174.cljs$core$IFn$_invoke$arity$1 ? G__11174.cljs$core$IFn$_invoke$arity$1(G__11175) : G__11174.call(null,G__11175)) + (1)))].join('');
});})(t__8410__auto__,G__11170,G__11171,G__11150,G__11151,G__11152,todo_items,new_item,vec__11146,map__11147,map__11147__$1,title,_))
).call(null,t__8410__auto__,cljs.core.count,todo_items);

return t__8410__auto__;
})();
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11170,G__11171,G__11172) : hoplon.core.button.call(null,G__11170,G__11171,G__11172));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__11150,G__11151,G__11152,G__11153) : hoplon.core.div.call(null,G__11150,G__11151,G__11152,G__11153));
};
var hoplon$app_pages$_index_DOT_html$todo_list = function (var_args){
var args__8349__auto__ = null;
if (arguments.length > 0) {
var G__11176__i = 0, G__11176__a = new Array(arguments.length -  0);
while (G__11176__i < G__11176__a.length) {G__11176__a[G__11176__i] = arguments[G__11176__i + 0]; ++G__11176__i;}
  args__8349__auto__ = new cljs.core.IndexedSeq(G__11176__a,0);
} 
return hoplon$app_pages$_index_DOT_html$todo_list__delegate.call(this,args__8349__auto__);};
hoplon$app_pages$_index_DOT_html$todo_list.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$todo_list.cljs$lang$applyTo = (function (arglist__11177){
var args__8349__auto__ = cljs.core.seq(arglist__11177);
return hoplon$app_pages$_index_DOT_html$todo_list__delegate(args__8349__auto__);
});
hoplon$app_pages$_index_DOT_html$todo_list.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$todo_list__delegate;
return hoplon$app_pages$_index_DOT_html$todo_list;
})()
;
hoplon.app_pages._index_DOT_html.scroll_here = (function hoplon$app_pages$_index_DOT_html$scroll_here(){
var marker = "marker";
var G__11179_11180 = ((function (marker){
return (function (){
return window.location = [cljs.core.str("#"),cljs.core.str(marker)].join('');
});})(marker))
;
jQuery(G__11179_11180);

return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,marker) : hoplon.core.a.call(null,cljs.core.cst$kw$name,marker));
});
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11181 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charset,"utf-8") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$charset,"utf-8"));
var G__11182 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0"));
var G__11183 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge"));
var G__11184 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Hoplon, a ClojureScript Web Framework") : hoplon.core.title.call(null,"Hoplon, a ClojureScript Web Framework"));
var G__11185 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework"));
var G__11186 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__11187 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__11188 = (hoplon.core.style.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.style.cljs$core$IFn$_invoke$arity$1("body{display:none;}") : hoplon.core.style.call(null,"body{display:none;}"));
var G__11189 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/syntax.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/syntax.css"));
var G__11190 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/main.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/main.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$10(G__11181,G__11182,G__11183,G__11184,G__11185,G__11186,G__11187,G__11188,G__11189,G__11190) : hoplon.core.head.call(null,G__11181,G__11182,G__11183,G__11184,G__11185,G__11186,G__11187,G__11188,G__11189,G__11190));
})(),(function (){var G__12057 = cljs.core.cst$kw$class;
var G__12058 = "home";
var G__12059 = (function (){var G__12091 = cljs.core.cst$kw$id;
var G__12092 = "page";
var G__12093 = cljs.core.cst$kw$class;
var G__12094 = "page";
var G__12095 = (function (){var G__12099 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-mobile","nav-mobile-content"], null),cljs.core.array_seq([hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_], 0));
var G__12100 = (function (){var G__12108 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(function (){var G__12109 = cljs.core.cst$kw$class;
var G__12110 = "header-logo";
var G__12111 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(images/logos/hoplon-logo.png);","Adzerk") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(images/logos/hoplon-logo.png);","Adzerk"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12109,G__12110,G__12111) : hoplon.core.div.call(null,G__12109,G__12110,G__12111));
})(),(hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_) : hoplon.core.div.call(null,cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_)),(function (){var G__12112 = cljs.core.cst$kw$class;
var G__12113 = "header-menu";
var G__12114 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$href,"#menu") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"#menu"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12112,G__12113,G__12114) : hoplon.core.div.call(null,G__12112,G__12113,G__12114));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$1(G__12108) : hoplon.core.nav.call(null,G__12108));
})();
var G__12101 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header-promo","ui-cols","ui-col-10 ui-skip-1","header-promo-content"], null),cljs.core.array_seq([(function (){var G__12118 = cljs.core.cst$kw$class;
var G__12119 = "header-promo-logo";
var G__12120 = (function (){var G__12121 = cljs.core.cst$kw$href;
var G__12122 = "http://hoplon.io";
var G__12123 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__12121,G__12122,G__12123) : hoplon.core.a.call(null,G__12121,G__12122,G__12123));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12118,G__12119,G__12120) : hoplon.core.div.call(null,G__12118,G__12119,G__12120));
})(),(function (){var G__12124 = cljs.core.cst$kw$class;
var G__12125 = "header-promo-text";
var G__12126 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Hoplon") : hoplon.core.h1.call(null,"Hoplon"));
var G__12127 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("ClojureScript Web Framework") : hoplon.core.h3.call(null,"ClojureScript Web Framework"));
var G__12128 = (function (){var G__12129 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started"));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__12129) : hoplon.core.p.call(null,G__12129));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12124,G__12125,G__12126,G__12127,G__12128) : hoplon.core.div.call(null,G__12124,G__12125,G__12126,G__12127,G__12128));
})()], 0));
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$3(G__12099,G__12100,G__12101) : hoplon.core.header.call(null,G__12099,G__12100,G__12101));
})();
var G__12096 = (function (){var G__12434 = cljs.core.cst$kw$id;
var G__12435 = "content";
var G__12436 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post","ui-cols","ui-col-10 ui-skip-1","post-body"], null),cljs.core.array_seq([(function (){var G__12453 = cljs.core.cst$kw$class;
var G__12454 = "promo";
var G__12455 = (function (){var G__12456 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Clojure and ClojureScript, everywhere.") : hoplon.core.h2.call(null,"Clojure and ClojureScript, everywhere."));
var G__12457 = (function (){var G__12458 = cljs.core.PersistentArrayMap.EMPTY;
var G__12459 = "Hoplon is a set of ";
var G__12460 = (function (){var G__12466 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://clojure.org"], null);
var G__12467 = "Clojure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12466,G__12467) : hoplon.core.a.call(null,G__12466,G__12467));
})();
var G__12461 = " and ";
var G__12462 = (function (){var G__12468 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/clojure/clojurescript"], null);
var G__12469 = "ClojureScript";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12468,G__12469) : hoplon.core.a.call(null,G__12468,G__12469));
})();
var G__12463 = " libraries that pave over the web's idiosyncrasies and present a simpler way to design and build single-page web applications. ";
var G__12464 = (function (){var G__12470 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki"], null);
var G__12471 = "Learn more on our wiki";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12470,G__12471) : hoplon.core.a.call(null,G__12470,G__12471));
})();
var G__12465 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12458,G__12459,G__12460,G__12461,G__12462,G__12463,G__12464,G__12465) : hoplon.core.p.call(null,G__12458,G__12459,G__12460,G__12461,G__12462,G__12463,G__12464,G__12465));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12456,G__12457) : hoplon.core.div.call(null,G__12456,G__12457));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12453,G__12454,G__12455) : hoplon.core.div.call(null,G__12453,G__12454,G__12455));
})(),(function (){var G__12517 = cljs.core.cst$kw$class;
var G__12518 = "features";
var G__12519 = (function (){var G__12530 = (function (){var G__12533 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"images/graphics/custom-elements.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"images/graphics/custom-elements.png"));
var G__12534 = (function (){var G__12535 = cljs.core.PersistentArrayMap.EMPTY;
var G__12536 = (function (){var G__12539 = cljs.core.PersistentArrayMap.EMPTY;
var G__12540 = "Custom HTML elements are regular functions";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12539,G__12540) : hoplon.core.strong.call(null,G__12539,G__12540));
})();
var G__12537 = " and can be created and composed functionally with ";
var G__12538 = (function (){var G__12541 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/HLisp"], null);
var G__12542 = "HLisp";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12541,G__12542) : hoplon.core.a.call(null,G__12541,G__12542));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(G__12535,G__12536,G__12537,G__12538) : hoplon.core.span.call(null,G__12535,G__12536,G__12537,G__12538));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12533,G__12534) : hoplon.core.li.call(null,G__12533,G__12534));
})();
var G__12531 = (function (){var G__12543 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"images/graphics/spreadsheet.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"images/graphics/spreadsheet.png"));
var G__12544 = (function (){var G__12545 = cljs.core.PersistentArrayMap.EMPTY;
var G__12546 = (function (){var G__12550 = cljs.core.PersistentArrayMap.EMPTY;
var G__12551 = "Spreadsheet-like dataflow";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12550,G__12551) : hoplon.core.strong.call(null,G__12550,G__12551));
})();
var G__12547 = " with the ";
var G__12548 = (function (){var G__12552 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__12553 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12552,G__12553) : hoplon.core.a.call(null,G__12552,G__12553));
})();
var G__12549 = " ClojureScript library. Intuitively model reactive behavior using cells and formulas.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__12545,G__12546,G__12547,G__12548,G__12549) : hoplon.core.span.call(null,G__12545,G__12546,G__12547,G__12548,G__12549));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12543,G__12544) : hoplon.core.li.call(null,G__12543,G__12544));
})();
var G__12532 = (function (){var G__12554 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"images/graphics/uncoupled.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"images/graphics/uncoupled.png"));
var G__12555 = (function (){var G__12556 = cljs.core.PersistentArrayMap.EMPTY;
var G__12557 = (function (){var G__12561 = cljs.core.PersistentArrayMap.EMPTY;
var G__12562 = "Interact with the server";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12561,G__12562) : hoplon.core.strong.call(null,G__12561,G__12562));
})();
var G__12558 = " with the ";
var G__12559 = (function (){var G__12563 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/castra"], null);
var G__12564 = "Castra";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12563,G__12564) : hoplon.core.a.call(null,G__12563,G__12564));
})();
var G__12560 = " Clojure and ClojureScript library. Define functions on the server, call them from the client.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__12556,G__12557,G__12558,G__12559,G__12560) : hoplon.core.span.call(null,G__12556,G__12557,G__12558,G__12559,G__12560));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12554,G__12555) : hoplon.core.li.call(null,G__12554,G__12555));
})();
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__12530,G__12531,G__12532) : hoplon.core.ul.call(null,G__12530,G__12531,G__12532));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12517,G__12518,G__12519) : hoplon.core.div.call(null,G__12517,G__12518,G__12519));
})(),(function (){var G__12589 = cljs.core.cst$kw$class;
var G__12590 = "demos";
var G__12591 = cljs.core.cst$kw$style;
var G__12592 = "font-size: 0.9em;";
var G__12593 = (function (){var G__12596 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("A simple custom element") : hoplon.core.h4.call(null,"A simple custom element"));
var G__12597 = (function (){var G__12600 = cljs.core.PersistentArrayMap.EMPTY;
var G__12601 = "Elements and custom elements are regular functions. The function below, ";
var G__12602 = (function (){var G__12608 = cljs.core.PersistentArrayMap.EMPTY;
var G__12609 = "loud";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12608,G__12609) : hoplon.core.code.call(null,G__12608,G__12609));
})();
var G__12603 = ", accepts any number of children. It constructs and returns a ";
var G__12604 = (function (){var G__12610 = cljs.core.PersistentArrayMap.EMPTY;
var G__12611 = "div";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12610,G__12611) : hoplon.core.code.call(null,G__12610,G__12611));
})();
var G__12605 = " containing the uppercased ";
var G__12606 = (function (){var G__12612 = cljs.core.PersistentArrayMap.EMPTY;
var G__12613 = "children";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12612,G__12613) : hoplon.core.code.call(null,G__12612,G__12613));
})();
var G__12607 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12600,G__12601,G__12602,G__12603,G__12604,G__12605,G__12606,G__12607) : hoplon.core.p.call(null,G__12600,G__12601,G__12602,G__12603,G__12604,G__12605,G__12606,G__12607));
})();
var G__12598 = (function (){var G__12614 = cljs.core.cst$kw$style;
var G__12615 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12616 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defn loud [& children]\n  (div :css {:text-transform \"uppercase\"} children))\n\n(loud \"Lisp Can Do It\")") : hoplon.core.pre.call(null,"(defn loud [& children]\n  (div :css {:text-transform \"uppercase\"} children))\n\n(loud \"Lisp Can Do It\")"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12614,G__12615,G__12616) : hoplon.core.div.call(null,G__12614,G__12615,G__12616));
})();
var G__12599 = (function (){var G__12617 = cljs.core.cst$kw$style;
var G__12618 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12619 = hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Lisp Can Do It"], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12617,G__12618,G__12619) : hoplon.core.div.call(null,G__12617,G__12618,G__12619));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12596,G__12597,G__12598,G__12599) : hoplon.core.div.call(null,G__12596,G__12597,G__12598,G__12599));
})();
var G__12594 = (function (){var G__12620 = cljs.core.cst$kw$style;
var G__12621 = "padding-top:20px; clear:both;";
var G__12622 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("A stateful custom element") : hoplon.core.h4.call(null,"A stateful custom element"));
var G__12623 = (function (){var G__12627 = cljs.core.PersistentArrayMap.EMPTY;
var G__12628 = "In this example, the ";
var G__12629 = (function (){var G__12641 = cljs.core.PersistentArrayMap.EMPTY;
var G__12642 = "timer";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12641,G__12642) : hoplon.core.code.call(null,G__12641,G__12642));
})();
var G__12630 = " function initializes a ";
var G__12631 = (function (){var G__12643 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__12644 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12643,G__12644) : hoplon.core.a.call(null,G__12643,G__12644));
})();
var G__12632 = " input cell and schedules it for periodic update using ";
var G__12633 = (function (){var G__12645 = cljs.core.PersistentArrayMap.EMPTY;
var G__12646 = "window.setInterval";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12645,G__12646) : hoplon.core.code.call(null,G__12645,G__12646));
})();
var G__12634 = ". The text of the returned ";
var G__12635 = (function (){var G__12647 = cljs.core.PersistentArrayMap.EMPTY;
var G__12648 = "div";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12647,G__12648) : hoplon.core.code.call(null,G__12647,G__12648));
})();
var G__12636 = " is attached reactively to ";
var G__12637 = (function (){var G__12649 = cljs.core.PersistentArrayMap.EMPTY;
var G__12650 = "seconds";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12649,G__12650) : hoplon.core.code.call(null,G__12649,G__12650));
})();
var G__12638 = " through a formula cell created using  ";
var G__12639 = (function (){var G__12651 = cljs.core.PersistentArrayMap.EMPTY;
var G__12652 = "cell=";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12651,G__12652) : hoplon.core.code.call(null,G__12651,G__12652));
})();
var G__12640 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$14(G__12627,G__12628,G__12629,G__12630,G__12631,G__12632,G__12633,G__12634,G__12635,G__12636,G__12637,G__12638,G__12639,G__12640) : hoplon.core.p.call(null,G__12627,G__12628,G__12629,G__12630,G__12631,G__12632,G__12633,G__12634,G__12635,G__12636,G__12637,G__12638,G__12639,G__12640));
})();
var G__12624 = (function (){var G__12653 = cljs.core.PersistentArrayMap.EMPTY;
var G__12654 = (function (){var G__12656 = cljs.core.PersistentArrayMap.EMPTY;
var G__12657 = "defelem";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12656,G__12657) : hoplon.core.code.call(null,G__12656,G__12657));
})();
var G__12655 = " is a convenience macro for creating functions that handle attribute arguments naturally.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__12653,G__12654,G__12655) : hoplon.core.p.call(null,G__12653,G__12654,G__12655));
})();
var G__12625 = (function (){var G__12658 = cljs.core.cst$kw$style;
var G__12659 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12660 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defelem timer [attrs children]\n  (let [seconds (cell 0)]\n    (.setInterval js/window #(swap! seconds inc) 1000)\n    (div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n\n(p (timer :style \"color: green;\"))\n\n(apply ol (map li (repeatedly 3 timer)))") : hoplon.core.pre.call(null,"(defelem timer [attrs children]\n  (let [seconds (cell 0)]\n    (.setInterval js/window #(swap! seconds inc) 1000)\n    (div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n\n(p (timer :style \"color: green;\"))\n\n(apply ol (map li (repeatedly 3 timer)))"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12658,G__12659,G__12660) : hoplon.core.div.call(null,G__12658,G__12659,G__12660));
})();
var G__12626 = (function (){var G__12662 = cljs.core.cst$kw$style;
var G__12663 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12664 = (function (){var G__12666 = hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"color: green;"], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__12666) : hoplon.core.p.call(null,G__12666));
})();
var G__12665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ol,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoplon.core.li,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),hoplon.app_pages._index_DOT_html.timer)));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12662,G__12663,G__12664,G__12665) : hoplon.core.div.call(null,G__12662,G__12663,G__12664,G__12665));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__12620,G__12621,G__12622,G__12623,G__12624,G__12625,G__12626) : hoplon.core.div.call(null,G__12620,G__12621,G__12622,G__12623,G__12624,G__12625,G__12626));
})();
var G__12595 = (function (){var G__12667 = cljs.core.cst$kw$style;
var G__12668 = "padding-top:20px; clear:both;fd";
var G__12669 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("An application") : hoplon.core.h4.call(null,"An application"));
var G__12670 = (function (){var G__12676 = cljs.core.PersistentArrayMap.EMPTY;
var G__12677 = "In this final example, ";
var G__12678 = (function (){var G__12682 = cljs.core.PersistentArrayMap.EMPTY;
var G__12683 = "todo-list";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12682,G__12683) : hoplon.core.code.call(null,G__12682,G__12683));
})();
var G__12679 = " is a function that returns an instance of a simple todo list application. The application responds to user input by updating input cell values when ";
var G__12680 = (function (){var G__12684 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://en.wikipedia.org/wiki/DOM_events"], null);
var G__12685 = "DOM events";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12684,G__12685) : hoplon.core.a.call(null,G__12684,G__12685));
})();
var G__12681 = " occur.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$6(G__12676,G__12677,G__12678,G__12679,G__12680,G__12681) : hoplon.core.p.call(null,G__12676,G__12677,G__12678,G__12679,G__12680,G__12681));
})();
var G__12671 = (function (){var G__12686 = cljs.core.PersistentArrayMap.EMPTY;
var G__12687 = "The ";
var G__12688 = (function (){var G__12692 = cljs.core.PersistentArrayMap.EMPTY;
var G__12693 = ":change";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12692,G__12693) : hoplon.core.code.call(null,G__12692,G__12693));
})();
var G__12689 = " event on the text input is attached to a function that updates the ";
var G__12690 = (function (){var G__12694 = cljs.core.PersistentArrayMap.EMPTY;
var G__12695 = "new-item";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12694,G__12695) : hoplon.core.code.call(null,G__12694,G__12695));
})();
var G__12691 = " input cell as keystrokes occur.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$6(G__12686,G__12687,G__12688,G__12689,G__12690,G__12691) : hoplon.core.p.call(null,G__12686,G__12687,G__12688,G__12689,G__12690,G__12691));
})();
var G__12672 = (function (){var G__12696 = cljs.core.PersistentArrayMap.EMPTY;
var G__12697 = "The ";
var G__12698 = (function (){var G__12708 = cljs.core.PersistentArrayMap.EMPTY;
var G__12709 = ":click";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12708,G__12709) : hoplon.core.code.call(null,G__12708,G__12709));
})();
var G__12699 = " event on the button is attached to a function that uses adds the value of ";
var G__12700 = (function (){var G__12710 = cljs.core.PersistentArrayMap.EMPTY;
var G__12711 = "new-item";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12710,G__12711) : hoplon.core.code.call(null,G__12710,G__12711));
})();
var G__12701 = " to the end of ";
var G__12702 = (function (){var G__12712 = cljs.core.PersistentArrayMap.EMPTY;
var G__12713 = "todo-items";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12712,G__12713) : hoplon.core.code.call(null,G__12712,G__12713));
})();
var G__12703 = " inside a ";
var G__12704 = (function (){var G__12714 = cljs.core.PersistentArrayMap.EMPTY;
var G__12715 = "dosync";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12714,G__12715) : hoplon.core.code.call(null,G__12714,G__12715));
})();
var G__12705 = ". ";
var G__12706 = (function (){var G__12716 = cljs.core.PersistentArrayMap.EMPTY;
var G__12717 = "dosync";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12716,G__12717) : hoplon.core.code.call(null,G__12716,G__12717));
})();
var G__12707 = " is a transactional construct that suspends the propagation of new values through the cell graph while updating multiple cells.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$12(G__12696,G__12697,G__12698,G__12699,G__12700,G__12701,G__12702,G__12703,G__12704,G__12705,G__12706,G__12707) : hoplon.core.p.call(null,G__12696,G__12697,G__12698,G__12699,G__12700,G__12701,G__12702,G__12703,G__12704,G__12705,G__12706,G__12707));
})();
var G__12673 = (function (){var G__12718 = cljs.core.PersistentArrayMap.EMPTY;
var G__12719 = (function (){var G__12727 = cljs.core.PersistentArrayMap.EMPTY;
var G__12728 = "todo-items";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12727,G__12728) : hoplon.core.code.call(null,G__12727,G__12728));
})();
var G__12720 = " are rendered as ";
var G__12721 = (function (){var G__12729 = cljs.core.PersistentArrayMap.EMPTY;
var G__12730 = "li";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12729,G__12730) : hoplon.core.code.call(null,G__12729,G__12730));
})();
var G__12722 = " elements using the ";
var G__12723 = (function (){var G__12731 = cljs.core.PersistentArrayMap.EMPTY;
var G__12732 = "loop-tpl";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12731,G__12732) : hoplon.core.code.call(null,G__12731,G__12732));
})();
var G__12724 = " macro. ";
var G__12725 = (function (){var G__12733 = cljs.core.PersistentArrayMap.EMPTY;
var G__12734 = "loop-tpl";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12733,G__12734) : hoplon.core.code.call(null,G__12733,G__12734));
})();
var G__12726 = " efficiently maps dynamically-sized collections to DOM nodes.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$9(G__12718,G__12719,G__12720,G__12721,G__12722,G__12723,G__12724,G__12725,G__12726) : hoplon.core.p.call(null,G__12718,G__12719,G__12720,G__12721,G__12722,G__12723,G__12724,G__12725,G__12726));
})();
var G__12674 = (function (){var G__12735 = cljs.core.cst$kw$style;
var G__12736 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12737 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defelem todo-list [{:keys [title]} _]\n  (let [todo-items (cell [])\n        new-item   (cell \"\")]\n    (div\n      (h3 (or title \"TODO\"))\n      (ul\n        (loop-tpl :bindings [todo todo-items]\n          (li todo)))\n      (input :type \"text\"\n             :value new-item\n             :change #(reset! new-item @%))\n      (button :click #(dosync\n                       (swap! todo-items conj @new-item)\n                       (reset! new-item \"\"))\n        (text \"Add #~{(inc (count todo-items))}\")))))\n\n(todo-list :title \"TODO List\")") : hoplon.core.pre.call(null,"(defelem todo-list [{:keys [title]} _]\n  (let [todo-items (cell [])\n        new-item   (cell \"\")]\n    (div\n      (h3 (or title \"TODO\"))\n      (ul\n        (loop-tpl :bindings [todo todo-items]\n          (li todo)))\n      (input :type \"text\"\n             :value new-item\n             :change #(reset! new-item @%))\n      (button :click #(dosync\n                       (swap! todo-items conj @new-item)\n                       (reset! new-item \"\"))\n        (text \"Add #~{(inc (count todo-items))}\")))))\n\n(todo-list :title \"TODO List\")"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12735,G__12736,G__12737) : hoplon.core.div.call(null,G__12735,G__12736,G__12737));
})();
var G__12675 = (function (){var G__12738 = cljs.core.cst$kw$style;
var G__12739 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12740 = hoplon.app_pages._index_DOT_html.todo_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"TODO List"], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12738,G__12739,G__12740) : hoplon.core.div.call(null,G__12738,G__12739,G__12740));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__12667,G__12668,G__12669,G__12670,G__12671,G__12672,G__12673,G__12674,G__12675) : hoplon.core.div.call(null,G__12667,G__12668,G__12669,G__12670,G__12671,G__12672,G__12673,G__12674,G__12675));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__12589,G__12590,G__12591,G__12592,G__12593,G__12594,G__12595) : hoplon.core.div.call(null,G__12589,G__12590,G__12591,G__12592,G__12593,G__12594,G__12595));
})()], 0));
return (hoplon.core.main.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.main.cljs$core$IFn$_invoke$arity$3(G__12434,G__12435,G__12436) : hoplon.core.main.call(null,G__12434,G__12435,G__12436));
})();
var G__12097 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mention","ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk")),(function (){var G__12741 = cljs.core.PersistentArrayMap.EMPTY;
var G__12742 = (function (){var G__12745 = cljs.core.PersistentArrayMap.EMPTY;
var G__12746 = "Made at ";
var G__12747 = (function (){var G__12748 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__12749 = "Adzerk";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12748,G__12749) : hoplon.core.a.call(null,G__12748,G__12749));
})();
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$3(G__12745,G__12746,G__12747) : hoplon.core.strong.call(null,G__12745,G__12746,G__12747));
})();
var G__12743 = " | ";
var G__12744 = (function (){var G__12750 = cljs.core.PersistentArrayMap.EMPTY;
var G__12751 = (function (){var G__12753 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__12754 = "Ad serving infrastructure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12753,G__12754) : hoplon.core.a.call(null,G__12753,G__12754));
})();
var G__12752 = " for awesome companies";
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__12750,G__12751,G__12752) : hoplon.core.em.call(null,G__12750,G__12751,G__12752));
})();
return (hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4(G__12741,G__12742,G__12743,G__12744) : hoplon.core.blockquote.call(null,G__12741,G__12742,G__12743,G__12744));
})()], 0));
var G__12098 = (function (){var G__12840 = (function (){var G__12882 = cljs.core.cst$kw$class;
var G__12883 = "ui-cols";
var G__12884 = (function (){var G__12889 = cljs.core.cst$kw$class;
var G__12890 = "ui-col-10 ui-skip-1";
var G__12891 = (function (){var G__12893 = cljs.core.cst$kw$class;
var G__12894 = "footer-links";
var G__12895 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github"));
var G__12896 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"https://github.com/tailrecursion/hoplon.io","Site Source") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/tailrecursion/hoplon.io","Site Source"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12893,G__12894,G__12895,G__12896) : hoplon.core.div.call(null,G__12893,G__12894,G__12895,G__12896));
})();
var G__12892 = (function (){var G__12910 = cljs.core.cst$kw$class;
var G__12911 = "footer-privacy";
var G__12912 = (function (){var G__12913 = cljs.core.PersistentArrayMap.EMPTY;
var G__12914 = "Copyright \u00A9 2015 ";
var G__12915 = (function (){var G__12920 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://tailrecursion.com/~alan/"], null);
var G__12921 = "Alan Dipert";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12920,G__12921) : hoplon.core.a.call(null,G__12920,G__12921));
})();
var G__12916 = ", ";
var G__12917 = (function (){var G__12922 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/micha"], null);
var G__12923 = "Micha Niskin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12922,G__12923) : hoplon.core.a.call(null,G__12922,G__12923));
})();
var G__12918 = ", ";
var G__12919 = (function (){var G__12924 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/somegoodpixels"], null);
var G__12925 = "Joshua Smith";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12924,G__12925) : hoplon.core.a.call(null,G__12924,G__12925));
})();
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$7(G__12913,G__12914,G__12915,G__12916,G__12917,G__12918,G__12919) : hoplon.core.small.call(null,G__12913,G__12914,G__12915,G__12916,G__12917,G__12918,G__12919));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12910,G__12911,G__12912) : hoplon.core.div.call(null,G__12910,G__12911,G__12912));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12889,G__12890,G__12891,G__12892) : hoplon.core.div.call(null,G__12889,G__12890,G__12891,G__12892));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12882,G__12883,G__12884) : hoplon.core.div.call(null,G__12882,G__12883,G__12884));
})();
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__12840) : hoplon.core.footer.call(null,G__12840));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__12091,G__12092,G__12093,G__12094,G__12095,G__12096,G__12097,G__12098) : hoplon.core.div.call(null,G__12091,G__12092,G__12093,G__12094,G__12095,G__12096,G__12097,G__12098));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__12057,G__12058,G__12059) : hoplon.core.body.call(null,G__12057,G__12058,G__12059));
})()], 0));
