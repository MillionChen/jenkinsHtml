(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1821:function(e,t,n){"use strict";var a=n(4),r=n(0);n(44),n(43),n(20),n(34),n(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(549);var i=r(n(544)),o=r(n(29)),u=r(n(30)),c=r(n(59)),s=r(n(32)),l=r(n(33)),d=r(n(31)),f=a(n(1)),p=n(65),g=r(n(1822)),h=n(52),m=n(232),S=r(n(993)),y=r(n(226));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(e){(0,s.default)(a,e);var t,n=(t=a,function(){var e,n=(0,d.default)(t);if(v()){var a=(0,d.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.default)(this,e)});function a(e){var t;return(0,o.default)(this,a),(t=n.call(this,e)).columns=[{title:"终端",key:"site",dataIndex:"site",align:"left"},{title:"操作人",key:"operation",dataIndex:"operation",align:"left"},{title:"最后操作日期",key:"lastTime",dataIndex:"lastTime",align:"left"},{title:"状态",key:"status",dataIndex:"status",align:"left"},{title:"操作",key:"action",align:"left",dataIndex:"action",render:function(e,n){return f.default.createElement("div",{className:g.default.doorOpt},0==e.state?f.default.createElement("a",{onClick:function(){return t.changeSiteStatus("on",e.id)}},"发布"):f.default.createElement("a",{onClick:function(){return t.changeSiteStatus("off",e.id)}},"取消发布"),f.default.createElement(p.Link,{to:{pathname:"/"+S.default.companyCode+"/"+S.default.siteCode+(1!==n.action.type?"/index/manager/site/door/previewindexpage":"/index/manager/site/door/pcIndex"),state:{id:e.id,type:e.type,lookState:!0},search:"?id=".concat(e.id,"&type=").concat(e.type,"&lookState=true")}},"预览"),f.default.createElement(p.Link,{to:{pathname:"/"+S.default.companyCode+"/"+S.default.siteCode+(1!==n.action.type?"/index/manager/site/door/indexpage":"/index/manager/site/door/pcIndex"),search:"?{id:".concat(e.id,"&type:").concat(e.type,"}"),state:{id:e.id,type:e.type}}},"配置首页"),f.default.createElement(p.Link,{to:{pathname:"/"+S.default.companyCode+"/"+S.default.siteCode+(1!==n.action.type?"/index/manager/site/door/loginpage":"/index/manager/site/door/pcLogin"),search:"?{id:".concat(e.id,"&type:").concat(e.type,"}"),state:{id:e.id,type:e.type}}},"配置登录页"))}}],t.changeSiteStatus=t.changeSiteStatus.bind((0,c.default)(t)),t.refreshSiteList=t.refreshSiteList.bind((0,c.default)(t)),t}return(0,u.default)(a,[{key:"componentDidMount",value:function(){this.props.getSiteList()}},{key:"changeSiteStatus",value:function(e,t){var n=this;"on"==e?this.props.releaseSite({id:t},(function(){n.refreshSiteList()})):this.props.unReleaseSite({id:t},(function(){n.refreshSiteList()}))}},{key:"refreshSiteList",value:function(){this.props.getSiteList()}},{key:"render",value:function(){var e=this.props,t=e.list,n=void 0===t?[]:t,a=e.fetching,r=[];return n.length>0&&(r=n.map((function(e,t){return{key:t,site:e.terminalName,operation:e.updateByName,lastTime:S.default.formateTime(e.updateTime),status:S.default.getStatus("door",e.state),action:e}}))),f.default.createElement("div",null,f.default.createElement(y.default,{title:"门户管理"}),f.default.createElement(i.default,{dataSource:r,columns:this.columns,loading:a,pagination:!1}))}}]),a}(f.Component);var w=(0,h.connect)((function(e,t){return{list:e.door.list,fetching:e.door.fetching}}),(function(e){return{getSiteList:function(t){return e((0,m.getSiteList)(t))},releaseSite:function(t,n){return e((0,m.releaseSite)(t,n))},unReleaseSite:function(t,n){return e((0,m.unReleaseSite)(t,n))}}}))(k);t.default=w},1822:function(e,t,n){e.exports={doorOpt:"doorOpt__1GTgP"}},544:function(e,t,n){e.exports=n(11)(846)},993:function(e,t,n){"use strict";var a=n(0);n(3),n(82),n(101),n(35),n(84),n(53),n(224);var r=a(n(225)),i=a(n(223)),o=r.default.confirm,u={companyCode:location.pathname.split("/")[1],siteCode:location.pathname.split("/")[2],getStatus:function(e,t){switch("string"==typeof t&&(t=parseInt(t)),e){case"homework":return u.homeworkStatus(t);case"readover":return u.readoverStatus(t);case"questionBank":return u.questionBankStatus(t);case"question":return u.questionStatus(t);case"paper":return u.paperStatus(t);case"door":return u.doorStatus(t)}},getType:function(e,t){switch(e){case"question":return u.questionType(t)}},homeworkStatus:function(e){switch(e){case 1:return"草稿";case 2:return"已上架";case 3:return"已下架"}},readoverStatus:function(e){switch(e){case 1:return"待评阅";case 2:return"已阅"}},questionBankStatus:function(e){switch(e){case 0:return"未使用";case 1:return"使用中"}},questionStatus:function(e){return e>0?"使用中":""},questionType:function(e){switch(e){case 1:return"单选题";case 2:return"多选题";case 3:return"判断题";case 4:return"问答题";default:return"一般题"}},paperStatus:function(e){switch(e){case 0:return"待阅卷";case 1:return"已阅卷"}},doorStatus:function(e){switch(e){case 0:return"未发布";case 1:return"已生效"}},paginationConfig:function(e,t){return t?{current:t,defaultCurrent:1,defaultPageSize:20,showTotal:function(e){return"共计 ".concat(e," 条")},pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,onChange:e,onShowSizeChange:e}:{defaultCurrent:1,defaultPageSize:20,showTotal:function(e){return"共计 ".concat(e," 条")},pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,onChange:e,onShowSizeChange:e}},formateTime:function(e){var t="";if(e){var n=new Date(parseInt(e));t+=n.getFullYear()+"-"+u.double(n.getMonth()+1)+"-"+u.double(n.getDate())+" "+u.double(n.getHours())+":"+u.double(n.getMinutes())}return t},formateTimeForJingxuan:function(e){var t="";if(e){var n=new Date(parseInt(e));t+=n.getFullYear()+"-"+u.double(n.getMonth()+1)+"-"+u.double(n.getDate())+" "+u.double(n.getHours())+":"+u.double(n.getMinutes())+":"+u.double(n.getSeconds())}return t},double:function(e){return e>=10?e:"0"+e},confirm:function(e,t){o({title:e,content:"",onOk:function(){t&&t()},onCancel:function(){}})},getUrlParam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=[],a="";if(e.length>0){n=-1==e.indexOf("&&")?e.split("?")[1].split("&"):e.split("?")[1].split("&&");for(var r=0;r<n.length;r++)if(-1!=n[r].indexOf(t+"=")){a=n[r].split("=")[1];break}}return a},treeDataFormate:function(e){var t=[];t=e.filter((function(e,t){return"0"==e.parentId}));for(var n=function(n){if((r=e.filter((function(e,a){return e.parentId==t[n].id}))).length>0){for(var a=0;a<r.length;a++)r[a].key=n+1+"-"+(a+1),r[a].code=n+1+"-"+(a+1),r[a].dkeys=n+1;t[n].children=r}t[n].key=n+1,t[n].code=n+1},a=0;a<t.length;a++){var r;n(a)}return t},getRouterBefore:function(){var e=location.pathname;return"/"+e.split("/")[1]+"/"+e.split("/")[2]},getRouterDetail:function(){var e=location.pathname;return"/"+e.split("/")[3]+"/"+e.split("/")[4]},quitLogin:function(e){Storage.sessionRemove("token"),setTimeout((function(){e&&e()}),500)},getWechatOrigin:function(e){return e.includes("dev.mg.kme")?e.split("://")[0]+"://dev.wechat.kmelearning.com":e.includes("test.mg.kme")?e.split("://")[0]+"://test.wechat.kmelearning.com":e.includes("uat.mg.kme")?e.split("://")[0]+"://uat.wechat.kmelearning.com":e.includes("//mg.kme")?e.split("://")[0]+"://wechat.kmelearning.com":void 0},disabledDate:function(e){return e&&e<(0,i.default)().endOf("day").subtract(1,"days")},secondToFormat:function(e){var t=0,n=0,a=0;return e>=0?(a=e%60,e>=60&&(n=(e-a)/60%60),e>=3600&&(t=(e-a-60*n)/60/60),u.doubleNum(t,n,a)):"00:00:00"},doubleNum:function(e,t,n){return e<10&&(e="0"+e),t<10&&(t="0"+t),n<10&&(n="0"+n),e+":"+t+":"+n},getRandomStr:function(e,t){for(var n="",a=0;a<e;a++)1==Math.floor(2*Math.random())?n+="0123456789"[Math.floor(10*Math.random())]:n+="abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())];return t?n:n+(new Date).getTime()}};e.exports=u}}]);