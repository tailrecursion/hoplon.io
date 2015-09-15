// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__11111){
var vec__11112 = p__11111;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(1),null);
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
var len__6059__auto___11118 = arguments.length;
var i__6060__auto___11119 = (0);
while(true){
if((i__6060__auto___11119 < len__6059__auto___11118)){
args__6066__auto__.push((arguments[i__6060__auto___11119]));

var G__11120 = (i__6060__auto___11119 + (1));
i__6060__auto___11119 = G__11120;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((3) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((3)),(0))):null);
return hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_ctor,attr_kw,attr_vals,kids){
var vec__11117 = cljs.core.reverse(attr_vals);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(0),null);
var outers = cljs.core.nthnext(vec__11117,(1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__11117,inner,outers){
return (function (p1__3330_SHARP_,p2__3329_SHARP_){
return (elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,p2__3329_SHARP_,p1__3330_SHARP_) : elem_ctor.call(null,attr_kw,p2__3329_SHARP_,p1__3330_SHARP_));
});})(vec__11117,inner,outers))
,(elem_ctor.cljs$core$IFn$_invoke$arity$3 ? elem_ctor.cljs$core$IFn$_invoke$arity$3(attr_kw,inner,kids) : elem_ctor.call(null,attr_kw,inner,kids)),outers);
});

hoplon.app_pages._index_DOT_html._BAR_.cljs$lang$maxFixedArity = (3);

hoplon.app_pages._index_DOT_html._BAR_.cljs$lang$applyTo = (function (seq11113){
var G__11114 = cljs.core.first(seq11113);
var seq11113__$1 = cljs.core.next(seq11113);
var G__11115 = cljs.core.first(seq11113__$1);
var seq11113__$2 = cljs.core.next(seq11113__$1);
var G__11116 = cljs.core.first(seq11113__$2);
var seq11113__$3 = cljs.core.next(seq11113__$2);
return hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(G__11114,G__11115,G__11116,seq11113__$3);
});
hoplon.app_pages._index_DOT_html.loud = (function hoplon$app_pages$_index_DOT_html$loud(){
var args__6066__auto__ = [];
var len__6059__auto___11125 = arguments.length;
var i__6060__auto___11126 = (0);
while(true){
if((i__6060__auto___11126 < len__6059__auto___11125)){
args__6066__auto__.push((arguments[i__6060__auto___11126]));

var G__11127 = (i__6060__auto___11126 + (1));
i__6060__auto___11126 = G__11127;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__11122 = cljs.core.cst$kw$css;
var G__11123 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_transform,"uppercase"], null);
var G__11124 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11122,G__11123,G__11124) : hoplon.core.div.call(null,G__11122,G__11123,G__11124));
});

hoplon.app_pages._index_DOT_html.loud.cljs$lang$maxFixedArity = (0);

hoplon.app_pages._index_DOT_html.loud.cljs$lang$applyTo = (function (seq11121){
return hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11121));
});
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.timer = (function() { 
var hoplon$app_pages$_index_DOT_html$timer__delegate = function (args__8349__auto__){
var vec__11133 = hoplon.core.parse_args(args__8349__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(1),null);
var start = (function (){var or__5020__auto__ = cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return (0);
}
})();
var seconds = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(start);
window.setInterval(((function (start,seconds,vec__11133,attrs,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);
});})(start,seconds,vec__11133,attrs,children))
,(1000));

var G__11135 = attrs;
var G__11136 = javelin.core.formula(((function (G__11135,start,seconds,vec__11133,attrs,children){
return (function (G__11137){
return [cljs.core.str("Seconds Elapsed: "),cljs.core.str(G__11137)].join('');
});})(G__11135,start,seconds,vec__11133,attrs,children))
).call(null,seconds);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__11135,G__11136) : hoplon.core.div.call(null,G__11135,G__11136));
};
var hoplon$app_pages$_index_DOT_html$timer = function (var_args){
var args__8349__auto__ = null;
if (arguments.length > 0) {
var G__11138__i = 0, G__11138__a = new Array(arguments.length -  0);
while (G__11138__i < G__11138__a.length) {G__11138__a[G__11138__i] = arguments[G__11138__i + 0]; ++G__11138__i;}
  args__8349__auto__ = new cljs.core.IndexedSeq(G__11138__a,0);
} 
return hoplon$app_pages$_index_DOT_html$timer__delegate.call(this,args__8349__auto__);};
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$applyTo = (function (arglist__11139){
var args__8349__auto__ = cljs.core.seq(arglist__11139);
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
var vec__11170 = hoplon.core.parse_args(args__8349__auto__);
var map__11171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11170,(0),null);
var map__11171__$1 = ((((!((map__11171 == null)))?((((map__11171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11171):map__11171);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11171__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11170,(1),null);
var todo_items = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_item = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__11174 = (function (){var G__11178 = (function (){var or__5020__auto__ = title;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return "TODO";
}
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1(G__11178) : hoplon.core.h3.call(null,G__11178));
})();
var G__11175 = (function (){var G__11180 = cljs.core.cst$kw$style;
var G__11181 = "margin-left: 20px;";
var G__11182 = hoplon.core.loop_tpl_STAR_(todo_items,((function (G__11180,G__11181,G__11174,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_){
return (function (item__8389__auto__){
var vec__11183 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__11180,G__11181,G__11174,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_){
return (function (todo){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo], null);
});})(G__11180,G__11181,G__11174,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_))
).call(null,item__8389__auto__));
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11183,(0),null);
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"list-style-type:disc;",todo) : hoplon.core.li.call(null,cljs.core.cst$kw$style,"list-style-type:disc;",todo));
});})(G__11180,G__11181,G__11174,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__11180,G__11181,G__11182) : hoplon.core.ul.call(null,G__11180,G__11181,G__11182));
})();
var G__11176 = (function (){var G__11186 = cljs.core.cst$kw$type;
var G__11187 = "text";
var G__11188 = cljs.core.cst$kw$value;
var G__11189 = new_item;
var G__11190 = cljs.core.cst$kw$change;
var G__11191 = ((function (G__11186,G__11187,G__11188,G__11189,G__11190,G__11174,G__11175,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_){
return (function (p1__3331_SHARP_){
var G__11192 = new_item;
var G__11193 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__3331_SHARP_) : cljs.core.deref.call(null,p1__3331_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11192,G__11193) : cljs.core.reset_BANG_.call(null,G__11192,G__11193));
});})(G__11186,G__11187,G__11188,G__11189,G__11190,G__11174,G__11175,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__11186,G__11187,G__11188,G__11189,G__11190,G__11191) : hoplon.core.input.call(null,G__11186,G__11187,G__11188,G__11189,G__11190,G__11191));
})();
var G__11177 = (function (){var G__11194 = cljs.core.cst$kw$click;
var G__11195 = ((function (G__11194,G__11174,G__11175,G__11176,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_){
return (function (){
return javelin.core.dosync_STAR_(((function (G__11194,G__11174,G__11175,G__11176,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo_items,cljs.core.conj,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_item) : cljs.core.deref.call(null,new_item)));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(new_item,"") : cljs.core.reset_BANG_.call(null,new_item,""));
});})(G__11194,G__11174,G__11175,G__11176,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_))
);
});})(G__11194,G__11174,G__11175,G__11176,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_))
;
var G__11196 = (function (){var t__8410__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8410__auto__,G__11194,G__11195,G__11174,G__11175,G__11176,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_){
return (function (G__11197,G__11198,G__11199){
return G__11197.nodeValue = [cljs.core.str("Add #"),cljs.core.str(((G__11198.cljs$core$IFn$_invoke$arity$1 ? G__11198.cljs$core$IFn$_invoke$arity$1(G__11199) : G__11198.call(null,G__11199)) + (1)))].join('');
});})(t__8410__auto__,G__11194,G__11195,G__11174,G__11175,G__11176,todo_items,new_item,vec__11170,map__11171,map__11171__$1,title,_))
).call(null,t__8410__auto__,cljs.core.count,todo_items);

return t__8410__auto__;
})();
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11194,G__11195,G__11196) : hoplon.core.button.call(null,G__11194,G__11195,G__11196));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__11174,G__11175,G__11176,G__11177) : hoplon.core.div.call(null,G__11174,G__11175,G__11176,G__11177));
};
var hoplon$app_pages$_index_DOT_html$todo_list = function (var_args){
var args__8349__auto__ = null;
if (arguments.length > 0) {
var G__11200__i = 0, G__11200__a = new Array(arguments.length -  0);
while (G__11200__i < G__11200__a.length) {G__11200__a[G__11200__i] = arguments[G__11200__i + 0]; ++G__11200__i;}
  args__8349__auto__ = new cljs.core.IndexedSeq(G__11200__a,0);
} 
return hoplon$app_pages$_index_DOT_html$todo_list__delegate.call(this,args__8349__auto__);};
hoplon$app_pages$_index_DOT_html$todo_list.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$todo_list.cljs$lang$applyTo = (function (arglist__11201){
var args__8349__auto__ = cljs.core.seq(arglist__11201);
return hoplon$app_pages$_index_DOT_html$todo_list__delegate(args__8349__auto__);
});
hoplon$app_pages$_index_DOT_html$todo_list.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$todo_list__delegate;
return hoplon$app_pages$_index_DOT_html$todo_list;
})()
;
hoplon.app_pages._index_DOT_html.scroll_here = (function hoplon$app_pages$_index_DOT_html$scroll_here(){
var marker = "marker";
var G__11203_11204 = ((function (marker){
return (function (){
return window.location = [cljs.core.str("#"),cljs.core.str(marker)].join('');
});})(marker))
;
jQuery(G__11203_11204);

return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,marker) : hoplon.core.a.call(null,cljs.core.cst$kw$name,marker));
});
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11205 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charset,"utf-8") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$charset,"utf-8"));
var G__11206 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, maximum-scale=1.0"));
var G__11207 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$http_DASH_equiv,"X-UA-Compatible",cljs.core.cst$kw$content,"IE=edge"));
var G__11208 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Hoplon, a ClojureScript Web Framework") : hoplon.core.title.call(null,"Hoplon, a ClojureScript Web Framework"));
var G__11209 = (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework") : hoplon.core.html_meta.call(null,cljs.core.cst$kw$name,"description",cljs.core.cst$kw$content,"ClojureScript Web Framework"));
var G__11210 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"shortcut icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__11211 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"apple-touch-icon",cljs.core.cst$kw$href,"/images/logos/hoplon-favicon.png"));
var G__11212 = (hoplon.core.style.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.style.cljs$core$IFn$_invoke$arity$1("body{display:none;}") : hoplon.core.style.call(null,"body{display:none;}"));
var G__11213 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/syntax.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/syntax.css"));
var G__11214 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/main.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"css/main.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$10(G__11205,G__11206,G__11207,G__11208,G__11209,G__11210,G__11211,G__11212,G__11213,G__11214) : hoplon.core.head.call(null,G__11205,G__11206,G__11207,G__11208,G__11209,G__11210,G__11211,G__11212,G__11213,G__11214));
})(),(function (){var G__12093 = cljs.core.cst$kw$class;
var G__12094 = "home";
var G__12095 = (function (){var G__12127 = cljs.core.cst$kw$id;
var G__12128 = "page";
var G__12129 = cljs.core.cst$kw$class;
var G__12130 = "page";
var G__12131 = (function (){var G__12135 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-mobile","nav-mobile-content"], null),cljs.core.array_seq([hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_], 0));
var G__12136 = (function (){var G__12144 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(function (){var G__12145 = cljs.core.cst$kw$class;
var G__12146 = "header-logo";
var G__12147 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(images/logos/hoplon-logo.png);","Adzerk") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"/",cljs.core.cst$kw$style,"background-image: url(images/logos/hoplon-logo.png);","Adzerk"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12145,G__12146,G__12147) : hoplon.core.div.call(null,G__12145,G__12146,G__12147));
})(),(hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_) : hoplon.core.div.call(null,cljs.core.cst$kw$class,"header-links",hoplon.app_pages._index_DOT_html._PLUS_nav_links_PLUS_)),(function (){var G__12148 = cljs.core.cst$kw$class;
var G__12149 = "header-menu";
var G__12150 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$href,"#menu") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"#menu"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12148,G__12149,G__12150) : hoplon.core.div.call(null,G__12148,G__12149,G__12150));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$1(G__12144) : hoplon.core.nav.call(null,G__12144));
})();
var G__12137 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header-promo","ui-cols","ui-col-10 ui-skip-1","header-promo-content"], null),cljs.core.array_seq([(function (){var G__12154 = cljs.core.cst$kw$class;
var G__12155 = "header-promo-logo";
var G__12156 = (function (){var G__12157 = cljs.core.cst$kw$href;
var G__12158 = "http://hoplon.io";
var G__12159 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/hoplon-logo.png",cljs.core.cst$kw$alt,"Hoplon, a ClojureScript Web Framework"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__12157,G__12158,G__12159) : hoplon.core.a.call(null,G__12157,G__12158,G__12159));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12154,G__12155,G__12156) : hoplon.core.div.call(null,G__12154,G__12155,G__12156));
})(),(function (){var G__12160 = cljs.core.cst$kw$class;
var G__12161 = "header-promo-text";
var G__12162 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Hoplon") : hoplon.core.h1.call(null,"Hoplon"));
var G__12163 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("ClojureScript Web Framework") : hoplon.core.h3.call(null,"ClojureScript Web Framework"));
var G__12164 = (function (){var G__12165 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/Get-Started",cljs.core.cst$kw$class,"ui-action ui-action-large","Get Started"));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__12165) : hoplon.core.p.call(null,G__12165));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12160,G__12161,G__12162,G__12163,G__12164) : hoplon.core.div.call(null,G__12160,G__12161,G__12162,G__12163,G__12164));
})()], 0));
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$3(G__12135,G__12136,G__12137) : hoplon.core.header.call(null,G__12135,G__12136,G__12137));
})();
var G__12132 = (function (){var G__12476 = cljs.core.cst$kw$id;
var G__12477 = "content";
var G__12478 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post","ui-cols","ui-col-10 ui-skip-1","post-body"], null),cljs.core.array_seq([(function (){var G__12495 = cljs.core.cst$kw$class;
var G__12496 = "promo";
var G__12497 = (function (){var G__12498 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Clojure and ClojureScript, everywhere.") : hoplon.core.h2.call(null,"Clojure and ClojureScript, everywhere."));
var G__12499 = (function (){var G__12500 = cljs.core.PersistentArrayMap.EMPTY;
var G__12501 = "Hoplon is a set of ";
var G__12502 = (function (){var G__12508 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://clojure.org"], null);
var G__12509 = "Clojure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12508,G__12509) : hoplon.core.a.call(null,G__12508,G__12509));
})();
var G__12503 = " and ";
var G__12504 = (function (){var G__12510 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/clojure/clojurescript"], null);
var G__12511 = "ClojureScript";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12510,G__12511) : hoplon.core.a.call(null,G__12510,G__12511));
})();
var G__12505 = " libraries that pave over the web's idiosyncrasies and present a simpler way to design and build single-page web applications. ";
var G__12506 = (function (){var G__12512 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki"], null);
var G__12513 = "Learn more on our wiki";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12512,G__12513) : hoplon.core.a.call(null,G__12512,G__12513));
})();
var G__12507 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12500,G__12501,G__12502,G__12503,G__12504,G__12505,G__12506,G__12507) : hoplon.core.p.call(null,G__12500,G__12501,G__12502,G__12503,G__12504,G__12505,G__12506,G__12507));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12498,G__12499) : hoplon.core.div.call(null,G__12498,G__12499));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12495,G__12496,G__12497) : hoplon.core.div.call(null,G__12495,G__12496,G__12497));
})(),(function (){var G__12559 = cljs.core.cst$kw$class;
var G__12560 = "features";
var G__12561 = (function (){var G__12572 = (function (){var G__12575 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"images/graphics/custom-elements.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Custom Elements icon",cljs.core.cst$kw$src,"images/graphics/custom-elements.png"));
var G__12576 = (function (){var G__12577 = cljs.core.PersistentArrayMap.EMPTY;
var G__12578 = (function (){var G__12581 = cljs.core.PersistentArrayMap.EMPTY;
var G__12582 = "Custom HTML elements are regular functions";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12581,G__12582) : hoplon.core.strong.call(null,G__12581,G__12582));
})();
var G__12579 = " and can be created and composed functionally with ";
var G__12580 = (function (){var G__12583 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/hoplon/wiki/HLisp"], null);
var G__12584 = "HLisp";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12583,G__12584) : hoplon.core.a.call(null,G__12583,G__12584));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(G__12577,G__12578,G__12579,G__12580) : hoplon.core.span.call(null,G__12577,G__12578,G__12579,G__12580));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12575,G__12576) : hoplon.core.li.call(null,G__12575,G__12576));
})();
var G__12573 = (function (){var G__12585 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"images/graphics/spreadsheet.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Spreadsheet Icon",cljs.core.cst$kw$src,"images/graphics/spreadsheet.png"));
var G__12586 = (function (){var G__12587 = cljs.core.PersistentArrayMap.EMPTY;
var G__12588 = (function (){var G__12592 = cljs.core.PersistentArrayMap.EMPTY;
var G__12593 = "Spreadsheet-like dataflow";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12592,G__12593) : hoplon.core.strong.call(null,G__12592,G__12593));
})();
var G__12589 = " with the ";
var G__12590 = (function (){var G__12594 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__12595 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12594,G__12595) : hoplon.core.a.call(null,G__12594,G__12595));
})();
var G__12591 = " ClojureScript library. Intuitively model reactive behavior using cells and formulas.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__12587,G__12588,G__12589,G__12590,G__12591) : hoplon.core.span.call(null,G__12587,G__12588,G__12589,G__12590,G__12591));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12585,G__12586) : hoplon.core.li.call(null,G__12585,G__12586));
})();
var G__12574 = (function (){var G__12596 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"images/graphics/uncoupled.png") : hoplon.core.img.call(null,cljs.core.cst$kw$alt,"Castra Icon",cljs.core.cst$kw$src,"images/graphics/uncoupled.png"));
var G__12597 = (function (){var G__12598 = cljs.core.PersistentArrayMap.EMPTY;
var G__12599 = (function (){var G__12603 = cljs.core.PersistentArrayMap.EMPTY;
var G__12604 = "Interact with the server";
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$2(G__12603,G__12604) : hoplon.core.strong.call(null,G__12603,G__12604));
})();
var G__12600 = " with the ";
var G__12601 = (function (){var G__12605 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/castra"], null);
var G__12606 = "Castra";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12605,G__12606) : hoplon.core.a.call(null,G__12605,G__12606));
})();
var G__12602 = " Clojure and ClojureScript library. Define functions on the server, call them from the client.";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__12598,G__12599,G__12600,G__12601,G__12602) : hoplon.core.span.call(null,G__12598,G__12599,G__12600,G__12601,G__12602));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__12596,G__12597) : hoplon.core.li.call(null,G__12596,G__12597));
})();
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__12572,G__12573,G__12574) : hoplon.core.ul.call(null,G__12572,G__12573,G__12574));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12559,G__12560,G__12561) : hoplon.core.div.call(null,G__12559,G__12560,G__12561));
})(),(function (){var G__12631 = cljs.core.cst$kw$class;
var G__12632 = "demos";
var G__12633 = cljs.core.cst$kw$style;
var G__12634 = "font-size: 0.9em;";
var G__12635 = (function (){var G__12638 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("A simple custom element") : hoplon.core.h4.call(null,"A simple custom element"));
var G__12639 = (function (){var G__12642 = cljs.core.PersistentArrayMap.EMPTY;
var G__12643 = "Elements and custom elements are regular functions. The function below, ";
var G__12644 = (function (){var G__12650 = cljs.core.PersistentArrayMap.EMPTY;
var G__12651 = "loud";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12650,G__12651) : hoplon.core.code.call(null,G__12650,G__12651));
})();
var G__12645 = ", accepts any number of children. It constructs and returns a ";
var G__12646 = (function (){var G__12652 = cljs.core.PersistentArrayMap.EMPTY;
var G__12653 = "div";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12652,G__12653) : hoplon.core.code.call(null,G__12652,G__12653));
})();
var G__12647 = " containing the uppercased ";
var G__12648 = (function (){var G__12654 = cljs.core.PersistentArrayMap.EMPTY;
var G__12655 = "children";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12654,G__12655) : hoplon.core.code.call(null,G__12654,G__12655));
})();
var G__12649 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$8(G__12642,G__12643,G__12644,G__12645,G__12646,G__12647,G__12648,G__12649) : hoplon.core.p.call(null,G__12642,G__12643,G__12644,G__12645,G__12646,G__12647,G__12648,G__12649));
})();
var G__12640 = (function (){var G__12656 = cljs.core.cst$kw$style;
var G__12657 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12658 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defn loud [& children]\n  (div :css {:text-transform \"uppercase\"} children))\n\n(loud \"Lisp Can Do It\")") : hoplon.core.pre.call(null,"(defn loud [& children]\n  (div :css {:text-transform \"uppercase\"} children))\n\n(loud \"Lisp Can Do It\")"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12656,G__12657,G__12658) : hoplon.core.div.call(null,G__12656,G__12657,G__12658));
})();
var G__12641 = (function (){var G__12659 = cljs.core.cst$kw$style;
var G__12660 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12661 = hoplon.app_pages._index_DOT_html.loud.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Lisp Can Do It"], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12659,G__12660,G__12661) : hoplon.core.div.call(null,G__12659,G__12660,G__12661));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12638,G__12639,G__12640,G__12641) : hoplon.core.div.call(null,G__12638,G__12639,G__12640,G__12641));
})();
var G__12636 = (function (){var G__12662 = cljs.core.cst$kw$style;
var G__12663 = "padding-top:20px; clear:both;";
var G__12664 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("A stateful custom element") : hoplon.core.h4.call(null,"A stateful custom element"));
var G__12665 = (function (){var G__12669 = cljs.core.PersistentArrayMap.EMPTY;
var G__12670 = "In this example, the ";
var G__12671 = (function (){var G__12683 = cljs.core.PersistentArrayMap.EMPTY;
var G__12684 = "timer";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12683,G__12684) : hoplon.core.code.call(null,G__12683,G__12684));
})();
var G__12672 = " function initializes a ";
var G__12673 = (function (){var G__12685 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/hoplon/javelin"], null);
var G__12686 = "Javelin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12685,G__12686) : hoplon.core.a.call(null,G__12685,G__12686));
})();
var G__12674 = " input cell and schedules it for periodic update using ";
var G__12675 = (function (){var G__12687 = cljs.core.PersistentArrayMap.EMPTY;
var G__12688 = "window.setInterval";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12687,G__12688) : hoplon.core.code.call(null,G__12687,G__12688));
})();
var G__12676 = ". The text of the returned ";
var G__12677 = (function (){var G__12689 = cljs.core.PersistentArrayMap.EMPTY;
var G__12690 = "div";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12689,G__12690) : hoplon.core.code.call(null,G__12689,G__12690));
})();
var G__12678 = " is attached reactively to ";
var G__12679 = (function (){var G__12691 = cljs.core.PersistentArrayMap.EMPTY;
var G__12692 = "seconds";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12691,G__12692) : hoplon.core.code.call(null,G__12691,G__12692));
})();
var G__12680 = " through a formula cell created using  ";
var G__12681 = (function (){var G__12693 = cljs.core.PersistentArrayMap.EMPTY;
var G__12694 = "cell=";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12693,G__12694) : hoplon.core.code.call(null,G__12693,G__12694));
})();
var G__12682 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$14(G__12669,G__12670,G__12671,G__12672,G__12673,G__12674,G__12675,G__12676,G__12677,G__12678,G__12679,G__12680,G__12681,G__12682) : hoplon.core.p.call(null,G__12669,G__12670,G__12671,G__12672,G__12673,G__12674,G__12675,G__12676,G__12677,G__12678,G__12679,G__12680,G__12681,G__12682));
})();
var G__12666 = (function (){var G__12695 = cljs.core.PersistentArrayMap.EMPTY;
var G__12696 = (function (){var G__12698 = cljs.core.PersistentArrayMap.EMPTY;
var G__12699 = "defelem";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12698,G__12699) : hoplon.core.code.call(null,G__12698,G__12699));
})();
var G__12697 = " is a convenience macro for creating functions that handle attribute arguments naturally.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__12695,G__12696,G__12697) : hoplon.core.p.call(null,G__12695,G__12696,G__12697));
})();
var G__12667 = (function (){var G__12700 = cljs.core.cst$kw$style;
var G__12701 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12702 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defelem timer [attrs children]\n  (let [start   (or (:start attrs) 0)\n        seconds (cell start)]\n    (.setInterval js/window #(swap! seconds inc) 1000)\n    (div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n\n;; our first timer will start at 0 and count up\n(p (timer :style \"color: green;\" :start 0))\n\n;; start 3 more timers, each with different starting values\n(apply ol (map li (for [r (range 1 4)] (timer :start r))))") : hoplon.core.pre.call(null,"(defelem timer [attrs children]\n  (let [start   (or (:start attrs) 0)\n        seconds (cell start)]\n    (.setInterval js/window #(swap! seconds inc) 1000)\n    (div attrs (cell= (str \"Seconds Elapsed: \" seconds)))))\n\n;; our first timer will start at 0 and count up\n(p (timer :style \"color: green;\" :start 0))\n\n;; start 3 more timers, each with different starting values\n(apply ol (map li (for [r (range 1 4)] (timer :start r))))"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12700,G__12701,G__12702) : hoplon.core.div.call(null,G__12700,G__12701,G__12702));
})();
var G__12668 = (function (){var G__12704 = cljs.core.cst$kw$style;
var G__12705 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12706 = (function (){var G__12708 = hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"color: green;",cljs.core.cst$kw$start,(0)], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__12708) : hoplon.core.p.call(null,G__12708));
})();
var G__12707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ol,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoplon.core.li,(function (){var iter__5773__auto__ = ((function (G__12704,G__12705,G__12706,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12631,G__12632,G__12633,G__12634,G__12635,G__12476,G__12477,G__12127,G__12128,G__12129,G__12130,G__12131,G__12093,G__12094){
return (function hoplon$app_pages$_index_DOT_html$iter__12709(s__12710){
return (new cljs.core.LazySeq(null,((function (G__12704,G__12705,G__12706,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12631,G__12632,G__12633,G__12634,G__12635,G__12476,G__12477,G__12127,G__12128,G__12129,G__12130,G__12131,G__12093,G__12094){
return (function (){
var s__12710__$1 = s__12710;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12710__$1);
if(temp__4425__auto__){
var s__12710__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12710__$2)){
var c__5771__auto__ = cljs.core.chunk_first(s__12710__$2);
var size__5772__auto__ = cljs.core.count(c__5771__auto__);
var b__12712 = cljs.core.chunk_buffer(size__5772__auto__);
if((function (){var i__12711 = (0);
while(true){
if((i__12711 < size__5772__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5771__auto__,i__12711);
cljs.core.chunk_append(b__12712,hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$start,r], 0)));

var G__12974 = (i__12711 + (1));
i__12711 = G__12974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12712),hoplon$app_pages$_index_DOT_html$iter__12709(cljs.core.chunk_rest(s__12710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12712),null);
}
} else {
var r = cljs.core.first(s__12710__$2);
return cljs.core.cons(hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$start,r], 0)),hoplon$app_pages$_index_DOT_html$iter__12709(cljs.core.rest(s__12710__$2)));
}
} else {
return null;
}
break;
}
});})(G__12704,G__12705,G__12706,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12631,G__12632,G__12633,G__12634,G__12635,G__12476,G__12477,G__12127,G__12128,G__12129,G__12130,G__12131,G__12093,G__12094))
,null,null));
});})(G__12704,G__12705,G__12706,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12631,G__12632,G__12633,G__12634,G__12635,G__12476,G__12477,G__12127,G__12128,G__12129,G__12130,G__12131,G__12093,G__12094))
;
return iter__5773__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})()));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12704,G__12705,G__12706,G__12707) : hoplon.core.div.call(null,G__12704,G__12705,G__12706,G__12707));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12668) : hoplon.core.div.call(null,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12668));
})();
var G__12637 = (function (){var G__12715 = cljs.core.cst$kw$style;
var G__12716 = "padding-top:20px; clear:both;fd";
var G__12717 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("An application") : hoplon.core.h4.call(null,"An application"));
var G__12718 = (function (){var G__12724 = cljs.core.PersistentArrayMap.EMPTY;
var G__12725 = "In this final example, ";
var G__12726 = (function (){var G__12730 = cljs.core.PersistentArrayMap.EMPTY;
var G__12731 = "todo-list";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12730,G__12731) : hoplon.core.code.call(null,G__12730,G__12731));
})();
var G__12727 = " is a function that returns an instance of a simple todo list application. The application responds to user input by updating input cell values when ";
var G__12728 = (function (){var G__12732 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://en.wikipedia.org/wiki/DOM_events"], null);
var G__12733 = "DOM events";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12732,G__12733) : hoplon.core.a.call(null,G__12732,G__12733));
})();
var G__12729 = " occur.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$6(G__12724,G__12725,G__12726,G__12727,G__12728,G__12729) : hoplon.core.p.call(null,G__12724,G__12725,G__12726,G__12727,G__12728,G__12729));
})();
var G__12719 = (function (){var G__12734 = cljs.core.PersistentArrayMap.EMPTY;
var G__12735 = "The ";
var G__12736 = (function (){var G__12740 = cljs.core.PersistentArrayMap.EMPTY;
var G__12741 = ":change";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12740,G__12741) : hoplon.core.code.call(null,G__12740,G__12741));
})();
var G__12737 = " event on the text input is attached to a function that updates the ";
var G__12738 = (function (){var G__12742 = cljs.core.PersistentArrayMap.EMPTY;
var G__12743 = "new-item";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12742,G__12743) : hoplon.core.code.call(null,G__12742,G__12743));
})();
var G__12739 = " input cell as keystrokes occur.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$6(G__12734,G__12735,G__12736,G__12737,G__12738,G__12739) : hoplon.core.p.call(null,G__12734,G__12735,G__12736,G__12737,G__12738,G__12739));
})();
var G__12720 = (function (){var G__12744 = cljs.core.PersistentArrayMap.EMPTY;
var G__12745 = "The ";
var G__12746 = (function (){var G__12756 = cljs.core.PersistentArrayMap.EMPTY;
var G__12757 = ":click";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12756,G__12757) : hoplon.core.code.call(null,G__12756,G__12757));
})();
var G__12747 = " event on the button is attached to a function that appends the value of ";
var G__12748 = (function (){var G__12758 = cljs.core.PersistentArrayMap.EMPTY;
var G__12759 = "new-item";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12758,G__12759) : hoplon.core.code.call(null,G__12758,G__12759));
})();
var G__12749 = " to the end of ";
var G__12750 = (function (){var G__12760 = cljs.core.PersistentArrayMap.EMPTY;
var G__12761 = "todo-items";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12760,G__12761) : hoplon.core.code.call(null,G__12760,G__12761));
})();
var G__12751 = " inside a ";
var G__12752 = (function (){var G__12762 = cljs.core.PersistentArrayMap.EMPTY;
var G__12763 = "dosync";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12762,G__12763) : hoplon.core.code.call(null,G__12762,G__12763));
})();
var G__12753 = ". ";
var G__12754 = (function (){var G__12764 = cljs.core.PersistentArrayMap.EMPTY;
var G__12765 = "dosync";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12764,G__12765) : hoplon.core.code.call(null,G__12764,G__12765));
})();
var G__12755 = " is a transactional construct that suspends the propagation of new values through the cell graph while updating multiple cells.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$12(G__12744,G__12745,G__12746,G__12747,G__12748,G__12749,G__12750,G__12751,G__12752,G__12753,G__12754,G__12755) : hoplon.core.p.call(null,G__12744,G__12745,G__12746,G__12747,G__12748,G__12749,G__12750,G__12751,G__12752,G__12753,G__12754,G__12755));
})();
var G__12721 = (function (){var G__12766 = cljs.core.PersistentArrayMap.EMPTY;
var G__12767 = (function (){var G__12775 = cljs.core.PersistentArrayMap.EMPTY;
var G__12776 = "todo-items";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12775,G__12776) : hoplon.core.code.call(null,G__12775,G__12776));
})();
var G__12768 = " are rendered as ";
var G__12769 = (function (){var G__12777 = cljs.core.PersistentArrayMap.EMPTY;
var G__12778 = "li";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12777,G__12778) : hoplon.core.code.call(null,G__12777,G__12778));
})();
var G__12770 = " elements using the ";
var G__12771 = (function (){var G__12779 = cljs.core.PersistentArrayMap.EMPTY;
var G__12780 = "loop-tpl";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12779,G__12780) : hoplon.core.code.call(null,G__12779,G__12780));
})();
var G__12772 = " macro. ";
var G__12773 = (function (){var G__12781 = cljs.core.PersistentArrayMap.EMPTY;
var G__12782 = "loop-tpl";
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(G__12781,G__12782) : hoplon.core.code.call(null,G__12781,G__12782));
})();
var G__12774 = " efficiently maps dynamically-sized collections to DOM nodes.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$9(G__12766,G__12767,G__12768,G__12769,G__12770,G__12771,G__12772,G__12773,G__12774) : hoplon.core.p.call(null,G__12766,G__12767,G__12768,G__12769,G__12770,G__12771,G__12772,G__12773,G__12774));
})();
var G__12722 = (function (){var G__12783 = cljs.core.cst$kw$style;
var G__12784 = "width:60%; float:left; padding: 5px; border: 1px solid #00ace4; border-radius:10px; color: #333;";
var G__12785 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1("(defelem todo-list [{:keys [title]} _]\n  (let [todo-items (cell [])\n        new-item   (cell \"\")]\n    (div\n      (h3 (or title \"TODO\"))\n      (ul\n        (loop-tpl :bindings [todo todo-items]\n          (li todo)))\n      (input :type \"text\"\n             :value new-item\n             :change #(reset! new-item @%))\n      (button :click #(dosync\n                       (swap! todo-items conj @new-item)\n                       (reset! new-item \"\"))\n        (text \"Add #~{(inc (count todo-items))}\")))))\n\n(todo-list :title \"TODO List\")") : hoplon.core.pre.call(null,"(defelem todo-list [{:keys [title]} _]\n  (let [todo-items (cell [])\n        new-item   (cell \"\")]\n    (div\n      (h3 (or title \"TODO\"))\n      (ul\n        (loop-tpl :bindings [todo todo-items]\n          (li todo)))\n      (input :type \"text\"\n             :value new-item\n             :change #(reset! new-item @%))\n      (button :click #(dosync\n                       (swap! todo-items conj @new-item)\n                       (reset! new-item \"\"))\n        (text \"Add #~{(inc (count todo-items))}\")))))\n\n(todo-list :title \"TODO List\")"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12783,G__12784,G__12785) : hoplon.core.div.call(null,G__12783,G__12784,G__12785));
})();
var G__12723 = (function (){var G__12786 = cljs.core.cst$kw$style;
var G__12787 = "padding: 5px; width: 35%; float:right; background-color: #eee; border: 1px solid #aaa; border-radius:10px;";
var G__12788 = hoplon.app_pages._index_DOT_html.todo_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"TODO List"], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12786,G__12787,G__12788) : hoplon.core.div.call(null,G__12786,G__12787,G__12788));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__12715,G__12716,G__12717,G__12718,G__12719,G__12720,G__12721,G__12722,G__12723) : hoplon.core.div.call(null,G__12715,G__12716,G__12717,G__12718,G__12719,G__12720,G__12721,G__12722,G__12723));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__12631,G__12632,G__12633,G__12634,G__12635,G__12636,G__12637) : hoplon.core.div.call(null,G__12631,G__12632,G__12633,G__12634,G__12635,G__12636,G__12637));
})()], 0));
return (hoplon.core.main.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.main.cljs$core$IFn$_invoke$arity$3(G__12476,G__12477,G__12478) : hoplon.core.main.call(null,G__12476,G__12477,G__12478));
})();
var G__12133 = hoplon.app_pages._index_DOT_html._BAR_.cljs$core$IFn$_invoke$arity$variadic(hoplon.core.div,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mention","ui-cols","ui-col-10 ui-skip-1"], null),cljs.core.array_seq([(hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk") : hoplon.core.img.call(null,cljs.core.cst$kw$src,"/images/logos/adzerk.png",cljs.core.cst$kw$alt,"Adzerk")),(function (){var G__12789 = cljs.core.PersistentArrayMap.EMPTY;
var G__12790 = (function (){var G__12793 = cljs.core.PersistentArrayMap.EMPTY;
var G__12794 = "Made at ";
var G__12795 = (function (){var G__12796 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__12797 = "Adzerk";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12796,G__12797) : hoplon.core.a.call(null,G__12796,G__12797));
})();
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$3(G__12793,G__12794,G__12795) : hoplon.core.strong.call(null,G__12793,G__12794,G__12795));
})();
var G__12791 = " | ";
var G__12792 = (function (){var G__12798 = cljs.core.PersistentArrayMap.EMPTY;
var G__12799 = (function (){var G__12801 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://adzerk.com"], null);
var G__12802 = "Ad serving infrastructure";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12801,G__12802) : hoplon.core.a.call(null,G__12801,G__12802));
})();
var G__12800 = " for awesome companies";
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__12798,G__12799,G__12800) : hoplon.core.em.call(null,G__12798,G__12799,G__12800));
})();
return (hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.blockquote.cljs$core$IFn$_invoke$arity$4(G__12789,G__12790,G__12791,G__12792) : hoplon.core.blockquote.call(null,G__12789,G__12790,G__12791,G__12792));
})()], 0));
var G__12134 = (function (){var G__12888 = (function (){var G__12930 = cljs.core.cst$kw$class;
var G__12931 = "ui-cols";
var G__12932 = (function (){var G__12937 = cljs.core.cst$kw$class;
var G__12938 = "ui-col-10 ui-skip-1";
var G__12939 = (function (){var G__12941 = cljs.core.cst$kw$class;
var G__12942 = "footer-links";
var G__12943 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"http://github.com/hoplon",cljs.core.cst$kw$class,"network github","Adzerk on Github"));
var G__12944 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"https://github.com/tailrecursion/hoplon.io","Site Source") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"https://github.com/tailrecursion/hoplon.io","Site Source"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12941,G__12942,G__12943,G__12944) : hoplon.core.div.call(null,G__12941,G__12942,G__12943,G__12944));
})();
var G__12940 = (function (){var G__12958 = cljs.core.cst$kw$class;
var G__12959 = "footer-privacy";
var G__12960 = (function (){var G__12961 = cljs.core.PersistentArrayMap.EMPTY;
var G__12962 = "Copyright \u00A9 2015 ";
var G__12963 = (function (){var G__12968 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://tailrecursion.com/~alan/"], null);
var G__12969 = "Alan Dipert";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12968,G__12969) : hoplon.core.a.call(null,G__12968,G__12969));
})();
var G__12964 = ", ";
var G__12965 = (function (){var G__12970 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/micha"], null);
var G__12971 = "Micha Niskin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12970,G__12971) : hoplon.core.a.call(null,G__12970,G__12971));
})();
var G__12966 = ", ";
var G__12967 = (function (){var G__12972 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/somegoodpixels"], null);
var G__12973 = "Joshua Smith";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__12972,G__12973) : hoplon.core.a.call(null,G__12972,G__12973));
})();
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$7(G__12961,G__12962,G__12963,G__12964,G__12965,G__12966,G__12967) : hoplon.core.small.call(null,G__12961,G__12962,G__12963,G__12964,G__12965,G__12966,G__12967));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12958,G__12959,G__12960) : hoplon.core.div.call(null,G__12958,G__12959,G__12960));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12937,G__12938,G__12939,G__12940) : hoplon.core.div.call(null,G__12937,G__12938,G__12939,G__12940));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__12930,G__12931,G__12932) : hoplon.core.div.call(null,G__12930,G__12931,G__12932));
})();
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__12888) : hoplon.core.footer.call(null,G__12888));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134) : hoplon.core.div.call(null,G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__12093,G__12094,G__12095) : hoplon.core.body.call(null,G__12093,G__12094,G__12095));
})()], 0));
