(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1596:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(76)),i=n(a(2297)).default.testStatistics,o=i.testStatisticsChart,s=i.testStatisticsScoreData,l=i.testStatisticsTestDownload,u=i.testStatisticsTestData,c=i.testStatisticsTestUserDetailDownload,d=i.testStatisticsTestUserDetailExport,f=i.testStatisticsTestUserDownload,m=i.testStatisticsUserData,g=i.testStatisticsUserDownload,p=i.testStatisticsUserTestData,h=i.testStatisticsTestSearch,S=i.testStatisticsUserSearch,v=i.testStatisticsOrgData,w=i.testStatisticsOrgDataByUsers,D=i.testStatisticsOrgDownload,x=i.testStatisticsOrgUsersDetailDownload,y=i.testStatisticsOrgUsersDownload,k={getTestStatisticsChart:function(e,t){return function(a){return(0,r.default)({url:o,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsUserData:function(e,t){return function(a){return(0,r.default)({url:m,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsScoreData:function(e,t){return function(a){return(0,r.default)({url:s,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestUserDetailDownload:function(e,t){return function(a){return(0,r.default)({url:c,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestData:function(e,t){return function(a){return(0,r.default)({url:u,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestDownload:function(e,t){return function(a){return(0,r.default)({url:l,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestUserDetailExport:function(e,t){return function(a){return(0,r.default)({url:d,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestUserDownload:function(e,t){return function(a){return(0,r.default)({url:f,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsUserDownload:function(e,t){return function(a){return(0,r.default)({url:g,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsUserTestData:function(e,t){return function(a){return(0,r.default)({url:p,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestSearch:function(e,t){return function(a){return(0,r.default)({url:h,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsUserSearch:function(e,t){return function(a){return(0,r.default)({url:S,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsOrgData:function(e,t){return function(a){return(0,r.default)({url:v,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsOrgDataByUsers:function(e,t){return function(a){return(0,r.default)({url:w,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestOrgDownload:function(e,t){return function(a){return(0,r.default)({url:D,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestOrgUserDetailDownload:function(e,t){return function(a){return(0,r.default)({url:x,data:e}).then((function(e){t&&t(e)}))}},getTestStatisticsTestOrgUserDownload:function(e,t){return function(a){return(0,r.default)({url:y,data:e}).then((function(e){t&&t(e)}))}}};t.default=k},2296:function(e,t,a){"use strict";var n=a(4),r=a(0);a(107),a(620),a(20),a(34),a(35),a(23),a(53),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(140);var i=r(a(535)),o=r(a(29)),s=r(a(30)),l=r(a(59)),u=r(a(32)),c=r(a(33)),d=r(a(31)),f=r(a(2));a(540);var m=r(a(539));a(537);var g=r(a(536));a(554);var p=r(a(550));a(575);var h=r(a(568));a(592);var S=r(a(566)),v=n(a(1)),w=(a(636),r(a(825)),r(a(223))),D=n(a(1596)),x=a(52),y=r(a(1005)),k=r(a(2298)),T=r(a(226));function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,f.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=S.default.RangePicker,O=(h.default.TabPane,p.default.Option,g.default.Search,m.default.Item,(new Date).getTime()),I=(0,w.default)(O).format("YYYY-MM-DD"),M=I.split("-").length,V=(0,w.default)(O).format("YYYY-MM")+"-01";if("01"===I.split("-")[M-1]){var L=(0,w.default)(O).format("YYYY-MM"),z=Number(L.split("-")[1]);z=z>10?String(z-1):"0"+String(z-1),V=(0,w.default)(O).format("YYYY")+"-"+z+"-01"}var U=(0,w.default)(O).endOf("day").subtract(1,"days").format("YYYY-MM-DD"),G=function(e){(0,u.default)(n,e);var t,a=(t=n,function(){var e,a=(0,d.default)(t);if(C()){var n=(0,d.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.default)(this,e)});function n(e){var t;(0,o.default)(this,n),t=a.call(this,e),(0,f.default)((0,l.default)(t),"timeSerch",(function(){var e=t.state,a=e.startDate,n=e.endDate;t.setState({timeDataArr:[a,n]})})),(0,f.default)((0,l.default)(t),"range",(function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a})),(0,f.default)((0,l.default)(t),"disabledRangeTime",(function(e,a){return"start"===a?{disabledHours:function(){return t.range(0,60).splice(4,20)},disabledMinutes:function(){return t.range(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return t.range(0,60).splice(20,4)},disabledMinutes:function(){return t.range(0,31)},disabledSeconds:function(){return[55,56]}}})),(0,f.default)((0,l.default)(t),"disabledDate",(function(e){return e&&e>(0,w.default)().endOf("day").subtract(1,"days")})),(0,f.default)((0,l.default)(t),"handleSizeChange",(function(e){console.log(e.target.value),t.setState({size:e.target.value})}));var r=V,i=U,s=[r,i];return t.state={startDate:r,endDate:i,timeDataArr:s,title:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],arr1:[120,300,150,80,70,110,130],arr2:[130,200,130,180,170,10,30],arr3:[200,310,180,180,170,120,150],name:["参加人数","完成人数","项目数"],size:"day"},t}return(0,s.default)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"onChange",value:function(e,t){var a=t[0],n=t[1],r=n.split("/")[n.split("/").length-1]-a.split("/")[a.split("/").length-1];this.setState({startDate:a,endDate:n,pageSize:r}),console.log(e,t)}},{key:"handleChange",value:function(e){console.log("selected ".concat(e))}},{key:"render",value:function(){return v.default.createElement("div",{id:y.default.duser},v.default.createElement(T.default,{title:"考试统计"}),v.default.createElement("div",{className:y.default.user_head},v.default.createElement("span",{className:y.default.time_border},"时间段"),v.default.createElement(E,{className:y.default.serch_time,disabledDate:this.disabledDate,disabledTime:this.disabledRangeTime,onChange:this.onChange.bind(this),defaultValue:[(0,w.default)(V,"YYYY/MM/DD"),(0,w.default)(U,"YYYY/MM/DD")],format:"YYYY/MM/DD"}),v.default.createElement(i.default,{onClick:this.timeSerch},"查询")),v.default.createElement(k.default,{dataSource1:this.state.dataSource1,dataSource2:this.state.dataSource1,timeDataArr:this.state.timeDataArr}))}}]),n}(v.default.Component),A=(0,x.connect)((function(e){return N({},e)}),N({},D.default))(G);t.default=A},2297:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(63)),i={testStatistics:{testStatisticsChart:"GET ".concat(r.default.webManage,"/report/exam/group"),testStatisticsUserData:"GET ".concat(r.default.webManage,"/report/exam/account/group"),testStatisticsScoreData:"GET ".concat(r.default.webManage,"/report/exam/score/group/view"),testStatisticsTestData:"GET ".concat(r.default.webManage,"/report/exam/sub/group/view"),testStatisticsUserTestData:"GET ".concat(r.default.webManage,"/report/exam/group/account"),testStatisticsTestDownload:"GET ".concat(r.default.webManage,"/report/exam/group/download"),testStatisticsUserDownload:"GET ".concat(r.default.webManage,"/report/exam/account/group/download"),testStatisticsTestUserDownload:"GET ".concat(r.default.webManage,"/report/exam/group/account/trExams/download"),testStatisticsTestUserDetailDownload:"GET ".concat(r.default.webManage,"/report/exam/group/account/trExams/view/download"),testStatisticsTestUserDetailExport:"GET ".concat(r.default.webManage,"/report/exam/answer/student/export"),testStatisticsUserSearch:"GET ".concat(r.default.webManage,"/report/exam/account/group/view"),testStatisticsTestSearch:"GET ".concat(r.default.webManage,"/report/exam/account/group/view/download"),testStatisticsOrgData:"GET ".concat(r.default.webManage,"/report/exam/group/org"),testStatisticsOrgDataByUsers:"GET ".concat(r.default.webManage,"/report/exam/group/org/users"),testStatisticsOrgDownload:"GET ".concat(r.default.webManage,"/report/exam/group/org/download"),testStatisticsOrgUsersDetailDownload:"GET ".concat(r.default.webManage,"/report/exam/group/org/users/detail/download"),testStatisticsOrgUsersDownload:"GET ".concat(r.default.webManage,"/report/exam/group/org/users/download")}};t.default=i},2298:function(e,t,a){"use strict";var n=a(4),r=a(0);a(43),a(51),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(146);var i=r(a(150));a(224);var o=r(a(225));a(569);var s=r(a(558));a(549);var l=r(a(544));a(564);var u=r(a(563));a(140);var c=r(a(535));a(61);var d=r(a(62)),f=r(a(29)),m=r(a(30)),g=r(a(59)),p=r(a(32)),h=r(a(33)),S=r(a(31)),v=r(a(2));a(540);var w=r(a(539));a(537);var D=r(a(536));a(554);var x=r(a(550));a(575);var y=r(a(568));a(592);var k=r(a(566)),T=n(a(1)),b=(a(636),r(a(825))),N=r(a(223)),C=r(a(1594)),E=n(a(1596)),O=a(52),I=r(a(1005));function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){(0,v.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e){return function(){var t,a=(0,S.default)(e);if(z()){var n=(0,S.default)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return(0,h.default)(this,t)}}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}k.default.RangePicker;var U=y.default.TabPane,G=x.default.Option,A=(D.default.Search,w.default.Item,function(e){(0,p.default)(a,e);var t=L(a);function a(e){var n;(0,f.default)(this,a),n=t.call(this,e),(0,v.default)((0,g.default)(n),"orgGroup",(function(e,t){var a=n.state,r=a.startDate,i=a.endDate,o=a.pageSize4,s=n.state.orgNameOrCode;t&&(s=t);var l={startAt:r,endAt:i,orgNameOrCode:s,pageSize:o,pageIndex:e};n.props.getTestStatisticsOrgData(l,(function(e){"1000"===e.code?n.setState({orgDataSource:e.data.records,current4:e.data.current,total4:e.data.total,loading:!1}):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"onTabChange",(function(e){var t=n.state.currentTab;n.setState({currentTab:e}),e!==t&&("1"!==e||n.state.dataSource1?"2"!==e||n.state.dataSource2?"3"!==e||n.state.orgDataSource||n.orgGroup(n.state.current4?n.state.current4:"1"):n.accountGroup(n.state.current2?n.state.current2:"1"):n.examGroup(n.state.current1?n.state.current1:"1"))})),(0,v.default)((0,g.default)(n),"timeSerch1",(function(){var e=n.state.examNameLike;n.examGroup("1",e)})),(0,v.default)((0,g.default)(n),"pageChange1",(function(e,t){var a=n.state.examNameLike;n.examGroup(e,a)})),(0,v.default)((0,g.default)(n),"pageChange2",(function(e,t){var a=n.state,r=a.codeValue,i=a.nameValue;n.accountGroup(e,{codeValue:r,nameValue:i})})),(0,v.default)((0,g.default)(n),"pageChange3",(function(e,t){var a=n.state,r=a.orgNameLike,i=a.accountNameLike,o=a.examId,s=a.joinState;n.accountGroupView(o,e,{orgNameLike:r,accountNameLike:i,joinState:s})})),(0,v.default)((0,g.default)(n),"pageChange4",(function(e,t){var a=n.state.orgNameOrCode;n.orgGroup(e,a)})),(0,v.default)((0,g.default)(n),"pageSizeChange1",(function(e,t){var a=n.state.examNameLike;n.setState({page:1,pageSize1:t},(function(){n.examGroup(e,a,t)}))})),(0,v.default)((0,g.default)(n),"pageSizeChange2",(function(e,t){var a=n.state,r=a.codeValue,i=a.nameValue;n.setState({page:1,pageSize2:t},(function(){n.accountGroup(e,{codeValue:r,nameValue:i},t)}))})),(0,v.default)((0,g.default)(n),"pageSizeChange3",(function(e,t){var a=n.state,r=a.orgNameLike,i=a.accountNameLike,o=a.examId,s=a.joinState;n.setState({page:1,pageSize3:t},(function(){n.accountGroupView(o,e,{orgNameLike:r,accountNameLike:i,joinState:s},t)}))})),(0,v.default)((0,g.default)(n),"pageSizeChange4",(function(e,t){var a=n.state.orgNameOrCode;n.setState({page:1,pageSize4:t},(function(){n.orgGroup(e,a,t)}))})),(0,v.default)((0,g.default)(n),"handleOk1",(function(e){n.setState({visible1:!1})})),(0,v.default)((0,g.default)(n),"orgChange",(function(e){n.setState({orgNameOrCode:e})})),(0,v.default)((0,g.default)(n),"timeSerchCode",(function(){var e=n.state,t=e.codeValue,a=e.nameValue;console.log(t),n.accountGroup("1",{codeValue:t,nameValue:a})})),(0,v.default)((0,g.default)(n),"orgSearchCode",(function(){var e=n.state.orgNameOrCode;n.orgGroup("1",e)})),(0,v.default)((0,g.default)(n),"handleCancel1",(function(e){n.setState({visible1:!1})})),(0,v.default)((0,g.default)(n),"accountGroupViewCode",(function(e){n.setState({orgNameLike:e})})),(0,v.default)((0,g.default)(n),"accountGroupViewName",(function(e){n.setState({accountNameLike:e})})),(0,v.default)((0,g.default)(n),"accountGroupViewSelect",(function(e){n.setState({joinState:e})})),(0,v.default)((0,g.default)(n),"accountGroupViewSearch",(function(){var e=n.state,t=e.orgNameLike,a=e.accountNameLike,r=e.examId,i=e.joinState;n.accountGroupView(r,"1",{orgNameLike:t,accountNameLike:a,joinState:i})})),(0,v.default)((0,g.default)(n),"examResultDown",(function(){var e=n.state,t=e.examNameLike,a={startDate:e.startDate,endDate:e.endDate,examNameLike:t};n.props.getTestStatisticsTestDownload(a,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"accountResultDown",(function(){var e=n.state,t=e.codeValue,a=e.nameValue,r={startTime:e.startDate,endTime:e.endDate,orgNameLike:t,accountNameLike:a};n.props.getTestStatisticsUserDownload(r,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"orgResultDown",(function(){var e=n.state,t=e.codeValue,a=e.nameValue,r={startTime:e.startDate,endTime:e.endDate,orgNameLike:t,accountNameLike:a};n.props.getTestStatisticsUserDownload(r,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"resultDownload",(function(){var e=n.state,t=e.examId,a=e.orgNameLike,r=e.accountNameLike,i={examId:t,startTime:e.startDate,endTime:e.endDate,orgNameLike:a,accountNameLike:r};n.props.getTestStatisticsTestUserDownload(i,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"detailDownload",(function(){var e=n.state,t=e.examId,a=e.orgNameLike,r=e.accountNameLike,i={examId:t,startTime:e.startDate,endTime:e.endDate,orgNameLike:a,accountNameLike:r};n.props.getTestStatisticsTestUserDetailDownload(i,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"answerDownload",(function(){var e=n.state,t=e.examId,a=e.orgNameLike,r=e.accountNameLike,i=e.startDate,o=e.endDate,s={examId:t,startTime:i,examName:e.examName,endTime:o,orgNameLike:a,accountNameLike:r};n.props.getTestStatisticsTestUserDetailExport(s,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"orgDownload",(function(){var e=n.state,t=e.pageSize,a=e.pageNo,r=e.orgNameOrCode,i={startAt:e.startDate,endAt:e.endDate,pageSize:t,pageIndex:a,orgNameOrCode:r};n.props.getTestStatisticsTestOrgDownload(i,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))}));var r=n.props.timeDataArr,i=n.props.timeDataArr[0],o=n.props.timeDataArr[1];return n.state={key:1,pageNo:1,pageSize:10,startDate:i,endDate:o,timeDataArr:r,dataSource1:[],visible:!1,visible1:!1,loading:!0,currentTab:"1",orgNameOrCode:"",orgDataSource:null,current1:"1",current2:"1",current3:"1",current4:"1",pageSize1:"10",pageSize2:"10",pageSize3:"10",pageSize4:"10"},n.userChange=n.userChange.bind((0,g.default)(n)),n.initOption=n.initOption.bind((0,g.default)(n)),n}return(0,m.default)(a,[{key:"componentDidMount",value:function(){this.examGroup("1")}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.state.currentTab;this.state.timeDataArr!==e.timeDataArr&&this.setState({timeDataArr:e.timeDataArr,startDate:e.timeDataArr[0],endDate:e.timeDataArr[1]},(function(){"1"===a?t.examGroup("1"):"2"===a?t.accountGroup("1"):"3"===a&&t.orgGroup("1")}))}},{key:"examGroup",value:function(e,t){var a,n=this,r=this.state;t&&(a=t);var i={startDate:r.startDate,endDate:r.endDate,examNameLike:a,pageSize:r.pageSize1,pageNo:e};this.props.getTestStatisticsChart(i,(function(e){"1000"===e.code?n.setState({dataSource1:e.data.records,current1:e.data.current,total1:e.data.total,loading:!1}):d.default.error(e.subMsg)}))}},{key:"accountGroup",value:function(e,t){var a,n,r=this,i=this.state,o=i.startDate,s=i.endDate,l=i.pageSize2;t&&(a=t.codeValue||void 0,n=t.nameValue||void 0);var u={startTime:o,endTime:s,pageSize:l,pageNo:e,orgNameLike:a,accountNameLike:n};this.props.getTestStatisticsUserData(u,(function(e){"1000"===e.code?r.setState({dataSource2:e.data.records,current2:e.data.current,total2:e.data.total,loading:!1}):d.default.error(e.subMsg)}))}},{key:"callback",value:function(e){this.setState({key:e}),"3"===e&&this.subGrouppView(this.state.examId)}},{key:"userChange",value:function(e){e.preventDefault(),this.props.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))}},{key:"showModal1",value:function(e){this.setState({visible1:!0,examId:String(e.id),examName:e.name}),this.examGroupView(String(e.id)),this.accountGroupView(String(e.id),"1"),this.subGrouppView(String(e.id))}},{key:"examGroupView",value:function(e){var t=this,a=this.state,n=(a.examId,{startTime:a.startDate,endTime:a.endDate,examId:e});this.props.getTestStatisticsScoreData(n,(function(e){if("1000"===e.code){var a=e.data.map((function(e){return e.minScore+"-"+e.maxScore})),n=e.data.map((function(e){return e.totalAccount}));t.setState({scoreTotal:n,scoreName:a,loading:!1})}else d.default.error(e.subMsg)}))}},{key:"subGrouppView",value:function(e){var t=this,a=this.state,n=(a.examId,{startTime:a.startDate,endTime:a.endDate,examId:e});this.props.getTestStatisticsTestData(n,(function(e){if("1000"===e.code){var a=e.data.map((function(e){return e.name})),n=e.data.map((function(e){return e.totalAccount})),r=e.data.map((function(e){return e.totalSub})),i=e.data.map((function(e){return e.value}));t.setState({examViewX:i,examViewName:a,totalAccount:n,totalSub:r})}else d.default.error(e.subMsg)}))}},{key:"accountGroupView",value:function(e,t,a){var n,r,i,o=this,s=this.state,l=s.startDate,u=s.endDate;a&&(n=a.orgNameLike||void 0,r=a.accountNameLike||void 0,i=a.joinState);var c={examId:e,startTime:l,endTime:u,pageSize:"10",pageNo:t,joinState:i,orgNameLike:n,accountNameLike:r};this.props.getTestStatisticsUserTestData(c,(function(e){"1000"===e.code?o.setState({dataSource3:e.data.records,current3:e.data.current,total3:e.data.total}):d.default.error(e.subMsg)}))}},{key:"initOption",value:function(){var e=this.state,t=e.examViewX;e.examViewName;return{title:{text:"考题统计"},color:["#5793f3","darkgrey"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{data:t,type:"category",axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},legend:{data:["正确人数","答题人数"]},series:[{name:"正确人数",type:"bar",label:{normal:{show:!0,position:"insideTop"}},data:e.totalAccount},{name:"答题人数",type:"bar",label:{normal:{show:!0,position:"insideRight"}},data:e.totalSub}]}}},{key:"initOption1",value:function(){var e=this.state;return{title:{text:"分段统计"},color:["#5793f3","#d14a61","#675bba"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{data:e.scoreName,type:"category",axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},legend:{data:["分数段","统计人数"]},series:[{name:"统计人数",type:"bar",label:{normal:{show:!0,position:"insideRight"}},data:e.scoreTotal}]}}},{key:"onSearch1",value:function(e){this.setState({examNameLike:e})}},{key:"showTotal1",value:function(e){return"共计 ".concat(e," 条")}},{key:"showTotal2",value:function(e){return"共计 ".concat(e," 条")}},{key:"showTotal3",value:function(e){return"共计 ".concat(e," 条")}},{key:"codeChange",value:function(e){this.setState({codeValue:e})}},{key:"nameChange",value:function(e){this.setState({nameValue:e})}},{key:"handlePageChange",value:function(e,t){this.setState({pageNo:e}),this.props.getlist({state:this.state.key,pageNo:e,pageSize:t})}},{key:"handlePageSizeChange",value:function(e,t){this.setState({pageSize:t}),this.props.getlist({state:this.state.key,pageNo:this.state.pageNo,pageSize:t})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.dataSource1,t.dataSource2,[{title:"考试名称",dataIndex:"name",key:"name",width:200,render:function(e){return T.default.createElement("span",{title:e,style:{width:300,display:"inline-block",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",cursor:"pointer"}},e)}},{title:"考试时间",dataIndex:"startTime",key:"startTime",render:function(e,t){return T.default.createElement("div",null,T.default.createElement("span",null,(0,N.default)(e).format("YYYY/MM/DD")),T.default.createElement("br",null),T.default.createElement("span",null,(0,N.default)(t.endTime).format("YYYY/MM/DD")))}},{title:"可参加人数",dataIndex:"totalAsk",key:"totalAsk"},{title:"实际参加人数",dataIndex:"totalIn",key:"totalIn"},{title:"通过人数",dataIndex:"totalPass",key:"totalPass"},{title:"通过率（%）",dataIndex:"passRate",key:"passRate"},{title:"平均分",dataIndex:"avgScore",key:"avgScore"},{title:"完成率（%）",dataIndex:"complete",key:"complete"},{title:"操作",dataIndex:"id",key:"id",render:function(t,a){return T.default.createElement("a",{onClick:e.showModal1.bind(e,a)},"查看")}}]),n=[{title:"用户名",dataIndex:"accountName",key:"accountName",width:200,ellipsis:!0,render:function(e){return T.default.createElement("span",{title:e,style:{width:300,display:"inline-block",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",cursor:"pointer"}},e)}},{title:"姓名",dataIndex:"accountFullName",key:"accountFullName",ellipsis:!0},{title:"所在部门",dataIndex:"orgName",key:"orgName",ellipsis:!0},{title:"应参加考试数",dataIndex:"totalAsk",key:"totalAsk",ellipsis:!0},{title:"实际参加考试数",dataIndex:"totalIn",key:"totalIn",ellipsis:!0},{title:"已通过考试数",dataIndex:"totalPass",key:"totalPass",ellipsis:!0},{title:"未通过考试数",dataIndex:"totalFail",key:"totalFail",ellipsis:!0},{title:"通过率（%）",dataIndex:"passRate",key:"passRate",ellipsis:!0},{title:"操作",dataIndex:"time",key:"time",ellipsis:!0,render:function(t,a){return T.default.createElement("a",{onClick:function(){return e.refs.show.showModal(2,a)}},"查看")}}],r=[{title:"用户名",dataIndex:"accountName",key:"accountName",ellipsis:!0},{title:"姓名",dataIndex:"accountFullName",key:"accountFullName",ellipsis:!0},{title:"所在部门",dataIndex:"orgName",key:"orgName",ellipsis:!0},{title:"考试次数",dataIndex:"examCount",key:"examCount",ellipsis:!0},{title:"最早交卷时间",dataIndex:"finishTime",key:"finishTime",render:function(e,t){return""!==e?T.default.createElement("span",null,(0,N.default)(e).format("YYYY/MM/DD")):null},ellipsis:!0},{title:"最高分",dataIndex:"score",key:"score",ellipsis:!0},{title:"考试结果",dataIndex:"examState",key:"examState",ellipsis:!0,render:function(e,t){return T.default.createElement("span",null,0==e?"不通过":1==e?"通过":"-")}}],d=[{title:"部门编码",dataIndex:"orgCode",key:"orgCode",ellipsis:!0},{title:"部门名称",dataIndex:"orgName",key:"orgName",ellipsis:!0},{title:"可参加考试数",dataIndex:"examCount",key:"examCount",ellipsis:!0},{title:"可参加人数",dataIndex:"planUserCount",key:"planUserCount",render:function(t,a){return T.default.createElement("a",{onClick:function(){return e.refs.org.showOrgView("1",a)}},t)}},{title:"实际参加人次",dataIndex:"actualUserCount",key:"actualUserCount"},{title:"通过人次",dataIndex:"passUserCount",key:"passUserCount"},{title:"通过率（%）",dataIndex:"passRate",key:"passRate"}];return T.default.createElement(i.default,{spinning:this.state.loading},T.default.createElement("div",{className:I.default.examt_able},T.default.createElement(y.default,{className:"survey-tabs",defaultActiveKey:"1",onChange:function(t){return e.onTabChange(t)}},T.default.createElement(U,{tab:"按考试统计",key:"1"},T.default.createElement("div",{className:I.default.row_style},T.default.createElement(C.default,{types:"4",title:"按考试统计"}),T.default.createElement(D.default,{className:I.default.dinput,placeholder:"请输入考试名称",onChange:function(t){e.onSearch1(t.target.value)}}),T.default.createElement(c.default,{onClick:this.timeSerch1},"查询"),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.examResultDown},T.default.createElement(c.default,{className:I.default.serch_time,style:{marginLeft:"8px"}},"下载结果数据"))),T.default.createElement(l.default,{style:{background:"white"},columns:a,dataSource:this.state.dataSource1,pagination:!1}),T.default.createElement(s.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,showTotal:this.showTotal1,current:this.state.current1,defaultPageSize:10,total:this.state.total1,onChange:this.pageChange1,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:this.pageSizeChange1})),T.default.createElement(U,{tab:"按用户统计",key:"2"},T.default.createElement("div",{className:I.default.examt_able,style:{marginBottom:"12px"}},T.default.createElement(C.default,{types:"5",title:"按用户统计"}),T.default.createElement(D.default,{style:{width:"200px",marginRight:"20px"},placeholder:"请输入部门名称",onChange:function(t){e.codeChange(t.target.value)}}),T.default.createElement(D.default,{style:{width:"200px",marginRight:"20px"},className:"dipnut",placeholder:"请输入用户关键字",onChange:function(t){e.nameChange(t.target.value)}}),T.default.createElement(c.default,{style:{marginRight:"20px"},onClick:this.timeSerchCode},"查询"),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.accountResultDown},T.default.createElement(c.default,{className:I.default.serch_time,style:{marginLeft:"8px"}},"下载结果数据"))),T.default.createElement(l.default,{style:{background:"white"},columns:n,dataSource:this.state.dataSource2,pagination:!1}),T.default.createElement(s.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,showTotal:this.showTotal2,current:this.state.current2,defaultPageSize:10,total:this.state.total2,onChange:this.pageChange2,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:this.pageSizeChange2})),T.default.createElement(U,{tab:"按部门统计",key:"3"},T.default.createElement("div",{className:I.default.examt_able,style:{marginBottom:"12px"}},T.default.createElement(C.default,{types:"7",title:"按部门统计"}),T.default.createElement(D.default,{style:{width:"200px",marginRight:"20px"},placeholder:"请输入部门编码或名称",onChange:function(t){e.orgChange(t.target.value)}}),T.default.createElement(c.default,{style:{marginRight:"20px"},onClick:this.orgSearchCode},"查询"),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.orgDownload},T.default.createElement(c.default,{className:I.default.serch_time,style:{marginLeft:"8px"}},"下载结果数据"))),T.default.createElement(l.default,{style:{background:"white"},columns:d,dataSource:this.state.orgDataSource,pagination:!1}),T.default.createElement(s.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,showTotal:this.showTotal2,current:this.state.current4,defaultPageSize:10,total:this.state.total4,onChange:this.pageChange4,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:this.pageSizeChange4}))),T.default.createElement(P,{ref:"show",startDate:this.state.startDate,endDate:this.state.endDate,getTestStatisticsUserSearch:this.props.getTestStatisticsUserSearch,getTestStatisticsTestSearch:this.props.getTestStatisticsTestSearch}),T.default.createElement(Y,{ref:"org",startDate:this.state.startDate,endDate:this.state.endDate,getTestStatisticsOrgDataByUsers:this.props.getTestStatisticsOrgDataByUsers,getTestStatisticsTestOrgUserDetailDownload:this.props.getTestStatisticsTestOrgUserDetailDownload,getTestStatisticsTestOrgUserDownload:this.props.getTestStatisticsTestOrgUserDownload}),T.default.createElement(o.default,{width:1e3,title:"按考试统计",visible:this.state.visible1,onOk:this.handleOk1,onCancel:this.handleCancel1},T.default.createElement(y.default,{className:"survey-tabs",defaultActiveKey:"1",onChange:function(t){return e.callback(t)}},T.default.createElement(U,{tab:"按分段统计",key:"1"},T.default.createElement(b.default,{option:this.initOption1("bar"),notMerge:!0,lazyUpdate:!0,theme:"theme_name"})),T.default.createElement(U,{tab:"按用户统计",key:"2"},T.default.createElement(D.default,{placeholder:"请输入部门名称",className:I.default.dinput,onChange:function(t){e.accountGroupViewCode(t.target.value)}}),T.default.createElement(D.default,{placeholder:"请输入用户关键字",className:I.default.dinput,onChange:function(t){e.accountGroupViewName(t.target.value)}}),T.default.createElement(x.default,{placeholder:"请选择",className:I.default.dinput,onChange:function(t){e.accountGroupViewSelect(t)}},T.default.createElement(G,{value:null},"全部"),T.default.createElement(G,{value:1},"已参加"),T.default.createElement(G,{value:0},"未参加")),T.default.createElement(c.default,{className:I.default.serch_time,onClick:this.accountGroupViewSearch},"查询"),T.default.createElement("br",null),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.resultDownload},T.default.createElement(c.default,{className:I.default.serch_time},"下载考试结果数据")),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.detailDownload},T.default.createElement(c.default,{className:I.default.serch_time},"下载考试明细")),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.answerDownload},T.default.createElement(c.default,{className:I.default.serch_time},"下载考试答卷")),T.default.createElement(l.default,{columns:r,dataSource:this.state.dataSource3,pagination:!1,rowKey:Math.random()}),T.default.createElement(s.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,showTotal:this.showTotal3,current:this.state.current3,defaultPageSize:10,total:this.state.total3,onChange:this.pageChange3,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],onShowSizeChange:this.pageSizeChange2})),T.default.createElement(U,{tab:"按考题统计",key:"3"},T.default.createElement(b.default,{option:this.initOption("bar"),notMerge:!0,lazyUpdate:!0,theme:"theme_name"}))))))}}]),a}(T.Component)),P=function(e){(0,p.default)(a,e);var t=L(a);function a(e){var n;(0,f.default)(this,a),n=t.call(this,e),(0,v.default)((0,g.default)(n),"pageChange5",(function(e,t){var a=n.state,r=a.accountId,i=a.examNameLike;n.accountView(r,e,{examNameLike:i})})),(0,v.default)((0,g.default)(n),"handleOk",(function(e){n.setState({visible:!1})})),(0,v.default)((0,g.default)(n),"handleCancel",(function(e){n.setState({visible:!1})})),(0,v.default)((0,g.default)(n),"accountViewName",(function(e){n.setState({examNameLike:e})})),(0,v.default)((0,g.default)(n),"accountViewSearch",(function(){var e=n.state,t=e.examNameLike,a=e.accountId;n.accountView(a,"1",{examNameLike:t})})),(0,v.default)((0,g.default)(n),"accountViewDownload",(function(){var e=n.state,t=e.examNameLike,a=e.accountId,r=n.props,i={accountId:a,startTime:r.startDate,endTime:r.endDate,examNameLike:t};n.props.getTestStatisticsTestSearch(i,(function(e){"1000"===e.code?d.default.success("导出成功，请在任务管理中下载查看"):d.default.error(e.subMsg)}))}));var r=n.props.startDate,i=n.props.endDate;return n.state={visible:!1,visible1:!1,pageNo:1,pageSize:10,startDate:r,endDate:i},n}return(0,m.default)(a,[{key:"componentDidMount",value:function(){this.state.accountId}},{key:"accountView",value:function(e,t,a){var n,r=this,i=this.props,o=i.startDate,s=i.endDate;a&&(n=a.examNameLike||void 0);var l={accountId:e,startTime:o,endTime:s,pageSize:"10",pageNo:t,examNameLike:n};this.props.getTestStatisticsUserSearch(l,(function(e){"1000"===e.code?r.setState({dataSource5:e.data.records,current5:e.data.current,total5:e.data.total}):d.default.error(e.subMsg)}))}},{key:"showModal",value:function(e,t){console.log(e);var a=this.props;a.startDate,a.endDate;this.setState({visible:!0,accountId:t.accountId}),this.accountView(t.accountId,"1")}},{key:"showTotal5",value:function(e){return"共计 ".concat(e," 条")}},{key:"render",value:function(){var e=this,t=[{title:"用户名",dataIndex:"accountName",key:"accountName"},{title:"姓名",dataIndex:"accountFullName",key:"accountFullName"},{title:"所在部门",dataIndex:"orgName",key:"orgName"},{title:"考试名称",dataIndex:"examName",key:"examName",width:200,render:function(e){return T.default.createElement("span",{title:e,style:{width:200,display:"inline-block",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",cursor:"pointer"}},e)}},{title:"考试状态",dataIndex:"state",key:"state",render:function(e,t){return T.default.createElement("span",null,0==e?"未参加":"已参加")}},{title:"考试得分",dataIndex:"score",key:"score"},{title:"考试结果",dataIndex:"result",key:"result",render:function(e,t){return T.default.createElement("span",null,0==e?"不通过":1==e?"通过":"-")}}];return T.default.createElement("div",null,T.default.createElement(o.default,{width:1e3,title:"按用户统计查看",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,footer:!1,destroyOnClose:!0},T.default.createElement("div",null,T.default.createElement(D.default,{placeholder:"请输入考试关键字",className:I.default.dinput,onChange:function(t){e.accountViewName(t.target.value)}}),T.default.createElement(c.default,{className:I.default.serch_time,onClick:this.accountViewSearch},"查询"),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.accountViewDownload},T.default.createElement(c.default,{className:I.default.serch_time,style:{marginLeft:"8px"}},"下载结果数据"))),T.default.createElement(l.default,{columns:t,dataSource:this.state.dataSource5,pagination:!1}),T.default.createElement(s.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,showTotal:this.showTotal5,current:this.state.current5,defaultPageSize:10,total:this.state.total5,onChange:this.pageChange5})))}}]),a}(T.Component),Y=function(e){(0,p.default)(a,e);var t=L(a);function a(e){var n;(0,f.default)(this,a),n=t.call(this,e),(0,v.default)((0,g.default)(n),"orgView",(function(e){var t=n.props,a=t.startDate,r=t.endDate,i=n.state,o=i.pageSize,s=i.orgId,l=i.orgCode,u=i.userName,c={startAt:a,endAt:r,pageSize:o,pageIndex:e,orgId:s,orgCode:l,userName:u};n.props.getTestStatisticsOrgDataByUsers(c,(function(e){"1000"===e.code?n.setState({dataSource6:e.data.records,current6:e.data.current,total6:e.data.total,loading:!1,userName:u}):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"showOrgView",(function(e,t){console.log(e);var a=n.props;a.startDate,a.endDate;n.setState({visible:!0,orgId:t.orgId,orgCode:t.orgCode,orgName:t.orgName},(function(){n.orgView("1")}))})),(0,v.default)((0,g.default)(n),"pageChange6",(function(e,t){n.orgView(e)})),(0,v.default)((0,g.default)(n),"handleOk",(function(e){n.setState({visible:!1,userName:null,dataSource6:null,current6:0,total6:0})})),(0,v.default)((0,g.default)(n),"handleCancel",(function(e){n.setState({visible:!1,userName:null,dataSource6:null,current6:0,total6:0})})),(0,v.default)((0,g.default)(n),"accountViewName",(function(e){n.setState({userName:e})})),(0,v.default)((0,g.default)(n),"accountViewSearch",(function(){n.orgView("1")})),(0,v.default)((0,g.default)(n),"orgViewDownload",(function(){var e=n.props,t=e.startDate,a=e.endDate,r=n.state,i=(r.pageSize,r.pageNo,r.orgId),o=r.orgCode,s={startAt:t,endAt:a,orgId:i,userName:r.userName,orgCode:o};n.props.getTestStatisticsTestOrgUserDownload(s,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))})),(0,v.default)((0,g.default)(n),"orgViewDetailDownload",(function(){var e=n.props,t=e.startDate,a=e.endDate,r=n.state,i=(r.pageSize,r.pageNo,r.orgId),o=r.orgCode,s={startAt:t,endAt:a,orgId:i,userName:r.userName,orgCode:o};n.props.getTestStatisticsTestOrgUserDetailDownload(s,(function(e){"1000"===e.code?d.default.success(e.data):d.default.error(e.subMsg)}))}));var r=n.props.startDate,i=n.props.endDate;return n.state={visible:!1,visible1:!1,pageNo:1,pageSize:10,startDate:r,endDate:i,orgCode:null,orgId:null,orgName:""},n}return(0,m.default)(a,[{key:"componentDidMount",value:function(){this.state.accountId}},{key:"showTotal5",value:function(e){return"共计 ".concat(e," 条")}},{key:"render",value:function(){var e=this;return T.default.createElement("div",null,T.default.createElement(o.default,{width:1e3,title:"部门考试统计-"+this.state.orgName,visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,footer:!1,destroyOnClose:!0},T.default.createElement("div",null,T.default.createElement(D.default,{placeholder:"请输入用户名、姓名",className:I.default.dinput,onChange:function(t){e.accountViewName(t.target.value)}}),T.default.createElement(c.default,{className:I.default.serch_time,onClick:this.accountViewSearch},"查询"),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.orgViewDownload},T.default.createElement(c.default,{className:I.default.serch_time,style:{marginLeft:"8px"}},"下载部门考试结果")),T.default.createElement(u.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.orgViewDetailDownload},T.default.createElement(c.default,{className:I.default.serch_time,style:{marginLeft:"8px"}},"下载用户考试明细"))),T.default.createElement(l.default,{columns:[{title:"用户名",dataIndex:"userName",key:"userName",ellipsis:!0},{title:"应参加考试数",dataIndex:"planJoinCount",key:"planJoinCount",ellipsis:!0},{title:"实际参加考试数",dataIndex:"actualJoinCount",key:"actualJoinCount",ellipsis:!0},{title:"已通过考试数",dataIndex:"passCount",key:"passCount",ellipsis:!0},{title:"未通过考试数",dataIndex:"unPassCount",key:"unPassCount",ellipsis:!0},{title:"通过率（%)",dataIndex:"passRate",key:"passRate",ellipsis:!0}],dataSource:this.state.dataSource6,pagination:!1,rowKey:function(e){return e.orgId}}),T.default.createElement(s.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,showTotal:this.showTotal6,current:this.state.current6,defaultPageSize:10,total:this.state.total6,onChange:this.pageChange6})))}}]),a}(T.Component),R=(0,O.connect)((function(e){return V({},e)}),V({},E.default))(A);t.default=R}}]);