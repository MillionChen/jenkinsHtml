(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1337:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.recommendStrategyCopy=function(e,t){return function(n){return(0,r.default)({url:u,data:e}).then((function(e){t&&t(e)}))}},t.recommendStrategyDelete=function(e,t){return function(n){return(0,r.default)({url:i,data:e}).then((function(e){t&&t(e)}))}},t.recommendStrategyPage=function(e,t){return function(n){return(0,r.default)({url:l,data:e}).then((function(e){t&&t(e)}))}},t.recommendRulePage=function(e,t){return function(n){return(0,r.default)({url:s,data:e}).then((function(e){t&&t(e)}))}},t.recommendRuleIdsGet=function(e,t){return function(n){return(0,r.default)({url:c,data:e}).then((function(e){t&&t(e)}))}},t.recommendStrategyView=function(e,t){return function(n){return(0,r.default)({url:d,data:e}).then((function(e){t&&t(e)}))}},t.recommendStrategySave=function(e,t){return function(n){return(0,r.default)({url:f,data:e}).then((function(e){t&&t(e)}))}},t.rulesGetInitJson=function(e){return function(t){return(0,r.default)({url:m}).then((function(t){e&&e(t)}))}},t.recommendStrategyDrools=function(e,t){return function(n){return(0,r.default)({url:p,data:e}).then((function(e){t&&t(e)}))}},t.recommendRuleTemplateSave=function(e,t){return function(n){return(0,r.default)({url:g,data:e}).then((function(e){t&&t(e)}))}};var r=a(n(76)),o=a(n(1414)),u=o.default.recommendStrategyCopyApi,i=o.default.recommendStrategyDeleteApi,l=o.default.recommendStrategyPageApi,s=o.default.recommendRulePageApi,c=o.default.recommendRuleIdsGetApi,d=o.default.recommendStrategyViewApi,f=o.default.recommendStrategySaveApi,m=o.default.rulesGetInitJsonApi,p=o.default.recommendStrategyDroolsApi,g=o.default.recommendRuleTemplateSaveApi},1356:function(e,t,n){"use strict";var a=n(4),r=n(0);n(7),n(3),n(5),n(43),n(9),n(10),n(8),n(20),n(34),n(35),n(23),n(229),n(6),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(140);var o=r(n(535));n(554);var u=r(n(550));n(537);var i=r(n(536)),l=r(n(238));n(61);var s=r(n(62));n(239);var c=r(n(240)),d=r(n(29)),f=r(n(30)),m=r(n(59)),p=r(n(32)),g=r(n(33)),h=r(n(31)),y=r(n(2));n(575);var v=r(n(568)),S=a(n(1)),b=n(52),w=a(n(1357)),C=r(n(1359));function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,y.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=v.default.TabPane,R=function(e){(0,p.default)(a,e);var t,n=(t=a,function(){var e,n=(0,h.default)(t);if(D()){var a=(0,h.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,g.default)(this,e)});function a(e){var t;return(0,d.default)(this,a),t=n.call(this,e),(0,y.default)((0,m.default)(t),"usersColumns",[{title:"序号",dataIndex:"num",key:"num"},{title:"用户名",dataIndex:"name",key:"name",render:function(e){return S.default.createElement("span",{title:e},e.length>10?e.substring(9,0)+"...":e)}},{title:"姓名",dataIndex:"fullName",key:"fullName",render:function(e){return S.default.createElement("span",{title:e},e.length>10?e.substring(9,0)+"...":e)}},{title:"手机号",dataIndex:"mobile",key:"mobile"},{title:"职位",dataIndex:"position",key:"position",render:function(e){return S.default.createElement("span",{title:e},e.length>10?e.substring(9,0)+"...":e)}}]),(0,y.default)((0,m.default)(t),"contentColumns",[{title:"序号",dataIndex:"num",key:"num"},{title:"内容编号",dataIndex:"code",key:"code"},{title:"内容类型",dataIndex:"business",key:"business"},{title:"内容名称",dataIndex:"content",key:"content",render:function(e){return S.default.createElement("span",{title:e},e.length>10?e.substring(9,0)+"...":e)}}]),(0,y.default)((0,m.default)(t),"queryData",function(){var e=(0,c.default)(l.default.mark((function e(n,a){var r,o;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state.tabsKey,o=(0,m.default)(t),1==r?(console.log(t.props.rulesLook,"推荐管理"),t.props.rulesLook?t.props.getVisibleRangeToContent(k({id:o.props.id},n),(function(e){1e3==e.code?o.setState({rangeToContent:e.data,rangeToContentPage:e.page,pageNo:a}):s.default.error(e.data.subMsg)})):t.props.getVisibleRangeToUser(k({id:o.props.id},n),(function(e){1e3==e.code?t.setState({rangeToUser:e.data,rangeToUserPage:e.page,pageNo:a}):s.default.error(e.data.subMsg)}))):(console.log(t.props.rulesLook,"规则管理"),t.props.rulesLook?t.props.recommendRuleStrategyPage(k({ruleId:t.props.id},n),(function(e){1e3==e.code?t.setState({rangeToContent:e.data,rangeToContentPage:e.page,pageNo:a}):s.default.error(e.data.subMsg)})):t.props.getRecommendStrategyContent(k({id:t.props.id},n),(function(e){1e3==e.code?t.setState({rangeToContent:e.data,rangeToContentPage:e.page,pageNo:a}):s.default.error(e.data.subMsg)})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),(0,y.default)((0,m.default)(t),"search",(function(){var e=t.state,n=e.keyword,a=e.pageNo,r=e.pageSize,o=e.business;e.tabsKey;t.queryData({keyword:n,pageNo:a,pageSize:r,business:o})})),(0,y.default)((0,m.default)(t),"onChange",(function(e){t.setState({keyword:e.target.value})})),(0,y.default)((0,m.default)(t),"onChangePageSize",(function(e,n){var a={pageNo:e,pageSize:n,keyword:t.state.keyword};t.setState({pageSize:n},(function(){return t.queryData(a)}))})),(0,y.default)((0,m.default)(t),"onChangePage",(function(e,n){var a={pageNo:e,pageSize:n,keyword:t.state.keyword};t.queryData(a)})),(0,y.default)((0,m.default)(t),"changeTags",(function(e){t.setState({tabsKey:e},(function(){2==e&&t.props.rulesGetInitJson((function(e){1e3==e.code?t.setState({fList:Object.keys(e.data.business),classifyList:e.data.business}):s.default.error(e.subMsg)})),t.queryData({keyword:"",pageSize:20})}))})),(0,y.default)((0,m.default)(t),"onSecondChange",(function(e){console.log(e),t.setState({business:e})})),t.state={pageNo:1,pageSize:20,tabsKey:1,rangeToUser:[],rangeToUserPage:{},rangeToContent:[],rangeToContentPage:{},keyword:"",fList:[],classifyList:{},business:""},t}return(0,f.default)(a,[{key:"componentDidMount",value:function(){var e=this;this.queryData({keyword:"",pageSize:20}),this.props.rulesLook&&this.props.rulesGetInitJson((function(t){1e3==t.code?e.setState({fList:Object.keys(t.data.business),classifyList:t.data.business}):s.default.error(t.subMsg)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.tabsKey,a=t.rangeToUser,r=t.rangeToUserPage,l=t.rangeToContent,s=t.rangeToContentPage,c=t.fList,d=t.classifyList;return console.log(n,"rangeToContentPage"),S.default.createElement("div",{style:{padding:"2%"}},S.default.createElement("div",null,S.default.createElement("span",null,"关键字："," ",S.default.createElement(i.default,{onChange:this.onChange,style:{width:"250px"},placeholder:1!=n||this.props.rulesLook?"请输入内容编码、名称":"请输入用户名/姓名/手机号"})),(1!=n||this.props.rulesLook)&&S.default.createElement("span",{style:{marginLeft:"20px"}},"内容类型：",S.default.createElement(u.default,{onChange:function(t){return e.onSecondChange(t)},style:{width:"250px",marginRight:"10px"},placeholder:"全部",allowClear:!0},c.map((function(e){return S.default.createElement(u.default.Option,{key:e},d[e])})))),S.default.createElement(o.default,{style:{marginLeft:"20px"},onClick:this.search,type:"primary"},"查询")),this.props.rulesLook?S.default.createElement(C.default,{rowKey:this.props.id,columns:this.contentColumns,onChangePage:this.onChangePage,onChangePageSize:this.onChangePageSize,page:s,dataSource:l}):S.default.createElement(v.default,{defaultActiveKey:"1",onChange:this.changeTags},S.default.createElement(P,{tab:"用户",key:"1"},S.default.createElement(C.default,{rowKey:this.props.id,onChangePage:this.onChangePage,onChangePageSize:this.onChangePageSize,page:r,columns:this.usersColumns,dataSource:a})),S.default.createElement(P,{tab:"内容",key:"2"},S.default.createElement(C.default,{rowKey:this.props.id,columns:this.contentColumns,onChangePage:this.onChangePage,onChangePageSize:this.onChangePageSize,page:s,dataSource:l}))))}}]),a}(S.Component),O=(0,b.connect)((function(e){return e}),k({},w))(R);t.default=O},1357:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.rulesGetInitJson=function(e){return function(t){return(0,r.default)({url:u}).then((function(t){"1000"===t.code&&e&&e(t)}))}},t.getVisibleRangeToContent=function(e,t){return function(n){return(0,r.default)({url:i,data:e}).then((function(e){"1000"===e.code&&t&&t(e)}))}},t.recommendRuleGetVisibleRangeToUser=function(e,t){return function(n){return(0,r.default)({url:l,data:e}).then((function(e){"1000"===e.code&&t&&t(e)}))}},t.getVisibleRangeToUser=function(e,t){return function(n){return(0,r.default)({url:s,data:e}).then((function(e){"1000"===e.code&&t&&t(e)}))}},t.recommendRuleStrategyPage=function(e,t){return function(n){return(0,r.default)({url:c,data:e}).then((function(e){"1000"===e.code&&t&&t(e)}))}},t.getRecommendStrategyContent=function(e,t){return function(n){return(0,r.default)({url:d,data:e}).then((function(e){"1000"===e.code&&t&&t(e)}))}};var r=a(n(76)),o=a(n(1358)),u=o.default.rulesGetInitJsonApi,i=o.default.getVisibleRangeToContentApi,l=o.default.recommendRuleGetVisibleRangeToUserApi,s=o.default.getVisibleRangeToUserApi,c=o.default.recommendRuleStrategyPageApi,d=o.default.getRecommendStrategyContentApi},1358:function(e,t,n){"use strict";var a=n(0);n(44),n(20),n(86),Object.defineProperty(t,"__esModule",{value:!0}),t.rulesGetInitJson=function(e){return fetch("/rules/manage/recommendRule/getJson?companyCode=".concat(companyCode,"&siteCode=").concat(siteCode),e)},t.default=void 0;var r=a(n(63)),o={rulesGetInitJsonApi:"GET ".concat(r.default.base,"/rules/manage/recommendRule/getJson"),getVisibleRangeToContentApi:"GET ".concat(r.default.base,"/rules/manage/recommendRule/content/range/page"),recommendRuleGetVisibleRangeToUserApi:"GET ".concat(r.default.base,"/rules/manage/recommendRule/getVisibleRangeToUser"),getVisibleRangeToUserApi:"GET ".concat(r.default.base,"/rules/manage/recommendStrategy/getVisibleRangeToUser"),recommendRuleStrategyPageApi:"GET ".concat(r.default.base,"/rules/manage/recommendRule/strategy/page"),getRecommendStrategyContentApi:"GET ".concat(r.default.base,"/rules/manage/recommendStrategy/content/range/page")};t.default=o},1359:function(e,t,n){"use strict";var a=n(4),r=n(0);n(20),n(34),n(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(549);var o=r(n(544));n(569);var u=r(n(558)),i=r(n(29)),l=r(n(30)),s=r(n(32)),c=r(n(33)),d=r(n(31)),f=a(n(1));function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var p=function(e){(0,s.default)(a,e);var t,n=(t=a,function(){var e,n=(0,d.default)(t);if(m()){var a=(0,d.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.default)(this,e)});function a(e){var t;return(0,i.default)(this,a),(t=n.call(this,e)).state={current:1},t}return(0,l.default)(a,[{key:"render",value:function(){var e=this;return f.default.createElement(o.default,{columns:this.props.columns,rowKey:function(t){return t.id||e.props.rowKey||"id"},dataSource:this.props.dataSource||[],rowSelection:this.props.rowSelection,pagination:!1,title:this.props.header,footer:function(){return f.default.createElement("div",{style:{textAlign:"center"}},f.default.createElement(u.default,{defaultPageSize:e.props.defaultPageSize||20,current:e.props.page&&e.props.page.pageNo||1,showQuickJumper:!0,pageSizeOptions:e.props.pageSizeOptions||["20","50","100"],bordered:!0,total:e.props.page&&e.props.page.pageTotal,showTotal:function(e){return"总共".concat(e,"条")},onChange:function(t,n){return e.props.onChangePage(t,n)},showSizeChanger:!0,onShowSizeChange:function(t,n){return e.props.onChangePageSize(t,n)}}))}})}}]),a}(f.Component);t.default=p},1414:function(e,t,n){"use strict";var a=n(0);n(44),Object.defineProperty(t,"__esModule",{value:!0}),t.recommendRuleTemplateSave=function(e){return post("/rules/manage/recommendRule/template/save?companyCode=".concat(companyCode,"&siteCode=").concat(siteCode),e)},t.default=void 0;var r=a(n(63)),o={recommendStrategyCopyApi:"POST ".concat(r.default.base,"/rules/manage/recommendStrategy/copy"),recommendStrategyDeleteApi:"POST ".concat(r.default.base,"/rules/manage/recommendStrategy/delete"),recommendStrategyPageApi:"GET ".concat(r.default.base,"/rules/manage/recommendStrategy/page"),recommendRulePageApi:"GET ".concat(r.default.base,"/rules/manage/recommendRule/page"),recommendRuleIdsGetApi:"POST ".concat(r.default.base,"/rules/manage/recommendRule/ids/get"),recommendStrategyViewApi:"GET ".concat(r.default.base,"/rules/manage/recommendStrategy/view"),recommendStrategySaveApi:"POST ".concat(r.default.base,"/rules/manage/recommendStrategy/save"),rulesGetInitJsonApi:"GET ".concat(r.default.base,"/rules/manage/recommendRule/getJson"),recommendStrategyDroolsApi:"POST ".concat(r.default.base,"/web-manage/drools/manage/task/page"),recommendRuleTemplateSaveApi:"POST ".concat(r.default.base,"/rules/manage/recommendRule/template/save")};t.default=o},1805:function(e,t,n){"use strict";var a=n(4),r=n(0);n(44),n(51),n(20),n(34),n(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(224);var o=r(n(225));n(569);var u=r(n(558));n(549);var i=r(n(544));n(140);var l=r(n(535));n(537);var s=r(n(536)),c=r(n(238));n(239);var d=r(n(240));n(590);var f=r(n(591));n(564);var m=r(n(563));n(61);var p=r(n(62)),g=r(n(29)),h=r(n(30)),y=r(n(59)),v=r(n(32)),S=r(n(33)),b=r(n(31)),w=r(n(2));n(592);var C=r(n(566));n(540);var T=r(n(539)),k=a(n(1)),D=n(65),P=r(n(226)),R=r(n(993)),O=r(n(223)),E=n(52),Y=a(n(1337)),M=r(n(1356));function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=T.default.Item,A=C.default.RangePicker,N=function(e){(0,v.default)(a,e);var t,n=(t=a,function(){var e,n=(0,b.default)(t);if(z()){var a=(0,b.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,S.default)(this,e)});function a(e){var t;return(0,g.default)(this,a),t=n.call(this,e),(0,w.default)((0,y.default)(t),"columns",[{title:"序号",dataIndex:"id",render:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(t.state.pageNo?t.state.pageNo-1:0)*t.state.pageSize+a+1}},{title:"策略名称",dataIndex:"name",render:function(e){return k.default.createElement("span",{title:e},e.length>10?e.substring(9,0)+"...":e)}},{title:"策略时段",dataIndex:"startTime",render:function(e,t){return t.startTime&&t.endTime?k.default.createElement("span",null,(0,O.default)(t.startTime).format("YYYY-MM-DD HH:mm:ss")," ~"," ",(0,O.default)(t.endTime).format("YYYY-MM-DD HH:mm:ss")):k.default.createElement("span",null,"长期")}},{title:"创建时间",dataIndex:"createTime",render:function(e){return k.default.createElement("span",null,(0,O.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"操作",dataIndex:"action",render:function(e,n){return k.default.createElement("span",null,k.default.createElement(m.default,{title:"确定复制?",onConfirm:function(){var e=t.props.form.getFieldsValue,a=e(["name"]),r=e(["time"]);t.props.recommendStrategyCopy({id:n.id},(function(e){if(1e3!=e.code)return p.default.error(e.subMsg);var n={name:a.name,pageNo:t.state.pageNo||1,pageSize:t.state.pageSize,startTime:r.time?(0,O.default)(r.time[0],"YYYY-MM-DD HH:mm:ss").valueOf():void 0,endTime:r.time?(0,O.default)(r.time[1],"YYYY-MM-DD HH:mm:ss").valueOf():void 0};t.queryData(n,t.state.pageNo)}))},okText:"确定",cancelText:"否"},k.default.createElement("a",null,"复制")),k.default.createElement(f.default,{type:"vertical"}),k.default.createElement("span",null," ",k.default.createElement(D.Link,{to:"/".concat(R.default.companyCode,"/").concat(R.default.siteCode,"/index/manager/add-rules-engine?id=").concat(n.id)},"修改")),k.default.createElement(f.default,{type:"vertical"}),k.default.createElement("a",{onClick:function(){return t.setState({visibleLookRulesView:!0,lookRulesViewId:n.id})}},"查看推荐范围"),k.default.createElement(f.default,{type:"vertical"}),k.default.createElement(m.default,{style:{minWidth:"180px"},title:"确定删除？",onConfirm:function(){var e=t.props.form.getFieldsValue,a=e(["name"]),r=e(["time"]);t.props.recommendStrategyDelete({id:n.id},(function(e){if(1e3!=e.code)return p.default.error(e.subMsg);var n={name:a.name,pageNo:t.state.pageNo||1,pageSize:t.state.pageSize,startTime:r.time?(0,O.default)(r.time[0],"YYYY-MM-DD HH:mm:ss").valueOf():void 0,endTime:r.time?(0,O.default)(r.time[1],"YYYY-MM-DD HH:mm:ss").valueOf():void 0};t.queryData(n,t.state.pageNo)}))}},k.default.createElement("a",null,"删除")))}}]),(0,w.default)((0,y.default)(t),"queryData",function(){var e=(0,d.default)(c.default.mark((function e(n,a){var r;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,y.default)(t),t.props.recommendStrategyPage(n,(function(e){1e3==e.code?r.setState({StrategyData:e,pageNo:a}):p.default.error(e.subMsg)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),(0,w.default)((0,y.default)(t),"handleSubmit",(function(e){e.preventDefault(),t.props.form.validateFields((function(e,n){if(!e)if(n.time&&n.time.length){var a={name:n.name,pageNo:t.state.pageNo||1,pageSize:t.state.pageSize,startTime:n.time?(0,O.default)(n.time[0],"YYYY-MM-DD HH:mm").valueOf():"",endTime:n.time?(0,O.default)(n.time[1],"YYYY-MM-DD HH:mm").valueOf():""};t.queryData(a)}else{var r={name:n.name,pageNo:t.state.pageNo||"1",pageSize:t.state.pageSize};t.queryData(r)}}))})),t.state={StrategyData:{},pageNo:1,pageSize:20,visibleLookRulesView:!1,lookRulesViewId:""},t}return(0,h.default)(a,[{key:"componentDidMount",value:function(){var e={name:"",pageNo:this.state.pageNo,pageSize:this.state.pageSize};this.queryData(e)}},{key:"render",value:function(){var e=this,t=this.props.form,n=t.getFieldDecorator,a=t.getFieldsValue,r=a(["name"]),c=a(["time"]);return k.default.createElement("div",{style:{padding:"2%"}},k.default.createElement(P.default,{title:"推荐管理"}),k.default.createElement("div",{className:"header-rules--search"},k.default.createElement(T.default,{layout:"inline",onSubmit:this.handleSubmit,style:{paddingBottom:30}},k.default.createElement(I,{label:"策略名称："},n("name")(k.default.createElement(s.default,{style:{width:"250px"},placeholder:"请输入策略名称"}))),k.default.createElement(I,{label:"推荐时间"},n("time")(k.default.createElement(A,{style:{width:"220px"},format:"YYYY-MM-DD"}))),k.default.createElement(I,null,k.default.createElement(l.default,{type:"primary",htmlType:"submit",style:{marginRight:"20px"}},"查询"),k.default.createElement(D.Link,{to:"/".concat(R.default.companyCode,"/").concat(R.default.siteCode,"/index/manager/add-rules-engine")},k.default.createElement(l.default,{type:"primary"},"新建推荐策略"))))),k.default.createElement(i.default,{rowKey:"id",columns:this.columns,dataSource:this.state.StrategyData.data,onChange:function(){},pagination:!1}),k.default.createElement(u.default,{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"},className:"rules-list-pagination",size:"small",showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["20","50","100"],defaultPageSize:20,current:this.state.pageNo||1,total:this.state.StrategyData.page&&this.state.StrategyData.page.pageTotal,showTotal:function(e){return"共计".concat(e,"条")},onChange:function(t,n){var a={name:r.name,pageNo:t,pageSize:n,startTime:c.time?(0,O.default)(c.time[0],"YYYY-MM-DD HH:mm:ss").valueOf():void 0,endTime:c.time?(0,O.default)(c.time[1],"YYYY-MM-DD HH:mm:ss").valueOf():void 0};e.queryData(a,t)},onShowSizeChange:function(t,n){var a={name:r.name,pageNo:t,pageSize:n,startTime:c.time?(0,O.default)(c.time[0],"YYYY-MM-DD HH:mm:ss").valueOf():void 0,endTime:c.time?(0,O.default)(c.time[1],"YYYY-MM-DD HH:mm:ss").valueOf():void 0};e.queryData(a,t)}}),k.default.createElement(o.default,{title:"推荐范围",width:"80%",key:this.state.lookRulesViewId,visible:this.state.visibleLookRulesView,footer:null,destroyOnClose:!0,onCancel:function(){return e.setState({visibleLookRulesView:!1})}},k.default.createElement(M.default,{rulesLook:!1,id:this.state.lookRulesViewId})))}}]),a}(k.Component),j=(0,E.connect)((function(e){return e}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,w.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Y))(T.default.create()(N));t.default=j},535:function(e,t,n){e.exports=n(11)(70)},536:function(e,t,n){e.exports=n(11)(166)},539:function(e,t,n){e.exports=n(11)(821)},540:function(e,t,n){"use strict";n.r(t);n(26),n(577),n(584)},544:function(e,t,n){e.exports=n(11)(846)},550:function(e,t,n){e.exports=n(11)(94)},558:function(e,t,n){e.exports=n(11)(251)},563:function(e,t,n){e.exports=n(11)(837)},564:function(e,t,n){"use strict";n.r(t);n(26),n(581),n(140)},566:function(e,t,n){e.exports=n(11)(817)},568:function(e,t,n){e.exports=n(11)(333)},575:function(e,t,n){"use strict";n.r(t);n(26),n(623)},577:function(e,t,n){},581:function(e,t,n){"use strict";n.r(t);n(26),n(585)},585:function(e,t,n){},590:function(e,t,n){"use strict";n.r(t);n(26),n(597)},591:function(e,t,n){e.exports=n(11)(819)},597:function(e,t,n){},623:function(e,t,n){},993:function(e,t,n){"use strict";var a=n(0);n(3),n(82),n(101),n(35),n(84),n(53),n(224);var r=a(n(225)),o=a(n(223)),u=r.default.confirm,i={companyCode:location.pathname.split("/")[1],siteCode:location.pathname.split("/")[2],getStatus:function(e,t){switch("string"==typeof t&&(t=parseInt(t)),e){case"homework":return i.homeworkStatus(t);case"readover":return i.readoverStatus(t);case"questionBank":return i.questionBankStatus(t);case"question":return i.questionStatus(t);case"paper":return i.paperStatus(t);case"door":return i.doorStatus(t)}},getType:function(e,t){switch(e){case"question":return i.questionType(t)}},homeworkStatus:function(e){switch(e){case 1:return"草稿";case 2:return"已上架";case 3:return"已下架"}},readoverStatus:function(e){switch(e){case 1:return"待评阅";case 2:return"已阅"}},questionBankStatus:function(e){switch(e){case 0:return"未使用";case 1:return"使用中"}},questionStatus:function(e){return e>0?"使用中":""},questionType:function(e){switch(e){case 1:return"单选题";case 2:return"多选题";case 3:return"判断题";case 4:return"问答题";default:return"一般题"}},paperStatus:function(e){switch(e){case 0:return"待阅卷";case 1:return"已阅卷"}},doorStatus:function(e){switch(e){case 0:return"未发布";case 1:return"已生效"}},paginationConfig:function(e,t){return t?{current:t,defaultCurrent:1,defaultPageSize:20,showTotal:function(e){return"共计 ".concat(e," 条")},pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,onChange:e,onShowSizeChange:e}:{defaultCurrent:1,defaultPageSize:20,showTotal:function(e){return"共计 ".concat(e," 条")},pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,onChange:e,onShowSizeChange:e}},formateTime:function(e){var t="";if(e){var n=new Date(parseInt(e));t+=n.getFullYear()+"-"+i.double(n.getMonth()+1)+"-"+i.double(n.getDate())+" "+i.double(n.getHours())+":"+i.double(n.getMinutes())}return t},formateTimeForJingxuan:function(e){var t="";if(e){var n=new Date(parseInt(e));t+=n.getFullYear()+"-"+i.double(n.getMonth()+1)+"-"+i.double(n.getDate())+" "+i.double(n.getHours())+":"+i.double(n.getMinutes())+":"+i.double(n.getSeconds())}return t},double:function(e){return e>=10?e:"0"+e},confirm:function(e,t){u({title:e,content:"",onOk:function(){t&&t()},onCancel:function(){}})},getUrlParam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=[],a="";if(e.length>0){n=-1==e.indexOf("&&")?e.split("?")[1].split("&"):e.split("?")[1].split("&&");for(var r=0;r<n.length;r++)if(-1!=n[r].indexOf(t+"=")){a=n[r].split("=")[1];break}}return a},treeDataFormate:function(e){var t=[];t=e.filter((function(e,t){return"0"==e.parentId}));for(var n=function(n){if((r=e.filter((function(e,a){return e.parentId==t[n].id}))).length>0){for(var a=0;a<r.length;a++)r[a].key=n+1+"-"+(a+1),r[a].code=n+1+"-"+(a+1),r[a].dkeys=n+1;t[n].children=r}t[n].key=n+1,t[n].code=n+1},a=0;a<t.length;a++){var r;n(a)}return t},getRouterBefore:function(){var e=location.pathname;return"/"+e.split("/")[1]+"/"+e.split("/")[2]},getRouterDetail:function(){var e=location.pathname;return"/"+e.split("/")[3]+"/"+e.split("/")[4]},quitLogin:function(e){Storage.sessionRemove("token"),setTimeout((function(){e&&e()}),500)},getWechatOrigin:function(e){return e.includes("dev.mg.kme")?e.split("://")[0]+"://dev.wechat.kmelearning.com":e.includes("test.mg.kme")?e.split("://")[0]+"://test.wechat.kmelearning.com":e.includes("uat.mg.kme")?e.split("://")[0]+"://uat.wechat.kmelearning.com":e.includes("//mg.kme")?e.split("://")[0]+"://wechat.kmelearning.com":void 0},disabledDate:function(e){return e&&e<(0,o.default)().endOf("day").subtract(1,"days")},secondToFormat:function(e){var t=0,n=0,a=0;return e>=0?(a=e%60,e>=60&&(n=(e-a)/60%60),e>=3600&&(t=(e-a-60*n)/60/60),i.doubleNum(t,n,a)):"00:00:00"},doubleNum:function(e,t,n){return e<10&&(e="0"+e),t<10&&(t="0"+t),n<10&&(n="0"+n),e+":"+t+":"+n},getRandomStr:function(e,t){for(var n="",a=0;a<e;a++)1==Math.floor(2*Math.random())?n+="0123456789"[Math.floor(10*Math.random())]:n+="abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())];return t?n:n+(new Date).getTime()}};e.exports=i}}]);