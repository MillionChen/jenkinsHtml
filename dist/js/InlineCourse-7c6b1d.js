(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,r=(a=n(761))&&a.__esModule?a:{default:a},o=n(762);t.createSensor=function(e){var t=void 0,n=[],a=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),i=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",a),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(r){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",a),a()},t.setAttribute("style",o.SensorStyle),t.setAttribute("class",o.SensorClassName),t.setAttribute("tabindex",o.SensorTabIndex),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(r)&&n.push(r)},destroy:i,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&i()}}}},1001:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,r=(a=n(761))&&a.__esModule?a:{default:a};t.createSensor=function(e){var t=void 0,n=[],a=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),o=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(r){var o;t||((o=new ResizeObserver(a)).observe(e),a(),t=o),-1===n.indexOf(r)&&n.push(r)},destroy:o,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&o()}}}},1002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pick=function(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}},2283:function(e,t,n){"use strict";var a=n(4),r=n(0);n(43),n(51),n(620),n(20),n(34),n(35),n(23),n(53),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(2));n(224);var i=r(n(225));n(146);var s=r(n(150));n(569);var u=r(n(558));n(549);var l=r(n(544));n(537);var c=r(n(536));n(140);var f=r(n(535));n(61);var d=r(n(62)),p=r(n(29)),h=r(n(30)),v=r(n(32)),m=r(n(33)),g=r(n(31));n(554);var y=r(n(550));n(575);var b=r(n(568));n(592);var _=r(n(566)),S=a(n(1)),O=(n(636),r(n(825))),w=r(n(223)),E=a(n(2284)),C=n(52),D=r(n(2286)),I=r(n(226));function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){return function(){var t,n=(0,g.default)(e);if(P()){var a=(0,g.default)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,m.default)(this,t)}}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Y=_.default.RangePicker,k=(b.default.TabPane,y.default.Option,(new Date).getTime()),x=(0,w.default)(k).format("YYYY-MM-DD"),T=x.split("-").length,z=(0,w.default)(k).format("YYYY-MM")+"-01";if("01"===x.split("-")[T-1]){var L=(0,w.default)(k).format("YYYY-MM"),A=Number(L.split("-")[1]);A=A>10?String(A-1):"0"+String(A-1),z=(0,w.default)(k).format("YYYY")+"-"+A+"-01"}var R=(0,w.default)(k).endOf("day").subtract(0,"days").format("YYYY-MM-DD"),U=function(e){(0,v.default)(n,e);var t=j(n);function n(e){var a;return(0,p.default)(this,n),(a=t.call(this,e)).state={startDate:z,endDate:R,surlist:[],totalsur:1,pageNo:1,pageSize:10,title:[],arr:[],name:["学习人数"],bname:"",loading:!0},a}return(0,h.default)(n,[{key:"componentDidMount",value:function(){this.showlist()}},{key:"showlist",value:function(){var e=this;this.show();var t={startTime:this.state.startDate,endTime:this.state.endDate};this.props.getInlineCourseList(t,(function(t){if("1000"===t.code){var n=[],a=[];t.data.map((function(e,t){n.push(e.date),a.push(e.accountNum)})),e.setState({title:n,arr:a})}}))}},{key:"show",value:function(e){var t=this;if("query"===e){var n={startTime:this.state.startDate,endTime:this.state.endDate,name:this.state.bname,pageSize:this.state.pageSize,pageNo:this.state.pageNo};this.props.getInlineCourseDetail(n,(function(e){"1000"===e.code&&t.setState({surlist:e.data,totalsur:e.page.pageTotal,loading:!1})}))}else{var a={startTime:this.state.startDate,endTime:this.state.endDate,name:this.state.bname,pageSize:this.state.pageSize,pageNo:this.state.pageNo};this.props.getInlineCourseDetail(a,(function(e){"1000"===e.code&&t.setState({surlist:e.data,totalsur:e.page.pageTotal,loading:!1})}))}}},{key:"getOption",value:function(){return{xAxis:{type:"category",data:this.state.title},yAxis:{type:"value"},legend:{data:this.state.name},color:["blue"],tooltip:{show:!0},dataZoom:{show:!0,realtime:!0,x:120,height:20},series:[{name:this.state.name[0],data:this.state.arr,type:"line"}]}}},{key:"onChange",value:function(e,t){this.setState({startDate:t[0],endDate:t[1]})}},{key:"handlePageChange",value:function(e,t){var n=this;this.setState({pageNo:e},(function(){n.show()}))}},{key:"handlePageSizeChange",value:function(e,t){var n=this;this.setState({pageNo:e,pageSize:t},(function(){n.show()}))}},{key:"query",value:function(){this.show("query")}},{key:"down",value:function(){var e={startTime:this.state.startDate,endTime:this.state.endDate,name:this.state.bname};this.props.getInlineCourseDownload(e,(function(e){"1000"===e.code&&d.default.success(e.data)}))}},{key:"disabledDate",value:function(e){return e&&e>(0,w.default)().endOf("day").subtract(0,"days")}},{key:"showTotal",value:function(e){return"共计 ".concat(e," 条")}},{key:"render",value:function(){var e=this,t=this.state.surlist,n=Number(this.state.totalsur),a=[{title:"课程编码",dataIndex:"courseCode"},{title:"课程名称",dataIndex:"courseName"},{title:"学习人数",dataIndex:"accountNum"},{title:"创建时间",dataIndex:"createTime",render:function(e,t){return S.default.createElement("span",null,(0,w.default)(e).format("YYYY/MM/DD HH:mm:ss"))}},{title:"操作",dataIndex:"courseId",render:function(t,n){return S.default.createElement("a",{onClick:function(){return e.refs.show.showModal(t)}},"查看")}}];return S.default.createElement("div",{id:D.default.duser},S.default.createElement(I.default,{title:"线下课程统计"}),S.default.createElement("div",{className:D.default.user_head},S.default.createElement("span",{className:D.default.time_border},"时间段"),S.default.createElement(Y,{className:D.default.serch_time,format:"YYYY-MM-DD",defaultValue:[(0,w.default)(z,"YYYY-MM-DD"),(0,w.default)(R,"YYYY-MM-DD")],onChange:this.onChange.bind(this),disabledDate:this.disabledDate.bind(this)}),S.default.createElement(f.default,{style:{marginLeft:20},onClick:function(){return e.showlist()}},"查询")),S.default.createElement(O.default,{option:this.getOption(),notMerge:!0,lazyUpdate:!0,theme:"theme_name"}),S.default.createElement("div",{style:{padding:"15px"}},"编码/名称",S.default.createElement(c.default,{placeholder:"请输入课程编码或名称",className:D.default.dinput,onChange:function(t){return e.setState({bname:t.target.value})}}),S.default.createElement(f.default,{onClick:function(){return e.query()}},"查询"),S.default.createElement(f.default,{style:{marginLeft:"20px"},onClick:function(){return e.down()}},"下载")),S.default.createElement(s.default,{spinning:this.state.loading},S.default.createElement(l.default,{columns:a,dataSource:t,pagination:!1}),S.default.createElement(u.default,{showTotal:this.showTotal,className:D.default.survey_list_pagination,total:n,showQuickJumper:!0,onChange:this.handlePageChange.bind(this),showSizeChanger:!0,pageSizeOptions:["10","20","30"],onShowSizeChange:this.handlePageSizeChange.bind(this)}),S.default.createElement(q,{ref:"show",getInlineCourseWatchDetail:this.props.getInlineCourseWatchDetail})))}}]),n}(S.default.Component),q=function(e){(0,v.default)(n,e);var t=j(n);function n(e){var a;return(0,p.default)(this,n),(a=t.call(this,e)).state={visible:!1,pageNo:1,pageSize:10,surlist:[],offlineCourseId:""},a}return(0,h.default)(n,[{key:"showModal",value:function(e){var t=this;this.setState({visible:!0,offlineCourseId:e},(function(){t.show()}))}},{key:"show",value:function(){var e=this,t={pageNo:this.state.pageNo,pageSize:this.state.pageSize,offlineCourseId:this.state.offlineCourseId};this.props.getInlineCourseWatchDetail(t,(function(t){"1000"===t.code&&e.setState({surlist:t.data.records,totalsur:t.data.total})}))}},{key:"handleOk",value:function(e){this.setState({visible:!1})}},{key:"handleCancel",value:function(e){this.setState({visible:!1})}},{key:"handlePageChange",value:function(e,t){var n=this;this.setState({pageNo:e,pageSize:t},(function(){n.show()}))}},{key:"showTotal1",value:function(e){return"共计 ".concat(e," 条")}},{key:"render",value:function(){var e=[{title:"账号",dataIndex:"accountName"},{title:"状态",dataIndex:"status",render:function(e,t){return S.default.createElement("span",null,0===e?"未完成":"已完成")}},{title:"分数",dataIndex:"score"},{title:"积分",dataIndex:"integral"},{title:"开始时间",dataIndex:"startTime",render:function(e,t){return S.default.createElement("span",null,e?(0,w.default)(e).format("YYYY/MM/DD"):"")}},{title:"结束时间",dataIndex:"endTime",render:function(e,t){return S.default.createElement("span",null,e?(0,w.default)(e).format("YYYY/MM/DD"):"")}}];return S.default.createElement("div",null,S.default.createElement(i.default,{width:1e3,title:"",visible:this.state.visible,onOk:this.handleOk.bind(this),onCancel:this.handleCancel.bind(this),destroyOnClose:1},S.default.createElement(l.default,{columns:e,dataSource:this.state.surlist,pagination:!1}),S.default.createElement(u.default,{showTotal:this.showTotal1,className:"survey-list-paginations",total:this.state.totalsur,showQuickJumper:!0,onChange:this.handlePageChange.bind(this)})))}}]),n}(S.Component);var V=(0,C.connect)((function(e){return M({},e)}),M({},E.default))(U);t.default=V},2284:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(76)),o=a(n(2285)).default.onlineCourse,i=o.inlineCourseList,s=o.inlineCourseDetail,u=o.inlineCourseDownload,l=o.inlineCourseWatchDetail,c={getInlineCourseList:function(e,t){return function(n){return(0,r.default)({url:i,data:e}).then((function(e){t&&t(e)}))}},getInlineCourseDetail:function(e,t){return function(n){return(0,r.default)({url:s,data:e}).then((function(e){t&&t(e)}))}},getInlineCourseDownload:function(e,t){return function(n){return(0,r.default)({url:u,data:e}).then((function(e){t&&t(e)}))}},getInlineCourseWatchDetail:function(e,t){return function(n){return(0,r.default)({url:l,data:e}).then((function(e){t&&t(e)}))}}};t.default=c},2285:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(63)),o={onlineCourse:{inlineCourseList:"POST ".concat(r.default.webManage,"/offlineCourseReport/data/statistics"),inlineCourseDetail:"POST ".concat(r.default.webManage,"/offlineCourseReport/statistics/detail"),inlineCourseDownload:"POST ".concat(r.default.webManage,"/offlineCourse/download"),inlineCourseWatchDetail:"GET ".concat(r.default.webManage,"/offlineCourseReport/queryDetail/list")}};t.default=o},2286:function(e,t,n){e.exports={user_head:"user_head__4Y07t",serch_time:"serch_time__3bY1-",seach_type:"seach_type__1iiLs",duser:"duser__38_b3",seachresult:"seachresult__2Mk8C",dinput:"dinput__3xm6s",question:"question__3iwVI",survey_list_pagination:"survey_list_pagination__Nd-bO",survey_list_paginations:"survey_list_paginations__2w_D8",time_border:"time_border__2ePje",online_list_pagination:"online_list_pagination__LuH32"}},535:function(e,t,n){e.exports=n(11)(70)},536:function(e,t,n){e.exports=n(11)(166)},544:function(e,t,n){e.exports=n(11)(846)},550:function(e,t,n){e.exports=n(11)(94)},558:function(e,t,n){e.exports=n(11)(251)},566:function(e,t,n){e.exports=n(11)(817)},568:function(e,t,n){e.exports=n(11)(333)},575:function(e,t,n){"use strict";n.r(t);n(26),n(623)},620:function(e,t,n){"use strict";var a=n(19),r=n(16),o=n(85),i=n(36),s=n(21),u=n(45),l=n(153),c=n(81),f=n(14),d=n(66),p=n(78).f,h=n(49).f,v=n(22).f,m=n(236).trim,g=r.Number,y=g.prototype,b="Number"==u(d(y)),_=function(e){var t,n,a,r,o,i,s,u,l=c(e,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=m(l)).charCodeAt(0))||45===t){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=(o=l.slice(2)).length,s=0;s<i;s++)if((u=o.charCodeAt(s))<48||u>r)return NaN;return parseInt(o,a)}return+l};if(o("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(b?f((function(){y.valueOf.call(n)})):"Number"!=u(n))?l(new g(_(t)),n,O):_(t)},w=a?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)s(g,S=w[E])&&!s(O,S)&&v(O,S,h(g,S));O.prototype=y,y.constructor=O,i(r,"Number",O)}},623:function(e,t,n){},636:function(e,t,n){e.exports=n(46)(174)},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var a=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(a,o)}),t)}}},762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SensorTabIndex=t.SensorClassName=t.SensorStyle=t.SizeSensorId=void 0;t.SizeSensorId="size-sensor-id";t.SensorStyle="display:block;position:absolute;top:0;left:0;height:100%;width:auto;overflow:hidden;pointer-events:none;z-index:-1;opacity:0";t.SensorClassName="size-sensor-object";t.SensorTabIndex="-1"},825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(904));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.echartsLib=a.default,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r(n(994)).default);t.default=o},904:function(e,t,n){e.exports=n(525)(1549)},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),i=f(o),s=f(n(60)),u=f(n(995)),l=n(996),c=n(1002);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getEchartsInstance=function(){return n.echartsLib.getInstanceByDom(n.echartsElement)||n.echartsLib.init(n.echartsElement,n.props.theme,n.props.opts)},n.dispose=function(){if(n.echartsElement){try{(0,l.clear)(n.echartsElement)}catch(e){console.warn(e)}n.echartsLib.dispose(n.echartsElement)}},n.rerender=function(){var e=n.props,t=e.onEvents,a=e.onChartReady,r=n.renderEchartDom();n.bindEvents(r,t||{}),"function"==typeof a&&n.props.onChartReady(r),n.echartsElement&&(0,l.bind)(n.echartsElement,(function(){try{r.resize()}catch(e){console.warn(e)}}))},n.bindEvents=function(e,t){var n=function(t,n){"string"==typeof t&&"function"==typeof n&&e.on(t,(function(t){n(t,e)}))};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n(a,t[a])},n.renderEchartDom=function(){var e=n.getEchartsInstance();return e.setOption(n.props.option,n.props.notMerge||!1,n.props.lazyUpdate||!1),n.props.showLoading?e.showLoading(n.props.loadingOption||null):e.hideLoading(),e},n.echartsLib=n.props.echarts,n.echartsElement=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.rerender()}},{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme||!(0,u.default)(e.opts,this.props.opts)||!(0,u.default)(e.onEvents,this.props.onEvents))return this.dispose(),void this.rerender();var t=["option","notMerge","lazyUpdate","showLoading","loadingOption"];if(!(0,u.default)((0,c.pick)(this.props,t),(0,c.pick)(e,t))&&("function"!=typeof this.props.shouldSetOption||this.props.shouldSetOption(e,this.props))){var n=this.renderEchartDom();if(!(0,u.default)(e.style,this.props.style)||!(0,u.default)(e.className,this.props.className))try{n.resize()}catch(e){console.warn(e)}}}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,r=t.className,o=a({height:300},n);return i.default.createElement("div",{ref:function(t){e.echartsElement=t},style:o,className:"echarts-for-react "+r})}}]),t}(o.Component);t.default=d,d.propTypes={option:s.default.object.isRequired,echarts:s.default.object,notMerge:s.default.bool,lazyUpdate:s.default.bool,style:s.default.object,className:s.default.string,theme:s.default.string,onChartReady:s.default.func,showLoading:s.default.bool,loadingOption:s.default.object,onEvents:s.default.object,opts:s.default.shape({devicePixelRatio:s.default.number,renderer:s.default.oneOf(["canvas","svg"]),width:s.default.oneOfType([s.default.number,s.default.oneOf([null,void 0,"auto"])]),height:s.default.oneOfType([s.default.number,s.default.oneOf([null,void 0,"auto"])])}),shouldSetOption:s.default.func},d.defaultProps={echarts:{},notMerge:!1,lazyUpdate:!1,style:{},className:"",theme:null,onChartReady:function(){},showLoading:!1,loadingOption:null,onEvents:{},opts:{},shouldSetOption:function(){return!0}}},995:function(e,t,n){"use strict";var a=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,s,u,l=a(t),c=a(n);if(l&&c){if((s=t.length)!=n.length)return!1;for(i=s;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(l!=c)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var p=t instanceof RegExp,h=n instanceof RegExp;if(p!=h)return!1;if(p&&h)return t.toString()==n.toString();var v=r(t);if((s=v.length)!==r(n).length)return!1;for(i=s;0!=i--;)if(!o.call(n,v[i]))return!1;for(i=s;0!=i--;)if(!e(t[u=v[i]],n[u]))return!1;return!0}return t!=t&&n!=n}},996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ver=t.clear=t.bind=void 0;var a=n(997);t.bind=function(e,t){var n=(0,a.getSensor)(e);return n.bind(t),function(){n.unbind(t)}};t.clear=function(e){var t=(0,a.getSensor)(e);(0,a.removeSensor)(t)};t.ver="0.2.7"},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var a,r=(a=n(998))&&a.__esModule?a:{default:a},o=n(999),i=n(762);var s={};t.getSensor=function(e){var t=e.getAttribute(i.SizeSensorId);if(t&&s[t])return s[t];var n=(0,r.default)();e.setAttribute(i.SizeSensorId,n);var a=(0,o.createSensor)(e);return s[n]=a,a};t.removeSensor=function(e){var t=e.element.getAttribute(i.SizeSensorId);e.element.removeAttribute(i.SizeSensorId),e.destroy(),t&&s[t]&&delete s[t]}},998:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=1;t.default=function(){return"".concat(a++)}},999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a=n(1e3),r=n(1001),o="undefined"!=typeof ResizeObserver?r.createSensor:a.createSensor;t.createSensor=o}}]);