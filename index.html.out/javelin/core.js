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

var G__25031 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__25029_SHARP_,p2__25030_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25029_SHARP_,p2__25030_SHARP_,p2__25030_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__25031;
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
}catch (e25033){if((e25033 instanceof Error)){
var _ = e25033;
return null;
} else {
throw e25033;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__25036 = c;
javelin.core.add_sync_BANG_(G__25036);

return G__25036;
} else {
var G__25037 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__25037));

return G__25037;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___25046 = arguments.length;
var i__6060__auto___25047 = (0);
while(true){
if((i__6060__auto___25047 < len__6059__auto___25046)){
args__6066__auto__.push((arguments[i__6060__auto___25047]));

var G__25048 = (i__6060__auto___25047 + (1));
i__6060__auto___25047 = G__25048;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__25040){
var vec__25041 = p__25040;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25041,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__25042 = cljs.core.seq(srcs);
var chunk__25043 = null;
var count__25044 = (0);
var i__25045 = (0);
while(true){
if((i__25045 < count__25044)){
var src = chunk__25043.cljs$core$IIndexed$_nth$arity$2(null,i__25045);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__25049 = seq__25042;
var G__25050 = chunk__25043;
var G__25051 = count__25044;
var G__25052 = (i__25045 + (1));
seq__25042 = G__25049;
chunk__25043 = G__25050;
count__25044 = G__25051;
i__25045 = G__25052;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__25042);
if(temp__4425__auto__){
var seq__25042__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25042__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__25042__$1);
var G__25053 = cljs.core.chunk_rest(seq__25042__$1);
var G__25054 = c__5804__auto__;
var G__25055 = cljs.core.count(c__5804__auto__);
var G__25056 = (0);
seq__25042 = G__25053;
chunk__25043 = G__25054;
count__25044 = G__25055;
i__25045 = G__25056;
continue;
} else {
var src = cljs.core.first(seq__25042__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__25057 = cljs.core.next(seq__25042__$1);
var G__25058 = null;
var G__25059 = (0);
var G__25060 = (0);
seq__25042 = G__25057;
chunk__25043 = G__25058;
count__25044 = G__25059;
i__25045 = G__25060;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq25038){
var G__25039 = cljs.core.first(seq25038);
var seq25038__$1 = cljs.core.next(seq25038);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25039,seq25038__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___25079 = arguments.length;
var i__6060__auto___25080 = (0);
while(true){
if((i__6060__auto___25080 < len__6059__auto___25079)){
args__6066__auto__.push((arguments[i__6060__auto___25080]));

var G__25081 = (i__6060__auto___25080 + (1));
i__6060__auto___25080 = G__25081;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__25065){
var vec__25066 = p__25065;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25066,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25066,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__25067_25082 = cljs.core.seq(this$.sources);
var chunk__25068_25083 = null;
var count__25069_25084 = (0);
var i__25070_25085 = (0);
while(true){
if((i__25070_25085 < count__25069_25084)){
var source_25086 = chunk__25068_25083.cljs$core$IIndexed$_nth$arity$2(null,i__25070_25085);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_25086) : javelin.core.cell_QMARK_.call(null,source_25086)))){
source_25086.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_25086.sinks,this$);

if((source_25086.rank > this$.rank)){
var seq__25071_25087 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__25067_25082,chunk__25068_25083,count__25069_25084,i__25070_25085,source_25086,vec__25066,f,sources){
return (function (p1__25061_SHARP_){
return p1__25061_SHARP_.sinks;
});})(seq__25067_25082,chunk__25068_25083,count__25069_25084,i__25070_25085,source_25086,vec__25066,f,sources))
,source_25086));
var chunk__25072_25088 = null;
var count__25073_25089 = (0);
var i__25074_25090 = (0);
while(true){
if((i__25074_25090 < count__25073_25089)){
var dep_25091 = chunk__25072_25088.cljs$core$IIndexed$_nth$arity$2(null,i__25074_25090);
dep_25091.rank = javelin.core.next_rank();

var G__25092 = seq__25071_25087;
var G__25093 = chunk__25072_25088;
var G__25094 = count__25073_25089;
var G__25095 = (i__25074_25090 + (1));
seq__25071_25087 = G__25092;
chunk__25072_25088 = G__25093;
count__25073_25089 = G__25094;
i__25074_25090 = G__25095;
continue;
} else {
var temp__4425__auto___25096 = cljs.core.seq(seq__25071_25087);
if(temp__4425__auto___25096){
var seq__25071_25097__$1 = temp__4425__auto___25096;
if(cljs.core.chunked_seq_QMARK_(seq__25071_25097__$1)){
var c__5804__auto___25098 = cljs.core.chunk_first(seq__25071_25097__$1);
var G__25099 = cljs.core.chunk_rest(seq__25071_25097__$1);
var G__25100 = c__5804__auto___25098;
var G__25101 = cljs.core.count(c__5804__auto___25098);
var G__25102 = (0);
seq__25071_25087 = G__25099;
chunk__25072_25088 = G__25100;
count__25073_25089 = G__25101;
i__25074_25090 = G__25102;
continue;
} else {
var dep_25103 = cljs.core.first(seq__25071_25097__$1);
dep_25103.rank = javelin.core.next_rank();

var G__25104 = cljs.core.next(seq__25071_25097__$1);
var G__25105 = null;
var G__25106 = (0);
var G__25107 = (0);
seq__25071_25087 = G__25104;
chunk__25072_25088 = G__25105;
count__25073_25089 = G__25106;
i__25074_25090 = G__25107;
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

var G__25108 = seq__25067_25082;
var G__25109 = chunk__25068_25083;
var G__25110 = count__25069_25084;
var G__25111 = (i__25070_25085 + (1));
seq__25067_25082 = G__25108;
chunk__25068_25083 = G__25109;
count__25069_25084 = G__25110;
i__25070_25085 = G__25111;
continue;
} else {
var temp__4425__auto___25112 = cljs.core.seq(seq__25067_25082);
if(temp__4425__auto___25112){
var seq__25067_25113__$1 = temp__4425__auto___25112;
if(cljs.core.chunked_seq_QMARK_(seq__25067_25113__$1)){
var c__5804__auto___25114 = cljs.core.chunk_first(seq__25067_25113__$1);
var G__25115 = cljs.core.chunk_rest(seq__25067_25113__$1);
var G__25116 = c__5804__auto___25114;
var G__25117 = cljs.core.count(c__5804__auto___25114);
var G__25118 = (0);
seq__25067_25082 = G__25115;
chunk__25068_25083 = G__25116;
count__25069_25084 = G__25117;
i__25070_25085 = G__25118;
continue;
} else {
var source_25119 = cljs.core.first(seq__25067_25113__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_25119) : javelin.core.cell_QMARK_.call(null,source_25119)))){
source_25119.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_25119.sinks,this$);

if((source_25119.rank > this$.rank)){
var seq__25075_25120 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__25067_25082,chunk__25068_25083,count__25069_25084,i__25070_25085,source_25119,seq__25067_25113__$1,temp__4425__auto___25112,vec__25066,f,sources){
return (function (p1__25061_SHARP_){
return p1__25061_SHARP_.sinks;
});})(seq__25067_25082,chunk__25068_25083,count__25069_25084,i__25070_25085,source_25119,seq__25067_25113__$1,temp__4425__auto___25112,vec__25066,f,sources))
,source_25119));
var chunk__25076_25121 = null;
var count__25077_25122 = (0);
var i__25078_25123 = (0);
while(true){
if((i__25078_25123 < count__25077_25122)){
var dep_25124 = chunk__25076_25121.cljs$core$IIndexed$_nth$arity$2(null,i__25078_25123);
dep_25124.rank = javelin.core.next_rank();

var G__25125 = seq__25075_25120;
var G__25126 = chunk__25076_25121;
var G__25127 = count__25077_25122;
var G__25128 = (i__25078_25123 + (1));
seq__25075_25120 = G__25125;
chunk__25076_25121 = G__25126;
count__25077_25122 = G__25127;
i__25078_25123 = G__25128;
continue;
} else {
var temp__4425__auto___25129__$1 = cljs.core.seq(seq__25075_25120);
if(temp__4425__auto___25129__$1){
var seq__25075_25130__$1 = temp__4425__auto___25129__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25075_25130__$1)){
var c__5804__auto___25131 = cljs.core.chunk_first(seq__25075_25130__$1);
var G__25132 = cljs.core.chunk_rest(seq__25075_25130__$1);
var G__25133 = c__5804__auto___25131;
var G__25134 = cljs.core.count(c__5804__auto___25131);
var G__25135 = (0);
seq__25075_25120 = G__25132;
chunk__25076_25121 = G__25133;
count__25077_25122 = G__25134;
i__25078_25123 = G__25135;
continue;
} else {
var dep_25136 = cljs.core.first(seq__25075_25130__$1);
dep_25136.rank = javelin.core.next_rank();

var G__25137 = cljs.core.next(seq__25075_25130__$1);
var G__25138 = null;
var G__25139 = (0);
var G__25140 = (0);
seq__25075_25120 = G__25137;
chunk__25076_25121 = G__25138;
count__25077_25122 = G__25139;
i__25078_25123 = G__25140;
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

var G__25141 = cljs.core.next(seq__25067_25113__$1);
var G__25142 = null;
var G__25143 = (0);
var G__25144 = (0);
seq__25067_25082 = G__25141;
chunk__25068_25083 = G__25142;
count__25069_25084 = G__25143;
i__25070_25085 = G__25144;
continue;
}
} else {
}
}
break;
}

var compute_25145 = ((function (vec__25066,f,sources){
return (function (p1__25062_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__25062_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__25062_SHARP_)));
});})(vec__25066,f,sources))
;
this$.thunk = ((function (compute_25145,vec__25066,f,sources){
return (function (){
return this$.state = compute_25145(this$.sources);
});})(compute_25145,vec__25066,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq25063){
var G__25064 = cljs.core.first(seq25063);
var seq25063__$1 = cljs.core.next(seq25063);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25064,seq25063__$1);
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
var G__25147 = this$__$1;
var G__25148 = (function (){var G__25149 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25149) : f.call(null,G__25149));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25147,G__25148) : cljs.core.reset_BANG_.call(null,G__25147,G__25148));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__25152 = this$__$1;
var G__25153 = (function (){var G__25154 = this$__$1.state;
var G__25155 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25154,G__25155) : f.call(null,G__25154,G__25155));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25152,G__25153) : cljs.core.reset_BANG_.call(null,G__25152,G__25153));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__25159 = this$__$1;
var G__25160 = (function (){var G__25161 = this$__$1.state;
var G__25162 = a;
var G__25163 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25161,G__25162,G__25163) : f.call(null,G__25161,G__25162,G__25163));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25159,G__25160) : cljs.core.reset_BANG_.call(null,G__25159,G__25160));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__25164 = this$__$1;
var G__25165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25164,G__25165) : cljs.core.reset_BANG_.call(null,G__25164,G__25165));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__25166 = cljs.core.seq(self__.watches);
var chunk__25167 = null;
var count__25168 = (0);
var i__25169 = (0);
while(true){
if((i__25169 < count__25168)){
var vec__25170 = chunk__25167.cljs$core$IIndexed$_nth$arity$2(null,i__25169);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25170,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25170,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__25172 = seq__25166;
var G__25173 = chunk__25167;
var G__25174 = count__25168;
var G__25175 = (i__25169 + (1));
seq__25166 = G__25172;
chunk__25167 = G__25173;
count__25168 = G__25174;
i__25169 = G__25175;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__25166);
if(temp__4425__auto__){
var seq__25166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25166__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__25166__$1);
var G__25176 = cljs.core.chunk_rest(seq__25166__$1);
var G__25177 = c__5804__auto__;
var G__25178 = cljs.core.count(c__5804__auto__);
var G__25179 = (0);
seq__25166 = G__25176;
chunk__25167 = G__25177;
count__25168 = G__25178;
i__25169 = G__25179;
continue;
} else {
var vec__25171 = cljs.core.first(seq__25166__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25171,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25171,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__25180 = cljs.core.next(seq__25166__$1);
var G__25181 = null;
var G__25182 = (0);
var G__25183 = (0);
seq__25166 = G__25180;
chunk__25167 = G__25181;
count__25168 = G__25182;
i__25169 = G__25183;
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
var G__25184__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__25184 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__25185__i = 0, G__25185__a = new Array(arguments.length -  0);
while (G__25185__i < G__25185__a.length) {G__25185__a[G__25185__i] = arguments[G__25185__i + 0]; ++G__25185__i;}
  sources = new cljs.core.IndexedSeq(G__25185__a,0);
} 
return G__25184__delegate.call(this,sources);};
G__25184.cljs$lang$maxFixedArity = 0;
G__25184.cljs$lang$applyTo = (function (arglist__25186){
var sources = cljs.core.seq(arglist__25186);
return G__25184__delegate(sources);
});
G__25184.cljs$core$IFn$_invoke$arity$variadic = G__25184__delegate;
return G__25184;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args25187 = [];
var len__6059__auto___25195 = arguments.length;
var i__6060__auto___25196 = (0);
while(true){
if((i__6060__auto___25196 < len__6059__auto___25195)){
args25187.push((arguments[i__6060__auto___25196]));

var G__25197 = (i__6060__auto___25196 + (1));
i__6060__auto___25196 = G__25197;
continue;
} else {
}
break;
}

var G__25191 = args25187.length;
switch (G__25191) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6078__auto__ = (new cljs.core.IndexedSeq(args25187.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6078__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__25192){
var map__25193 = p__25192;
var map__25193__$1 = ((((!((map__25193 == null)))?((((map__25193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25193):map__25193);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq25188){
var G__25189 = cljs.core.first(seq25188);
var seq25188__$1 = cljs.core.next(seq25188);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__25189,seq25188__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__25199_SHARP_){
var _STAR_tx_STAR_25203 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__25204 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25204) : cljs.core.atom.call(null,G__25204));
})();

try{return (p1__25199_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__25199_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__25199_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_25203;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_25205 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_25205;
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
var len__6059__auto___25213 = arguments.length;
var i__6060__auto___25214 = (0);
while(true){
if((i__6060__auto___25214 < len__6059__auto___25213)){
args__6066__auto__.push((arguments[i__6060__auto___25214]));

var G__25215 = (i__6060__auto___25214 + (1));
i__6060__auto___25214 = G__25215;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__25212 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25212) : cljs.core.atom.call(null,G__25212));
})();
var tag_neq = ((function (olds){
return (function (p1__25206_SHARP_,p2__25207_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__25206_SHARP_,p2__25207_SHARP_),p2__25207_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__25209_SHARP_,p2__25208_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__25209_SHARP_,p2__25208_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__25216__delegate = function (rest__25210_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__25210_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__25210_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__25210_SHARP_));

return news;
};
var G__25216 = function (var_args){
var rest__25210_SHARP_ = null;
if (arguments.length > 0) {
var G__25217__i = 0, G__25217__a = new Array(arguments.length -  0);
while (G__25217__i < G__25217__a.length) {G__25217__a[G__25217__i] = arguments[G__25217__i + 0]; ++G__25217__i;}
  rest__25210_SHARP_ = new cljs.core.IndexedSeq(G__25217__a,0);
} 
return G__25216__delegate.call(this,rest__25210_SHARP_);};
G__25216.cljs$lang$maxFixedArity = 0;
G__25216.cljs$lang$applyTo = (function (arglist__25218){
var rest__25210_SHARP_ = cljs.core.seq(arglist__25218);
return G__25216__delegate(rest__25210_SHARP_);
});
G__25216.cljs$core$IFn$_invoke$arity$variadic = G__25216__delegate;
return G__25216;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq25211){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25211));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__25219_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__25219_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__25220_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__25220_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__25227_25233 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__25228_25234 = null;
var count__25229_25235 = (0);
var i__25230_25236 = (0);
while(true){
if((i__25230_25236 < count__25229_25235)){
var i_25237 = chunk__25228_25234.cljs$core$IIndexed$_nth$arity$2(null,i__25230_25236);
var G__25231_25238 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_25237) : ith_item__$1.call(null,i_25237));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__25231_25238) : f__$1.call(null,G__25231_25238));

var G__25239 = seq__25227_25233;
var G__25240 = chunk__25228_25234;
var G__25241 = count__25229_25235;
var G__25242 = (i__25230_25236 + (1));
seq__25227_25233 = G__25239;
chunk__25228_25234 = G__25240;
count__25229_25235 = G__25241;
i__25230_25236 = G__25242;
continue;
} else {
var temp__4425__auto___25243 = cljs.core.seq(seq__25227_25233);
if(temp__4425__auto___25243){
var seq__25227_25244__$1 = temp__4425__auto___25243;
if(cljs.core.chunked_seq_QMARK_(seq__25227_25244__$1)){
var c__5804__auto___25245 = cljs.core.chunk_first(seq__25227_25244__$1);
var G__25246 = cljs.core.chunk_rest(seq__25227_25244__$1);
var G__25247 = c__5804__auto___25245;
var G__25248 = cljs.core.count(c__5804__auto___25245);
var G__25249 = (0);
seq__25227_25233 = G__25246;
chunk__25228_25234 = G__25247;
count__25229_25235 = G__25248;
i__25230_25236 = G__25249;
continue;
} else {
var i_25250 = cljs.core.first(seq__25227_25244__$1);
var G__25232_25251 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_25250) : ith_item__$1.call(null,i_25250));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__25232_25251) : f__$1.call(null,G__25232_25251));

var G__25252 = cljs.core.next(seq__25227_25244__$1);
var G__25253 = null;
var G__25254 = (0);
var G__25255 = (0);
seq__25227_25233 = G__25252;
chunk__25228_25234 = G__25253;
count__25229_25235 = G__25254;
i__25230_25236 = G__25255;
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
