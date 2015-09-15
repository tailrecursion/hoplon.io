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

var G__13390 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__13388_SHARP_,p2__13389_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13388_SHARP_,p2__13389_SHARP_,p2__13389_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__13390;
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
}catch (e13392){if((e13392 instanceof Error)){
var _ = e13392;
return null;
} else {
throw e13392;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13395 = c;
javelin.core.add_sync_BANG_(G__13395);

return G__13395;
} else {
var G__13396 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13396));

return G__13396;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___13405 = arguments.length;
var i__6060__auto___13406 = (0);
while(true){
if((i__6060__auto___13406 < len__6059__auto___13405)){
args__6066__auto__.push((arguments[i__6060__auto___13406]));

var G__13407 = (i__6060__auto___13406 + (1));
i__6060__auto___13406 = G__13407;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13399){
var vec__13400 = p__13399;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13400,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13401 = cljs.core.seq(srcs);
var chunk__13402 = null;
var count__13403 = (0);
var i__13404 = (0);
while(true){
if((i__13404 < count__13403)){
var src = chunk__13402.cljs$core$IIndexed$_nth$arity$2(null,i__13404);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13408 = seq__13401;
var G__13409 = chunk__13402;
var G__13410 = count__13403;
var G__13411 = (i__13404 + (1));
seq__13401 = G__13408;
chunk__13402 = G__13409;
count__13403 = G__13410;
i__13404 = G__13411;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13401);
if(temp__4425__auto__){
var seq__13401__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13401__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13401__$1);
var G__13412 = cljs.core.chunk_rest(seq__13401__$1);
var G__13413 = c__5804__auto__;
var G__13414 = cljs.core.count(c__5804__auto__);
var G__13415 = (0);
seq__13401 = G__13412;
chunk__13402 = G__13413;
count__13403 = G__13414;
i__13404 = G__13415;
continue;
} else {
var src = cljs.core.first(seq__13401__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13416 = cljs.core.next(seq__13401__$1);
var G__13417 = null;
var G__13418 = (0);
var G__13419 = (0);
seq__13401 = G__13416;
chunk__13402 = G__13417;
count__13403 = G__13418;
i__13404 = G__13419;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13397){
var G__13398 = cljs.core.first(seq13397);
var seq13397__$1 = cljs.core.next(seq13397);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13398,seq13397__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___13438 = arguments.length;
var i__6060__auto___13439 = (0);
while(true){
if((i__6060__auto___13439 < len__6059__auto___13438)){
args__6066__auto__.push((arguments[i__6060__auto___13439]));

var G__13440 = (i__6060__auto___13439 + (1));
i__6060__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13424){
var vec__13425 = p__13424;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13425,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13425,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13426_13441 = cljs.core.seq(this$.sources);
var chunk__13427_13442 = null;
var count__13428_13443 = (0);
var i__13429_13444 = (0);
while(true){
if((i__13429_13444 < count__13428_13443)){
var source_13445 = chunk__13427_13442.cljs$core$IIndexed$_nth$arity$2(null,i__13429_13444);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13445) : javelin.core.cell_QMARK_.call(null,source_13445)))){
source_13445.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13445.sinks,this$);

if((source_13445.rank > this$.rank)){
var seq__13430_13446 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13426_13441,chunk__13427_13442,count__13428_13443,i__13429_13444,source_13445,vec__13425,f,sources){
return (function (p1__13420_SHARP_){
return p1__13420_SHARP_.sinks;
});})(seq__13426_13441,chunk__13427_13442,count__13428_13443,i__13429_13444,source_13445,vec__13425,f,sources))
,source_13445));
var chunk__13431_13447 = null;
var count__13432_13448 = (0);
var i__13433_13449 = (0);
while(true){
if((i__13433_13449 < count__13432_13448)){
var dep_13450 = chunk__13431_13447.cljs$core$IIndexed$_nth$arity$2(null,i__13433_13449);
dep_13450.rank = javelin.core.next_rank();

var G__13451 = seq__13430_13446;
var G__13452 = chunk__13431_13447;
var G__13453 = count__13432_13448;
var G__13454 = (i__13433_13449 + (1));
seq__13430_13446 = G__13451;
chunk__13431_13447 = G__13452;
count__13432_13448 = G__13453;
i__13433_13449 = G__13454;
continue;
} else {
var temp__4425__auto___13455 = cljs.core.seq(seq__13430_13446);
if(temp__4425__auto___13455){
var seq__13430_13456__$1 = temp__4425__auto___13455;
if(cljs.core.chunked_seq_QMARK_(seq__13430_13456__$1)){
var c__5804__auto___13457 = cljs.core.chunk_first(seq__13430_13456__$1);
var G__13458 = cljs.core.chunk_rest(seq__13430_13456__$1);
var G__13459 = c__5804__auto___13457;
var G__13460 = cljs.core.count(c__5804__auto___13457);
var G__13461 = (0);
seq__13430_13446 = G__13458;
chunk__13431_13447 = G__13459;
count__13432_13448 = G__13460;
i__13433_13449 = G__13461;
continue;
} else {
var dep_13462 = cljs.core.first(seq__13430_13456__$1);
dep_13462.rank = javelin.core.next_rank();

var G__13463 = cljs.core.next(seq__13430_13456__$1);
var G__13464 = null;
var G__13465 = (0);
var G__13466 = (0);
seq__13430_13446 = G__13463;
chunk__13431_13447 = G__13464;
count__13432_13448 = G__13465;
i__13433_13449 = G__13466;
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

var G__13467 = seq__13426_13441;
var G__13468 = chunk__13427_13442;
var G__13469 = count__13428_13443;
var G__13470 = (i__13429_13444 + (1));
seq__13426_13441 = G__13467;
chunk__13427_13442 = G__13468;
count__13428_13443 = G__13469;
i__13429_13444 = G__13470;
continue;
} else {
var temp__4425__auto___13471 = cljs.core.seq(seq__13426_13441);
if(temp__4425__auto___13471){
var seq__13426_13472__$1 = temp__4425__auto___13471;
if(cljs.core.chunked_seq_QMARK_(seq__13426_13472__$1)){
var c__5804__auto___13473 = cljs.core.chunk_first(seq__13426_13472__$1);
var G__13474 = cljs.core.chunk_rest(seq__13426_13472__$1);
var G__13475 = c__5804__auto___13473;
var G__13476 = cljs.core.count(c__5804__auto___13473);
var G__13477 = (0);
seq__13426_13441 = G__13474;
chunk__13427_13442 = G__13475;
count__13428_13443 = G__13476;
i__13429_13444 = G__13477;
continue;
} else {
var source_13478 = cljs.core.first(seq__13426_13472__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13478) : javelin.core.cell_QMARK_.call(null,source_13478)))){
source_13478.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13478.sinks,this$);

if((source_13478.rank > this$.rank)){
var seq__13434_13479 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13426_13441,chunk__13427_13442,count__13428_13443,i__13429_13444,source_13478,seq__13426_13472__$1,temp__4425__auto___13471,vec__13425,f,sources){
return (function (p1__13420_SHARP_){
return p1__13420_SHARP_.sinks;
});})(seq__13426_13441,chunk__13427_13442,count__13428_13443,i__13429_13444,source_13478,seq__13426_13472__$1,temp__4425__auto___13471,vec__13425,f,sources))
,source_13478));
var chunk__13435_13480 = null;
var count__13436_13481 = (0);
var i__13437_13482 = (0);
while(true){
if((i__13437_13482 < count__13436_13481)){
var dep_13483 = chunk__13435_13480.cljs$core$IIndexed$_nth$arity$2(null,i__13437_13482);
dep_13483.rank = javelin.core.next_rank();

var G__13484 = seq__13434_13479;
var G__13485 = chunk__13435_13480;
var G__13486 = count__13436_13481;
var G__13487 = (i__13437_13482 + (1));
seq__13434_13479 = G__13484;
chunk__13435_13480 = G__13485;
count__13436_13481 = G__13486;
i__13437_13482 = G__13487;
continue;
} else {
var temp__4425__auto___13488__$1 = cljs.core.seq(seq__13434_13479);
if(temp__4425__auto___13488__$1){
var seq__13434_13489__$1 = temp__4425__auto___13488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13434_13489__$1)){
var c__5804__auto___13490 = cljs.core.chunk_first(seq__13434_13489__$1);
var G__13491 = cljs.core.chunk_rest(seq__13434_13489__$1);
var G__13492 = c__5804__auto___13490;
var G__13493 = cljs.core.count(c__5804__auto___13490);
var G__13494 = (0);
seq__13434_13479 = G__13491;
chunk__13435_13480 = G__13492;
count__13436_13481 = G__13493;
i__13437_13482 = G__13494;
continue;
} else {
var dep_13495 = cljs.core.first(seq__13434_13489__$1);
dep_13495.rank = javelin.core.next_rank();

var G__13496 = cljs.core.next(seq__13434_13489__$1);
var G__13497 = null;
var G__13498 = (0);
var G__13499 = (0);
seq__13434_13479 = G__13496;
chunk__13435_13480 = G__13497;
count__13436_13481 = G__13498;
i__13437_13482 = G__13499;
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

var G__13500 = cljs.core.next(seq__13426_13472__$1);
var G__13501 = null;
var G__13502 = (0);
var G__13503 = (0);
seq__13426_13441 = G__13500;
chunk__13427_13442 = G__13501;
count__13428_13443 = G__13502;
i__13429_13444 = G__13503;
continue;
}
} else {
}
}
break;
}

var compute_13504 = ((function (vec__13425,f,sources){
return (function (p1__13421_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13421_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13421_SHARP_)));
});})(vec__13425,f,sources))
;
this$.thunk = ((function (compute_13504,vec__13425,f,sources){
return (function (){
return this$.state = compute_13504(this$.sources);
});})(compute_13504,vec__13425,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13422){
var G__13423 = cljs.core.first(seq13422);
var seq13422__$1 = cljs.core.next(seq13422);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13423,seq13422__$1);
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
var G__13506 = this$__$1;
var G__13507 = (function (){var G__13508 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13508) : f.call(null,G__13508));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13506,G__13507) : cljs.core.reset_BANG_.call(null,G__13506,G__13507));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13511 = this$__$1;
var G__13512 = (function (){var G__13513 = this$__$1.state;
var G__13514 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13513,G__13514) : f.call(null,G__13513,G__13514));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13511,G__13512) : cljs.core.reset_BANG_.call(null,G__13511,G__13512));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13518 = this$__$1;
var G__13519 = (function (){var G__13520 = this$__$1.state;
var G__13521 = a;
var G__13522 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13520,G__13521,G__13522) : f.call(null,G__13520,G__13521,G__13522));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13518,G__13519) : cljs.core.reset_BANG_.call(null,G__13518,G__13519));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13523 = this$__$1;
var G__13524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13523,G__13524) : cljs.core.reset_BANG_.call(null,G__13523,G__13524));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13525 = cljs.core.seq(self__.watches);
var chunk__13526 = null;
var count__13527 = (0);
var i__13528 = (0);
while(true){
if((i__13528 < count__13527)){
var vec__13529 = chunk__13526.cljs$core$IIndexed$_nth$arity$2(null,i__13528);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13529,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13529,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13531 = seq__13525;
var G__13532 = chunk__13526;
var G__13533 = count__13527;
var G__13534 = (i__13528 + (1));
seq__13525 = G__13531;
chunk__13526 = G__13532;
count__13527 = G__13533;
i__13528 = G__13534;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13525);
if(temp__4425__auto__){
var seq__13525__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13525__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__13525__$1);
var G__13535 = cljs.core.chunk_rest(seq__13525__$1);
var G__13536 = c__5804__auto__;
var G__13537 = cljs.core.count(c__5804__auto__);
var G__13538 = (0);
seq__13525 = G__13535;
chunk__13526 = G__13536;
count__13527 = G__13537;
i__13528 = G__13538;
continue;
} else {
var vec__13530 = cljs.core.first(seq__13525__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13539 = cljs.core.next(seq__13525__$1);
var G__13540 = null;
var G__13541 = (0);
var G__13542 = (0);
seq__13525 = G__13539;
chunk__13526 = G__13540;
count__13527 = G__13541;
i__13528 = G__13542;
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
var G__13543__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__13543 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13544__i = 0, G__13544__a = new Array(arguments.length -  0);
while (G__13544__i < G__13544__a.length) {G__13544__a[G__13544__i] = arguments[G__13544__i + 0]; ++G__13544__i;}
  sources = new cljs.core.IndexedSeq(G__13544__a,0);
} 
return G__13543__delegate.call(this,sources);};
G__13543.cljs$lang$maxFixedArity = 0;
G__13543.cljs$lang$applyTo = (function (arglist__13545){
var sources = cljs.core.seq(arglist__13545);
return G__13543__delegate(sources);
});
G__13543.cljs$core$IFn$_invoke$arity$variadic = G__13543__delegate;
return G__13543;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args13546 = [];
var len__6059__auto___13554 = arguments.length;
var i__6060__auto___13555 = (0);
while(true){
if((i__6060__auto___13555 < len__6059__auto___13554)){
args13546.push((arguments[i__6060__auto___13555]));

var G__13556 = (i__6060__auto___13555 + (1));
i__6060__auto___13555 = G__13556;
continue;
} else {
}
break;
}

var G__13550 = args13546.length;
switch (G__13550) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6078__auto__ = (new cljs.core.IndexedSeq(args13546.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6078__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13551){
var map__13552 = p__13551;
var map__13552__$1 = ((((!((map__13552 == null)))?((((map__13552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13552):map__13552);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13552__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13547){
var G__13548 = cljs.core.first(seq13547);
var seq13547__$1 = cljs.core.next(seq13547);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13548,seq13547__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13558_SHARP_){
var _STAR_tx_STAR_13562 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13563 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13563) : cljs.core.atom.call(null,G__13563));
})();

try{return (p1__13558_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13558_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13558_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13562;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13564 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13564;
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
var len__6059__auto___13572 = arguments.length;
var i__6060__auto___13573 = (0);
while(true){
if((i__6060__auto___13573 < len__6059__auto___13572)){
args__6066__auto__.push((arguments[i__6060__auto___13573]));

var G__13574 = (i__6060__auto___13573 + (1));
i__6060__auto___13573 = G__13574;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13571 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13571) : cljs.core.atom.call(null,G__13571));
})();
var tag_neq = ((function (olds){
return (function (p1__13565_SHARP_,p2__13566_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13565_SHARP_,p2__13566_SHARP_),p2__13566_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13568_SHARP_,p2__13567_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13568_SHARP_,p2__13567_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13575__delegate = function (rest__13569_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13569_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13569_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13569_SHARP_));

return news;
};
var G__13575 = function (var_args){
var rest__13569_SHARP_ = null;
if (arguments.length > 0) {
var G__13576__i = 0, G__13576__a = new Array(arguments.length -  0);
while (G__13576__i < G__13576__a.length) {G__13576__a[G__13576__i] = arguments[G__13576__i + 0]; ++G__13576__i;}
  rest__13569_SHARP_ = new cljs.core.IndexedSeq(G__13576__a,0);
} 
return G__13575__delegate.call(this,rest__13569_SHARP_);};
G__13575.cljs$lang$maxFixedArity = 0;
G__13575.cljs$lang$applyTo = (function (arglist__13577){
var rest__13569_SHARP_ = cljs.core.seq(arglist__13577);
return G__13575__delegate(rest__13569_SHARP_);
});
G__13575.cljs$core$IFn$_invoke$arity$variadic = G__13575__delegate;
return G__13575;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13570){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13570));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13578_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13578_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13579_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13579_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13586_13592 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13587_13593 = null;
var count__13588_13594 = (0);
var i__13589_13595 = (0);
while(true){
if((i__13589_13595 < count__13588_13594)){
var i_13596 = chunk__13587_13593.cljs$core$IIndexed$_nth$arity$2(null,i__13589_13595);
var G__13590_13597 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13596) : ith_item__$1.call(null,i_13596));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13590_13597) : f__$1.call(null,G__13590_13597));

var G__13598 = seq__13586_13592;
var G__13599 = chunk__13587_13593;
var G__13600 = count__13588_13594;
var G__13601 = (i__13589_13595 + (1));
seq__13586_13592 = G__13598;
chunk__13587_13593 = G__13599;
count__13588_13594 = G__13600;
i__13589_13595 = G__13601;
continue;
} else {
var temp__4425__auto___13602 = cljs.core.seq(seq__13586_13592);
if(temp__4425__auto___13602){
var seq__13586_13603__$1 = temp__4425__auto___13602;
if(cljs.core.chunked_seq_QMARK_(seq__13586_13603__$1)){
var c__5804__auto___13604 = cljs.core.chunk_first(seq__13586_13603__$1);
var G__13605 = cljs.core.chunk_rest(seq__13586_13603__$1);
var G__13606 = c__5804__auto___13604;
var G__13607 = cljs.core.count(c__5804__auto___13604);
var G__13608 = (0);
seq__13586_13592 = G__13605;
chunk__13587_13593 = G__13606;
count__13588_13594 = G__13607;
i__13589_13595 = G__13608;
continue;
} else {
var i_13609 = cljs.core.first(seq__13586_13603__$1);
var G__13591_13610 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13609) : ith_item__$1.call(null,i_13609));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13591_13610) : f__$1.call(null,G__13591_13610));

var G__13611 = cljs.core.next(seq__13586_13603__$1);
var G__13612 = null;
var G__13613 = (0);
var G__13614 = (0);
seq__13586_13592 = G__13611;
chunk__13587_13593 = G__13612;
count__13588_13594 = G__13613;
i__13589_13595 = G__13614;
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
