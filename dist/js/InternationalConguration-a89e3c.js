(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1293:function(e,t,a){},1814:function(e,t,a){"use strict";var n=a(4),l=a(0);a(7),a(3),a(5),a(43),a(9),a(10),a(8),a(20),a(34),a(23),a(6),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(574);var r=l(a(565));a(549);var u=l(a(544));a(162);var o=l(a(163));a(99);var i=l(a(100));a(578);var d=l(a(570));a(61);var c=l(a(62)),s=l(a(29)),f=l(a(30)),p=l(a(59)),h=l(a(32)),g=l(a(33)),m=l(a(31)),v=l(a(2));a(537);var y=l(a(536));a(719);var S=l(a(622)),b=n(a(1)),C=a(52),E=a(1815),w=l(a(1817)),D=l(a(226)),k=l(a(1818)),O=l(a(1820)),T=l(a(1322));function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,v.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=S.default.TreeNode,R=y.default.TextArea,z=function(e){(0,h.default)(n,e);var t,a=(t=n,function(){var e,a=(0,m.default)(t);if(x()){var n=(0,m.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,g.default)(this,e)});function n(e){var t;return(0,s.default)(this,n),t=a.call(this,e),(0,v.default)((0,p.default)(t),"columns",[{title:"序号",dataIndex:"number",key:"number",ellipsis:!0,align:"left",width:80},{title:"自定义中文字段",dataIndex:"name",key:"name",ellipsis:!0,align:"left",width:200},{title:"翻译",dataIndex:"value",key:"value",ellipsis:!0,align:"left",width:200},{title:"备注",dataIndex:"remark",key:"remark",ellipsis:!0,align:"left",width:200},{title:"操作",dataIndex:"operation",key:"operation",width:80,render:function(e,a,n){return 1==a.operations?b.default.createElement("div",{className:w.default.itemRowOperation},b.default.createElement("a",{style:{cursor:"pointer"},onClick:function(e){return t.operationClick(a,n,e)}},"修改"),a.showOperat&&b.default.createElement("div",{onClick:function(e){return e.stopPropagation()},className:w.default.itemOperationConfirm},b.default.createElement(R,{maxLength:1e3,defaultValue:a.value,onChange:function(e){return t.handleTranslate(e,n)},style:{width:"100%",fontSize:"14px"}}),b.default.createElement("div",{className:w.default.operationBtnRow},b.default.createElement("div",{onClick:function(){return t.rowCancel(a,n)}},"取消"),b.default.createElement("div",{onClick:function(){return t.rowOk(a,n)}},"保存")))):null}}]),(0,v.default)((0,p.default)(t),"handleTranslate",(function(e,a){var n=t.state.tableData;n[a].cache=e.target.value,t.setState({tableData:n},(function(){return console.log("this",t.state.tableData)}))})),(0,v.default)((0,p.default)(t),"operationClick",(function(e,a,n){n.stopPropagation(),t.setState({editData:e,editModalVisible:!0})})),(0,v.default)((0,p.default)(t),"handleCancel",(function(){t.setState({editModalVisible:!1})})),(0,v.default)((0,p.default)(t),"handleOk",(function(e){var a=t.state.editData;a.value=e.postTranslation;var n=t.state,l=(n.tableData,n.languageType),r=n.languageName,u={internationalizationId:t.state.editData.id,value:a.value,type:"DIY",languageType:l,languageName:r};t.props.languageAddTranslate(u,(function(e){console.log("res",e),"1000"==e.code?console.log("handleOk"):c.default.error("修改失败")})),t.setState({editModalVisible:!1,editData:a})})),(0,v.default)((0,p.default)(t),"rowCancel",(function(e,a){var n=t.state.tableData;n[a]=N({},n[a],{showOperat:!1}),t.setState({tableData:n})})),(0,v.default)((0,p.default)(t),"rowOk",(function(e,a){var n=t.state,l=n.tableData,r=n.languageType,u=n.languageName,o={internationalizationId:e.id,value:l[a].cache,type:"DIY",languageType:r,languageName:u};t.props.languageAddTranslate(o,(function(e){console.log("res",e),"1000"==e.code?(l[a].value=l[a].cache,l[a]=N({},l[a],{showOperat:!1}),delete l[a].cache,t.setState({tableData:l},(function(){return console.log("rowOk",t.state.tableData)}))):c.default.error("修改失败")}))})),(0,v.default)((0,p.default)(t),"queryData",(function(e){var a=t.state,n=a.pageNo,l=a.pageSize,r={languageType:a.languageType,pageNo:n,pageSize:l};t.props.internaGetPage(r,(function(e){if("1000"==e.code){var a=e.data.records;a.forEach((function(e,t){a[t]=N({},a[t],{operations:!0,number:t+1,showOperat:!1})})),t.setState({tableData:a,dataTotal:e.data.total})}}))})),(0,v.default)((0,p.default)(t),"loops",(function(e){return e.map((function(e){return e.chriden&&e.chriden.length>0?(console.log("=========item.chriden====="),console.log(e.chriden),b.default.createElement(P,{disabled:!0,title:b.default.createElement("div",null,b.default.createElement("span",null,e.languageName),b.default.createElement("div",{style:{fontSize:"12px",color:"#ccc"}},e.des)),key:e.languageCode},t.loops(e.chriden))):b.default.createElement(P,{title:b.default.createElement("div",null,b.default.createElement("span",null,e.languageName),b.default.createElement("div",{style:{fontSize:"12px",color:"#ccc"}},e.des)),key:e.languageCode})}))})),(0,v.default)((0,p.default)(t),"handleType",(function(e,a){console.log("8",e,a.selectedNodes[0].props.title),0!=e.length&&t.setState({languageType:e[0],pageNo:1,languageName:a.selectedNodes[0].props.title},(function(){t.queryData(e[0])}))})),(0,v.default)((0,p.default)(t),"onShowSizeChange",(function(e,a){t.setState({pageNo:e,pageSize:a},(function(){t.queryData()}))})),(0,v.default)((0,p.default)(t),"changePageNo",(function(e){var a=t.state.languageType;t.setState({pageNo:e},(function(){t.queryData(a)}))})),(0,v.default)((0,p.default)(t),"handleChangeSearch",(function(e){var a=e.target.value;t.setState({searchContent:a})})),(0,v.default)((0,p.default)(t),"handleSearch",(function(){})),(0,v.default)((0,p.default)(t),"dropDownClose",(function(){t.setState({dropDownVisible:!1})})),(0,v.default)((0,p.default)(t),"dropDownClick",(function(e){e.preventDefault();var a=t.state.dropDownVisible;t.setState({dropDownVisible:!a})})),(0,v.default)((0,p.default)(t),"advancedSearch",(function(e){console.log("search status: "+e);(0,p.default)(t);t.setState({translateStatus:e},(function(){}))})),t.state={listData:[],listList:[],tableData:[],dataTotal:0,languageType:"zh_CN",languageName:"简体中文",pageNo:1,pageSize:20,searchContent:"",translateStatus:"",dropDownVisible:!1,editModalVisible:!1,editData:null},t}return(0,f.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.languageTypeGetList({},(function(t){"1000"==t.code&&(t.data.records.length>0&&e.queryData(t.data.records[0].languageCode),e.setState({listData:[{languageName:"语种",languageCode:"-1",chriden:t.data.records}]}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.listData;t.dataTotal,this.state.tableData;return b.default.createElement(T.default,{inner:!0},b.default.createElement("div",{className:w.default.internationConfiguration},b.default.createElement(D.default,{title:"门户翻译"}),b.default.createElement(r.default,{gutter:16,style:{background:"#f0f2f5"}},b.default.createElement(d.default,{span:4},b.default.createElement("div",{className:w.default.listTree},a.length>0&&b.default.createElement(S.default,{defaultExpandAll:!0,defaultSelectedKeys:["zh_CN"],onSelect:this.handleType},this.loops(a)))),b.default.createElement(d.default,{span:20},b.default.createElement(r.default,{gutter:[1,1]},b.default.createElement(d.default,null,b.default.createElement("div",{className:w.default.listSearch},b.default.createElement(y.default.Search,{placeholder:"请输入中文字段或翻译",style:{width:250,marginRight:10},onChange:this.handleChangeSearch,onSearch:this.handleSearch}),b.default.createElement(o.default,{trigger:["click"],placement:"bottomCenter",overlay:b.default.createElement(k.default,{dropDownClose:this.dropDownClose,advancedSearch:this.advancedSearch}),visible:this.state.dropDownVisible},b.default.createElement("a",{className:"ant-dropdown-link",style:{lineHeight:"30px"},onClick:this.dropDownClick},"高级检索",b.default.createElement(i.default,{type:"down"}))))),b.default.createElement(d.default,null,b.default.createElement("div",{className:w.default.listTable},b.default.createElement(u.default,{rowKey:"id",dataSource:this.state.tableData,columns:this.columns,pagination:{total:this.state.dataTotal,showTotal:function(){return"共计 "+e.state.dataTotal+"条"},pageSize:this.state.pageSize,showSizeChanger:!0,pageSizeOptions:["20","50","100"],current:this.state.pageNo,onChange:this.changePageNo,onShowSizeChange:this.onShowSizeChange,showQuickJumper:!0}})))),b.default.createElement(r.default,null))),this.state.editModalVisible&&b.default.createElement(O.default,{editData:this.state.editData,handleCancel:this.handleCancel,handleOk:this.handleOk,visible:this.state.editModalVisible})))}}]),n}(b.Component);var j=(0,C.connect)(null,(function(e){return{languageTypeGetList:function(t,a){return e((0,E.typeGetList)(t,a))},internaGetPage:function(t,a){return e((0,E.getPage)(t,a))},languageAddTranslate:function(t,a){return e((0,E.addTranslate)(t,a))}}}))(z);t.default=j},1815:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.typeGetList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return function(a){return(0,l.default)({url:u,data:e}).then((function(e){t&&t(e)}))}},t.getPage=function(e,t){return function(a){return(0,l.default)({url:o,data:e}).then((function(e){t&&t(e)}))}},t.addTranslate=function(e,t){return function(a){return(0,l.default)({url:i,data:e}).then((function(e){t&&t(e)}))}};var l=n(a(76)),r=n(a(1816)),u=r.default.typeGetListApi,o=r.default.getPageApi,i=r.default.addTranslateApi},1816:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(63)),r={typeGetListApi:"GET ".concat(l.default.systemManage,"/internationalizationWord/languageType/getList"),getPageApi:"GET ".concat(l.default.systemManage,"/internationalization/getPage"),addTranslateApi:"POST ".concat(l.default.systemManage,"/internationalizationWord/add")};t.default=r},1817:function(e,t,a){e.exports={internationConfiguration:"internationConfiguration__w35Jd",listTree:"listTree__1BmxA",listSearch:"listSearch__1GQ8D",listTable:"listTable__1cY_D",tableClonumName:"tableClonumName__zo1U3",itemRowOperation:"itemRowOperation__1eFEm",itemOperationConfirm:"itemOperationConfirm__29LuH",operationBtnRow:"operationBtnRow__33rHL","ant-tree-treenode-disabled":"ant-tree-treenode-disabled__3No0M","ant-tree-node-content-wrapper":"ant-tree-node-content-wrapper__1fSak"}},1818:function(e,t,a){"use strict";var n=a(4),l=a(0);a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(140);var r=l(a(535));a(540);var u=l(a(539)),o=l(a(29)),i=l(a(30)),d=l(a(59)),c=l(a(32)),s=l(a(33)),f=l(a(31)),p=l(a(2));a(554);var h=l(a(550)),g=n(a(1)),m=l(a(1819));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=h.default.Option,S=function(e){(0,c.default)(n,e);var t,a=(t=n,function(){var e,a=(0,f.default)(t);if(v()){var n=(0,f.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.default)(this,e)});function n(e){var t;return(0,o.default)(this,n),t=a.call(this,e),(0,p.default)((0,d.default)(t),"handleChange",(function(e){t.setState({translateStatus:e})})),(0,p.default)((0,d.default)(t),"searchByData",(function(){t.props.advancedSearch(t.state.translateStatus),t.props.dropDownClose()})),(0,p.default)((0,d.default)(t),"resetSearch",(function(){t.setState({translateStatus:void 0},(function(){t.props.advancedSearch(t.state.translateStatus)})),t.props.dropDownClose()})),t.state={translateStatus:void 0},t}return(0,i.default)(n,[{key:"render",value:function(){var e={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:19}}};return g.default.createElement("div",{className:m.default.internationSearch},g.default.createElement(u.default,e,g.default.createElement(u.default.Item,{label:"状态"},g.default.createElement(h.default,{placeholder:"请选择状态",style:{width:320},onChange:this.handleChange,value:this.state.translateStatus},g.default.createElement(y,{value:"0"},"全部"),g.default.createElement(y,{value:"1"},"已翻译"),g.default.createElement(y,{value:"2"},"未翻译")))),g.default.createElement("div",{className:m.default.internationSearchButtons},g.default.createElement(r.default,{style:{marginRight:20},onClick:this.resetSearch},"重置"),g.default.createElement(r.default,{type:"primary",onClick:this.searchByData},"搜索")))}}]),n}(g.Component);t.default=S},1819:function(e,t,a){e.exports={internationSearch:"internationSearch__85dj2",internationSearchButtons:"internationSearchButtons__17Hbl"}},1820:function(e,t,a){"use strict";var n=a(4),l=a(0);a(51),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(224);var r=l(a(225));a(140);var u=l(a(535));a(537);var o=l(a(536)),i=l(a(98)),d=l(a(29)),c=l(a(30)),s=l(a(59)),f=l(a(32)),p=l(a(33)),h=l(a(31)),g=l(a(2));a(540);var m=l(a(539)),v=n(a(1));a(52);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var S=m.default.Item,b=function(e){(0,f.default)(n,e);var t,a=(t=n,function(){var e,a=(0,h.default)(t);if(y()){var n=(0,h.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,p.default)(this,e)});function n(e){var t;return(0,d.default)(this,n),t=a.call(this,e),(0,g.default)((0,s.default)(t),"handleCancel",(function(){t.props.handleCancel()})),(0,g.default)((0,s.default)(t),"handleOk",(function(){var e=t.props,a=e.form,n=(e.editData,(0,s.default)(t));a.validateFields((function(e,t){e||n.props.handleOk(t)}))})),t.state={},t}return(0,c.default)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.form,a=e.editData;t.setFieldsValue({preTranslation:a.name,postTranslation:a.value,translateRemark:""})}},{key:"render",value:function(){var e=this.props.visible,t=this.props.form.getFieldDecorator,a={labelCol:{span:6},wrapperCol:{span:17}};return v.default.createElement(r.default,{visible:e,title:"翻译",footer:null,onCancel:this.handleCancel},v.default.createElement(m.default,null,v.default.createElement(S,(0,i.default)({},a,{label:"中文字段"}),v.default.createElement("span",null,this.props.editData.name)),v.default.createElement(S,(0,i.default)({},a,{label:"翻译"}),t("postTranslation",{rules:[{required:!0,message:"请输入翻译"}]})(v.default.createElement(o.default,{placeholder:"请输入翻译",style:{width:"100%"},maxLength:50}))),v.default.createElement(S,(0,i.default)({},a,{label:"备注"}),t("translateRemark",{rules:[{required:!1,message:"请输入备注"}]})(v.default.createElement(o.default,{placeholder:"请输入备注",style:{width:"100%"},maxLength:30}))),v.default.createElement(S,{style:{textAlign:"right",marginBottom:"0"}},v.default.createElement(u.default,{onClick:this.handleCancel},"取消"),v.default.createElement(u.default,{type:"primary",style:{marginLeft:"10px"},onClick:this.handleOk},"确定"))))}}]),n}(v.Component),C=m.default.create()(b);t.default=C},535:function(e,t,a){e.exports=a(11)(70)},536:function(e,t,a){e.exports=a(11)(166)},537:function(e,t,a){"use strict";a.r(t);a(26),a(586),a(140)},539:function(e,t,a){e.exports=a(11)(821)},540:function(e,t,a){"use strict";a.r(t);a(26),a(577),a(584)},544:function(e,t,a){e.exports=a(11)(846)},550:function(e,t,a){e.exports=a(11)(94)},565:function(e,t,a){e.exports=a(11)(170)},570:function(e,t,a){e.exports=a(11)(99)},574:function(e,t,a){"use strict";a.r(t);a(26),a(584)},577:function(e,t,a){},578:function(e,t,a){"use strict";a.r(t);a(26),a(584)},586:function(e,t,a){},622:function(e,t,a){e.exports=a(11)(854)},719:function(e,t,a){"use strict";a.r(t);a(26),a(1293)}}]);