(window.webpackJsonp=window.webpackJsonp||[]).push([[83,4],{1306:function(e,t,n){"use strict";var a=n(4),o=n(0);n(101),n(51),n(20),n(34),n(35),n(23),n(53),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(580);var r=o(n(571));n(61);var i=o(n(62)),u=o(n(29)),l=o(n(30)),c=o(n(59)),s=o(n(32)),d=o(n(33)),f=o(n(31)),p=o(n(2));n(540);var m=o(n(539)),g=a(n(1)),h=n(52),v=n(561);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}m.default.Item;var _=function(e){(0,s.default)(a,e);var t,n=(t=a,function(){var e,n=(0,f.default)(t);if(y()){var a=(0,f.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function a(e){var t;return(0,u.default)(this,a),t=n.call(this,e),(0,p.default)((0,c.default)(t),"beforeUpload",(function(e,n){console.log(e,n);var a=(new Date).getTime();if(e.size>1048576)return i.default.error("上传文件过大（不能大于1M）"),!1;if(-1===e.type.indexOf("image"))return i.default.info("请上传图片文件"),!1;var o=e.type.split("/")[1];if(-1===["jpg","jpeg","png"].indexOf(o))return t.setState({fileList:[]}),i.default.error("该图片文件格式不支持（支持jpg、jpeg、png）"),!1;var r=t.props.param,u=(t.state.uploadParams,e.name.split(".").length);t.setState({uploadParams:{Filename:r.dir+"/"+a+"."+e.name.split(".")[u-1],key:r.dir+"/"+a+"."+e.name.split(".")[u-1],policy:r.policy,OSSAccessKeyId:r.accessid,success_action_status:"200",signature:r.signature},uploadAction:r.host}),t.props.getUrl&&t.props.getUrl(r.host+"/"+r.dir+"/"+a+"."+e.name.split(".")[u-1],e)})),(0,p.default)((0,c.default)(t),"handleUploadChange",(function(e){var n=e.file,a=e.fileList;console.log("wwwwwwwwww===============",n,a);var o=t.props.param;n.name.split(".").length;if("done"===n.status){var r=[];r.push(a.pop()),t.props.gupList(r),i.default.success(n.name+" 上传成功"),t.props.UploadCallback&&t.props.UploadCallback(n,o,t.state.uploadParams.Filename),t.props.UpCallback&&t.props.UpCallback(o.host+"/"+t.state.uploadParams.Filename)}})),t.state={uploadParams:{},uploadAction:""},t}return(0,l.default)(a,[{key:"componentDidMount",value:function(){this.props.gupfetch()}},{key:"render",value:function(){var e=this.state,t=e.uploadAction,n=e.uploadParams;return g.default.createElement(r.default,{headers:{"X-Requested-With":null},accept:"image",action:t,data:n,showUploadList:!1,beforeUpload:this.beforeUpload,onChange:this.handleUploadChange},this.props.children)}}]),a}(g.Component);var b=(0,h.connect)((function(e,t){return{param:e.uploadParam.param}}),(function(e){return{gupfetch:function(t,n){return e((0,v.gupfetch)(t,n))},gupList:function(t,n){return e((0,v.gupList)(t,n))}}}))(_);t.default=b},1907:function(e,t,n){"use strict";var a=n(4),o=n(0);n(68),n(20),n(34),n(35),n(23),n(71),n(234),n(229),n(53),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(224);var r=o(n(225));n(598);var i=o(n(768));n(99);var u=o(n(100));n(140);var l=o(n(535));n(61);var c=o(n(62)),s=o(n(29)),d=o(n(30)),f=o(n(59)),p=o(n(32)),m=o(n(33)),g=o(n(31)),h=o(n(2));n(537);var v=o(n(536)),y=a(n(1)),_=n(52),b=n(232),w=(o(n(993)),o(n(1306))),k=o(n(1908));function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var U=v.default.Search,S=function(e){(0,p.default)(a,e);var t,n=(t=a,function(){var e,n=(0,g.default)(t);if(P()){var a=(0,g.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,m.default)(this,e)});function a(e){var t;return(0,s.default)(this,a),t=n.call(this,e),(0,h.default)((0,f.default)(t),"onChangeLoginNameDesc",(function(e){t.setState({loginName:e.target.value})})),(0,h.default)((0,f.default)(t),"onChangeLoginPwdDesc",(function(e){t.setState({loginPwd:e.target.value})})),(0,h.default)((0,f.default)(t),"beforeUpload",(function(e){if(e.length>1){c.default.error("只能上传一个背景图");for(var n=uploader.uploader.files.length,a=0;a<n;a++)uploader.uploader.removeFile(uploader.uploader.files[0].id)}else{t.setState({uploadProgress:!0});var o=(0,f.default)(t);t.props.AddBannerUploadPolicy((function(e){var t=JSON.parse(e.data);o.setState({imgUrl:t.host+"/"+t.dir+"/"+uploader.fileName},(function(){uploader.uploadFile(t)}))}))}})),(0,h.default)((0,f.default)(t),"progress",(function(e){t.setState({uploadPercent:e.percent})})),(0,h.default)((0,f.default)(t),"completeUpload",(function(e){if(200==e.status){t.setState({uploadProgress:!1}),c.default.success("上传成功");(0,f.default)(t);t.props.loginConfigUpdate({terminalId:history.state.state.id,bgimgPath:t.state.imgUrl,type:"1"})}})),(0,h.default)((0,f.default)(t),"getUrl",(function(e){t.setState({imgUrl:e}),t.props.loginConfigUpdate({terminalId:history.state.state.id,bgimgPath:e,type:"1"})})),(0,h.default)((0,f.default)(t),"UpCallback",(function(e){t.setState({imgUrl:e})})),(0,h.default)((0,f.default)(t),"funLocationParam",(function(e,t){if(e&&t){var n=e.split("?")[1].replace("{","").replace("}","");if(n.includes("&")){for(var a=n.split("&"),o=0;o<a.length;o++)if(a[o].includes(t+":"))return a[o].split(t+":")[1]}else if(n.includes(t+":"))return n.split(t+":")[1]}})),t.state={uploadProgress:!1,uploadPercent:0,imgUrl:"",loginName:"",loginPwd:""},t}return(0,d.default)(a,[{key:"componentDidMount",value:function(){this.props.loginConfig(history.state.state.id)}},{key:"render",value:function(){var e=this,t=this.props.loginInfo,n=t.bgimgPath,a=void 0===n?"":n,o=t.loginNameDesc,s=void 0===o?"":o,d=t.loginPwdDesc,f=void 0===d?"":d,p=this.state,m=p.loginName,g=p.loginPwd;return y.default.createElement("div",{className:k.default.mobileConfig2},y.default.createElement("div",{style:{textAlign:"center"}},"图片最佳尺寸：1125*1809 "),y.default.createElement("div",{className:k.default.mobileContainer,id:"container",style:{backgroundImage:"url('".concat(a,"')"),marginTop:15,backgroundSize:"cover",backgroundPosition:"center"}},y.default.createElement("div",{style:{display:"inline"}},y.default.createElement(w.default,{getUrl:this.getUrl,UpCallback:this.UpCallback},y.default.createElement(l.default,{type:"primary"},"更换背景图"))),y.default.createElement(l.default,{style:{display:"inline-block",marginLeft:"20px"},onClick:function(){e.props.loginConfigUpdate({terminalId:history.state.state.id,bgimgPath:"https://fulan-test.oss-cn-hangzhou.aliyuncs.com/test/o_1d7c0ki711l2pbh6kjqbedo127.png",type:"1"})},type:"primary"},"使用默认图片"),y.default.createElement("div",{style:{marginTop:"200px"}},y.default.createElement(U,{placeholder:s||"配置用户名提示语",prefix:y.default.createElement(u.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),value:m,onChange:this.onChangeLoginNameDesc,enterButton:"配置",maxLength:20,onSearch:function(t){e.props.loginConfigUpdate({terminalId:e.funLocationParam(location.search,"id"),loginNameDesc:t,type:"2"},(function(e){return 1e3==+e.code?c.default.success("配置成功"):c.default.error(e.subMsg)}))}})),y.default.createElement("div",{style:{marginTop:"20px"}},y.default.createElement(U,{placeholder:f||"配置密码提示语",prefix:y.default.createElement(u.default,{type:"key",style:{color:"rgba(0,0,0,.25)"}}),value:g,onChange:this.onChangeLoginPwdDesc,enterButton:"配置",onSearch:function(t){e.props.loginConfigUpdate({terminalId:e.funLocationParam(location.search,"id"),loginPwdDesc:t,type:"3"},(function(e){return 1e3==+e.code?c.default.success("配置成功"):c.default.error(e.subMsg)}))}}))),y.default.createElement(r.default,{title:"上传进度",visible:this.state.uploadProgress,footer:null},y.default.createElement(i.default,{percent:this.state.uploadPercent})))}}]),a}(y.Component);var C=(0,_.connect)((function(e,t){return{loginInfo:e.door.loginInfo}}),(function(e){return{loginConfig:function(t){return e((0,b.loginConfig)(t))},loginConfigUpdate:function(t,n){return e((0,b.loginConfigUpdate)(t,n))},AddBannerUploadPolicy:function(t,n){return e((0,b.AddBannerUploadPolicy)(t,n))}}}))(S);t.default=C},1908:function(e,t,n){e.exports={mobileConfig2:"mobileConfig2__2EkzK",mobileContainer:"mobileContainer__2JWff","mobile-banner":"mobile-banner__WmQLy","mobile-classify":"mobile-classify__2QUU0","classify-item":"classify-item__2JcAY","classify-add":"classify-add__1we10","classify-icon":"classify-icon__2Ng_5","classify-mask":"classify-mask__YT7Z1","mobile-announcement":"mobile-announcement__3rxr2","drag-text":"drag-text__3vdPr","ant-carousel":"ant-carousel__3F_r2","slick-slide":"slick-slide__1H8wg","slick-dots":"slick-dots__2Jdo1",bannerList:"bannerList__37rlW",bannerImg:"bannerImg__3oq6N",noticeBar:"noticeBar__2yWHP","notice-list":"notice-list__15zpc",ModalButton:"ModalButton__3P7qZ","featured-topics-mask":"featured-topics-mask__3bz-T","featured-topics-add":"featured-topics-add__3buPK","module-box":"module-box__3Lr1e","module-title":"module-title__3nnXc","module-icon":"module-icon__3ijR5","module-name":"module-name__2wxpi","module-more":"module-more__3EvZL","module-mask":"module-mask__UDv1c","module-edit":"module-edit__1cET9","module-add":"module-add__2hBWZ","module-edit-icon":"module-edit-icon__3XPif"}},535:function(e,t,n){e.exports=n(11)(70)},536:function(e,t,n){e.exports=n(11)(166)},537:function(e,t,n){"use strict";n.r(t);n(26),n(586),n(140)},539:function(e,t,n){e.exports=n(11)(821)},540:function(e,t,n){"use strict";n.r(t);n(26),n(577),n(584)},561:function(e,t,n){"use strict";var a=n(4),o=n(0);n(44),Object.defineProperty(t,"__esModule",{value:!0}),t.gupList=function(e){return function(t){t({type:u.GET_UPLOAD_LIST,data:e})}},t.gupfetch=function(e,t){var n,a=!1,o=!1;e?(a=e.needTranscode,o=e.type,n="".concat(c,"/upload/policy?needTranscode=").concat(a,"&type=").concat(o,"&date=").concat(new Date)):n="".concat(c,"/upload/policy?date=").concat(new Date);return function(e){return(0,r.default)({url:n}).then((function(n){if("1000"===n.code){var a=JSON.parse(n.data);e({type:u.GET_UPLOAD_PARAM,data:a}),t&&t()}return n}))}},t.upvideo=function(e,t,n){return function(n){return(0,r.default)({videoUpload:s,data:e}).then((function(e){console.log(e.data),"1000"===e.code&&(n({type:u.UP_INFO,data:JSON.parse(e.data)}),t&&t())}))}},t.videoInfo=function(e,t){return function(n){return(0,r.default)({videoPlay:d,data:e}).then((function(e){console.log(e.data),"1000"===e.code&&(n({type:u.VIDEO_INFO,data:e.data}),t&&t())}))}},t.UploadUtilFile=function(e){return{type:u.GET_FILE_NAME_ADDRESS,fileAddress:e}},t.clearUpload=function(){return function(e){e({type:u.CLEARUPLOAD})}};var r=o(n(78)),i=o(n(587)),u=a(n(231)),l=i.default.common,c=l.ossUrl,s=l.videoUpload,d=l.videoPlay},571:function(e,t,n){e.exports=n(11)(912)},577:function(e,t,n){},580:function(e,t,n){"use strict";n.r(t);n(26),n(625),n(598),n(144)},586:function(e,t,n){},587:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(63)),r={common:{ossUrl:"GET ".concat(o.default.ossUrl),videoUpload:"POST ".concat(o.default.ossUrl,"/video/upload"),videoPlay:"GET ".concat(o.default.ossUrl,"/video/play"),ossPolicy:"GET ".concat(o.default.ossUrl,"/upload/policy")}};t.default=r},598:function(e,t,n){"use strict";n.r(t);n(26),n(626)},625:function(e,t,n){},626:function(e,t,n){},768:function(e,t,n){e.exports=n(11)(416)},993:function(e,t,n){"use strict";var a=n(0);n(3),n(68),n(101),n(35),n(71),n(53),n(224);var o=a(n(225)),r=a(n(223)),i=o.default.confirm,u={companyCode:location.pathname.split("/")[1],siteCode:location.pathname.split("/")[2],getStatus:function(e,t){switch("string"==typeof t&&(t=parseInt(t)),e){case"homework":return u.homeworkStatus(t);case"readover":return u.readoverStatus(t);case"questionBank":return u.questionBankStatus(t);case"question":return u.questionStatus(t);case"paper":return u.paperStatus(t);case"door":return u.doorStatus(t)}},getType:function(e,t){switch(e){case"question":return u.questionType(t)}},homeworkStatus:function(e){switch(e){case 1:return"草稿";case 2:return"已上架";case 3:return"已下架"}},readoverStatus:function(e){switch(e){case 1:return"待评阅";case 2:return"已阅"}},questionBankStatus:function(e){switch(e){case 0:return"未使用";case 1:return"使用中"}},questionStatus:function(e){return e>0?"使用中":""},questionType:function(e){switch(e){case 1:return"单选题";case 2:return"多选题";case 3:return"判断题";case 4:return"问答题";default:return"一般题"}},paperStatus:function(e){switch(e){case 0:return"待阅卷";case 1:return"已阅卷"}},doorStatus:function(e){switch(e){case 0:return"未发布";case 1:return"已生效"}},paginationConfig:function(e,t){return t?{current:t,defaultCurrent:1,defaultPageSize:20,showTotal:function(e){return"共计 ".concat(e," 条")},pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,onChange:e,onShowSizeChange:e}:{defaultCurrent:1,defaultPageSize:20,showTotal:function(e){return"共计 ".concat(e," 条")},pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,onChange:e,onShowSizeChange:e}},formateTime:function(e){var t="";if(e){var n=new Date(parseInt(e));t+=n.getFullYear()+"-"+u.double(n.getMonth()+1)+"-"+u.double(n.getDate())+" "+u.double(n.getHours())+":"+u.double(n.getMinutes())}return t},formateTimeForJingxuan:function(e){var t="";if(e){var n=new Date(parseInt(e));t+=n.getFullYear()+"-"+u.double(n.getMonth()+1)+"-"+u.double(n.getDate())+" "+u.double(n.getHours())+":"+u.double(n.getMinutes())+":"+u.double(n.getSeconds())}return t},double:function(e){return e>=10?e:"0"+e},confirm:function(e,t){i({title:e,content:"",onOk:function(){t&&t()},onCancel:function(){}})},getUrlParam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=[],a="";if(e.length>0){n=-1==e.indexOf("&&")?e.split("?")[1].split("&"):e.split("?")[1].split("&&");for(var o=0;o<n.length;o++)if(-1!=n[o].indexOf(t+"=")){a=n[o].split("=")[1];break}}return a},treeDataFormate:function(e){var t=[];t=e.filter((function(e,t){return"0"==e.parentId}));for(var n=function(n){if((o=e.filter((function(e,a){return e.parentId==t[n].id}))).length>0){for(var a=0;a<o.length;a++)o[a].key=n+1+"-"+(a+1),o[a].code=n+1+"-"+(a+1),o[a].dkeys=n+1;t[n].children=o}t[n].key=n+1,t[n].code=n+1},a=0;a<t.length;a++){var o;n(a)}return t},getRouterBefore:function(){var e=location.pathname;return"/"+e.split("/")[1]+"/"+e.split("/")[2]},getRouterDetail:function(){var e=location.pathname;return"/"+e.split("/")[3]+"/"+e.split("/")[4]},quitLogin:function(e){Storage.sessionRemove("token"),setTimeout((function(){e&&e()}),500)},getWechatOrigin:function(e){return e.includes("dev.mg.kme")?e.split("://")[0]+"://dev.wechat.kmelearning.com":e.includes("test.mg.kme")?e.split("://")[0]+"://test.wechat.kmelearning.com":e.includes("uat.mg.kme")?e.split("://")[0]+"://uat.wechat.kmelearning.com":e.includes("//mg.kme")?e.split("://")[0]+"://wechat.kmelearning.com":void 0},disabledDate:function(e){return e&&e<(0,r.default)().endOf("day").subtract(1,"days")},secondToFormat:function(e){var t=0,n=0,a=0;return e>=0?(a=e%60,e>=60&&(n=(e-a)/60%60),e>=3600&&(t=(e-a-60*n)/60/60),u.doubleNum(t,n,a)):"00:00:00"},doubleNum:function(e,t,n){return e<10&&(e="0"+e),t<10&&(t="0"+t),n<10&&(n="0"+n),e+":"+t+":"+n},getRandomStr:function(e,t){for(var n="",a=0;a<e;a++)1==Math.floor(2*Math.random())?n+="0123456789"[Math.floor(10*Math.random())]:n+="abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())];return t?n:n+(new Date).getTime()}};e.exports=u}}]);