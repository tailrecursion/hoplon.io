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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11351_SHARP_,p2__11352_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11351_SHARP_,p2__11352_SHARP_.getAttribute("static-id"),p2__11352_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args11353 = [];
var len__6059__auto___11358 = arguments.length;
var i__6060__auto___11359 = (0);
while(true){
if((i__6060__auto___11359 < len__6059__auto___11358)){
args11353.push((arguments[i__6060__auto___11359]));

var G__11360 = (i__6060__auto___11359 + (1));
i__6060__auto___11359 = G__11360;
continue;
} else {
}
break;
}

var G__11355 = args11353.length;
switch (G__11355) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11353.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__11356_11362 = init;
var G__11357_11363 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11356_11362,G__11357_11363) : f.call(null,G__11356_11362,G__11357_11363));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__11366 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,(0),null);
var more = cljs.core.nthnext(vec__11366,(1));
var vec__11367 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("0749cf70eb4a45e9b2e8ffb75eef3d00")].join(''),f2], null)))));
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
var G__11368 = (i + (1));
var G__11369 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__11368;
ret = G__11369;
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
var G__11371 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11371) : hoplon.core.$text.call(null,G__11371));
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
var G__11382 = new$__$1;
var vec__11384 = G__11382;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11384,(0),null);
var xs = cljs.core.nthnext(vec__11384,(1));
var G__11383 = hoplon.core.child_vec(this$);
var vec__11385 = G__11383;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11385,(0),null);
var ks = cljs.core.nthnext(vec__11385,(1));
var kids = vec__11385;
var G__11382__$1 = G__11382;
var G__11383__$1 = G__11383;
while(true){
var vec__11386 = G__11382__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(0),null);
var xs__$1 = cljs.core.nthnext(vec__11386,(1));
var vec__11387 = G__11383__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11387,(0),null);
var ks__$1 = cljs.core.nthnext(vec__11387,(1));
var kids__$1 = vec__11387;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__11388 = xs__$1;
var G__11389 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__11382__$1 = G__11388;
G__11383__$1 = G__11389;
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
var kids_11392 = (function (){var G__11391 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11391) : cljs.core.atom.call(null,G__11391));
})();
this$__$1.hoplonKids = kids_11392;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_11392,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_11395 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_11396 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_11395) : cljs.core.deref.call(null,kids_11395)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_11395,i_11396,x__$1,this$__$1){
return (function (p1__11394_SHARP_,p2__11393_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11395,cljs.core.assoc,i_11396,p2__11393_SHARP_);
});})(kids_11395,i_11396,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11395,cljs.core.assoc,i_11396,x__$1);
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
return (function (p1__11397_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__11397_SHARP_));
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
return (function (p1__11398_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__11398_SHARP_], 0)));
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
return (function (p1__11399_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__11399_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_11400 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_11401 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__11402 = (function (){var and__5008__auto__ = attr_11401;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_11401) : cljs.core.deref.call(null,attr_11401)),kk_11400);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__11402)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_11401,cljs.core.assoc,kk_11400,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__11403_SHARP_){
return p1__11403_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__11404_SHARP_){
return p1__11404_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__11405_SHARP_){
return p1__11405_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__11406_SHARP_){
return p1__11406_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__11409_SHARP_){
return (p1__11409_SHARP_ instanceof Node);
}):(function (p1__11410_SHARP_){
try{return p1__11410_SHARP_.nodeType;
}catch (e11411){if((e11411 instanceof Error)){
var _ = e11411;
return null;
} else {
throw e11411;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11412_SHARP_){
try{return cljs.core.vector_QMARK_(p1__11412_SHARP_);
}catch (e11413){if((e11413 instanceof Error)){
var _ = e11413;
return null;
} else {
throw e11413;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11414_SHARP_){
try{return cljs.core.seq_QMARK_(p1__11414_SHARP_);
}catch (e11415){if((e11415 instanceof Error)){
var _ = e11415;
return null;
} else {
throw e11415;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args11416 = [];
var len__6059__auto___11420 = arguments.length;
var i__6060__auto___11421 = (0);
while(true){
if((i__6060__auto___11421 < len__6059__auto___11420)){
args11416.push((arguments[i__6060__auto___11421]));

var G__11422 = (i__6060__auto___11421 + (1));
i__6060__auto___11421 = G__11422;
continue;
} else {
}
break;
}

var G__11418 = args11416.length;
switch (G__11418) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11416.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11419){if((e11419 instanceof Error)){
var _ = e11419;
return not_found;
} else {
throw e11419;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args11424 = [];
var len__6059__auto___11427 = arguments.length;
var i__6060__auto___11428 = (0);
while(true){
if((i__6060__auto___11428 < len__6059__auto___11427)){
args11424.push((arguments[i__6060__auto___11428]));

var G__11429 = (i__6060__auto___11428 + (1));
i__6060__auto___11428 = G__11429;
continue;
} else {
}
break;
}

var G__11426 = args11424.length;
switch (G__11426) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11424.length)].join('')));

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
var G__11439 = args;
var vec__11440 = G__11439;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11440,(0),null);
var args__$1 = cljs.core.nthnext(vec__11440,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__11439__$1 = G__11439;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__11441 = G__11439__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11441,(0),null);
var args__$2 = cljs.core.nthnext(vec__11441,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__11442 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__11439__$1,attr__$2,kids__$2,vec__11441,arg__$1,args__$2,attr,kids,G__11439,vec__11440,arg,args__$1){
return (function (p1__11431_SHARP_,p2__11432_SHARP_,p3__11433_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__11431_SHARP_,p2__11432_SHARP_,p3__11433_SHARP_);
});})(attr__$1,kids__$1,G__11439__$1,attr__$2,kids__$2,vec__11441,arg__$1,args__$2,attr,kids,G__11439,vec__11440,arg,args__$1))
,attr__$2,arg__$1);
var G__11443 = kids__$2;
var G__11444 = args__$2;
attr__$1 = G__11442;
kids__$1 = G__11443;
G__11439__$1 = G__11444;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__11445 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__11446 = kids__$2;
var G__11447 = cljs.core.rest(args__$2);
attr__$1 = G__11445;
kids__$1 = G__11446;
G__11439__$1 = G__11447;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__11448 = attr__$2;
var G__11449 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11450 = args__$2;
attr__$1 = G__11448;
kids__$1 = G__11449;
G__11439__$1 = G__11450;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__11451 = attr__$2;
var G__11452 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11453 = args__$2;
attr__$1 = G__11451;
kids__$1 = G__11452;
G__11439__$1 = G__11453;
continue;
} else {
var G__11454 = attr__$2;
var G__11455 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__11456 = args__$2;
attr__$1 = G__11454;
kids__$1 = G__11455;
G__11439__$1 = G__11456;
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
return (function (p1__11458_SHARP_,p2__11457_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__11457_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__11457_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__11460){
var vec__11467 = p__11460;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(0),null);
var _ = cljs.core.nthnext(vec__11467,(1));
var kids = vec__11467;
var this$__$1 = this$;
var node_11473 = ((function (this$__$1,vec__11467,child_cell,_,kids){
return (function (p1__11459_SHARP_){
if(typeof p1__11459_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__11459_SHARP_) : hoplon.core.$text.call(null,p1__11459_SHARP_));
} else {
if(typeof p1__11459_SHARP_ === 'number'){
var G__11468 = [cljs.core.str(p1__11459_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11468) : hoplon.core.$text.call(null,G__11468));
} else {
return p1__11459_SHARP_;

}
}
});})(this$__$1,vec__11467,child_cell,_,kids))
;
var seq__11469_11474 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__11470_11475 = null;
var count__11471_11476 = (0);
var i__11472_11477 = (0);
while(true){
if((i__11472_11477 < count__11471_11476)){
var x_11478 = chunk__11470_11475.cljs$core$IIndexed$_nth$arity$2(null,i__11472_11477);
var temp__4425__auto___11479 = node_11473(x_11478);
if(cljs.core.truth_(temp__4425__auto___11479)){
var x_11480__$1 = temp__4425__auto___11479;
hoplon.core.append_child_BANG_(this$__$1,x_11480__$1);
} else {
}

var G__11481 = seq__11469_11474;
var G__11482 = chunk__11470_11475;
var G__11483 = count__11471_11476;
var G__11484 = (i__11472_11477 + (1));
seq__11469_11474 = G__11481;
chunk__11470_11475 = G__11482;
count__11471_11476 = G__11483;
i__11472_11477 = G__11484;
continue;
} else {
var temp__4425__auto___11485 = cljs.core.seq(seq__11469_11474);
if(temp__4425__auto___11485){
var seq__11469_11486__$1 = temp__4425__auto___11485;
if(cljs.core.chunked_seq_QMARK_(seq__11469_11486__$1)){
var c__5804__auto___11487 = cljs.core.chunk_first(seq__11469_11486__$1);
var G__11488 = cljs.core.chunk_rest(seq__11469_11486__$1);
var G__11489 = c__5804__auto___11487;
var G__11490 = cljs.core.count(c__5804__auto___11487);
var G__11491 = (0);
seq__11469_11474 = G__11488;
chunk__11470_11475 = G__11489;
count__11471_11476 = G__11490;
i__11472_11477 = G__11491;
continue;
} else {
var x_11492 = cljs.core.first(seq__11469_11486__$1);
var temp__4425__auto___11493__$1 = node_11473(x_11492);
if(cljs.core.truth_(temp__4425__auto___11493__$1)){
var x_11494__$1 = temp__4425__auto___11493__$1;
hoplon.core.append_child_BANG_(this$__$1,x_11494__$1);
} else {
}

var G__11495 = cljs.core.next(seq__11469_11486__$1);
var G__11496 = null;
var G__11497 = (0);
var G__11498 = (0);
seq__11469_11474 = G__11495;
chunk__11470_11475 = G__11496;
count__11471_11476 = G__11497;
i__11472_11477 = G__11498;
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
var G__11505__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__11500 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11500,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11500,(1),null);
var G__11501 = this$;
hoplon.core.add_attributes_BANG_(G__11501,attr);

hoplon.core.add_children_BANG_(G__11501,kids);

return G__11501;
};
var G__11505 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11506__i = 0, G__11506__a = new Array(arguments.length -  1);
while (G__11506__i < G__11506__a.length) {G__11506__a[G__11506__i] = arguments[G__11506__i + 1]; ++G__11506__i;}
  args = new cljs.core.IndexedSeq(G__11506__a,0);
} 
return G__11505__delegate.call(this,self__,args);};
G__11505.cljs$lang$maxFixedArity = 1;
G__11505.cljs$lang$applyTo = (function (arglist__11507){
var self__ = cljs.core.first(arglist__11507);
var args = cljs.core.rest(arglist__11507);
return G__11505__delegate(self__,args);
});
G__11505.cljs$core$IFn$_invoke$arity$variadic = G__11505__delegate;
return G__11505;
})()
;

Element.prototype.apply = (function (self__,args11499){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11499)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11508__delegate = function (args){
var this$ = this;
var vec__11502 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11502,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11502,(1),null);
var G__11503 = this$;
hoplon.core.add_attributes_BANG_(G__11503,attr);

hoplon.core.add_children_BANG_(G__11503,kids);

return G__11503;
};
var G__11508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11509__i = 0, G__11509__a = new Array(arguments.length -  0);
while (G__11509__i < G__11509__a.length) {G__11509__a[G__11509__i] = arguments[G__11509__i + 0]; ++G__11509__i;}
  args = new cljs.core.IndexedSeq(G__11509__a,0);
} 
return G__11508__delegate.call(this,args);};
G__11508.cljs$lang$maxFixedArity = 0;
G__11508.cljs$lang$applyTo = (function (arglist__11510){
var args = cljs.core.seq(arglist__11510);
return G__11508__delegate(args);
});
G__11508.cljs$core$IFn$_invoke$arity$variadic = G__11508__delegate;
return G__11508;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_11511__$1 = cljs.core.name(k);
var e_11512 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_11512.removeAttr(k_11511__$1);
} else {
e_11512.attr(k_11511__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11511__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e11504){if((e11504 instanceof Error)){
var _ = e11504;
return null;
} else {
throw e11504;

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
var G__11519__delegate = function (args){
var vec__11516 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__11517 = elem.hoplonKids;
var G__11518 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11517,G__11518) : cljs.core.reset_BANG_.call(null,G__11517,G__11518));
} else {
return null;
}
};
var G__11519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11520__i = 0, G__11520__a = new Array(arguments.length -  0);
while (G__11520__i < G__11520__a.length) {G__11520__a[G__11520__i] = arguments[G__11520__i + 0]; ++G__11520__i;}
  args = new cljs.core.IndexedSeq(G__11520__a,0);
} 
return G__11519__delegate.call(this,args);};
G__11519.cljs$lang$maxFixedArity = 0;
G__11519.cljs$lang$applyTo = (function (arglist__11521){
var args = cljs.core.seq(arglist__11521);
return G__11519__delegate(args);
});
G__11519.cljs$core$IFn$_invoke$arity$variadic = G__11519__delegate;
return G__11519;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__11522__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__11522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11523__i = 0, G__11523__a = new Array(arguments.length -  0);
while (G__11523__i < G__11523__a.length) {G__11523__a[G__11523__i] = arguments[G__11523__i + 0]; ++G__11523__i;}
  args = new cljs.core.IndexedSeq(G__11523__a,0);
} 
return G__11522__delegate.call(this,args);};
G__11522.cljs$lang$maxFixedArity = 0;
G__11522.cljs$lang$applyTo = (function (arglist__11524){
var args = cljs.core.seq(arglist__11524);
return G__11522__delegate(args);
});
G__11522.cljs$core$IFn$_invoke$arity$variadic = G__11522__delegate;
return G__11522;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___11527 = arguments.length;
var i__6060__auto___11528 = (0);
while(true){
if((i__6060__auto___11528 < len__6059__auto___11527)){
args__6066__auto__.push((arguments[i__6060__auto___11528]));

var G__11529 = (i__6060__auto___11528 + (1));
i__6060__auto___11528 = G__11529;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__11526 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq11525){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11525));
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
hoplon.core.$text = (function hoplon$core$$text(p1__11530_SHARP_){
return document.createTextNode(p1__11530_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11531_SHARP_){
return document.createComment(p1__11531_SHARP_);
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
return jQuery("body").on("submit",(function (p1__11532_SHARP_){
var e = (function (){var G__11533 = p1__11532_SHARP_.target;
return jQuery(G__11533);
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
return p1__11532_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args11534 = [];
var len__6059__auto___11537 = arguments.length;
var i__6060__auto___11538 = (0);
while(true){
if((i__6060__auto___11538 < len__6059__auto___11537)){
args11534.push((arguments[i__6060__auto___11538]));

var G__11539 = (i__6060__auto___11538 + (1));
i__6060__auto___11538 = G__11539;
continue;
} else {
}
break;
}

var G__11536 = args11534.length;
switch (G__11536) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11534.length)].join('')));

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
var args11541 = [];
var len__6059__auto___11544 = arguments.length;
var i__6060__auto___11545 = (0);
while(true){
if((i__6060__auto___11545 < len__6059__auto___11544)){
args11541.push((arguments[i__6060__auto___11545]));

var G__11546 = (i__6060__auto___11545 + (1));
i__6060__auto___11545 = G__11546;
continue;
} else {
}
break;
}

var G__11543 = args11541.length;
switch (G__11543) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11541.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__11548 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11548) : cljs.core.atom.call(null,G__11548));
})();
var prefer_table__5915__auto__ = (function (){var G__11549 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11549) : cljs.core.atom.call(null,G__11549));
})();
var method_cache__5916__auto__ = (function (){var G__11550 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11550) : cljs.core.atom.call(null,G__11550));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__11551 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11551) : cljs.core.atom.call(null,G__11551));
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
var G__11552 = elem;
var G__11553 = cljs.core.cst$kw$attr;
var G__11554 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11552,G__11553,G__11554) : hoplon.core.do_BANG_.call(null,G__11552,G__11553,G__11554));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__11555__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__11555 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__11556__i = 0, G__11556__a = new Array(arguments.length -  2);
while (G__11556__i < G__11556__a.length) {G__11556__a[G__11556__i] = arguments[G__11556__i + 2]; ++G__11556__i;}
  args = new cljs.core.IndexedSeq(G__11556__a,0);
} 
return G__11555__delegate.call(this,elem,_,args);};
G__11555.cljs$lang$maxFixedArity = 2;
G__11555.cljs$lang$applyTo = (function (arglist__11557){
var elem = cljs.core.first(arglist__11557);
arglist__11557 = cljs.core.next(arglist__11557);
var _ = cljs.core.first(arglist__11557);
var args = cljs.core.rest(arglist__11557);
return G__11555__delegate(elem,_,args);
});
G__11555.cljs$core$IFn$_invoke$arity$variadic = G__11555__delegate;
return G__11555;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__11558 = cljs.core.seq(kvs);
var chunk__11559 = null;
var count__11560 = (0);
var i__11561 = (0);
while(true){
if((i__11561 < count__11560)){
var vec__11562 = chunk__11559.cljs$core$IIndexed$_nth$arity$2(null,i__11561);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,(1),null);
var k_11564__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11564__$1);
} else {
e.attr(k_11564__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11564__$1:v));
}

var G__11565 = seq__11558;
var G__11566 = chunk__11559;
var G__11567 = count__11560;
var G__11568 = (i__11561 + (1));
seq__11558 = G__11565;
chunk__11559 = G__11566;
count__11560 = G__11567;
i__11561 = G__11568;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11558);
if(temp__4425__auto__){
var seq__11558__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11558__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__11558__$1);
var G__11569 = cljs.core.chunk_rest(seq__11558__$1);
var G__11570 = c__5804__auto__;
var G__11571 = cljs.core.count(c__5804__auto__);
var G__11572 = (0);
seq__11558 = G__11569;
chunk__11559 = G__11570;
count__11560 = G__11571;
i__11561 = G__11572;
continue;
} else {
var vec__11563 = cljs.core.first(seq__11558__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11563,(1),null);
var k_11573__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11573__$1);
} else {
e.attr(k_11573__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11573__$1:v));
}

var G__11574 = cljs.core.next(seq__11558__$1);
var G__11575 = null;
var G__11576 = (0);
var G__11577 = (0);
seq__11558 = G__11574;
chunk__11559 = G__11575;
count__11560 = G__11576;
i__11561 = G__11577;
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
return (function (p1__11578_SHARP_){
return cljs.core.zipmap(p1__11578_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__11579 = cljs.core.seq(clmap);
var chunk__11580 = null;
var count__11581 = (0);
var i__11582 = (0);
while(true){
if((i__11582 < count__11581)){
var vec__11583 = chunk__11580.cljs$core$IIndexed$_nth$arity$2(null,i__11582);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11583,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11583,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11585 = seq__11579;
var G__11586 = chunk__11580;
var G__11587 = count__11581;
var G__11588 = (i__11582 + (1));
seq__11579 = G__11585;
chunk__11580 = G__11586;
count__11581 = G__11587;
i__11582 = G__11588;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11579);
if(temp__4425__auto__){
var seq__11579__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11579__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__11579__$1);
var G__11589 = cljs.core.chunk_rest(seq__11579__$1);
var G__11590 = c__5804__auto__;
var G__11591 = cljs.core.count(c__5804__auto__);
var G__11592 = (0);
seq__11579 = G__11589;
chunk__11580 = G__11590;
count__11581 = G__11591;
i__11582 = G__11592;
continue;
} else {
var vec__11584 = cljs.core.first(seq__11579__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11584,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11584,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11593 = cljs.core.next(seq__11579__$1);
var G__11594 = null;
var G__11595 = (0);
var G__11596 = (0);
seq__11579 = G__11593;
chunk__11580 = G__11594;
count__11581 = G__11595;
i__11582 = G__11596;
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
var seq__11597 = cljs.core.seq(kvs);
var chunk__11598 = null;
var count__11599 = (0);
var i__11600 = (0);
while(true){
if((i__11600 < count__11599)){
var vec__11601 = chunk__11598.cljs$core$IIndexed$_nth$arity$2(null,i__11600);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11601,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11603 = seq__11597;
var G__11604 = chunk__11598;
var G__11605 = count__11599;
var G__11606 = (i__11600 + (1));
seq__11597 = G__11603;
chunk__11598 = G__11604;
count__11599 = G__11605;
i__11600 = G__11606;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11597);
if(temp__4425__auto__){
var seq__11597__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11597__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__11597__$1);
var G__11607 = cljs.core.chunk_rest(seq__11597__$1);
var G__11608 = c__5804__auto__;
var G__11609 = cljs.core.count(c__5804__auto__);
var G__11610 = (0);
seq__11597 = G__11607;
chunk__11598 = G__11608;
count__11599 = G__11609;
i__11600 = G__11610;
continue;
} else {
var vec__11602 = cljs.core.first(seq__11597__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11602,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11611 = cljs.core.next(seq__11597__$1);
var G__11612 = null;
var G__11613 = (0);
var G__11614 = (0);
seq__11597 = G__11611;
chunk__11598 = G__11612;
count__11599 = G__11613;
i__11600 = G__11614;
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
var G__11615 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__11616 = (0);
return setTimeout(G__11615,G__11616);
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
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__11617 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11617) : cljs.core.atom.call(null,G__11617));
})();
var prefer_table__5915__auto__ = (function (){var G__11618 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11618) : cljs.core.atom.call(null,G__11618));
})();
var method_cache__5916__auto__ = (function (){var G__11619 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11619) : cljs.core.atom.call(null,G__11619));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__11620 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11620) : cljs.core.atom.call(null,G__11620));
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
return (function (){var G__11621 = this$__$1.target;
return jQuery(G__11621);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__11636 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11636) : cljs.core.atom.call(null,G__11636));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__11637,G__11638){
return (G__11637.cljs$core$IFn$_invoke$arity$1 ? G__11637.cljs$core$IFn$_invoke$arity$1(G__11638) : G__11637.call(null,G__11638));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__11622_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__11641,G__11640,G__11639){
return (G__11639.cljs$core$IFn$_invoke$arity$2 ? G__11639.cljs$core$IFn$_invoke$arity$2(G__11640,G__11641) : G__11639.call(null,G__11640,G__11641));
});})(on_deck,items_seq))
).call(null,p1__11622_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__11623_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__11623_SHARP_) : cljs.core.deref.call(null,p1__11623_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__11623_SHARP_,cljs.core.rest);

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
var seq__11642 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__11643 = null;
var count__11644 = (0);
var i__11645 = (0);
while(true){
if((i__11645 < count__11644)){
var i = chunk__11643.cljs$core$IIndexed$_nth$arity$2(null,i__11645);
var e_11648 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__11646 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11646) : tpl.call(null,G__11646));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_11648);

var G__11649 = seq__11642;
var G__11650 = chunk__11643;
var G__11651 = count__11644;
var G__11652 = (i__11645 + (1));
seq__11642 = G__11649;
chunk__11643 = G__11650;
count__11644 = G__11651;
i__11645 = G__11652;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11642);
if(temp__4425__auto__){
var seq__11642__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11642__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__11642__$1);
var G__11653 = cljs.core.chunk_rest(seq__11642__$1);
var G__11654 = c__5804__auto__;
var G__11655 = cljs.core.count(c__5804__auto__);
var G__11656 = (0);
seq__11642 = G__11653;
chunk__11643 = G__11654;
count__11644 = G__11655;
i__11645 = G__11656;
continue;
} else {
var i = cljs.core.first(seq__11642__$1);
var e_11657 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__11647 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11647) : tpl.call(null,G__11647));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_11657);

var G__11658 = cljs.core.next(seq__11642__$1);
var G__11659 = null;
var G__11660 = (0);
var G__11661 = (0);
seq__11642 = G__11658;
chunk__11643 = G__11659;
count__11644 = G__11660;
i__11645 = G__11661;
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
var e_11662 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_11662);

var G__11663 = (_ + (1));
_ = G__11663;
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
var len__6059__auto___11672 = arguments.length;
var i__6060__auto___11673 = (0);
while(true){
if((i__6060__auto___11673 < len__6059__auto___11672)){
args__6066__auto__.push((arguments[i__6060__auto___11673]));

var G__11674 = (i__6060__auto___11673 + (1));
i__6060__auto___11673 = G__11674;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11665){
var vec__11666 = p__11665;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11666,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__11666,default$){
return (function (G__11667,G__11669,G__11668){
var or__5020__auto__ = (function (){var and__5008__auto__ = (G__11667.cljs$core$IFn$_invoke$arity$1 ? G__11667.cljs$core$IFn$_invoke$arity$1(G__11668) : G__11667.call(null,G__11668));
if(cljs.core.truth_(and__5008__auto__)){
return G__11668;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__11669;
}
});})(c,vec__11666,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__11666,default$){
return (function (){
var G__11670 = c;
var G__11671 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11670,G__11671) : cljs.core.reset_BANG_.call(null,G__11670,G__11671));
});})(_,c,vec__11666,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq11664){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11664));
});
