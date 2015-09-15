// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.val(f)),cljs.core.key(f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq((function (){var iter__5773__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__13618(s__13619){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__13619__$1 = s__13619;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13619__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13628 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628,(1),null);
var iterys__5769__auto__ = ((function (s__13619__$1,vec__13628,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__13618_$_iter__13620(s__13621){
return (new cljs.core.LazySeq(null,((function (s__13619__$1,vec__13628,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__13621__$1 = s__13621;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13621__$1);
if(temp__4425__auto____$1){
var s__13621__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13621__$2)){
var c__5771__auto__ = cljs.core.chunk_first(s__13621__$2);
var size__5772__auto__ = cljs.core.count(c__5771__auto__);
var b__13623 = cljs.core.chunk_buffer(size__5772__auto__);
if((function (){var i__13622 = (0);
while(true){
if((i__13622 < size__5772__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5771__auto__,i__13622);
cljs.core.chunk_append(b__13623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13657 = (i__13622 + (1));
i__13622 = G__13657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13623),tailrecursion$priority_map$iter__13618_$_iter__13620(cljs.core.chunk_rest(s__13621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13623),null);
}
} else {
var item = cljs.core.first(s__13621__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13618_$_iter__13620(cljs.core.rest(s__13621__$2)));
}
} else {
return null;
}
break;
}
});})(s__13619__$1,vec__13628,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__13619__$1,vec__13628,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__5770__auto__ = cljs.core.seq(iterys__5769__auto__(item_set));
if(fs__5770__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5770__auto__,tailrecursion$priority_map$iter__13618(cljs.core.rest(s__13619__$1)));
} else {
var G__13658 = cljs.core.rest(s__13619__$1);
s__13619__$1 = G__13658;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__5773__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5436__auto__ = self__.__hash;
if(!((h__5436__auto__ == null))){
return h__5436__auto__;
} else {
var h__5436__auto____$1 = cljs.core.hash_imap(this$__$1);
self__.__hash = h__5436__auto____$1;

return h__5436__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found) : self__.item__GT_priority.call(null,item,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found)){
return this$__$1;
} else {
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority) : self__.priority__GT_set_of_items.call(null,priority));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),item),cljs.core.array_seq([priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq((function (){var iter__5773__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__13631(s__13632){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__13632__$1 = s__13632;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13632__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13641 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641,(1),null);
var iterys__5769__auto__ = ((function (s__13632__$1,vec__13641,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__13631_$_iter__13633(s__13634){
return (new cljs.core.LazySeq(null,((function (s__13632__$1,vec__13641,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__13634__$1 = s__13634;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13634__$1);
if(temp__4425__auto____$1){
var s__13634__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13634__$2)){
var c__5771__auto__ = cljs.core.chunk_first(s__13634__$2);
var size__5772__auto__ = cljs.core.count(c__5771__auto__);
var b__13636 = cljs.core.chunk_buffer(size__5772__auto__);
if((function (){var i__13635 = (0);
while(true){
if((i__13635 < size__5772__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5771__auto__,i__13635);
cljs.core.chunk_append(b__13636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13659 = (i__13635 + (1));
i__13635 = G__13659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13636),tailrecursion$priority_map$iter__13631_$_iter__13633(cljs.core.chunk_rest(s__13634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13636),null);
}
} else {
var item = cljs.core.first(s__13634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13631_$_iter__13633(cljs.core.rest(s__13634__$2)));
}
} else {
return null;
}
break;
}
});})(s__13632__$1,vec__13641,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__13632__$1,vec__13641,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__5770__auto__ = cljs.core.seq(iterys__5769__auto__(item_set));
if(fs__5770__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5770__auto__,tailrecursion$priority_map$iter__13631(cljs.core.rest(s__13632__$1)));
} else {
var G__13660 = cljs.core.rest(s__13632__$1);
s__13632__$1 = G__13660;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5773__auto__(self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__13661 = null;
var G__13661__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__13661__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__13661 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__13661__2.call(this,self__,item);
case 3:
return G__13661__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13661.cljs$core$IFn$_invoke$arity$2 = G__13661__2;
G__13661.cljs$core$IFn$_invoke$arity$3 = G__13661__3;
return G__13661;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args13617){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13617)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq((function (){var iter__5773__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__13644(s__13645){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__13645__$1 = s__13645;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13645__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13654 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(1),null);
var iterys__5769__auto__ = ((function (s__13645__$1,vec__13654,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__13644_$_iter__13646(s__13647){
return (new cljs.core.LazySeq(null,((function (s__13645__$1,vec__13654,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__13647__$1 = s__13647;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13647__$1);
if(temp__4425__auto____$1){
var s__13647__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13647__$2)){
var c__5771__auto__ = cljs.core.chunk_first(s__13647__$2);
var size__5772__auto__ = cljs.core.count(c__5771__auto__);
var b__13649 = cljs.core.chunk_buffer(size__5772__auto__);
if((function (){var i__13648 = (0);
while(true){
if((i__13648 < size__5772__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5771__auto__,i__13648);
cljs.core.chunk_append(b__13649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13662 = (i__13648 + (1));
i__13648 = G__13662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13649),tailrecursion$priority_map$iter__13644_$_iter__13646(cljs.core.chunk_rest(s__13647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13649),null);
}
} else {
var item = cljs.core.first(s__13647__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13644_$_iter__13646(cljs.core.rest(s__13647__$2)));
}
} else {
return null;
}
break;
}
});})(s__13645__$1,vec__13654,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__13645__$1,vec__13654,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__5770__auto__ = cljs.core.seq(iterys__5769__auto__(item_set));
if(fs__5770__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5770__auto__,tailrecursion$priority_map$iter__13644(cljs.core.rest(s__13645__$1)));
} else {
var G__13663 = cljs.core.rest(s__13645__$1);
s__13645__$1 = G__13663;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__5773__auto__(sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val(entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$priority_DASH__GT_set_DASH_of_DASH_items,cljs.core.cst$sym$item_DASH__GT_priority,cljs.core.cst$sym$meta,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5599__auto__,writer__5600__auto__,opt__5601__auto__){
return cljs.core._write(writer__5600__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Priority map literal expects a map for its elements."], 0));
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 * Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(){
var args__6066__auto__ = [];
var len__6059__auto___13665 = arguments.length;
var i__6060__auto___13666 = (0);
while(true){
if((i__6060__auto___13666 < len__6059__auto___13665)){
args__6066__auto__.push((arguments[i__6060__auto___13666]));

var G__13667 = (i__6060__auto___13666 + (1));
i__6060__auto___13666 = G__13667;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((0) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__6067__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__13668 = cljs.core.nnext(in$);
var G__13669 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13668;
out = G__13669;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq13664){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13664));
});
/**
 * keyval => key val
 * Returns a new priority map with supplied
 * mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(){
var args__6066__auto__ = [];
var len__6059__auto___13672 = arguments.length;
var i__6060__auto___13673 = (0);
while(true){
if((i__6060__auto___13673 < len__6059__auto___13672)){
args__6066__auto__.push((arguments[i__6060__auto___13673]));

var G__13674 = (i__6060__auto___13673 + (1));
i__6060__auto___13673 = G__13674;
continue;
} else {
}
break;
}

var argseq__6067__auto__ = ((((1) < args__6066__auto__.length))?(new cljs.core.IndexedSeq(args__6066__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6067__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__13675 = cljs.core.nnext(in$);
var G__13676 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13675;
out = G__13676;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq13670){
var G__13671 = cljs.core.first(seq13670);
var seq13670__$1 = cljs.core.next(seq13670);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__13671,seq13670__$1);
});
