(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1019:function(e,t,n){"use strict";var a=n(4),r=n(0);n(7),n(3),n(5),n(51),n(9),n(10),n(8),n(6),Object.defineProperty(t,"__esModule",{value:!0}),t.downComment=t.upComment=t.downloadComment=t.deleteComment=t.getReplyList=t.getCommentList=t.searchAlbumList=t.exportCourse=t.saveAlbumStrategy=t.setAlbumViewRange=t.getAlbumRange=t.saveActivityList=t.getCourseList=t.getThemeList=t.getAlbumInfo=t.saveAlbumBasicInfo=t.deleteAlbum=t.downAlbum=t.upAlbum=t.publishAlbum=t.getSortList=t.getAlbumList=void 0;var u=r(n(2));n(61);var l=r(n(62)),o=r(n(76)),c=r(n(1350)),i=a(n(263));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=c.default.albumManagement,m=f.albumListUrl,b=f.classifyListUrl,g=f.albumUpUrl,p=f.albumDownUrl,h=f.albumDeleteUrl,U=f.albumSaveUrl,y=f.albumGetUrl,M=f.activityListUrl,T=f.courseListUrl,v=f.activitySaveUrl,w=f.albumVisibleRangeUrl,L=f.VisibleRangeInsertUrl,E=f.albumExportUrl,A=f.albumUpdateUrl,O=f.albumSearchUrl,S=f.commentListUrl,G=f.replyListUrl,I=f.commentExportUrl,C=f.commentDeleteUrl,P=f.commentDownUrl,x=f.commentUpUrl,R=function(e,t){return function(n){return(0,o.default)({url:m,data:e}).then((function(e){n({type:i.GET_ALBUM_LIST,data:{list:e.data.records,total:e.data.total}}),t&&t(e)}))}};t.getAlbumList=R;t.getSortList=function(e,t){return function(n){return(0,o.default)({url:b,data:e}).then((function(e){if(1e3==e.code){for(var a=e.data,r=[],u=0;u<a.length;u++)1===a[u].layer&&r.push({label:a[u].name,title:a[u].name,value:a[u].id,id:a[u].id,key:"A"+u,code:a[u].code,name:a[u].name,level:"一级分类",createTime:a[u].createTime}),2===a[u].layer&&("children"in r[r.length-1]||(r[r.length-1].children=[]),r[r.length-1].children.push({label:a[u].name,title:a[u].name,value:a[u].id,id:a[u].id,key:"B"+u,code:a[u].code,name:a[u].name,level:"二级分类",createTime:a[u].createTime})),3===a[u].layer&&("children"in r[r.length-1].children[r[r.length-1].children.length-1]||(r[r.length-1].children[r[r.length-1].children.length-1].children=[]),r[r.length-1].children[r[r.length-1].children.length-1].children.push({label:a[u].name,title:a[u].name,value:a[u].id,id:a[u].id,key:""+u,code:a[u].code,name:a[u].name,level:"三级分类",createTime:a[u].createTime}));n({type:i.GET_SORT_LIST,data:r}),t&&t(e)}else l.default.error(e.subMsg)}))}};t.publishAlbum=function(e,t){return function(n){return(0,o.default)({url:g,data:e}).then((function(e){1e3==e.code?t&&t(e):l.default.error(e.subMsg)}))}};t.upAlbum=function(e,t){return function(n){return(0,o.default)({url:g,data:e}).then((function(e){1e3==e.code?n(R(t)):l.default.error(e.subMsg)}))}};t.downAlbum=function(e,t){return function(n){return(0,o.default)({url:p,data:{id:e}}).then((function(e){1e3==e.code?n(R(t)):l.default.error(e.subMsg)}))}};t.deleteAlbum=function(e,t,n){return function(a){return(0,o.default)({url:h,data:e}).then((function(e){1e3==e.code?(a(R(t)),n&&n()):l.default.error(e.subMsg)}))}};t.saveAlbumBasicInfo=function(e,t){return function(n){return(0,o.default)({url:U,data:e}).then((function(e){"1000"==e.code?n({type:i.ALBUMBASICINFO,data:e.data}):l.default.error(e.subMsg),t&&t(e)}))}};t.getAlbumInfo=function(e,t){return function(n){return(0,o.default)({url:y,data:{id:e}}).then((function(e){"1000"==e.code?(n({type:i.ALBUMINFO,data:e.data}),t&&t(e)):l.default.error(e.subMsg)}))}};t.getThemeList=function(e,t){return function(n){return(0,o.default)({url:M,data:{albumId:e}}).then((function(e){"1000"==e.code?(n({type:i.THEMELIST,data:e.data}),t&&t(e)):l.default.error(e.subMsg)}))}};t.getCourseList=function(e,t){return function(n){return(0,o.default)({url:T,data:e}).then((function(e){"1000"==e.code?(n({type:i.GETALBUMCOURSELIST,data:{list:e.data.records,total:e.data.total}}),t&&t(e)):l.default.error(e.subMsg)}))}};t.saveActivityList=function(e,t){return function(n){return(0,o.default)({url:v,data:e}).then((function(e){"1000"==e.code?t&&t(e):l.default.error(e.subMsg)}))}};t.getAlbumRange=function(e,t){return function(n){return(0,o.default)({url:w,data:{albumId:e}}).then((function(e){"1000"==e.code?(n({type:i.GETALBUMVISIBLE,data:e.data}),t&&t(e)):l.default.error(e.subMsg)}))}};t.setAlbumViewRange=function(e,t){return function(n){return(0,o.default)({url:L,data:e}).then((function(e){"1000"==e.code?t&&t(e):l.default.error(e.subMsg)}))}};t.saveAlbumStrategy=function(e,t){return function(n){return(0,o.default)({url:A,data:e}).then((function(e){"1000"==e.code?t&&t(e):l.default.error(e.subMsg)}))}};t.exportCourse=function(e,t){return function(n){return(0,o.default)({url:E,data:e}).then((function(e){"1000"==e.code?t&&t(e):l.default.error(e.subMsg)}))}};t.searchAlbumList=function(e,t){return function(n){return(0,o.default)({url:O,data:e}).then((function(e){"1000"==e.code?t&&t(e):l.default.error(e.subMsg)}))}};var j=function(e,t){return function(t){return(0,o.default)({url:S,data:e}).then((function(n){if(1e3==n.code){for(var a=[],r=0;r<n.data.records.length;r++){var u=s({},n.data.records[r],{key:e.pageSize*(e.pageNo-1)+(r+1)});n.data.records[r].replys>0&&(u.children=[],u.index=r),a.push(u)}console.log(a),t({type:i.GET_COMMENT_LIST,data:{list:a,listTotal:n.data.total}})}else l.default.error(n.subMsg)}))}};t.getCommentList=j;t.getReplyList=function(e,t){return function(n){return(0,o.default)({url:G,data:e}).then((function(a){if(1e3==a.code){console.log(a.data.records);for(var r=[],u=0;u<a.data.records.length;u++)r.push({commentId:e.bizId,id:a.data.records[u].id,commentator:a.data.records[u].commentator,content:a.data.records[u].content,createTime:a.data.records[u].createTime,flag:"reply",replyName:a.data.records[u].replyName,state:a.data.records[u].state,commentatorName:a.data.records[u].commentatorName});n({type:i.GET_REPLY_LIST,data:{children:r,commentId:e.bizId}}),t&&t(a)}else l.default.error(a.subMsg)}))}};t.deleteComment=function(e,t){return function(n){return(0,o.default)({url:C,data:e}).then((function(e){1e3==e.code?n(j(t)):l.default.error(e.subMsg)}))}};t.downloadComment=function(e,t){return function(t){return(0,o.default)({url:I,data:e}).then((function(e){"1000"==e.code?l.default.success(e.data):l.default.error(e.subMsg)}))}};t.upComment=function(e,t){return function(n){return(0,o.default)({url:x,data:e}).then((function(e){1e3==e.code?t&&t(e):l.default.error(e.subMsg)}))}};t.downComment=function(e,t){return function(n){return(0,o.default)({url:P,data:e}).then((function(e){1e3==e.code?t&&t(e):l.default.error(e.subMsg)}))}}},1350:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(63)),u={albumManagement:{albumListUrl:"GET ".concat(r.default.webManage,"/album/list"),classifyListUrl:"GET ".concat(r.default.webManage,"/album/classify/list"),albumUpUrl:"GET ".concat(r.default.webManage,"/album/up"),albumDownUrl:"GET ".concat(r.default.webManage,"/album/down"),albumDeleteUrl:"POST ".concat(r.default.webManage,"/album/delete"),albumSaveUrl:"POST ".concat(r.default.webManage,"/album/save"),albumGetUrl:"GET ".concat(r.default.webManage,"/album/get"),activityListUrl:"GET ".concat(r.default.webManage,"/album/activity/list"),courseListUrl:"GET ".concat(r.default.webManage,"/course/list"),activitySaveUrl:"POST ".concat(r.default.webManage,"/album/activity/save"),albumVisibleRangeUrl:"GET ".concat(r.default.webManage,"/album/VisibleRange"),VisibleRangeInsertUrl:"POST ".concat(r.default.webManage,"/album/authorize/insert"),albumUpdateUrl:"POST ".concat(r.default.webManage,"/album/update"),albumExportUrl:"GET ".concat(r.default.webManage,"/album/list/export"),albumSearchUrl:"GET ".concat(r.default.webManage,"/album/list/search"),commentListUrl:"GET ".concat(r.default.comment,"/manage/list"),replyListUrl:"GET ".concat(r.default.comment,"/manage/reply/list"),commentExportUrl:"GET ".concat(r.default.comment,"/manage/list/export"),commentDeleteUrl:"POST ".concat(r.default.comment,"/manage/deleteComment"),commentUpUrl:"GET ".concat(r.default.comment,"/manage/up"),commentDownUrl:"GET ".concat(r.default.comment,"/manage/down")}};t.default=u},535:function(e,t,n){e.exports=n(11)(70)},536:function(e,t,n){e.exports=n(11)(166)},539:function(e,t,n){e.exports=n(11)(821)},540:function(e,t,n){"use strict";n.r(t);n(26),n(577),n(584)},544:function(e,t,n){e.exports=n(11)(846)},563:function(e,t,n){e.exports=n(11)(837)},564:function(e,t,n){"use strict";n.r(t);n(26),n(581),n(140)},577:function(e,t,n){},581:function(e,t,n){"use strict";n.r(t);n(26),n(585)},585:function(e,t,n){}}]);