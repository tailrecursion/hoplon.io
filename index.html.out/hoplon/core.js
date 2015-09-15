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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12977_SHARP_,p2__12978_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12977_SHARP_,p2__12978_SHARP_.getAttribute("static-id"),p2__12978_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args12979 = [];
var len__6059__auto___12984 = arguments.length;
var i__6060__auto___12985 = (0);
while(true){
if((i__6060__auto___12985 < len__6059__auto___12984)){
args12979.push((arguments[i__6060__auto___12985]));

var G__12986 = (i__6060__auto___12985 + (1));
i__6060__auto___12985 = G__12986;
continue;
} else {
}
break;
}

var G__12981 = args12979.length;
switch (G__12981) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12979.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__12982_12988 = init;
var G__12983_12989 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12982_12988,G__12983_12989) : f.call(null,G__12982_12988,G__12983_12989));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__12992 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12992,(0),null);
var more = cljs.core.nthnext(vec__12992,(1));
var vec__12993 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12993,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12993,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("31f741c5e3d44d93830a75d4cfdd1318")].join(''),f2], null)))));
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
var G__12994 = (i + (1));
var G__12995 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__12994;
ret = G__12995;
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
var G__12997 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12997) : hoplon.core.$text.call(null,G__12997));
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
var G__13008 = new$__$1;
var vec__13010 = G__13008;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13010,(0),null);
var xs = cljs.core.nthnext(vec__13010,(1));
var G__13009 = hoplon.core.child_vec(this$);
var vec__13011 = G__13009;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(0),null);
var ks = cljs.core.nthnext(vec__13011,(1));
var kids = vec__13011;
var G__13008__$1 = G__13008;
var G__13009__$1 = G__13009;
while(true){
var vec__13012 = G__13008__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13012,(0),null);
var xs__$1 = cljs.core.nthnext(vec__13012,(1));
var vec__13013 = G__13009__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13013,(0),null);
var ks__$1 = cljs.core.nthnext(vec__13013,(1));
var kids__$1 = vec__13013;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__13014 = xs__$1;
var G__13015 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__13008__$1 = G__13014;
G__13009__$1 = G__13015;
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
var kids_13018 = (function (){var G__13017 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13017) : cljs.core.atom.call(null,G__13017));
})();
this$__$1.hoplonKids = kids_13018;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_13018,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_13021 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_13022 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_13021) : cljs.core.deref.call(null,kids_13021)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_13021,i_13022,x__$1,this$__$1){
return (function (p1__13020_SHARP_,p2__13019_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13021,cljs.core.assoc,i_13022,p2__13019_SHARP_);
});})(kids_13021,i_13022,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13021,cljs.core.assoc,i_13022,x__$1);
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
return (function (p1__13023_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__13023_SHARP_));
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
return (function (p1__13024_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__13024_SHARP_], 0)));
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
return (function (p1__13025_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__13025_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_13026 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_13027 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__13028 = (function (){var and__5008__auto__ = attr_13027;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_13027) : cljs.core.deref.call(null,attr_13027)),kk_13026);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__13028)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_13027,cljs.core.assoc,kk_13026,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__13029_SHARP_){
return p1__13029_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__13030_SHARP_){
return p1__13030_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__13031_SHARP_){
return p1__13031_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__13032_SHARP_){
return p1__13032_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__13035_SHARP_){
return (p1__13035_SHARP_ instanceof Node);
}):(function (p1__13036_SHARP_){
try{return p1__13036_SHARP_.nodeType;
}catch (e13037){if((e13037 instanceof Error)){
var _ = e13037;
return null;
} else {
throw e13037;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__13038_SHARP_){
try{return cljs.core.vector_QMARK_(p1__13038_SHARP_);
}catch (e13039){if((e13039 instanceof Error)){
var _ = e13039;
return null;
} else {
throw e13039;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__13040_SHARP_){
try{return cljs.core.seq_QMARK_(p1__13040_SHARP_);
}catch (e13041){if((e13041 instanceof Error)){
var _ = e13041;
return null;
} else {
throw e13041;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args13042 = [];
var len__6059__auto___13046 = arguments.length;
var i__6060__auto___13047 = (0);
while(true){
if((i__6060__auto___13047 < len__6059__auto___13046)){
args13042.push((arguments[i__6060__auto___13047]));

var G__13048 = (i__6060__auto___13047 + (1));
i__6060__auto___13047 = G__13048;
continue;
} else {
}
break;
}

var G__13044 = args13042.length;
switch (G__13044) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13042.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e13045){if((e13045 instanceof Error)){
var _ = e13045;
return not_found;
} else {
throw e13045;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args13050 = [];
var len__6059__auto___13053 = arguments.length;
var i__6060__auto___13054 = (0);
while(true){
if((i__6060__auto___13054 < len__6059__auto___13053)){
args13050.push((arguments[i__6060__auto___13054]));

var G__13055 = (i__6060__auto___13054 + (1));
i__6060__auto___13054 = G__13055;
continue;
} else {
}
break;
}

var G__13052 = args13050.length;
switch (G__13052) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13050.length)].join('')));

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
var G__13065 = args;
var vec__13066 = G__13065;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13066,(0),null);
var args__$1 = cljs.core.nthnext(vec__13066,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__13065__$1 = G__13065;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__13067 = G__13065__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(0),null);
var args__$2 = cljs.core.nthnext(vec__13067,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__13068 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__13065__$1,attr__$2,kids__$2,vec__13067,arg__$1,args__$2,attr,kids,G__13065,vec__13066,arg,args__$1){
return (function (p1__13057_SHARP_,p2__13058_SHARP_,p3__13059_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__13057_SHARP_,p2__13058_SHARP_,p3__13059_SHARP_);
});})(attr__$1,kids__$1,G__13065__$1,attr__$2,kids__$2,vec__13067,arg__$1,args__$2,attr,kids,G__13065,vec__13066,arg,args__$1))
,attr__$2,arg__$1);
var G__13069 = kids__$2;
var G__13070 = args__$2;
attr__$1 = G__13068;
kids__$1 = G__13069;
G__13065__$1 = G__13070;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__13071 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__13072 = kids__$2;
var G__13073 = cljs.core.rest(args__$2);
attr__$1 = G__13071;
kids__$1 = G__13072;
G__13065__$1 = G__13073;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__13074 = attr__$2;
var G__13075 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13076 = args__$2;
attr__$1 = G__13074;
kids__$1 = G__13075;
G__13065__$1 = G__13076;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__13077 = attr__$2;
var G__13078 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13079 = args__$2;
attr__$1 = G__13077;
kids__$1 = G__13078;
G__13065__$1 = G__13079;
continue;
} else {
var G__13080 = attr__$2;
var G__13081 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__13082 = args__$2;
attr__$1 = G__13080;
kids__$1 = G__13081;
G__13065__$1 = G__13082;
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
return (function (p1__13084_SHARP_,p2__13083_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__13083_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__13083_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__13086){
var vec__13093 = p__13086;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var _ = cljs.core.nthnext(vec__13093,(1));
var kids = vec__13093;
var this$__$1 = this$;
var node_13099 = ((function (this$__$1,vec__13093,child_cell,_,kids){
return (function (p1__13085_SHARP_){
if(typeof p1__13085_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__13085_SHARP_) : hoplon.core.$text.call(null,p1__13085_SHARP_));
} else {
if(typeof p1__13085_SHARP_ === 'number'){
var G__13094 = [cljs.core.str(p1__13085_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13094) : hoplon.core.$text.call(null,G__13094));
} else {
return p1__13085_SHARP_;

}
}
});})(this$__$1,vec__13093,child_cell,_,kids))
;
var seq__13095_13100 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__13096_13101 = null;
var count__13097_13102 = (0);
var i__13098_13103 = (0);
while(true){
if((i__13098_13103 < count__13097_13102)){
var x_13104 = chunk__13096_13101.cljs$core$IIndexed$_nth$arity$2(null,i__13098_13103);
var temp__4425__auto___13105 = node_13099(x_13104);
if(cljs.core.truth_(temp__4425__auto___13105)){
var x_13106__$1 = temp__4425__auto___13105;
hoplon.core.append_child_BANG_(this$__$1,x_13106__$1);
} else {
}

var G__13107 = seq__13095_13100;
var G__13108 = chunk__13096_13101;
var G__13109 = count__13097_13102;
var G__13110 = (i__13098_13103 + (1));
seq__13095_13100 = G__13107;
chunk__13096_13101 = G__13108;
count__13097_13102 = G__13109;
i__13098_13103 = G__13110;
continue;
} else {
var temp__4425__auto___13111 = cljs.core.seq(seq__13095_13100);
if(temp__4425__auto___13111){
var seq__13095_13112__$1 = temp__4425__auto___13111;
if(cljs.core.chunked_seq_QMARK_(seq__13095_13112__$1)){
var c__5804__auto___13113 = cljs.core.chunk_first(seq__13095_13112__$1);
var G__13114 = cljs.core.chunk_rest(seq__13095_13112__$1);
var G__13115 = c__5804__auto___13113;
var G__13116 = cljs.core.count(c__5804__auto___13113);
var G__13117 = (0);
seq__13095_13100 = G__13114;
chunk__13096_13101 = G__13115;
count__13097_13102 = G__13116;
i__13098_13103 = G__13117;
continue;
} else {
var x_13118 = cljs.core.first(seq__13095_13112__$1);
var temp__4425__auto___13119__$1 = node_13099(x_13118);
if(cljs.core.truth_(temp__4425__auto___13119__$1)){
var x_13120__$1 = temp__4425__auto___13119__$1;
hoplon.core.append_child_BANG_(this$__$1,x_13120__$1);
} else {
}

var G__13121 = cljs.core.next(seq__13095_13112__$1);
var G__13122 = null;
var G__13123 = (0);
var G__13124 = (0);
seq__13095_13100 = G__13121;
chunk__13096_13101 = G__13122;
count__13097_13102 = G__13123;
i__13098_13103 = G__13124;
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
var G__13131__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__13126 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(1),null);
var G__13127 = this$;
hoplon.core.add_attributes_BANG_(G__13127,attr);

hoplon.core.add_children_BANG_(G__13127,kids);

return G__13127;
};
var G__13131 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__13132__i = 0, G__13132__a = new Array(arguments.length -  1);
while (G__13132__i < G__13132__a.length) {G__13132__a[G__13132__i] = arguments[G__13132__i + 1]; ++G__13132__i;}
  args = new cljs.core.IndexedSeq(G__13132__a,0);
} 
return G__13131__delegate.call(this,self__,args);};
G__13131.cljs$lang$maxFixedArity = 1;
G__13131.cljs$lang$applyTo = (function (arglist__13133){
var self__ = cljs.core.first(arglist__13133);
var args = cljs.core.rest(arglist__13133);
return G__13131__delegate(self__,args);
});
G__13131.cljs$core$IFn$_invoke$arity$variadic = G__13131__delegate;
return G__13131;
})()
;

Element.prototype.apply = (function (self__,args13125){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13125)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__13134__delegate = function (args){
var this$ = this;
var vec__13128 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(1),null);
var G__13129 = this$;
hoplon.core.add_attributes_BANG_(G__13129,attr);

hoplon.core.add_children_BANG_(G__13129,kids);

return G__13129;
};
var G__13134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13135__i = 0, G__13135__a = new Array(arguments.length -  0);
while (G__13135__i < G__13135__a.length) {G__13135__a[G__13135__i] = arguments[G__13135__i + 0]; ++G__13135__i;}
  args = new cljs.core.IndexedSeq(G__13135__a,0);
} 
return G__13134__delegate.call(this,args);};
G__13134.cljs$lang$maxFixedArity = 0;
G__13134.cljs$lang$applyTo = (function (arglist__13136){
var args = cljs.core.seq(arglist__13136);
return G__13134__delegate(args);
});
G__13134.cljs$core$IFn$_invoke$arity$variadic = G__13134__delegate;
return G__13134;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_13137__$1 = cljs.core.name(k);
var e_13138 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_13138.removeAttr(k_13137__$1);
} else {
e_13138.attr(k_13137__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13137__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e13130){if((e13130 instanceof Error)){
var _ = e13130;
return null;
} else {
throw e13130;

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
var G__13145__delegate = function (args){
var vec__13142 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__13143 = elem.hoplonKids;
var G__13144 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13143,G__13144) : cljs.core.reset_BANG_.call(null,G__13143,G__13144));
} else {
return null;
}
};
var G__13145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13146__i = 0, G__13146__a = new Array(arguments.length -  0);
while (G__13146__i < G__13146__a.length) {G__13146__a[G__13146__i] = arguments[G__13146__i + 0]; ++G__13146__i;}
  args = new cljs.core.IndexedSeq(G__13146__a,0);
} 
return G__13145__delegate.call(this,args);};
G__13145.cljs$lang$maxFixedArity = 0;
G__13145.cljs$lang$applyTo = (function (arglist__13147){
var args = cljs.core.seq(arglist__13147);
return G__13145__delegate(args);
});
G__13145.cljs$core$IFn$_invoke$arity$variadic = G__13145__delegate;
return G__13145;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__13148__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__13148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13149__i = 0, G__13149__a = new Array(arguments.length -  0);
while (G__13149__i < G__13149__a.length) {G__13149__a[G__13149__i] = arguments[G__13149__i + 0]; ++G__13149__i;}
  args = new cljs.core.IndexedSeq(G__13149__a,0);
} 
return G__13148__delegate.call(this,args);};
G__13148.cljs$lang$maxFixedArity = 0;
G__13148.cljs$lang$applyTo = (function (arglist__13150){
var args = cljs.core.seq(arglist__13150);
return G__13148__delegate(args);
});
G__13148.cljs$core$IFn$_invoke$arity$variadic = G__13148__delegate;
return G__13148;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___13153 = arguments.length;
var i__6060__auto___13154 = (0);
while(true){
if((i__6060__auto___13154 < len__6059__auto___13153)){
args__6066__auto__.push((arguments[i__6060__auto___13154]));

var G__13155 = (i__6060__auto___13154 + (1));
i__6060__auto___13154 = G__13155;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13152 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13152,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13152,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq13151){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13151));
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
hoplon.core.$text = (function hoplon$core$$text(p1__13156_SHARP_){
return document.createTextNode(p1__13156_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__13157_SHARP_){
return document.createComment(p1__13157_SHARP_);
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
return jQuery("body").on("submit",(function (p1__13158_SHARP_){
var e = (function (){var G__13159 = p1__13158_SHARP_.target;
return jQuery(G__13159);
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
return p1__13158_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args13160 = [];
var len__6059__auto___13163 = arguments.length;
var i__6060__auto___13164 = (0);
while(true){
if((i__6060__auto___13164 < len__6059__auto___13163)){
args13160.push((arguments[i__6060__auto___13164]));

var G__13165 = (i__6060__auto___13164 + (1));
i__6060__auto___13164 = G__13165;
continue;
} else {
}
break;
}

var G__13162 = args13160.length;
switch (G__13162) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13160.length)].join('')));

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
var args13167 = [];
var len__6059__auto___13170 = arguments.length;
var i__6060__auto___13171 = (0);
while(true){
if((i__6060__auto___13171 < len__6059__auto___13170)){
args13167.push((arguments[i__6060__auto___13171]));

var G__13172 = (i__6060__auto___13171 + (1));
i__6060__auto___13171 = G__13172;
continue;
} else {
}
break;
}

var G__13169 = args13167.length;
switch (G__13169) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13167.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__13174 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13174) : cljs.core.atom.call(null,G__13174));
})();
var prefer_table__5915__auto__ = (function (){var G__13175 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13175) : cljs.core.atom.call(null,G__13175));
})();
var method_cache__5916__auto__ = (function (){var G__13176 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13176) : cljs.core.atom.call(null,G__13176));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__13177 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13177) : cljs.core.atom.call(null,G__13177));
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
var G__13178 = elem;
var G__13179 = cljs.core.cst$kw$attr;
var G__13180 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__13178,G__13179,G__13180) : hoplon.core.do_BANG_.call(null,G__13178,G__13179,G__13180));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__13181__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__13181 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__13182__i = 0, G__13182__a = new Array(arguments.length -  2);
while (G__13182__i < G__13182__a.length) {G__13182__a[G__13182__i] = arguments[G__13182__i + 2]; ++G__13182__i;}
  args = new cljs.core.IndexedSeq(G__13182__a,0);
} 
return G__13181__delegate.call(this,elem,_,args);};
G__13181.cljs$lang$maxFixedArity = 2;
G__13181.cljs$lang$applyTo = (function (arglist__13183){
var elem = cljs.core.first(arglist__13183);
arglist__13183 = cljs.core.next(arglist__13183);
var _ = cljs.core.first(arglist__13183);
var args = cljs.core.rest(arglist__13183);
return G__13181__delegate(elem,_,args);
});
G__13181.cljs$core$IFn$_invoke$arity$variadic = G__13181__delegate;
return G__13181;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13184 = cljs.core.seq(kvs);
var chunk__13185 = null;
var count__13186 = (0);
var i__13187 = (0);
while(true){
if((i__13187 < count__13186)){
var vec__13188 = chunk__13185.cljs$core$IIndexed$_nth$arity$2(null,i__13187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(1),null);
var k_13190__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13190__$1);
} else {
e.attr(k_13190__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13190__$1:v));
}

var G__13191 = seq__13184;
var G__13192 = chunk__13185;
var G__13193 = count__13186;
var G__13194 = (i__13187 + (1));
seq__13184 = G__13191;
chunk__13185 = G__13192;
count__13186 = G__13193;
i__13187 = G__13194;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13184);
if(temp__4425__auto__){
var seq__13184__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13184__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13184__$1);
var G__13195 = cljs.core.chunk_rest(seq__13184__$1);
var G__13196 = c__5804__auto__;
var G__13197 = cljs.core.count(c__5804__auto__);
var G__13198 = (0);
seq__13184 = G__13195;
chunk__13185 = G__13196;
count__13186 = G__13197;
i__13187 = G__13198;
continue;
} else {
var vec__13189 = cljs.core.first(seq__13184__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13189,(1),null);
var k_13199__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13199__$1);
} else {
e.attr(k_13199__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13199__$1:v));
}

var G__13200 = cljs.core.next(seq__13184__$1);
var G__13201 = null;
var G__13202 = (0);
var G__13203 = (0);
seq__13184 = G__13200;
chunk__13185 = G__13201;
count__13186 = G__13202;
i__13187 = G__13203;
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
return (function (p1__13204_SHARP_){
return cljs.core.zipmap(p1__13204_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__13205 = cljs.core.seq(clmap);
var chunk__13206 = null;
var count__13207 = (0);
var i__13208 = (0);
while(true){
if((i__13208 < count__13207)){
var vec__13209 = chunk__13206.cljs$core$IIndexed$_nth$arity$2(null,i__13208);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13209,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13209,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13211 = seq__13205;
var G__13212 = chunk__13206;
var G__13213 = count__13207;
var G__13214 = (i__13208 + (1));
seq__13205 = G__13211;
chunk__13206 = G__13212;
count__13207 = G__13213;
i__13208 = G__13214;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13205);
if(temp__4425__auto__){
var seq__13205__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13205__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13205__$1);
var G__13215 = cljs.core.chunk_rest(seq__13205__$1);
var G__13216 = c__5804__auto__;
var G__13217 = cljs.core.count(c__5804__auto__);
var G__13218 = (0);
seq__13205 = G__13215;
chunk__13206 = G__13216;
count__13207 = G__13217;
i__13208 = G__13218;
continue;
} else {
var vec__13210 = cljs.core.first(seq__13205__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13210,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13210,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13219 = cljs.core.next(seq__13205__$1);
var G__13220 = null;
var G__13221 = (0);
var G__13222 = (0);
seq__13205 = G__13219;
chunk__13206 = G__13220;
count__13207 = G__13221;
i__13208 = G__13222;
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
var seq__13223 = cljs.core.seq(kvs);
var chunk__13224 = null;
var count__13225 = (0);
var i__13226 = (0);
while(true){
if((i__13226 < count__13225)){
var vec__13227 = chunk__13224.cljs$core$IIndexed$_nth$arity$2(null,i__13226);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13229 = seq__13223;
var G__13230 = chunk__13224;
var G__13231 = count__13225;
var G__13232 = (i__13226 + (1));
seq__13223 = G__13229;
chunk__13224 = G__13230;
count__13225 = G__13231;
i__13226 = G__13232;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13223);
if(temp__4425__auto__){
var seq__13223__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13223__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13223__$1);
var G__13233 = cljs.core.chunk_rest(seq__13223__$1);
var G__13234 = c__5804__auto__;
var G__13235 = cljs.core.count(c__5804__auto__);
var G__13236 = (0);
seq__13223 = G__13233;
chunk__13224 = G__13234;
count__13225 = G__13235;
i__13226 = G__13236;
continue;
} else {
var vec__13228 = cljs.core.first(seq__13223__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13228,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13237 = cljs.core.next(seq__13223__$1);
var G__13238 = null;
var G__13239 = (0);
var G__13240 = (0);
seq__13223 = G__13237;
chunk__13224 = G__13238;
count__13225 = G__13239;
i__13226 = G__13240;
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
var G__13241 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__13242 = (0);
return setTimeout(G__13241,G__13242);
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
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = (function (){var G__13243 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13243) : cljs.core.atom.call(null,G__13243));
})();
var prefer_table__5915__auto__ = (function (){var G__13244 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13244) : cljs.core.atom.call(null,G__13244));
})();
var method_cache__5916__auto__ = (function (){var G__13245 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13245) : cljs.core.atom.call(null,G__13245));
})();
var cached_hierarchy__5917__auto__ = (function (){var G__13246 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13246) : cljs.core.atom.call(null,G__13246));
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
return (function (){var G__13247 = this$__$1.target;
return jQuery(G__13247);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__13262 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13262) : cljs.core.atom.call(null,G__13262));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__13263,G__13264){
return (G__13263.cljs$core$IFn$_invoke$arity$1 ? G__13263.cljs$core$IFn$_invoke$arity$1(G__13264) : G__13263.call(null,G__13264));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__13248_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__13267,G__13266,G__13265){
return (G__13265.cljs$core$IFn$_invoke$arity$2 ? G__13265.cljs$core$IFn$_invoke$arity$2(G__13266,G__13267) : G__13265.call(null,G__13266,G__13267));
});})(on_deck,items_seq))
).call(null,p1__13248_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__13249_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__13249_SHARP_) : cljs.core.deref.call(null,p1__13249_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__13249_SHARP_,cljs.core.rest);

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
var seq__13268 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__13269 = null;
var count__13270 = (0);
var i__13271 = (0);
while(true){
if((i__13271 < count__13270)){
var i = chunk__13269.cljs$core$IIndexed$_nth$arity$2(null,i__13271);
var e_13274 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__13272 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13272) : tpl.call(null,G__13272));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13274);

var G__13275 = seq__13268;
var G__13276 = chunk__13269;
var G__13277 = count__13270;
var G__13278 = (i__13271 + (1));
seq__13268 = G__13275;
chunk__13269 = G__13276;
count__13270 = G__13277;
i__13271 = G__13278;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13268);
if(temp__4425__auto__){
var seq__13268__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13268__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13268__$1);
var G__13279 = cljs.core.chunk_rest(seq__13268__$1);
var G__13280 = c__5804__auto__;
var G__13281 = cljs.core.count(c__5804__auto__);
var G__13282 = (0);
seq__13268 = G__13279;
chunk__13269 = G__13280;
count__13270 = G__13281;
i__13271 = G__13282;
continue;
} else {
var i = cljs.core.first(seq__13268__$1);
var e_13283 = (function (){var or__5020__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__13273 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13273) : tpl.call(null,G__13273));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13283);

var G__13284 = cljs.core.next(seq__13268__$1);
var G__13285 = null;
var G__13286 = (0);
var G__13287 = (0);
seq__13268 = G__13284;
chunk__13269 = G__13285;
count__13270 = G__13286;
i__13271 = G__13287;
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
var e_13288 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_13288);

var G__13289 = (_ + (1));
_ = G__13289;
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
var len__6059__auto___13298 = arguments.length;
var i__6060__auto___13299 = (0);
while(true){
if((i__6060__auto___13299 < len__6059__auto___13298)){
args__6066__auto__.push((arguments[i__6060__auto___13299]));

var G__13300 = (i__6060__auto___13299 + (1));
i__6060__auto___13299 = G__13300;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__13291){
var vec__13292 = p__13291;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13292,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__13292,default$){
return (function (G__13293,G__13295,G__13294){
var or__5020__auto__ = (function (){var and__5008__auto__ = (G__13293.cljs$core$IFn$_invoke$arity$1 ? G__13293.cljs$core$IFn$_invoke$arity$1(G__13294) : G__13293.call(null,G__13294));
if(cljs.core.truth_(and__5008__auto__)){
return G__13294;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__13295;
}
});})(c,vec__13292,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__13292,default$){
return (function (){
var G__13296 = c;
var G__13297 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13296,G__13297) : cljs.core.reset_BANG_.call(null,G__13296,G__13297));
});})(_,c,vec__13292,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq13290){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13290));
});
