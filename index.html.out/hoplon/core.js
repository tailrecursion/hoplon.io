// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 * the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12928_SHARP_,p2__12929_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12928_SHARP_,p2__12929_SHARP_.getAttribute("static-id"),p2__12929_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args12930 = [];
var len__6059__auto___12935 = arguments.length;
var i__6060__auto___12936 = (0);
while(true){
if((i__6060__auto___12936 < len__6059__auto___12935)){
args12930.push((arguments[i__6060__auto___12936]));

var G__12937 = (i__6060__auto___12936 + (1));
i__6060__auto___12936 = G__12937;
continue;
} else {
}
break;
}

var G__12932 = args12930.length;
switch (G__12932) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12930.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__12933_12939 = init;
var G__12934_12940 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12933_12939,G__12934_12940) : f.call(null,G__12933_12939,G__12934_12940));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__12943 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12943,(0),null);
var more = cljs.core.nthnext(vec__12943,(1));
var vec__12944 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12944,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12944,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("0410181430cd4e94bd02a5c2d2a8b7a2")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__5020__auto__ = (function (){var and__5008__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__5008__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__12945 = (i + (1));
var G__12946 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__12945;
ret = G__12946;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__12948 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12948) : hoplon.core.$text.call(null,G__12948));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__12959 = new$__$1;
var vec__12961 = G__12959;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12961,(0),null);
var xs = cljs.core.nthnext(vec__12961,(1));
var G__12960 = hoplon.core.child_vec(this$);
var vec__12962 = G__12960;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962,(0),null);
var ks = cljs.core.nthnext(vec__12962,(1));
var kids = vec__12962;
var G__12959__$1 = G__12959;
var G__12960__$1 = G__12960;
while(true){
var vec__12963 = G__12959__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12963,(0),null);
var xs__$1 = cljs.core.nthnext(vec__12963,(1));
var vec__12964 = G__12960__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12964,(0),null);
var ks__$1 = cljs.core.nthnext(vec__12964,(1));
var kids__$1 = vec__12964;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__12965 = xs__$1;
var G__12966 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__12959__$1 = G__12965;
G__12960__$1 = G__12966;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_12969 = (function (){var G__12968 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12968) : cljs.core.atom.call(null,G__12968));
})();
this$__$1.hoplonKids = kids_12969;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_12969,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_12972 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_12973 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_12972) : cljs.core.deref.call(null,kids_12972)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_12972,i_12973,x__$1,this$__$1){
return (function (p1__12971_SHARP_,p2__12970_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12972,cljs.core.assoc,i_12973,p2__12970_SHARP_);
});})(kids_12972,i_12973,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12972,cljs.core.assoc,i_12973,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__12974_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__12974_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__12975_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__12975_SHARP_], 0)));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__12976_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__12976_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_12977 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_12978 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__12979 = (function (){var and__5008__auto__ = attr_12978;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_12978) : cljs.core.deref.call(null,attr_12978)),kk_12977);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__12979)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_12978,cljs.core.assoc,kk_12977,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__12980_SHARP_){
return p1__12980_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__12981_SHARP_){
return p1__12981_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__12982_SHARP_){
return p1__12982_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__12983_SHARP_){
return p1__12983_SHARP_.hoplonKids;
}));

hoplon.core.ICustomElement = {};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5656__auto__ = (((this$ == null))?null:this$);
var m__5657__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5656__auto__)]);
if(!((m__5657__auto__ == null))){
return (m__5657__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5657__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5657__auto__.call(null,this$,k,v));
} else {
var m__5657__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return (m__5657__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5657__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5657__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__5656__auto__ = (((this$ == null))?null:this$);
var m__5657__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__5656__auto__)]);
if(!((m__5657__auto__ == null))){
return (m__5657__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5657__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5657__auto__.call(null,this$,child));
} else {
var m__5657__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return (m__5657__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5657__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5657__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__5656__auto__ = (((this$ == null))?null:this$);
var m__5657__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__5656__auto__)]);
if(!((m__5657__auto__ == null))){
return (m__5657__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5657__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5657__auto__.call(null,this$,child));
} else {
var m__5657__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return (m__5657__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5657__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5657__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__5656__auto__ = (((this$ == null))?null:this$);
var m__5657__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__5656__auto__)]);
if(!((m__5657__auto__ == null))){
return (m__5657__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5657__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5657__auto__.call(null,this$,new$,existing));
} else {
var m__5657__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return (m__5657__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5657__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5657__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__5656__auto__ = (((this$ == null))?null:this$);
var m__5657__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__5656__auto__)]);
if(!((m__5657__auto__ == null))){
return (m__5657__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5657__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5657__auto__.call(null,this$,new$,existing));
} else {
var m__5657__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return (m__5657__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5657__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5657__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_(this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__12986_SHARP_){
return (p1__12986_SHARP_ instanceof Node);
}):(function (p1__12987_SHARP_){
try{return p1__12987_SHARP_.nodeType;
}catch (e12988){if((e12988 instanceof Error)){
var _ = e12988;
return null;
} else {
throw e12988;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12989_SHARP_){
try{return cljs.core.vector_QMARK_(p1__12989_SHARP_);
}catch (e12990){if((e12990 instanceof Error)){
var _ = e12990;
return null;
} else {
throw e12990;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12991_SHARP_){
try{return cljs.core.seq_QMARK_(p1__12991_SHARP_);
}catch (e12992){if((e12992 instanceof Error)){
var _ = e12992;
return null;
} else {
throw e12992;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args12993 = [];
var len__6059__auto___12997 = arguments.length;
var i__6060__auto___12998 = (0);
while(true){
if((i__6060__auto___12998 < len__6059__auto___12997)){
args12993.push((arguments[i__6060__auto___12998]));

var G__12999 = (i__6060__auto___12998 + (1));
i__6060__auto___12998 = G__12999;
continue;
} else {
}
break;
}

var G__12995 = args12993.length;
switch (G__12995) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12993.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e12996){if((e12996 instanceof Error)){
var _ = e12996;
return not_found;
} else {
throw e12996;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args13001 = [];
var len__6059__auto___13004 = arguments.length;
var i__6060__auto___13005 = (0);
while(true){
if((i__6060__auto___13005 < len__6059__auto___13004)){
args13001.push((arguments[i__6060__auto___13005]));

var G__13006 = (i__6060__auto___13005 + (1));
i__6060__auto___13005 = G__13006;
continue;
} else {
}
break;
}

var G__13003 = args13001.length;
switch (G__13003) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13001.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__13016 = args;
var vec__13017 = G__13016;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(0),null);
var args__$1 = cljs.core.nthnext(vec__13017,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__13016__$1 = G__13016;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__13018 = G__13016__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13018,(0),null);
var args__$2 = cljs.core.nthnext(vec__13018,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__13019 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__13016__$1,attr__$2,kids__$2,vec__13018,arg__$1,args__$2,attr,kids,G__13016,vec__13017,arg,args__$1){
return (function (p1__13008_SHARP_,p2__13009_SHARP_,p3__13010_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__13008_SHARP_,p2__13009_SHARP_,p3__13010_SHARP_);
});})(attr__$1,kids__$1,G__13016__$1,attr__$2,kids__$2,vec__13018,arg__$1,args__$2,attr,kids,G__13016,vec__13017,arg,args__$1))
,attr__$2,arg__$1);
var G__13020 = kids__$2;
var G__13021 = args__$2;
attr__$1 = G__13019;
kids__$1 = G__13020;
G__13016__$1 = G__13021;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__13022 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__13023 = kids__$2;
var G__13024 = cljs.core.rest(args__$2);
attr__$1 = G__13022;
kids__$1 = G__13023;
G__13016__$1 = G__13024;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__13025 = attr__$2;
var G__13026 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13027 = args__$2;
attr__$1 = G__13025;
kids__$1 = G__13026;
G__13016__$1 = G__13027;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__13028 = attr__$2;
var G__13029 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13030 = args__$2;
attr__$1 = G__13028;
kids__$1 = G__13029;
G__13016__$1 = G__13030;
continue;
} else {
var G__13031 = attr__$2;
var G__13032 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__13033 = args__$2;
attr__$1 = G__13031;
kids__$1 = G__13032;
G__13016__$1 = G__13033;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__13035_SHARP_,p2__13034_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__13034_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__13034_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__13037){
var vec__13044 = p__13037;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(0),null);
var _ = cljs.core.nthnext(vec__13044,(1));
var kids = vec__13044;
var this$__$1 = this$;
var node_13050 = ((function (this$__$1,vec__13044,child_cell,_,kids){
return (function (p1__13036_SHARP_){
if(typeof p1__13036_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__13036_SHARP_) : hoplon.core.$text.call(null,p1__13036_SHARP_));
} else {
if(typeof p1__13036_SHARP_ === 'number'){
var G__13045 = [cljs.core.str(p1__13036_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13045) : hoplon.core.$text.call(null,G__13045));
} else {
return p1__13036_SHARP_;

}
}
});})(this$__$1,vec__13044,child_cell,_,kids))
;
var seq__13046_13051 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__13047_13052 = null;
var count__13048_13053 = (0);
var i__13049_13054 = (0);
while(true){
if((i__13049_13054 < count__13048_13053)){
var x_13055 = chunk__13047_13052.cljs$core$IIndexed$_nth$arity$2(null,i__13049_13054);
var temp__4425__auto___13056 = node_13050(x_13055);
if(cljs.core.truth_(temp__4425__auto___13056)){
var x_13057__$1 = temp__4425__auto___13056;
hoplon.core.append_child_BANG_(this$__$1,x_13057__$1);
} else {
}

var G__13058 = seq__13046_13051;
var G__13059 = chunk__13047_13052;
var G__13060 = count__13048_13053;
var G__13061 = (i__13049_13054 + (1));
seq__13046_13051 = G__13058;
chunk__13047_13052 = G__13059;
count__13048_13053 = G__13060;
i__13049_13054 = G__13061;
continue;
} else {
var temp__4425__auto___13062 = cljs.core.seq(seq__13046_13051);
if(temp__4425__auto___13062){
var seq__13046_13063__$1 = temp__4425__auto___13062;
if(cljs.core.chunked_seq_QMARK_(seq__13046_13063__$1)){
var c__5804__auto___13064 = cljs.core.chunk_first(seq__13046_13063__$1);
var G__13065 = cljs.core.chunk_rest(seq__13046_13063__$1);
var G__13066 = c__5804__auto___13064;
var G__13067 = cljs.core.count(c__5804__auto___13064);
var G__13068 = (0);
seq__13046_13051 = G__13065;
chunk__13047_13052 = G__13066;
count__13048_13053 = G__13067;
i__13049_13054 = G__13068;
continue;
} else {
var x_13069 = cljs.core.first(seq__13046_13063__$1);
var temp__4425__auto___13070__$1 = node_13050(x_13069);
if(cljs.core.truth_(temp__4425__auto___13070__$1)){
var x_13071__$1 = temp__4425__auto___13070__$1;
hoplon.core.append_child_BANG_(this$__$1,x_13071__$1);
} else {
}

var G__13072 = cljs.core.next(seq__13046_13063__$1);
var G__13073 = null;
var G__13074 = (0);
var G__13075 = (0);
seq__13046_13051 = G__13072;
chunk__13047_13052 = G__13073;
count__13048_13053 = G__13074;
i__13049_13054 = G__13075;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__13082__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__13077 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(1),null);
var G__13078 = this$;
hoplon.core.add_attributes_BANG_(G__13078,attr);

hoplon.core.add_children_BANG_(G__13078,kids);

return G__13078;
};
var G__13082 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__13083__i = 0, G__13083__a = new Array(arguments.length -  1);
while (G__13083__i < G__13083__a.length) {G__13083__a[G__13083__i] = arguments[G__13083__i + 1]; ++G__13083__i;}
  args = new cljs.core.IndexedSeq(G__13083__a,0);
} 
return G__13082__delegate.call(this,self__,args);};
G__13082.cljs$lang$maxFixedArity = 1;
G__13082.cljs$lang$applyTo = (function (arglist__13084){
var self__ = cljs.core.first(arglist__13084);
var args = cljs.core.rest(arglist__13084);
return G__13082__delegate(self__,args);
});
G__13082.cljs$core$IFn$_invoke$arity$variadic = G__13082__delegate;
return G__13082;
})()
;

Element.prototype.apply = (function (self__,args13076){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13076)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__13085__delegate = function (args){
var this$ = this;
var vec__13079 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13079,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13079,(1),null);
var G__13080 = this$;
hoplon.core.add_attributes_BANG_(G__13080,attr);

hoplon.core.add_children_BANG_(G__13080,kids);

return G__13080;
};
var G__13085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13086__i = 0, G__13086__a = new Array(arguments.length -  0);
while (G__13086__i < G__13086__a.length) {G__13086__a[G__13086__i] = arguments[G__13086__i + 0]; ++G__13086__i;}
  args = new cljs.core.IndexedSeq(G__13086__a,0);
} 
return G__13085__delegate.call(this,args);};
G__13085.cljs$lang$maxFixedArity = 0;
G__13085.cljs$lang$applyTo = (function (arglist__13087){
var args = cljs.core.seq(arglist__13087);
return G__13085__delegate(args);
});
G__13085.cljs$core$IFn$_invoke$arity$variadic = G__13085__delegate;
return G__13085;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_13088__$1 = cljs.core.name(k);
var e_13089 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_13089.removeAttr(k_13088__$1);
} else {
e_13089.attr(k_13088__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13088__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e13081){if((e13081 instanceof Error)){
var _ = e13081;
return null;
} else {
throw e13081;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__13096__delegate = function (args){
var vec__13093 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__13094 = elem.hoplonKids;
var G__13095 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13094,G__13095) : cljs.core.reset_BANG_.call(null,G__13094,G__13095));
} else {
return null;
}
};
var G__13096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13097__i = 0, G__13097__a = new Array(arguments.length -  0);
while (G__13097__i < G__13097__a.length) {G__13097__a[G__13097__i] = arguments[G__13097__i + 0]; ++G__13097__i;}
  args = new cljs.core.IndexedSeq(G__13097__a,0);
} 
return G__13096__delegate.call(this,args);};
G__13096.cljs$lang$maxFixedArity = 0;
G__13096.cljs$lang$applyTo = (function (arglist__13098){
var args = cljs.core.seq(arglist__13098);
return G__13096__delegate(args);
});
G__13096.cljs$core$IFn$_invoke$arity$variadic = G__13096__delegate;
return G__13096;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__13099__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__13099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13100__i = 0, G__13100__a = new Array(arguments.length -  0);
while (G__13100__i < G__13100__a.length) {G__13100__a[G__13100__i] = arguments[G__13100__i + 0]; ++G__13100__i;}
  args = new cljs.core.IndexedSeq(G__13100__a,0);
} 
return G__13099__delegate.call(this,args);};
G__13099.cljs$lang$maxFixedArity = 0;
G__13099.cljs$lang$applyTo = (function (arglist__13101){
var args = cljs.core.seq(arglist__13101);
return G__13099__delegate(args);
});
G__13099.cljs$core$IFn$_invoke$arity$variadic = G__13099__delegate;
return G__13099;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___13104 = arguments.length;
var i__6060__auto___13105 = (0);
while(true){
if((i__6060__auto___13105 < len__6059__auto___13104)){
args__6066__auto__.push((arguments[i__6060__auto___13105]));

var G__13106 = (i__6060__auto___13105 + (1));
i__6060__auto___13105 = G__13106;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13103 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq13102){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13102));
});
hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__13107_SHARP_){
return document.createTextNode(p1__13107_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__13108_SHARP_){
return document.createComment(p1__13108_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__13109_SHARP_){
var e = (function (){var G__13110 = p1__13109_SHARP_.target;
return jQuery(G__13110);
})();
if(cljs.core.truth_((function (){var or__5020__auto__ = e.attr("action");
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__13109_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args13111 = [];
var len__6059__auto___13114 = arguments.length;
var i__6060__auto___13115 = (0);
while(true){
if((i__6060__auto___13115 < len__6059__auto___13114)){
args13111.push((arguments[i__6060__auto___13115]));

var G__13116 = (i__6060__auto___13115 + (1));
i__6060__auto___13115 = G__13116;
continue;
} else {
}
break;
}

var G__13113 = args13111.length;
switch (G__13113) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13111.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(){
var args13118 = [];
var len__6059__auto___13121 = arguments.length;
var i__6060__auto___13122 = (0);
while(true){
if((i__6060__auto___13122 < len__6059__auto___13121)){
args13118.push((arguments[i__6060__auto___13122]));

var G__13123 = (i__6060__auto___13122 + (1));
i__6060__auto___13122 = G__13123;
continue;
} else {
}
break;
}

var G__13120 = args13118.length;
switch (G__13120) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13118.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__13125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13125) : cljs.core.atom.call(null,G__13125));
})();
var prefer_table__5915__auto__ = (function (){var G__13126 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13126) : cljs.core.atom.call(null,G__13126));
})();
var method_cache__5916__auto__ = (function (){var G__13127 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13127) : cljs.core.atom.call(null,G__13127));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__13128 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13128) : cljs.core.atom.call(null,G__13128));
})();
var hierarchy__5918__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5918__auto__,method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__13129 = elem;
var G__13130 = cljs.core.cst$kw$attr;
var G__13131 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__13129,G__13130,G__13131) : hoplon.core.do_BANG_.call(null,G__13129,G__13130,G__13131));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__13132__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__13132 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__13133__i = 0, G__13133__a = new Array(arguments.length -  2);
while (G__13133__i < G__13133__a.length) {G__13133__a[G__13133__i] = arguments[G__13133__i + 2]; ++G__13133__i;}
  args = new cljs.core.IndexedSeq(G__13133__a,0);
} 
return G__13132__delegate.call(this,elem,_,args);};
G__13132.cljs$lang$maxFixedArity = 2;
G__13132.cljs$lang$applyTo = (function (arglist__13134){
var elem = cljs.core.first(arglist__13134);
arglist__13134 = cljs.core.next(arglist__13134);
var _ = cljs.core.first(arglist__13134);
var args = cljs.core.rest(arglist__13134);
return G__13132__delegate(elem,_,args);
});
G__13132.cljs$core$IFn$_invoke$arity$variadic = G__13132__delegate;
return G__13132;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13135 = cljs.core.seq(kvs);
var chunk__13136 = null;
var count__13137 = (0);
var i__13138 = (0);
while(true){
if((i__13138 < count__13137)){
var vec__13139 = chunk__13136.cljs$core$IIndexed$_nth$arity$2(null,i__13138);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
var k_13141__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13141__$1);
} else {
e.attr(k_13141__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13141__$1:v));
}

var G__13142 = seq__13135;
var G__13143 = chunk__13136;
var G__13144 = count__13137;
var G__13145 = (i__13138 + (1));
seq__13135 = G__13142;
chunk__13136 = G__13143;
count__13137 = G__13144;
i__13138 = G__13145;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13135);
if(temp__4425__auto__){
var seq__13135__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13135__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13135__$1);
var G__13146 = cljs.core.chunk_rest(seq__13135__$1);
var G__13147 = c__5804__auto__;
var G__13148 = cljs.core.count(c__5804__auto__);
var G__13149 = (0);
seq__13135 = G__13146;
chunk__13136 = G__13147;
count__13137 = G__13148;
i__13138 = G__13149;
continue;
} else {
var vec__13140 = cljs.core.first(seq__13135__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140,(1),null);
var k_13150__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13150__$1);
} else {
e.attr(k_13150__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13150__$1:v));
}

var G__13151 = cljs.core.next(seq__13135__$1);
var G__13152 = null;
var G__13153 = (0);
var G__13154 = (0);
seq__13135 = G__13151;
chunk__13136 = G__13152;
count__13137 = G__13153;
i__13138 = G__13154;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__13155_SHARP_){
return cljs.core.zipmap(p1__13155_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__13156 = cljs.core.seq(clmap);
var chunk__13157 = null;
var count__13158 = (0);
var i__13159 = (0);
while(true){
if((i__13159 < count__13158)){
var vec__13160 = chunk__13157.cljs$core$IIndexed$_nth$arity$2(null,i__13159);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13162 = seq__13156;
var G__13163 = chunk__13157;
var G__13164 = count__13158;
var G__13165 = (i__13159 + (1));
seq__13156 = G__13162;
chunk__13157 = G__13163;
count__13158 = G__13164;
i__13159 = G__13165;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13156);
if(temp__4425__auto__){
var seq__13156__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13156__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13156__$1);
var G__13166 = cljs.core.chunk_rest(seq__13156__$1);
var G__13167 = c__5804__auto__;
var G__13168 = cljs.core.count(c__5804__auto__);
var G__13169 = (0);
seq__13156 = G__13166;
chunk__13157 = G__13167;
count__13158 = G__13168;
i__13159 = G__13169;
continue;
} else {
var vec__13161 = cljs.core.first(seq__13156__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13161,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13161,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13170 = cljs.core.next(seq__13156__$1);
var G__13171 = null;
var G__13172 = (0);
var G__13173 = (0);
seq__13156 = G__13170;
chunk__13157 = G__13171;
count__13158 = G__13172;
i__13159 = G__13173;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13174 = cljs.core.seq(kvs);
var chunk__13175 = null;
var count__13176 = (0);
var i__13177 = (0);
while(true){
if((i__13177 < count__13176)){
var vec__13178 = chunk__13175.cljs$core$IIndexed$_nth$arity$2(null,i__13177);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13180 = seq__13174;
var G__13181 = chunk__13175;
var G__13182 = count__13176;
var G__13183 = (i__13177 + (1));
seq__13174 = G__13180;
chunk__13175 = G__13181;
count__13176 = G__13182;
i__13177 = G__13183;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13174);
if(temp__4425__auto__){
var seq__13174__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13174__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13174__$1);
var G__13184 = cljs.core.chunk_rest(seq__13174__$1);
var G__13185 = c__5804__auto__;
var G__13186 = cljs.core.count(c__5804__auto__);
var G__13187 = (0);
seq__13174 = G__13184;
chunk__13175 = G__13185;
count__13176 = G__13186;
i__13177 = G__13187;
continue;
} else {
var vec__13179 = cljs.core.first(seq__13174__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13179,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13188 = cljs.core.next(seq__13174__$1);
var G__13189 = null;
var G__13190 = (0);
var G__13191 = (0);
seq__13174 = G__13188;
chunk__13175 = G__13189;
count__13176 = G__13190;
i__13177 = G__13191;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__13192 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__13193 = (0);
return setTimeout(G__13192,G__13193);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__13194 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13194) : cljs.core.atom.call(null,G__13194));
})();
var prefer_table__5915__auto__ = (function (){var G__13195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13195) : cljs.core.atom.call(null,G__13195));
})();
var method_cache__5916__auto__ = (function (){var G__13196 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13196) : cljs.core.atom.call(null,G__13196));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__13197 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13197) : cljs.core.atom.call(null,G__13197));
})();
var hierarchy__5918__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5918__auto__,method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__13198 = this$__$1.target;
return jQuery(G__13198);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__13213 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13213) : cljs.core.atom.call(null,G__13213));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__13214,G__13215){
return (G__13214.cljs$core$IFn$_invoke$arity$1 ? G__13214.cljs$core$IFn$_invoke$arity$1(G__13215) : G__13214.call(null,G__13215));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__13199_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__13217,G__13218,G__13216){
return (G__13216.cljs$core$IFn$_invoke$arity$2 ? G__13216.cljs$core$IFn$_invoke$arity$2(G__13217,G__13218) : G__13216.call(null,G__13217,G__13218));
});})(on_deck,items_seq))
).call(null,items_seq,p1__13199_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__13200_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__13200_SHARP_) : cljs.core.deref.call(null,p1__13200_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__13200_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__13219 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__13220 = null;
var count__13221 = (0);
var i__13222 = (0);
while(true){
if((i__13222 < count__13221)){
var i = chunk__13220.cljs$core$IIndexed$_nth$arity$2(null,i__13222);
var e_13225 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__13223 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13223) : tpl.call(null,G__13223));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13225);

var G__13226 = seq__13219;
var G__13227 = chunk__13220;
var G__13228 = count__13221;
var G__13229 = (i__13222 + (1));
seq__13219 = G__13226;
chunk__13220 = G__13227;
count__13221 = G__13228;
i__13222 = G__13229;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13219);
if(temp__4425__auto__){
var seq__13219__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13219__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13219__$1);
var G__13230 = cljs.core.chunk_rest(seq__13219__$1);
var G__13231 = c__5804__auto__;
var G__13232 = cljs.core.count(c__5804__auto__);
var G__13233 = (0);
seq__13219 = G__13230;
chunk__13220 = G__13231;
count__13221 = G__13232;
i__13222 = G__13233;
continue;
} else {
var i = cljs.core.first(seq__13219__$1);
var e_13234 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__13224 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13224) : tpl.call(null,G__13224));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13234);

var G__13235 = cljs.core.next(seq__13219__$1);
var G__13236 = null;
var G__13237 = (0);
var G__13238 = (0);
seq__13219 = G__13235;
chunk__13220 = G__13236;
count__13221 = G__13237;
i__13222 = G__13238;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5904__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__5904__auto__)){
var e_13239 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_13239);

var G__13240 = (_ + (1));
_ = G__13240;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
hoplon.core.route_cell = (function hoplon$core$route_cell(){
var args__6066__auto__ = [];
var len__6059__auto___13249 = arguments.length;
var i__6060__auto___13250 = (0);
while(true){
if((i__6060__auto___13250 < len__6059__auto___13249)){
args__6066__auto__.push((arguments[i__6060__auto___13250]));

var G__13251 = (i__6060__auto___13250 + (1));
i__6060__auto___13250 = G__13251;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__13242){
var vec__13243 = p__13242;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13243,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__13243,default$){
return (function (G__13244,G__13246,G__13245){
var or__5020__auto__ = (function (){var and__5008__auto__ = (G__13244.cljs$core$IFn$_invoke$arity$1 ? G__13244.cljs$core$IFn$_invoke$arity$1(G__13245) : G__13244.call(null,G__13245));
if(cljs.core.truth_(and__5008__auto__)){
return G__13245;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__13246;
}
});})(c,vec__13243,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__13243,default$){
return (function (){
var G__13247 = c;
var G__13248 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13247,G__13248) : cljs.core.reset_BANG_.call(null,G__13247,G__13248));
});})(_,c,vec__13243,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq13241){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13241));
});
