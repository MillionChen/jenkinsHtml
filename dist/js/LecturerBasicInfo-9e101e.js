(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{2161:function(e,t,a){"use strict";var l=a(4),n=a(0);a(43),a(143),a(51),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(556);var u=n(a(553));a(224);var i=n(a(225));a(549);var r=n(a(544));a(144);var s=n(a(230));a(99);var o=n(a(100));a(537);var d=n(a(536)),c=n(a(98));a(140);var f=n(a(535));a(61);var m=n(a(62)),v=n(a(29)),h=n(a(30)),p=n(a(59)),E=n(a(32)),y=n(a(33)),g=n(a(31));a(575);var I=n(a(568));a(540);var L=n(a(539)),C=l(a(1)),b=a(52),M=n(a(2162)),N=n(a(226)),k=n(a(2163)),w=l(a(1317)),B=n(a(2165)),S=n(a(2166)),_=n(a(2167));function D(e){return function(){var t,a=(0,g.default)(e);if(R()){var l=(0,g.default)(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return(0,y.default)(this,t)}}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=L.default.Item,P=I.default.TabPane,V=function(e){(0,E.default)(a,e);var t=D(a);function a(e){var l;return(0,v.default)(this,a),(l=t.call(this,e)).state={companyName:"",position:"",tempCompanyName:"",tempPosition:"",model:1,tempModel:1,createVisible:!1,infoEditVisible:!1,modelEditVisible:!1,basicInfoId:"",lecturerLevel:[],currentLevelId:"",currentLevelName:"",currentLevelStatus:1},l.changeModel=l.changeModel.bind((0,p.default)(l)),l.saveBasicInfo=l.saveBasicInfo.bind((0,p.default)(l)),l.showLevelModal=l.showLevelModal.bind((0,p.default)(l)),l.closeLevelModal=l.closeLevelModal.bind((0,p.default)(l)),l.getLecturerLevelList=l.getLecturerLevelList.bind((0,p.default)(l)),l.upOrDown=l.upOrDown.bind((0,p.default)(l)),l.deleteLevel=l.deleteLevel.bind((0,p.default)(l)),l.showInfoEdit=l.showInfoEdit.bind((0,p.default)(l)),l.closeInfoEditModal=l.closeInfoEditModal.bind((0,p.default)(l)),l.showModelEdit=l.showModelEdit.bind((0,p.default)(l)),l.closeModelEditModal=l.closeModelEditModal.bind((0,p.default)(l)),l.onCompanyNameChange=l.onCompanyNameChange.bind((0,p.default)(l)),l.onPositionChange=l.onPositionChange.bind((0,p.default)(l)),l.saveBasicModel=l.saveBasicModel.bind((0,p.default)(l)),l}return(0,h.default)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.getLecturerBasicInfo().then((function(t){"1000"==t.code&&t.data&&e.setState({companyName:t.data.companyName,position:t.data.title,tempCompanyName:t.data.companyName,tempPosition:t.data.title,model:t.data.templateNo,tempModel:t.data.templateNo,basicInfoId:t.data.id})})),this.getLecturerLevelList()}},{key:"getLecturerLevelList",value:function(){var e=this;this.props.getLecturerLevelList().then((function(t){"1000"==t.code&&e.setState({lecturerLevel:t.data||[]})}))}},{key:"showInfoEdit",value:function(){this.setState({infoEditVisible:!0})}},{key:"closeInfoEditModal",value:function(){this.setState({infoEditVisible:!1})}},{key:"showModelEdit",value:function(){this.setState({modelEditVisible:!0})}},{key:"closeModelEditModal",value:function(){this.setState({modelEditVisible:!1})}},{key:"onCompanyNameChange",value:function(e){var t=e.target.value;t.length>30&&(t=t.slice(0,30)),this.setState({tempCompanyName:t})}},{key:"onPositionChange",value:function(e){var t=e.target.value;t.length>30&&(t=t.slice(0,30)),this.setState({tempPosition:t})}},{key:"showLevelModal",value:function(e){this.setState({createVisible:!0,currentLevelId:e.id||"",currentLevelName:e.name||"",currentLevelStatus:0==e.status?0:2==e.status?2:1})}},{key:"closeLevelModal",value:function(){this.setState({createVisible:!1})}},{key:"changeModel",value:function(e){this.setState({tempModel:e})}},{key:"upOrDown",value:function(e,t){var a=this,l={id:e,status:t};this.props.upOrDownLecturerLevel(l).then((function(e){"1000"==e.code&&(m.default.success(1==t?"上架成功":"下架成功"),a.getLecturerLevelList())}))}},{key:"deleteLevel",value:function(e){var t=this,a={id:e,delFlag:1};this.props.deleteLecturerLevel(a).then((function(e){"1000"==e.code?(m.default.success("删除成功"),t.getLecturerLevelList()):m.default.fail(e.subMsg)}))}},{key:"saveBasicInfo",value:function(){var e=this.state.basicInfoId,t=this;if(0!=this.state.tempCompanyName.length)if(0!=this.state.tempPosition.length){var a={companyName:this.state.tempCompanyName,title:this.state.tempPosition};e&&(a.id=e),this.props.editLecturerBasicInfo(a,e).then((function(e){"1000"==e.code?(m.default.success("保存成功",2),t.closeInfoEditModal(),t.setState({companyName:a.companyName,position:a.title})):m.default.error(e.subMsg)}))}else m.default.info("请输入讲师头衔");else m.default.info("请输入讲师单位")}},{key:"saveBasicModel",value:function(){var e=this.state.basicInfoId,t=this,a={templateNo:this.state.tempModel};e&&(a.id=e),this.props.editLecturerBasicInfo(a,e).then((function(e){"1000"==e.code?(m.default.success("保存成功",2),t.setState({model:t.state.tempModel}),t.closeModelEditModal()):m.default.error(e.subMsg)}))}},{key:"render",value:function(){var e=this,t=(this.props.form.getFieldDecorator,{labelCol:{span:5},wrapperCol:{span:10}}),a=[{title:"序号",dataIndex:"no",key:"no"},{title:"讲师级别编码",dataIndex:"code",key:"code"},{title:"讲师级别名称",dataIndex:"name",key:"name"},{title:"状态",dataIndex:"status",key:"status",render:function(e,t){return 1==e?"上架":"下架"}},{title:"操作",dataIndex:"action",key:"action",render:function(t,a){return C.default.createElement("div",null,1!=a.status?C.default.createElement("a",{onClick:function(t){return e.showLevelModal(a)}},"编辑"):"",1==a.status?C.default.createElement("a",{onClick:function(t){return e.upOrDown(a.id,0)}},"下架"):C.default.createElement("a",{onClick:function(t){return e.upOrDown(a.id,1)}},"上架"))}}],l=this.state.lecturerLevel.map((function(e,t){return{key:e.id,id:e.id,no:t+1,code:e.code,name:e.name,status:e.status}}));return C.default.createElement("div",{className:M.default.lecturerBasicInfoContainer},C.default.createElement(N.default,{title:"讲师信息"}),C.default.createElement(I.default,null,C.default.createElement(P,{tab:"讲师基本信息",key:1},C.default.createElement(L.default,null,C.default.createElement(x,(0,c.default)({label:"缺省字段设置:"},t),C.default.createElement(f.default,{type:"primary",onClick:this.showInfoEdit},"编辑字段")),C.default.createElement(x,(0,c.default)({label:"讲师所属单位:"},t),C.default.createElement(d.default,{placeholder:"请输入讲师所属单位",style:{width:360,marginRight:10},value:this.state.companyName,disabled:!0}),C.default.createElement(s.default,{placement:"right",title:"该信息将在创建讲师时，显示在讲师单位组织填写框中"},C.default.createElement(o.default,{type:"question-circle",style:{fontSize:12}}))),C.default.createElement(x,(0,c.default)({label:"讲师头衔:"},t),C.default.createElement(d.default,{placeholder:"请输入讲师头衔",style:{width:360,marginRight:10},value:this.state.position,disabled:!0}),C.default.createElement(s.default,{placement:"right",title:"该信息将在创建讲师时，显示在讲师头衔填写框中"},C.default.createElement(o.default,{type:"question-circle",style:{fontSize:12}}))),C.default.createElement(x,(0,c.default)({label:"显示模板设置:"},t),C.default.createElement(f.default,{type:"primary",onClick:this.showModelEdit},"更改模板")),C.default.createElement(x,(0,c.default)({label:"显示模板:"},t),C.default.createElement("div",{style:{width:220,textAlign:"center"}},1==this.state.model?C.default.createElement("img",{src:B.default,style:{width:200}}):2==this.state.model?C.default.createElement("img",{src:S.default,style:{width:200}}):C.default.createElement("img",{src:_.default,style:{width:200}}),C.default.createElement("br",null),C.default.createElement("span",null,1==this.state.model?"标准版":2==this.state.model?"科技蓝":"活泼绿"),C.default.createElement("br",null),C.default.createElement("span",null,1!=this.state.model?"（此模板，讲师简介只显示文字）":""))))),C.default.createElement(P,{tab:"讲师分级信息",key:2},l.length<4?C.default.createElement(f.default,{type:"primary",className:M.default.lecturerBasicInfoCreateLevel,onClick:function(t){return e.showLevelModal({})}},"创建讲师级别"):"",l.length<4?C.default.createElement("span",{style:{marginLeft:10}},"最多只能创建四个讲师级别"):"",C.default.createElement("div",{className:M.default.lecturerBasicInfoLevelTable},C.default.createElement(r.default,{columns:a,dataSource:l,pagination:!1})))),C.default.createElement(i.default,{className:M.default.lecturerBasicInfoLevel,width:800,title:this.state.currentLevelId?"编辑讲师级别":"新增讲师级别",visible:this.state.createVisible,footer:null,onCancel:this.closeLevelModal,destroyOnClose:!0},C.default.createElement(k.default,{levelId:this.state.currentLevelId,onCancel:this.closeLevelModal,name:this.state.currentLevelName,status:this.state.currentLevelStatus,refreshLevelList:this.getLecturerLevelList})),C.default.createElement(i.default,{title:"讲师基本信息",width:800,visible:this.state.infoEditVisible,footer:null,onCancel:this.closeInfoEditModal,destroyOnClose:!0},C.default.createElement("div",{className:M.default.lecturerBasicInfoContainer},C.default.createElement(L.default,null,C.default.createElement(x,(0,c.default)({label:C.default.createElement("span",null,C.default.createElement(s.default,{placement:"left",title:"该信息将在创建讲师时，显示在讲师单位组织填写框中"},C.default.createElement(o.default,{type:"question-circle",style:{fontSize:12}})),"讲师所属单位")},t),C.default.createElement(d.default,{placeholder:"请输入讲师所属单位",style:{width:360,marginRight:10},onChange:this.onCompanyNameChange,value:this.state.tempCompanyName})),C.default.createElement(x,(0,c.default)({label:C.default.createElement("span",null,C.default.createElement(s.default,{placement:"left",title:"该信息将在创建讲师时，显示在讲师头衔填写框中"},C.default.createElement(o.default,{type:"question-circle",style:{fontSize:12}})),"讲师头衔")},t),C.default.createElement(d.default,{placeholder:"请输入讲师头衔",style:{width:320,marginRight:10},onChange:this.onPositionChange,value:this.state.tempPosition})),C.default.createElement(x,(0,c.default)({className:M.default.lecturerBasicInfoSaves,label:C.default.createElement("span",{style:{color:"#fff"}},"hello")},t),C.default.createElement(f.default,{type:"primary",style:{marginRight:20},onClick:this.saveBasicInfo},"确认"),C.default.createElement(f.default,{onClick:this.closeInfoEditModal},"取消"))))),C.default.createElement(i.default,{title:"显示模板",width:800,visible:this.state.modelEditVisible,footer:null,onCancel:this.closeModelEditModal,destroyOnClose:!0},C.default.createElement("div",{className:M.default.lecturerBasicInfoContainer},C.default.createElement(F,{changeModel:this.changeModel,model:this.state.tempModel}),C.default.createElement(f.default,{type:"primary",style:{marginRight:20},onClick:this.saveBasicModel},"确认"),C.default.createElement(f.default,{onClick:this.closeModelEditModal},"取消"))))}}]),a}(C.Component),O=L.default.create()(V),q=(0,b.connect)(null,w)(O);t.default=q;var F=function(e){(0,E.default)(a,e);var t=D(a);function a(e){var l;return(0,v.default)(this,a),(l=t.call(this,e)).state={value:1},l.onChange=l.onChange.bind((0,p.default)(l)),l}return(0,h.default)(a,[{key:"componentDidMount",value:function(){this.setState({value:this.props.model})}},{key:"onChange",value:function(e){var t=this;this.setState({value:e.target.value},(function(){t.props.changeModel(t.state.value)}))}},{key:"render",value:function(){return C.default.createElement("div",{className:M.default.lecturerInfoModelContainer},C.default.createElement(u.default.Group,{onChange:this.onChange,value:parseInt(this.props.model)||1},C.default.createElement("div",{className:M.default.lecturerInfoModelItem},C.default.createElement("img",{src:B.default}),C.default.createElement(u.default,{value:1},"标准版")),C.default.createElement("div",{className:M.default.lecturerInfoModelItem},C.default.createElement("img",{src:S.default}),C.default.createElement(u.default,{value:2},"科技蓝")),C.default.createElement("div",{className:M.default.lecturerInfoModelItem},C.default.createElement("img",{src:_.default}),C.default.createElement(u.default,{value:3},"活泼绿"))))}}]),a}(C.Component)},2162:function(e,t,a){e.exports={lecturerBasicInfoContainer:"lecturerBasicInfoContainer___w1Bs",lecturerBasicInfoSave:"lecturerBasicInfoSave__1CzaB",lecturerInfoModelContainer:"lecturerInfoModelContainer__oKm3D",lecturerInfoModelItem:"lecturerInfoModelItem__rDue_",lecturerBasicInfoCreateLevel:"lecturerBasicInfoCreateLevel__2mmX0",lecturerBasicInfoLevelTable:"lecturerBasicInfoLevelTable__39ZdF",lecturerBasicInfoSaves:"lecturerBasicInfoSaves__1GhcJ",lecturerBasicInfoLevel:"lecturerBasicInfoLevel__2hlg5",lecturerBasicInfoLevelContainer:"lecturerBasicInfoLevelContainer__2ejCv"}},2163:function(e,t,a){"use strict";var l=a(4),n=a(0);a(143),a(51),a(20),a(34),a(23),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(140);var u=n(a(535));a(556);var i=n(a(553)),r=n(a(98));a(537);var s=n(a(536));a(61);var o=n(a(62)),d=n(a(29)),c=n(a(30)),f=n(a(59)),m=n(a(32)),v=n(a(33)),h=n(a(31));a(540);var p=n(a(539)),E=l(a(1)),y=a(52),g=l(a(1317)),I=n(a(2164));function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=p.default.Item,b=function(e){(0,m.default)(l,e);var t,a=(t=l,function(){var e,a=(0,h.default)(t);if(L()){var l=(0,h.default)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,v.default)(this,e)});function l(e){var t;return(0,d.default)(this,l),(t=a.call(this,e)).state={levelName:"",status:1,levelId:""},t.statusChange=t.statusChange.bind((0,f.default)(t)),t.levelNameChange=t.levelNameChange.bind((0,f.default)(t)),t.saveLecturerInfo=t.saveLecturerInfo.bind((0,f.default)(t)),t}return(0,c.default)(l,[{key:"componentDidMount",value:function(){var e=this.props,t=e.levelId,a=e.name,l=e.status;this.setState({levelId:t,levelName:a,status:0==l||2==l?2:1})}},{key:"levelNameChange",value:function(e){var t=e.target.value;t.length>4&&(t=t.slice(0,4)),this.setState({levelName:t})}},{key:"statusChange",value:function(e){this.setState({status:e.target.value})}},{key:"saveLecturerInfo",value:function(e){var t=this;e.preventDefault();var a=this.state.levelId,l=this;this.props.form.validateFields((function(e,n){if(e)return e;var u={name:n.levelName,status:n.status};a&&(u.id=a),t.props.editLecturerLevel(u,a).then((function(e){"1000"==e.code&&(l.setState({status:e.data.status}),o.default.success("保存成功",2),l.props.onCancel(),l.props.refreshLevelList())}))}))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;console.log(this.state.status,"======cwj");var t={labelCol:{span:5},wrapperCol:{span:7}};return E.default.createElement("div",{className:I.default.lecturerBasicInfoLevelContainer},E.default.createElement(p.default,{onSubmit:this.saveLecturerInfo},E.default.createElement(C,(0,r.default)({label:"讲师级别名称:"},t),e("levelName",{rules:[{required:!0,message:"请输入讲师级别名称"},{max:4,message:"讲师级别名称最多支持4个字符"}],initialValue:this.state.levelName})(E.default.createElement(s.default,{placeholder:"请输入讲师级别名称",onChange:this.levelNameChange}))),E.default.createElement(C,(0,r.default)({label:"状态:"},t),e("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.state.status})(E.default.createElement(i.default.Group,{onChange:this.statusChange},E.default.createElement(i.default,{value:1},"上架"),E.default.createElement(i.default,{value:2},"下架")))),E.default.createElement(C,(0,r.default)({className:I.default.lecturerBasicInfoSave,label:E.default.createElement("span",{style:{color:"#fff"}},"hello")},t),E.default.createElement(u.default,{style:{marginRight:15},onClick:this.props.onCancel},"取消"),E.default.createElement(u.default,{type:"primary",htmlType:"submit"},"保存"))))}}]),l}(E.Component),M=(0,y.connect)(null,g)(p.default.create()(b));t.default=M},2164:function(e,t,a){e.exports={lecturerBasicInfoLevelContainer:"lecturerBasicInfoLevelContainer__2JPZm",lecturerBasicInfoSave:"lecturerBasicInfoSave__3FJ6p"}},2165:function(e,t,a){e.exports=a.p+"images/basic-model.c7ba28004174c5fa628005ed32a8a250.png"},2166:function(e,t,a){e.exports=a.p+"images/blue-model.88d77c463d7fe1b73576cf562f70d4d5.png"},2167:function(e,t,a){e.exports=a.p+"images/green-model.6a2a97b4107c781344ae2854d1695b17.png"},537:function(e,t,a){"use strict";a.r(t);a(26),a(586),a(140)},553:function(e,t,a){e.exports=a(11)(206)},568:function(e,t,a){e.exports=a(11)(333)},575:function(e,t,a){"use strict";a.r(t);a(26),a(623)},586:function(e,t,a){},623:function(e,t,a){}}]);