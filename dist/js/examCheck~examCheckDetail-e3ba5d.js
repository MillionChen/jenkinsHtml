(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1006:function(t,e,r){"use strict";r.r(e);r(26),r(1289),r(575),r(574),r(578)},1007:function(t,e,r){t.exports=r(11)(809)},1289:function(t,e,r){},1345:function(t,e,r){r(1370),t.exports=self.fetch.bind(self)},1370:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return p})),r.d(e,"Request",(function(){return w})),r.d(e,"Response",(function(){return A})),r.d(e,"DOMException",(function(){return x})),r.d(e,"fetch",(function(){return P}));var n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in self,s="ArrayBuffer"in self;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function d(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=d(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},p.prototype.delete=function(t){delete this.map[d(t)]},p.prototype.get=function(t){return t=d(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(d(t))},p.prototype.set=function(t,e){this.map[d(t)]=f(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),h(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),h(t)},o&&(p.prototype[Symbol.iterator]=p.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var r,n,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),v.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function E(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function A(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},g.call(w.prototype),g.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];A.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var x=self.DOMException;try{new x}catch(t){(x=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function P(t,e){return new Promise((function(r,n){var o=new w(t,e);if(o.signal&&o.signal.aborted)return n(new x("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new A(o,n))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.onabort=function(){n(new x("Aborted","AbortError"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),o.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&o.signal.removeEventListener("abort",s)}),a.send(void 0===o._bodyInit?null:o._bodyInit)}))}P.polyfill=!0,self.fetch||(self.fetch=P,self.Headers=p,self.Request=w,self.Response=A)},1559:function(t,e,r){t.exports={subjectivityQuestion:"subjectivityQuestion__HITqS",subjectivityQuestionBtnGroup:"subjectivityQuestionBtnGroup__1Ysqh","check-modal-container-check":"check-modal-container-check__POFGD"}},1560:function(t,e,r){"use strict";var n=r(4),o=r(0);r(51),Object.defineProperty(e,"__esModule",{value:!0}),e.getExamList=function(t){var e=s.default.getExamList,r=function(t,e){var r={};e?(r.pageNo=e.pageindex,r.pageSize=e.pagesize,e.examKeyword&&(r.name=e.examKeyword)):(r.pageNo=1,r.pageSize=20);return r}(0,t);return function(t){return t({type:u.FETCHING}),(0,c.default)({url:e,data:r}).then((function(e){t({type:u.EXAMLIST,data:e})}))}},e.getPaperList=function(t,e){var r=s.default.getPaperList,n=function(t,e){var r={};r.pageNo=e.pageindex,r.pageSize=e.pagesize,e.id&&(r.examId=e.id);e.userName&&(r.userName=e.userName);e.name&&(r.name=e.name);e.dept&&(r.dept=e.dept);return r}(0,t);return function(t){return t({type:u.PAPERFETCHING}),(0,c.default)({url:r,data:n}).then((function(r){t({type:u.PAPERLIST,data:r}),e&&e()}))}},e.getPaperDetail=function(t,e){var r=s.default.getPaperDetail,n={id:t.id};return function(t){return(0,c.default)({url:r,data:n}).then((function(r){t({type:u.PAPERDETAIL,data:r}),e&&e()}))}},e.checkExamPaper=function(t,e){var r=s.default.checkExamPaper;return function(n){return(0,c.default)({url:r,data:t}).then((function(t){n({type:u.CHECK,data:t}),e&&e()}))}},e.downTxt=function(t,e){var r={examId:t.id},n=s.default.echartUrl;return function(t){return(0,c.default)({url:n,data:r}).then((function(t){"1000"===t.code?i.default.success(t.data):i.default.error(t.subMsg)}))}},e.downText=e.pd=e.paperFetching=e.paperList=e.fetching=e.examList=void 0,r(61);var i=o(r(62)),a=(o(r(1345)),r(233)),s=(r(83),o(r(264)),r(261),o(r(1561))),u=(o(r(2031)),n(r(278))),c=o(r(76)),d=(0,a.createAction)(u.EXAMLIST);e.examList=d;var f=(0,a.createAction)(u.PAPERLIST);e.paperList=f;var h=(0,a.createAction)(u.FETCHING);e.fetching=h;var p=(0,a.createAction)(u.PAPERFETCHING);e.paperFetching=p;var l=(0,a.createAction)(u.PAPERDETAIL);e.pd=l;(0,a.createAction)(u.CHECK);var y=(0,a.createAction)(u.DOWNTXT);e.downText=y},1561:function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(63)),i={questionUrl:"GET ".concat(o.default.webManage,"/question/list"),getExamList:"GET ".concat(o.default.webManage,"/exam/marking/list"),getPaperList:"GET ".concat(o.default.webManage,"/exam/marking/student/list"),getPaperDetail:"GET ".concat(o.default.webManage,"/exam/marking/student"),checkExamPaper:"POST ".concat(o.default.webManage,"/exam/marking/student/save"),echartUrl:"GET ".concat(o.default.webManage,"/exam/marking/export")};e.default=i},2031:function(t,e,r){"use strict";var n=r(0);r(44),r(101),r(35),r(234),r(61);var o=n(r(62)),i=n(r(1345)),a=n(r(141)),s=a.default.companyCode,u=a.default.siteCode,c={get:function(t,e){-1==t.indexOf("?")?t+="?companyCode=".concat(s,"&siteCode=").concat(u):t=t.replace("?","?companyCode=".concat(s,"&siteCode=").concat(u,"&"));var r=sessionStorage.getItem("getToken");(0,i.default)(t,{method:"get",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:r},credentials:"include"}).then((function(t){if(200==t.status)return t.json();401!=t.status&&403!=t.status||d()})).then((function(t){"1000"==t.code?e&&e(t):t.subMsg?o.default.error(t.subMsg):o.default.error(t.msg)})).catch((function(t){console.error(t)}))},post:function(t,e,r,n){t+="?companyCode=".concat(s,"&siteCode=").concat(u);var a=sessionStorage.getItem("getToken");(0,i.default)(t,{method:"post",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:a},credentials:"include",body:JSON.stringify(e)}).then((function(t){if(200==t.status)return t.json();401!=t.status&&403!=t.status||d()})).then((function(t){"1000"==t.code?r&&r(t):(t.subMsg?o.default.error(t.subMsg):o.default.error(t.msg),+t.code>1e3&&n&&n(t))})).catch((function(t){console.error(t)}))}};function d(){location.href="//".concat(location.host,"/").concat(s,"/").concat(u,"/login")}t.exports=c},535:function(t,e,r){t.exports=r(11)(70)},536:function(t,e,r){t.exports=r(11)(166)},537:function(t,e,r){"use strict";r.r(e);r(26),r(586),r(140)},544:function(t,e,r){t.exports=r(11)(846)},574:function(t,e,r){"use strict";r.r(e);r(26),r(584)},575:function(t,e,r){"use strict";r.r(e);r(26),r(623)},578:function(t,e,r){"use strict";r.r(e);r(26),r(584)},586:function(t,e,r){},623:function(t,e,r){}}]);