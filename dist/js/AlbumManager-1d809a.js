(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1008:function(e,t,a){},1294:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(63)),l={courseManagement:{courseList:"GET ".concat(r.default.webManage,"/course/list"),courseClassifyList:"GET ".concat(r.default.webManage,"/classify/list"),batchClassifyUrl:"POST ".concat(r.default.webManage,"/course/bath/edit/classify"),batchShelvesUrl:"POST ".concat(r.default.webManage,"/course/bath/edit/shelves"),courseCheckRelationUrl:"POST ".concat(r.default.webManage,"/course/bath/edit/shelves/check"),batchStrategyUrl:"POST ".concat(r.default.webManage,"/course/bath/edit/strategy"),courseCheckStatusUrl:"POST ".concat(r.default.webManage,"/course/bath/edit/strategy/check"),courseUpUrl:"POST ".concat(r.default.webManage,"/course/up"),courseDownUrl:"POST ".concat(r.default.webManage,"/course/down"),courseDelUrl:"POST ".concat(r.default.webManage,"/course/delete"),courseExportUrl:"GET ".concat(r.default.webManage,"/course/list/export"),courseVsRangeUrl:"GET ".concat(r.default.webManage,"/course/coursrAccount/list"),courseSaveRangeUrl:"POST ".concat(r.default.webManage,"/course/coursrAccount/save"),courseDataUrl:"GET ".concat(r.default.webManage,"/document/query/ByRelationId"),coursDataDelUrl:"POST ".concat(r.default.webManage,"/documentRelation/delete"),courseDataMoveUrl:"POST ".concat(r.default.webManage,"/documentRelation/move"),queryDataUrl:"POST ".concat(r.default.webManage,"/document/query/onCondition"),dataSaveUrl:"POST ".concat(r.default.webManage,"/documentRelation/batch/save"),DataClassifyUrl:"GET ".concat(r.default.webManage,"/DocumentClassify/query"),commentListUrl:"GET ".concat(r.default.webManage,"/comment/list"),replyListUrl:"GET ".concat(r.default.webManage,"/comment/reply/list"),auditCommentUrl:"POST ".concat(r.default.webManage,"/comment/auditComment"),auditReplyUrl:"POST ".concat(r.default.webManage,"/comment/auditReply"),commentExportUrl:"GET ".concat(r.default.webManage,"/comment/list/export"),commentUpUrl:"GET ".concat(r.default.webManage,"/comment/up"),commentDownUrl:"GET ".concat(r.default.webManage,"/comment/down")}};t.default=l},1392:function(e,t,a){"use strict";var n=a(4),r=a(0);a(44),a(43),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(569);var l=r(a(558));a(549);var o=r(a(544));a(140);var u=r(a(535)),c=r(a(29)),s=r(a(30)),i=r(a(59)),d=r(a(32)),f=r(a(33)),m=r(a(31)),p=r(a(2));a(764);var h=r(a(765));a(540);var g=r(a(539));a(554);var y=r(a(550));a(537);var v=r(a(536)),R=n(a(1)),b=(a(636),r(a(141)),r(a(223)),a(52)),C=a(906),S=r(a(1393));function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}v.default.Search,y.default.Option,g.default.Item,h.default.TreeNode;var E=function(e){(0,d.default)(n,e);var t,a=(t=n,function(){var e,a=(0,m.default)(t);if(w()){var n=(0,m.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,f.default)(this,e)});function n(){var e;(0,c.default)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return e=a.call.apply(a,[this].concat(r)),(0,p.default)((0,i.default)(e),"autoAddEllipsis",(function(e,t){for(var a=0,n="",r="",l=0,o=e.length;a<o;a++){if((n=e.charCodeAt(a))>=1&&n<=126||65376<=n&&n<=65439?l++:l+=2,l>=t){r=e.substr(0,a)+"...";break}r+=e.charAt(a)}return r})),(0,p.default)((0,i.default)(e),"requestCourseResource",(function(t,a,n){var r=e.state.relationType;e.props.getCourseResourceById({relationId:t,relationType:r,pageNo:a,pageSize:n},(function(){var r=e.props.courseResource.records,l=e.props.courseResource.total;r.map((function(e,t){e.key=e.no})),e.setState({relationId:t,pageNo:a,pageSize:n,relationResourceList:r,total:l,deleteModalVisible:!1,deleteItemId:0})}))})),(0,p.default)((0,i.default)(e),"checkResourceType",(function(e){var t="";switch(parseInt(e)){case 1:t="文档";break;case 2:t="图片";break;case 3:t="音频";break;case 4:t="视频";break;case 5:t="其它"}return t})),(0,p.default)((0,i.default)(e),"showDeleteView",(function(t){e.setState({deleteItemId:t.documentRelationId,deleteModalVisible:!0})})),(0,p.default)((0,i.default)(e),"deleteResource",(function(){var t=e.state.deleteItemId;e.props.deleteCourseResource({id:t},(function(){e.requestCourseResource(e.state.relationId,e.state.pageNo,e.state.pageSize)}))})),(0,p.default)((0,i.default)(e),"moveResource",(function(t,a){e.props.moveCourseResource({id:t.documentRelationId,moveUp:a,relationType:e.state.relationType,relationId:e.state.relationId},(function(){e.requestCourseResource(e.state.relationId,e.state.pageNo,e.state.pageSize)}))})),(0,p.default)((0,i.default)(e),"closeCourseResView",(function(){e.setState({courseResourceVisible:!1,relationId:0,relationResourceList:[],pageNo:1,total:0})})),(0,p.default)((0,i.default)(e),"handleCRPageChange",(function(t,a){e.setState({pageNo:t}),e.requestCourseResource(e.state.relationId,t,a)})),(0,p.default)((0,i.default)(e),"handleCRPageSizeChange",(function(t,a){e.setState({pageSize:a,pageNo:1},(function(){e.requestCourseResource(e.state.relationId,e.state.pageNo,a)}))})),(0,p.default)((0,i.default)(e),"cancelDelete",(function(){e.setState({deleteModalVisible:!1})})),(0,p.default)((0,i.default)(e),"closeCourseResView",(function(){e.setState({courseResourceVisible:!1,courseRelationId:0,courseResourceList:[],courseRelationNo:1,courseResourceTotal:0})})),e.state={relationId:"",relationResourceList:[],total:0,pageNo:1,pageSize:10,deleteItemId:0,deleteModalVisible:!1},e.courseResColumns=[{title:"序号",dataIndex:"key",className:"column-key",key:"key"},{title:"资料名称",dataIndex:"name",className:"column-name",key:"name",render:function(t){return R.default.createElement("div",{className:"name-text",style:{width:"360px"}},e.autoAddEllipsis(t,108))}},{title:"资料编码",dataIndex:"codeName",className:"column-id",key:"codeName"},{title:"资料类型",dataIndex:"type",className:"column-type",key:"type",render:function(t,a){return e.checkResourceType(t)}},{title:"资料大小",dataIndex:"fileSizeName",className:"column-size",key:"fileSizeName",render:function(e){return e+""}},{title:"排序",dataIndex:"action1",className:"column-up-down",key:"action1",render:function(t,a){return R.default.createElement("div",null,R.default.createElement("div",null,R.default.createElement("a",{onClick:function(){return e.moveResource(a,!0)},disabled:1==a.key},"上移")),R.default.createElement("div",null,R.default.createElement("a",{onClick:function(){return e.moveResource(a,!1)},disabled:a.key==e.state.total},"下移")))}},{title:"操作",dataIndex:"action2",className:"column-delete",key:"action2",render:function(t,a){return R.default.createElement("div",null,R.default.createElement(S.default,{content:"确定删除该课程资料，删除后不可恢复",visible:e.state.deleteModalVisible,onOk:e.deleteResource,onCancel:function(){return e.setState({deleteModalVisible:!1})},title:"删除提醒"},R.default.createElement("a",{onClick:function(){e.showDeleteView(a)}},"删除")))}}],e}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=(t.relationId,t.pageNo),n=t.pageSize;this.setState({relationId:this.props.relationId,relationType:this.props.relationType},(function(){e.requestCourseResource(e.props.relationId,a,n)}))}},{key:"render",value:function(){var e=this;return R.default.createElement("div",null,R.default.createElement("div",{className:"courseResourceModal"},R.default.createElement(u.default,{type:"primary",className:"courseResource-add",onClick:this.props.openAddResourceView},"添加资料"),R.default.createElement(o.default,{rowKey:function(e){return e.no},className:"courseResource-table",columns:this.courseResColumns,dataSource:this.state.relationResourceList,pagination:!1}),R.default.createElement(l.default,{className:"material-list-pagination",size:"small",current:this.state.pageNo,total:this.state.total,showTotal:function(){return"共计 "+e.state.total+"条"},defaultPageSize:this.state.pageSize,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["10","20","30"],onChange:this.handleCRPageChange,onShowSizeChange:this.handleCRPageSizeChange})))}}]),n}(R.Component);var I=(0,b.connect)((function(e,t){return{courseResource:e.courseManagementReducer.courseResource}}),(function(e){return{getCourseResourceById:function(t,a){return e((0,C.getCourseResourceById)(t,a))},deleteCourseResource:function(t,a){return e((0,C.deleteCourseResource)(t,a))},moveCourseResource:function(t,a){return e((0,C.moveCourseResource)(t,a))}}}))(g.default.create()(E));t.default=I},1393:function(e,t,a){"use strict";var n=a(4),r=a(0);a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(224);var l=r(a(225));a(140);var o=r(a(535));a(99);var u=r(a(100)),c=r(a(29)),s=r(a(30)),i=r(a(32)),d=r(a(33)),f=r(a(31)),m=n(a(1)),p=r(a(1394));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var g=function(e){(0,i.default)(n,e);var t,a=(t=n,function(){var e,a=(0,f.default)(t);if(h()){var n=(0,f.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,d.default)(this,e)});function n(){return(0,c.default)(this,n),a.apply(this,arguments)}return(0,s.default)(n,[{key:"render",value:function(){return m.default.createElement("span",null,this.props.children?this.props.children:null,m.default.createElement(l.default,{width:this.props.width?this.props.width:300,visible:!!this.props.visible&&this.props.visible,title:this.props.title?this.props.title:"",onCancel:this.props.onCancel,footer:null,maskStyle:{backgroundColor:"rgba(55, 55, 55, 0.2)"}},m.default.createElement("div",{className:p.default.publicModalContainer},m.default.createElement("p",{className:p.default.infoCircle},m.default.createElement(u.default,{type:"info-circle",className:p.default.flagIcon})),m.default.createElement("p",{className:p.default.infoCircle},this.props.content?this.props.content:""),m.default.createElement("div",{className:p.default.infoCircle},m.default.createElement(o.default,{style:{marginRight:"16px"},onClick:this.props.onCancel},"取消"),m.default.createElement(o.default,{type:"primary",onClick:this.props.onOk},"1确定")))))}}]),n}(m.Component);t.default=g},1394:function(e,t,a){e.exports={publicModalContainer:"publicModalContainer__2ETrM",infoCircle:"infoCircle__2YdFG",flagIcon:"flagIcon__1iGV2"}},1395:function(e,t,a){"use strict";var n=a(4),r=a(0);a(44),a(43),a(51),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(569);var l=r(a(558));a(549);var o=r(a(544));a(140);var u=r(a(535)),c=r(a(29)),s=r(a(30)),i=r(a(59)),d=r(a(32)),f=r(a(33)),m=r(a(31)),p=r(a(2));a(764);var h=r(a(765));a(540);var g=r(a(539));a(554);var y=r(a(550));a(537);var v=r(a(536)),R=n(a(1)),b=(a(636),r(a(141)),r(a(223)),r(a(1396))),C=a(52),S=a(906);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}v.default.Search;var E=y.default.Option,I=(g.default.Item,h.default.TreeNode,function(e){(0,d.default)(n,e);var t,a=(t=n,function(){var e,a=(0,m.default)(t);if(w()){var n=(0,m.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,f.default)(this,e)});function n(){var e;(0,c.default)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return e=a.call.apply(a,[this].concat(r)),(0,p.default)((0,i.default)(e),"autoAddEllipsis",(function(e,t){for(var a=0,n="",r="",l=0,o=e.length;a<o;a++){if((n=e.charCodeAt(a))>=1&&n<=126||65376<=n&&n<=65439?/^[A-Z]+$/.test(e.charAt(a))?l+=2:l++:l+=2,l>=t){r=e.substr(0,a)+"...";break}r+=e.charAt(a)}return r})),(0,p.default)((0,i.default)(e),"dateFormat",(function(t){var a=new Date;return a.setTime(t),a.getFullYear()+"-"+e.getMonth(a)+"-"+e.getDay(a)+"   "+e.getHours(a)+":"+e.getMinutes(a)+":"+e.getSeconds(a)})),(0,p.default)((0,i.default)(e),"getMonth",(function(e){var t="";return(t=e.getMonth()+1)<10&&(t="0"+t),t})),(0,p.default)((0,i.default)(e),"getDay",(function(e){var t="";return(t=e.getDate())<10&&(t="0"+t),t})),(0,p.default)((0,i.default)(e),"getHours",(function(e){var t="";return(t=e.getHours())<10&&(t="0"+t),t})),(0,p.default)((0,i.default)(e),"getMinutes",(function(e){var t="";return(t=e.getMinutes())<10&&(t="0"+t),t})),(0,p.default)((0,i.default)(e),"getSeconds",(function(e){var t="";return(t=e.getSeconds())<10&&(t="0"+t),t})),(0,p.default)((0,i.default)(e),"checkResourceType",(function(e){var t="";switch(parseInt(e)){case 1:t="文档";break;case 2:t="图片";break;case 3:t="音频";break;case 4:t="视频";break;case 5:t="其它"}return t})),(0,p.default)((0,i.default)(e),"reqestResourceByRelation",(function(t){var a=e.state,n=a.courseRelationId,r=a.resourceViewSize,l=a.selectObj,o=a.relationType,u={classifyId:l.classId,enableFilter:!0,name:l.id,pageNo:t,pageSize:r,relationId:n,relationType:o,type:l.type};e.props.getResourceByRelationId(u,(function(){var t=e.props.resourceByRelation.records;t.map((function(e,t){e.key=e.no}));var a=e.props.resourceByRelation.total;e.setState({resourceViewList:t,resourceViewVisible:!0,courseResourceVisible:!1,resourceViewTotal:a})})),e.props.getResourceClassify(!0,(function(){var t=e.state.resourceClassify;t=e.checkTreeSelectData(e.props.resourceClassify),e.setState({resourceClassList:t})}))})),(0,p.default)((0,i.default)(e),"checkTreeSelectData",(function(e){for(var t=0;t<e.length;t++){var a=e[t];if(a.title=a.classifyVo.codeName,a.value=a.classifyVo.id,a.key=a.classifyVo.id,a.children&&a.children.length>0)for(var n=0;n<a.children.length;n++){var r=a.children[n];if(r.title=r.classifyVo.codeName,r.value=r.classifyVo.id,r.key=r.classifyVo.id,r.children&&r.children.length>0)for(var l=0;l<r.children.length;l++){var o=r.children[l];o.title=o.classifyVo.codeName,o.value=o.classifyVo.id,o.key=o.classifyVo.id}}}return console.log("list:___"+JSON.stringify(e)),e})),(0,p.default)((0,i.default)(e),"onNameChange",(function(t){console.log(t.currentTarget.value);var a=e.state.selectObj;a.id=t.currentTarget.value,e.setState({selectObj:a})})),(0,p.default)((0,i.default)(e),"onTypeChange",(function(t){console.log(t);var a=e.state.selectObj;a.type=t,e.setState({selectObj:a})})),(0,p.default)((0,i.default)(e),"onClassChange",(function(t){t||(t=null),console.log(t);var a=e.state.selectObj;a.classId=t,e.setState({selectObj:a})})),(0,p.default)((0,i.default)(e),"handleSearchSubmit",(function(t){t.preventDefault(),e.setState({resourceViewNo:1},(function(){e.reqestResourceByRelation(e.state.resourceViewNo)}))})),(0,p.default)((0,i.default)(e),"addResource",(function(){e.setState({addLoading:!0});var t=e.state,a=t.selectedResourceKeys,n=t.courseRelationId,r=t.relationType;e.props.addResourceByRelation({documentIds:a,relationType:r,relationId:n},(function(){var t=e.state.selectObj;t.classId=null,t.type=null,t.name=null,e.setState({selectedResourceKeys:[],selectObj:t,resourceViewList:[],addLoading:!1,courseResourceNo:1,resourceViewNo:1},(function(){e.props.openResource(e.state.courseRelationId)}))}))})),(0,p.default)((0,i.default)(e),"onSelectChange",(function(t){console.log("selectedRowKeys changed: ",t),e.setState({selectedResourceKeys:t})})),(0,p.default)((0,i.default)(e),"handleRVPageChange",(function(t,a){e.setState({resourceViewNo:t}),e.reqestResourceByRelation(t)})),(0,p.default)((0,i.default)(e),"closeResourceView",(function(){e.setState({courseRelationId:0,resourceClassList:[],resourceViewList:[],resourceViewNo:1,resourceViewTotal:0})})),e.state={courseRelationId:"",relationType:0,resourceViewVisible:!1,resourceViewList:[],resourceViewTotal:0,resourceViewNo:1,resourceViewSize:10,resourceClassList:[],selectObj:{id:null,type:null,classId:null},selectedResourceKeys:[],addLoading:!1},e.resourceColumns=[{title:"资料编码",dataIndex:"codeName",className:"column-index",key:"codeName"},{title:"资料名称",dataIndex:"name",className:"column-name",key:"name",render:function(t){return R.default.createElement("div",null,e.autoAddEllipsis(t,60))}},{title:"资料类型",dataIndex:"type",className:"column-type",key:"type",render:function(t,a){return e.checkResourceType(t)}},{title:"资料大小",dataIndex:"fileSizeName",className:"column-size",key:"fileSizeName",render:function(e){return e+""}},{title:"上传/更新时间",dataIndex:"updateTime",className:"column-up-down",key:"updateTime",render:function(t){return e.dateFormat(t)}}],e}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("relationID:"+this.props.courseRelationId),this.setState({courseRelationId:this.props.courseRelationId,relationType:this.props.relationType},(function(){e.reqestResourceByRelation(e.state.resourceViewNo)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedResourceKeys,n=t.addLoading,r={selectedResourceKeys:a,onChange:this.onSelectChange},c=a.length>0;return R.default.createElement("div",{className:b.default.data_source_modal},R.default.createElement("div",{className:b.default.head_search},R.default.createElement("label",null,R.default.createElement("span",{className:b.default.item_pre},"资料名称/编码"),R.default.createElement(v.default,{type:"text",style:{width:200},className:"resourceId",placeholder:"请输入资料名称或编码",onChange:this.onNameChange})),R.default.createElement("label",null,R.default.createElement("span",{className:b.default.item_pre},"资料类型"),R.default.createElement(y.default,{defaultValue:"null",style:{width:100},onChange:this.onTypeChange},R.default.createElement(E,{value:"null"},"全部"),R.default.createElement(E,{value:"1"},"文档"),R.default.createElement(E,{value:"2"},"图片"),R.default.createElement(E,{value:"3"},"音频"),R.default.createElement(E,{value:"4"},"视频"),R.default.createElement(E,{value:"5"},"其它"))),R.default.createElement("label",null,R.default.createElement("span",{className:b.default.item_pre},"资源分类名称"),R.default.createElement(h.default,{showSearch:!0,style:{width:122,height:33},value:this.state.selectObj.classId,dropdownStyle:{maxHeight:200,overflow:"auto"},placeholder:"全部",allowClear:!0,treeDefaultExpandAll:!0,onChange:this.onClassChange,treeData:this.state.resourceClassList})),R.default.createElement("span",null,R.default.createElement(u.default,{onClick:this.handleSearchSubmit,type:"primary",className:"resourceView-search"},"查询"))),R.default.createElement(u.default,{type:"primary",className:b.default.my_button,onClick:this.addResource,disabled:!c,loading:n},"添加"),R.default.createElement(o.default,{rowKey:function(e){return e.id},rowSelection:r,columns:this.resourceColumns,dataSource:this.state.resourceViewList,pagination:!1}),R.default.createElement(l.default,{className:b.default.my_pagination,size:"small",total:this.state.resourceViewTotal,current:this.state.resourceViewNo,showTotal:function(){return"共计 "+e.state.resourceViewTotal+"条"},defaultPageSize:this.state.resourceViewSize,showQuickJumper:!0,onChange:this.handleRVPageChange}))}}]),n}(R.Component));var N=(0,C.connect)((function(e,t){return{resourceClassify:e.courseManagementReducer.resourceClassify,resourceByRelation:e.courseManagementReducer.resourceByRelation}}),(function(e){return{getResourceClassify:function(t,a){return e((0,S.getResourceClassify)(t,a))},getResourceByRelationId:function(t,a){return e((0,S.getResourceByRelationId)(t,a))},addResourceByRelation:function(t,a){return e((0,S.addResourceByRelation)(t,a))}}}))(g.default.create()(I));t.default=N},1396:function(e,t,a){e.exports={data_source_modal:"data_source_modal__Vl7wu",head_search:"head_search__hW2Wi",item_pre:"item_pre__2f7AY",my_button:"my_button__CGy99",my_pagination:"my_pagination__1HB6L"}},1673:function(e,t,a){"use strict";var n=a(4),r=a(0);a(7),a(44),a(3),a(5),a(82),a(103),a(43),a(107),a(51),a(9),a(10),a(8),a(20),a(34),a(23),a(905),a(84),a(148),a(6),a(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(224);var l=r(a(225));a(549);var o=r(a(544));a(140);var u=r(a(535));a(764);var c=r(a(765));a(537);var s=r(a(536)),i=r(a(79));a(564);var d=r(a(563));a(61);var f=r(a(62)),m=r(a(29)),p=r(a(30)),h=r(a(59)),g=r(a(32)),y=r(a(33)),v=r(a(31)),R=r(a(2));a(554);var b=r(a(550));a(540);var C=r(a(539)),S=n(a(1)),w=a(52),E=a(1019),I=r(a(226)),N=a(65),k=r(a(141)),T=r(a(1392)),_=r(a(1395)),O=r(a(1674));function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){(0,R.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function U(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var M=C.default.Item,x=b.default.Option,D=function(e){(0,g.default)(n,e);var t,a=(t=n,function(){var e,a=(0,v.default)(t);if(U()){var n=(0,v.default)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,y.default)(this,e)});function n(e){var t;return(0,m.default)(this,n),t=a.call(this,e),(0,R.default)((0,h.default)(t),"handleUp",(function(e){var a=t.state,n=a.value,r=a.pageNo,l=a.pageSize;t.props.upAlbum({id:e.id,type:1},L({},n,{pageNo:r,pageSize:l}))})),(0,R.default)((0,h.default)(t),"handleDown",(function(e){var a=t.state,n=a.value,r=a.pageNo,l=a.pageSize;t.props.downAlbum(e,L({},n,{pageNo:r,pageSize:l}))})),(0,R.default)((0,h.default)(t),"openResource",(function(e){t.setState({relationResourceId:e,relationResourceVisible:!0,resourceViewVisible:!1})})),(0,R.default)((0,h.default)(t),"loadCourseList",(function(e){t.props.exportCourse({albumId:e},(function(e){1e3==e.code?f.default.success(e.data):f.default.success(e.subMsg)}))})),(0,R.default)((0,h.default)(t),"handleSearch",(function(){var e=t.state,a=e.pageNo,n=e.pageSize;t.props.form.validateFields((function(e,r){console.log("Received values of form: ",r),"全部"===r.alClassifyId&&delete r.alClassifyId,t.setState({value:r},(function(){this.setState({pageNo:1}),console.log(a,"1562141319024")})),t.props.getAlbumList(L({},r,{pageNo:1,pageSize:n}))}))})),(0,R.default)((0,h.default)(t),"handleDeleteRows",(function(){var e=t.state.checkArr;if(0!=e.length){for(var a=[],n=0;n<e.length;n++){if(1==e[n].shelves)return void f.default.info("已上架专辑不能删除！");a.push(e[n].id)}var r=t.state,l=L({},r.value,{pageNo:r.pageNo,pageSize:r.pageSize});t.props.deleteAlbum(a,l,(function(){f.default.info("专辑已删除")})),t.setState({selectedRowKeys:[]})}else f.default.info("请先选择专辑")})),(0,R.default)((0,h.default)(t),"showTotal",(function(e){return"共计 ".concat(e," 条")})),(0,R.default)((0,h.default)(t),"handlePageChange",(function(e,a){t.setState({pageNo:e}),t.props.getAlbumList(L({},t.state.value,{pageNo:e,pageSize:a}))})),(0,R.default)((0,h.default)(t),"handlePageSizeChange",(function(e,a){var n=t.state.pageNo;t.setState({pageSize:a}),t.props.getAlbumList(L({},t.state.value,{pageNo:1,pageSize:a})),t.setState({pageNo:n},(function(){console.log(n,"pageNo123")}))})),(0,R.default)((0,h.default)(t),"closeCourseResView",(function(){t.setState({relationResourceVisible:!1})})),(0,R.default)((0,h.default)(t),"closeResourceView",(function(){t.setState({resourceViewVisible:!1})})),(0,R.default)((0,h.default)(t),"openAddResourceView",(function(){t.setState({relationResourceVisible:!1,resourceViewVisible:!0})})),t.state={value:"",filteredInfo:{},selectedRowKeys:[],checkArrForBatch:[],checkArr:[],total:0,pageNo:1,pageSize:20,albumList:[],relationResourceId:0,relationResourceVisible:!1,resourceViewVisible:!1,relationType:3,sortList:[]},t}return(0,p.default)(n,[{key:"componentDidMount",value:function(){var e=this;e.props.getAlbumList({pageNo:1,pageSize:e.state.pageSize});e.props.getSortList({pageNo:1,pageSize:1e4,isStartHQ:!1},(function(){for(var t=e.props.sortList,a=0;a<t.length;a++)"全部"==t[a].value&&t.splice(a,1);e.setState({sortList:t})}))}},{key:"openResource",value:function(e){this.setState({relationResourceId:e,relationResourceVisible:!0,resourceViewVisible:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.albumList,n=t.sortList,r=this.state,f=r.selectedRowKeys,m=r.pageSize,p=r.pageNo;n[0]&&"全部"!==n[0].title&&n.unshift({title:"全部",value:"全部",id:"0"}),a.list&&a.list.map((function(e,t){e.index=a.total-(p-1)*m-t}));var h=[{title:"序号",dataIndex:"index"},{title:"专辑名称",dataIndex:"name",render:function(e,t){return S.default.createElement("div",null,S.default.createElement("img",{src:t.image,style:{width:50,height:50,margin:"0 16px"}}),S.default.createElement("span",{title:e},e.length>10?e.substring(9,0)+"...":e))}},{title:"上架状态",dataIndex:"shelves",render:function(e,t){return S.default.createElement("span",null,0===t.shelves&&S.default.createElement("span",null,"草稿"),1===t.shelves&&S.default.createElement("span",null,"已上架"),2===t.shelves&&S.default.createElement("span",null,"草稿"))}},{title:"连载状态",dataIndex:"overed",render:function(e,t){return S.default.createElement("span",null,0===t.overed&&S.default.createElement("span",null,"连载中"),1===t.overed&&S.default.createElement("span",null,"已完结"))}},{title:"操作",dataIndex:"action",render:function(t,a){return S.default.createElement("span",null,1===a.shelves&&S.default.createElement(N.Link,{to:{pathname:"/"+k.default.companyCode+"/"+k.default.siteCode+"/index/online/album/album-management/look/".concat(a.id),query:{id:a.id}}},"查看"),1!==a.shelves&&S.default.createElement(N.Link,{to:{pathname:"/"+k.default.companyCode+"/"+k.default.siteCode+"/index/online/album/album-management/edit/".concat(a.id),query:{id:a.id,source:a.source,valid:a.valid}}},"修改"),"    ",1===a.shelves&&S.default.createElement(d.default,{title:"确定执行此操作？",onConfirm:function(){return e.handleDown(a.id)}},S.default.createElement("a",null,"下架")),1!==a.shelves&&S.default.createElement(d.default,{title:"确定执行此操作？",onConfirm:function(){return e.handleUp(a)}},S.default.createElement("a",null,"上架")),"    ",0==a.commentEnable?S.default.createElement(N.Link,{to:"/".concat(k.default.companyCode,"/").concat(k.default.siteCode,"/index/online/album/comment/").concat(a.id,"/").concat(a.name),disabled:a.commentEnable},"评论管理"):S.default.createElement("a",{disabled:!0},"评论管理"),"    ",S.default.createElement("a",{onClick:function(){return e.openResource(a.id)},disabled:a.documentEnable},"资料"),"    ",S.default.createElement("a",{onClick:function(){return e.loadCourseList(a.id)}},"导出课程清单"),"    ",0==a.overed?S.default.createElement(N.Link,{to:{pathname:"/".concat(k.default.companyCode,"/").concat(k.default.siteCode,"/index/online/album/album-management/update/").concat(a.id),query:{id:a.id}}},"更新"):S.default.createElement("a",{disabled:!0},"更新"),"    ")}}],g=this.props.form.getFieldDecorator,y={selectedRowKeys:f,onChange:function(t,a){console.log("RowKeys==,",t),console.log("selectedRows==",a);var n=(0,i.default)(new Set([].concat((0,i.default)(e.state.checkArrForBatch),(0,i.default)(a)))).filter((function(e){return t.includes(e.id)}));console.log("dataFilter==",n),e.setState({selectedRowKeys:t,checkArr:a,checkArrForBatch:n})},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};return S.default.createElement("div",{className:O.default.album_management_body},S.default.createElement(I.default,{title:"专辑管理"}),S.default.createElement(C.default,{className:O.default.head_search,layout:"inline"},S.default.createElement(M,{label:"关键字"},g("name")(S.default.createElement(s.default,{placeholder:"请输入专辑名称、自定义关键词",style:{fontSize:12,width:200}}))),S.default.createElement(M,{label:"上架状态："},g("status")(S.default.createElement(b.default,{style:{zIndex:1,fontSize:12,width:130},placeholder:"请选择上架状态"},S.default.createElement(x,{value:""},"全部"),S.default.createElement(x,{value:2},"草稿"),S.default.createElement(x,{value:1},"已上架")))),S.default.createElement(M,{label:"连载状态："},g("overed")(S.default.createElement(b.default,{style:{fontSize:12,width:130},placeholder:"请选择连载状态"},S.default.createElement(x,{value:""},"全部"),S.default.createElement(x,{value:0},"连载中"),S.default.createElement(x,{value:1},"已完结")))),S.default.createElement(M,{label:"专辑分类："},g("alClassifyId")(S.default.createElement(c.default,{style:{fontSize:12,width:130},dropdownStyle:{maxHeight:400,overflow:"auto",width:200,zIndex:1},treeData:n,placeholder:"请选择专辑分类",onChange:this.handleSearchSelect}))),S.default.createElement("span",null," ",S.default.createElement(u.default,{type:"primary",style:{marginTop:"4px"},onClick:this.handleSearch},"查询"))),S.default.createElement("div",{className:O.default.head_btns},S.default.createElement(N.Link,{to:"/"+k.default.companyCode+"/"+k.default.siteCode+"/index/online/album/album-management/create"},S.default.createElement(u.default,{type:"primary",className:"material-btn"},"新建专辑")),S.default.createElement(u.default,{type:"primary",className:O.default.del_btns},S.default.createElement(d.default,{title:"确定删除专辑？",onConfirm:this.handleDeleteRows},S.default.createElement("a",null,"删除")))),S.default.createElement("div",{className:"material-list"},S.default.createElement(o.default,{rowSelection:y,columns:h,dataSource:a.list,rowKey:"id",pagination:{total:a.total,showTotal:function(){return"共计 "+a.total+"条"},pageSize:this.state.pageSize,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],current:this.state.pageNo,onChange:this.handlePageChange,onShowSizeChange:this.handlePageSizeChange,showQuickJumper:!0,size:"small"}})),S.default.createElement(l.default,{width:940,height:550,destroyOnClose:!0,className:"courseResourceModal",visible:this.state.relationResourceVisible,footer:null,onCancel:this.closeCourseResView},S.default.createElement("div",{className:"courseResource-title"},"专辑资料管理"),S.default.createElement(T.default,{relationId:this.state.relationResourceId,relationType:this.state.relationType,openAddResourceView:this.openAddResourceView})),S.default.createElement(l.default,{width:940,height:650,visible:this.state.resourceViewVisible,footer:null,onCancel:this.closeResourceView,destroyOnClose:!0},S.default.createElement(_.default,{courseRelationId:this.state.relationResourceId,relationType:this.state.relationType,openResource:this.openResource})))}}]),n}(S.Component);var z=(0,w.connect)((function(e,t){return{albumList:e.albumManagerReducer.albumList,sortList:e.albumManagerReducer.sortList}}),(function(e){return{getAlbumList:function(t,a){return e((0,E.getAlbumList)(t,a))},upAlbum:function(t,a){return e((0,E.upAlbum)(t,a))},downAlbum:function(t,a){return e((0,E.downAlbum)(t,a))},deleteAlbum:function(t,a,n){return e((0,E.deleteAlbum)(t,a,n))},getResourceList:function(t,a){return e((0,E.getResourceList)(t,a))},exportCourse:function(t,a){return e((0,E.exportCourse)(t,a))},getSortList:function(t,a){return e((0,E.getSortList)(t,a))}}}))(C.default.create()(D));t.default=z},1674:function(e,t,a){e.exports={album_management_body:"album_management_body__G7gAr",head_search:"head_search__3Y_ec",head_btns:"head_btns__1sxtL",del_btns:"del_btns__bBSQr"}},537:function(e,t,a){"use strict";a.r(t);a(26),a(586),a(140)},550:function(e,t,a){e.exports=a(11)(94)},558:function(e,t,a){e.exports=a(11)(251)},586:function(e,t,a){},636:function(e,t,a){e.exports=a(46)(174)},764:function(e,t,a){"use strict";a.r(t);a(26),a(1008),a(554),a(655)},765:function(e,t,a){e.exports=a(11)(855)},905:function(e,t,a){"use strict";var n=a(245),r=a(246);e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},906:function(e,t,a){"use strict";var n=a(4),r=a(0);a(7),a(3),a(5),a(51),a(9),a(10),a(8),a(6),Object.defineProperty(t,"__esModule",{value:!0}),t.downComment=t.upComment=t.downloadComment=t.checkReply=t.checkComment=t.getReplyList=t.getCommentList=t.getResourceClassify=t.addResourceByRelation=t.getResourceByRelationId=t.moveCourseResource=t.deleteCourseResource=t.getCourseResourceById=t.setCourseViewRange=t.getCourseRange=t.courseCheckStatus=t.batchStrategy=t.courseCheckRelation=t.batchShelves=t.batchClassify=t.deleteCourse=t.downCourse=t.upCourse=t.exportCourseList=t.getClassifyList=t.getCourseList=void 0;var l=r(a(2));a(61);var o=r(a(62)),u=r(a(76)),c=r(a(1294)),s=n(a(249));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=c.default.courseManagement,m=f.courseList,p=f.courseClassifyList,h=f.courseUpUrl,g=f.courseDownUrl,y=f.courseDelUrl,v=f.batchClassifyUrl,R=f.batchShelvesUrl,b=f.courseCheckRelationUrl,C=f.batchStrategyUrl,S=f.courseCheckStatusUrl,w=f.courseExportUrl,E=f.courseVsRangeUrl,I=f.courseSaveRangeUrl,N=f.courseDataUrl,k=f.coursDataDelUrl,T=f.courseDataMoveUrl,_=f.queryDataUrl,O=f.dataSaveUrl,V=f.DataClassifyUrl,L=f.commentListUrl,U=f.replyListUrl,M=f.auditCommentUrl,x=f.auditReplyUrl,D=f.commentExportUrl,z=f.commentUpUrl,P=f.commentDownUrl;t.getCourseList=function(e,t){return function(a){return(0,u.default)({url:m,data:e}).then((function(e){a({type:s.COURSE_LIST,data:e.data}),t&&t()}))}};t.getClassifyList=function(e,t){return function(a){return(0,u.default)({url:p,data:e}).then((function(e){for(var n=e.data,r=[],l=0;l<n.length;l++)1===n[l].layer&&r.push({title:n[l].name,label:n[l].name,value:n[l].id,id:n[l].id,key:"A"+l,code:n[l].code,name:n[l].name,level:"一级分类",createTime:n[l].createTime}),2===n[l].layer&&("children"in r[r.length-1]||(r[r.length-1].children=[]),r[r.length-1].children.push({title:n[l].name,label:n[l].name,value:n[l].id,id:n[l].id,key:"B"+l,code:n[l].code,name:n[l].name,level:"二级分类",createTime:n[l].createTime})),3===n[l].layer&&("children"in r[r.length-1].children[r[r.length-1].children.length-1]||(r[r.length-1].children[r[r.length-1].children.length-1].children=[]),r[r.length-1].children[r[r.length-1].children.length-1].children.push({title:n[l].name,label:n[l].name,value:n[l].id,id:n[l].id,key:""+l,code:n[l].code,name:n[l].name,level:"三级分类",createTime:n[l].createTime}));a({type:s.COURSE_CLASSIFY_LIST,data:r}),t&&t()}))}};t.exportCourseList=function(e,t){return function(a){return(0,u.default)({url:w,data:e}).then((function(e){1e3==e.code&&t&&t(e)}))}};t.upCourse=function(e,t){return function(a){return(0,u.default)({url:h,data:e}).then((function(e){1e3==e.code&&t&&t(e)}))}};t.downCourse=function(e,t){return function(a){return(0,u.default)({url:g,data:e}).then((function(e){1e3==e.code&&t&&t(e)}))}};t.deleteCourse=function(e,t){return function(a){return(0,u.default)({url:y,data:e}).then((function(e){1e3==e.code&&t&&t(e)}))}};t.batchClassify=function(e,t){return function(a){return(0,u.default)({url:v,data:e}).then((function(e){t&&t()}))}};t.batchShelves=function(e,t){return function(a){return(0,u.default)({url:R,data:e}).then((function(e){e.data&&o.default.warn(e.data),t&&t()}))}};t.courseCheckRelation=function(e,t){return function(a){return(0,u.default)({url:b,data:e}).then((function(e){a({type:s.COURSE_CHECK_RELATION,data:e.data}),t&&t()}))}};t.batchStrategy=function(e,t){return function(a){return(0,u.default)({url:C,data:e}).then((function(e){e.data&&o.default.warn(e.data),t&&t()}))}};t.courseCheckStatus=function(e,t){return function(a){return(0,u.default)({url:S,data:e}).then((function(e){a({type:s.COURSE_CHECK_STATUS,data:e.data}),t&&t()}))}};t.getCourseRange=function(e,t){return function(a){return(0,u.default)({url:E,data:{courseId:e}}).then((function(e){a({type:s.COURS_EVIEW_RANGE,data:e.data}),t&&t(e)}))}};t.setCourseViewRange=function(e,t){return function(a){return(0,u.default)({url:I,data:e}).then((function(e){t&&t(e)}))}};t.getCourseResourceById=function(e,t){return function(a){return(0,u.default)({url:N,data:e}).then((function(e){a({type:s.COURSE_RESOURCE,data:e.data}),t&&t(e.data)}))}};t.deleteCourseResource=function(e,t){return function(a){return(0,u.default)({url:k,data:e}).then((function(e){t&&t(e.data)}))}};t.moveCourseResource=function(e,t){return function(a){return(0,u.default)({url:T,data:e}).then((function(e){t&&t(e.data)}))}};t.getResourceByRelationId=function(e,t){return function(a){return(0,u.default)({url:_,data:e}).then((function(e){a({type:s.DATA_SOURSE,data:e.data}),t&&t(e.data)}))}};t.addResourceByRelation=function(e,t){return function(a){return(0,u.default)({url:O,data:e}).then((function(e){t&&t(e.data)}))}};t.getResourceClassify=function(e,t){return function(a){return(0,u.default)({url:V,data:{showThirdClassfy:e}}).then((function(e){a({type:s.RESOURCE_CLASSIFY,data:e.data}),t&&t(e.data)}))}};t.getCommentList=function(e,t){return function(a){return(0,u.default)({url:L,data:e}).then((function(n){if("1000"===n.code){for(var r=[],l=0;l<n.data.page.records.length;l++){var u=d({},n.data.page.records[l],{key:e.pageSize*(e.pageNo-1)+(l+1)});n.data.page.records[l].replys>0&&(u.children=[],u.index=l),r.push(u)}console.log(r),a({type:s.COMMENT_LIST,data:{list:r,listTotal:n.data.page.total,avgLevel:n.data.avgLevel}})}else o.default.error("加载失败...");t&&t()}))}};t.getReplyList=function(e,t,a){return function(t){return(0,u.default)({url:U,data:e}).then((function(n){if("1000"===n.code){for(var r=[],l=0;l<n.data.records.length;l++)r.push({commentId:n.data.records[l].commentId,id:n.data.records[l].id,commentator:n.data.records[l].replier,content:n.data.records[l].content,createTime:n.data.records[l].createTime,flag:"reply",replyName:n.data.records[l].parentAccountFullName,status:n.data.records[l].status,commentatorName:n.data.records[l].replierName});t({type:s.REPLY_LIST,data:{children:r,commentId:e.commmentId}})}else o.default.error("加载失败...");a&&a()}))}};t.checkComment=function(e,t){return function(a){return(0,u.default)({url:M,data:e}).then((function(e){t&&t(e)}))}};t.checkReply=function(e,t){return function(a){return(0,u.default)({url:x,data:e}).then((function(e){t&&t(e)}))}};t.downloadComment=function(e,t){return function(a){return(0,u.default)({url:D,data:e}).then((function(e){t&&t(e)}))}};t.upComment=function(e,t){return function(a){return(0,u.default)({url:z,data:e}).then((function(e){t&&t(e)}))}};t.downComment=function(e,t){return function(a){return(0,u.default)({url:P,data:e}).then((function(e){t&&t(e)}))}}}}]);