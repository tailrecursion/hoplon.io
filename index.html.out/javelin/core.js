// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__24915 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__24913_SHARP_,p2__24914_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24913_SHARP_,p2__24914_SHARP_,p2__24914_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__24915;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e24917){if((e24917 instanceof Error)){
var _ = e24917;
return null;
} else {
throw e24917;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__24920 = c;
javelin.core.add_sync_BANG_(G__24920);

return G__24920;
} else {
var G__24921 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__24921));

return G__24921;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___24930 = arguments.length;
var i__6060__auto___24931 = (0);
while(true){
if((i__6060__auto___24931 < len__6059__auto___24930)){
args__6066__auto__.push((arguments[i__6060__auto___24931]));

var G__24932 = (i__6060__auto___24931 + (1));
i__6060__auto___24931 = G__24932;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__24924){
var vec__24925 = p__24924;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24925,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__24926 = cljs.core.seq(srcs);
var chunk__24927 = null;
var count__24928 = (0);
var i__24929 = (0);
while(true){
if((i__24929 < count__24928)){
var src = chunk__24927.cljs$core$IIndexed$_nth$arity$2(null,i__24929);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__24933 = seq__24926;
var G__24934 = chunk__24927;
var G__24935 = count__24928;
var G__24936 = (i__24929 + (1));
seq__24926 = G__24933;
chunk__24927 = G__24934;
count__24928 = G__24935;
i__24929 = G__24936;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__24926);
if(temp__4425__auto__){
var seq__24926__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24926__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__24926__$1);
var G__24937 = cljs.core.chunk_rest(seq__24926__$1);
var G__24938 = c__5804__auto__;
var G__24939 = cljs.core.count(c__5804__auto__);
var G__24940 = (0);
seq__24926 = G__24937;
chunk__24927 = G__24938;
count__24928 = G__24939;
i__24929 = G__24940;
continue;
} else {
var src = cljs.core.first(seq__24926__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__24941 = cljs.core.next(seq__24926__$1);
var G__24942 = null;
var G__24943 = (0);
var G__24944 = (0);
seq__24926 = G__24941;
chunk__24927 = G__24942;
count__24928 = G__24943;
i__24929 = G__24944;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq24922){
var G__24923 = cljs.core.first(seq24922);
var seq24922__$1 = cljs.core.next(seq24922);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24923,seq24922__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___24963 = arguments.length;
var i__6060__auto___24964 = (0);
while(true){
if((i__6060__auto___24964 < len__6059__auto___24963)){
args__6066__auto__.push((arguments[i__6060__auto___24964]));

var G__24965 = (i__6060__auto___24964 + (1));
i__6060__auto___24964 = G__24965;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__24949){
var vec__24950 = p__24949;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__24951_24966 = cljs.core.seq(this$.sources);
var chunk__24952_24967 = null;
var count__24953_24968 = (0);
var i__24954_24969 = (0);
while(true){
if((i__24954_24969 < count__24953_24968)){
var source_24970 = chunk__24952_24967.cljs$core$IIndexed$_nth$arity$2(null,i__24954_24969);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_24970) : javelin.core.cell_QMARK_.call(null,source_24970)))){
source_24970.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_24970.sinks,this$);

if((source_24970.rank > this$.rank)){
var seq__24955_24971 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__24951_24966,chunk__24952_24967,count__24953_24968,i__24954_24969,source_24970,vec__24950,f,sources){
return (function (p1__24945_SHARP_){
return p1__24945_SHARP_.sinks;
});})(seq__24951_24966,chunk__24952_24967,count__24953_24968,i__24954_24969,source_24970,vec__24950,f,sources))
,source_24970));
var chunk__24956_24972 = null;
var count__24957_24973 = (0);
var i__24958_24974 = (0);
while(true){
if((i__24958_24974 < count__24957_24973)){
var dep_24975 = chunk__24956_24972.cljs$core$IIndexed$_nth$arity$2(null,i__24958_24974);
dep_24975.rank = javelin.core.next_rank();

var G__24976 = seq__24955_24971;
var G__24977 = chunk__24956_24972;
var G__24978 = count__24957_24973;
var G__24979 = (i__24958_24974 + (1));
seq__24955_24971 = G__24976;
chunk__24956_24972 = G__24977;
count__24957_24973 = G__24978;
i__24958_24974 = G__24979;
continue;
} else {
var temp__4425__auto___24980 = cljs.core.seq(seq__24955_24971);
if(temp__4425__auto___24980){
var seq__24955_24981__$1 = temp__4425__auto___24980;
if(cljs.core.chunked_seq_QMARK_(seq__24955_24981__$1)){
var c__5804__auto___24982 = cljs.core.chunk_first(seq__24955_24981__$1);
var G__24983 = cljs.core.chunk_rest(seq__24955_24981__$1);
var G__24984 = c__5804__auto___24982;
var G__24985 = cljs.core.count(c__5804__auto___24982);
var G__24986 = (0);
seq__24955_24971 = G__24983;
chunk__24956_24972 = G__24984;
count__24957_24973 = G__24985;
i__24958_24974 = G__24986;
continue;
} else {
var dep_24987 = cljs.core.first(seq__24955_24981__$1);
dep_24987.rank = javelin.core.next_rank();

var G__24988 = cljs.core.next(seq__24955_24981__$1);
var G__24989 = null;
var G__24990 = (0);
var G__24991 = (0);
seq__24955_24971 = G__24988;
chunk__24956_24972 = G__24989;
count__24957_24973 = G__24990;
i__24958_24974 = G__24991;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__24992 = seq__24951_24966;
var G__24993 = chunk__24952_24967;
var G__24994 = count__24953_24968;
var G__24995 = (i__24954_24969 + (1));
seq__24951_24966 = G__24992;
chunk__24952_24967 = G__24993;
count__24953_24968 = G__24994;
i__24954_24969 = G__24995;
continue;
} else {
var temp__4425__auto___24996 = cljs.core.seq(seq__24951_24966);
if(temp__4425__auto___24996){
var seq__24951_24997__$1 = temp__4425__auto___24996;
if(cljs.core.chunked_seq_QMARK_(seq__24951_24997__$1)){
var c__5804__auto___24998 = cljs.core.chunk_first(seq__24951_24997__$1);
var G__24999 = cljs.core.chunk_rest(seq__24951_24997__$1);
var G__25000 = c__5804__auto___24998;
var G__25001 = cljs.core.count(c__5804__auto___24998);
var G__25002 = (0);
seq__24951_24966 = G__24999;
chunk__24952_24967 = G__25000;
count__24953_24968 = G__25001;
i__24954_24969 = G__25002;
continue;
} else {
var source_25003 = cljs.core.first(seq__24951_24997__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_25003) : javelin.core.cell_QMARK_.call(null,source_25003)))){
source_25003.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_25003.sinks,this$);

if((source_25003.rank > this$.rank)){
var seq__24959_25004 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__24951_24966,chunk__24952_24967,count__24953_24968,i__24954_24969,source_25003,seq__24951_24997__$1,temp__4425__auto___24996,vec__24950,f,sources){
return (function (p1__24945_SHARP_){
return p1__24945_SHARP_.sinks;
});})(seq__24951_24966,chunk__24952_24967,count__24953_24968,i__24954_24969,source_25003,seq__24951_24997__$1,temp__4425__auto___24996,vec__24950,f,sources))
,source_25003));
var chunk__24960_25005 = null;
var count__24961_25006 = (0);
var i__24962_25007 = (0);
while(true){
if((i__24962_25007 < count__24961_25006)){
var dep_25008 = chunk__24960_25005.cljs$core$IIndexed$_nth$arity$2(null,i__24962_25007);
dep_25008.rank = javelin.core.next_rank();

var G__25009 = seq__24959_25004;
var G__25010 = chunk__24960_25005;
var G__25011 = count__24961_25006;
var G__25012 = (i__24962_25007 + (1));
seq__24959_25004 = G__25009;
chunk__24960_25005 = G__25010;
count__24961_25006 = G__25011;
i__24962_25007 = G__25012;
continue;
} else {
var temp__4425__auto___25013__$1 = cljs.core.seq(seq__24959_25004);
if(temp__4425__auto___25013__$1){
var seq__24959_25014__$1 = temp__4425__auto___25013__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24959_25014__$1)){
var c__5804__auto___25015 = cljs.core.chunk_first(seq__24959_25014__$1);
var G__25016 = cljs.core.chunk_rest(seq__24959_25014__$1);
var G__25017 = c__5804__auto___25015;
var G__25018 = cljs.core.count(c__5804__auto___25015);
var G__25019 = (0);
seq__24959_25004 = G__25016;
chunk__24960_25005 = G__25017;
count__24961_25006 = G__25018;
i__24962_25007 = G__25019;
continue;
} else {
var dep_25020 = cljs.core.first(seq__24959_25014__$1);
dep_25020.rank = javelin.core.next_rank();

var G__25021 = cljs.core.next(seq__24959_25014__$1);
var G__25022 = null;
var G__25023 = (0);
var G__25024 = (0);
seq__24959_25004 = G__25021;
chunk__24960_25005 = G__25022;
count__24961_25006 = G__25023;
i__24962_25007 = G__25024;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__25025 = cljs.core.next(seq__24951_24997__$1);
var G__25026 = null;
var G__25027 = (0);
var G__25028 = (0);
seq__24951_24966 = G__25025;
chunk__24952_24967 = G__25026;
count__24953_24968 = G__25027;
i__24954_24969 = G__25028;
continue;
}
} else {
}
}
break;
}

var compute_25029 = ((function (vec__24950,f,sources){
return (function (p1__24946_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__24946_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__24946_SHARP_)));
});})(vec__24950,f,sources))
;
this$.thunk = ((function (compute_25029,vec__24950,f,sources){
return (function (){
return this$.state = compute_25029(this$.sources);
});})(compute_25029,vec__24950,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq24947){
var G__24948 = cljs.core.first(seq24947);
var seq24947__$1 = cljs.core.next(seq24947);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24948,seq24947__$1);
});

/**
* @constructor
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__25031 = this$__$1;
var G__25032 = (function (){var G__25033 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25033) : f.call(null,G__25033));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25031,G__25032) : cljs.core.reset_BANG_.call(null,G__25031,G__25032));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__25036 = this$__$1;
var G__25037 = (function (){var G__25038 = this$__$1.state;
var G__25039 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25038,G__25039) : f.call(null,G__25038,G__25039));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25036,G__25037) : cljs.core.reset_BANG_.call(null,G__25036,G__25037));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__25043 = this$__$1;
var G__25044 = (function (){var G__25045 = this$__$1.state;
var G__25046 = a;
var G__25047 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25045,G__25046,G__25047) : f.call(null,G__25045,G__25046,G__25047));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25043,G__25044) : cljs.core.reset_BANG_.call(null,G__25043,G__25044));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__25048 = this$__$1;
var G__25049 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25048,G__25049) : cljs.core.reset_BANG_.call(null,G__25048,G__25049));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__25050 = cljs.core.seq(self__.watches);
var chunk__25051 = null;
var count__25052 = (0);
var i__25053 = (0);
while(true){
if((i__25053 < count__25052)){
var vec__25054 = chunk__25051.cljs$core$IIndexed$_nth$arity$2(null,i__25053);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25054,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25054,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__25056 = seq__25050;
var G__25057 = chunk__25051;
var G__25058 = count__25052;
var G__25059 = (i__25053 + (1));
seq__25050 = G__25056;
chunk__25051 = G__25057;
count__25052 = G__25058;
i__25053 = G__25059;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__25050);
if(temp__4425__auto__){
var seq__25050__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25050__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__25050__$1);
var G__25060 = cljs.core.chunk_rest(seq__25050__$1);
var G__25061 = c__5804__auto__;
var G__25062 = cljs.core.count(c__5804__auto__);
var G__25063 = (0);
seq__25050 = G__25060;
chunk__25051 = G__25061;
count__25052 = G__25062;
i__25053 = G__25063;
continue;
} else {
var vec__25055 = cljs.core.first(seq__25050__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25055,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25055,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__25064 = cljs.core.next(seq__25050__$1);
var G__25065 = null;
var G__25066 = (0);
var G__25067 = (0);
seq__25050 = G__25064;
chunk__25051 = G__25065;
count__25052 = G__25066;
i__25053 = G__25067;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5599__auto__,writer__5600__auto__,opt__5601__auto__){
return cljs.core._write(writer__5600__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5008__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5008__auto__)){
return c.thunk;
} else {
return and__5008__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__5008__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5008__auto__)){
return c.update;
} else {
return and__5008__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__5008__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__5008__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__25068__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__25068 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__25069__i = 0, G__25069__a = new Array(arguments.length -  0);
while (G__25069__i < G__25069__a.length) {G__25069__a[G__25069__i] = arguments[G__25069__i + 0]; ++G__25069__i;}
  sources = new cljs.core.IndexedSeq(G__25069__a,0);
} 
return G__25068__delegate.call(this,sources);};
G__25068.cljs$lang$maxFixedArity = 0;
G__25068.cljs$lang$applyTo = (function (arglist__25070){
var sources = cljs.core.seq(arglist__25070);
return G__25068__delegate(sources);
});
G__25068.cljs$core$IFn$_invoke$arity$variadic = G__25068__delegate;
return G__25068;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args25071 = [];
var len__6059__auto___25079 = arguments.length;
var i__6060__auto___25080 = (0);
while(true){
if((i__6060__auto___25080 < len__6059__auto___25079)){
args25071.push((arguments[i__6060__auto___25080]));

var G__25081 = (i__6060__auto___25080 + (1));
i__6060__auto___25080 = G__25081;
continue;
} else {
}
break;
}

var G__25075 = args25071.length;
switch (G__25075) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6078__auto__ = (new cljs.core.IndexedSeq(args25071.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6078__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__25076){
var map__25077 = p__25076;
var map__25077__$1 = ((((!((map__25077 == null)))?((((map__25077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25077):map__25077);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25077__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq25072){
var G__25073 = cljs.core.first(seq25072);
var seq25072__$1 = cljs.core.next(seq25072);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__25073,seq25072__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__25083_SHARP_){
var _STAR_tx_STAR_25087 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__25088 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25088) : cljs.core.atom.call(null,G__25088));
})();

try{return (p1__25083_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__25083_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__25083_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_25087;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_25089 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_25089;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___25097 = arguments.length;
var i__6060__auto___25098 = (0);
while(true){
if((i__6060__auto___25098 < len__6059__auto___25097)){
args__6066__auto__.push((arguments[i__6060__auto___25098]));

var G__25099 = (i__6060__auto___25098 + (1));
i__6060__auto___25098 = G__25099;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__25096 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25096) : cljs.core.atom.call(null,G__25096));
})();
var tag_neq = ((function (olds){
return (function (p1__25090_SHARP_,p2__25091_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__25090_SHARP_,p2__25091_SHARP_),p2__25091_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__25093_SHARP_,p2__25092_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__25093_SHARP_,p2__25092_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__25100__delegate = function (rest__25094_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__25094_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__25094_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__25094_SHARP_));

return news;
};
var G__25100 = function (var_args){
var rest__25094_SHARP_ = null;
if (arguments.length > 0) {
var G__25101__i = 0, G__25101__a = new Array(arguments.length -  0);
while (G__25101__i < G__25101__a.length) {G__25101__a[G__25101__i] = arguments[G__25101__i + 0]; ++G__25101__i;}
  rest__25094_SHARP_ = new cljs.core.IndexedSeq(G__25101__a,0);
} 
return G__25100__delegate.call(this,rest__25094_SHARP_);};
G__25100.cljs$lang$maxFixedArity = 0;
G__25100.cljs$lang$applyTo = (function (arglist__25102){
var rest__25094_SHARP_ = cljs.core.seq(arglist__25102);
return G__25100__delegate(rest__25094_SHARP_);
});
G__25100.cljs$core$IFn$_invoke$arity$variadic = G__25100__delegate;
return G__25100;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq25095){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25095));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__25103_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__25103_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__25104_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__25104_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__25111_25117 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__25112_25118 = null;
var count__25113_25119 = (0);
var i__25114_25120 = (0);
while(true){
if((i__25114_25120 < count__25113_25119)){
var i_25121 = chunk__25112_25118.cljs$core$IIndexed$_nth$arity$2(null,i__25114_25120);
var G__25115_25122 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_25121) : ith_item__$1.call(null,i_25121));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__25115_25122) : f__$1.call(null,G__25115_25122));

var G__25123 = seq__25111_25117;
var G__25124 = chunk__25112_25118;
var G__25125 = count__25113_25119;
var G__25126 = (i__25114_25120 + (1));
seq__25111_25117 = G__25123;
chunk__25112_25118 = G__25124;
count__25113_25119 = G__25125;
i__25114_25120 = G__25126;
continue;
} else {
var temp__4425__auto___25127 = cljs.core.seq(seq__25111_25117);
if(temp__4425__auto___25127){
var seq__25111_25128__$1 = temp__4425__auto___25127;
if(cljs.core.chunked_seq_QMARK_(seq__25111_25128__$1)){
var c__5804__auto___25129 = cljs.core.chunk_first(seq__25111_25128__$1);
var G__25130 = cljs.core.chunk_rest(seq__25111_25128__$1);
var G__25131 = c__5804__auto___25129;
var G__25132 = cljs.core.count(c__5804__auto___25129);
var G__25133 = (0);
seq__25111_25117 = G__25130;
chunk__25112_25118 = G__25131;
count__25113_25119 = G__25132;
i__25114_25120 = G__25133;
continue;
} else {
var i_25134 = cljs.core.first(seq__25111_25128__$1);
var G__25116_25135 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_25134) : ith_item__$1.call(null,i_25134));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__25116_25135) : f__$1.call(null,G__25116_25135));

var G__25136 = cljs.core.next(seq__25111_25128__$1);
var G__25137 = null;
var G__25138 = (0);
var G__25139 = (0);
seq__25111_25117 = G__25136;
chunk__25112_25118 = G__25137;
count__25113_25119 = G__25138;
i__25114_25120 = G__25139;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
