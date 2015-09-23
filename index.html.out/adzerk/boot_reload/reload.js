// Compiled by ClojureScript 1.7.48 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7849_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7849_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7854 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7855 = null;
var count__7856 = (0);
var i__7857 = (0);
while(true){
if((i__7857 < count__7856)){
var s = cljs.core._nth.call(null,chunk__7855,i__7857);
var temp__4425__auto___7858 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7858)){
var sheet_7859 = temp__4425__auto___7858;
var temp__4425__auto___7860__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7859.href,changed);
if(cljs.core.truth_(temp__4425__auto___7860__$1)){
var href_uri_7861 = temp__4425__auto___7860__$1;
sheet_7859.ownerNode.href = href_uri_7861.makeUnique().toString();
} else {
}
} else {
}

var G__7862 = seq__7854;
var G__7863 = chunk__7855;
var G__7864 = count__7856;
var G__7865 = (i__7857 + (1));
seq__7854 = G__7862;
chunk__7855 = G__7863;
count__7856 = G__7864;
i__7857 = G__7865;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7854);
if(temp__4425__auto__){
var seq__7854__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7854__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__7854__$1);
var G__7866 = cljs.core.chunk_rest.call(null,seq__7854__$1);
var G__7867 = c__5804__auto__;
var G__7868 = cljs.core.count.call(null,c__5804__auto__);
var G__7869 = (0);
seq__7854 = G__7866;
chunk__7855 = G__7867;
count__7856 = G__7868;
i__7857 = G__7869;
continue;
} else {
var s = cljs.core.first.call(null,seq__7854__$1);
var temp__4425__auto___7870__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7870__$1)){
var sheet_7871 = temp__4425__auto___7870__$1;
var temp__4425__auto___7872__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7871.href,changed);
if(cljs.core.truth_(temp__4425__auto___7872__$2)){
var href_uri_7873 = temp__4425__auto___7872__$2;
sheet_7871.ownerNode.href = href_uri_7873.makeUnique().toString();
} else {
}
} else {
}

var G__7874 = cljs.core.next.call(null,seq__7854__$1);
var G__7875 = null;
var G__7876 = (0);
var G__7877 = (0);
seq__7854 = G__7874;
chunk__7855 = G__7875;
count__7856 = G__7876;
i__7857 = G__7877;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7882 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7883 = null;
var count__7884 = (0);
var i__7885 = (0);
while(true){
if((i__7885 < count__7884)){
var s = cljs.core._nth.call(null,chunk__7883,i__7885);
var temp__4425__auto___7886 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7886)){
var image_7887 = temp__4425__auto___7886;
var temp__4425__auto___7888__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7887.src,changed);
if(cljs.core.truth_(temp__4425__auto___7888__$1)){
var href_uri_7889 = temp__4425__auto___7888__$1;
image_7887.src = href_uri_7889.makeUnique().toString();
} else {
}
} else {
}

var G__7890 = seq__7882;
var G__7891 = chunk__7883;
var G__7892 = count__7884;
var G__7893 = (i__7885 + (1));
seq__7882 = G__7890;
chunk__7883 = G__7891;
count__7884 = G__7892;
i__7885 = G__7893;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7882);
if(temp__4425__auto__){
var seq__7882__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7882__$1)){
var c__5804__auto__ = cljs.core.chunk_first.call(null,seq__7882__$1);
var G__7894 = cljs.core.chunk_rest.call(null,seq__7882__$1);
var G__7895 = c__5804__auto__;
var G__7896 = cljs.core.count.call(null,c__5804__auto__);
var G__7897 = (0);
seq__7882 = G__7894;
chunk__7883 = G__7895;
count__7884 = G__7896;
i__7885 = G__7897;
continue;
} else {
var s = cljs.core.first.call(null,seq__7882__$1);
var temp__4425__auto___7898__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7898__$1)){
var image_7899 = temp__4425__auto___7898__$1;
var temp__4425__auto___7900__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7899.src,changed);
if(cljs.core.truth_(temp__4425__auto___7900__$2)){
var href_uri_7901 = temp__4425__auto___7900__$2;
image_7899.src = href_uri_7901.makeUnique().toString();
} else {
}
} else {
}

var G__7902 = cljs.core.next.call(null,seq__7882__$1);
var G__7903 = null;
var G__7904 = (0);
var G__7905 = (0);
seq__7882 = G__7902;
chunk__7883 = G__7903;
count__7884 = G__7904;
i__7885 = G__7905;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7908){
var map__7911 = p__7908;
var map__7911__$1 = ((((!((map__7911 == null)))?((((map__7911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7911):map__7911);
var on_jsload = cljs.core.get.call(null,map__7911__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7911,map__7911__$1,on_jsload){
return (function (p1__7906_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7906_SHARP_,".js");
});})(map__7911,map__7911__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7911,map__7911__$1,on_jsload){
return (function (p1__7907_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7907_SHARP_).makeUnique());
});})(js_files,map__7911,map__7911__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7911,map__7911__$1,on_jsload){
return (function() { 
var G__7913__delegate = function (_){
return on_jsload.call(null);
};
var G__7913 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7914__i = 0, G__7914__a = new Array(arguments.length -  0);
while (G__7914__i < G__7914__a.length) {G__7914__a[G__7914__i] = arguments[G__7914__i + 0]; ++G__7914__i;}
  _ = new cljs.core.IndexedSeq(G__7914__a,0);
} 
return G__7913__delegate.call(this,_);};
G__7913.cljs$lang$maxFixedArity = 0;
G__7913.cljs$lang$applyTo = (function (arglist__7915){
var _ = cljs.core.seq(arglist__7915);
return G__7913__delegate(_);
});
G__7913.cljs$core$IFn$_invoke$arity$variadic = G__7913__delegate;
return G__7913;
})()
;})(js_files,map__7911,map__7911__$1,on_jsload))
,((function (js_files,map__7911,map__7911__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7911,map__7911__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7920_7924 = cljs.core.seq.call(null,things_to_log);
var chunk__7921_7925 = null;
var count__7922_7926 = (0);
var i__7923_7927 = (0);
while(true){
if((i__7923_7927 < count__7922_7926)){
var t_7928 = cljs.core._nth.call(null,chunk__7921_7925,i__7923_7927);
console.log(t_7928);

var G__7929 = seq__7920_7924;
var G__7930 = chunk__7921_7925;
var G__7931 = count__7922_7926;
var G__7932 = (i__7923_7927 + (1));
seq__7920_7924 = G__7929;
chunk__7921_7925 = G__7930;
count__7922_7926 = G__7931;
i__7923_7927 = G__7932;
continue;
} else {
var temp__4425__auto___7933 = cljs.core.seq.call(null,seq__7920_7924);
if(temp__4425__auto___7933){
var seq__7920_7934__$1 = temp__4425__auto___7933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7920_7934__$1)){
var c__5804__auto___7935 = cljs.core.chunk_first.call(null,seq__7920_7934__$1);
var G__7936 = cljs.core.chunk_rest.call(null,seq__7920_7934__$1);
var G__7937 = c__5804__auto___7935;
var G__7938 = cljs.core.count.call(null,c__5804__auto___7935);
var G__7939 = (0);
seq__7920_7924 = G__7936;
chunk__7921_7925 = G__7937;
count__7922_7926 = G__7938;
i__7923_7927 = G__7939;
continue;
} else {
var t_7940 = cljs.core.first.call(null,seq__7920_7934__$1);
console.log(t_7940);

var G__7941 = cljs.core.next.call(null,seq__7920_7934__$1);
var G__7942 = null;
var G__7943 = (0);
var G__7944 = (0);
seq__7920_7924 = G__7941;
chunk__7921_7925 = G__7942;
count__7922_7926 = G__7943;
i__7923_7927 = G__7944;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7946 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7946,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7946);

adzerk.boot_reload.reload.reload_css.call(null,G__7946);

adzerk.boot_reload.reload.reload_img.call(null,G__7946);

return G__7946;
});

//# sourceMappingURL=reload.js.map