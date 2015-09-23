// Compiled by ClojureScript 1.7.48 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljsjs.jquery');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 * the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8024_SHARP_,p2__8025_SHARP_){
return cljs.core.assoc.call(null,p1__8024_SHARP_,p2__8025_SHARP_.getAttribute("static-id"),p2__8025_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args8026 = [];
var len__6059__auto___8029 = arguments.length;
var i__6060__auto___8030 = (0);
while(true){
if((i__6060__auto___8030 < len__6059__auto___8029)){
args8026.push((arguments[i__6060__auto___8030]));

var G__8031 = (i__6060__auto___8030 + (1));
i__6060__auto___8030 = G__8031;
continue;
} else {
}
break;
}

var G__8028 = args8026.length;
switch (G__8028) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8026.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.call(null,atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8035 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__8035,(0),null);
var more = cljs.core.nthnext.call(null,vec__8035,(1));
var vec__8036 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8036,(0),null);
var f2 = cljs.core.nth.call(null,vec__8036,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("bf95e310f32a4f429aef59a83b6ad805")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__5020__auto__ = (function (){var and__5008__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__5008__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
var G__8037 = (i + (1));
var G__8038 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8037;
ret = G__8038;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return hoplon.core.$text.call(null,x);
} else {
if(typeof x === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(x)].join(''));
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
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8049 = new$__$1;
var vec__8051 = G__8049;
var x = cljs.core.nth.call(null,vec__8051,(0),null);
var xs = cljs.core.nthnext.call(null,vec__8051,(1));
var G__8050 = hoplon.core.child_vec.call(null,this$);
var vec__8052 = G__8050;
var k = cljs.core.nth.call(null,vec__8052,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8052,(1));
var kids = vec__8052;
var G__8049__$1 = G__8049;
var G__8050__$1 = G__8050;
while(true){
var vec__8053 = G__8049__$1;
var x__$1 = cljs.core.nth.call(null,vec__8053,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__8053,(1));
var vec__8054 = G__8050__$1;
var k__$1 = cljs.core.nth.call(null,vec__8054,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__8054,(1));
var kids__$1 = vec__8054;
if(cljs.core.truth_((function (){var or__5020__auto__ = x__$1;
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return k__$1;
}
})())){
var G__8055 = xs__$1;
var G__8056 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node.call(null,k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node.call(null,x__$1),hoplon.core.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__8049__$1 = G__8055;
G__8050__$1 = G__8056;
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
var kids_8057 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8057;

hoplon.core.do_watch.call(null,kids_8057,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_8060 = kidfn.call(null,this$__$1);
var i_8061 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8060));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_8060,i_8061,x__$1,this$__$1){
return (function (p1__8059_SHARP_,p2__8058_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8060,cljs.core.assoc,i_8061,p2__8058_SHARP_);
});})(kids_8060,i_8061,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8060,cljs.core.assoc,i_8061,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8062_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8062_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8063_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8063_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__8064_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8064_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8065 = cljs.core.keyword.call(null,k);
var attr_8066 = attrfn.call(null,this$__$1);
var has_QMARK__8067 = (function (){var and__5008__auto__ = attr_8066;
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8066),kk_8065);
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8067)){
cljs.core.swap_BANG_.call(null,attr_8066,cljs.core.assoc,kk_8065,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8068_SHARP_){
return p1__8068_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8069_SHARP_){
return p1__8069_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8070_SHARP_){
return p1__8070_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8071_SHARP_){
return p1__8071_SHARP_.hoplonKids;
}));

hoplon.core.ICustomElement = {};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5656__auto__ = (((this$ == null))?null:this$);
var m__5657__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5656__auto__)]);
if(!((m__5657__auto__ == null))){
return m__5657__auto__.call(null,this$,k,v);
} else {
var m__5657__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return m__5657__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attribute!",this$);
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
return m__5657__auto__.call(null,this$,child);
} else {
var m__5657__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return m__5657__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
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
return m__5657__auto__.call(null,this$,child);
} else {
var m__5657__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return m__5657__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
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
return m__5657__auto__.call(null,this$,new$,existing);
} else {
var m__5657__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return m__5657__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
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
return m__5657__auto__.call(null,this$,new$,existing);
} else {
var m__5657__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5657__auto____$1 == null))){
return m__5657__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_.call(null,this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not.call(null,(window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8074_SHARP_){
return (p1__8074_SHARP_ instanceof Node);
}):(function (p1__8075_SHARP_){
try{return p1__8075_SHARP_.nodeType;
}catch (e8076){if((e8076 instanceof Error)){
var _ = e8076;
return null;
} else {
throw e8076;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8077_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8077_SHARP_);
}catch (e8078){if((e8078 instanceof Error)){
var _ = e8078;
return null;
} else {
throw e8078;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8079_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8079_SHARP_);
}catch (e8080){if((e8080 instanceof Error)){
var _ = e8080;
return null;
} else {
throw e8080;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args8081 = [];
var len__6059__auto___8085 = arguments.length;
var i__6060__auto___8086 = (0);
while(true){
if((i__6060__auto___8086 < len__6059__auto___8085)){
args8081.push((arguments[i__6060__auto___8086]));

var G__8087 = (i__6060__auto___8086 + (1));
i__6060__auto___8086 = G__8087;
continue;
} else {
}
break;
}

var G__8083 = args8081.length;
switch (G__8083) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8081.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8084){if((e8084 instanceof Error)){
var _ = e8084;
return not_found;
} else {
throw e8084;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args8089 = [];
var len__6059__auto___8092 = arguments.length;
var i__6060__auto___8093 = (0);
while(true){
if((i__6060__auto___8093 < len__6059__auto___8092)){
args8089.push((arguments[i__6060__auto___8093]));

var G__8094 = (i__6060__auto___8093 + (1));
i__6060__auto___8093 = G__8094;
continue;
} else {
}
break;
}

var G__8091 = args8089.length;
switch (G__8091) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8089.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__8104 = args;
var vec__8105 = G__8104;
var arg = cljs.core.nth.call(null,vec__8105,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8105,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8104__$1 = G__8104;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8106 = G__8104__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8106,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8106,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8107 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8104__$1,attr__$2,kids__$2,vec__8106,arg__$1,args__$2,attr,kids,G__8104,vec__8105,arg,args__$1){
return (function (p1__8096_SHARP_,p2__8097_SHARP_,p3__8098_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8096_SHARP_,p2__8097_SHARP_,p3__8098_SHARP_);
});})(attr__$1,kids__$1,G__8104__$1,attr__$2,kids__$2,vec__8106,arg__$1,args__$2,attr,kids,G__8104,vec__8105,arg,args__$1))
,attr__$2,arg__$1);
var G__8108 = kids__$2;
var G__8109 = args__$2;
attr__$1 = G__8107;
kids__$1 = G__8108;
G__8104__$1 = G__8109;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8110 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8111 = kids__$2;
var G__8112 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8110;
kids__$1 = G__8111;
G__8104__$1 = G__8112;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8113 = attr__$2;
var G__8114 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8115 = args__$2;
attr__$1 = G__8113;
kids__$1 = G__8114;
G__8104__$1 = G__8115;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8116 = attr__$2;
var G__8117 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8118 = args__$2;
attr__$1 = G__8116;
kids__$1 = G__8117;
G__8104__$1 = G__8118;
continue;
} else {
var G__8119 = attr__$2;
var G__8120 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8121 = args__$2;
attr__$1 = G__8119;
kids__$1 = G__8120;
G__8104__$1 = G__8121;
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
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,v))){
hoplon.core.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__8123_SHARP_,p2__8122_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8122_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
hoplon.core.on_BANG_.call(null,this$__$3,k,v);
} else {
hoplon.core.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8125){
var vec__8131 = p__8125;
var child_cell = cljs.core.nth.call(null,vec__8131,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8131,(1));
var kids = vec__8131;
var this$__$1 = this$;
var node_8136 = ((function (this$__$1,vec__8131,child_cell,_,kids){
return (function (p1__8124_SHARP_){
if(typeof p1__8124_SHARP_ === 'string'){
return hoplon.core.$text.call(null,p1__8124_SHARP_);
} else {
if(typeof p1__8124_SHARP_ === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(p1__8124_SHARP_)].join(''));
} else {
return p1__8124_SHARP_;

}
}
});})(this$__$1,vec__8131,child_cell,_,kids))
;
var seq__8132_8137 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8133_8138 = null;
var count__8134_8139 = (0);
var i__8135_8140 = (0);
while(true){
if((i__8135_8140 < count__8134_8139)){
var x_8141 = cljs.core._nth.call(null,chunk__8133_8138,i__8135_8140);
var temp__4425__auto___8142 = node_8136.call(null,x_8141);
if(cljs.core.truth_(temp__4425__auto___8142)){
var x_8143__$1 = temp__4425__auto___8142;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8143__$1);
} else {
}

var G__8144 = seq__8132_8137;
var G__8145 = chunk__8133_8138;
var G__8146 = count__8134_8139;
var G__8147 = (i__8135_8140 + (1));
seq__8132_8137 = G__8144;
chunk__8133_8138 = G__8145;
count__8134_8139 = G__8146;
i__8135_8140 = G__8147;
continue;
} else {
var temp__4425__auto___8148 = cljs.core.seq.call(null,seq__8132_8137);
if(temp__4425__auto___8148){
var seq__8132_8149__$1 = temp__4425__auto___8148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8132_8149__$1)){
var c__5804__auto___8150 = cljs.core.chunk_first.call(null,seq__8132_8149__$1);
var G__8151 = cljs.core.chunk_rest.call(null,seq__8132_8149__$1);
var G__8152 = c__5804__auto___8150;
var G__8153 = cljs.core.count.call(null,c__5804__auto___8150);
var G__8154 = (0);
seq__8132_8137 = G__8151;
chunk__8133_8138 = G__8152;
count__8134_8139 = G__8153;
i__8135_8140 = G__8154;
continue;
} else {
var x_8155 = cljs.core.first.call(null,seq__8132_8149__$1);
var temp__4425__auto___8156__$1 = node_8136.call(null,x_8155);
if(cljs.core.truth_(temp__4425__auto___8156__$1)){
var x_8157__$1 = temp__4425__auto___8156__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8157__$1);
} else {
}

var G__8158 = cljs.core.next.call(null,seq__8132_8149__$1);
var G__8159 = null;
var G__8160 = (0);
var G__8161 = (0);
seq__8132_8137 = G__8158;
chunk__8133_8138 = G__8159;
count__8134_8139 = G__8160;
i__8135_8140 = G__8161;
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
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8168__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8163 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8163,(0),null);
var kids = cljs.core.nth.call(null,vec__8163,(1),null);
var G__8164 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8164,attr);

hoplon.core.add_children_BANG_.call(null,G__8164,kids);

return G__8164;
};
var G__8168 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8169__i = 0, G__8169__a = new Array(arguments.length -  1);
while (G__8169__i < G__8169__a.length) {G__8169__a[G__8169__i] = arguments[G__8169__i + 1]; ++G__8169__i;}
  args = new cljs.core.IndexedSeq(G__8169__a,0);
} 
return G__8168__delegate.call(this,self__,args);};
G__8168.cljs$lang$maxFixedArity = 1;
G__8168.cljs$lang$applyTo = (function (arglist__8170){
var self__ = cljs.core.first(arglist__8170);
var args = cljs.core.rest(arglist__8170);
return G__8168__delegate(self__,args);
});
G__8168.cljs$core$IFn$_invoke$arity$variadic = G__8168__delegate;
return G__8168;
})()
;

Element.prototype.apply = (function (self__,args8162){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8162)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8171__delegate = function (args){
var this$ = this;
var vec__8165 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8165,(0),null);
var kids = cljs.core.nth.call(null,vec__8165,(1),null);
var G__8166 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8166,attr);

hoplon.core.add_children_BANG_.call(null,G__8166,kids);

return G__8166;
};
var G__8171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8172__i = 0, G__8172__a = new Array(arguments.length -  0);
while (G__8172__i < G__8172__a.length) {G__8172__a[G__8172__i] = arguments[G__8172__i + 0]; ++G__8172__i;}
  args = new cljs.core.IndexedSeq(G__8172__a,0);
} 
return G__8171__delegate.call(this,args);};
G__8171.cljs$lang$maxFixedArity = 0;
G__8171.cljs$lang$applyTo = (function (arglist__8173){
var args = cljs.core.seq(arglist__8173);
return G__8171__delegate(args);
});
G__8171.cljs$core$IFn$_invoke$arity$variadic = G__8171__delegate;
return G__8171;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8174__$1 = cljs.core.name.call(null,k);
var e_8175 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_8175.removeAttr(k_8174__$1);
} else {
e_8175.attr(k_8174__$1,((cljs.core._EQ_.call(null,true,v))?k_8174__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8167){if((e8167 instanceof Error)){
var _ = e8167;
return null;
} else {
throw e8167;

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
var G__8178__delegate = function (args){
var vec__8177 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8177,(0),null);
var kids = cljs.core.nth.call(null,vec__8177,(1),null);
var elem = hoplon.core.ensure_kids_BANG_.call(null,(document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.reset_BANG_.call(null,elem.hoplonKids,cljs.core.vec.call(null,kids));
} else {
return null;
}
};
var G__8178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8179__i = 0, G__8179__a = new Array(arguments.length -  0);
while (G__8179__i < G__8179__a.length) {G__8179__a[G__8179__i] = arguments[G__8179__i + 0]; ++G__8179__i;}
  args = new cljs.core.IndexedSeq(G__8179__a,0);
} 
return G__8178__delegate.call(this,args);};
G__8178.cljs$lang$maxFixedArity = 0;
G__8178.cljs$lang$applyTo = (function (arglist__8180){
var args = cljs.core.seq(arglist__8180);
return G__8178__delegate(args);
});
G__8178.cljs$core$IFn$_invoke$arity$variadic = G__8178__delegate;
return G__8178;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8181__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__8181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8182__i = 0, G__8182__a = new Array(arguments.length -  0);
while (G__8182__i < G__8182__a.length) {G__8182__a[G__8182__i] = arguments[G__8182__i + 0]; ++G__8182__i;}
  args = new cljs.core.IndexedSeq(G__8182__a,0);
} 
return G__8181__delegate.call(this,args);};
G__8181.cljs$lang$maxFixedArity = 0;
G__8181.cljs$lang$applyTo = (function (arglist__8183){
var args = cljs.core.seq(arglist__8183);
return G__8181__delegate(args);
});
G__8181.cljs$core$IFn$_invoke$arity$variadic = G__8181__delegate;
return G__8181;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6066__auto__ = [];
var len__6059__auto___8186 = arguments.length;
var i__6060__auto___8187 = (0);
while(true){
if((i__6060__auto___8187 < len__6059__auto___8186)){
args__6066__auto__.push((arguments[i__6060__auto___8187]));

var G__8188 = (i__6060__auto___8187 + (1));
i__6060__auto___8187 = G__8188;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8185 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8185,(0),null);
var _ = cljs.core.nth.call(null,vec__8185,(1),null);
return hoplon.core.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8184){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8184));
});
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,"body");
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,"head");
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor.call(null,"acronym");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.applet = hoplon.core.make_elem_ctor.call(null,"applet");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.basefont = hoplon.core.make_elem_ctor.call(null,"basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.big = hoplon.core.make_elem_ctor.call(null,"big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.center = hoplon.core.make_elem_ctor.call(null,"center");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor.call(null,"command");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor.call(null,"dir");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor.call(null,"eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.font = hoplon.core.make_elem_ctor.call(null,"font");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.frame = hoplon.core.make_elem_ctor.call(null,"frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor.call(null,"frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor.call(null,"isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strike = hoplon.core.make_elem_ctor.call(null,"strike");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.tt = hoplon.core.make_elem_ctor.call(null,"tt");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__8189_SHARP_){
return document.createTextNode(p1__8189_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8190_SHARP_){
return document.createComment(p1__8190_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__8191_SHARP_){
var e = jQuery(p1__8191_SHARP_.target);
if(cljs.core.truth_((function (){var or__5020__auto__ = e.attr("action");
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8191_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args8192 = [];
var len__6059__auto___8195 = arguments.length;
var i__6060__auto___8196 = (0);
while(true){
if((i__6060__auto___8196 < len__6059__auto___8195)){
args8192.push((arguments[i__6060__auto___8196]));

var G__8197 = (i__6060__auto___8196 + (1));
i__6060__auto___8196 = G__8197;
continue;
} else {
}
break;
}

var G__8194 = args8192.length;
switch (G__8194) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8192.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.core.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(){
var args8199 = [];
var len__6059__auto___8202 = arguments.length;
var i__6060__auto___8203 = (0);
while(true){
if((i__6060__auto___8203 < len__6059__auto___8202)){
args8199.push((arguments[i__6060__auto___8203]));

var G__8204 = (i__6060__auto___8203 + (1));
i__6060__auto___8203 = G__8204;
continue;
} else {
}
break;
}

var G__8201 = args8199.length;
switch (G__8201) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8199.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__5914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5918__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__5918__auto__,method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__8206__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8206 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8207__i = 0, G__8207__a = new Array(arguments.length -  2);
while (G__8207__i < G__8207__a.length) {G__8207__a[G__8207__i] = arguments[G__8207__i + 2]; ++G__8207__i;}
  args = new cljs.core.IndexedSeq(G__8207__a,0);
} 
return G__8206__delegate.call(this,elem,_,args);};
G__8206.cljs$lang$maxFixedArity = 2;
G__8206.cljs$lang$applyTo = (function (arglist__8208){
var elem = cljs.core.first(arglist__8208);
arglist__8208 = cljs.core.next(arglist__8208);
var _ = cljs.core.first(arglist__8208);
var args = cljs.core.rest(arglist__8208);
return G__8206__delegate(elem,_,args);
});
G__8206.cljs$core$IFn$_invoke$arity$variadic = G__8206__delegate;
return G__8206;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8209 = cljs.core.seq.call(null,kvs);
var chunk__8210 = null;
var count__8211 = (0);
var i__8212 = (0);
while(true){
if((i__8212 < count__8211)){
var vec__8213 = cljs.core._nth.call(null,chunk__8210,i__8212);
var k = cljs.core.nth.call(null,vec__8213,(0),null);
var v = cljs.core.nth.call(null,vec__8213,(1),null);
var k_8215__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8215__$1);
} else {
e.attr(k_8215__$1,((cljs.core._EQ_.call(null,true,v))?k_8215__$1:v));
}

var G__8216 = seq__8209;
var G__8217 = chunk__8210;
var G__8218 = count__8211;
var G__8219 = (i__8212 + (1));
seq__8209 = G__8216;
chunk__8210 = G__8217;
count__8211 = G__8218;
i__8212 = G__8219;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8209);
if(temp__4425__auto__){
var seq__8209__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8209__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__8209__$1);
var G__8220 = cljs.core.chunk_rest.call(null,seq__8209__$1);
var G__8221 = c__5804__auto__;
var G__8222 = cljs.core.count.call(null,c__5804__auto__);
var G__8223 = (0);
seq__8209 = G__8220;
chunk__8210 = G__8221;
count__8211 = G__8222;
i__8212 = G__8223;
continue;
} else {
var vec__8214 = cljs.core.first.call(null,seq__8209__$1);
var k = cljs.core.nth.call(null,vec__8214,(0),null);
var v = cljs.core.nth.call(null,vec__8214,(1),null);
var k_8224__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8224__$1);
} else {
e.attr(k_8224__$1,((cljs.core._EQ_.call(null,true,v))?k_8224__$1:v));
}

var G__8225 = cljs.core.next.call(null,seq__8209__$1);
var G__8226 = null;
var G__8227 = (0);
var G__8228 = (0);
seq__8209 = G__8225;
chunk__8210 = G__8226;
count__8211 = G__8227;
i__8212 = G__8228;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8229_SHARP_){
return cljs.core.zipmap.call(null,p1__8229_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8230 = cljs.core.seq.call(null,clmap);
var chunk__8231 = null;
var count__8232 = (0);
var i__8233 = (0);
while(true){
if((i__8233 < count__8232)){
var vec__8234 = cljs.core._nth.call(null,chunk__8231,i__8233);
var c = cljs.core.nth.call(null,vec__8234,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8234,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8236 = seq__8230;
var G__8237 = chunk__8231;
var G__8238 = count__8232;
var G__8239 = (i__8233 + (1));
seq__8230 = G__8236;
chunk__8231 = G__8237;
count__8232 = G__8238;
i__8233 = G__8239;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8230);
if(temp__4425__auto__){
var seq__8230__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8230__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__8230__$1);
var G__8240 = cljs.core.chunk_rest.call(null,seq__8230__$1);
var G__8241 = c__5804__auto__;
var G__8242 = cljs.core.count.call(null,c__5804__auto__);
var G__8243 = (0);
seq__8230 = G__8240;
chunk__8231 = G__8241;
count__8232 = G__8242;
i__8233 = G__8243;
continue;
} else {
var vec__8235 = cljs.core.first.call(null,seq__8230__$1);
var c = cljs.core.nth.call(null,vec__8235,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8235,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8244 = cljs.core.next.call(null,seq__8230__$1);
var G__8245 = null;
var G__8246 = (0);
var G__8247 = (0);
seq__8230 = G__8244;
chunk__8231 = G__8245;
count__8232 = G__8246;
i__8233 = G__8247;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8248 = cljs.core.seq.call(null,kvs);
var chunk__8249 = null;
var count__8250 = (0);
var i__8251 = (0);
while(true){
if((i__8251 < count__8250)){
var vec__8252 = cljs.core._nth.call(null,chunk__8249,i__8251);
var k = cljs.core.nth.call(null,vec__8252,(0),null);
var v = cljs.core.nth.call(null,vec__8252,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8254 = seq__8248;
var G__8255 = chunk__8249;
var G__8256 = count__8250;
var G__8257 = (i__8251 + (1));
seq__8248 = G__8254;
chunk__8249 = G__8255;
count__8250 = G__8256;
i__8251 = G__8257;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8248);
if(temp__4425__auto__){
var seq__8248__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8248__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__8248__$1);
var G__8258 = cljs.core.chunk_rest.call(null,seq__8248__$1);
var G__8259 = c__5804__auto__;
var G__8260 = cljs.core.count.call(null,c__5804__auto__);
var G__8261 = (0);
seq__8248 = G__8258;
chunk__8249 = G__8259;
count__8250 = G__8260;
i__8251 = G__8261;
continue;
} else {
var vec__8253 = cljs.core.first.call(null,seq__8248__$1);
var k = cljs.core.nth.call(null,vec__8253,(0),null);
var v = cljs.core.nth.call(null,vec__8253,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8262 = cljs.core.next.call(null,seq__8248__$1);
var G__8263 = null;
var G__8264 = (0);
var G__8265 = (0);
seq__8248 = G__8262;
chunk__8249 = G__8263;
count__8250 = G__8264;
i__8251 = G__8265;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__5914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5918__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__,hierarchy__5918__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__5918__auto__,method_table__5914__auto__,prefer_table__5915__auto__,method_cache__5916__auto__,cached_hierarchy__5917__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__8277,G__8278){
return G__8277.call(null,G__8278);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__8266_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__8280,G__8281,G__8279){
return G__8279.call(null,G__8280,G__8281);
});})(on_deck,items_seq))
).call(null,items_seq,p1__8266_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__8267_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__8267_SHARP_));
cljs.core.swap_BANG_.call(null,p1__8267_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__8282 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__8283 = null;
var count__8284 = (0);
var i__8285 = (0);
while(true){
if((i__8285 < count__8284)){
var i = cljs.core._nth.call(null,chunk__8283,i__8285);
var e_8286 = (function (){var or__5020__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8286);

var G__8287 = seq__8282;
var G__8288 = chunk__8283;
var G__8289 = count__8284;
var G__8290 = (i__8285 + (1));
seq__8282 = G__8287;
chunk__8283 = G__8288;
count__8284 = G__8289;
i__8285 = G__8290;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8282);
if(temp__4425__auto__){
var seq__8282__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__8282__$1);
var G__8291 = cljs.core.chunk_rest.call(null,seq__8282__$1);
var G__8292 = c__5804__auto__;
var G__8293 = cljs.core.count.call(null,c__5804__auto__);
var G__8294 = (0);
seq__8282 = G__8291;
chunk__8283 = G__8292;
count__8284 = G__8293;
i__8285 = G__8294;
continue;
} else {
var i = cljs.core.first.call(null,seq__8282__$1);
var e_8295 = (function (){var or__5020__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8295);

var G__8296 = cljs.core.next.call(null,seq__8282__$1);
var G__8297 = null;
var G__8298 = (0);
var G__8299 = (0);
seq__8282 = G__8296;
chunk__8283 = G__8297;
count__8284 = G__8298;
i__8285 = G__8299;
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
var e_8300 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_8300);

var G__8301 = (_ + (1));
_ = G__8301;
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
var len__6059__auto___8308 = arguments.length;
var i__6060__auto___8309 = (0);
while(true){
if((i__6060__auto___8309 < len__6059__auto___8308)){
args__6066__auto__.push((arguments[i__6060__auto___8309]));

var G__8310 = (i__6060__auto___8309 + (1));
i__6060__auto___8309 = G__8310;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8303){
var vec__8304 = p__8303;
var default$ = cljs.core.nth.call(null,vec__8304,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__8304,default$){
return (function (G__8305,G__8307,G__8306){
var or__5020__auto__ = (function (){var and__5008__auto__ = G__8305.call(null,G__8306);
if(cljs.core.truth_(and__5008__auto__)){
return G__8306;
} else {
return and__5008__auto__;
}
})();
if(cljs.core.truth_(or__5020__auto__)){
return or__5020__auto__;
} else {
return G__8307;
}
});})(c,vec__8304,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8304,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__8304,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq8302){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8302));
});

//# sourceMappingURL=core.js.map