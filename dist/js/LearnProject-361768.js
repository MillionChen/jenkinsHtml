(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1595:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(76)),l=n(a(2295)).default.learnProject,o=l.learnProjectChart,u=l.learnProjectUserData,i=l.projectData,c=l.learnProjectOrgData,d=l.learnProjectUserTestData,s=l.learnProjectTestData,f=l.learnProjectUserDownload,p=l.learnProjectOrgDownload,g=l.learnProjectDownload,h=l.learnProjectDownload2,m=l.learnProjectDownload3,v=l.learnProjectModalUserData,y=l.learnProjectModalDataDownload,b={getLearnProjectChart:function(e,t){return function(a){return(0,r.default)({url:o,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectUserData:function(e,t){return function(a){return(0,r.default)({url:u,data:e}).then((function(e){t&&t(e)}))}},getprojectData:function(e,t){return function(a){return(0,r.default)({url:i,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectOrgData:function(e,t){return function(a){return(0,r.default)({url:c,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectTestData:function(e,t){return function(a){return(0,r.default)({url:s,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectUserTestData:function(e,t){return function(a){return(0,r.default)({url:d,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectUserDownload:function(e,t){return function(a){return(0,r.default)({url:f,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectOrgDownload:function(e,t){return function(a){return(0,r.default)({url:p,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectDownload:function(e,t){return function(a){return(0,r.default)({url:g,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectDownload2:function(e,t){return function(a){return(0,r.default)({url:h,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectDownload3:function(e,t){return function(a){return(0,r.default)({url:m,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectModalUserData:function(e,t){return function(a){return(0,r.default)({url:v,data:e}).then((function(e){t&&t(e)}))}},getLearnProjectModalDataDownload:function(e,t){return function(a){return(0,r.default)({url:y,data:e}).then((function(e){t&&t(e)}))}}};t.default=b},2291:function(e,t,a){"use strict";var n=a(4),r=a(0);a(227),a(43),a(107),a(51),a(620),a(20),a(34),a(35),a(23),a(53),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(146);var l=r(a(150));a(140);var o=r(a(535));a(61);var u=r(a(62)),i=r(a(29)),c=r(a(30)),d=r(a(59)),s=r(a(32)),f=r(a(33)),p=r(a(31)),g=r(a(2));a(540);var h=r(a(539));a(537);var m=r(a(536));a(554);var v=r(a(550));a(575);var y=r(a(568));a(592);var b=r(a(566)),D=n(a(1)),w=r(a(223)),E=(r(a(2292)),r(a(2293))),k=r(a(2294)),S=r(a(1005)),j=n(a(1595)),x=a(52),P=r(a(226));function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,g.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=b.default.RangePicker,N=(y.default.TabPane,v.default.Option,m.default.Search,h.default.Item,(new Date).getTime()),I=(0,w.default)(N).format("YYYY-MM-DD"),Y=I.split("-").length,A=(0,w.default)(N).format("YYYY-MM")+"-01";if("01"===I.split("-")[Y-1]){var G=(0,w.default)(N).format("YYYY-MM"),L=Number(G.split("-")[1]);L=L>10?String(L-1):"0"+String(L-1),A=(0,w.default)(N).format("YYYY")+"-"+L+"-01"}var z=(0,w.default)(N).endOf("day").subtract(1,"days").format("YYYY-MM-DD"),R=function(e){(0,s.default)(n,e);var t,a=(t=n,function(){var e,a=(0,p.default)(t);if(T()){var n=(0,p.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,f.default)(this,e)});function n(e){var t;(0,i.default)(this,n),t=a.call(this,e),(0,g.default)((0,d.default)(t),"range",(function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a})),(0,g.default)((0,d.default)(t),"disabledRangeTime",(function(e,a){return"start"===a?{disabledHours:function(){return t.range(0,60).splice(4,20)},disabledMinutes:function(){return t.range(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return t.range(0,60).splice(20,4)},disabledMinutes:function(){return t.range(0,31)},disabledSeconds:function(){return[55,56]}}})),(0,g.default)((0,d.default)(t),"disabledDate",(function(e){return e&&e>(0,w.default)().endOf("day").subtract(1,"days")})),(0,g.default)((0,d.default)(t),"handleSizeChange",(function(e){console.log(e.target.value),t.setState({size:e.target.value})}));var r=A,l=z,o=l.split("-")[l.split("-").length-1],u=[r,l];return t.state={title:null,startDate:r,endDate:l,timeDataArr:u,pageSize:o,arr1:[120,300,150,80,70,110,130],arr2:[130,200,130,180,170,10,30],arr3:[200,310,180,180,170,120,150],name:["参加人数","完成人数","项目数"],size:"day",loading:!0},t}return(0,c.default)(n,[{key:"componentDidMount",value:function(){this.chartGroup()}},{key:"chartGroup",value:function(){var e=this,t=this.state,a=t.startDate,n=t.endDate,r=(t.pageSize,{startDate:a,endDate:n,pageNo:"1",type:1});this.props.getLearnProjectChart(r,(function(t){if("1000"===t.code){e.setState({loading:!1});var a=t.data.map((function(e){return e.totalProject})),n=t.data.map((function(e){return e.totalJoin})),r=t.data.map((function(e){return e.totalFinish})),l=t.data.map((function(e){return e.value}));e.setState({arr1:n,arr2:r,arr3:a,title:l})}else u.default.error(t.subMsg)}))}},{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"onChange",value:function(e,t){var a=t[0].split("/").join("-"),n=t[1].split("/").join("-");n.split("/")[n.split("/").length-1],a.split("/")[a.split("/").length-1];this.setState({startDate:a,endDate:n}),console.log(e,t)}},{key:"timeSerch",value:function(){this.setState({loading:!0});var e=this.state,t=e.startDate,a=e.endDate;this.setState({timeDataArr:[t,a]}),this.chartGroup()}},{key:"handleChange",value:function(e){console.log("selected ".concat(e))}},{key:"render",value:function(){var e=this;return console.log("this.state==",this.state),D.default.createElement(l.default,{spinning:this.state.loading},D.default.createElement(P.default,{title:"学习项目统计"}),D.default.createElement("div",{id:S.default.duser},D.default.createElement("div",{className:S.default.user_head},D.default.createElement("span",{className:S.default.time_border},"时间段"),D.default.createElement(O,{ref:"RangePicker",className:S.default.serch_time,disabledDate:this.disabledDate,disabledTime:this.disabledRangeTime,onChange:this.onChange.bind(this),defaultValue:[(0,w.default)(A,"YYYY/MM/DD"),(0,w.default)(z,"YYYY/MM/DD")],format:"YYYY/MM/DD"}),D.default.createElement(o.default,{onClick:function(){return e.timeSerch()}},"查询")),D.default.createElement(E.default,{type:"lbar",lbtitle:this.state.title,lbarr2:this.state.arr2,lbarr3:this.state.arr3,lbarr1:this.state.arr1,lbname:this.state.name}),D.default.createElement(k.default,{ref:"Dtab",timeDataArr:this.state.timeDataArr})))}}]),n}(D.default.Component),_=(0,x.connect)((function(e){return M({},e)}),M({},j.default))(R);t.default=_},2292:function(e,t,a){"use strict";var n=a(4),r=a(0);a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(224);var l=r(a(225));a(99);var o=r(a(100)),u=r(a(29)),i=r(a(30)),c=r(a(59)),d=r(a(32)),s=r(a(33)),f=r(a(31)),p=r(a(2)),g=n(a(1));r(a(60));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var m=function(e){(0,d.default)(n,e);var t,a=(t=n,function(){var e,a=(0,f.default)(t);if(h()){var n=(0,f.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.default)(this,e)});function n(e){var t;return(0,u.default)(this,n),t=a.call(this,e),(0,p.default)((0,c.default)(t),"handleOk",(function(e){console.log(e),t.setState({visible:!1})})),(0,p.default)((0,c.default)(t),"handleCancel",(function(e){console.log(e),t.setState({visible:!1})})),t.state={visible:!1},t.iconClick=t.iconClick.bind((0,c.default)(t)),t}return(0,i.default)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"iconClick",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.types,a=e.title;return g.default.createElement("div",{style:{display:"inline-block",marginRight:"10px"}},g.default.createElement("span",{style:{marginLeft:"5px",marginRight:"2px",lineHeight:1.5}},"查询结果"),g.default.createElement(o.default,{type:"question-circle-o",onClick:this.iconClick,style:{fontSize:16,color:"#08c",lineHeight:1.5,cursor:"pointer"}}),g.default.createElement(l.default,{title:a,visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,footer:!1},"1"===t&&g.default.createElement("div",{style:{padding:"8px"}},g.default.createElement("h3",null,"可参加人数"),g.default.createElement("p",null,"项目可见范围内的用户总数；"),g.default.createElement("h3",null,"实际参加人数"),g.default.createElement("p",null,"项目有学习记录的人数，包括进行中和已完成的人数；"),g.default.createElement("h3",null,"完成人数"),g.default.createElement("p",null,"项目学习完成的人数；"),g.default.createElement("h3",null,"完成率"),g.default.createElement("p",null," 完成率=完成人数/实际参加人数；")),"2"===t&&g.default.createElement("div",null,g.default.createElement("h3",null,"应参加项目数"),g.default.createElement("p",null,"可见范围内被授权的项目总数；"),g.default.createElement("h3",null,"实际参加项目数"),g.default.createElement("p",null,"有学习记录的项目数，包括进行中和已完成的项目；"),g.default.createElement("h3",null,"已完成项目数"),g.default.createElement("p",null,"完成学习的项目数；")),"3"===t&&g.default.createElement("div",null,g.default.createElement("h3",null,"可参加项目数"),g.default.createElement("p",null,"部门用户可参加的项目数；"),g.default.createElement("h3",null,"可参加人数"),g.default.createElement("p",null,"可见范围内被授权的用户总数,仅统计当前部门的用户数，不含下级部门；"),g.default.createElement("h3",null,"实际参加人数"),g.default.createElement("p",null,"有学习记录的总人数；"),g.default.createElement("h3",null,"完成人数"),g.default.createElement("p",null,"项目有完成记录的人数总和；")),"4"===t&&g.default.createElement("div",null,g.default.createElement("h3",null,"可参加人数"),g.default.createElement("p",null,"考试可见范围内的总人数；"),g.default.createElement("h3",null,"实际参加人数"),g.default.createElement("h3",null,"交卷的人数；"),g.default.createElement("h3",null,"通过人数"),g.default.createElement("p",null,"考试设置合格分，统计考试得分大于等于合格分的人数；"),g.default.createElement("p",null,"考试未设置合格分，通过人数等于交卷的人数；"),g.default.createElement("h3",null,"平均分"),g.default.createElement("p",null,"平均分=统计考试得分总和/交卷人数， 当用户考多次的情况按最高分记录；"),g.default.createElement("h3",null,"完成率"),g.default.createElement("p",null," 完成率=实际参加人数/可参加人数*100%")),"5"===t&&g.default.createElement("div",null,g.default.createElement("h3",null,"可参加考试数"),g.default.createElement("p",null,"可见范围内被授权的考试数；"),g.default.createElement("h3",null,"实际参加考试数"),g.default.createElement("p",null,"交卷的考试数；"),g.default.createElement("p",null,"已通过考试数"),g.default.createElement("p",null,"考试设置合格分，考试得分大于等于合格分的考试数；"),g.default.createElement("p",null,"考试未设置合格分，交卷后即为已通过；"),g.default.createElement("h3",null,"未通过考试数"),g.default.createElement("p",null,"考试设置合格分，考试得分小于合格分的考试数； ")),"6"===t&&g.default.createElement("div",null,g.default.createElement("h3",null,"可参加人数"),g.default.createElement("p",null,"可见范围的用户总数"),g.default.createElement("h3",null,"实际参加考试数"),g.default.createElement("p",null,"有投票记录的用户数"),g.default.createElement("h3",null,"参与率"),g.default.createElement("p",null,"参与率=实际参加人数/可参加人数*100%"))))}}]),n}(g.Component);t.default=m},2293:function(e,t,a){"use strict";var n=a(4),r=a(0);a(51),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(29)),o=r(a(30)),u=r(a(32)),i=r(a(33)),c=r(a(31)),d=n(a(1)),s=r(a(825));function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var p=function(e){(0,u.default)(n,e);var t,a=(t=n,function(){var e,a=(0,c.default)(t);if(f()){var n=(0,c.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,i.default)(this,e)});function n(e){var t;return(0,l.default)(this,n),(t=a.call(this,e)).state={ltitle:e.ltitle,larr:e.larr,lname:e.lname,tltitle:e.tltitle,tlarr1:e.tlarr1,tlarr2:e.tlarr2,tlname:e.tlname,btitle:e.btitle,barr:e.barr,bname:e.bname,tbtitle:e.tbtitle,tbarr1:e.tbarr1,tbarr2:e.tbarr2,tbname:e.tbname,lbname:e.lbname,lbtitle:e.lbtitle,lbarr1:e.lbarr1,lbarr2:e.lbarr2,lbarr3:e.lbarr3},t}return(0,o.default)(n,[{key:"componentWillReceiveProps",value:function(e){this.state.lbname!==e.lbname&&this.setState({lbname:e.lbname,lbtitle:e.lbtitle,lbarr1:e.lbarr1,lbarr2:e.lbarr2,lbarr3:e.lbarr3})}},{key:"getOption",value:function(e){switch(e){case"line":return{xAxis:{type:"category",data:this.state.ltitle},yAxis:{type:"value"},legend:{data:this.state.lname},color:["blue"],tooltip:{show:!0,formatter:function(e,t,a){var n=e.seriesName+":"+e.value+"<br/>";return n+=e.name+":"+e.data.ti+"<br/>"}},dataZoom:{show:!0,realtime:!0,x:120,height:20},series:[{name:this.state.lname[0],data:this.state.larr,type:"line"}]};case"tline":return{xAxis:{type:"category",data:this.state.tltitle},yAxis:{type:"value"},legend:{data:this.state.tlname},dataZoom:{show:!0,realtime:!0,x:120,height:20},tooltip:{show:!0},series:[{name:this.state.tlname[0],data:this.state.tlarr1,type:"line"},{name:this.state.tlname[1],data:this.state.tlarr2,type:"line"}]};case"bar":return{xAxis:{type:"category",data:this.state.btitle},yAxis:{type:"value"},legend:{data:this.state.bname},color:["#5793f3","darkgrey"],tooltip:{show:!0},series:[{name:this.state.bname[0],data:this.state.barr,type:"bar"}]};case"tbar":return{xAxis:{type:"category",data:this.state.btitle},yAxis:{type:"value"},legend:{data:this.state.bname},tooltip:{show:!0},series:[{name:this.state.bname[0],data:this.state.barr,type:"bar",stack:"one"},{name:this.state.bname[1],data:this.state.barr,type:"bar",stack:"one"}]};case"lbar":var t=["#5793f3","#d14a61","#675bba"];return{color:t,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{right:"20%"},dataZoom:{show:!0,realtime:!0,x:120,height:20},legend:{data:this.props.lbname},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:this.props.lbtitle}],yAxis:[{type:"value",name:this.props.lbname[0],min:0,position:"right",axisLine:{lineStyle:{color:t[0]}}},{type:"value",name:this.props.lbname[1],min:0,position:"right",offset:80,axisLine:{lineStyle:{color:t[1]}}},{type:"value",name:this.props.lbname[2],min:0,position:"left",axisLine:{lineStyle:{color:t[2]}}}],series:[{name:this.props.lbname[0],type:"bar",data:this.props.lbarr1},{name:this.props.lbname[1],type:"bar",yAxisIndex:1,data:this.props.lbarr2},{name:this.props.lbname[2],type:"line",yAxisIndex:2,data:this.props.lbarr3}]}}}},{key:"render",value:function(){this.props.lbtitle;var e=this.props.type;return d.default.createElement(s.default,{option:this.getOption(e),notMerge:!0,lazyUpdate:!0,theme:"theme_name"})}}]),n}(d.Component);t.default=p},2294:function(e,t,a){"use strict";var n=a(4),r=a(0);a(43),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(146);var l=r(a(150));a(224);var o=r(a(225));a(569);var u=r(a(558));a(549);var i=r(a(544));a(564);var c=r(a(563));a(140);var d=r(a(535));a(144);var s=r(a(230));a(61);var f=r(a(62)),p=r(a(29)),g=r(a(30)),h=r(a(59)),m=r(a(32)),v=r(a(33)),y=r(a(31)),b=r(a(2));a(540);var D=r(a(539));a(537);var w=r(a(536));a(554);var E=r(a(550));a(575);var k=r(a(568));a(592);var S=r(a(566)),j=n(a(1)),x=(a(636),r(a(825))),P=r(a(223)),C=r(a(1594)),M=n(a(1595)),T=a(52),O=r(a(1005));function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){(0,b.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Y(e){return function(){var t,a=(0,y.default)(e);if(A()){var n=(0,y.default)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return(0,v.default)(this,t)}}function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}S.default.RangePicker;var G=k.default.TabPane,L=(E.default.Option,w.default.Search,D.default.Item),z=((new Date).getTime(),function(e){(0,m.default)(a,e);var t=Y(a);function a(e){var n;(0,p.default)(this,a),n=t.call(this,e),(0,b.default)((0,h.default)(n),"timeSerch",(function(){var e=n.state.kwd;n.trainingGroup("1",e)})),(0,b.default)((0,h.default)(n),"timeSerch3",(function(){var e=n.state.kwd3;n.orgGorp("1",e)})),(0,b.default)((0,h.default)(n),"trainingGroupDown",(function(){var e=n.state,t=e.kwd,a={startDate:e.startDate,endDate:e.endDate,kwd:t};n.props.getLearnProjectTestData(a,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"accountGroupDown",(function(){var e=n.state,t=e.examNameLike,a={startDate:e.startDate,endDate:e.endDate,examNameLike:t};n.props.getLearnProjectUserDownload(a,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"orgGorpDown",(function(){var e=n.state,t=e.examNameLike,a={startDate:e.startDate,endDate:e.endDate,examNameLike:t};n.props.getLearnProjectOrgDownload(a,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"trainingGroup1",(function(){var e=n.state,t=e.projectId,a={startDate:e.startDate,endDate:e.endDate,projectId:t};n.props.getLearnProjectDownload(a,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"trainingGroup2",(function(){var e=n.state,t=e.projectId,a={startDate:e.startDate,endDate:e.endDate,projectId:t};n.props.getLearnProjectDownload2(a,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"trainingGroup3",(function(){var e=n.state,t=e.projectId,a={startDate:e.startDate,endDate:e.endDate,projectId:t};n.props.getLearnProjectDownload3(a,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"handleOk1",(function(e){n.setState({visible1:!1})})),(0,b.default)((0,h.default)(n),"handleCancel1",(function(e){n.setState({visible1:!1})})),(0,b.default)((0,h.default)(n),"handleOk2",(function(e){n.setState({visible2:!1})})),(0,b.default)((0,h.default)(n),"handleCancel2",(function(e){n.setState({visible2:!1})})),(0,b.default)((0,h.default)(n),"showModal1",(function(e){console.log(e),n.trainingView(e.id),n.setState({visible1:!0,projectId:e.id})})),(0,b.default)((0,h.default)(n),"pageChange1",(function(e,t){var a=n.state.kwd;n.trainingGroup(e,a)})),(0,b.default)((0,h.default)(n),"pageChange2",(function(e,t){var a=n.state,r=a.orgKwd,l=a.accountKwd;n.accountGroup(e,{orgKwd:r,accountKwd:l})})),(0,b.default)((0,h.default)(n),"pageChange3",(function(e,t){var a=n.state.kwd3;n.orgGorp(e,a)})),(0,b.default)((0,h.default)(n),"pageSizeChange1",(function(e,t){var a=n.state.kwd;n.setState({page:1,pageSize:t},(function(){n.trainingGroup(e,a,t)}))})),(0,b.default)((0,h.default)(n),"pageSizeChange2",(function(e,t){var a=n.state,r=a.orgKwd,l=a.accountKwd;n.setState({page:1,pageSize:t},(function(){n.accountGroup(e,{orgKwd:r,accountKwd:l},t)}))})),(0,b.default)((0,h.default)(n),"pageSizeChange3",(function(e,t){var a=n.state.kwd3;n.setState({page:1},(function(){n.orgGorp(e,a,t)}))}));var r=n.props.timeDataArr,l=n.props.timeDataArr[0],o=n.props.timeDataArr[1];return n.state={key:1,pageNo:1,pageSize:20,startDate:l,endDate:o,timeDataArr:r,visible:!1,visible1:!1,visible2:!1,dataSource1:[],dataSource2:[],dataSource3:[],title:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],arr1:["业务关","基础知识","积极心态","通知关","通知关1","通知关2"],arr2:[130,200,130,180,170,10,30],arr3:[200,310,180,180,170,120,150],name:["参加人数","完成人数","项目数"],size:"day"},n.userChange=n.userChange.bind((0,h.default)(n)),n.initOption=n.initOption.bind((0,h.default)(n)),n}return(0,g.default)(a,[{key:"componentDidMount",value:function(){this.accountGroup("1"),this.trainingGroup("1"),this.orgGorp("1")}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.state.timeDataArr!==e.timeDataArr&&this.setState({timeDataArr:e.timeDataArr,startDate:e.timeDataArr[0],endDate:e.timeDataArr[1]},(function(){t.accountGroup("1"),t.trainingGroup("1"),t.orgGorp("1")}))}},{key:"accountGroup",value:function(e,t){var a,n,r=this,l=this.state,o=l.startDate,u=l.endDate,i=l.pageSize;t&&(a=t.orgKwd,n=t.accountKwd);var c={startDate:o,endDate:u,pageSize:i,pageNo:e,orgKwd:a,accountKwd:n};this.props.getLearnProjectUserData(c,(function(e){"1000"===e.code?r.setState({dataSource2:e.data,current2:e.page.pageNo,total2:e.page.pageTotal}):f.default.error(e.subMsg)}))}},{key:"trainingGroup",value:function(e,t){var a,n=this,r=this.state;t&&(a=t);var l={startDate:r.startDate,endDate:r.endDate,pageSize:r.pageSize,pageNo:e,kwd:a};this.props.getprojectData(l,(function(e){"1000"===e.code?n.setState({dataSource1:e.data,current:e.page.pageNo,total:e.page.pageTotal}):f.default.error(e.subMsg)}))}},{key:"orgGorp",value:function(e,t){var a,n=this,r=this.state;t&&(a=t);var l={startDate:r.startDate,endDate:r.endDate,pageSize:r.pageSize,pageNo:e,kwd:a};this.props.getLearnProjectOrgData(l,(function(e){"1000"===e.code?n.setState({dataSource3:e.data,current3:e.page.pageNo,total3:e.page.pageTotal}):f.default.error(e.subMsg)}))}},{key:"trainingView",value:function(e){var t=this,a=this.state,n={startDate:a.startDate,endDate:a.endDate,projectId:e,pageNo:"1",pageSize:"20"};this.props.getLearnProjectUserTestData(n,(function(e){if("1000"===e.code){var a=e.data.map((function(e){return e.value})),n=e.data.map((function(e){return e.totalFinish})),r=e.data.map((function(e){return e.totalJoin}));t.setState({accountX:a,series1:n,series2:r})}else f.default.error(e.subMsg)}))}},{key:"callback",value:function(e){this.setState({key:e})}},{key:"userChange",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields((function(e,a){e||(t.setState({orgKwd:a.orgKwd,accountKwd:a.accountKwd}),t.accountGroup("1",a),console.log("Received values of form: ",a))}))}},{key:"initOption",value:function(){var e=this.state;return{title:{text:"学习活动完成情况统计"},color:["#5793f3","darkgrey"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{data:e.accountX,type:"category",axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},legend:{data:["完成人数","参加人数"]},dataZoom:{show:!0,realtime:!0,start:0,end:100},series:[{name:"完成人数",type:"bar",label:{normal:{show:!0,position:"insideRight"}},data:e.series1},{name:"参加人数",type:"bar",label:{normal:{show:!0,position:"insideRight"}},data:e.series2}]}}},{key:"onSearch1",value:function(e){this.setState({kwd:e})}},{key:"onSearch3",value:function(e){this.setState({kwd3:e})}},{key:"showTotal",value:function(e){return"共计 ".concat(e," 条")}},{key:"handlePageChange",value:function(e,t){this.setState({pageNo:e}),this.props.getlist({state:this.state.key,pageNo:e,pageSize:t})}},{key:"handlePageSizeChange",value:function(e,t){this.setState({pageSize:t}),this.props.getlist({state:this.state.key,pageNo:this.state.pageNo,pageSize:t})}},{key:"showTotal1",value:function(e){return"共计 ".concat(e," 条")}},{key:"showTotal2",value:function(e){return"共计 ".concat(e," 条")}},{key:"showTotal3",value:function(e){return"共计 ".concat(e," 条")}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state,n=a.dataSource1,r=a.dataSource2,l=a.dataSource3,f=[{title:"项目名称",dataIndex:"name",key:"name",align:"center"},{title:"项目周期",dataIndex:"startTime",key:"startTime",align:"center",render:function(e,t){return j.default.createElement("div",null,j.default.createElement("span",null,(0,P.default)(e).format("YYYY/MM/DD")),j.default.createElement("br",null),j.default.createElement("span",null,(0,P.default)(t.endTime).format("YYYY/MM/DD")))}},{title:"应参加人数",dataIndex:"totalAsk",key:"totalAsk",align:"center"},{title:"实际参加人数",dataIndex:"totalIn",key:"totalIn",align:"center"},{title:"完成人数",dataIndex:"totalFinish",key:"totalFinish",align:"center"},{title:"完成率",dataIndex:"avgFinish",key:"avgFinish",align:"center",render:function(e,t){return j.default.createElement("span",null,e+"%")}},{title:"操作",dataIndex:"time",key:"time",align:"center",render:function(t,a){return j.default.createElement("a",{onClick:e.showModal1.bind(e,a)},"查看")}}],p=[{title:"用户名",dataIndex:"accountName",key:"accountName",align:"center"},{title:"姓名",dataIndex:"accountFullName",key:"accountFullName",align:"center"},{title:"所在部门",dataIndex:"orgName",key:"orgName",align:"center",render:function(e,t){return j.default.createElement(s.default,{placement:"top",title:e},j.default.createElement("span",null,e))}},{title:"应参加项目数",dataIndex:"totalAsk",key:"totalAsk",align:"center"},{title:"实际参加项目数",dataIndex:"totalIn",key:"totalIn",align:"center"},{title:"已完成项目数",dataIndex:"totalFinish",key:"totalFinish",align:"center"},{title:"操作",dataIndex:"time",align:"center",key:"time",render:function(t,a){return j.default.createElement("a",{onClick:function(){return e.refs.show.showModal(a)}},"查看")}}];return j.default.createElement("div",null,j.default.createElement(k.default,{className:"survey-tabs",defaultActiveKey:"1",onChange:function(t){return e.callback(t)}},j.default.createElement(G,{tab:"按项目统计",key:"1"},j.default.createElement("div",{className:"row-style"},j.default.createElement(C.default,{types:"1",title:"按项目统计"}),j.default.createElement(w.default,{className:O.default.dinput,placeholder:"请输入项目名称",onChange:function(t){e.onSearch1(t.target.value)}}),j.default.createElement(d.default,{onClick:this.timeSerch},"查询"),j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.trainingGroupDown},j.default.createElement(d.default,{className:O.default.serch_time,style:{marginLeft:"8px"}},"下载结果数据"))),j.default.createElement(i.default,{style:{background:"white"},columns:f,dataSource:n,pagination:!1}),j.default.createElement(u.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,current:this.state.current,defaultPageSize:20,total:this.state.total,onChange:this.pageChange1,showTotal:this.showTotal1,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["20","50","100"],onShowSizeChange:this.pageSizeChange1})),j.default.createElement(G,{tab:"按用户统计",key:"2"},j.default.createElement("div",null,j.default.createElement(C.default,{types:"2",title:"按用户统计"}),j.default.createElement(D.default,{layout:"inline",onSubmit:this.userChange,style:{display:"inline-block",lineHeight:"2.8"}},j.default.createElement(L,null,t("orgKwd",{})(j.default.createElement(w.default,{placeholder:"请输入部门编码或名称"}))),j.default.createElement(L,null,t("accountKwd",{})(j.default.createElement(w.default,{placeholder:"请输入用户关键字"}))),j.default.createElement(L,null,j.default.createElement(d.default,{htmlType:"submit"},"查询"))),j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.accountGroupDown},j.default.createElement(d.default,{className:O.default.serch_time,style:{marginLeft:"8px"}},"下载结果数据"))),j.default.createElement(i.default,{style:{background:"white"},align:"center",columns:p,dataSource:r,pagination:!1}),j.default.createElement(u.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,current:this.state.current2,defaultPageSize:20,total:this.state.total2,onChange:this.pageChange2,showTotal:this.showTotal2,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["20","50","100"],onShowSizeChange:this.pageSizeChange2})),j.default.createElement(G,{tab:"按部门统计",key:"3"},j.default.createElement("div",{className:"row-style"},j.default.createElement(C.default,{types:"3",title:"按部门统计"}),j.default.createElement(w.default,{className:O.default.dinput,placeholder:"请输入部门名称",onChange:function(t){e.onSearch3(t.target.value)}}),j.default.createElement(d.default,{onClick:this.timeSerch3},"查询"),j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.orgGorpDown},j.default.createElement(d.default,{className:"serch-time",style:{marginLeft:"8px"}},"下载结果数据"))),j.default.createElement(i.default,{style:{background:"white"},align:"center",columns:[{title:"部门编码",dataIndex:"orgNo",key:"orgNo",align:"center"},{title:"部门名称",dataIndex:"orgName",key:"orgName",align:"center"},{title:"可参加项目数",dataIndex:"totalAskProject",key:"totalAskProject",align:"center"},{title:"可参加人数",dataIndex:"totalAskAccount",key:"totalAskAccount",align:"center"},{title:"实际参加人数",dataIndex:"totalIn",key:"totalIn",align:"center"},{title:"完成人数",dataIndex:"totalFinish",key:"totalFinish",align:"center"},{title:"完成率",dataIndex:"avgFinish",key:"avgFinish",align:"center"}],dataSource:l,pagination:!1}),j.default.createElement(u.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,current:this.state.current3,defaultPageSize:20,total:this.state.total3,showTotal:this.showTotal3,onChange:this.pageChange3,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["20","50","100"],onShowSizeChange:this.pageSizeChange3}))),j.default.createElement(R,{ref:"show",startDate:this.state.startDate,endDate:this.state.endDate,getLearnProjectModalUserData:this.props.getLearnProjectModalUserData,getLearnProjectModalDataDownload:this.props.getLearnProjectModalDataDownload}),j.default.createElement(o.default,{width:1200,visible:this.state.visible1,title:"项目学习统计",onOk:this.handleOk1,onCancel:this.handleCancel1},j.default.createElement("div",{style:{marginBottom:"20px"}},j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.trainingGroup1},j.default.createElement(d.default,{className:"serch-time",style:{marginLeft:"8px"}},"下载项目学习结果")),j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.trainingGroup2},j.default.createElement(d.default,{className:"serch-time",style:{marginLeft:"8px"}},"下载学习计划明细")),j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.trainingGroup3},j.default.createElement(d.default,{className:"serch-time",style:{marginLeft:"8px"}},"下载学员学习明细"))),j.default.createElement(x.default,{option:this.initOption("bar"),notMerge:!0,lazyUpdate:!0,theme:"theme_name"})))}}]),a}(j.Component)),R=function(e){(0,m.default)(a,e);var t=Y(a);function a(e){var n;return(0,p.default)(this,a),n=t.call(this,e),(0,b.default)((0,h.default)(n),"accountView",(function(e,t){var a=n.props,r={startDate:a.startDate,endDate:a.endDate,pageSize:"10",accountId:t,pageNo:e,projectName:n.state.projectName};n.props.getLearnProjectModalUserData(r,(function(e){"1000"===e.code?n.setState({dataSource:e.data,current4:e.page.pageNo,total4:e.page.pageTotal,visible:!0,sloading:!1}):f.default.error(e.subMsg)}))})),(0,b.default)((0,h.default)(n),"showModal",(function(e){console.log(e.accountId),n.setState({accountId:e.accountId,visible:!0},(function(){n.accountView(1,e.accountId)}))})),(0,b.default)((0,h.default)(n),"accountViewSearch",(function(e){n.setState({projectName:e})})),(0,b.default)((0,h.default)(n),"pageChange4",(function(e,t){var a=n.state,r=a.accountId;a.projectName;n.accountView(e,r)})),(0,b.default)((0,h.default)(n),"handleOk",(function(e){n.setState({visible:!1})})),(0,b.default)((0,h.default)(n),"handleCancel",(function(e){n.setState({visible:!1})})),n.state={visible:!1,pageNo:1,pageSize:10,dataSource:null,accountName:"",sloading:!0},n.trainingAccountDown=n.trainingAccountDown.bind((0,h.default)(n)),n}return(0,g.default)(a,[{key:"trainingAccountDown",value:function(){var e=this.state,t=e.accountId,a=e.projectName,n=this.props,r={startDate:n.startDate,endDate:n.endDate,accountId:t,projectName:a};this.props.getLearnProjectModalDataDownload(r,(function(e){"1000"===e.code?f.default.success(e.data):f.default.error(e.subMsg)}))}},{key:"showTotal3",value:function(e){return"共计 ".concat(e," 条")}},{key:"dcha",value:function(){this.accountView(1,this.state.accountId)}},{key:"render",value:function(){var e=this,t=[{title:"用户名",dataIndex:"accountName",key:"accountName"},{title:"姓名",dataIndex:"accountFullName",key:"accountFullName"},{title:"所在部门",dataIndex:"orgName",key:"orgName"},{title:"项目名称",dataIndex:"projectName",key:"projectName"},{title:"学习状态",dataIndex:"state",key:"state"},{title:"开始时间",dataIndex:"startTime",key:"startTime",render:function(e,t){return j.default.createElement("span",null,""==e?"":(0,P.default)(e).format("YYYY-MM-DD"))}},{title:"完成时间",dataIndex:"endTime",key:"endTime",render:function(e,t){return j.default.createElement("span",null,e?(0,P.default)(e).format("YYYY-MM-DD"):"未完成")}}];return j.default.createElement("div",null,j.default.createElement(o.default,{width:1e3,title:"按用户统计查看",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},j.default.createElement("div",null,j.default.createElement(w.default,{placeholder:"请输入项目名称关键字",className:O.default.dinput,onChange:function(t){e.accountViewSearch(t.target.value)}}),j.default.createElement(d.default,{className:O.default.serch_time,onClick:function(){return e.dcha()}},"查询"),j.default.createElement(c.default,{title:"确定下载?",okText:"确定",cancelText:"取消",onConfirm:this.trainingAccountDown},j.default.createElement(d.default,{className:O.default.serch_time,style:{marginLeft:"8px"}},"下载项目学习结果"))),j.default.createElement(l.default,{spinning:this.state.sloading},j.default.createElement(i.default,{columns:t,dataSource:this.state.dataSource,pagination:!1})),j.default.createElement(u.default,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"},defaultCurrent:1,current:this.state.current4,defaultPageSize:10,total:this.state.total4,onChange:this.pageChange4,showTotal:this.showTotal3})))}}]),a}(j.Component),_=D.default.create()((0,T.connect)((function(e){return I({},e)}),I({},M.default))(z));t.default=_},2295:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(63)),l={learnProject:{learnProjectChart:"GET ".concat(r.default.webManage,"/report/trainingproject/chart/group"),learnProjectUserData:"GET ".concat(r.default.webManage,"/report/trainingproject/account/group"),projectData:"GET ".concat(r.default.webManage,"/report/trainingproject/group"),learnProjectOrgData:"GET ".concat(r.default.webManage,"/report/trainingproject/org/group"),learnProjectUserTestData:"GET ".concat(r.default.webManage,"/report/trainingproject/group/view"),learnProjectTestData:"GET ".concat(r.default.webManage,"/report/trainingproject/group/export"),learnProjectUserDownload:"GET ".concat(r.default.webManage,"/report/trainingproject/account/group/export"),learnProjectOrgDownload:"GET ".concat(r.default.webManage,"/report/trainingproject/org/group/export"),learnProjectDownload:"GET ".concat(r.default.webManage,"/report/trainingproject/group/view/export1"),learnProjectDownload2:"GET ".concat(r.default.webManage,"/report/trainingproject/group/view/export2"),learnProjectDownload3:"GET ".concat(r.default.webManage,"/report/trainingproject/group/view/export3"),learnProjectModalUserData:"GET ".concat(r.default.webManage,"/report/trainingproject/account/group/view"),learnProjectModalDataDownload:"GET ".concat(r.default.webManage,"/report/trainingproject/account/group/view/export")}};t.default=l}}]);