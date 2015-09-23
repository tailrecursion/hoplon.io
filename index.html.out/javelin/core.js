// Compiled by ClojureScript 1.7.48 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__8376 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8374_SHARP_,p2__8375_SHARP_){
return cljs.core.assoc.call(null,p1__8374_SHARP_,p2__8375_SHARP_,p2__8375_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8376;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8378){if((e8378 instanceof Error)){
var _ = e8378;
return null;
} else {
throw e8378;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8381 = c;
javelin.core.add_sync_BANG_.call(null,G__8381);

return G__8381;
} else {
var G__8382 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8382));

return G__8382;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___8391 = arguments.length;
var i__6060__auto___8392 = (0);
while(true){
if((i__6060__auto___8392 < len__6059__auto___8391)){
args__6066__auto__.push((arguments[i__6060__auto___8392]));

var G__8393 = (i__6060__auto___8392 + (1));
i__6060__auto___8392 = G__8393;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8385){
var vec__8386 = p__8385;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8386,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8387 = cljs.core.seq.call(null,srcs);
var chunk__8388 = null;
var count__8389 = (0);
var i__8390 = (0);
while(true){
if((i__8390 < count__8389)){
var src = cljs.core._nth.call(null,chunk__8388,i__8390);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8394 = seq__8387;
var G__8395 = chunk__8388;
var G__8396 = count__8389;
var G__8397 = (i__8390 + (1));
seq__8387 = G__8394;
chunk__8388 = G__8395;
count__8389 = G__8396;
i__8390 = G__8397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8387);
if(temp__4425__auto__){
var seq__8387__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8387__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__8387__$1);
var G__8398 = cljs.core.chunk_rest.call(null,seq__8387__$1);
var G__8399 = c__5804__auto__;
var G__8400 = cljs.core.count.call(null,c__5804__auto__);
var G__8401 = (0);
seq__8387 = G__8398;
chunk__8388 = G__8399;
count__8389 = G__8400;
i__8390 = G__8401;
continue;
} else {
var src = cljs.core.first.call(null,seq__8387__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8402 = cljs.core.next.call(null,seq__8387__$1);
var G__8403 = null;
var G__8404 = (0);
var G__8405 = (0);
seq__8387 = G__8402;
chunk__8388 = G__8403;
count__8389 = G__8404;
i__8390 = G__8405;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8383){
var G__8384 = cljs.core.first.call(null,seq8383);
var seq8383__$1 = cljs.core.next.call(null,seq8383);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8384,seq8383__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___8424 = arguments.length;
var i__6060__auto___8425 = (0);
while(true){
if((i__6060__auto___8425 < len__6059__auto___8424)){
args__6066__auto__.push((arguments[i__6060__auto___8425]));

var G__8426 = (i__6060__auto___8425 + (1));
i__6060__auto___8425 = G__8426;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8410){
var vec__8411 = p__8410;
var f = cljs.core.nth.call(null,vec__8411,(0),null);
var sources = cljs.core.nth.call(null,vec__8411,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8412_8427 = cljs.core.seq.call(null,this$.sources);
var chunk__8413_8428 = null;
var count__8414_8429 = (0);
var i__8415_8430 = (0);
while(true){
if((i__8415_8430 < count__8414_8429)){
var source_8431 = cljs.core._nth.call(null,chunk__8413_8428,i__8415_8430);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8431))){
source_8431.sinks = cljs.core.conj.call(null,source_8431.sinks,this$);

if((source_8431.rank > this$.rank)){
var seq__8416_8432 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8412_8427,chunk__8413_8428,count__8414_8429,i__8415_8430,source_8431,vec__8411,f,sources){
return (function (p1__8406_SHARP_){
return p1__8406_SHARP_.sinks;
});})(seq__8412_8427,chunk__8413_8428,count__8414_8429,i__8415_8430,source_8431,vec__8411,f,sources))
,source_8431));
var chunk__8417_8433 = null;
var count__8418_8434 = (0);
var i__8419_8435 = (0);
while(true){
if((i__8419_8435 < count__8418_8434)){
var dep_8436 = cljs.core._nth.call(null,chunk__8417_8433,i__8419_8435);
dep_8436.rank = javelin.core.next_rank.call(null);

var G__8437 = seq__8416_8432;
var G__8438 = chunk__8417_8433;
var G__8439 = count__8418_8434;
var G__8440 = (i__8419_8435 + (1));
seq__8416_8432 = G__8437;
chunk__8417_8433 = G__8438;
count__8418_8434 = G__8439;
i__8419_8435 = G__8440;
continue;
} else {
var temp__4425__auto___8441 = cljs.core.seq.call(null,seq__8416_8432);
if(temp__4425__auto___8441){
var seq__8416_8442__$1 = temp__4425__auto___8441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8416_8442__$1)){
var c__5804__auto___8443 = cljs.core.chunk_first.call(null,seq__8416_8442__$1);
var G__8444 = cljs.core.chunk_rest.call(null,seq__8416_8442__$1);
var G__8445 = c__5804__auto___8443;
var G__8446 = cljs.core.count.call(null,c__5804__auto___8443);
var G__8447 = (0);
seq__8416_8432 = G__8444;
chunk__8417_8433 = G__8445;
count__8418_8434 = G__8446;
i__8419_8435 = G__8447;
continue;
} else {
var dep_8448 = cljs.core.first.call(null,seq__8416_8442__$1);
dep_8448.rank = javelin.core.next_rank.call(null);

var G__8449 = cljs.core.next.call(null,seq__8416_8442__$1);
var G__8450 = null;
var G__8451 = (0);
var G__8452 = (0);
seq__8416_8432 = G__8449;
chunk__8417_8433 = G__8450;
count__8418_8434 = G__8451;
i__8419_8435 = G__8452;
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

var G__8453 = seq__8412_8427;
var G__8454 = chunk__8413_8428;
var G__8455 = count__8414_8429;
var G__8456 = (i__8415_8430 + (1));
seq__8412_8427 = G__8453;
chunk__8413_8428 = G__8454;
count__8414_8429 = G__8455;
i__8415_8430 = G__8456;
continue;
} else {
var temp__4425__auto___8457 = cljs.core.seq.call(null,seq__8412_8427);
if(temp__4425__auto___8457){
var seq__8412_8458__$1 = temp__4425__auto___8457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8412_8458__$1)){
var c__5804__auto___8459 = cljs.core.chunk_first.call(null,seq__8412_8458__$1);
var G__8460 = cljs.core.chunk_rest.call(null,seq__8412_8458__$1);
var G__8461 = c__5804__auto___8459;
var G__8462 = cljs.core.count.call(null,c__5804__auto___8459);
var G__8463 = (0);
seq__8412_8427 = G__8460;
chunk__8413_8428 = G__8461;
count__8414_8429 = G__8462;
i__8415_8430 = G__8463;
continue;
} else {
var source_8464 = cljs.core.first.call(null,seq__8412_8458__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8464))){
source_8464.sinks = cljs.core.conj.call(null,source_8464.sinks,this$);

if((source_8464.rank > this$.rank)){
var seq__8420_8465 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8412_8427,chunk__8413_8428,count__8414_8429,i__8415_8430,source_8464,seq__8412_8458__$1,temp__4425__auto___8457,vec__8411,f,sources){
return (function (p1__8406_SHARP_){
return p1__8406_SHARP_.sinks;
});})(seq__8412_8427,chunk__8413_8428,count__8414_8429,i__8415_8430,source_8464,seq__8412_8458__$1,temp__4425__auto___8457,vec__8411,f,sources))
,source_8464));
var chunk__8421_8466 = null;
var count__8422_8467 = (0);
var i__8423_8468 = (0);
while(true){
if((i__8423_8468 < count__8422_8467)){
var dep_8469 = cljs.core._nth.call(null,chunk__8421_8466,i__8423_8468);
dep_8469.rank = javelin.core.next_rank.call(null);

var G__8470 = seq__8420_8465;
var G__8471 = chunk__8421_8466;
var G__8472 = count__8422_8467;
var G__8473 = (i__8423_8468 + (1));
seq__8420_8465 = G__8470;
chunk__8421_8466 = G__8471;
count__8422_8467 = G__8472;
i__8423_8468 = G__8473;
continue;
} else {
var temp__4425__auto___8474__$1 = cljs.core.seq.call(null,seq__8420_8465);
if(temp__4425__auto___8474__$1){
var seq__8420_8475__$1 = temp__4425__auto___8474__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8420_8475__$1)){
var c__5804__auto___8476 = cljs.core.chunk_first.call(null,seq__8420_8475__$1);
var G__8477 = cljs.core.chunk_rest.call(null,seq__8420_8475__$1);
var G__8478 = c__5804__auto___8476;
var G__8479 = cljs.core.count.call(null,c__5804__auto___8476);
var G__8480 = (0);
seq__8420_8465 = G__8477;
chunk__8421_8466 = G__8478;
count__8422_8467 = G__8479;
i__8423_8468 = G__8480;
continue;
} else {
var dep_8481 = cljs.core.first.call(null,seq__8420_8475__$1);
dep_8481.rank = javelin.core.next_rank.call(null);

var G__8482 = cljs.core.next.call(null,seq__8420_8475__$1);
var G__8483 = null;
var G__8484 = (0);
var G__8485 = (0);
seq__8420_8465 = G__8482;
chunk__8421_8466 = G__8483;
count__8422_8467 = G__8484;
i__8423_8468 = G__8485;
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

var G__8486 = cljs.core.next.call(null,seq__8412_8458__$1);
var G__8487 = null;
var G__8488 = (0);
var G__8489 = (0);
seq__8412_8427 = G__8486;
chunk__8413_8428 = G__8487;
count__8414_8429 = G__8488;
i__8415_8430 = G__8489;
continue;
}
} else {
}
}
break;
}

var compute_8490 = ((function (vec__8411,f,sources){
return (function (p1__8407_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8407_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8407_SHARP_)));
});})(vec__8411,f,sources))
;
this$.thunk = ((function (compute_8490,vec__8411,f,sources){
return (function (){
return this$.state = compute_8490.call(null,this$.sources);
});})(compute_8490,vec__8411,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8408){
var G__8409 = cljs.core.first.call(null,seq8408);
var seq8408__$1 = cljs.core.next.call(null,seq8408);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8409,seq8408__$1);
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
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
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
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8491 = cljs.core.seq.call(null,self__.watches);
var chunk__8492 = null;
var count__8493 = (0);
var i__8494 = (0);
while(true){
if((i__8494 < count__8493)){
var vec__8495 = cljs.core._nth.call(null,chunk__8492,i__8494);
var key = cljs.core.nth.call(null,vec__8495,(0),null);
var f = cljs.core.nth.call(null,vec__8495,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8497 = seq__8491;
var G__8498 = chunk__8492;
var G__8499 = count__8493;
var G__8500 = (i__8494 + (1));
seq__8491 = G__8497;
chunk__8492 = G__8498;
count__8493 = G__8499;
i__8494 = G__8500;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8491);
if(temp__4425__auto__){
var seq__8491__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8491__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__8491__$1);
var G__8501 = cljs.core.chunk_rest.call(null,seq__8491__$1);
var G__8502 = c__5804__auto__;
var G__8503 = cljs.core.count.call(null,c__5804__auto__);
var G__8504 = (0);
seq__8491 = G__8501;
chunk__8492 = G__8502;
count__8493 = G__8503;
i__8494 = G__8504;
continue;
} else {
var vec__8496 = cljs.core.first.call(null,seq__8491__$1);
var key = cljs.core.nth.call(null,vec__8496,(0),null);
var f = cljs.core.nth.call(null,vec__8496,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8505 = cljs.core.next.call(null,seq__8491__$1);
var G__8506 = null;
var G__8507 = (0);
var G__8508 = (0);
seq__8491 = G__8505;
chunk__8492 = G__8506;
count__8493 = G__8507;
i__8494 = G__8508;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5599__auto__,writer__5600__auto__,opt__5601__auto__){
return cljs.core._write.call(null,writer__5600__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5008__auto__ = javelin.core.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5008__auto__ = javelin.core.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5008__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5008__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
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

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__8509__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8509 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8510__i = 0, G__8510__a = new Array(arguments.length -  0);
while (G__8510__i < G__8510__a.length) {G__8510__a[G__8510__i] = arguments[G__8510__i + 0]; ++G__8510__i;}
  sources = new cljs.core.IndexedSeq(G__8510__a,0);
} 
return G__8509__delegate.call(this,sources);};
G__8509.cljs$lang$maxFixedArity = 0;
G__8509.cljs$lang$applyTo = (function (arglist__8511){
var sources = cljs.core.seq(arglist__8511);
return G__8509__delegate(sources);
});
G__8509.cljs$core$IFn$_invoke$arity$variadic = G__8509__delegate;
return G__8509;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args8512 = [];
var len__6059__auto___8520 = arguments.length;
var i__6060__auto___8521 = (0);
while(true){
if((i__6060__auto___8521 < len__6059__auto___8520)){
args8512.push((arguments[i__6060__auto___8521]));

var G__8522 = (i__6060__auto___8521 + (1));
i__6060__auto___8521 = G__8522;
continue;
} else {
}
break;
}

var G__8516 = args8512.length;
switch (G__8516) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6078__auto__ = (new cljs.core.IndexedSeq(args8512.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6078__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8517){
var map__8518 = p__8517;
var map__8518__$1 = ((((!((map__8518 == null)))?((((map__8518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8518):map__8518);
var meta = cljs.core.get.call(null,map__8518__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8513){
var G__8514 = cljs.core.first.call(null,seq8513);
var seq8513__$1 = cljs.core.next.call(null,seq8513);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8514,seq8513__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8524_SHARP_){
var _STAR_tx_STAR_8527 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8524_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8527;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8528 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8528;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___8535 = arguments.length;
var i__6060__auto___8536 = (0);
while(true){
if((i__6060__auto___8536 < len__6059__auto___8535)){
args__6066__auto__.push((arguments[i__6060__auto___8536]));

var G__8537 = (i__6060__auto___8536 + (1));
i__6060__auto___8536 = G__8537;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__8529_SHARP_,p2__8530_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8529_SHARP_,p2__8530_SHARP_),p2__8530_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8532_SHARP_,p2__8531_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8532_SHARP_,p2__8531_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8538__delegate = function (rest__8533_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8533_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8533_SHARP_);

return news;
};
var G__8538 = function (var_args){
var rest__8533_SHARP_ = null;
if (arguments.length > 0) {
var G__8539__i = 0, G__8539__a = new Array(arguments.length -  0);
while (G__8539__i < G__8539__a.length) {G__8539__a[G__8539__i] = arguments[G__8539__i + 0]; ++G__8539__i;}
  rest__8533_SHARP_ = new cljs.core.IndexedSeq(G__8539__a,0);
} 
return G__8538__delegate.call(this,rest__8533_SHARP_);};
G__8538.cljs$lang$maxFixedArity = 0;
G__8538.cljs$lang$applyTo = (function (arglist__8540){
var rest__8533_SHARP_ = cljs.core.seq(arglist__8540);
return G__8538__delegate(rest__8533_SHARP_);
});
G__8538.cljs$core$IFn$_invoke$arity$variadic = G__8538__delegate;
return G__8538;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8534){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8534));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8541_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8541_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8542_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8542_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8547_8551 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8548_8552 = null;
var count__8549_8553 = (0);
var i__8550_8554 = (0);
while(true){
if((i__8550_8554 < count__8549_8553)){
var i_8555 = cljs.core._nth.call(null,chunk__8548_8552,i__8550_8554);
f__$1.call(null,ith_item__$1.call(null,i_8555));

var G__8556 = seq__8547_8551;
var G__8557 = chunk__8548_8552;
var G__8558 = count__8549_8553;
var G__8559 = (i__8550_8554 + (1));
seq__8547_8551 = G__8556;
chunk__8548_8552 = G__8557;
count__8549_8553 = G__8558;
i__8550_8554 = G__8559;
continue;
} else {
var temp__4425__auto___8560 = cljs.core.seq.call(null,seq__8547_8551);
if(temp__4425__auto___8560){
var seq__8547_8561__$1 = temp__4425__auto___8560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8547_8561__$1)){
var c__5804__auto___8562 = cljs.core.chunk_first.call(null,seq__8547_8561__$1);
var G__8563 = cljs.core.chunk_rest.call(null,seq__8547_8561__$1);
var G__8564 = c__5804__auto___8562;
var G__8565 = cljs.core.count.call(null,c__5804__auto___8562);
var G__8566 = (0);
seq__8547_8551 = G__8563;
chunk__8548_8552 = G__8564;
count__8549_8553 = G__8565;
i__8550_8554 = G__8566;
continue;
} else {
var i_8567 = cljs.core.first.call(null,seq__8547_8561__$1);
f__$1.call(null,ith_item__$1.call(null,i_8567));

var G__8568 = cljs.core.next.call(null,seq__8547_8561__$1);
var G__8569 = null;
var G__8570 = (0);
var G__8571 = (0);
seq__8547_8551 = G__8568;
chunk__8548_8552 = G__8569;
count__8549_8553 = G__8570;
i__8550_8554 = G__8571;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map