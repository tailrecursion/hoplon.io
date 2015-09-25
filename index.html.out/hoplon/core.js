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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24472_SHARP_,p2__24473_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24472_SHARP_,p2__24473_SHARP_.getAttribute("static-id"),p2__24473_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args24474 = [];
var len__6059__auto___24479 = arguments.length;
var i__6060__auto___24480 = (0);
while(true){
if((i__6060__auto___24480 < len__6059__auto___24479)){
args24474.push((arguments[i__6060__auto___24480]));

var G__24481 = (i__6060__auto___24480 + (1));
i__6060__auto___24480 = G__24481;
continue;
} else {
}
break;
}

var G__24476 = args24474.length;
switch (G__24476) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24474.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__24477_24483 = init;
var G__24478_24484 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24477_24483,G__24478_24484) : f.call(null,G__24477_24483,G__24478_24484));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__24487 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24487,(0),null);
var more = cljs.core.nthnext(vec__24487,(1));
var vec__24488 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24488,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24488,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("86681d0d29c64b398448550c316b9a08")].join(''),f2], null)))));
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
var G__24489 = (i + (1));
var G__24490 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__24489;
ret = G__24490;
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
var G__24492 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__24492) : hoplon.core.$text.call(null,G__24492));
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
var G__24503 = new$__$1;
var vec__24505 = G__24503;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24505,(0),null);
var xs = cljs.core.nthnext(vec__24505,(1));
var G__24504 = hoplon.core.child_vec(this$);
var vec__24506 = G__24504;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(0),null);
var ks = cljs.core.nthnext(vec__24506,(1));
var kids = vec__24506;
var G__24503__$1 = G__24503;
var G__24504__$1 = G__24504;
while(true){
var vec__24507 = G__24503__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24507,(0),null);
var xs__$1 = cljs.core.nthnext(vec__24507,(1));
var vec__24508 = G__24504__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(0),null);
var ks__$1 = cljs.core.nthnext(vec__24508,(1));
var kids__$1 = vec__24508;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__24509 = xs__$1;
var G__24510 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__24503__$1 = G__24509;
G__24504__$1 = G__24510;
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
var kids_24513 = (function (){var G__24512 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24512) : cljs.core.atom.call(null,G__24512));
})();
this$__$1.hoplonKids = kids_24513;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_24513,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_24516 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_24517 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_24516) : cljs.core.deref.call(null,kids_24516)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_24516,i_24517,x__$1,this$__$1){
return (function (p1__24515_SHARP_,p2__24514_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_24516,cljs.core.assoc,i_24517,p2__24514_SHARP_);
});})(kids_24516,i_24517,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_24516,cljs.core.assoc,i_24517,x__$1);
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
return (function (p1__24518_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__24518_SHARP_));
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
return (function (p1__24519_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__24519_SHARP_], 0)));
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
return (function (p1__24520_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__24520_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_24521 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_24522 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__24523 = (function (){var and__5008__auto__ = attr_24522;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_24522) : cljs.core.deref.call(null,attr_24522)),kk_24521);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__24523)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_24522,cljs.core.assoc,kk_24521,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__24524_SHARP_){
return p1__24524_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__24525_SHARP_){
return p1__24525_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__24526_SHARP_){
return p1__24526_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__24527_SHARP_){
return p1__24527_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__24530_SHARP_){
return (p1__24530_SHARP_ instanceof Node);
}):(function (p1__24531_SHARP_){
try{return p1__24531_SHARP_.nodeType;
}catch (e24532){if((e24532 instanceof Error)){
var _ = e24532;
return null;
} else {
throw e24532;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__24533_SHARP_){
try{return cljs.core.vector_QMARK_(p1__24533_SHARP_);
}catch (e24534){if((e24534 instanceof Error)){
var _ = e24534;
return null;
} else {
throw e24534;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__24535_SHARP_){
try{return cljs.core.seq_QMARK_(p1__24535_SHARP_);
}catch (e24536){if((e24536 instanceof Error)){
var _ = e24536;
return null;
} else {
throw e24536;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args24537 = [];
var len__6059__auto___24541 = arguments.length;
var i__6060__auto___24542 = (0);
while(true){
if((i__6060__auto___24542 < len__6059__auto___24541)){
args24537.push((arguments[i__6060__auto___24542]));

var G__24543 = (i__6060__auto___24542 + (1));
i__6060__auto___24542 = G__24543;
continue;
} else {
}
break;
}

var G__24539 = args24537.length;
switch (G__24539) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24537.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e24540){if((e24540 instanceof Error)){
var _ = e24540;
return not_found;
} else {
throw e24540;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args24545 = [];
var len__6059__auto___24548 = arguments.length;
var i__6060__auto___24549 = (0);
while(true){
if((i__6060__auto___24549 < len__6059__auto___24548)){
args24545.push((arguments[i__6060__auto___24549]));

var G__24550 = (i__6060__auto___24549 + (1));
i__6060__auto___24549 = G__24550;
continue;
} else {
}
break;
}

var G__24547 = args24545.length;
switch (G__24547) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24545.length)].join('')));

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
var G__24560 = args;
var vec__24561 = G__24560;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24561,(0),null);
var args__$1 = cljs.core.nthnext(vec__24561,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__24560__$1 = G__24560;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__24562 = G__24560__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24562,(0),null);
var args__$2 = cljs.core.nthnext(vec__24562,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__24563 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__24560__$1,attr__$2,kids__$2,vec__24562,arg__$1,args__$2,attr,kids,G__24560,vec__24561,arg,args__$1){
return (function (p1__24552_SHARP_,p2__24553_SHARP_,p3__24554_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__24552_SHARP_,p2__24553_SHARP_,p3__24554_SHARP_);
});})(attr__$1,kids__$1,G__24560__$1,attr__$2,kids__$2,vec__24562,arg__$1,args__$2,attr,kids,G__24560,vec__24561,arg,args__$1))
,attr__$2,arg__$1);
var G__24564 = kids__$2;
var G__24565 = args__$2;
attr__$1 = G__24563;
kids__$1 = G__24564;
G__24560__$1 = G__24565;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__24566 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__24567 = kids__$2;
var G__24568 = cljs.core.rest(args__$2);
attr__$1 = G__24566;
kids__$1 = G__24567;
G__24560__$1 = G__24568;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__24569 = attr__$2;
var G__24570 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__24571 = args__$2;
attr__$1 = G__24569;
kids__$1 = G__24570;
G__24560__$1 = G__24571;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__24572 = attr__$2;
var G__24573 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__24574 = args__$2;
attr__$1 = G__24572;
kids__$1 = G__24573;
G__24560__$1 = G__24574;
continue;
} else {
var G__24575 = attr__$2;
var G__24576 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__24577 = args__$2;
attr__$1 = G__24575;
kids__$1 = G__24576;
G__24560__$1 = G__24577;
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
return (function (p1__24579_SHARP_,p2__24578_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__24578_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__24578_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__24581){
var vec__24588 = p__24581;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(0),null);
var _ = cljs.core.nthnext(vec__24588,(1));
var kids = vec__24588;
var this$__$1 = this$;
var node_24594 = ((function (this$__$1,vec__24588,child_cell,_,kids){
return (function (p1__24580_SHARP_){
if(typeof p1__24580_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__24580_SHARP_) : hoplon.core.$text.call(null,p1__24580_SHARP_));
} else {
if(typeof p1__24580_SHARP_ === 'number'){
var G__24589 = [cljs.core.str(p1__24580_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__24589) : hoplon.core.$text.call(null,G__24589));
} else {
return p1__24580_SHARP_;

}
}
});})(this$__$1,vec__24588,child_cell,_,kids))
;
var seq__24590_24595 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__24591_24596 = null;
var count__24592_24597 = (0);
var i__24593_24598 = (0);
while(true){
if((i__24593_24598 < count__24592_24597)){
var x_24599 = chunk__24591_24596.cljs$core$IIndexed$_nth$arity$2(null,i__24593_24598);
var temp__4425__auto___24600 = node_24594(x_24599);
if(cljs.core.truth_(temp__4425__auto___24600)){
var x_24601__$1 = temp__4425__auto___24600;
hoplon.core.append_child_BANG_(this$__$1,x_24601__$1);
} else {
}

var G__24602 = seq__24590_24595;
var G__24603 = chunk__24591_24596;
var G__24604 = count__24592_24597;
var G__24605 = (i__24593_24598 + (1));
seq__24590_24595 = G__24602;
chunk__24591_24596 = G__24603;
count__24592_24597 = G__24604;
i__24593_24598 = G__24605;
continue;
} else {
var temp__4425__auto___24606 = cljs.core.seq(seq__24590_24595);
if(temp__4425__auto___24606){
var seq__24590_24607__$1 = temp__4425__auto___24606;
if(cljs.core.chunked_seq_QMARK_(seq__24590_24607__$1)){
var c__5804__auto___24608 = cljs.core.chunk_first(seq__24590_24607__$1);
var G__24609 = cljs.core.chunk_rest(seq__24590_24607__$1);
var G__24610 = c__5804__auto___24608;
var G__24611 = cljs.core.count(c__5804__auto___24608);
var G__24612 = (0);
seq__24590_24595 = G__24609;
chunk__24591_24596 = G__24610;
count__24592_24597 = G__24611;
i__24593_24598 = G__24612;
continue;
} else {
var x_24613 = cljs.core.first(seq__24590_24607__$1);
var temp__4425__auto___24614__$1 = node_24594(x_24613);
if(cljs.core.truth_(temp__4425__auto___24614__$1)){
var x_24615__$1 = temp__4425__auto___24614__$1;
hoplon.core.append_child_BANG_(this$__$1,x_24615__$1);
} else {
}

var G__24616 = cljs.core.next(seq__24590_24607__$1);
var G__24617 = null;
var G__24618 = (0);
var G__24619 = (0);
seq__24590_24595 = G__24616;
chunk__24591_24596 = G__24617;
count__24592_24597 = G__24618;
i__24593_24598 = G__24619;
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
var G__24626__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__24621 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24621,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24621,(1),null);
var G__24622 = this$;
hoplon.core.add_attributes_BANG_(G__24622,attr);

hoplon.core.add_children_BANG_(G__24622,kids);

return G__24622;
};
var G__24626 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__24627__i = 0, G__24627__a = new Array(arguments.length -  1);
while (G__24627__i < G__24627__a.length) {G__24627__a[G__24627__i] = arguments[G__24627__i + 1]; ++G__24627__i;}
  args = new cljs.core.IndexedSeq(G__24627__a,0);
} 
return G__24626__delegate.call(this,self__,args);};
G__24626.cljs$lang$maxFixedArity = 1;
G__24626.cljs$lang$applyTo = (function (arglist__24628){
var self__ = cljs.core.first(arglist__24628);
var args = cljs.core.rest(arglist__24628);
return G__24626__delegate(self__,args);
});
G__24626.cljs$core$IFn$_invoke$arity$variadic = G__24626__delegate;
return G__24626;
})()
;

Element.prototype.apply = (function (self__,args24620){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24620)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__24629__delegate = function (args){
var this$ = this;
var vec__24623 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24623,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24623,(1),null);
var G__24624 = this$;
hoplon.core.add_attributes_BANG_(G__24624,attr);

hoplon.core.add_children_BANG_(G__24624,kids);

return G__24624;
};
var G__24629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24630__i = 0, G__24630__a = new Array(arguments.length -  0);
while (G__24630__i < G__24630__a.length) {G__24630__a[G__24630__i] = arguments[G__24630__i + 0]; ++G__24630__i;}
  args = new cljs.core.IndexedSeq(G__24630__a,0);
} 
return G__24629__delegate.call(this,args);};
G__24629.cljs$lang$maxFixedArity = 0;
G__24629.cljs$lang$applyTo = (function (arglist__24631){
var args = cljs.core.seq(arglist__24631);
return G__24629__delegate(args);
});
G__24629.cljs$core$IFn$_invoke$arity$variadic = G__24629__delegate;
return G__24629;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_24632__$1 = cljs.core.name(k);
var e_24633 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_24633.removeAttr(k_24632__$1);
} else {
e_24633.attr(k_24632__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_24632__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e24625){if((e24625 instanceof Error)){
var _ = e24625;
return null;
} else {
throw e24625;

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
var G__24640__delegate = function (args){
var vec__24637 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24637,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24637,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__24638 = elem.hoplonKids;
var G__24639 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24638,G__24639) : cljs.core.reset_BANG_.call(null,G__24638,G__24639));
} else {
return null;
}
};
var G__24640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24641__i = 0, G__24641__a = new Array(arguments.length -  0);
while (G__24641__i < G__24641__a.length) {G__24641__a[G__24641__i] = arguments[G__24641__i + 0]; ++G__24641__i;}
  args = new cljs.core.IndexedSeq(G__24641__a,0);
} 
return G__24640__delegate.call(this,args);};
G__24640.cljs$lang$maxFixedArity = 0;
G__24640.cljs$lang$applyTo = (function (arglist__24642){
var args = cljs.core.seq(arglist__24642);
return G__24640__delegate(args);
});
G__24640.cljs$core$IFn$_invoke$arity$variadic = G__24640__delegate;
return G__24640;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__24643__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__24643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24644__i = 0, G__24644__a = new Array(arguments.length -  0);
while (G__24644__i < G__24644__a.length) {G__24644__a[G__24644__i] = arguments[G__24644__i + 0]; ++G__24644__i;}
  args = new cljs.core.IndexedSeq(G__24644__a,0);
} 
return G__24643__delegate.call(this,args);};
G__24643.cljs$lang$maxFixedArity = 0;
G__24643.cljs$lang$applyTo = (function (arglist__24645){
var args = cljs.core.seq(arglist__24645);
return G__24643__delegate(args);
});
G__24643.cljs$core$IFn$_invoke$arity$variadic = G__24643__delegate;
return G__24643;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___24648 = arguments.length;
var i__6060__auto___24649 = (0);
while(true){
if((i__6060__auto___24649 < len__6059__auto___24648)){
args__6066__auto__.push((arguments[i__6060__auto___24649]));

var G__24650 = (i__6060__auto___24649 + (1));
i__6060__auto___24649 = G__24650;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__24647 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24647,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24647,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq24646){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24646));
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
hoplon.core.$text = (function hoplon$core$$text(p1__24651_SHARP_){
return document.createTextNode(p1__24651_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__24652_SHARP_){
return document.createComment(p1__24652_SHARP_);
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
return jQuery("body").on("submit",(function (p1__24653_SHARP_){
var e = (function (){var G__24654 = p1__24653_SHARP_.target;
return jQuery(G__24654);
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
return p1__24653_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args24655 = [];
var len__6059__auto___24658 = arguments.length;
var i__6060__auto___24659 = (0);
while(true){
if((i__6060__auto___24659 < len__6059__auto___24658)){
args24655.push((arguments[i__6060__auto___24659]));

var G__24660 = (i__6060__auto___24659 + (1));
i__6060__auto___24659 = G__24660;
continue;
} else {
}
break;
}

var G__24657 = args24655.length;
switch (G__24657) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24655.length)].join('')));

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
var args24662 = [];
var len__6059__auto___24665 = arguments.length;
var i__6060__auto___24666 = (0);
while(true){
if((i__6060__auto___24666 < len__6059__auto___24665)){
args24662.push((arguments[i__6060__auto___24666]));

var G__24667 = (i__6060__auto___24666 + (1));
i__6060__auto___24666 = G__24667;
continue;
} else {
}
break;
}

var G__24664 = args24662.length;
switch (G__24664) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24662.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__24669 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24669) : cljs.core.atom.call(null,G__24669));
})();
var prefer_table__5915__auto__ = (function (){var G__24670 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24670) : cljs.core.atom.call(null,G__24670));
})();
var method_cache__5916__auto__ = (function (){var G__24671 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24671) : cljs.core.atom.call(null,G__24671));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__24672 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24672) : cljs.core.atom.call(null,G__24672));
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
var G__24673 = elem;
var G__24674 = cljs.core.cst$kw$attr;
var G__24675 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__24673,G__24674,G__24675) : hoplon.core.do_BANG_.call(null,G__24673,G__24674,G__24675));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__24676__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__24676 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__24677__i = 0, G__24677__a = new Array(arguments.length -  2);
while (G__24677__i < G__24677__a.length) {G__24677__a[G__24677__i] = arguments[G__24677__i + 2]; ++G__24677__i;}
  args = new cljs.core.IndexedSeq(G__24677__a,0);
} 
return G__24676__delegate.call(this,elem,_,args);};
G__24676.cljs$lang$maxFixedArity = 2;
G__24676.cljs$lang$applyTo = (function (arglist__24678){
var elem = cljs.core.first(arglist__24678);
arglist__24678 = cljs.core.next(arglist__24678);
var _ = cljs.core.first(arglist__24678);
var args = cljs.core.rest(arglist__24678);
return G__24676__delegate(elem,_,args);
});
G__24676.cljs$core$IFn$_invoke$arity$variadic = G__24676__delegate;
return G__24676;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__24679 = cljs.core.seq(kvs);
var chunk__24680 = null;
var count__24681 = (0);
var i__24682 = (0);
while(true){
if((i__24682 < count__24681)){
var vec__24683 = chunk__24680.cljs$core$IIndexed$_nth$arity$2(null,i__24682);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24683,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24683,(1),null);
var k_24685__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_24685__$1);
} else {
e.attr(k_24685__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_24685__$1:v));
}

var G__24686 = seq__24679;
var G__24687 = chunk__24680;
var G__24688 = count__24681;
var G__24689 = (i__24682 + (1));
seq__24679 = G__24686;
chunk__24680 = G__24687;
count__24681 = G__24688;
i__24682 = G__24689;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24679);
if(temp__4425__auto__){
var seq__24679__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24679__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24679__$1);
var G__24690 = cljs.core.chunk_rest(seq__24679__$1);
var G__24691 = c__5804__auto__;
var G__24692 = cljs.core.count(c__5804__auto__);
var G__24693 = (0);
seq__24679 = G__24690;
chunk__24680 = G__24691;
count__24681 = G__24692;
i__24682 = G__24693;
continue;
} else {
var vec__24684 = cljs.core.first(seq__24679__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24684,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24684,(1),null);
var k_24694__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_24694__$1);
} else {
e.attr(k_24694__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_24694__$1:v));
}

var G__24695 = cljs.core.next(seq__24679__$1);
var G__24696 = null;
var G__24697 = (0);
var G__24698 = (0);
seq__24679 = G__24695;
chunk__24680 = G__24696;
count__24681 = G__24697;
i__24682 = G__24698;
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
return (function (p1__24699_SHARP_){
return cljs.core.zipmap(p1__24699_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__24700 = cljs.core.seq(clmap);
var chunk__24701 = null;
var count__24702 = (0);
var i__24703 = (0);
while(true){
if((i__24703 < count__24702)){
var vec__24704 = chunk__24701.cljs$core$IIndexed$_nth$arity$2(null,i__24703);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24704,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24704,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__24706 = seq__24700;
var G__24707 = chunk__24701;
var G__24708 = count__24702;
var G__24709 = (i__24703 + (1));
seq__24700 = G__24706;
chunk__24701 = G__24707;
count__24702 = G__24708;
i__24703 = G__24709;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24700);
if(temp__4425__auto__){
var seq__24700__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24700__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24700__$1);
var G__24710 = cljs.core.chunk_rest(seq__24700__$1);
var G__24711 = c__5804__auto__;
var G__24712 = cljs.core.count(c__5804__auto__);
var G__24713 = (0);
seq__24700 = G__24710;
chunk__24701 = G__24711;
count__24702 = G__24712;
i__24703 = G__24713;
continue;
} else {
var vec__24705 = cljs.core.first(seq__24700__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24705,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24705,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__24714 = cljs.core.next(seq__24700__$1);
var G__24715 = null;
var G__24716 = (0);
var G__24717 = (0);
seq__24700 = G__24714;
chunk__24701 = G__24715;
count__24702 = G__24716;
i__24703 = G__24717;
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
var seq__24718 = cljs.core.seq(kvs);
var chunk__24719 = null;
var count__24720 = (0);
var i__24721 = (0);
while(true){
if((i__24721 < count__24720)){
var vec__24722 = chunk__24719.cljs$core$IIndexed$_nth$arity$2(null,i__24721);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24722,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__24724 = seq__24718;
var G__24725 = chunk__24719;
var G__24726 = count__24720;
var G__24727 = (i__24721 + (1));
seq__24718 = G__24724;
chunk__24719 = G__24725;
count__24720 = G__24726;
i__24721 = G__24727;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24718);
if(temp__4425__auto__){
var seq__24718__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24718__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24718__$1);
var G__24728 = cljs.core.chunk_rest(seq__24718__$1);
var G__24729 = c__5804__auto__;
var G__24730 = cljs.core.count(c__5804__auto__);
var G__24731 = (0);
seq__24718 = G__24728;
chunk__24719 = G__24729;
count__24720 = G__24730;
i__24721 = G__24731;
continue;
} else {
var vec__24723 = cljs.core.first(seq__24718__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24723,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__24732 = cljs.core.next(seq__24718__$1);
var G__24733 = null;
var G__24734 = (0);
var G__24735 = (0);
seq__24718 = G__24732;
chunk__24719 = G__24733;
count__24720 = G__24734;
i__24721 = G__24735;
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
var G__24736 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__24737 = (0);
return setTimeout(G__24736,G__24737);
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
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__24738 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24738) : cljs.core.atom.call(null,G__24738));
})();
var prefer_table__5915__auto__ = (function (){var G__24739 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24739) : cljs.core.atom.call(null,G__24739));
})();
var method_cache__5916__auto__ = (function (){var G__24740 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24740) : cljs.core.atom.call(null,G__24740));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__24741 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24741) : cljs.core.atom.call(null,G__24741));
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
return (function (){var G__24742 = this$__$1.target;
return jQuery(G__24742);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__24757 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24757) : cljs.core.atom.call(null,G__24757));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__24758,G__24759){
return (G__24758.cljs$core$IFn$_invoke$arity$1 ? G__24758.cljs$core$IFn$_invoke$arity$1(G__24759) : G__24758.call(null,G__24759));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__24743_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__24762,G__24761,G__24760){
return (G__24760.cljs$core$IFn$_invoke$arity$2 ? G__24760.cljs$core$IFn$_invoke$arity$2(G__24761,G__24762) : G__24760.call(null,G__24761,G__24762));
});})(on_deck,items_seq))
).call(null,p1__24743_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__24744_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__24744_SHARP_) : cljs.core.deref.call(null,p1__24744_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__24744_SHARP_,cljs.core.rest);

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
var seq__24763 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__24764 = null;
var count__24765 = (0);
var i__24766 = (0);
while(true){
if((i__24766 < count__24765)){
var i = chunk__24764.cljs$core$IIndexed$_nth$arity$2(null,i__24766);
var e_24769 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__24767 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__24767) : tpl.call(null,G__24767));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_24769);

var G__24770 = seq__24763;
var G__24771 = chunk__24764;
var G__24772 = count__24765;
var G__24773 = (i__24766 + (1));
seq__24763 = G__24770;
chunk__24764 = G__24771;
count__24765 = G__24772;
i__24766 = G__24773;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24763);
if(temp__4425__auto__){
var seq__24763__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24763__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24763__$1);
var G__24774 = cljs.core.chunk_rest(seq__24763__$1);
var G__24775 = c__5804__auto__;
var G__24776 = cljs.core.count(c__5804__auto__);
var G__24777 = (0);
seq__24763 = G__24774;
chunk__24764 = G__24775;
count__24765 = G__24776;
i__24766 = G__24777;
continue;
} else {
var i = cljs.core.first(seq__24763__$1);
var e_24778 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__24768 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__24768) : tpl.call(null,G__24768));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_24778);

var G__24779 = cljs.core.next(seq__24763__$1);
var G__24780 = null;
var G__24781 = (0);
var G__24782 = (0);
seq__24763 = G__24779;
chunk__24764 = G__24780;
count__24765 = G__24781;
i__24766 = G__24782;
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
var e_24783 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_24783);

var G__24784 = (_ + (1));
_ = G__24784;
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
var len__6059__auto___24793 = arguments.length;
var i__6060__auto___24794 = (0);
while(true){
if((i__6060__auto___24794 < len__6059__auto___24793)){
args__6066__auto__.push((arguments[i__6060__auto___24794]));

var G__24795 = (i__6060__auto___24794 + (1));
i__6060__auto___24794 = G__24795;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__24786){
var vec__24787 = p__24786;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24787,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__24787,default$){
return (function (G__24788,G__24790,G__24789){
var or__5020__auto__ = (function (){var and__5008__auto__ = (G__24788.cljs$core$IFn$_invoke$arity$1 ? G__24788.cljs$core$IFn$_invoke$arity$1(G__24789) : G__24788.call(null,G__24789));
if(cljs.core.truth_(and__5008__auto__)){
return G__24789;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__24790;
}
});})(c,vec__24787,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__24787,default$){
return (function (){
var G__24791 = c;
var G__24792 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24791,G__24792) : cljs.core.reset_BANG_.call(null,G__24791,G__24792));
});})(_,c,vec__24787,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq24785){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24785));
});
