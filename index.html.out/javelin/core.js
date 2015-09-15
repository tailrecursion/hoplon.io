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

var G__13536 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__13534_SHARP_,p2__13535_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13534_SHARP_,p2__13535_SHARP_,p2__13535_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__13536;
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
}catch (e13538){if((e13538 instanceof Error)){
var _ = e13538;
return null;
} else {
throw e13538;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13541 = c;
javelin.core.add_sync_BANG_(G__13541);

return G__13541;
} else {
var G__13542 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13542));

return G__13542;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___13551 = arguments.length;
var i__6060__auto___13552 = (0);
while(true){
if((i__6060__auto___13552 < len__6059__auto___13551)){
args__6066__auto__.push((arguments[i__6060__auto___13552]));

var G__13553 = (i__6060__auto___13552 + (1));
i__6060__auto___13552 = G__13553;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13545){
var vec__13546 = p__13545;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13546,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13547 = cljs.core.seq(srcs);
var chunk__13548 = null;
var count__13549 = (0);
var i__13550 = (0);
while(true){
if((i__13550 < count__13549)){
var src = chunk__13548.cljs$core$IIndexed$_nth$arity$2(null,i__13550);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13554 = seq__13547;
var G__13555 = chunk__13548;
var G__13556 = count__13549;
var G__13557 = (i__13550 + (1));
seq__13547 = G__13554;
chunk__13548 = G__13555;
count__13549 = G__13556;
i__13550 = G__13557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13547);
if(temp__4425__auto__){
var seq__13547__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13547__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13547__$1);
var G__13558 = cljs.core.chunk_rest(seq__13547__$1);
var G__13559 = c__5804__auto__;
var G__13560 = cljs.core.count(c__5804__auto__);
var G__13561 = (0);
seq__13547 = G__13558;
chunk__13548 = G__13559;
count__13549 = G__13560;
i__13550 = G__13561;
continue;
} else {
var src = cljs.core.first(seq__13547__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13562 = cljs.core.next(seq__13547__$1);
var G__13563 = null;
var G__13564 = (0);
var G__13565 = (0);
seq__13547 = G__13562;
chunk__13548 = G__13563;
count__13549 = G__13564;
i__13550 = G__13565;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13543){
var G__13544 = cljs.core.first(seq13543);
var seq13543__$1 = cljs.core.next(seq13543);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13544,seq13543__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___13584 = arguments.length;
var i__6060__auto___13585 = (0);
while(true){
if((i__6060__auto___13585 < len__6059__auto___13584)){
args__6066__auto__.push((arguments[i__6060__auto___13585]));

var G__13586 = (i__6060__auto___13585 + (1));
i__6060__auto___13585 = G__13586;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13570){
var vec__13571 = p__13570;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13571,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13571,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13572_13587 = cljs.core.seq(this$.sources);
var chunk__13573_13588 = null;
var count__13574_13589 = (0);
var i__13575_13590 = (0);
while(true){
if((i__13575_13590 < count__13574_13589)){
var source_13591 = chunk__13573_13588.cljs$core$IIndexed$_nth$arity$2(null,i__13575_13590);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13591) : javelin.core.cell_QMARK_.call(null,source_13591)))){
source_13591.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13591.sinks,this$);

if((source_13591.rank > this$.rank)){
var seq__13576_13592 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13572_13587,chunk__13573_13588,count__13574_13589,i__13575_13590,source_13591,vec__13571,f,sources){
return (function (p1__13566_SHARP_){
return p1__13566_SHARP_.sinks;
});})(seq__13572_13587,chunk__13573_13588,count__13574_13589,i__13575_13590,source_13591,vec__13571,f,sources))
,source_13591));
var chunk__13577_13593 = null;
var count__13578_13594 = (0);
var i__13579_13595 = (0);
while(true){
if((i__13579_13595 < count__13578_13594)){
var dep_13596 = chunk__13577_13593.cljs$core$IIndexed$_nth$arity$2(null,i__13579_13595);
dep_13596.rank = javelin.core.next_rank();

var G__13597 = seq__13576_13592;
var G__13598 = chunk__13577_13593;
var G__13599 = count__13578_13594;
var G__13600 = (i__13579_13595 + (1));
seq__13576_13592 = G__13597;
chunk__13577_13593 = G__13598;
count__13578_13594 = G__13599;
i__13579_13595 = G__13600;
continue;
} else {
var temp__4425__auto___13601 = cljs.core.seq(seq__13576_13592);
if(temp__4425__auto___13601){
var seq__13576_13602__$1 = temp__4425__auto___13601;
if(cljs.core.chunked_seq_QMARK_(seq__13576_13602__$1)){
var c__5804__auto___13603 = cljs.core.chunk_first(seq__13576_13602__$1);
var G__13604 = cljs.core.chunk_rest(seq__13576_13602__$1);
var G__13605 = c__5804__auto___13603;
var G__13606 = cljs.core.count(c__5804__auto___13603);
var G__13607 = (0);
seq__13576_13592 = G__13604;
chunk__13577_13593 = G__13605;
count__13578_13594 = G__13606;
i__13579_13595 = G__13607;
continue;
} else {
var dep_13608 = cljs.core.first(seq__13576_13602__$1);
dep_13608.rank = javelin.core.next_rank();

var G__13609 = cljs.core.next(seq__13576_13602__$1);
var G__13610 = null;
var G__13611 = (0);
var G__13612 = (0);
seq__13576_13592 = G__13609;
chunk__13577_13593 = G__13610;
count__13578_13594 = G__13611;
i__13579_13595 = G__13612;
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

var G__13613 = seq__13572_13587;
var G__13614 = chunk__13573_13588;
var G__13615 = count__13574_13589;
var G__13616 = (i__13575_13590 + (1));
seq__13572_13587 = G__13613;
chunk__13573_13588 = G__13614;
count__13574_13589 = G__13615;
i__13575_13590 = G__13616;
continue;
} else {
var temp__4425__auto___13617 = cljs.core.seq(seq__13572_13587);
if(temp__4425__auto___13617){
var seq__13572_13618__$1 = temp__4425__auto___13617;
if(cljs.core.chunked_seq_QMARK_(seq__13572_13618__$1)){
var c__5804__auto___13619 = cljs.core.chunk_first(seq__13572_13618__$1);
var G__13620 = cljs.core.chunk_rest(seq__13572_13618__$1);
var G__13621 = c__5804__auto___13619;
var G__13622 = cljs.core.count(c__5804__auto___13619);
var G__13623 = (0);
seq__13572_13587 = G__13620;
chunk__13573_13588 = G__13621;
count__13574_13589 = G__13622;
i__13575_13590 = G__13623;
continue;
} else {
var source_13624 = cljs.core.first(seq__13572_13618__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13624) : javelin.core.cell_QMARK_.call(null,source_13624)))){
source_13624.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13624.sinks,this$);

if((source_13624.rank > this$.rank)){
var seq__13580_13625 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13572_13587,chunk__13573_13588,count__13574_13589,i__13575_13590,source_13624,seq__13572_13618__$1,temp__4425__auto___13617,vec__13571,f,sources){
return (function (p1__13566_SHARP_){
return p1__13566_SHARP_.sinks;
});})(seq__13572_13587,chunk__13573_13588,count__13574_13589,i__13575_13590,source_13624,seq__13572_13618__$1,temp__4425__auto___13617,vec__13571,f,sources))
,source_13624));
var chunk__13581_13626 = null;
var count__13582_13627 = (0);
var i__13583_13628 = (0);
while(true){
if((i__13583_13628 < count__13582_13627)){
var dep_13629 = chunk__13581_13626.cljs$core$IIndexed$_nth$arity$2(null,i__13583_13628);
dep_13629.rank = javelin.core.next_rank();

var G__13630 = seq__13580_13625;
var G__13631 = chunk__13581_13626;
var G__13632 = count__13582_13627;
var G__13633 = (i__13583_13628 + (1));
seq__13580_13625 = G__13630;
chunk__13581_13626 = G__13631;
count__13582_13627 = G__13632;
i__13583_13628 = G__13633;
continue;
} else {
var temp__4425__auto___13634__$1 = cljs.core.seq(seq__13580_13625);
if(temp__4425__auto___13634__$1){
var seq__13580_13635__$1 = temp__4425__auto___13634__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13580_13635__$1)){
var c__5804__auto___13636 = cljs.core.chunk_first(seq__13580_13635__$1);
var G__13637 = cljs.core.chunk_rest(seq__13580_13635__$1);
var G__13638 = c__5804__auto___13636;
var G__13639 = cljs.core.count(c__5804__auto___13636);
var G__13640 = (0);
seq__13580_13625 = G__13637;
chunk__13581_13626 = G__13638;
count__13582_13627 = G__13639;
i__13583_13628 = G__13640;
continue;
} else {
var dep_13641 = cljs.core.first(seq__13580_13635__$1);
dep_13641.rank = javelin.core.next_rank();

var G__13642 = cljs.core.next(seq__13580_13635__$1);
var G__13643 = null;
var G__13644 = (0);
var G__13645 = (0);
seq__13580_13625 = G__13642;
chunk__13581_13626 = G__13643;
count__13582_13627 = G__13644;
i__13583_13628 = G__13645;
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

var G__13646 = cljs.core.next(seq__13572_13618__$1);
var G__13647 = null;
var G__13648 = (0);
var G__13649 = (0);
seq__13572_13587 = G__13646;
chunk__13573_13588 = G__13647;
count__13574_13589 = G__13648;
i__13575_13590 = G__13649;
continue;
}
} else {
}
}
break;
}

var compute_13650 = ((function (vec__13571,f,sources){
return (function (p1__13567_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13567_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13567_SHARP_)));
});})(vec__13571,f,sources))
;
this$.thunk = ((function (compute_13650,vec__13571,f,sources){
return (function (){
return this$.state = compute_13650(this$.sources);
});})(compute_13650,vec__13571,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13568){
var G__13569 = cljs.core.first(seq13568);
var seq13568__$1 = cljs.core.next(seq13568);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13569,seq13568__$1);
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
var G__13652 = this$__$1;
var G__13653 = (function (){var G__13654 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13654) : f.call(null,G__13654));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13652,G__13653) : cljs.core.reset_BANG_.call(null,G__13652,G__13653));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13657 = this$__$1;
var G__13658 = (function (){var G__13659 = this$__$1.state;
var G__13660 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13659,G__13660) : f.call(null,G__13659,G__13660));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13657,G__13658) : cljs.core.reset_BANG_.call(null,G__13657,G__13658));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13664 = this$__$1;
var G__13665 = (function (){var G__13666 = this$__$1.state;
var G__13667 = a;
var G__13668 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13666,G__13667,G__13668) : f.call(null,G__13666,G__13667,G__13668));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13664,G__13665) : cljs.core.reset_BANG_.call(null,G__13664,G__13665));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13669 = this$__$1;
var G__13670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13669,G__13670) : cljs.core.reset_BANG_.call(null,G__13669,G__13670));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13671 = cljs.core.seq(self__.watches);
var chunk__13672 = null;
var count__13673 = (0);
var i__13674 = (0);
while(true){
if((i__13674 < count__13673)){
var vec__13675 = chunk__13672.cljs$core$IIndexed$_nth$arity$2(null,i__13674);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13675,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13675,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13677 = seq__13671;
var G__13678 = chunk__13672;
var G__13679 = count__13673;
var G__13680 = (i__13674 + (1));
seq__13671 = G__13677;
chunk__13672 = G__13678;
count__13673 = G__13679;
i__13674 = G__13680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13671);
if(temp__4425__auto__){
var seq__13671__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13671__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13671__$1);
var G__13681 = cljs.core.chunk_rest(seq__13671__$1);
var G__13682 = c__5804__auto__;
var G__13683 = cljs.core.count(c__5804__auto__);
var G__13684 = (0);
seq__13671 = G__13681;
chunk__13672 = G__13682;
count__13673 = G__13683;
i__13674 = G__13684;
continue;
} else {
var vec__13676 = cljs.core.first(seq__13671__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13685 = cljs.core.next(seq__13671__$1);
var G__13686 = null;
var G__13687 = (0);
var G__13688 = (0);
seq__13671 = G__13685;
chunk__13672 = G__13686;
count__13673 = G__13687;
i__13674 = G__13688;
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
var G__13689__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__13689 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13690__i = 0, G__13690__a = new Array(arguments.length -  0);
while (G__13690__i < G__13690__a.length) {G__13690__a[G__13690__i] = arguments[G__13690__i + 0]; ++G__13690__i;}
  sources = new cljs.core.IndexedSeq(G__13690__a,0);
} 
return G__13689__delegate.call(this,sources);};
G__13689.cljs$lang$maxFixedArity = 0;
G__13689.cljs$lang$applyTo = (function (arglist__13691){
var sources = cljs.core.seq(arglist__13691);
return G__13689__delegate(sources);
});
G__13689.cljs$core$IFn$_invoke$arity$variadic = G__13689__delegate;
return G__13689;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args13692 = [];
var len__6059__auto___13700 = arguments.length;
var i__6060__auto___13701 = (0);
while(true){
if((i__6060__auto___13701 < len__6059__auto___13700)){
args13692.push((arguments[i__6060__auto___13701]));

var G__13702 = (i__6060__auto___13701 + (1));
i__6060__auto___13701 = G__13702;
continue;
} else {
}
break;
}

var G__13696 = args13692.length;
switch (G__13696) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6078__auto__ = (new cljs.core.IndexedSeq(args13692.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6078__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13697){
var map__13698 = p__13697;
var map__13698__$1 = ((((!((map__13698 == null)))?((((map__13698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13698):map__13698);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13698__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13693){
var G__13694 = cljs.core.first(seq13693);
var seq13693__$1 = cljs.core.next(seq13693);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13694,seq13693__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13704_SHARP_){
var _STAR_tx_STAR_13708 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13709 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13709) : cljs.core.atom.call(null,G__13709));
})();

try{return (p1__13704_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13704_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13704_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13708;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13710 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13710;
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
var len__6059__auto___13718 = arguments.length;
var i__6060__auto___13719 = (0);
while(true){
if((i__6060__auto___13719 < len__6059__auto___13718)){
args__6066__auto__.push((arguments[i__6060__auto___13719]));

var G__13720 = (i__6060__auto___13719 + (1));
i__6060__auto___13719 = G__13720;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13717 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13717) : cljs.core.atom.call(null,G__13717));
})();
var tag_neq = ((function (olds){
return (function (p1__13711_SHARP_,p2__13712_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13711_SHARP_,p2__13712_SHARP_),p2__13712_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13714_SHARP_,p2__13713_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13714_SHARP_,p2__13713_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13721__delegate = function (rest__13715_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13715_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13715_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13715_SHARP_));

return news;
};
var G__13721 = function (var_args){
var rest__13715_SHARP_ = null;
if (arguments.length > 0) {
var G__13722__i = 0, G__13722__a = new Array(arguments.length -  0);
while (G__13722__i < G__13722__a.length) {G__13722__a[G__13722__i] = arguments[G__13722__i + 0]; ++G__13722__i;}
  rest__13715_SHARP_ = new cljs.core.IndexedSeq(G__13722__a,0);
} 
return G__13721__delegate.call(this,rest__13715_SHARP_);};
G__13721.cljs$lang$maxFixedArity = 0;
G__13721.cljs$lang$applyTo = (function (arglist__13723){
var rest__13715_SHARP_ = cljs.core.seq(arglist__13723);
return G__13721__delegate(rest__13715_SHARP_);
});
G__13721.cljs$core$IFn$_invoke$arity$variadic = G__13721__delegate;
return G__13721;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13716){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13716));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13724_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13724_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13725_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13725_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13732_13738 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13733_13739 = null;
var count__13734_13740 = (0);
var i__13735_13741 = (0);
while(true){
if((i__13735_13741 < count__13734_13740)){
var i_13742 = chunk__13733_13739.cljs$core$IIndexed$_nth$arity$2(null,i__13735_13741);
var G__13736_13743 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13742) : ith_item__$1.call(null,i_13742));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13736_13743) : f__$1.call(null,G__13736_13743));

var G__13744 = seq__13732_13738;
var G__13745 = chunk__13733_13739;
var G__13746 = count__13734_13740;
var G__13747 = (i__13735_13741 + (1));
seq__13732_13738 = G__13744;
chunk__13733_13739 = G__13745;
count__13734_13740 = G__13746;
i__13735_13741 = G__13747;
continue;
} else {
var temp__4425__auto___13748 = cljs.core.seq(seq__13732_13738);
if(temp__4425__auto___13748){
var seq__13732_13749__$1 = temp__4425__auto___13748;
if(cljs.core.chunked_seq_QMARK_(seq__13732_13749__$1)){
var c__5804__auto___13750 = cljs.core.chunk_first(seq__13732_13749__$1);
var G__13751 = cljs.core.chunk_rest(seq__13732_13749__$1);
var G__13752 = c__5804__auto___13750;
var G__13753 = cljs.core.count(c__5804__auto___13750);
var G__13754 = (0);
seq__13732_13738 = G__13751;
chunk__13733_13739 = G__13752;
count__13734_13740 = G__13753;
i__13735_13741 = G__13754;
continue;
} else {
var i_13755 = cljs.core.first(seq__13732_13749__$1);
var G__13737_13756 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13755) : ith_item__$1.call(null,i_13755));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13737_13756) : f__$1.call(null,G__13737_13756));

var G__13757 = cljs.core.next(seq__13732_13749__$1);
var G__13758 = null;
var G__13759 = (0);
var G__13760 = (0);
seq__13732_13738 = G__13757;
chunk__13733_13739 = G__13758;
count__13734_13740 = G__13759;
i__13735_13741 = G__13760;
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
