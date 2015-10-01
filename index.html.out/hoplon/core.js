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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24356_SHARP_,p2__24357_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24356_SHARP_,p2__24357_SHARP_.getAttribute("static-id"),p2__24357_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args24358 = [];
var len__6059__auto___24363 = arguments.length;
var i__6060__auto___24364 = (0);
while(true){
if((i__6060__auto___24364 < len__6059__auto___24363)){
args24358.push((arguments[i__6060__auto___24364]));

var G__24365 = (i__6060__auto___24364 + (1));
i__6060__auto___24364 = G__24365;
continue;
} else {
}
break;
}

var G__24360 = args24358.length;
switch (G__24360) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24358.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__24361_24367 = init;
var G__24362_24368 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24361_24367,G__24362_24368) : f.call(null,G__24361_24367,G__24362_24368));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__24371 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24371,(0),null);
var more = cljs.core.nthnext(vec__24371,(1));
var vec__24372 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24372,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24372,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("2c7321270f2f4ee3b6d2a7588e75656f")].join(''),f2], null)))));
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
var G__24373 = (i + (1));
var G__24374 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__24373;
ret = G__24374;
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
var G__24376 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__24376) : hoplon.core.$text.call(null,G__24376));
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
var G__24387 = new$__$1;
var vec__24389 = G__24387;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24389,(0),null);
var xs = cljs.core.nthnext(vec__24389,(1));
var G__24388 = hoplon.core.child_vec(this$);
var vec__24390 = G__24388;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24390,(0),null);
var ks = cljs.core.nthnext(vec__24390,(1));
var kids = vec__24390;
var G__24387__$1 = G__24387;
var G__24388__$1 = G__24388;
while(true){
var vec__24391 = G__24387__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(0),null);
var xs__$1 = cljs.core.nthnext(vec__24391,(1));
var vec__24392 = G__24388__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392,(0),null);
var ks__$1 = cljs.core.nthnext(vec__24392,(1));
var kids__$1 = vec__24392;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__24393 = xs__$1;
var G__24394 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__24387__$1 = G__24393;
G__24388__$1 = G__24394;
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
var kids_24397 = (function (){var G__24396 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24396) : cljs.core.atom.call(null,G__24396));
})();
this$__$1.hoplonKids = kids_24397;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_24397,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_24400 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_24401 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_24400) : cljs.core.deref.call(null,kids_24400)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_24400,i_24401,x__$1,this$__$1){
return (function (p1__24399_SHARP_,p2__24398_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_24400,cljs.core.assoc,i_24401,p2__24398_SHARP_);
});})(kids_24400,i_24401,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_24400,cljs.core.assoc,i_24401,x__$1);
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
return (function (p1__24402_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__24402_SHARP_));
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
return (function (p1__24403_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__24403_SHARP_], 0)));
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
return (function (p1__24404_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__24404_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_24405 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_24406 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__24407 = (function (){var and__5008__auto__ = attr_24406;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_24406) : cljs.core.deref.call(null,attr_24406)),kk_24405);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__24407)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_24406,cljs.core.assoc,kk_24405,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__24408_SHARP_){
return p1__24408_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__24409_SHARP_){
return p1__24409_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__24410_SHARP_){
return p1__24410_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__24411_SHARP_){
return p1__24411_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__24414_SHARP_){
return (p1__24414_SHARP_ instanceof Node);
}):(function (p1__24415_SHARP_){
try{return p1__24415_SHARP_.nodeType;
}catch (e24416){if((e24416 instanceof Error)){
var _ = e24416;
return null;
} else {
throw e24416;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__24417_SHARP_){
try{return cljs.core.vector_QMARK_(p1__24417_SHARP_);
}catch (e24418){if((e24418 instanceof Error)){
var _ = e24418;
return null;
} else {
throw e24418;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__24419_SHARP_){
try{return cljs.core.seq_QMARK_(p1__24419_SHARP_);
}catch (e24420){if((e24420 instanceof Error)){
var _ = e24420;
return null;
} else {
throw e24420;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args24421 = [];
var len__6059__auto___24425 = arguments.length;
var i__6060__auto___24426 = (0);
while(true){
if((i__6060__auto___24426 < len__6059__auto___24425)){
args24421.push((arguments[i__6060__auto___24426]));

var G__24427 = (i__6060__auto___24426 + (1));
i__6060__auto___24426 = G__24427;
continue;
} else {
}
break;
}

var G__24423 = args24421.length;
switch (G__24423) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24421.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e24424){if((e24424 instanceof Error)){
var _ = e24424;
return not_found;
} else {
throw e24424;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args24429 = [];
var len__6059__auto___24432 = arguments.length;
var i__6060__auto___24433 = (0);
while(true){
if((i__6060__auto___24433 < len__6059__auto___24432)){
args24429.push((arguments[i__6060__auto___24433]));

var G__24434 = (i__6060__auto___24433 + (1));
i__6060__auto___24433 = G__24434;
continue;
} else {
}
break;
}

var G__24431 = args24429.length;
switch (G__24431) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24429.length)].join('')));

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
var G__24444 = args;
var vec__24445 = G__24444;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24445,(0),null);
var args__$1 = cljs.core.nthnext(vec__24445,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__24444__$1 = G__24444;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__24446 = G__24444__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24446,(0),null);
var args__$2 = cljs.core.nthnext(vec__24446,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__24447 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__24444__$1,attr__$2,kids__$2,vec__24446,arg__$1,args__$2,attr,kids,G__24444,vec__24445,arg,args__$1){
return (function (p1__24436_SHARP_,p2__24437_SHARP_,p3__24438_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__24436_SHARP_,p2__24437_SHARP_,p3__24438_SHARP_);
});})(attr__$1,kids__$1,G__24444__$1,attr__$2,kids__$2,vec__24446,arg__$1,args__$2,attr,kids,G__24444,vec__24445,arg,args__$1))
,attr__$2,arg__$1);
var G__24448 = kids__$2;
var G__24449 = args__$2;
attr__$1 = G__24447;
kids__$1 = G__24448;
G__24444__$1 = G__24449;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__24450 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__24451 = kids__$2;
var G__24452 = cljs.core.rest(args__$2);
attr__$1 = G__24450;
kids__$1 = G__24451;
G__24444__$1 = G__24452;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__24453 = attr__$2;
var G__24454 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__24455 = args__$2;
attr__$1 = G__24453;
kids__$1 = G__24454;
G__24444__$1 = G__24455;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__24456 = attr__$2;
var G__24457 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__24458 = args__$2;
attr__$1 = G__24456;
kids__$1 = G__24457;
G__24444__$1 = G__24458;
continue;
} else {
var G__24459 = attr__$2;
var G__24460 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__24461 = args__$2;
attr__$1 = G__24459;
kids__$1 = G__24460;
G__24444__$1 = G__24461;
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
return (function (p1__24463_SHARP_,p2__24462_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__24462_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__24462_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__24465){
var vec__24472 = p__24465;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(0),null);
var _ = cljs.core.nthnext(vec__24472,(1));
var kids = vec__24472;
var this$__$1 = this$;
var node_24478 = ((function (this$__$1,vec__24472,child_cell,_,kids){
return (function (p1__24464_SHARP_){
if(typeof p1__24464_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__24464_SHARP_) : hoplon.core.$text.call(null,p1__24464_SHARP_));
} else {
if(typeof p1__24464_SHARP_ === 'number'){
var G__24473 = [cljs.core.str(p1__24464_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__24473) : hoplon.core.$text.call(null,G__24473));
} else {
return p1__24464_SHARP_;

}
}
});})(this$__$1,vec__24472,child_cell,_,kids))
;
var seq__24474_24479 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__24475_24480 = null;
var count__24476_24481 = (0);
var i__24477_24482 = (0);
while(true){
if((i__24477_24482 < count__24476_24481)){
var x_24483 = chunk__24475_24480.cljs$core$IIndexed$_nth$arity$2(null,i__24477_24482);
var temp__4425__auto___24484 = node_24478(x_24483);
if(cljs.core.truth_(temp__4425__auto___24484)){
var x_24485__$1 = temp__4425__auto___24484;
hoplon.core.append_child_BANG_(this$__$1,x_24485__$1);
} else {
}

var G__24486 = seq__24474_24479;
var G__24487 = chunk__24475_24480;
var G__24488 = count__24476_24481;
var G__24489 = (i__24477_24482 + (1));
seq__24474_24479 = G__24486;
chunk__24475_24480 = G__24487;
count__24476_24481 = G__24488;
i__24477_24482 = G__24489;
continue;
} else {
var temp__4425__auto___24490 = cljs.core.seq(seq__24474_24479);
if(temp__4425__auto___24490){
var seq__24474_24491__$1 = temp__4425__auto___24490;
if(cljs.core.chunked_seq_QMARK_(seq__24474_24491__$1)){
var c__5804__auto___24492 = cljs.core.chunk_first(seq__24474_24491__$1);
var G__24493 = cljs.core.chunk_rest(seq__24474_24491__$1);
var G__24494 = c__5804__auto___24492;
var G__24495 = cljs.core.count(c__5804__auto___24492);
var G__24496 = (0);
seq__24474_24479 = G__24493;
chunk__24475_24480 = G__24494;
count__24476_24481 = G__24495;
i__24477_24482 = G__24496;
continue;
} else {
var x_24497 = cljs.core.first(seq__24474_24491__$1);
var temp__4425__auto___24498__$1 = node_24478(x_24497);
if(cljs.core.truth_(temp__4425__auto___24498__$1)){
var x_24499__$1 = temp__4425__auto___24498__$1;
hoplon.core.append_child_BANG_(this$__$1,x_24499__$1);
} else {
}

var G__24500 = cljs.core.next(seq__24474_24491__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24503 = (0);
seq__24474_24479 = G__24500;
chunk__24475_24480 = G__24501;
count__24476_24481 = G__24502;
i__24477_24482 = G__24503;
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
var G__24510__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__24505 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24505,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24505,(1),null);
var G__24506 = this$;
hoplon.core.add_attributes_BANG_(G__24506,attr);

hoplon.core.add_children_BANG_(G__24506,kids);

return G__24506;
};
var G__24510 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__24511__i = 0, G__24511__a = new Array(arguments.length -  1);
while (G__24511__i < G__24511__a.length) {G__24511__a[G__24511__i] = arguments[G__24511__i + 1]; ++G__24511__i;}
  args = new cljs.core.IndexedSeq(G__24511__a,0);
} 
return G__24510__delegate.call(this,self__,args);};
G__24510.cljs$lang$maxFixedArity = 1;
G__24510.cljs$lang$applyTo = (function (arglist__24512){
var self__ = cljs.core.first(arglist__24512);
var args = cljs.core.rest(arglist__24512);
return G__24510__delegate(self__,args);
});
G__24510.cljs$core$IFn$_invoke$arity$variadic = G__24510__delegate;
return G__24510;
})()
;

Element.prototype.apply = (function (self__,args24504){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24504)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__24513__delegate = function (args){
var this$ = this;
var vec__24507 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24507,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24507,(1),null);
var G__24508 = this$;
hoplon.core.add_attributes_BANG_(G__24508,attr);

hoplon.core.add_children_BANG_(G__24508,kids);

return G__24508;
};
var G__24513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24514__i = 0, G__24514__a = new Array(arguments.length -  0);
while (G__24514__i < G__24514__a.length) {G__24514__a[G__24514__i] = arguments[G__24514__i + 0]; ++G__24514__i;}
  args = new cljs.core.IndexedSeq(G__24514__a,0);
} 
return G__24513__delegate.call(this,args);};
G__24513.cljs$lang$maxFixedArity = 0;
G__24513.cljs$lang$applyTo = (function (arglist__24515){
var args = cljs.core.seq(arglist__24515);
return G__24513__delegate(args);
});
G__24513.cljs$core$IFn$_invoke$arity$variadic = G__24513__delegate;
return G__24513;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_24516__$1 = cljs.core.name(k);
var e_24517 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_24517.removeAttr(k_24516__$1);
} else {
e_24517.attr(k_24516__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_24516__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e24509){if((e24509 instanceof Error)){
var _ = e24509;
return null;
} else {
throw e24509;

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
var G__24524__delegate = function (args){
var vec__24521 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24521,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24521,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__24522 = elem.hoplonKids;
var G__24523 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24522,G__24523) : cljs.core.reset_BANG_.call(null,G__24522,G__24523));
} else {
return null;
}
};
var G__24524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24525__i = 0, G__24525__a = new Array(arguments.length -  0);
while (G__24525__i < G__24525__a.length) {G__24525__a[G__24525__i] = arguments[G__24525__i + 0]; ++G__24525__i;}
  args = new cljs.core.IndexedSeq(G__24525__a,0);
} 
return G__24524__delegate.call(this,args);};
G__24524.cljs$lang$maxFixedArity = 0;
G__24524.cljs$lang$applyTo = (function (arglist__24526){
var args = cljs.core.seq(arglist__24526);
return G__24524__delegate(args);
});
G__24524.cljs$core$IFn$_invoke$arity$variadic = G__24524__delegate;
return G__24524;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__24527__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__24527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24528__i = 0, G__24528__a = new Array(arguments.length -  0);
while (G__24528__i < G__24528__a.length) {G__24528__a[G__24528__i] = arguments[G__24528__i + 0]; ++G__24528__i;}
  args = new cljs.core.IndexedSeq(G__24528__a,0);
} 
return G__24527__delegate.call(this,args);};
G__24527.cljs$lang$maxFixedArity = 0;
G__24527.cljs$lang$applyTo = (function (arglist__24529){
var args = cljs.core.seq(arglist__24529);
return G__24527__delegate(args);
});
G__24527.cljs$core$IFn$_invoke$arity$variadic = G__24527__delegate;
return G__24527;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___24532 = arguments.length;
var i__6060__auto___24533 = (0);
while(true){
if((i__6060__auto___24533 < len__6059__auto___24532)){
args__6066__auto__.push((arguments[i__6060__auto___24533]));

var G__24534 = (i__6060__auto___24533 + (1));
i__6060__auto___24533 = G__24534;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__24531 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24531,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24531,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq24530){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24530));
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
hoplon.core.$text = (function hoplon$core$$text(p1__24535_SHARP_){
return document.createTextNode(p1__24535_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__24536_SHARP_){
return document.createComment(p1__24536_SHARP_);
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
return jQuery("body").on("submit",(function (p1__24537_SHARP_){
var e = (function (){var G__24538 = p1__24537_SHARP_.target;
return jQuery(G__24538);
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
return p1__24537_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args24539 = [];
var len__6059__auto___24542 = arguments.length;
var i__6060__auto___24543 = (0);
while(true){
if((i__6060__auto___24543 < len__6059__auto___24542)){
args24539.push((arguments[i__6060__auto___24543]));

var G__24544 = (i__6060__auto___24543 + (1));
i__6060__auto___24543 = G__24544;
continue;
} else {
}
break;
}

var G__24541 = args24539.length;
switch (G__24541) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24539.length)].join('')));

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
var args24546 = [];
var len__6059__auto___24549 = arguments.length;
var i__6060__auto___24550 = (0);
while(true){
if((i__6060__auto___24550 < len__6059__auto___24549)){
args24546.push((arguments[i__6060__auto___24550]));

var G__24551 = (i__6060__auto___24550 + (1));
i__6060__auto___24550 = G__24551;
continue;
} else {
}
break;
}

var G__24548 = args24546.length;
switch (G__24548) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24546.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__24553 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24553) : cljs.core.atom.call(null,G__24553));
})();
var prefer_table__5915__auto__ = (function (){var G__24554 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24554) : cljs.core.atom.call(null,G__24554));
})();
var method_cache__5916__auto__ = (function (){var G__24555 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24555) : cljs.core.atom.call(null,G__24555));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__24556 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24556) : cljs.core.atom.call(null,G__24556));
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
var G__24557 = elem;
var G__24558 = cljs.core.cst$kw$attr;
var G__24559 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__24557,G__24558,G__24559) : hoplon.core.do_BANG_.call(null,G__24557,G__24558,G__24559));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__24560__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__24560 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__24561__i = 0, G__24561__a = new Array(arguments.length -  2);
while (G__24561__i < G__24561__a.length) {G__24561__a[G__24561__i] = arguments[G__24561__i + 2]; ++G__24561__i;}
  args = new cljs.core.IndexedSeq(G__24561__a,0);
} 
return G__24560__delegate.call(this,elem,_,args);};
G__24560.cljs$lang$maxFixedArity = 2;
G__24560.cljs$lang$applyTo = (function (arglist__24562){
var elem = cljs.core.first(arglist__24562);
arglist__24562 = cljs.core.next(arglist__24562);
var _ = cljs.core.first(arglist__24562);
var args = cljs.core.rest(arglist__24562);
return G__24560__delegate(elem,_,args);
});
G__24560.cljs$core$IFn$_invoke$arity$variadic = G__24560__delegate;
return G__24560;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__24563 = cljs.core.seq(kvs);
var chunk__24564 = null;
var count__24565 = (0);
var i__24566 = (0);
while(true){
if((i__24566 < count__24565)){
var vec__24567 = chunk__24564.cljs$core$IIndexed$_nth$arity$2(null,i__24566);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(1),null);
var k_24569__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_24569__$1);
} else {
e.attr(k_24569__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_24569__$1:v));
}

var G__24570 = seq__24563;
var G__24571 = chunk__24564;
var G__24572 = count__24565;
var G__24573 = (i__24566 + (1));
seq__24563 = G__24570;
chunk__24564 = G__24571;
count__24565 = G__24572;
i__24566 = G__24573;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24563);
if(temp__4425__auto__){
var seq__24563__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24563__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24563__$1);
var G__24574 = cljs.core.chunk_rest(seq__24563__$1);
var G__24575 = c__5804__auto__;
var G__24576 = cljs.core.count(c__5804__auto__);
var G__24577 = (0);
seq__24563 = G__24574;
chunk__24564 = G__24575;
count__24565 = G__24576;
i__24566 = G__24577;
continue;
} else {
var vec__24568 = cljs.core.first(seq__24563__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24568,(1),null);
var k_24578__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_24578__$1);
} else {
e.attr(k_24578__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_24578__$1:v));
}

var G__24579 = cljs.core.next(seq__24563__$1);
var G__24580 = null;
var G__24581 = (0);
var G__24582 = (0);
seq__24563 = G__24579;
chunk__24564 = G__24580;
count__24565 = G__24581;
i__24566 = G__24582;
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
return (function (p1__24583_SHARP_){
return cljs.core.zipmap(p1__24583_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__24584 = cljs.core.seq(clmap);
var chunk__24585 = null;
var count__24586 = (0);
var i__24587 = (0);
while(true){
if((i__24587 < count__24586)){
var vec__24588 = chunk__24585.cljs$core$IIndexed$_nth$arity$2(null,i__24587);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__24590 = seq__24584;
var G__24591 = chunk__24585;
var G__24592 = count__24586;
var G__24593 = (i__24587 + (1));
seq__24584 = G__24590;
chunk__24585 = G__24591;
count__24586 = G__24592;
i__24587 = G__24593;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24584);
if(temp__4425__auto__){
var seq__24584__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24584__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24584__$1);
var G__24594 = cljs.core.chunk_rest(seq__24584__$1);
var G__24595 = c__5804__auto__;
var G__24596 = cljs.core.count(c__5804__auto__);
var G__24597 = (0);
seq__24584 = G__24594;
chunk__24585 = G__24595;
count__24586 = G__24596;
i__24587 = G__24597;
continue;
} else {
var vec__24589 = cljs.core.first(seq__24584__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24589,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24589,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__24598 = cljs.core.next(seq__24584__$1);
var G__24599 = null;
var G__24600 = (0);
var G__24601 = (0);
seq__24584 = G__24598;
chunk__24585 = G__24599;
count__24586 = G__24600;
i__24587 = G__24601;
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
var seq__24602 = cljs.core.seq(kvs);
var chunk__24603 = null;
var count__24604 = (0);
var i__24605 = (0);
while(true){
if((i__24605 < count__24604)){
var vec__24606 = chunk__24603.cljs$core$IIndexed$_nth$arity$2(null,i__24605);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24606,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__24608 = seq__24602;
var G__24609 = chunk__24603;
var G__24610 = count__24604;
var G__24611 = (i__24605 + (1));
seq__24602 = G__24608;
chunk__24603 = G__24609;
count__24604 = G__24610;
i__24605 = G__24611;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24602);
if(temp__4425__auto__){
var seq__24602__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24602__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24602__$1);
var G__24612 = cljs.core.chunk_rest(seq__24602__$1);
var G__24613 = c__5804__auto__;
var G__24614 = cljs.core.count(c__5804__auto__);
var G__24615 = (0);
seq__24602 = G__24612;
chunk__24603 = G__24613;
count__24604 = G__24614;
i__24605 = G__24615;
continue;
} else {
var vec__24607 = cljs.core.first(seq__24602__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24607,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24607,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__24616 = cljs.core.next(seq__24602__$1);
var G__24617 = null;
var G__24618 = (0);
var G__24619 = (0);
seq__24602 = G__24616;
chunk__24603 = G__24617;
count__24604 = G__24618;
i__24605 = G__24619;
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
var G__24620 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__24621 = (0);
return setTimeout(G__24620,G__24621);
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
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__24622 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24622) : cljs.core.atom.call(null,G__24622));
})();
var prefer_table__5915__auto__ = (function (){var G__24623 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24623) : cljs.core.atom.call(null,G__24623));
})();
var method_cache__5916__auto__ = (function (){var G__24624 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24624) : cljs.core.atom.call(null,G__24624));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__24625 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24625) : cljs.core.atom.call(null,G__24625));
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
return (function (){var G__24626 = this$__$1.target;
return jQuery(G__24626);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__24641 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24641) : cljs.core.atom.call(null,G__24641));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__24642,G__24643){
return (G__24642.cljs$core$IFn$_invoke$arity$1 ? G__24642.cljs$core$IFn$_invoke$arity$1(G__24643) : G__24642.call(null,G__24643));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__24627_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__24645,G__24646,G__24644){
return (G__24644.cljs$core$IFn$_invoke$arity$2 ? G__24644.cljs$core$IFn$_invoke$arity$2(G__24645,G__24646) : G__24644.call(null,G__24645,G__24646));
});})(on_deck,items_seq))
).call(null,items_seq,p1__24627_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__24628_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__24628_SHARP_) : cljs.core.deref.call(null,p1__24628_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__24628_SHARP_,cljs.core.rest);

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
var seq__24647 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__24648 = null;
var count__24649 = (0);
var i__24650 = (0);
while(true){
if((i__24650 < count__24649)){
var i = chunk__24648.cljs$core$IIndexed$_nth$arity$2(null,i__24650);
var e_24653 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__24651 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__24651) : tpl.call(null,G__24651));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_24653);

var G__24654 = seq__24647;
var G__24655 = chunk__24648;
var G__24656 = count__24649;
var G__24657 = (i__24650 + (1));
seq__24647 = G__24654;
chunk__24648 = G__24655;
count__24649 = G__24656;
i__24650 = G__24657;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24647);
if(temp__4425__auto__){
var seq__24647__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24647__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24647__$1);
var G__24658 = cljs.core.chunk_rest(seq__24647__$1);
var G__24659 = c__5804__auto__;
var G__24660 = cljs.core.count(c__5804__auto__);
var G__24661 = (0);
seq__24647 = G__24658;
chunk__24648 = G__24659;
count__24649 = G__24660;
i__24650 = G__24661;
continue;
} else {
var i = cljs.core.first(seq__24647__$1);
var e_24662 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__24652 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__24652) : tpl.call(null,G__24652));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_24662);

var G__24663 = cljs.core.next(seq__24647__$1);
var G__24664 = null;
var G__24665 = (0);
var G__24666 = (0);
seq__24647 = G__24663;
chunk__24648 = G__24664;
count__24649 = G__24665;
i__24650 = G__24666;
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
var e_24667 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_24667);

var G__24668 = (_ + (1));
_ = G__24668;
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
var len__6059__auto___24677 = arguments.length;
var i__6060__auto___24678 = (0);
while(true){
if((i__6060__auto___24678 < len__6059__auto___24677)){
args__6066__auto__.push((arguments[i__6060__auto___24678]));

var G__24679 = (i__6060__auto___24678 + (1));
i__6060__auto___24678 = G__24679;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__24670){
var vec__24671 = p__24670;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24671,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__24671,default$){
return (function (G__24672,G__24674,G__24673){
var or__5020__auto__ = (function (){var and__5008__auto__ = (G__24672.cljs$core$IFn$_invoke$arity$1 ? G__24672.cljs$core$IFn$_invoke$arity$1(G__24673) : G__24672.call(null,G__24673));
if(cljs.core.truth_(and__5008__auto__)){
return G__24673;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__24674;
}
});})(c,vec__24671,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__24671,default$){
return (function (){
var G__24675 = c;
var G__24676 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24675,G__24676) : cljs.core.reset_BANG_.call(null,G__24675,G__24676));
});})(_,c,vec__24671,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq24669){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24669));
});
