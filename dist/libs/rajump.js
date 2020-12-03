
// 1.计算加载时间
function getPerformanceTiming() {
 
    var performance = window.performance;
 
    if (!performance) {
        // 当前浏览器不支持
        console.log('你的浏览器不支持 performance 接口');
        return;
    }
 
    var t = performance.timing;
 
    var times = {};
 
    //【重要】页面加载完成的时间
    //【原因】这几乎代表了用户等待页面可用的时间
    times.loadPage = t.loadEventEnd - t.navigationStart;
 
    //【重要】解析 DOM 树结构的时间
    //【原因】反省下你的 DOM 树嵌套是不是太多了！
    times.domReady = t.domComplete - t.responseEnd;
 
    //【重要】重定向的时间
    //【原因】拒绝重定向！比如，http://example.com/ 就不该写成 http://example.com
    times.redirect = t.redirectEnd - t.redirectStart;
 
    //【重要】DNS 查询时间
    //【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？
    // 可使用 HTML5 Prefetch 预查询 DNS ，见：[HTML5 prefetch](http://segmentfault.com/a/1190000000633364)           
    times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;
 
    //【重要】读取页面第一个字节的时间
    //【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？
    // TTFB 即 Time To First Byte 的意思
    // 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte
    times.ttfb = t.responseStart - t.navigationStart;
 
    //【重要】内容加载完成的时间
    //【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？
    times.request = t.responseEnd - t.requestStart;
 
    //【重要】执行 onload 回调函数的时间
    //【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？
    times.loadEvent = t.loadEventEnd - t.loadEventStart;
 
    // DNS 缓存时间
    times.appcache = t.domainLookupStart - t.fetchStart;
 
    // 卸载页面的时间
    times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;
 
    // TCP 建立连接完成握手的时间
    times.connect = t.connectEnd - t.connectStart;
 
    return times;
 
}
 
// 2.计算加载时间
 function getEntryTiming(entry) {
 
    var t = entry;
 
    var times = {};
 
    // 重定向的时间
    times.redirect = t.redirectEnd - t.redirectStart;
 
    // DNS 查询时间
    times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;
 
    // 内容加载完成的时间
    times.request = t.responseEnd - t.requestStart;
 
    // TCP 建立连接完成握手的时间
    times.connect = t.connectEnd - t.connectStart;
 
    // 挂载 entry 返回
    times.name = entry.name;
 
    times.entryType = entry.entryType;
 
    times.initiatorType = entry.initiatorType;
 
    times.duration = entry.duration;
 
    return times;
 
}
// 例如：
 function entriesTimes() {
    var entries = window.performance.getEntries();//这个函数返回的将是一个数组，包含了页面中所有的 HTTP 请求
    entries.forEach(function (entry) {
        var times = getEntryTiming(entry);
        console.log(times);
    });
}

entriesTimes()
$(function() {
    let comGetLocation={
          //hash parm
          getUrlParam() {
            var search = location.search;
            if (location.search.indexOf("?") == -1) {
                return '';
            }
            var queryString = search.split("?")[1];
           if (queryString.indexOf("&") != -1) {
                var data={};
                var arr = queryString.split("&"); // split 
                arr.map((item)=>{
                    data[item.split("=")[0]]=item.substring(item.indexOf("=")+1)
                   
                 })
               return data;

            }else {
                return '';
            }

        }

    };
    
    function getAuthorization(parms,href_url) {
        if(!parms.md5nm){
            alert("login_name没有找到")
            return;
        }
        console.log(href_url,"url")
        let {appId,mp,companyCode,siteCode,md5nm,token,salt,sign}= parms;
        console.log(appId,'appid');
        console.log(mp,'mp');
        console.log(appId,'appid');
        console.log(companyCode,'companyCode');
        console.log(siteCode,'siteCode');
        console.log(md5nm,'md5nm');
        console.log(token,'token');
        console.log(salt,'salt');
        console.log(sign,'sign');
        // md5nm -->name ，mp -> terminalType,hrefUrl
        var data={appId,name:md5nm,token,salt,sign,hrefUrl:href_url,type:parms.authType?parms.authType:1};
        if(parms.mp==1||parms.mp==0){
            data.terminalType=3; 
        }else{
            data.terminalType=parms.mp; 
        }

        var origin= location.origin;
        $.ajax({
            type: "post",
            url: origin+"/system/public/api/plus/getAccount?companyCode=" + companyCode + "&siteCode=" + siteCode,
            async: true,
            dataType: "json",
            contentType: 'application/json;charset=UTF-8',
    
            data:JSON.stringify(data),
            success: function (res) {
            if (res.code == 1000) {
                    sessionStorage.setItem("mgtk",res.data.Authorization)
                    sessionStorage.setItem("userName", res.data.userInfo.name);
                    sessionStorage.setItem("dev", res.data.userInfo.dev);
                    href_url=decodeURIComponent(href_url);
                    location.replace(href_url);

                }else {
                $("#body").html("<span style='color: red'>错误信息:</span>"+JSON.stringify(res))
            }
            },
            error:function (err) {
                $("#body").html(`<span style='color: red'>错误信息:${JSON.stringify(err)}</span>`)
            }
        });
    };
    let datas= comGetLocation.getUrlParam();
    console.log('集合',datas);
    var parms = datas;
    let {appId,mp,companyCode,siteCode,md5nm,token,salt,sign}= parms;
    if(appId&&companyCode&&siteCode&&md5nm&&token&&salt&&sign){

    }else{
        alert("参数不全，不发请求跳转");
        return;
    }
    getAuthorization(parms,datas.href_url);
   

});