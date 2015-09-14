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

var G__11910 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__11908_SHARP_,p2__11909_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11908_SHARP_,p2__11909_SHARP_,p2__11909_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__11910;
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
}catch (e11912){if((e11912 instanceof Error)){
var _ = e11912;
return null;
} else {
throw e11912;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__11915 = c;
javelin.core.add_sync_BANG_(G__11915);

return G__11915;
} else {
var G__11916 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__11916));

return G__11916;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___11925 = arguments.length;
var i__6060__auto___11926 = (0);
while(true){
if((i__6060__auto___11926 < len__6059__auto___11925)){
args__6066__auto__.push((arguments[i__6060__auto___11926]));

var G__11927 = (i__6060__auto___11926 + (1));
i__6060__auto___11926 = G__11927;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11919){
var vec__11920 = p__11919;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__11921 = cljs.core.seq(srcs);
var chunk__11922 = null;
var count__11923 = (0);
var i__11924 = (0);
while(true){
if((i__11924 < count__11923)){
var src = chunk__11922.cljs$core$IIndexed$_nth$arity$2(null,i__11924);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11928 = seq__11921;
var G__11929 = chunk__11922;
var G__11930 = count__11923;
var G__11931 = (i__11924 + (1));
seq__11921 = G__11928;
chunk__11922 = G__11929;
count__11923 = G__11930;
i__11924 = G__11931;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11921);
if(temp__4425__auto__){
var seq__11921__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11921__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__11921__$1);
var G__11932 = cljs.core.chunk_rest(seq__11921__$1);
var G__11933 = c__5804__auto__;
var G__11934 = cljs.core.count(c__5804__auto__);
var G__11935 = (0);
seq__11921 = G__11932;
chunk__11922 = G__11933;
count__11923 = G__11934;
i__11924 = G__11935;
continue;
} else {
var src = cljs.core.first(seq__11921__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11936 = cljs.core.next(seq__11921__$1);
var G__11937 = null;
var G__11938 = (0);
var G__11939 = (0);
seq__11921 = G__11936;
chunk__11922 = G__11937;
count__11923 = G__11938;
i__11924 = G__11939;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq11917){
var G__11918 = cljs.core.first(seq11917);
var seq11917__$1 = cljs.core.next(seq11917);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11918,seq11917__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6066__auto__ = [];
var len__6059__auto___11958 = arguments.length;
var i__6060__auto___11959 = (0);
while(true){
if((i__6060__auto___11959 < len__6059__auto___11958)){
args__6066__auto__.push((arguments[i__6060__auto___11959]));

var G__11960 = (i__6060__auto___11959 + (1));
i__6060__auto___11959 = G__11960;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11944){
var vec__11945 = p__11944;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__11946_11961 = cljs.core.seq(this$.sources);
var chunk__11947_11962 = null;
var count__11948_11963 = (0);
var i__11949_11964 = (0);
while(true){
if((i__11949_11964 < count__11948_11963)){
var source_11965 = chunk__11947_11962.cljs$core$IIndexed$_nth$arity$2(null,i__11949_11964);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_11965) : javelin.core.cell_QMARK_.call(null,source_11965)))){
source_11965.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11965.sinks,this$);

if((source_11965.rank > this$.rank)){
var seq__11950_11966 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__11946_11961,chunk__11947_11962,count__11948_11963,i__11949_11964,source_11965,vec__11945,f,sources){
return (function (p1__11940_SHARP_){
return p1__11940_SHARP_.sinks;
});})(seq__11946_11961,chunk__11947_11962,count__11948_11963,i__11949_11964,source_11965,vec__11945,f,sources))
,source_11965));
var chunk__11951_11967 = null;
var count__11952_11968 = (0);
var i__11953_11969 = (0);
while(true){
if((i__11953_11969 < count__11952_11968)){
var dep_11970 = chunk__11951_11967.cljs$core$IIndexed$_nth$arity$2(null,i__11953_11969);
dep_11970.rank = javelin.core.next_rank();

var G__11971 = seq__11950_11966;
var G__11972 = chunk__11951_11967;
var G__11973 = count__11952_11968;
var G__11974 = (i__11953_11969 + (1));
seq__11950_11966 = G__11971;
chunk__11951_11967 = G__11972;
count__11952_11968 = G__11973;
i__11953_11969 = G__11974;
continue;
} else {
var temp__4425__auto___11975 = cljs.core.seq(seq__11950_11966);
if(temp__4425__auto___11975){
var seq__11950_11976__$1 = temp__4425__auto___11975;
if(cljs.core.chunked_seq_QMARK_(seq__11950_11976__$1)){
var c__5804__auto___11977 = cljs.core.chunk_first(seq__11950_11976__$1);
var G__11978 = cljs.core.chunk_rest(seq__11950_11976__$1);
var G__11979 = c__5804__auto___11977;
var G__11980 = cljs.core.count(c__5804__auto___11977);
var G__11981 = (0);
seq__11950_11966 = G__11978;
chunk__11951_11967 = G__11979;
count__11952_11968 = G__11980;
i__11953_11969 = G__11981;
continue;
} else {
var dep_11982 = cljs.core.first(seq__11950_11976__$1);
dep_11982.rank = javelin.core.next_rank();

var G__11983 = cljs.core.next(seq__11950_11976__$1);
var G__11984 = null;
var G__11985 = (0);
var G__11986 = (0);
seq__11950_11966 = G__11983;
chunk__11951_11967 = G__11984;
count__11952_11968 = G__11985;
i__11953_11969 = G__11986;
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

var G__11987 = seq__11946_11961;
var G__11988 = chunk__11947_11962;
var G__11989 = count__11948_11963;
var G__11990 = (i__11949_11964 + (1));
seq__11946_11961 = G__11987;
chunk__11947_11962 = G__11988;
count__11948_11963 = G__11989;
i__11949_11964 = G__11990;
continue;
} else {
var temp__4425__auto___11991 = cljs.core.seq(seq__11946_11961);
if(temp__4425__auto___11991){
var seq__11946_11992__$1 = temp__4425__auto___11991;
if(cljs.core.chunked_seq_QMARK_(seq__11946_11992__$1)){
var c__5804__auto___11993 = cljs.core.chunk_first(seq__11946_11992__$1);
var G__11994 = cljs.core.chunk_rest(seq__11946_11992__$1);
var G__11995 = c__5804__auto___11993;
var G__11996 = cljs.core.count(c__5804__auto___11993);
var G__11997 = (0);
seq__11946_11961 = G__11994;
chunk__11947_11962 = G__11995;
count__11948_11963 = G__11996;
i__11949_11964 = G__11997;
continue;
} else {
var source_11998 = cljs.core.first(seq__11946_11992__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_11998) : javelin.core.cell_QMARK_.call(null,source_11998)))){
source_11998.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11998.sinks,this$);

if((source_11998.rank > this$.rank)){
var seq__11954_11999 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__11946_11961,chunk__11947_11962,count__11948_11963,i__11949_11964,source_11998,seq__11946_11992__$1,temp__4425__auto___11991,vec__11945,f,sources){
return (function (p1__11940_SHARP_){
return p1__11940_SHARP_.sinks;
});})(seq__11946_11961,chunk__11947_11962,count__11948_11963,i__11949_11964,source_11998,seq__11946_11992__$1,temp__4425__auto___11991,vec__11945,f,sources))
,source_11998));
var chunk__11955_12000 = null;
var count__11956_12001 = (0);
var i__11957_12002 = (0);
while(true){
if((i__11957_12002 < count__11956_12001)){
var dep_12003 = chunk__11955_12000.cljs$core$IIndexed$_nth$arity$2(null,i__11957_12002);
dep_12003.rank = javelin.core.next_rank();

var G__12004 = seq__11954_11999;
var G__12005 = chunk__11955_12000;
var G__12006 = count__11956_12001;
var G__12007 = (i__11957_12002 + (1));
seq__11954_11999 = G__12004;
chunk__11955_12000 = G__12005;
count__11956_12001 = G__12006;
i__11957_12002 = G__12007;
continue;
} else {
var temp__4425__auto___12008__$1 = cljs.core.seq(seq__11954_11999);
if(temp__4425__auto___12008__$1){
var seq__11954_12009__$1 = temp__4425__auto___12008__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11954_12009__$1)){
var c__5804__auto___12010 = cljs.core.chunk_first(seq__11954_12009__$1);
var G__12011 = cljs.core.chunk_rest(seq__11954_12009__$1);
var G__12012 = c__5804__auto___12010;
var G__12013 = cljs.core.count(c__5804__auto___12010);
var G__12014 = (0);
seq__11954_11999 = G__12011;
chunk__11955_12000 = G__12012;
count__11956_12001 = G__12013;
i__11957_12002 = G__12014;
continue;
} else {
var dep_12015 = cljs.core.first(seq__11954_12009__$1);
dep_12015.rank = javelin.core.next_rank();

var G__12016 = cljs.core.next(seq__11954_12009__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__11954_11999 = G__12016;
chunk__11955_12000 = G__12017;
count__11956_12001 = G__12018;
i__11957_12002 = G__12019;
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

var G__12020 = cljs.core.next(seq__11946_11992__$1);
var G__12021 = null;
var G__12022 = (0);
var G__12023 = (0);
seq__11946_11961 = G__12020;
chunk__11947_11962 = G__12021;
count__11948_11963 = G__12022;
i__11949_11964 = G__12023;
continue;
}
} else {
}
}
break;
}

var compute_12024 = ((function (vec__11945,f,sources){
return (function (p1__11941_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__11941_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__11941_SHARP_)));
});})(vec__11945,f,sources))
;
this$.thunk = ((function (compute_12024,vec__11945,f,sources){
return (function (){
return this$.state = compute_12024(this$.sources);
});})(compute_12024,vec__11945,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq11942){
var G__11943 = cljs.core.first(seq11942);
var seq11942__$1 = cljs.core.next(seq11942);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11943,seq11942__$1);
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
var G__12026 = this$__$1;
var G__12027 = (function (){var G__12028 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12028) : f.call(null,G__12028));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12026,G__12027) : cljs.core.reset_BANG_.call(null,G__12026,G__12027));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__12031 = this$__$1;
var G__12032 = (function (){var G__12033 = this$__$1.state;
var G__12034 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12033,G__12034) : f.call(null,G__12033,G__12034));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12031,G__12032) : cljs.core.reset_BANG_.call(null,G__12031,G__12032));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__12038 = this$__$1;
var G__12039 = (function (){var G__12040 = this$__$1.state;
var G__12041 = a;
var G__12042 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12040,G__12041,G__12042) : f.call(null,G__12040,G__12041,G__12042));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12038,G__12039) : cljs.core.reset_BANG_.call(null,G__12038,G__12039));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__12043 = this$__$1;
var G__12044 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12043,G__12044) : cljs.core.reset_BANG_.call(null,G__12043,G__12044));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__12045 = cljs.core.seq(self__.watches);
var chunk__12046 = null;
var count__12047 = (0);
var i__12048 = (0);
while(true){
if((i__12048 < count__12047)){
var vec__12049 = chunk__12046.cljs$core$IIndexed$_nth$arity$2(null,i__12048);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12049,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12049,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__12051 = seq__12045;
var G__12052 = chunk__12046;
var G__12053 = count__12047;
var G__12054 = (i__12048 + (1));
seq__12045 = G__12051;
chunk__12046 = G__12052;
count__12047 = G__12053;
i__12048 = G__12054;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12045);
if(temp__4425__auto__){
var seq__12045__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12045__$1)){
var c__5804__auto__ = cljs.core.chunk_first(seq__12045__$1);
var G__12055 = cljs.core.chunk_rest(seq__12045__$1);
var G__12056 = c__5804__auto__;
var G__12057 = cljs.core.count(c__5804__auto__);
var G__12058 = (0);
seq__12045 = G__12055;
chunk__12046 = G__12056;
count__12047 = G__12057;
i__12048 = G__12058;
continue;
} else {
var vec__12050 = cljs.core.first(seq__12045__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12050,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12050,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__12059 = cljs.core.next(seq__12045__$1);
var G__12060 = null;
var G__12061 = (0);
var G__12062 = (0);
seq__12045 = G__12059;
chunk__12046 = G__12060;
count__12047 = G__12061;
i__12048 = G__12062;
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
var G__12063__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__12063 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12064__i = 0, G__12064__a = new Array(arguments.length -  0);
while (G__12064__i < G__12064__a.length) {G__12064__a[G__12064__i] = arguments[G__12064__i + 0]; ++G__12064__i;}
  sources = new cljs.core.IndexedSeq(G__12064__a,0);
} 
return G__12063__delegate.call(this,sources);};
G__12063.cljs$lang$maxFixedArity = 0;
G__12063.cljs$lang$applyTo = (function (arglist__12065){
var sources = cljs.core.seq(arglist__12065);
return G__12063__delegate(sources);
});
G__12063.cljs$core$IFn$_invoke$arity$variadic = G__12063__delegate;
return G__12063;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args12066 = [];
var len__6059__auto___12074 = arguments.length;
var i__6060__auto___12075 = (0);
while(true){
if((i__6060__auto___12075 < len__6059__auto___12074)){
args12066.push((arguments[i__6060__auto___12075]));

var G__12076 = (i__6060__auto___12075 + (1));
i__6060__auto___12075 = G__12076;
continue;
} else {
}
break;
}

var G__12070 = args12066.length;
switch (G__12070) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6078__auto__ = (new cljs.core.IndexedSeq(args12066.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6078__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__12071){
var map__12072 = p__12071;
var map__12072__$1 = ((((!((map__12072 == null)))?((((map__12072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12072):map__12072);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq12067){
var G__12068 = cljs.core.first(seq12067);
var seq12067__$1 = cljs.core.next(seq12067);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__12068,seq12067__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__12078_SHARP_){
var _STAR_tx_STAR_12082 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__12083 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12083) : cljs.core.atom.call(null,G__12083));
})();

try{return (p1__12078_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__12078_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__12078_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_12082;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_12084 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_12084;
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
var len__6059__auto___12092 = arguments.length;
var i__6060__auto___12093 = (0);
while(true){
if((i__6060__auto___12093 < len__6059__auto___12092)){
args__6066__auto__.push((arguments[i__6060__auto___12093]));

var G__12094 = (i__6060__auto___12093 + (1));
i__6060__auto___12093 = G__12094;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__12091 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12091) : cljs.core.atom.call(null,G__12091));
})();
var tag_neq = ((function (olds){
return (function (p1__12085_SHARP_,p2__12086_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__12085_SHARP_,p2__12086_SHARP_),p2__12086_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12088_SHARP_,p2__12087_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__12088_SHARP_,p2__12087_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12095__delegate = function (rest__12089_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__12089_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__12089_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__12089_SHARP_));

return news;
};
var G__12095 = function (var_args){
var rest__12089_SHARP_ = null;
if (arguments.length > 0) {
var G__12096__i = 0, G__12096__a = new Array(arguments.length -  0);
while (G__12096__i < G__12096__a.length) {G__12096__a[G__12096__i] = arguments[G__12096__i + 0]; ++G__12096__i;}
  rest__12089_SHARP_ = new cljs.core.IndexedSeq(G__12096__a,0);
} 
return G__12095__delegate.call(this,rest__12089_SHARP_);};
G__12095.cljs$lang$maxFixedArity = 0;
G__12095.cljs$lang$applyTo = (function (arglist__12097){
var rest__12089_SHARP_ = cljs.core.seq(arglist__12097);
return G__12095__delegate(rest__12089_SHARP_);
});
G__12095.cljs$core$IFn$_invoke$arity$variadic = G__12095__delegate;
return G__12095;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq12090){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12090));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__12098_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__12098_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12099_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__12099_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12106_12112 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__12107_12113 = null;
var count__12108_12114 = (0);
var i__12109_12115 = (0);
while(true){
if((i__12109_12115 < count__12108_12114)){
var i_12116 = chunk__12107_12113.cljs$core$IIndexed$_nth$arity$2(null,i__12109_12115);
var G__12110_12117 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_12116) : ith_item__$1.call(null,i_12116));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12110_12117) : f__$1.call(null,G__12110_12117));

var G__12118 = seq__12106_12112;
var G__12119 = chunk__12107_12113;
var G__12120 = count__12108_12114;
var G__12121 = (i__12109_12115 + (1));
seq__12106_12112 = G__12118;
chunk__12107_12113 = G__12119;
count__12108_12114 = G__12120;
i__12109_12115 = G__12121;
continue;
} else {
var temp__4425__auto___12122 = cljs.core.seq(seq__12106_12112);
if(temp__4425__auto___12122){
var seq__12106_12123__$1 = temp__4425__auto___12122;
if(cljs.core.chunked_seq_QMARK_(seq__12106_12123__$1)){
var c__5804__auto___12124 = cljs.core.chunk_first(seq__12106_12123__$1);
var G__12125 = cljs.core.chunk_rest(seq__12106_12123__$1);
var G__12126 = c__5804__auto___12124;
var G__12127 = cljs.core.count(c__5804__auto___12124);
var G__12128 = (0);
seq__12106_12112 = G__12125;
chunk__12107_12113 = G__12126;
count__12108_12114 = G__12127;
i__12109_12115 = G__12128;
continue;
} else {
var i_12129 = cljs.core.first(seq__12106_12123__$1);
var G__12111_12130 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_12129) : ith_item__$1.call(null,i_12129));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12111_12130) : f__$1.call(null,G__12111_12130));

var G__12131 = cljs.core.next(seq__12106_12123__$1);
var G__12132 = null;
var G__12133 = (0);
var G__12134 = (0);
seq__12106_12112 = G__12131;
chunk__12107_12113 = G__12132;
count__12108_12114 = G__12133;
i__12109_12115 = G__12134;
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
