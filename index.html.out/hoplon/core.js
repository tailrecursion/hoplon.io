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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12831_SHARP_,p2__12832_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12831_SHARP_,p2__12832_SHARP_.getAttribute("static-id"),p2__12832_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args12833 = [];
var len__6059__auto___12838 = arguments.length;
var i__6060__auto___12839 = (0);
while(true){
if((i__6060__auto___12839 < len__6059__auto___12838)){
args12833.push((arguments[i__6060__auto___12839]));

var G__12840 = (i__6060__auto___12839 + (1));
i__6060__auto___12839 = G__12840;
continue;
} else {
}
break;
}

var G__12835 = args12833.length;
switch (G__12835) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12833.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__12836_12842 = init;
var G__12837_12843 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12836_12842,G__12837_12843) : f.call(null,G__12836_12842,G__12837_12843));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__12846 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12846,(0),null);
var more = cljs.core.nthnext(vec__12846,(1));
var vec__12847 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("0ae96e57e1664615bf1d7387626921ec")].join(''),f2], null)))));
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
var G__12848 = (i + (1));
var G__12849 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__12848;
ret = G__12849;
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
var G__12851 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12851) : hoplon.core.$text.call(null,G__12851));
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
var G__12862 = new$__$1;
var vec__12864 = G__12862;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12864,(0),null);
var xs = cljs.core.nthnext(vec__12864,(1));
var G__12863 = hoplon.core.child_vec(this$);
var vec__12865 = G__12863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12865,(0),null);
var ks = cljs.core.nthnext(vec__12865,(1));
var kids = vec__12865;
var G__12862__$1 = G__12862;
var G__12863__$1 = G__12863;
while(true){
var vec__12866 = G__12862__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12866,(0),null);
var xs__$1 = cljs.core.nthnext(vec__12866,(1));
var vec__12867 = G__12863__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12867,(0),null);
var ks__$1 = cljs.core.nthnext(vec__12867,(1));
var kids__$1 = vec__12867;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__12868 = xs__$1;
var G__12869 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__12862__$1 = G__12868;
G__12863__$1 = G__12869;
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
var kids_12872 = (function (){var G__12871 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12871) : cljs.core.atom.call(null,G__12871));
})();
this$__$1.hoplonKids = kids_12872;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_12872,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_12875 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_12876 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_12875) : cljs.core.deref.call(null,kids_12875)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_12875,i_12876,x__$1,this$__$1){
return (function (p1__12874_SHARP_,p2__12873_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12875,cljs.core.assoc,i_12876,p2__12873_SHARP_);
});})(kids_12875,i_12876,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12875,cljs.core.assoc,i_12876,x__$1);
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
return (function (p1__12877_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__12877_SHARP_));
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
return (function (p1__12878_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__12878_SHARP_], 0)));
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
return (function (p1__12879_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__12879_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_12880 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_12881 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__12882 = (function (){var and__5008__auto__ = attr_12881;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_12881) : cljs.core.deref.call(null,attr_12881)),kk_12880);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__12882)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_12881,cljs.core.assoc,kk_12880,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__12883_SHARP_){
return p1__12883_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__12884_SHARP_){
return p1__12884_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__12885_SHARP_){
return p1__12885_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__12886_SHARP_){
return p1__12886_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__12889_SHARP_){
return (p1__12889_SHARP_ instanceof Node);
}):(function (p1__12890_SHARP_){
try{return p1__12890_SHARP_.nodeType;
}catch (e12891){if((e12891 instanceof Error)){
var _ = e12891;
return null;
} else {
throw e12891;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12892_SHARP_){
try{return cljs.core.vector_QMARK_(p1__12892_SHARP_);
}catch (e12893){if((e12893 instanceof Error)){
var _ = e12893;
return null;
} else {
throw e12893;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12894_SHARP_){
try{return cljs.core.seq_QMARK_(p1__12894_SHARP_);
}catch (e12895){if((e12895 instanceof Error)){
var _ = e12895;
return null;
} else {
throw e12895;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args12896 = [];
var len__6059__auto___12900 = arguments.length;
var i__6060__auto___12901 = (0);
while(true){
if((i__6060__auto___12901 < len__6059__auto___12900)){
args12896.push((arguments[i__6060__auto___12901]));

var G__12902 = (i__6060__auto___12901 + (1));
i__6060__auto___12901 = G__12902;
continue;
} else {
}
break;
}

var G__12898 = args12896.length;
switch (G__12898) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12896.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e12899){if((e12899 instanceof Error)){
var _ = e12899;
return not_found;
} else {
throw e12899;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args12904 = [];
var len__6059__auto___12907 = arguments.length;
var i__6060__auto___12908 = (0);
while(true){
if((i__6060__auto___12908 < len__6059__auto___12907)){
args12904.push((arguments[i__6060__auto___12908]));

var G__12909 = (i__6060__auto___12908 + (1));
i__6060__auto___12908 = G__12909;
continue;
} else {
}
break;
}

var G__12906 = args12904.length;
switch (G__12906) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12904.length)].join('')));

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
var G__12919 = args;
var vec__12920 = G__12919;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12920,(0),null);
var args__$1 = cljs.core.nthnext(vec__12920,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__12919__$1 = G__12919;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__12921 = G__12919__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12921,(0),null);
var args__$2 = cljs.core.nthnext(vec__12921,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__12922 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__12919__$1,attr__$2,kids__$2,vec__12921,arg__$1,args__$2,attr,kids,G__12919,vec__12920,arg,args__$1){
return (function (p1__12911_SHARP_,p2__12912_SHARP_,p3__12913_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__12911_SHARP_,p2__12912_SHARP_,p3__12913_SHARP_);
});})(attr__$1,kids__$1,G__12919__$1,attr__$2,kids__$2,vec__12921,arg__$1,args__$2,attr,kids,G__12919,vec__12920,arg,args__$1))
,attr__$2,arg__$1);
var G__12923 = kids__$2;
var G__12924 = args__$2;
attr__$1 = G__12922;
kids__$1 = G__12923;
G__12919__$1 = G__12924;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__12925 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__12926 = kids__$2;
var G__12927 = cljs.core.rest(args__$2);
attr__$1 = G__12925;
kids__$1 = G__12926;
G__12919__$1 = G__12927;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__12928 = attr__$2;
var G__12929 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__12930 = args__$2;
attr__$1 = G__12928;
kids__$1 = G__12929;
G__12919__$1 = G__12930;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__12931 = attr__$2;
var G__12932 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__12933 = args__$2;
attr__$1 = G__12931;
kids__$1 = G__12932;
G__12919__$1 = G__12933;
continue;
} else {
var G__12934 = attr__$2;
var G__12935 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__12936 = args__$2;
attr__$1 = G__12934;
kids__$1 = G__12935;
G__12919__$1 = G__12936;
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
return (function (p1__12938_SHARP_,p2__12937_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__12937_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__12937_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__12940){
var vec__12947 = p__12940;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12947,(0),null);
var _ = cljs.core.nthnext(vec__12947,(1));
var kids = vec__12947;
var this$__$1 = this$;
var node_12953 = ((function (this$__$1,vec__12947,child_cell,_,kids){
return (function (p1__12939_SHARP_){
if(typeof p1__12939_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__12939_SHARP_) : hoplon.core.$text.call(null,p1__12939_SHARP_));
} else {
if(typeof p1__12939_SHARP_ === 'number'){
var G__12948 = [cljs.core.str(p1__12939_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12948) : hoplon.core.$text.call(null,G__12948));
} else {
return p1__12939_SHARP_;

}
}
});})(this$__$1,vec__12947,child_cell,_,kids))
;
var seq__12949_12954 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__12950_12955 = null;
var count__12951_12956 = (0);
var i__12952_12957 = (0);
while(true){
if((i__12952_12957 < count__12951_12956)){
var x_12958 = chunk__12950_12955.cljs$core$IIndexed$_nth$arity$2(null,i__12952_12957);
var temp__4425__auto___12959 = node_12953(x_12958);
if(cljs.core.truth_(temp__4425__auto___12959)){
var x_12960__$1 = temp__4425__auto___12959;
hoplon.core.append_child_BANG_(this$__$1,x_12960__$1);
} else {
}

var G__12961 = seq__12949_12954;
var G__12962 = chunk__12950_12955;
var G__12963 = count__12951_12956;
var G__12964 = (i__12952_12957 + (1));
seq__12949_12954 = G__12961;
chunk__12950_12955 = G__12962;
count__12951_12956 = G__12963;
i__12952_12957 = G__12964;
continue;
} else {
var temp__4425__auto___12965 = cljs.core.seq(seq__12949_12954);
if(temp__4425__auto___12965){
var seq__12949_12966__$1 = temp__4425__auto___12965;
if(cljs.core.chunked_seq_QMARK_(seq__12949_12966__$1)){
var c__5804__auto___12967 = cljs.core.chunk_first(seq__12949_12966__$1);
var G__12968 = cljs.core.chunk_rest(seq__12949_12966__$1);
var G__12969 = c__5804__auto___12967;
var G__12970 = cljs.core.count(c__5804__auto___12967);
var G__12971 = (0);
seq__12949_12954 = G__12968;
chunk__12950_12955 = G__12969;
count__12951_12956 = G__12970;
i__12952_12957 = G__12971;
continue;
} else {
var x_12972 = cljs.core.first(seq__12949_12966__$1);
var temp__4425__auto___12973__$1 = node_12953(x_12972);
if(cljs.core.truth_(temp__4425__auto___12973__$1)){
var x_12974__$1 = temp__4425__auto___12973__$1;
hoplon.core.append_child_BANG_(this$__$1,x_12974__$1);
} else {
}

var G__12975 = cljs.core.next(seq__12949_12966__$1);
var G__12976 = null;
var G__12977 = (0);
var G__12978 = (0);
seq__12949_12954 = G__12975;
chunk__12950_12955 = G__12976;
count__12951_12956 = G__12977;
i__12952_12957 = G__12978;
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
var G__12985__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12980 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12980,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12980,(1),null);
var G__12981 = this$;
hoplon.core.add_attributes_BANG_(G__12981,attr);

hoplon.core.add_children_BANG_(G__12981,kids);

return G__12981;
};
var G__12985 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12986__i = 0, G__12986__a = new Array(arguments.length -  1);
while (G__12986__i < G__12986__a.length) {G__12986__a[G__12986__i] = arguments[G__12986__i + 1]; ++G__12986__i;}
  args = new cljs.core.IndexedSeq(G__12986__a,0);
} 
return G__12985__delegate.call(this,self__,args);};
G__12985.cljs$lang$maxFixedArity = 1;
G__12985.cljs$lang$applyTo = (function (arglist__12987){
var self__ = cljs.core.first(arglist__12987);
var args = cljs.core.rest(arglist__12987);
return G__12985__delegate(self__,args);
});
G__12985.cljs$core$IFn$_invoke$arity$variadic = G__12985__delegate;
return G__12985;
})()
;

Element.prototype.apply = (function (self__,args12979){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12979)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12988__delegate = function (args){
var this$ = this;
var vec__12982 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12982,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12982,(1),null);
var G__12983 = this$;
hoplon.core.add_attributes_BANG_(G__12983,attr);

hoplon.core.add_children_BANG_(G__12983,kids);

return G__12983;
};
var G__12988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12989__i = 0, G__12989__a = new Array(arguments.length -  0);
while (G__12989__i < G__12989__a.length) {G__12989__a[G__12989__i] = arguments[G__12989__i + 0]; ++G__12989__i;}
  args = new cljs.core.IndexedSeq(G__12989__a,0);
} 
return G__12988__delegate.call(this,args);};
G__12988.cljs$lang$maxFixedArity = 0;
G__12988.cljs$lang$applyTo = (function (arglist__12990){
var args = cljs.core.seq(arglist__12990);
return G__12988__delegate(args);
});
G__12988.cljs$core$IFn$_invoke$arity$variadic = G__12988__delegate;
return G__12988;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_12991__$1 = cljs.core.name(k);
var e_12992 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_12992.removeAttr(k_12991__$1);
} else {
e_12992.attr(k_12991__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12991__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e12984){if((e12984 instanceof Error)){
var _ = e12984;
return null;
} else {
throw e12984;

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
var G__12999__delegate = function (args){
var vec__12996 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12996,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12996,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__12997 = elem.hoplonKids;
var G__12998 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12997,G__12998) : cljs.core.reset_BANG_.call(null,G__12997,G__12998));
} else {
return null;
}
};
var G__12999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13000__i = 0, G__13000__a = new Array(arguments.length -  0);
while (G__13000__i < G__13000__a.length) {G__13000__a[G__13000__i] = arguments[G__13000__i + 0]; ++G__13000__i;}
  args = new cljs.core.IndexedSeq(G__13000__a,0);
} 
return G__12999__delegate.call(this,args);};
G__12999.cljs$lang$maxFixedArity = 0;
G__12999.cljs$lang$applyTo = (function (arglist__13001){
var args = cljs.core.seq(arglist__13001);
return G__12999__delegate(args);
});
G__12999.cljs$core$IFn$_invoke$arity$variadic = G__12999__delegate;
return G__12999;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__13002__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__13002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13003__i = 0, G__13003__a = new Array(arguments.length -  0);
while (G__13003__i < G__13003__a.length) {G__13003__a[G__13003__i] = arguments[G__13003__i + 0]; ++G__13003__i;}
  args = new cljs.core.IndexedSeq(G__13003__a,0);
} 
return G__13002__delegate.call(this,args);};
G__13002.cljs$lang$maxFixedArity = 0;
G__13002.cljs$lang$applyTo = (function (arglist__13004){
var args = cljs.core.seq(arglist__13004);
return G__13002__delegate(args);
});
G__13002.cljs$core$IFn$_invoke$arity$variadic = G__13002__delegate;
return G__13002;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___13007 = arguments.length;
var i__6060__auto___13008 = (0);
while(true){
if((i__6060__auto___13008 < len__6059__auto___13007)){
args__6066__auto__.push((arguments[i__6060__auto___13008]));

var G__13009 = (i__6060__auto___13008 + (1));
i__6060__auto___13008 = G__13009;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13006 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13006,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13006,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq13005){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13005));
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
hoplon.core.$text = (function hoplon$core$$text(p1__13010_SHARP_){
return document.createTextNode(p1__13010_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__13011_SHARP_){
return document.createComment(p1__13011_SHARP_);
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
return jQuery("body").on("submit",(function (p1__13012_SHARP_){
var e = (function (){var G__13013 = p1__13012_SHARP_.target;
return jQuery(G__13013);
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
return p1__13012_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args13014 = [];
var len__6059__auto___13017 = arguments.length;
var i__6060__auto___13018 = (0);
while(true){
if((i__6060__auto___13018 < len__6059__auto___13017)){
args13014.push((arguments[i__6060__auto___13018]));

var G__13019 = (i__6060__auto___13018 + (1));
i__6060__auto___13018 = G__13019;
continue;
} else {
}
break;
}

var G__13016 = args13014.length;
switch (G__13016) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13014.length)].join('')));

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
var args13021 = [];
var len__6059__auto___13024 = arguments.length;
var i__6060__auto___13025 = (0);
while(true){
if((i__6060__auto___13025 < len__6059__auto___13024)){
args13021.push((arguments[i__6060__auto___13025]));

var G__13026 = (i__6060__auto___13025 + (1));
i__6060__auto___13025 = G__13026;
continue;
} else {
}
break;
}

var G__13023 = args13021.length;
switch (G__13023) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13021.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__13028 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13028) : cljs.core.atom.call(null,G__13028));
})();
var prefer_table__5915__auto__ = (function (){var G__13029 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13029) : cljs.core.atom.call(null,G__13029));
})();
var method_cache__5916__auto__ = (function (){var G__13030 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13030) : cljs.core.atom.call(null,G__13030));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__13031 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13031) : cljs.core.atom.call(null,G__13031));
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
var G__13032 = elem;
var G__13033 = cljs.core.cst$kw$attr;
var G__13034 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__13032,G__13033,G__13034) : hoplon.core.do_BANG_.call(null,G__13032,G__13033,G__13034));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__13035__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__13035 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__13036__i = 0, G__13036__a = new Array(arguments.length -  2);
while (G__13036__i < G__13036__a.length) {G__13036__a[G__13036__i] = arguments[G__13036__i + 2]; ++G__13036__i;}
  args = new cljs.core.IndexedSeq(G__13036__a,0);
} 
return G__13035__delegate.call(this,elem,_,args);};
G__13035.cljs$lang$maxFixedArity = 2;
G__13035.cljs$lang$applyTo = (function (arglist__13037){
var elem = cljs.core.first(arglist__13037);
arglist__13037 = cljs.core.next(arglist__13037);
var _ = cljs.core.first(arglist__13037);
var args = cljs.core.rest(arglist__13037);
return G__13035__delegate(elem,_,args);
});
G__13035.cljs$core$IFn$_invoke$arity$variadic = G__13035__delegate;
return G__13035;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13038 = cljs.core.seq(kvs);
var chunk__13039 = null;
var count__13040 = (0);
var i__13041 = (0);
while(true){
if((i__13041 < count__13040)){
var vec__13042 = chunk__13039.cljs$core$IIndexed$_nth$arity$2(null,i__13041);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13042,(1),null);
var k_13044__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13044__$1);
} else {
e.attr(k_13044__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13044__$1:v));
}

var G__13045 = seq__13038;
var G__13046 = chunk__13039;
var G__13047 = count__13040;
var G__13048 = (i__13041 + (1));
seq__13038 = G__13045;
chunk__13039 = G__13046;
count__13040 = G__13047;
i__13041 = G__13048;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13038);
if(temp__4425__auto__){
var seq__13038__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13038__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13038__$1);
var G__13049 = cljs.core.chunk_rest(seq__13038__$1);
var G__13050 = c__5804__auto__;
var G__13051 = cljs.core.count(c__5804__auto__);
var G__13052 = (0);
seq__13038 = G__13049;
chunk__13039 = G__13050;
count__13040 = G__13051;
i__13041 = G__13052;
continue;
} else {
var vec__13043 = cljs.core.first(seq__13038__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13043,(1),null);
var k_13053__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13053__$1);
} else {
e.attr(k_13053__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13053__$1:v));
}

var G__13054 = cljs.core.next(seq__13038__$1);
var G__13055 = null;
var G__13056 = (0);
var G__13057 = (0);
seq__13038 = G__13054;
chunk__13039 = G__13055;
count__13040 = G__13056;
i__13041 = G__13057;
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
return (function (p1__13058_SHARP_){
return cljs.core.zipmap(p1__13058_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__13059 = cljs.core.seq(clmap);
var chunk__13060 = null;
var count__13061 = (0);
var i__13062 = (0);
while(true){
if((i__13062 < count__13061)){
var vec__13063 = chunk__13060.cljs$core$IIndexed$_nth$arity$2(null,i__13062);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13065 = seq__13059;
var G__13066 = chunk__13060;
var G__13067 = count__13061;
var G__13068 = (i__13062 + (1));
seq__13059 = G__13065;
chunk__13060 = G__13066;
count__13061 = G__13067;
i__13062 = G__13068;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13059);
if(temp__4425__auto__){
var seq__13059__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13059__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13059__$1);
var G__13069 = cljs.core.chunk_rest(seq__13059__$1);
var G__13070 = c__5804__auto__;
var G__13071 = cljs.core.count(c__5804__auto__);
var G__13072 = (0);
seq__13059 = G__13069;
chunk__13060 = G__13070;
count__13061 = G__13071;
i__13062 = G__13072;
continue;
} else {
var vec__13064 = cljs.core.first(seq__13059__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13064,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13064,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13073 = cljs.core.next(seq__13059__$1);
var G__13074 = null;
var G__13075 = (0);
var G__13076 = (0);
seq__13059 = G__13073;
chunk__13060 = G__13074;
count__13061 = G__13075;
i__13062 = G__13076;
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
var seq__13077 = cljs.core.seq(kvs);
var chunk__13078 = null;
var count__13079 = (0);
var i__13080 = (0);
while(true){
if((i__13080 < count__13079)){
var vec__13081 = chunk__13078.cljs$core$IIndexed$_nth$arity$2(null,i__13080);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13083 = seq__13077;
var G__13084 = chunk__13078;
var G__13085 = count__13079;
var G__13086 = (i__13080 + (1));
seq__13077 = G__13083;
chunk__13078 = G__13084;
count__13079 = G__13085;
i__13080 = G__13086;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13077);
if(temp__4425__auto__){
var seq__13077__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13077__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13077__$1);
var G__13087 = cljs.core.chunk_rest(seq__13077__$1);
var G__13088 = c__5804__auto__;
var G__13089 = cljs.core.count(c__5804__auto__);
var G__13090 = (0);
seq__13077 = G__13087;
chunk__13078 = G__13088;
count__13079 = G__13089;
i__13080 = G__13090;
continue;
} else {
var vec__13082 = cljs.core.first(seq__13077__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13091 = cljs.core.next(seq__13077__$1);
var G__13092 = null;
var G__13093 = (0);
var G__13094 = (0);
seq__13077 = G__13091;
chunk__13078 = G__13092;
count__13079 = G__13093;
i__13080 = G__13094;
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
var G__13095 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__13096 = (0);
return setTimeout(G__13095,G__13096);
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
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__13097 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13097) : cljs.core.atom.call(null,G__13097));
})();
var prefer_table__5915__auto__ = (function (){var G__13098 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13098) : cljs.core.atom.call(null,G__13098));
})();
var method_cache__5916__auto__ = (function (){var G__13099 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13099) : cljs.core.atom.call(null,G__13099));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__13100 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13100) : cljs.core.atom.call(null,G__13100));
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
return (function (){var G__13101 = this$__$1.target;
return jQuery(G__13101);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__13116 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13116) : cljs.core.atom.call(null,G__13116));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__13117,G__13118){
return (G__13117.cljs$core$IFn$_invoke$arity$1 ? G__13117.cljs$core$IFn$_invoke$arity$1(G__13118) : G__13117.call(null,G__13118));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__13102_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__13120,G__13119,G__13121){
return (G__13119.cljs$core$IFn$_invoke$arity$2 ? G__13119.cljs$core$IFn$_invoke$arity$2(G__13120,G__13121) : G__13119.call(null,G__13120,G__13121));
});})(on_deck,items_seq))
).call(null,items_seq,hoplon.core.safe_nth,p1__13102_SHARP_);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__13103_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__13103_SHARP_) : cljs.core.deref.call(null,p1__13103_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__13103_SHARP_,cljs.core.rest);

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
var seq__13122 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__13123 = null;
var count__13124 = (0);
var i__13125 = (0);
while(true){
if((i__13125 < count__13124)){
var i = chunk__13123.cljs$core$IIndexed$_nth$arity$2(null,i__13125);
var e_13128 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__13126 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13126) : tpl.call(null,G__13126));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13128);

var G__13129 = seq__13122;
var G__13130 = chunk__13123;
var G__13131 = count__13124;
var G__13132 = (i__13125 + (1));
seq__13122 = G__13129;
chunk__13123 = G__13130;
count__13124 = G__13131;
i__13125 = G__13132;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13122);
if(temp__4425__auto__){
var seq__13122__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13122__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13122__$1);
var G__13133 = cljs.core.chunk_rest(seq__13122__$1);
var G__13134 = c__5804__auto__;
var G__13135 = cljs.core.count(c__5804__auto__);
var G__13136 = (0);
seq__13122 = G__13133;
chunk__13123 = G__13134;
count__13124 = G__13135;
i__13125 = G__13136;
continue;
} else {
var i = cljs.core.first(seq__13122__$1);
var e_13137 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__13127 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13127) : tpl.call(null,G__13127));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13137);

var G__13138 = cljs.core.next(seq__13122__$1);
var G__13139 = null;
var G__13140 = (0);
var G__13141 = (0);
seq__13122 = G__13138;
chunk__13123 = G__13139;
count__13124 = G__13140;
i__13125 = G__13141;
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
var e_13142 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_13142);

var G__13143 = (_ + (1));
_ = G__13143;
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
var len__6059__auto___13152 = arguments.length;
var i__6060__auto___13153 = (0);
while(true){
if((i__6060__auto___13153 < len__6059__auto___13152)){
args__6066__auto__.push((arguments[i__6060__auto___13153]));

var G__13154 = (i__6060__auto___13153 + (1));
i__6060__auto___13153 = G__13154;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__13145){
var vec__13146 = p__13145;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__13146,default$){
return (function (G__13147,G__13149,G__13148){
var or__5020__auto__ = (function (){var and__5008__auto__ = (G__13147.cljs$core$IFn$_invoke$arity$1 ? G__13147.cljs$core$IFn$_invoke$arity$1(G__13148) : G__13147.call(null,G__13148));
if(cljs.core.truth_(and__5008__auto__)){
return G__13148;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__13149;
}
});})(c,vec__13146,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__13146,default$){
return (function (){
var G__13150 = c;
var G__13151 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13150,G__13151) : cljs.core.reset_BANG_.call(null,G__13150,G__13151));
});})(_,c,vec__13146,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq13144){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13144));
});
