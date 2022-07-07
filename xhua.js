// ==UserScript==
// @name         图聚合展示by xhua
// @namespace    https://greasyfork.org/zh-CN/scripts/442098-%E5%9B%BE%E8%81%9A%E5%90%88%E5%B1%95%E7%A4%BAby-xhua
// @version      3.76
// @description  目标是聚合网页美女图
// @author       selang,LARA_SSR
//
// @include      /https?\:\/\/(\w+\.)?hentai-cosplay\w+\.com/
// @include      /https?\:\/\/(\w+\.)?porn-image\w+-xxx\.com/
// @include      /https?\:\/\/www\.umei(\w+)?\.\w+/
// @include      /https?\:\/\/www.wndfx\.com/
// @include      /https?\:\/\/w+\.(?:les|ls)m(\w+)?.\w*/
// @include      /https?\:\/\/\w+\.win4000\.com/
// @include      /https?\:\/\/\w+\.192\w+.com/
// @include      /https?\:\/\/www\.xiuren\.org/
// @include      /https?\:\/\/\w+\.micmicidol\.com/
// @include      /https?\:\/\/everia\.club/
// @include      /https?\:\/\/\w+.[a-z]+xgyw\.[a-z]+/
// @include      /https?\:\/\/\w+\.jpmn\w+\.\w+/
// @include      /https?\:\/\/\w+\.95mm\.\w+/
// @include      /https?\:\/\/\w+\.3gbizhi\.\w+\/\w/
// @include      /https?\:\/\/\w+.\w+goddess\.\w+\/(?!people\/)/
// @include      /https?\:\/\/(\w+\.)?meinv\.page/
// @include      /https?\:\/\/asiansister\.com/
// @include      /https?\:\/\/yskhd\.com/
// @include      /https?\:\/\/\w+\.dmmtu\.\w+/
// @include      /https?\:\/\/\w+\.\w+shen(\w+)?\.\w+/
// @include      /https?\:\/\/(www\.)?ikanins\.\w+/
// @include      /https?\:\/\/madoupan\.\w+/
// @include      /https?\:\/\/mrcong\.com/
// @include      /https?\:\/\/\w+\.(?:xiure)\w+\.\w+/
// @include      /https?\:\/\/\w+\.xrmn[0-9]{0,}.[a-zA-Z]{0,}./
// @include      /https?\:\/\/[A-Za-z]{3}\.[0-9]*(w|faw)\.cc/
// @include      /https?\:\/\/(\w+\.)?tuiimg\.com/
// @include      /https?\:\/\/(old\.)?nsfwp(\w+)?.\w+/
// @include      /https?\:\/\/\w+\.(mmm131|mm1\d+)\.\w+/
// @include      /https?\:\/\/(\w+\.)?asiantolick\.\w+/
// @include      /https?\:\/\/(\w+\.)?imn5.\w+/
// @include      /https?\:\/\/xchina.\w+/
// @include      /https?\:\/\/jjgirls\.\w+/
// @include      /https?\:\/\/(\w+\.)?photos18\.\w+/
// @include      /https?\:\/\/(\w+\.)?pornpics\.\w+/
// @include      /https?\:\/\/www\.(.*mnt|.*ywt|.*sft|.*mzt|.*wht|.*taotu|.*xzt|.*xzw|.*meinv|.*tuku|.*tuk|.*meitu|.*youwu)\.com/
//
// @connect      停用/https?\:\/\/www\.youtube\.com/
// @connect      *
// @license      MIT License
// @require      https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
// @require      https://cdn.staticfile.org/FileSaver.js/1.3.8/FileSaver.min.js
// @require      https://cdn.staticfile.org/dom-to-image/2.6.0/dom-to-image.min.js
// @require      https://cdn.staticfile.org/jszip/3.1.5/jszip.min.js
// @require      https://cdn.staticfile.org/dexie/1.5.1/dexie.min.js
// @require      https://cdn.staticfile.org/webtorrent/0.98.19/webtorrent.min.js
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_getTab
// @grant        GM_getTabs
// @grant        GM_saveTab
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// ==/UserScript==

// Alt+F8显示各网站列表 Esc退出
GM_addStyle(".sl-btn { border:1 !important; } .sl-c-pic { margin-top:6px } ");

//(start\(\);)(?! \/\/urlIsFalse) //打印开关

let imagePluginSwitch = [{
    isViewerOpen: false,
    isFancyBox: true,
    isFancyBoxFullScreen: false,
    isFancyBoxAutoStartFalse: false
}]

let site = {
    Hentai: { //支持中文https://zh.hentai-cosplays.com/
        id: 0,
        name: 'Hentai Cosplay',
        hostnames: [
            'hentai-cosplays.com'
        ],
        pattern: /https?\:\/\/(\w+\.)?hentai-cosplay\w+\.com/,
        iStatus: false,
        _break: false
    },
    Pron: { //支持中文https://zh.porn-images-xxx.com/
        id: 1,
        name: 'Porn Image',
        hostnames: [
            'porn-images-xxx.com'
        ],
        pattern: /https?\:\/\/(\w+\.)?porn-image\w+-xxx\.com/,
        iStatus: false,
        _break: false
    },
    Umei: {
        id: 2,
        name: '优美图库(不)',
        hostnames: [
            'umei.fun',
            'www.umei.cc',
            'www.umeitu.com'
        ],
        pattern: /https?\:\/\/www\.umei(\w+)?\.\w+/,
        iStatus: false,
        _break: true
    },
    Wndfx: {
        id: 3,
        name: 'Wndfx 妹子图(不)',
        hostnames: [
            'www.wndfx.com'
        ],
        pattern: /https?\:\/\/www.wndfx\.com/,
        iStatus: false,
        _break: true
    },
    Lesmao: {
        id: 4,
        name: '蕾丝猫(不)',
        hostnames: [
            'www.lsm.me',
            'www.lesmao.pro',
            'www.lesmao.co',
            'www.lsmpx.com',
            'www.lesmao.org',
        ],
        pattern: /https?\:\/\/w+.(?:les|ls)m(\w+)?.\w*/,
        iStatus: false,
        _break: true
    },
    Win4000: {
        id: 5,
        name: '美桌(不)',
        hostnames: [
            'www.win4000.com'
        ],
        pattern: /https?\:\/\/\w+\.win4000\.com/,
        iStatus: false,
        _break: true
    },
    _192tp: {
        id: 6,
        name: '192 美女图',
        hostnames: [
            'www.192tt.com',
            'www.192tb.com',
            'www.192tp.com'
        ],
        pattern: /https?\:\/\/\w+.192\w+.com/,
        iStatus: false,
        _break: false
    },
    Xiuren: {
        id: 7,
        name: 'Xiuren 秀人网',
        hostnames: [
            'www.xiuren.org'
        ],
        pattern: /https?\:\/\/www\.xiuren\.org/,
        iStatus: false,
        _break: false
    },
    Micmicidol: {
        id: 8,
        name: 'Mic Mic Idol',
        hostnames: [
            'www.micmicidol.com'
        ],
        pattern: /https?\:\/\/\w+\.micmicidol\.com/,
        iStatus: false,
        _break: false
    },
    Everia: {
        id: 9,
        name: 'Everia.club',
        hostnames: [
            'everia.club'
        ],
        pattern: /https?\:\/\/everia\.club/,
        iStatus: false,
        _break: false
    },
    Jpxgyw: {
        id: 10,
        name: 'Jpxgyw 美女网',
        hostnames: [
            'www.jpxgyw.net'
        ],
        pattern: /https?\:\/\/\w+.[a-z]+xgyw\.[a-z]+/,
        iStatus: false,
        _break: false
    },
    _95mm: {
        id: 11,
        name: 'MM 范',
        hostnames: [
            'www.95mm.org'
        ],
        pattern: /https?\:\/\/\w+\.95mm\.\w+/,
        iStatus: false,
        _break: false
    },
    _3gbizhi: {
        id: 12,
        name: '3G 壁纸(不)',
        hostnames: [
            'www.3gbizhi.com'
        ],
        pattern: /https?\:\/\/\w+\.3gbizhi\.\w+/,
        iStatus: false,
        _break: true
    },
    Jpmn8: {
        id: 13,
        name: 'Jpmn8 精品美女吧',
        hostnames: [
            'www.jpmn8.com'
        ],
        pattern: /https?\:\/\/\w+\.jpmn\w+\.\w+/,
        iStatus: false,
        _break: false
    },
    Goddess: {
        id: 14,
        name: 'Goddess',
        hostnames: [
            'tw.kissgoddess.com'
        ],
        pattern: /https?\:\/\/\w+.\w+goddess\.\w+/,
        iStatus: false,
        _break: false
    },
    Meinv: {
        id: 15,
        name: '美女百科',
        hostnames: [
            'meinv.page'
        ],
        pattern: /https?\:\/\/(\w+\.)?meinv\.page/,
        iStatus: false,
        _break: false
    },
    Asiansister: {
        id: 16,
        name: 'Asiansister',
        hostnames: [
            'asiansister.com'
        ],
        pattern: /https?\:\/\/asiansister\.com/,
        iStatus: false,
        _break: true
    },
    Yskhd: {
        id: 17,
        name: '优丝库 HD',
        hostnames: [
            'yskhd.com'
        ],
        pattern: /https?\:\/\/yskhd\.com/,
        iStatus: false,
        _break: false
    },
    Dmmtu: {
        id: 18,
        name: 'Dmmtu 美女图',
        hostnames: [
            'www.dmmtu.com'
        ],
        pattern: /https?\:\/\/\w+\.dmmtu\.\w+/,
        iStatus: false,
        _break: false
    },
    Fnvshen: {
        id: 19,
        name: '宅男宅女 HD',
        hostnames: [
            'www.fnvshen.com'
        ],
        pattern: /https?\:\/\/\w+\.\w+shen(\w+)?\.\w+/,
        iStatus: false,
        _break: false
    },
    Ikanins: {
        id: 19,
        name: '爱看 INS',
        hostnames: [
            'www.ikanins.com'
        ],
        pattern: /https?\:\/\/(www\.)?ikanins\.\w+/,
        iStatus: false,
        _break: false
    },
    Madoupan: {
        id: 19,
        name: '麻豆盘',
        hostnames: [
            'madoupan.com'
        ],
        pattern: /https?\:\/\/madoupan\.\w+/,
        iStatus: false,
        _break: false
    },
    Mrcong: {
        id: 20,
        name: 'Mrcong',
        hostnames: [
            'mrcong.com'
        ],
        pattern: /https?\:\/\/mrcong\.com/,
        iStatus: false,
        _break: false
    },
    XiurenJi: {
        id: 21,
        name: '秀人集',
        hostnames: [
            'www.xiurenb.net'
        ],
        pattern: /https?\:\/\/\w+\.(xiure)[A-Za-z]{2,}\.[A-Za-z]{2,}/,
        iStatus: false,
        _break: false
    },
    Xrmn: {
        id: 22,
        name: '秀人美女网',
        hostnames: [
            'www.xrmn5.cc'
        ],
        pattern: /https?\:\/\/\w+\.xrmn[0-9]{0,}.[a-zA-Z]{0,}/,
        iStatus: false,
        _break: false
    },
    _24fa: {
        id: 23,
        name: '24Fa',
        hostnames: [
            'www.112w.cc',
            'www.112w.cc\/c49.aspx'
        ],
        pattern: /(https?\:\/\/)[A-Za-z]{3}\.[0-9]*(w|faw)\.cc/,
        iStatus: false,
        _break: false
    },
    tuiimg: {
        id: 24,
        name: '推图网',
        hostnames: [
            'www.tuiimg.com'
        ],
        pattern: /https?:\/\/(\w+\.)?tuiimg\.com/,
        iStatus: false,
        _break: false
    },
    nsfwp: {
        id: 25,
        name: 'Nsfwp',
        hostnames: [
            'nsfwp.buzz'
        ],
        pattern: /https?:\/\/(old\.)?nsfwp(\w+)?.\w+/,
        iStatus: false,
        _break: false
    },
    mmm131: {
        id: 26,
        name: 'MM131美女图片',
        hostnames: [
            'mmm131.com'
        ],
        pattern: /https?:\/\/\w+\.(mmm131|mm1\d+)\.\w+/,
        iStatus: false,
        _break: false
    },
    asiantolick: {
        id: 27,
        name: 'Asian to lick',
        hostnames: [
            'asiantolick.com'
        ],
        pattern: /https?:\/\/(\w+\.)?asiantolick\.\w+/,
        iStatus: false,
        _break: false
    },
    imn5: {
        id: 28,
        name: '爱美女网',
        hostnames: [
            'www.imn5.net'
        ],
        pattern: /https?:\/\/(\w+\.)?imn5.\w+/,
        iStatus: false,
        _break: false
    },
    xchina: {
        id: 29,
        name: '小黄书',
        hostnames: [
            'xchina.co'
        ],
        pattern: /https?:\/\/xchina.\w+/,
        iStatus: false,
        _break: false
    },
    jjgirls: {
        id: 30,
        name: 'Heyzo',
        hostnames: [
            'jjgirls.com'
        ],
        pattern: /https?:\/\/jjgirls\.\w+/,
        iStatus: false,
        _break: false
    },
    photos18: {
        id: 31,
        name: '色情圖片網',
        hostnames: [
            'www.photos18.com'
        ],
        pattern: /https?:\/\/(\w+\.)?photos18\.\w+/,
        iStatus: false,
        _break: false
    },
    pornpics: {
        id: 32,
        name: 'Porn Pics',
        hostnames: [
            'www.pornpics.com'
        ],
        pattern: /https?:\/\/(\w+\.)?pornpics\.\w+/,
        iStatus: false,
        _break: false
    },
    mfsft: {
        id: 33,
        name: '免费私房图',
        hostnames: [
            'www.mfsft.com'
        ],
        pattern: /https?:\/\/(\w+\.)?(.*mnt|.*ywt|.*sft|.*mzt|.*wht|.*taotu|.*xzt|.*xzw|.*meinv|.*tuku|.*tuk|.*meitu|.*youwu)\.com/,
        iStatus: false,
        _break: false
    }
};

let Alpha_Script = {
    obtainHtml: function (options) {
        options = options || {};
        if (!options.url || !options.method) {
            throw new Error("参数不合法");
        }
        GM_xmlhttpRequest(options);
    },
    parseHeaders: function (headStr) {
        let o = {};
        let myregexp = /^([^:]+):(.*)$/img;
        let match = /^([^:]+):(.*)$/img.exec(headStr);
        while (match != null) {
            o[match[1].trim()] = match[2].trim();
            match = myregexp.exec(headStr);
        }
        return o;
    },
    //获取参数
    getParam: function (dest, name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = dest.match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    },
    isArray: function (value) {
        return Object.prototype.toString.apply(value) === '[object Array]';
    }
};

function priorityLog() {
    console.log.apply(this, arguments);
}

function currentUrlActivation() {
    let isActive = false;
    let hostName = window.location.origin;
    let hostnameArry = null;
    for (let key in site) {
        hostnameArry = site[key].pattern.exec(hostName);
        // log("isActive: ",isActive);
        if (hostnameArry != null) {
            site[key].hostnames.push(hostnameArry[0].replace(/https?:\/\//i, ""));
            log("site[key].hostName: ", site[key].hostnames);
            isActive = true;
        } else {
            isActive = false;
        }
        site[key].iStatus = isActive;
        log(key, ": ", isActive);
    }
    // log("合并数组: \n", site.Hentai.hostnames.concat(site.Pron.hostnames));
}

function addScriptCss() {

    // let fancyboxLink = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css";
    // let fancyboxData = await Get(fancyboxLink);
    addStyle(fancyBoxCss);
    if (os.isPc) {
        addStyle(fancyBoxCssAdditon);
    }
}

function addScript_(statement = null, src = null, isModule = false) {
    let mountElement = document.getElementsByTagName('head')[0];
    if (mountElement) {
        let script = document.createElement("script");
        if (src !== null) {
            script.src = src;
        } else if (statement !== null) {
            script.textContent = statement;
            if (isModule) script.type = "module";
        }
        return new Promise((resolve, reject) => {
            try {
                mountElement.appendChild(script);
                script.onerror = (e) => reject(e);
                script.onload = () => {
                    resolve();
                }
            } catch (error) {
                reject(error);
            }
        });
    }
    return null;
}

function startFancyBoxScript() {
    if (os.isPc) {
        popUpMenu();
    }
    addScriptCss();
    if (imagePluginSwitch[0].isFancyBox) {
        if (imagePluginSwitch[0].isFancyBoxFullScreen) {
            addScript_(fancyboxFullJs);
        } else if (imagePluginSwitch[0].isFancyBoxAutoStartFalse) {
            addScript_(fancyboxDefaultAutoStartFalseJs);
        } else {
            addScript_(fancyboxDefaultJs);
        }
    }
}

function activateFancyBox(isBoxAutoControl = null) {
    //激活fancybox
    if (!isEmpty(isBoxAutoControl)) {
        imagePluginSwitch[0].isFancyBoxAutoStartFalse = true;
    }
    imagePluginSwitch[0].isViewerOpen = false;
    imagePluginSwitch[0].isFancyBox = true;
}

function aImgTagPackaging(images) {
    $(images).css({
        "width": "100%",
        "height": "100%"
    });
    let imgObj = $(images);
    let a_imgTag = [];
    if (isDebug) {
        console.groupCollapsed("imageSGroupIn");
    }
    $(imgObj).each(function (index) {
        log("start this Object: \n", $(this));
        let src;
        debugger
        $(this).attr('label', 'sl');
        // src = $(this).attr('src');
        // log("attr src: \n", src);
        src = $(this)[0].src;
        log("array src: \n", src);
        let imageItem = $(this).prop("outerHTML").toString();
        log("New this String: \n", imageItem);
        let construct_aTag = $(`<a data-fancybox="images" href="${src}"></a>`);
        construct_aTag.append(imageItem);
        log("New construct_Tag Html: \n", construct_aTag.prop("outerHTML"));
        a_imgTag.push(construct_aTag);
    });
    if (isDebug) {
        console.groupEnd("imageSGroupIn");
    }
    return $(a_imgTag);
}

function popUpMenu() {
    let popUpStr = '<div id="popUpContent" style="display: none;"><div style="height:100%; width:100%; position:fixed; _position:absolute; top:0; z-index:99999; opacity:0.3; filter: alpha(opacity=30); background-color:#000"></div><div style="width:300px;height:300px;position:fixed;left:50%;top:50%;margin-top:-150px;margin-left:-150px;z-index:100000;background-color:#ffffff;border:1px solid #afb3b6;border-radius:10px;opacity:0.95;filter:alpha(opacity=95);box-shadow:5px 5px 20px 0px #000;"><div id="popUpLinks" style="position:absolute;left:20px;top:20px;height:260px;width:260px;overflow:auto;word-wrap:break-word;"></div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA5FBMVEUAAAD+/v7////9/f7////////+/v7+/v7////+/v7+/v7////+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////////////+/v7+/v7+/v7+/v7+/v4uje3///82ke7s9P3N5PtQoPDI4fqCu/Tu9v5Im+/6/P+VxfZgqPFNnvDp8/3f7fq42Pmnz/d1tPNvsfNkq/JCmO/4+/7X6fz19/rn8PqYx/aNwfV8uPRqrvJZpfFUovAzkO3Q5vu92/mr0fieyva92fWx0vQ6lO5pygFTAAAAJHRSTlMAmfD+RMGwgj2mknlIKR/36+XGnIyHfnJfVDk2My8S4E1CJBvTatKDAAABY0lEQVQoz4WSZ1fCMBRA05ahLPfemkspBUFwgGz3+P//x/hK6ZBzvB/ak96+kZeoGCtFK5eziitqCSfWOnM2CuWUrOyQYPc0bjM2htHXh+/ffQ4lQ6zEPoZ6TwdUp10M56EtAe5MR7y0HGAeX7Ghe6MTzIZwFtTfBrepUzw4UFSGY8CUTTMGLo3eglv58By21pRnB7aNBqTwPfWq/OVey9sH22wZXiWo6Yr3GtRl/f0IRyoPYy14v97YWjVY12BPrcK9XvhaZPUdWCoLbR35yOoW5P7R8eQ3JrmbSp6HVmSrXuTrmNYyUAs2JkL6D6YjG1PgNGXK87F4nWAsUxmL2gyH6oVD7cuhdqFg9CE4T/oPE6CsgvBOP21715AP7ugaDFK+3YD1KyUcAG47bn0TSylxFd8WDTwMMByoBSUHw+jd9/3JbQODnVExygUS7FRUksPVtdDZW8dqCZm8lc1auxcq4gc02GVGTUchmgAAAABJRU5ErkJggg==" id="popUpQuit" style="position:absolute;right:0px;top:0px;cursor: pointer;"/></div></div>';
    let siteListHtml;
    let popUpContent = document.createElement("div");
    document.body.appendChild(popUpContent);
    popUpContent.outerHTML = popUpStr;
    popUpContent = document.querySelector("#popUpContent");
    document.querySelector("#popUpQuit").onclick = function () {
        popUpContent.style.display = "none";
    };
    document.querySelector("#popUpContent>div").onclick = function () {
        popUpContent.style.display = "none";
    };
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 27) {
            popUpContent.style.display = "none";
        }
    });
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 119) { //F8键
            if (e.altKey) {
                popUpContent.style.display = "block";
                let popUpLinks = document.querySelector("div#popUpLinks");
                if (!siteListHtml) {
                    siteListHtml = "";
                    let index = 0;
                    for (let key in site) {
                        if (site[key]._break === false) {
                            index++;
                            siteListHtml += "<span style='font-weight:bold;color:red;'>" + index + ":\t</span>" + "<a href=https://" + site[key].hostnames.pop() + ">" + site[key].name + "</a><br/>";
                        }
                        // log("弹窗加载失败！！！\n");
                        log("弹窗加载成功！\n");
                    }
                }
                popUpLinks.innerHTML = siteListHtml;
            }
        }
    });
}


(async function () {
    'use strict';
    //清屏
    console.clear();
    // let fancyboxJs = "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js"
    await addScript_(null, "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/main.js");
    await addScript_(null, "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/fancybox4.js");
    if (Fancybox4) {
        //打印开关
        isDebug = false;
        log("Fancybox4js isActive!\n");
    };

    // debugger
    if (isDebug) {
        console.groupCollapsed('urlActivationGroup');
    }
    currentUrlActivation();
    if (isDebug) {
        console.groupEnd('urlActivationGroup');
    }

    priorityLog('未实现：');

    function injectBtns() {
        let blobCache = {};
        let blobUrlCache = {};

        let pageUrls = [];
        let injectComponent =
            "<div id='injectComponent'>" +
            "<div id='injectComponentIn'>" +
            '<input id="captureBtn" type="button" class="sl-btn" value="截图并下载"/>' +
            '<span>&nbsp;&nbsp;</span>' +
            '<input id="packageBtn" type="button" class="sl-btn" value="打包下载聚合图片"/>' +
            '<span>&nbsp;&nbsp;</span>' +
            '<input id="injectaggregatBtn" type="button" class="sl-btn" value="聚合显示"/>' +
            '</div>' +
            '</div>';
        let domain = '';
        let hostName = window.location.hostname;
        let protocol = window.location.protocol;
        let startUrl = protocol + '//' + hostName + '/';
        let injectAggregationRef = null;
        let switchAggregationBtn = null;
        let collectPics = null;
        let session = document.cookie;

        log('sessionCookie: ', session);

        let switchAggregationBtnTemplateFunc = function (aggregationDispayFunc, aggregationDispayNoneFunc) {
            if ($('#injectaggregatBtn').val() === '聚合显示') {
                $('#injectaggregatBtn').val('聚合隐藏');
                $('#c_container').show();
                aggregationDispayFunc();
            } else {
                $('#injectaggregatBtn').val('聚合显示');
                $('#c_container').hide();
                aggregationDispayNoneFunc();
            }
            //处理inject样式
            $("#injectComponentIn").css({
                "text-align": "center",
                "padding": "5px",
                "clear": "both",
                "margin": "10px auto",
                // "width": "85%",
            });
            $("#injectComponentIn > input").css({
                "display": "inline-block",
                'padding': 'revert',
                "background": "#333",
                "color": "#fff",
                "font-weight": "600",
                "border": "none",
                "cursor": "pointer",
                "border-radius": "3px"
            });
        };
        let collectPicsTemplateFunc = function (parseImgsFunc, imgStyleFunc) {
            let id = setInterval(function () {
                if ($) {
                    clearInterval(id);
                    let breakPageLoop = false;
                    for (let i = 0, len = pageUrls.length; i < len; i++) {
                        //创建div去装各自
                        $('#c_container').append('<div id="c_' + i + '"></div>');
                        if (!breakPageLoop) {
                            // debugger
                            let pageUrl = startUrl + pageUrls[i];
                            Alpha_Script.obtainHtml({
                                url: pageUrl,
                                headers: Alpha_Script.parseHeaders("Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\n" +
                                    "Accept-Encoding:gzip, deflate, br\n" +
                                    "Accept-Language:zh-CN,zh;q=0.9\n" +
                                    "cookie:" + session + "\n" +
                                    "Referer:" + window.location.href + "\n" +
                                    "User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36"
                                ),
                                method: 'GET',
                                onload: function () {
                                    let _i = i;
                                    let _pageUrl = pageUrl;
                                    // debugger
                                    return function (response) {
                                        debugger
                                        if (isDebug) {
                                            console.groupCollapsed('imagesGroupOut');
                                        }
                                        log('response pageUrl:\n', _pageUrl);
                                        // response.status=403服务器拒绝爬虫可能通过改cookie的方法来做
                                        if (response && response.status && response.status >= 200 && response.status < 300) {
                                            let html = response.responseText;
                                            // log('html==>', html);
                                            let parser = new DOMParser();
                                            let doc = parser.parseFromString(html, "text/html");
                                            let imgObj = parseImgsFunc(doc);
                                            let imgContainerCssSelector = '#c_' + _i;
                                            log(imgContainerCssSelector);
                                            $(imgObj).each(function (index) {
                                                $(this).attr("id", "image");
                                                log(index, ':\n', $(this).prop('outerHTML'));
                                                // log(index, ':\n', $(this));
                                                if (imgStyleFunc) {
                                                    imgStyleFunc($(this)[0]);
                                                } else {
                                                    $(this)[0].style = "width: 100%;height: 100%";
                                                }
                                                $(this).attr('label', 'sl');
                                                $(imgContainerCssSelector).append('<div class="sl-c-pic">' + $(this).prop('outerHTML') + '</div>');
                                            });
                                        }
                                        if (isDebug) {
                                            console.groupEnd('imagesGroupOut');
                                        }
                                    };
                                }()
                            });
                        } else {
                            break;
                        }
                    }
                }
            }, 100);
        };
        let match = function () {};
        let mismatch = function () {};
        let meet = function (options) {
            // debugger
            options = options || {};
            options.domain = options.domain || domain;
            options.match = options.match || match;
            options.mismatch = options.mismatch || mismatch;

            log("Arr(options.domain): \n" + options.domain);
            let matchDomain = false;
            if (Alpha_Script.isArray(options.domain)) {
                for (let i = 0; i < options.domain.length; i++) {
                    if (options.domain[i] === hostName) {
                        matchDomain = true;
                        break;
                    }
                }
            } else {
                matchDomain = options.domain === hostName || options.domain === '';
            }
            return matchDomain;
        };
        let removeAD = null;

        function packageAndDownload() {
            let zip = new JSZip();
            let imgList = $('img[label="sl"]');
            let length = imgList.length;
            $.each(imgList, function (index, value) {
                //zip.file
                // debugger
                let myDate = new Date(); //获取系统当前时间
                let times = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate() + "-" + myDate.getHours() + "-" + myDate.getMinutes() + "-" + myDate.getSeconds();
                let img = zip.folder(times);
                let imgSrc = $(value).attr('src'); {
                    if (blobCache[imgSrc]) {
                        img.file(index + ".jpg", blobCache[imgSrc], {
                            base64: false
                        });
                        length--;
                    } else {
                        if (!imgSrc.startsWith('blob:\n')) {
                            Alpha_Script.obtainHtml({
                                url: imgSrc,
                                method: 'GET',
                                headers: {
                                    "Accept": "application/*",
                                    "Referer": window.location.origin,
                                },
                                responseType: 'blob',
                                onload: function (response) {
                                    let responseHeaders = Alpha_Script.parseHeaders(response.responseHeaders);
                                    let contentType = responseHeaders['Content-Type'];
                                    if (!contentType) {
                                        contentType = "image/png";
                                    }
                                    let blob = new Blob([response.response], {
                                        type: contentType
                                    });
                                    blobCache[imgSrc] = blob;
                                    img.file(index + ".jpg", blobCache[imgSrc], {
                                        base64: false
                                    });
                                    length--;
                                }
                            });
                        } else {
                            img.file(index + ".jpg", blobCache[blobUrlCache[imgSrc]], {
                                base64: false
                            });
                            length--;
                        }
                    }
                }
            });
            let packagName = document.title;
            if (!packagName) {
                packagName = "PackageSL";
            }
            let id = setInterval(function () {
                if (length == 0) {
                    clearInterval(id);
                    zip.generateAsync({
                            type: "blob"
                        })
                        .then(function (content) {
                            saveAs(content, packagName + ".zip");
                        });
                }
            }, 100);
        }

        function bindBtn(callback) {
            $('#injectaggregatBtn').bind('click', callback);
            $('#captureBtn').bind('click', function (e) {
                let imgList = $('img[label="sl"]');
                let length = imgList.length;
                $.each(imgList, function (index, value) {
                    let imgSrc = $(value).attr('src'); {
                        if (blobCache[imgSrc]) {
                            length--;
                        } else {
                            if (!imgSrc.startsWith('blob:\n')) {
                                Alpha_Script.obtainHtml({
                                    url: imgSrc,
                                    method: 'GET',
                                    headers: {
                                        "Accept": "application/*"
                                    },
                                    responseType: 'blob',
                                    onload: function (response) {
                                        let responseHeaders = Alpha_Script.parseHeaders(response.responseHeaders);
                                        let contentType = responseHeaders['Content-Type'];
                                        if (!contentType) {
                                            contentType = "image/png";
                                        }
                                        let blob = new Blob([response.response], {
                                            type: contentType
                                        });
                                        blobCache[imgSrc] = blob;
                                        length--;
                                    }
                                });
                            }
                        }
                    }
                });
                let id = setInterval(function () {
                    if (length == 0) {
                        clearInterval(id);
                        let length2 = imgList.length;
                        $.each(imgList, function (index, value) {
                            let imgSrc = $(value).attr('src'); {
                                if (!imgSrc.startsWith('blob:\n')) {
                                    if (blobCache[imgSrc]) {
                                        let objectURL = URL.createObjectURL(blobCache[imgSrc]);
                                        blobUrlCache[objectURL] = imgSrc;
                                        $(value).attr('src', objectURL);
                                        length2--;
                                    }
                                } else {
                                    length2--;
                                }
                            }
                        });
                        let id2 = setInterval(function () {
                            if (length2 == 0) {
                                clearInterval(id2);
                                let cContainner = $('#c_container').get(0);
                                domtoimage.toBlob(cContainner)
                                    .then(function (blob) {
                                        if (blob) {
                                            saveAs(blob, "captureSL.png");
                                        } else {
                                            err('截图太大不能保存!');
                                            alert("截图太大不能保存!");
                                        }
                                    })
                                    .catch(function (error) {
                                        err('截图太大不能保存!');
                                        alert("截图太大不能保存!");
                                    });
                            }
                        }, 100);

                    }
                }, 100);
            });
            $('#packageBtn').bind('click', function (e) {
                packageAndDownload();
            });
        };

        // 热键
        function hotkeys() {
            GM_registerMenuCommand("图片打包下载", packageAndDownload, "d");
            $(document).keydown(function (e) {
                if (e.altKey && e.shiftKey) {
                    if (e.which == 76) { //L
                        log("触发快捷键");
                    }
                }
            });
        }

        return {
            injectComponent: function (i) {
                if (i) injectComponent = i;
                return this;
            },
            domain: function (d) {
                if (d) domain = d;
                return this;
            },
            removeAD: function (fun) {
                if (fun) removeAD = fun;
                return this;
            },
            match: function (fun) {
                if (fun) match = fun;
                return this;
            },
            mismatch: function (fun) {
                if (fun) mismatch = fun;
                return this;
            },
            injectAggregationRef: function (fun) {
                if (fun) injectAggregationRef = fun;
                return this;
            },
            switchAggregationBtn: function (aggregationDispayFunc, aggregationDispayNoneFunc) {
                switchAggregationBtn = function () {
                    switchAggregationBtnTemplateFunc(aggregationDispayFunc, aggregationDispayNoneFunc);
                };
                return this;
            },
            collectPics: function (parseImgsFunc, imgStyleFunc) {
                collectPics = function () {
                    collectPicsTemplateFunc(parseImgsFunc, imgStyleFunc);
                }
                return this;
            },
            start: function () {
                //1、匹配当前hostName
                //2、注入操作界面
                //3、聚合多页图片
                //4、显示

                let matchDomain = meet();
                if (matchDomain) {
                    if (removeAD) {
                        removeAD();
                    }
                    if (injectAggregationRef) {
                        // debugger
                        injectAggregationRef.apply(this, [injectComponent, pageUrls]);
                        $('#injectComponentIn').after('<div id="c_container"></div>');
                        if (switchAggregationBtn) {
                            switchAggregationBtn();
                            if (collectPics) {
                                collectPics();
                                hotkeys();
                                debugger
                                startFancyBoxScript();
                            }
                        }
                        bindBtn(function () {
                            if (switchAggregationBtn) {
                                switchAggregationBtn();
                            }
                        });

                    }
                }
            }
        }
    }

    /* --------------------------------------------default-------------------------------------------- */
    {
        /* --------------------------------------------yhxz521.com------------------------------------------ */
        if (false && 'yhxz521.com' === window.location.hostname) {
            injectBtns().domain('yhxz521.com').removeAD(function () {
                $('div.atc_new_head').remove(); //移除广告等无必要元素
                $('div.keywords').remove(); //移除广告等无必要元素
            }).switchAggregationBtn(function () {
                $('div.main').hide();
                $('div.photos').hide();
                $('div#imgwrap').hide();
            }, function () {
                $('div.main').show();
                $('div.photos').show();
                $('div#imgwrap').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                log("currentPathname: \n", currentPathname);
                let match = currentPathname.match(/\/(.+?\/)(\d+)(?:_\d+)?\.html/m); //http://www.aitaotu.com/weimei/36129.html//http://yhxz521.com/riben/1534.html
                log("match: \n", match);
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = '/' + match[2] + '_';
                        let suffixUrl = '.html';
                        let limitPageStr = $('div.page a ').html();
                        debugger
                        let limitPageMatch = limitPageStr.match(/共(\d+)页/im);

                        if (limitPageMatch != null) {
                            let totalPics = parseInt(limitPageMatch[1]);
                            let number = totalPics % 3;
                            totalPageCnt = Math.floor(totalPics / 1);
                            if (number > 0) {
                                totalPageCnt = totalPageCnt + 1;
                            }
                            log('totalPageCnt', totalPageCnt);
                        }
                        let pageUrl = partPreUrl + '/' + match[2] + suffixUrl;
                        pageUrls.push(pageUrl);
                        for (let i = 2; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + i + suffixUrl;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.article_position').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div#disappear img');
            }, function (imgE) {
                imgE.style = "width: 70%;height: 70%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------umei.fun--------------------------------------------- */
        if (false && 'umei.fun' === window.location.hostname) {
            injectBtns().domain(['umei.fun']).removeAD(function () {
                $("div[id^='gn_delivery']").remove();
                $("a[id^='__qdd_ciw_a__']").remove();
                $('iframe').remove(); //移除广告等无必要元素
            }).switchAggregationBtn(function () {
                $('#display_image_detail').hide();
                $('#paginator').hide();
            }, function () {
                $('#display_image_detail').show();
                $('#paginator').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let match = window.location.pathname.match(/(\/\d+)/im); ///image/cos-cos-1/page/2/""

                //let limitPageStr = $('#paginator').html();
                //let limitPageMatch = limitPageStr.match(/\/page\/\d+\/\">last/im)[0].match(/\d+/);
                //let maxpage=limitPageMatch[0];

                if (match !== null) {
                    {
                        let partPreUrl = window.location.pathname;
                        pageUrls.push(partPreUrl);
                    }

                    $('h2').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.card img'); //class . id#
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.meitulu.com-------------------------------------- */
        if (false && 'www.meitulu.com' === window.location.hostname) {
            injectBtns().domain('www.meitulu.com').removeAD(function () {
                $("a[id^='__tg_ciw_a__']").remove();
                $("a[id^='__qdd_ciw_a__']").remove();
                $('iframe').remove(); //移除广告等无必要元素
            }).switchAggregationBtn(function () {
                $('div.content').hide();
                $('body > center').hide();
            }, function () {
                $('div.content').show();
                $('body > center').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                let match = currentPathname.match(/^\/(item\/)(\d+)(?:_\d+)?\.html$/im);
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = match[2];
                        let suffixUrl = '.html';
                        let limitPageStr = $('a.a1:last').prev().html();
                        totalPageCnt = parseInt(limitPageStr);
                        log('totalPageCnt', totalPageCnt);
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = '';
                            if (i == 1) {
                                pageUrl = partPreUrl + pageId + suffixUrl;
                            } else {
                                pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                            }
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.bk3').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.content > center  > img');
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.17786.com---------------------------------------- */
        if (false && 'www.17786.com' === window.location.hostname) {
            injectBtns().domain('www.17786.com').switchAggregationBtn(function () {
                $('div.img_box').hide();
                $('div.wt-pagelist').hide();
                $('div#picBody').hide();
                $('.articleV2Page').hide();
            }, function () {
                $('div.img_box').show();
                $('div.wt-pagelist').show();
                $('div#picBody').show();
                $('.articleV2Page').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                let match = currentPathname.match(/^\/(\d+)(?:_\d+)?\.html$/im); //http://www.17786.com/7745_1.html
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = '';
                        let pageId = match[1];
                        let suffixUrl = '.html';
                        let limitPageStr = $('h2').html();
                        let limitPageMatch = limitPageStr.match(/\(\d+\/(\d+)\)/im);
                        if (limitPageMatch != null) {
                            totalPageCnt = parseInt(limitPageMatch[1]);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.tsmaincont-desc').after(injectComponent);
                } else {
                    let match = currentPathname.match(/^\/((?:\w+\/)+)(\d+)(?:_\d+)?\.html$/im); //http://www.17786.com/beautiful/feizhuliutupian/44569.html
                    if (match != null) {
                        {
                            let totalPageCnt = 50;
                            let partPreUrl = match[1];
                            let pageId = match[2];
                            let suffixUrl = '.html';
                            log('totalPageCnt', totalPageCnt);
                            for (let i = 1; i <= totalPageCnt; i++) {
                                let pageUrl = '';
                                if (i == 1) {
                                    pageUrl = partPreUrl + pageId + suffixUrl;
                                } else {
                                    pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                                }
                                log('push pageUrl:\n', pageUrl);
                                pageUrls.push(pageUrl);
                            }
                        }

                        $('div.articleV2Desc').after(injectComponent);
                    }
                }
            }).collectPics(function (doc) {
                let imgObj = $(doc).find('img.IMG_show');
                if (imgObj.length == 0) {
                    imgObj = $(doc).find('a#RightUrl img');
                }
                return imgObj;
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.nvshens.com-------------------------------------- */
        if (false && 'www.nvshens.com' === window.location.hostname) {
            injectBtns().domain('www.nvshens.com').removeAD(function () {
                $('div[id^=mms]').remove(); //移除广告等无必要元素
            }).switchAggregationBtn(function () {
                $('div.ck-box-unit').hide();
                $('div.photos').hide();
                $('div#imgwrap').hide();
            }, function () {
                $('div.ck-box-unit').show();
                $('div.photos').show();
                $('div#imgwrap').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/\/(\d+).?\/(\d+).?\.html)?$/im);//20170507/282.html
                let match = null
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = '/';
                        let suffixUrl = '.html';
                        let limitPageStr = $('div#dinfo span[style="color: #DB0909"]').html();
                        let limitPageMatch = limitPageStr.match(/(\d+)张照片/im);
                        if (limitPageMatch != null) {
                            let totalPics = parseInt(limitPageMatch[1]);
                            let number = totalPics % 3;
                            totalPageCnt = Math.floor(totalPics / 3);
                            if (number > 0) {
                                totalPageCnt = totalPageCnt + 1;
                            }
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + i + suffixUrl;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div#dinfo').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('ul#hgallery img');
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.aitaotu.com-------------------------------------- */
        if (false && 'www.aitaotu.com' === window.location.hostname) {
            injectBtns().domain('www.aitaotu.com').removeAD(function () {
                setInterval(function () {
                    $('#lgVshow').remove();
                    $('div.gg1002').remove();
                }, 100);
            }).switchAggregationBtn(function () {
                $('div.big-pic').hide();
                $('div.pages').hide();
            }, function () {
                $('div.big-pic').show();
                $('div.pages').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/\/(.+?\/)(\d+)(?:_\d+)?\.html/m); //http://www.aitaotu.com/weimei/36129.html
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = match[2];
                        let suffixUrl = '.html';
                        let limitPageStr = $('div.photo > div.pages > ul > li:last-child > a').attr('href');
                        let limitPageMatch = limitPageStr.match(/\/\w+\/(\d+)(?:_(\d+))?\.html/m);
                        if (limitPageMatch != null) {
                            totalPageCnt = parseInt(limitPageMatch[2]);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.tsmaincont-desc').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('#big-pic > p > a  > img');
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.mzitu.com---------------------------------------- */
        if (false && 'www.mzitu.com' === window.location.hostname) {
            injectBtns().domain('www.mzitu.com').removeAD(function () {

            }).switchAggregationBtn(function () {
                $('div.main-image').hide();
                $('div.pagenavi').hide();
            }, function () {
                $('div.main-image').show();
                $('div.pagenavi').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/\/(\d+)(?:\/\d+)?/m); //http://www.mzitu.com/139218
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = '';
                        let pageId = match[1];
                        let suffixUrl = '';
                        let limitPageStr = $('div.pagenavi >a').last().prev().find('span').text().trim();
                        if (limitPageStr) {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + '/' + i + suffixUrl;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.main-meta').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.main-image > p > a > img');
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.beautylegmm.com---------------------------------- */
        if (false && 'www.beautylegmm.com' === window.location.hostname) {
            injectBtns().domain('www.beautylegmm.com').removeAD(function () {
                setInterval(function () {
                    $('iframe').remove();
                }, 100);
            }).switchAggregationBtn(function () {
                $('div.post').hide();
                $('div.archives_page_bar').hide();
            }, function () {
                $('div.post').show();
                $('div.archives_page_bar').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(\w+\/beautyleg-\d+\.html)/im); //http://www.beautylegmm.com/Vanessa/beautyleg-1619.html
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = '';
                        let pageId = match[1];
                        let suffixUrl = '';
                        let limitPageStr = $('#contents_post > div.post > div > a:not(.next)').last().text().trim();
                        if (limitPageStr) {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + '?page=' + i + suffixUrl;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.post_title').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('#contents_post > div.post > a  > img');
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.xgtaotu.com-------------------------------------- */
        if (false && 'www.xgtutu.com' === window.location.hostname) {
            injectBtns().domain(['www.xgtaotu.com', 'www.xgtutu.com']).removeAD(function () {
                $('#divStayTopright').remove();
            }).switchAggregationBtn(function () {
                $('div.page').hide();
            }, function () {
                $('div.page').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(rentihtml\/zhaopian\/\d+\/\d+)/im); //http://www.xgtutu.com/rentihtml/zhaopian/20200314/82031.html
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = '';
                        let pageId = match[1];
                        let suffixUrl = '.html';
                        let limitPageStr = $('p b a').eq(-2).text().replace(/[\]\[]/img, "").trim();
                        if (limitPageStr) {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = '';
                            if (i == 1) {
                                pageUrl = partPreUrl + pageId + suffixUrl;
                            } else {
                                pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                            }

                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div h1').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('p a > img');
            }, function (imgE) {
                imgE.style = "max-width: 100%;";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.youzi4.cc---------------------------------------- */
        if (false && 'www.youzi4.cc' === window.location.hostname) {
            injectBtns().domain('www.youzi4.cc').removeAD(function () {

            }).switchAggregationBtn(function () {
                $('#picBody').hide();
                $('div.page-tag').hide();
            }, function () {
                $('#picBody').show();
                $('div.page-tag').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(\w+.*\/\d+)/im); //http://www.youzi4.cc/mm/19890/19890_1.html
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = '';
                        let pageId = match[1];
                        let suffixUrl = '.html';
                        let limitPageStr = $('div.page-tag> ul > div > div > a ').eq(-2).text().trim();
                        if (limitPageStr) {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = '';
                            if (i == 1) {
                                pageUrl = partPreUrl + pageId + suffixUrl;
                            } else {
                                pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                            }

                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.articleV4Desc').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('#picBody p a img');
            }, function (imgE) {
                imgE.style = "max-width: 100%;";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.xiumeim.com-------------------------------------- */
        if (false && 'www.xmeim.com' === window.location.hostname) {
            injectBtns().domain(['www.xiumeim.com', 'www.xmeim.com']).removeAD(function () {

            }).switchAggregationBtn(function () {
                $('div.gallary_wrap').hide();
            }, function () {
                $('div.gallary_wrap').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(photos\/\w+-\d+)/im); //http://www.xiumeim.com/photos/LUGirls-190942.html
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = '';
                        let pageId = match[1];
                        let suffixUrl = '.html';
                        let limitPageStr = $('div.paginator > span.count').text().trim();
                        let limitPageMatch = limitPageStr.match(/\(共(\d+)页\)/m);
                        if (limitPageMatch != null) {
                            totalPageCnt = parseInt(limitPageMatch[1]);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = '';
                            if (i == 1) {
                                pageUrl = partPreUrl + pageId + suffixUrl;
                            } else {
                                pageUrl = partPreUrl + pageId + '-' + i + suffixUrl;
                            }

                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.album_desc div.inline').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('table > tbody > tr > td > img');
            }, function (imgE) {
                imgE.style = "max-width: 100%;";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.mm131.com---------------------------------------- */
        if (false && 'www.mm131.com' === window.location.hostname) {
            injectBtns().domain('www.mm131.com').switchAggregationBtn(function () {
                $('.content-pic').hide();
                $('.content-page').hide();
            }, function () {
                $('.content-pic').show();
                $('.content-page').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(\w+\/)(\d+)(?:_\d+)?\.html$/im);
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = match[2];
                        let suffixUrl = '.html';
                        let limitPageStr = $('span.page-ch:nth-child(1)').text();
                        let limitPageMatch = limitPageStr.match(/共(\d+)页/m);
                        if (limitPageMatch != null) {
                            totalPageCnt = parseInt(limitPageMatch[1]);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = '';
                            if (i == 1) {
                                pageUrl = partPreUrl + pageId + suffixUrl;
                            } else {
                                pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                            }
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.content-msg').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.content-pic a img');
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.114tuku.com-------------------------------------- */
        if (false && 'www.114tuku.com' === window.location.hostname) {
            injectBtns().domain('www.114tuku.com').removeAD(function () {
                setInterval(function () {
                    $('iframe').remove();
                    $('div[baidu_imageplus_sensitive_judge="true"]').remove();
                }, 100);
            }).switchAggregationBtn(function () {
                $('#picBody').hide();
                $('#pages').hide();
            }, function () {
                $('#picBody').show();
                $('#pages').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/\/(\w+?p)\d+\//m);
                let match = null;
                if (match !== null) {
                    if ($('div.content_body a img').length > 0) {
                        {
                            let totalPageCnt = 1;
                            let partPreUrl = match[1];
                            let pageId = '';
                            let suffixUrl = '/';
                            let limitPageStr = $('#pages > a:last-child').prev().text();
                            if (limitPageStr) {
                                totalPageCnt = parseInt(limitPageStr);
                                log('totalPageCnt', totalPageCnt);
                            }
                            for (let i = 1; i <= totalPageCnt; i++) {
                                let pageUrl = partPreUrl + pageId + i + suffixUrl;
                                log('push pageUrl:\n', pageUrl);
                                pageUrls.push(pageUrl);
                            }
                        }
                        $('div.tags').after(injectComponent);
                    }
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.content_body a img');
            }, function (imgE) {
                imgE.style = "width: 100%;";
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.meituri.com-------------------------------------- */
        if (false && 'www.meituri.com' === window.location.hostname) {
            injectBtns().domain('www.meituri.com').removeAD(function () {
                setInterval(function () {
                    $('iframe').remove();
                    $('div.weixin').remove();
                    $('div[id^=__jclm_]').remove();
                    $('center>a').parent().remove();
                }, 200);
            }).switchAggregationBtn(function () {
                $('#pages').hide();
                $('body > div.content').hide();
            }, function () {
                $('#pages').show();
                $('body > div.content').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(a\/\d+\/)(\d+\.html)?/im);
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = '';
                        let suffixUrl = '';
                        let limitPageStr = '';
                        let text = $('#pages > a').last().text();
                        if ('下一页' == text) {
                            limitPageStr = $('#pages > a').last().prev().text();
                        }
                        if (limitPageStr != '') {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = '';
                            if (i == 1) {
                                pageUrl = partPreUrl;
                            } else {
                                pageUrl = partPreUrl + pageId + suffixUrl + i + '.html';
                            }
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }


                    }
                    $('div.tuji').append(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.content > img');
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.tuao81.top--------------------------------------- */
        if (false && 'www.tuao81.top' === window.location.hostname) {
            injectBtns().domain('www.tuao81.top').removeAD(function () {
                setInterval(function () {
                    $('iframe').remove();
                    $('#v_ads > img').parent().parent().remove();
                }, 100);
            }).switchAggregationBtn(function () {
                $('div.entry').hide();
            }, function () {
                $('div.entry').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/\/(post\/\d+.html)\b/i);
                let match = null;
                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = '';
                        let suffixUrl = '';
                        let limitPageStr = '';
                        let text = $('#dm-fy li').last().text();
                        if ('下一頁' == text) {
                            limitPageStr = $('#dm-fy li').last().prev().text();
                        }
                        if (limitPageStr != '') {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + suffixUrl + '?page=' + i;
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.postmeta').after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.entry > p > a > img');
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.rosim.cc----------------------------------------- */
        if (false && 'www.rosim.cc' === window.location.hostname) {
            injectBtns().domain(['rosim.cc', 'www.rosim.cc']).removeAD(function () {
                setInterval(function () {
                    $('iframe').remove();
                }, 100);
            }).switchAggregationBtn(function () {
                $('div.container>h4').parent().find('div.col-xs-12:eq(2)').hide();
            }, function () {
                $('div.container>h4').parent().find('div.col-xs-12:eq(2)').show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                // let match = currentPathname.match(/^\/(item-detail-\d+)(?:-\d+)?.html/im);

                if (match !== null) {
                    {
                        let totalPageCnt = 1;
                        let partPreUrl = match[1];
                        let pageId = '';
                        let suffixUrl = '';
                        let limitPageStr = $('ul.pagination > li').last().find('a').attr('name');
                        if (limitPageStr != '') {
                            totalPageCnt = parseInt(limitPageStr);
                            log('totalPageCnt', totalPageCnt);
                        }
                        for (let i = 1; i <= totalPageCnt; i++) {
                            let pageUrl = partPreUrl + pageId + suffixUrl + '-' + i + '.html';
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                    }
                    $('div.container>h4').next().after(injectComponent);
                }
            }).collectPics(function (doc) {
                return $(doc).find('div.col-xs-12> img.img-responsive ');
            }).start(); //urlIsFalse
        }
        /* --------------------------------------------www.youtube.com-------------------------------------- */
        if (false && 'www.youtube.com' === window.location.hostname) {
            let vId = "";
            let id = setInterval(function () {
                $('#player-unavailable').not('.hid').addClass('hid');
                let curVId = Alpha_Script.getParam(dest, 'v');
                if (curVId != null && vId != curVId) {
                    log('切换VID');
                    vId = curVId;
                    let sid = setInterval(function () {
                        let swichVIdState = switchVId(vId);
                        if (swichVIdState) {
                            clearInterval(sid);
                        }
                    }, 100);
                }
            }, 100);
        }
    }
    /* --------------------------------------------wndfx.com-------------------------------------------- */
    if (site.Wndfx.iStatus) {
        injectBtns().domain('www.wndfx.com').removeAD(function () {
            $('div.atc_new_head').remove(); //移除广告等无必要元素
            $('div.keywords').remove(); //移除广告等无必要元素
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('div .article-content').hide();
            $('div.nav-links').hide();
            $('div.article-wechats').hide();
        }, function () {
            $('div .article-content').show();
            $('div.nav-links').show();
            $('div.article-wechats').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            // debugger
            log("currentPathname: " + currentPathname);
            let match = currentPathname.match(/\/(.+\/)(\d+)(?:_\d+)?\.html/m); //http://www.aitaotu.com/weimei/36129.html

            if (match !== null) {
                {
                    let totalPageCnt = 1;
                    let partPreUrl = match[1];
                    let pageId = match[2] + '_';
                    let suffixUrl = '.html';
                    let limitPageStr = $('.page_imges a').html();
                    // debugger
                    // log('partPreUrl: ', partPreUrl);
                    // log('pageId: ', pageId);
                    // log('limitPageStr: ', limitPageStr);

                    let limitPageMatch = limitPageStr.match(/(?<=\<\/span\>)\d/im);
                    // log('limitPageMatch: ', limitPageMatch);

                    if (limitPageMatch != null) {
                        let totalPics = parseInt(limitPageMatch[0]);
                        totalPageCnt = totalPics + 1;
                        log('totalPageCnt: ', totalPageCnt);
                    }
                    let pageUrl = partPreUrl + match[2] + suffixUrl;
                    pageUrls.push(pageUrl);
                    for (let i = 2; i <= totalPageCnt; i++) {
                        let pageUrl = partPreUrl + pageId + i + suffixUrl;
                        log('push pageUrl: ', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                }
                $('div.mbd_ad').first().after(injectComponent);
            }
        }).collectPics(function (doc) {
            return $(doc).find('.article-content img');
        }, function (imgE) {
            $(imgE).attr({
                'data-fancybox': 'images'
            });
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------hentai-cosplays.com & Pron--------------------------- */
    if (site.Hentai.iStatus || site.Pron.iStatus) {
        injectBtns().domain(site.Hentai.hostnames.concat(site.Pron.hostnames)).removeAD(function () {
            $("div[id^='gn_delivery']").remove();
            $("a[id^='__qdd_ciw_a__']").remove();
            $('iframe').remove(); //移除广告等无必要元素
            $("div #social_button").remove();
            $("div #top_ad").remove();
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('#display_image_detail').hide();
            $('#post').hide();
            //android
            $('#detail_list').hide();
            $('.paginator_area').hide();
        }, function () {
            $('#display_image_detail').show();
            $('#post').show();
            //android
            $('#detail_list').show();
            $('.paginator_area').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            // let match = window.location.pathname.match(/(\/page\/\d+\/)$/im); // /image/cos-cos-1/page/2/
            let limitPageStr = null;
            if (os.isAndroid) {
                limitPageStr = $('.paginator_area').prop('outerHTML');
            } else {
                limitPageStr = $('#main_contents').prop('outerHTML');
            }

            log("limitPageStr: ", limitPageStr);
            let limitPageMatchList = limitPageStr.match(/(?<=page\/)\d+/g);
            if (limitPageMatchList == null) {
                limitPageMatchList = ['1'];
            }
            let maxpage = Math.max.apply(null, limitPageMatchList);
            // let maxpage = limitPageMatchList.length;
            log("limitPageMatch: ", limitPageMatchList);
            log("maxpage: ", maxpage);
            debugger
            if (limitPageMatchList !== null) {
                {
                    let totalPageCnt = maxpage;
                    // bug: \n https://zh.hentai-cosplays.com/image/--835/
                    // /image/333-jc-selfie-images-self-portrait-photos-taken-by-female-junior-high-school-students-have-different-eroticism/

                    let partPreUrl = null;
                    let suffixUrl = null;
                    if (partPreUrl == null) {
                        suffixUrl = "";
                        partPreUrl = window.location.pathname.match(/\/((?!(page|com))[a-zA-Z])+\/[-a-zA-Z0-9]+\//g);
                    } else {
                        partPreUrl = window.location.pathname.match(/[a-zA-Z]+\/\w+[-a-zA-Z0-9]+\//g);
                    }
                    suffixUrl = 'page/';
                    log("partPreUrl: ", partPreUrl);
                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl = partPreUrl + suffixUrl + i + '/';
                        log('push pageUrl: ', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                }
                if (os.isAndroid) {
                    $('ul#detail_list').prev().after(injectComponent);
                } else {
                    $('#title+p').after(injectComponent);
                }

            }
        }).collectPics(function (doc) {
            return $(doc).find("div#display_image_detail div a img");
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
            let src = $(imgE).attr('lazysrc');
            if (src) {
                $(imgE).removeAttr('lazysrc');
                $(imgE).attr('src', src);
            }
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.lsm.me & www.lesmao.org-------------------------- */
    if (site.Lesmao.iStatus) {
        injectBtns().domain(site.Lesmao.hostnames).removeAD(function () {
            $('#thread-down').remove(); //移除广告等无必要元素
            $("div .wp").remove();

        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('.adw').hide();
            $('#thread-page').hide();
            $("#pic").hide();
            $(".picvip").hide();
        }, function () {
            $('.adw').show();
            $('#thread-page').show();
            $("#pic").show();
            $(".picvip").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let match = window.location.pathname.match(/^\/(thread-\d+-)(\d+)(-\d+\.html)$/im);
            log("match: \n", match);
            debugger
            if (match !== null) {
                {
                    let totalPageCnt = 5;
                    let partPreUrl = match[1];
                    let suffixUrl = match[3];

                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl = partPreUrl + i + suffixUrl;
                        log('push pageUrl:\n', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                }
                if (os.isAndroid) {
                    $('.data').after(injectComponent);
                } else {
                    $('#thread-pic').after(injectComponent);
                }
            }
        }).collectPics(function (doc) {
            return $(doc).find('ul > li > img');
        }, function (imgE) {
            $(imgE).attr({
                'data-fancybox': 'images'
            });
            imgE.style = "width: 100%;height: 100%";
        }).start(); // urlIsTrue
    }
    /* --------------------------------------------www.umei.cc & www.umeitu.com------------------------- */
    if (site.Umei.iStatus) {
        injectBtns().domain(site.Umei.hostnames).removeAD(function () {
            $('union').remove(); //移除广告等无必要元素

        }).switchAggregationBtn(function () {
            activateFancyBox();
            // $('.ImageBody').hide();
            // $('.NewPages').hide();
            $('.img-content').hide();
            $('.gongneng').hide();
            $('.swiper-box').hide();
            $('.hb-nav').hide();
            //android
            // $('.arc-body').hide();
            // $(".pages").hide();
        }, function () {
            // $('.ImageBody').show();
            // $('.NewPages').show();
            $('.img-content').show();
            $('.gongneng').show();
            $('.hb-nav').show();
            //android
            // $('.arc-body').show();
            // $(".pages").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            let match = currentPathname.match(/^\/(\w+\/\w+(?:\/\w+)?\/)(\d+)(?:_\d+)?\.htm$/im);
            log("match: \n", match);
            if (match !== null) {
                {
                    let totalPageCnt = 1;
                    let partPreUrl = match[1];
                    let pageId = match[2];
                    let suffixUrl = '.htm';
                    let limitPageStr = null;

                    limitPageStr = $('.gongneng').prop("outerHTML").toString().match(/\d+(?=\<\/span\>)/g);
                    totalPageCnt = parseInt(limitPageStr);

                    log("limitPageStr: \n", limitPageStr);
                    log('totalPageCnt: \n', totalPageCnt);

                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl = '';
                        if (i == 1) {
                            pageUrl = partPreUrl + pageId + suffixUrl;
                        } else {
                            pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                        }
                        log('push pageUrl:\n', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                }
                $(".main-left").prepend(injectComponent);
            }
        }).collectPics(function (doc) {
            return $(doc).find('.content-box a img');
        }, function (imgE) {
            $(imgE).attr({
                'data-fancybox': 'images'
            });
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.win4000.com-------------------------------------- */
    if (site.Win4000.iStatus) {
        injectBtns().domain(site.Win4000.hostnames).removeAD(function () {
            setInterval(function () {
                $('iframe').remove();
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('div.pic-meinv').hide();
        }, function () {
            $('div.pic-meinv').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            let match = currentPathname.match(/\/(\w+?\d+)(?:_\d+)?/m);
            if (match !== null) {
                {
                    let totalPageCnt = 1;
                    let partPreUrl = match[1];
                    let pageId = '';
                    let suffixUrl = '.html';
                    let limitPageStr = $('div.ptitle').text();
                    let limitPageMatch = limitPageStr.match(/（\d+\/(\d+)）/m);
                    if (limitPageMatch != null) {
                        totalPageCnt = parseInt(limitPageMatch[1]);
                        log('totalPageCnt', totalPageCnt);
                    }
                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                        log('push pageUrl:\n', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                }
                $('div.ptitle').after(injectComponent);
            }
        }).collectPics(function (doc) {
            return $(doc).find('div.pic-meinv a  img');
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
            let src = $(imgE).attr('url');
            if (src) {
                $(imgE).attr('src', src);
            }
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.192tp.com---------------------------------------- */
    if (site._192tp.iStatus) {
        injectBtns().domain(site._192tp.hostnames).removeAD(function () {
            setInterval(function () {
                $('iframe').remove();
                $('div[class^=ad]').remove();
                $(".national-content").remove();
                $("[title~=近期网站一些调整说明]").remove();
                $(".Rfloat").remove();
                $(".bgtu-info+p").remove(); //remove选择所有紧跟在 <div> 元素之后的第一个 <p> 元素
                $("div.infoline span:first-of-type").remove();
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('#p').hide();
            $("#back-to-top").hide();
            //android
            $('.piclist').hide();
            $('.btnline').hide();
            $(".zt_bigpic p").hide();

        }, function () {
            $('#p').show();
            $("#back-to-top").show();
            //android
            $('.piclist').show();
            $('.btnline').show();
            $(".zt_bigpic p").show();

        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: " + currentPathname);
            let match = currentPathname.match(/\/(\w+(?:\/\w+)?\/\w+?)(?:_\d+)?\.html/m); //https://www.192tt.com/gq/ugirls/ugu349_2.html,https://www.192tt.com/meitu/81896.html
            if (match !== null) {
                {
                    let totalPageCnt = 1;
                    let partPreUrl = match[1];
                    let pageId = '';
                    let suffixUrl = '.html';
                    let limitPageStr = $('h1').text();
                    let limitPageMatch = limitPageStr.match(/\(\d+\/(\d+)\)/m);
                    log("limitPageStr: " + limitPageStr);
                    log("limitPageMatch: " + limitPageMatch);
                    if (limitPageMatch != null) {
                        totalPageCnt = parseInt(limitPageMatch[1]);
                        // debugger
                        log('totalPageCnt: ', totalPageCnt);
                    }
                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl = '';
                        if (i == 1) {
                            pageUrl = partPreUrl + pageId + suffixUrl;
                        } else {
                            pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                        }
                        log('push pageUrl: ', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                }
                if (os.isAndroid) {

                    $('div.infoline').after(injectComponent);
                } else {
                    $('div.pictopline').after(injectComponent);
                }
            }
        }).collectPics(function (doc) {
            debugger
            if (os.isAndroid) {
                //去除最后两个空白广告图片
                $(doc).find('.piclist li:last-child').remove();
                $(doc).find('.piclist li:last-child').remove();
                // log("img: \n",$(doc).find('.piclist li img'));
                return $(doc).find('.piclist li img');
            } else {
                return $(doc).find('#p > center img');
            }

        }, function (imgE) {
            imgE.style = "width: 100%;";
            let src = $(imgE).attr('lazysrc');
            if (src) {
                $(imgE).removeAttr('lazysrc');
                $(imgE).attr('src', src);
            }
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.xiuren.org--------------------------------------- */
    if (site.Xiuren.iStatus) {
        injectBtns().domain('www.xiuren.org').removeAD(function () {
            setInterval(function () {
                $('iframe').remove();
                $("div[id^=an]").remove();
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('div.post').hide();
        }, function () {
            $('div.post').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            let match = currentPathname.match(/^\/([\w-]+\.html)\b/im);
            if (match !== null) {
                {
                    pageUrls.push(window.location.pathname.substr(1));
                }
                $('#title').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let clone = $(doc).find('div.post span > a').clone();
            return $(clone).find('img');
        }, function (imgE) {
            let src = $(imgE).parent().attr('href');
            $(imgE).attr('src', src);
            $(imgE).attr({
                'data-fancybox': 'images'
            });
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.micmicidol.com----------------------------------- */
    if (site.Micmicidol.iStatus) {
        injectBtns().domain(site.Micmicidol.hostnames).removeAD(function () {
            // $('div#total-wrapper').siblings().remove();
            $("link").each(function () {
                let href = $(this).attr('href');
                let isHrefMatch = /micmicidol/g.exec(href);
                if (isHrefMatch === null) {
                    $(this).remove();
                }
            });
            $("script").each(function () {
                let href = $(this).attr('src');
                let isHrefMatch = /micmicidol/g.exec(href);
                if (isHrefMatch === null) {
                    $(this).remove();
                }
            });
        }).switchAggregationBtn(function () {

            activateFancyBox();
            // imagePluginSwitch[0].isFancyBoxFullScreen = true;
            // if (os.isAndroid || os.isPhone) {
            //     imagePluginSwitch[0].isFancyBoxFullScreen = false;
            // }

            $('div.post-body').hide();
        }, function () {
            $('div.post-body').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: ", currentPathname);
            let ismainPage = /\/(\d+)\//g.exec(currentPathname);
            log("ismainPage: \n", ismainPage);
            if (ismainPage === null) {

            } else if (currentPathname !== null) {
                {
                    pageUrls.push(currentPathname);
                }
                $('.post-header').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let aImages = $(doc).find('div.post-body > a[href]').clone();
            return $(aImages);
        }, function (imgE) {
            let src = $(imgE).attr('href');
            $(imgE).attr({
                'data-fancybox': 'images'
            });
            debugger
            log("src: \n", src);
            $(imgE).find('img').attr('src', src);
            $(imgE).find('img').attr('label', 'sl');

            // log("imgE: \n", imgE);
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------everia.club------------------------------------------ */
    if (site.Everia.iStatus) {
        injectBtns().domain(site.Everia.hostnames).removeAD(async function () {
            // $("body").removeClass();
            // $('div[id^=custom_html]').remove();
            // // $('html script').remove();
            // // $(".wrapper").siblings().remove();
            // // $(".wrapper").siblings().css({
            // //     "position": "unset"
            // // });
            // // setInterval(function () {
            // // $("#jquery-migrate-js").remove();
            // // $('.padPreload').remove();
            // // $('#popmagicldr').remove();
            // $("meta").remove();
            // $("noscript").remove();
            // $("link").each(function () {
            //     // log("link: \n", $(this).prop("outerHTML"));
            //     let href = $(this).attr('href');
            //     // log("href: \n",href);
            //     let isHrefMatch = /everia/g.exec(href);
            //     // log("isHrefMatch: \n", isHrefMatch);
            //     if (isHrefMatch === null) {
            //         // log("isHrefMatch: \n",isHrefMatch);
            //         $(this).remove();
            //     }
            // });
            // $("script").each(function () {
            //     let href = $(this).attr('src');
            //     let isHrefMatch = /everia/g.exec(href);
            //     if (isHrefMatch === null) {
            //         $(this).remove();
            //     }
            // });
            // $("script[type^='application/javascript']").remove();
            // $("script[id^='neve-script']").remove();
            // $("script[id^='fifu-image']").remove();
            // }, 100);
            debugger
            $("head").empty();
            await addScript_(null, "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/everiacss.js")
            addStyle(everiacss);
        }).switchAggregationBtn(function () {
            //FancyBox
            activateFancyBox(1);
            $('figure.has-nested-images').hide();
            $('.separator').hide();
            $('.entry-content p').css('margin-bottom', 'unset');
        }, function () {
            $('figure.has-nested-images').show();
            $('.separator').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            let ismainPage = /\/(\d+)\//g.exec(currentPathname);
            log("ismainPage: \n", ismainPage);
            if (ismainPage === null) {
                log("ismainPage null!!!!");
            } else if (currentPathname !== null) {
                {
                    pageUrls.push(currentPathname);
                }
                $('figure.has-nested-images').prev().after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images = $(doc).find('.entry-content img').clone();
            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.jpxgyw.net & www.jpmn8.com----------------------- */
    if (site.Jpxgyw.iStatus || site.Jpmn8.iStatus) {
        injectBtns().domain(site.Jpxgyw.hostnames.concat(site.Jpmn8.hostnames)).removeAD(function () {
            $("script").remove();
            $(".header").prevAll().remove();
            $(".footer").nextAll().remove();
            setInterval(function () {
                $("style[id]").remove();
                $(".content > a").remove();
                $("center > a").remove();
                // $("body>a").remove();
                // $(".fancybox__container").nextAll().remove();
                // $(".footer").nextUntil(".fancybox__container").remove();
                // $(".container").nextUntil(".footer").remove();
            }, 100);
        }).switchAggregationBtn(function () {

            //FancyBox
            activateFancyBox();

            $('.pagination').hide();
            $('.article-content').hide();
            //android
            $('.pagination1').last().prev().hide();
            $('.pagination1').hide();
        }, function () {
            $('.pagination').show();
            //android
            $('.pagination1').last().prev().show();
            $('.pagination1').show();
            $('.article-content').show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            debugger
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/([a-zA-Z]+(\/[a-zA-Z]+)?)(?:\/)?(\d+)/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            if (match !== null) {

                let totalPageCnt = 1;
                let partPreUrl = match[0];
                let suffixUrl = '_';
                debugger
                let limitPageStr = $('.pagination > ul a').last().prev().text();
                if (limitPageStr === "") {
                    limitPageStr = $('.pagination1 > ul a').last().prev().text();
                }
                log("limitPageStr: \n", limitPageStr);
                if (limitPageStr != '') {
                    totalPageCnt = parseInt(limitPageStr);
                    log('totalPageCnt: \n', totalPageCnt);
                }
                for (let i = 0; i <= totalPageCnt; i++) {
                    let pageUrl;
                    if (i === 0) {
                        pageUrl = partPreUrl + '.html';
                    } else {
                        pageUrl = partPreUrl + suffixUrl + i + '.html';
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                $('.article-header').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images;
            if (site.Jpxgyw.iStatus) {
                images = $(doc).find('.article-content > p img');
            } else {
                images = $(doc).find('p img');
            }
            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.95mm.org----------------------------------------- */
    if (site._95mm.iStatus) {
        injectBtns().domain(site._95mm.hostnames).removeAD(function () {
            setInterval(function () {
                $("#post-action").remove();
            }, 100);
        }).switchAggregationBtn(function () {
            // FancyBox
            activateFancyBox();

            $('.text-xs b').hide();
            $(".post-data").hide();
            $(".post").hide();
        }, function () {
            $('.text-xs b').show();
            $(".post-data").show();
            $(".post").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/(\d+)/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            if (currentPathname !== null) {

                let totalPageCnt = 1;
                let pageId = match[0];
                let suffixUrl = '/';
                debugger
                let limitPageStr = $('.row h1').text().match(/（\d+\/(\d+)）/im);

                log("limitPageStr: \n", limitPageStr);
                totalPageCnt = limitPageStr[1];
                for (let i = 1; i <= totalPageCnt; i++) {
                    let pageUrl;
                    if (i === 1) {
                        pageUrl = pageId + '.html';
                    } else {
                        pageUrl = pageId + suffixUrl + i + '.html';
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }

                $('.post-meta').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images = $(doc).find('.nc-light-gallery img').clone();
            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.3gbizhi.com-------------------------------------- */
    if (site._3gbizhi.iStatus) {
        injectBtns().domain(site._3gbizhi.hostnames).removeAD(function () {
            setInterval(function () {
                $(".loader").next().remove();
                $(".logo-container").parent().remove();
                $(".cl script").parent().remove();
            }, 100);
        }).switchAggregationBtn(function () {

            // FancyBox
            activateFancyBox();

            $(".showcontw").hide();
        }, function () {
            $(".showcontw").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/(\w+)\/((?!\.html).)*/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            if (currentPathname !== null) {

                let totalPageCnt = 1;
                let suffixUrl = '_';
                let partPreUrl;
                let pageId = null;
                debugger
                let limitPageStr = $('.showtitle h2').text().match(/(\d+\/(\d+))/im);
                log("limitPageStr: \n", limitPageStr);
                if (os.isAndroid) {

                } else {
                    partPreUrl = match[0];
                    totalPageCnt = limitPageStr[2];
                    pageId = match[2];
                }

                for (let i = 1; i <= totalPageCnt; i++) {
                    let pageUrl;
                    if (i === 1) {
                        pageUrl = partPreUrl + '.html';
                    } else {
                        pageUrl = partPreUrl + suffixUrl + i + '.html';
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }

                $('.showtitle').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images = $(doc).find('#showimg>a[title] img').clone();

            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------tw.kissgoddess.com----------------------------------- */
    if (site.Goddess.iStatus) {
        injectBtns().domain(site.Goddess.hostnames).removeAD(function () {
            $("div.td-header-wrap").css({
                "position": "unset",
                "z-index": "unset"
            });
            $("div.td-header-wrap div").css({
                "position": "unset",
                "z-index": "unset"
            });
        }).switchAggregationBtn(function () {
            // FancyBox
            activateFancyBox();

            $("#pages").hide();
            $(".td-gallery-content").hide();
        }, function () {
            $("#pages").show();
            $(".td-gallery-content").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/(\w+)\/(\d+)/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            if (match !== null) {
                let totalPageCnt = 1;
                let suffixUrl = '_';
                let partPreUrl = '';
                debugger
                let limitPageStr = $('#pages > span[class]').prop("outerHTML").match(/\d+(?=\<\/span\>)/g);
                log("limitPageStr: \n", limitPageStr);
                partPreUrl = match[0];
                totalPageCnt = parseInt(limitPageStr);
                for (let i = 1; i <= totalPageCnt; i++) {
                    let pageUrl;
                    if (i === 1) {
                        pageUrl = partPreUrl + '.html';
                    } else {
                        pageUrl = partPreUrl + suffixUrl + i + '.html';
                    }
                    log('push pageUrl: \n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                $('.td-post-header').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images = $(doc).find('.td-gallery-content > img');
            $(images).each(function () {
                let src = $(this).attr('data-original');
                if (src) {
                    $(this).removeAttr('data-original');
                    $(this).attr('src', src);
                }
            });

            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------meinv.page------------------------------------------- */
    if (site.Meinv.iStatus) {
        injectBtns().domain(site.Meinv.hostnames).removeAD(function () {
            $("div[id^=art_],.mobile-bar,[class^=go-to-top],.favorite").css({
                "z-index": "999"
            });
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('.entry-content figure').hide();
            $("#comments").hide();
            $(".widget_text").hide();
        }, function () {
            $('.entry-content figure').show();
            $("#comments").show();
            $(".widget_text").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            log("currentPathname: \n", currentPathname);
            if (currentPathname !== null) {
                pageUrls.push(currentPathname);
                $('.entry-content figure').first().prev().after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images = $(doc).find('.entry-content figure a');
            return $(images);
        }, function (imgE) {
            let src = $(imgE).attr('href');
            if (src) {
                // $.fn.removeAllAttrs= function() {
                //     return this.each(function() {
                //        $.each(this.attributes, function() {
                //          this.ownerElement.removeAttributeNode(this);
                //        });
                //     });
                //   };
                // $(imgE).find("img").removeAllAttrs();
                $(imgE).find("img").removeAttr('src');
                $(imgE).find("img").attr('src', src);
                $(imgE).find("img").attr('label', 'sl');
            }
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------asiansister.com-------------------------------------- */
    if (site.Asiansister.iStatus) {
        injectBtns().domain(site.Asiansister.hostnames).removeAD(function () {
            setInterval(function () {
                $("div[class^=AD]").remove();
            }, 100);
        }).switchAggregationBtn(function () {
            //FancyBox
            activateFancyBox();

            $(".rootContant[style]").first().hide();
            $(".rootContant[style]").first().next().next().hide();
            $(".rootContant[style]").first().next().next().next().hide();
        }, function () {
            $(".rootContant[style]").first().show();
            $(".rootContant[style]").first().next().next().show();
            $(".rootContant[style]").first().next().next().next().show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/(?<=\/).*/g);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            let pageUrl;
            if (match !== null) {
                debugger
                pageUrl = match[0];
                pageUrls.push(pageUrl);
                $('.rootContant[style]').slice(0, 1).after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images = $(doc).find('.rootContant > img');
            log("images \n", $(images));
            $(images).each(function (index) {
                log("start this Object: \n", $(this));
                log("this images outerHTML \n", $(this).prop("outerHTML"));
                let src = $(this).attr('dataurl').match(/(?<=image).*/g);
                if (src) {
                    $(this).removeAttr('onclick');
                    $(this).attr('src', src);
                }
            });
            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------yskhd.com-------------------------------------------- */
    if (site.Yskhd.iStatus) {
        injectBtns().domain(site.Yskhd.hostnames).removeAD(function () {
            setInterval(function () {
                $(".banner-slider").remove();
                $(".nav-vip").remove();
                $(".widget_media_image").remove();
                $(".header").css("position", "unset");
            }, 100);
        }).switchAggregationBtn(function () {
            //FancyBox
            activateFancyBox(1);
            $("div[class^=article]").slice(1, ).hide();
            // $("div.article-content > p").next().nextAll().hide();
            $(".single-comment").hide();
        }, function () {
            $("div[class^=article]").slice(1, ).show();
            // $("div.article-content > p").next().nextAll().show();
            $(".single-comment").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            //https://youpai.netzijin.cn/2022/03/20220329141134503-scaled.jpg
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/(?<=\/).*/g);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            let pageUrl;
            if (match !== null) {
                pageUrl = match[0];
                pageUrls.push(pageUrl);
                $('.article-header').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let re = /-scaled/g;
            let images;
            let Ishref = $(doc).find('.gallery-fancy-item > a').attr("href");
            let isScaled = re.test(Ishref);
            if (isScaled) {
                images = $(doc).find('div.gallery img').attr("dataurl", "true");
            } else {
                images = $(doc).find('div.gallery img').attr("dataurl", '');
            }
            let imgObj = $(images);
            let a_imgTag = []
            $(imgObj).each(function (index) {
                // log("Start this: \n", $(this).prop("outerHTML"));
                let src;
                let isScaled = $(this).attr("dataurl");
                if (isScaled === "true") {
                    src = $(this).attr('src').replace(/-\d+x\d+/g, '-scaled');
                } else {
                    src = $(this).attr('src').replace(/-\d+x\d+/g, '');
                }
                $(this).attr('label', 'sl');
                debugger
                $(this).attr('src', src);
                let imageItem = $(this).prop("outerHTML").toString();
                // log("New this: \n", imageItem);
                let construct_aTag = $(`<a data-fancybox="images" href="${src}"></a>`);
                construct_aTag.append(imageItem);
                // log("New construct_Tag: \n", construct_aTag);
                a_imgTag.push(construct_aTag);
            });
            // log("New a_imgTag\n",$(a_imgTag));
            return $(a_imgTag);
        }, function (aImgE) {
            $(aImgE).find("img")[0].style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.dmmtu.com---------------------------------------- */
    if (site.Dmmtu.iStatus) {
        injectBtns().domain(site.Dmmtu.hostnames).removeAD(function () {
            setInterval(function () {
                $(".main-footer").remove();
                $(".single>span").remove();
                $("html script").remove();
            }, 100);
            $(".bd").first().css({
                "width": "100%",
                "height": "100%"
            });
        }).switchAggregationBtn(function () {

            //FancyBox
            activateFancyBox();

            $(".main-body").hide();
            $(".link_pages").hide();
        }, function () {
            $(".main-body").show();
            $(".link_pages").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
            let match = currentPathname.match(/(\w+)\/(\d+)/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            if (match !== null) {
                let totalPageCnt = 1;
                let suffixUrl = '_';
                let partPreUrl = '';
                debugger
                let limitPageStr = $('.page-numbers > b').prop("outerHTML");
                let limitPageTotal = limitPageStr.match(/(?<=共)(\d+)/g);
                log("limitPageStr: \n", limitPageStr);
                partPreUrl = match[0];
                totalPageCnt = parseInt(limitPageTotal);
                for (let i = 1; i <= totalPageCnt; i++) {
                    let pageUrl;
                    if (i === 1) {
                        pageUrl = partPreUrl + '.html';
                    } else {
                        pageUrl = partPreUrl + suffixUrl + i + '.html';
                    }
                    log('push pageUrl: \n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                $('.main-header').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images;
            images = $(doc).find('.main-body img');

            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.fnvshen.com && xsnvshen.co----------------------- */
    if (site.Fnvshen.iStatus) {
        injectBtns().domain(site.Fnvshen.hostnames).removeAD(function () {
            // debugger
            setInterval(function () {
                $(".yalayi_box").remove();
                $(".yituyu_box").remove();
                $(".collect-unit").first().remove();
                $(".pic_index_headc").css("position", "sticky")
            }, 100);
        }).switchAggregationBtn(function () {
            //FancyBox
            activateFancyBox();
            $("#hgallery img[mark!='true']").hide();
            $("#pages").hide();
            $(".workContentWrapper>div").slice(1).hide();
            //android
            $(".ck-box-unit").hide();
            $("#idiv").hide();
            $("#arcbox>p").slice(1).hide();
            $(".bigpages").hide();
        }, function () {
            $("#hgallery img[mark!='true']").show();
            $("#pages").show();
            $(".workContentWrapper>div").slice(1).show();
            //android
            $(".ck-box-unit").show();
            $("#idiv").show();
            $("#arcbox>p").slice(1).show();
            $(".bigpages").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {

            let currentHref = window.location.href;
            let currentPathname = window.location.pathname;
            log("currentHref: \n", currentHref);
            let skipGeekGoddess = /xsnvshen/g.exec(currentHref);
            log("skipGeekGoddess: \n", skipGeekGoddess);
            if (isEmpty(skipGeekGoddess)) {
                log("\n-----inject GeekGoddess-----\n");
                let match = currentPathname.match(/(\w+)\/(\d+)/im);
                log("match: \n", match);
                let isGirl = /girl|article/g.exec(currentPathname);
                log("girl: ", isGirl);
                if (!isEmpty(isGirl)) {
                    match = null;
                } else {
                    debugger
                    let isMobileDomain = false;
                    let mobileDomain = /(?<=https?\:\/\/)(m\.)/.exec(window.location);
                    if (mobileDomain != null) {
                        isMobileDomain = true;
                    }
                    let limitPageTotal;
                    let limitPageStr;
                    if (match !== null) {
                        let suffixUrl = '/';
                        let partPreUrl = '';
                        debugger
                        if (os.isAndroid || isMobileDomain) {
                            limitPageStr = $('span.page').prop("outerHTML");
                            log("limitpag: ", limitPageStr);
                            limitPageTotal = limitPageStr.match(/\d+(?=\<\/span\>)/g);
                        } else {
                            limitPageStr = $('#pages').prop("outerHTML");
                            limitPageTotal = limitPageStr.match(/\d+(?=\<\/a\>)/g);
                        }

                        log("limitPageStr: \n", limitPageStr);
                        let maxpage = Math.max.apply(null, limitPageTotal);
                        // let maxpage = limitPageTotal.length;
                        log("limitPageMatch: ", limitPageTotal);
                        log("maxpage: ", maxpage);
                        partPreUrl = match[0];
                        for (let i = 1; i <= maxpage; i++) {
                            let pageUrl;
                            if (i === 1) {
                                pageUrl = partPreUrl + '.html';
                            } else {
                                pageUrl = partPreUrl + suffixUrl + i + '.html';
                            }
                            log('push pageUrl:\n', pageUrl);
                            pageUrls.push(pageUrl);
                        }
                        if (os.isAndroid || isMobileDomain) {
                            $('.content .ck-footer').prev().after(injectComponent);
                        } else {
                            $('#hgallery').prepend(injectComponent);
                        }

                    }
                }
            } else {
                log("\n-----inject xsnvshen-----\n");
                let pageUrl = currentPathname;
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
                let Skip = /hd/g.exec(currentPathname);
                // log("Skip: " + Skip);
                if (isEmpty(Skip)) {
                    if (os.isPc) {
                        $('.workContentWrapper').prepend(injectComponent);
                    } else {
                        $(".poster-nav").after(injectComponent);
                    }
                }
            }
        }).collectPics(function (doc) {

            let currentHref = window.location.href;
            log("currentHref: \n", currentHref);
            let skipGeekGoddess = /xsnvshen/g.exec(currentHref);
            log("skipGeekGoddess: \n", skipGeekGoddess);
            if (isEmpty(skipGeekGoddess)) {
                log("\n-----collectPics GeekGoddess-----\n");
                let mobileDomain = /(?<=https?\:\/\/)(m\.)/g.exec(window.location);
                let images;
                if (os.isAndroid || mobileDomain) {
                    images = $(doc).find('.ck-img-info img');
                } else {
                    images = $(doc).find('#hgallery img');
                }
                $(images).attr("mark", "ture");
                let a_imgTag = aImgTagPackaging(images);
                log("New a_imgTag Object: \n", $(a_imgTag));
                return $(a_imgTag);
            } else {
                debugger
                log("\n-----collectPics xsnvshen-----\n");
                let imgE = [];
                let currentImgSrc;
                let limitPageStr;
                let limitPageMatch;
                // num传入的数字，n需要的字符长度 PrefixInteger(11, 5) //"00011"
                let PrefixInteger = function (num, n) {
                    return (Array(n).join(0) + num).slice(-n);
                }
                if (os.isPc) {
                    currentImgSrc = $("img#bigImg").attr("src").replace("//", "/");
                    limitPageStr = $('.swpt-time').prop("outerHTML");
                    limitPageMatch = limitPageStr.match(/共(.*?)<\/span>/g).toString().match(/\d*/g);
                } else {
                    //android
                    currentImgSrc = $("#arcbox img").first().attr("src").replace("//", "/");
                    limitPageStr = $('div em span').first().prop("outerHTML");
                    limitPageMatch = limitPageStr.match(/\d+(?=<\/span>)/g);
                }
                log("currentImgSrc: " + currentImgSrc);
                log("limitPageStr: " + limitPageStr);
                log("limitPageMatch: " + limitPageMatch);

                let partPreUrls = currentImgSrc.match(/(?<=\/).*\//g);
                log("partPreUrl: " + partPreUrls);

                if (!isEmpty(partPreUrls)) {
                    let protocol = window.location.protocol;
                    let totalPageCnt = Math.max.apply(null, limitPageMatch);
                    log("totalPageCnt: " + totalPageCnt);
                    let suffixUrl = '.jpg';
                    for (let i = 0; i < totalPageCnt; i++) {
                        let pageUrl = partPreUrls + PrefixInteger(i, 3) + suffixUrl;
                        let startUrl = protocol + '//' + pageUrl;
                        let img = `<img style="width: 100%; height: 100%;" src=${startUrl}>`
                        log('push pageUrl: ', startUrl);
                        imgE.push($(img));
                    }
                }
                let a_imgTag = aImgTagPackaging($(imgE));
                log("New a_imgTag Object: \n", $(a_imgTag));
                return $(a_imgTag);
            }
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.ikanins.com-------------------------------------- */
    if (site.Ikanins.iStatus) {
        injectBtns().domain(site.Ikanins.hostnames).removeAD(function () {
            debugger
            setInterval(function () {
                $(".widget_custom_html").remove();

            }, 100);
        }).switchAggregationBtn(function () {
            //FancyBox
            activateFancyBox();

            let len = $("div[id^=attachment]").length;
            if (len > 0) {
                $("div[id^=attachment]").css({
                    "width": "100%",
                    "height": "100%"
                });
                $("div[id^=attachment]").next().nextAll().hide();
            } else {
                $(".entry-content p").nextAll().hide();
            }
            $(".entry-footer").hide();
        }, function () {}).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; //
            let match = currentPathname.match(/\w+.*/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            debugger
            if (match !== null) {
                let partPreUrl = '';
                debugger
                partPreUrl = match[0];
                log('push pageUrl:\n', partPreUrl);
                pageUrls.push(partPreUrl);
                if ($("div[id^=attachment]").length > 0) {
                    $('div[id^=attachment]').after(injectComponent);
                } else {
                    $('.entry-content .entry').prepend(injectComponent);
                }
            }
        }).collectPics(function (doc) {
            let images;
            images = $(doc).find('.entry-content p img');

            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------madoupan.com----------------------------------------- */
    if (site.Madoupan.iStatus) {
        injectBtns().domain(site.Madoupan.hostnames).removeAD(function () {
            debugger
            setInterval(function () {
                $(".single-comment").remove();
                $(".header").css("position", "unset");
            }, 100);
        }).switchAggregationBtn(function () {

            //FancyBox
            activateFancyBox();

            $("div[class^=article]").nextAll().hide();
        }, function () {

            $("div[class^=article]").nextAll().show();
            $('div.article-content').hide();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname; //
            let match = currentPathname.match(/\w+.*/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            debugger
            if (match !== null) {
                let partPreUrl = '';
                debugger
                partPreUrl = match[0];
                log('push pageUrl:\n', partPreUrl);
                pageUrls.push(partPreUrl);
                $('.article-header').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let images;
            images = $(doc).find('div.article-content img');

            let a_imgTag = aImgTagPackaging(images);
            log("New a_imgTag Object: \n", $(a_imgTag));
            return $(a_imgTag);
        }, function (imgE) {
            imgE.style = "width: 100%;height: 100%";
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------mrcong.com------------------------------------------- */
    if (site.Mrcong.iStatus) {
        if (os.isAndroid || os.isPhone) {
            //https://sleazyfork.org/zh-CN/scripts/440114-mrcong%E5%85%A8%E9%87%8F%E5%8A%A0%E8%BC%89
        } else {
            injectBtns().domain(site.Mrcong.hostnames).removeAD(function () {
                $("body").removeClass();
                $("body").removeAttr("id");
                $("body").css({
                    "font-family": '-apple-system,BlinkMacSystemFont,Tahoma,Arial,"Hiragino Sans GB","Microsoft YaHei",serif'
                });
                $("meta").remove();
                $('iframe').remove();
                $("link").each(function () {
                    let href = $(this).attr('href');
                    let isHrefMatch = /mrcong/g.exec(href);
                    if (isHrefMatch === null) {
                        $(this).remove();
                    }
                });
                $("script").each(function () {
                    let href = $(this).attr('src');
                    let isHrefMatch = /mrcong/g.exec(href);
                    if (isHrefMatch === null) {
                        $(this).remove();
                    }
                });
                // $("div.wrapper-outer").siblings().remove();
                setInterval(function () {
                    $("link[href^='https://smallfunnybears']").remove();
                    $("script[src^='https://smallfunnybears.com']").remove();
                    $("script[src^='https://stats.wp.com']").remove();
                }, 100);
            }).switchAggregationBtn(function () {
                //FancyBox
                activateFancyBox();
                $(".page-link").hide();
                $(".page-link").last().prev().hide();
            }, function () {
                $(".page-link").show();
                $(".page-link").last().prev().show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                let match = currentPathname.match(/\w+.*?\//im);
                log("currentPathname: \n", currentPathname);
                log("match: \n", match);
                let misMatch = ["tag/", "category/", "sets/", "top/", "tim-kiem/"];
                debugger
                misMatch.forEach(function (value) {
                    if (match) {
                        let frontEndMatching = match[0];
                        if (value === frontEndMatching) {
                            match = null;
                        }
                    }
                });
                let limitPageTotal;
                let limitPageStr;
                if (match !== null) {
                    let totalPageCnt = 1;
                    let suffixUrl = '';
                    let partPreUrl = null;
                    let pageId = null;
                    debugger
                    limitPageStr = $('.page-link').prop("outerHTML");
                    limitPageTotal = limitPageStr.match(/\d+(?=\<\/a\>)/g);
                    log("limitPageStr: \n", limitPageStr);
                    totalPageCnt = Math.max.apply(null, limitPageTotal);
                    // let maxpage = limitPageTotal.length;
                    log("limitPageMatch: ", limitPageTotal);
                    log("maxpage: ", totalPageCnt);
                    partPreUrl = match[0];
                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl;
                        if (i === 1) {
                            pageUrl = partPreUrl;
                        } else {
                            pageUrl = partPreUrl + suffixUrl + i;
                        }
                        log('push pageUrl:\n', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                    $(".page-link").last().prev().prev().after(injectComponent);
                }
            }).collectPics(function (doc) {
                let images;
                images = $(doc).find('.entry img');

                let a_imgTag = aImgTagPackaging(images);
                log("New a_imgTag Object: \n", $(a_imgTag));
                return $(a_imgTag);
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsTrue
        }
    }
    /* --------------------------------------------www.xrmn5.cc & www.xiurenb.net ---------------------- */
    if (site.XiurenJi.iStatus || site.Xrmn.iStatus) {
        if (os.isAndroid || os.isPhone) {
            log("Andriod");
            //https://sleazyfork.org/zh-CN/scripts/440115-xiurenji%E7%A7%80%E4%BA%BA%E9%9B%86%E5%85%A8%E9%87%8F%E5%8A%A0%E8%BC%89
        } else {
            injectBtns().domain(site.XiurenJi.hostnames.concat(site.Xrmn.hostnames)).removeAD(function () {
                setInterval(function () {
                    $("div[class^='ad']").remove();
                }, 100);
            }).switchAggregationBtn(function () {
                //FancyBox
                activateFancyBox();
                $(".content").hide();
            }, function () {
                $(".content").show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                let match
                if (site.XiurenJi.iStatus) {
                    match = currentPathname.match(/(\w+)\/(\d+)/im);
                } else {
                    match = currentPathname.match(/([A-Za-z]+).([0-9]+).([0-9]+(_[0-9]*)?)/im);
                }

                log("currentPathname: \n", currentPathname);
                log("match: \n", match);
                let limitPageTotal;
                let limitPageStr;
                if (match !== null) {
                    let totalPageCnt = 1;
                    let suffixUrl = '_';
                    let partPreUrl = null;
                    let pageId = null;
                    // debugger
                    limitPageStr = $('.page').prop("outerHTML");
                    limitPageTotal = limitPageStr.match(/\d+(?=\<\/a\>)/g);
                    log("limitPageStr: \n", limitPageStr);
                    totalPageCnt = Math.max.apply(null, limitPageTotal);
                    // let maxpage = limitPageTotal.length;
                    log("limitPageMatch: ", limitPageTotal);
                    log("maxpage: ", totalPageCnt);
                    partPreUrl = match[0];
                    for (let i = 0; i <= totalPageCnt; i++) {
                        let pageUrl;
                        if (i === 0) {
                            pageUrl = partPreUrl + '.html';
                        } else {
                            pageUrl = partPreUrl + suffixUrl + i + '.html';
                        }
                        log('push pageUrl:\n', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                    $('.item_title').last().after(injectComponent);
                }
            }).collectPics(function (doc) {
                let images;
                images = $(doc).find('.content img');
                // debugger
                log("images: \n", images);

                let a_imgTag = aImgTagPackaging(images);
                log("New a_imgTag Object: \n", $(a_imgTag));
                return $(a_imgTag);
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsTrue
        }
    }
    /* --------------------------------------------www.112w.cc------------------------------------------ */
    if (site._24fa.iStatus) {
        if (os.isAndroid || os.isPhone) {
            log("Andriod");
            //https://sleazyfork.org/zh-CN/scripts/441994-24fa%E5%85%A8%E9%87%8F%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BC%89
        } else {
            injectBtns().domain(site._24fa.hostnames).removeAD(function () {
                setInterval(function () {
                    $("div[class^='ad']").remove();
                }, 100);
            }).switchAggregationBtn(function () {
                //FancyBox
                activateFancyBox();
                $("div#content>div[style^=text]").hide();
                $("#content>div").last().hide();
                $("table[align]").hide();
            }, function () {
                $("div#content>div[style^=text]").show();
                $("#content>div").last().show();
                $("table[align]").show();
            }).injectAggregationRef(function (injectComponent, pageUrls) {
                let currentPathname = window.location.pathname;
                let match;
                match = currentPathname.match(/([A-Za-z]+).([0-9]+).([0-9]+(_[0-9]*)?)/im);
                log("currentPathname: \n", currentPathname);
                log("match: \n", match);
                let limitPageTotal;
                let limitPageStr;
                if (match !== null) {
                    let totalPageCnt = 1;
                    let suffixUrl = 'p';
                    let partPreUrl = null;
                    let pageId = null;
                    // debugger
                    limitPageStr = $('table[align]').prop("outerHTML");
                    limitPageTotal = limitPageStr.match(/\d+(?=\<\/a\>)/g);
                    log("limitPageStr: \n", limitPageStr);
                    totalPageCnt = Math.max.apply(null, limitPageTotal);
                    // let maxpage = limitPageTotal.length;
                    log("limitPageMatch: ", limitPageTotal);
                    log("maxpage: ", totalPageCnt);
                    partPreUrl = match[0];
                    for (let i = 1; i <= totalPageCnt; i++) {
                        let pageUrl;
                        if (i === 1) {
                            pageUrl = partPreUrl + '.aspx';
                        } else {
                            pageUrl = partPreUrl + suffixUrl + i + '.aspx';
                        }
                        log('push pageUrl:\n', pageUrl);
                        pageUrls.push(pageUrl);
                    }
                    $('#content').prepend(injectComponent);
                }
            }).collectPics(function (doc) {
                let images;
                images = $(doc).find('div#content img');
                debugger
                log("images: \n", images);

                let a_imgTag = aImgTagPackaging(images);
                log("New a_imgTag Object: \n", $(a_imgTag));
                return $(a_imgTag);
            }, function (imgE) {
                imgE.style = "width: 100%;height: 100%";
            }).start(); //urlIsTrue
        }
    }
    /* --------------------------------------------www.tuiimg.com--------------------------------------- */
    if (site.tuiimg.iStatus) {
        injectBtns().domain(site.tuiimg.hostnames).switchAggregationBtn(function () {
            activateFancyBox();
            $('.content').hide();
            $('.page').hide();
            $('.tips').hide();
            $('.send').hide();
            $('#downappM').hide();
            //android
        }, function () {
            $('.send').show();
            // $('.content').show();
            // $('.page').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: \n", currentPathname);
            let limitPageStr = $('span.all').prop("outerHTML");
            log("limitPageStr: " + limitPageStr)
            if (limitPageStr !== undefined) {
                let pageUrl = currentPathname;
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
                $('div.content').prev().after(injectComponent);
            }
        }).collectPics(function (doc) {
            debugger
            let imgE = []
            let currentImgSrc = $(".content img").attr("src").replace("//", "/")
            log("currentImgSrc: " + currentImgSrc);
            let hostName = currentImgSrc.match(/(?<=\/).*?(?=\/)/m)

            let partPreUrl = currentImgSrc.match(/(?<=\w\/).*(?=\/)/m);
            log("partPreUrl: " + partPreUrl)

            let limitPageStr = $('span.all').prop("outerHTML");
            log("limitPageStr: " + limitPageStr)
            if (limitPageStr != null) {

                let limitPageMatch = limitPageStr.match(/(?<=\/)\d+/m);
                log("limitPageMatch: " + limitPageMatch)
                let totalPageCnt = limitPageMatch[0];

                let pageId = '';
                let suffixUrl = '.jpg';

                let protocol = window.location.protocol;
                for (let i = 1; i <= totalPageCnt; i++) {
                    let pageUrl = '';
                    pageUrl = partPreUrl + pageId + '/' + i + suffixUrl;

                    let startUrl = protocol + '//' + hostName + '/' + pageUrl;
                    let img = `<img src=${startUrl}>`
                    log('push pageUrl: ', startUrl);
                    imgE.push($(img));
                }
            }

            return $(imgE);
        }, function (imgE) {
            imgE.style = "width: 100%;";

            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------nsfwp.buzz------------------------------------------- */
    if (site.nsfwp.iStatus) {
        injectBtns().domain(site.nsfwp.hostnames).removeAD(function () {
            let inputElement = $("input.acpwd-pass");
            let outerHTML = inputElement.prop("outerHTML");
            log("inputElement: " + outerHTML);
            if (outerHTML !== undefined) {
                let password = $(".acpwd-info-message").prop("outerHTML").match(/(?<=password:)\w+(?=\<)/m);
                log("password:" + password[0]);
                inputElement.val(`${password[0]}`);
                $("input.acpwd-submit").click();
            }
            $(":root").css({
                "--primary-color": "unset",
                "--accent-color": "unset"
            });
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('.wp-block-image').hide();
            $('.rebeccalite-post-author').hide();
            $('.wrapper').hide();
            //android
        }, function () {
            $('.wp-block-image').show();
            $('.rebeccalite-post-author').show();
            $('.wrapper').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: \n", currentPathname);
            let button_ = null;

            if (currentPathname !== undefined && currentPathname !== "\/collection" && currentPathname !== "\/") {

                button_ = $(".entry-content p a[href$=zip]").first();
                log("button_:\n", button_)
                if (button_.length === 0) {
                    button_ = $(".entry-content p a[href*=gofile]").first();
                }
                button_.css({
                    "color": "black",
                    "background": "pink",
                    "text-decoration": "none"
                }).text("原内容下载");

                let text = $(".entry-content p").last().text();
                text = text.match(/\d*:\d*/g);
                log("-----video--------\n", text)
                if (isEmpty(text)) {

                    let pageUrl = currentPathname;
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                    // if ($('.entry-content p').prop("outerHTML") !== undefined) {
                    //     $('.entry-content p').first().after(injectComponent);
                    // } else 

                    if ($('.wrapper').prop("outerHTML") !== undefined) {
                        $('.wrapper').prev().after(injectComponent);
                    } else {
                        $('.entry-header').after(injectComponent);
                    }
                    if (!isEmpty(button_)) {
                        $("#injectComponent").prev().after(button_);
                    }
                }

            }
        }).collectPics(function (doc) {
            let imgE;
            imgE = $(doc).find(".entry-content img");
            // log("ImgE: " +imgE)
            return imgE;
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------mmm131.com------------------------------------------- */
    if (site.mmm131.iStatus) {
        injectBtns().domain(site.mmm131.hostnames).removeAD(function () {
            console.time('global')
            new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve();
                }, 100);
            }).then(() => {
                console.timeEnd('global')
                $('#page').nextAll().hide();
            });
            setInterval(function () {
                $(".downBox").remove();
                $(".bannert_ios").remove();
                $("#content a[style]").remove();
                $("div[class^=banner]").remove();
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('#page').nextAll().hide();
            $('.content-tips').hide();
            $('.content-pic').hide();
            $('.content-page').hide();
            //android
            $(".tips").hide();
            $(".paging").hide();
            $(".post-content ").hide();
        }, function () {
            $('#page').nextAll().show();
            $('.content-tips').show();
            $('.content-pic').show();
            $('.content-page').show();
            //android
            $(".tips").show();
            $(".post-content ").show();
            $(".paging").show();
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            let match = null;
            match = currentPathname.match(/(\w+)\/(\d+)/im);
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            let limitPageTotal;
            let limitPageStr;
            if (match !== null) {
                let totalPageCnt = 1;
                let suffixUrl = '_';
                let partPreUrl = null;
                if (os.isPc) {
                    limitPageStr = $('.content-page')
                } else {
                    limitPageStr = $('.paging')
                }
                limitPageStr = limitPageStr.prop("outerHTML");
                limitPageTotal = limitPageStr.match(/\d+(?=页)/g);
                log("limitPageStr: \n", limitPageStr);
                totalPageCnt = limitPageTotal[0];
                log("limitPageMatch: ", limitPageTotal);
                log("totalPageCnt: ", totalPageCnt);
                partPreUrl = match[0];
                for (let i = 1; i <= totalPageCnt; i++) {
                    let pageUrl;
                    if (i === 1) {
                        pageUrl = partPreUrl + '.html';
                    } else {
                        pageUrl = partPreUrl + suffixUrl + i + '.html';
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                if (os.isPc) {
                    $('.content-msg').after(injectComponent);
                } else {
                    $('.tips').after(injectComponent);
                }
            }
        }).collectPics(function (doc) {
            let imgE;
            if (os.isPc) {
                imgE = $(doc).find(".content-pic img");
            } else {
                imgE = $(doc).find(".post-content img");
            }
            return imgE;
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------asiantolick.com-------------------------------------- */
    if (site.asiantolick.iStatus) {
        injectBtns().domain(site.asiantolick.hostnames).switchAggregationBtn(function () {
            activateFancyBox();
            $('div.spotlight-group').hide();
            //android
        }, function () {
            $('div.spotlight-group').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            let match = null;
            match = currentPathname.split("\/");
            log("currentPathname: \n", currentPathname);
            log("match: \n", match);
            if (match !== null) {
                let pageUrl = currentPathname;
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);

                $('#metadata_qrcode').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let imgE;
            imgE = $(doc).find("img.miniaturaImg");
            return imgE;
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.imn5.net-格式------------------------------------ */
    if (site.imn5.iStatus) {
        injectBtns().domain(site.imn5.hostnames).switchAggregationBtn(function () {
            activateFancyBox();
            $('div.imgwebp').hide();
            $('div.page').hide();
            //android
        }, function () {
            $('div.imgwebp').show();
            $('div.page').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: \n", currentPathname);
            let match = currentPathname.match(/\/(.+?\/)(\d+)(?:_\d+)?\.html/m);
            log("match: \n", match);
            if (match) {
                let totalPageCnt = 1;
                let partPreUrl = match[1];
                let pageId = match[2];
                let suffixUrl = '.html';
                let limitPageMatch = $('div.page').prop("outerHTML");
                log("limitPageMatch: " + limitPageMatch);
                let pageUrl;
                if (limitPageMatch != null) {
                    let totalPics = limitPageMatch.match(/\d+(?=<\/a>)/g);
                    totalPageCnt = Math.max.apply(null, totalPics);
                    log('totalPageCnt', totalPageCnt);
                }
                for (let i = 0; i < totalPageCnt; i++) {
                    if (i == 0) {
                        pageUrl = partPreUrl + pageId + suffixUrl;
                    } else {
                        pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                $('.jianjie').first().after(injectComponent);
            }
        }).collectPics(function (doc) {
            let imgE;
            imgE = $(doc).find(".imgwebp img");
            return imgE;
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------xchina.club------------------------------------------ */
    if (site.xchina.iStatus) {
        injectBtns().domain(site.xchina.hostnames).removeAD(function () {
            setInterval(function () {
                $("div.ad").remove();
                $("div.push-bottom").remove();
                $("div[class*=ad]").remove();
                $("div.push-top").remove();
                $("div.center").remove();
                $(".blocker ").remove();
                $("body").css("overflow", "unset");
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('div.photos').hide();
            $('div.pager').hide();
            //android
        }, function () {
            $('div.photos').show();
            $('div.pager').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentHref = window.location.href;
            let currentPathname = window.location.pathname;
            log("currentPathname: \n", currentPathname);
            let match = currentPathname.match(/\/(.+?\/)(.*)(?:\/\d+)?(?=\.)/m);
            log("match: \n", match);
            let skip0 = currentHref.match(/(?<=\/photos\/)model/g);
            let skip1 = currentHref.match(/photos?/g);
            log("skip: " + skip0);
            if (match && isEmpty(skip0) && !isEmpty(skip1)) {
                let totalPageCnt = 1;
                let partPreUrl = match[1];
                let pageId = match[2];
                let suffixUrl = '.html';
                let limitPageMatch = $('div.pager').prop("outerHTML");
                log("limitPageMatch: " + limitPageMatch);
                let pageUrl;
                if (limitPageMatch != null) {
                    let totalPics = limitPageMatch.match(/\d+(?=<\/a>)/g);
                    totalPageCnt = Math.max.apply(null, totalPics);
                    log('totalPageCnt', totalPageCnt);
                }
                for (let i = 1; i <= totalPageCnt; i++) {
                    if (i == 1) {
                        pageUrl = partPreUrl + pageId + suffixUrl;
                    } else {
                        pageUrl = partPreUrl + pageId + '/' + i + suffixUrl;
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                $('div.article').slice(1, 2).after(injectComponent);
            }

        }).collectPics(function (doc) {
            let imgE = [];
            let imgEDiv;
            imgEDiv = $(doc).find(".photos a > div");
            $(imgEDiv).each(function (index) {
                let src = $(this).attr("src");
                log("src: " + src);
                imgE.push($(`<img src=${src}>`));
            });
            return $(imgE);
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------jjgirls.com------------------------------------------ */
    if (site.jjgirls.iStatus) {
        injectBtns().domain(site.jjgirls.hostnames).removeAD(function () {
            let href = window.location.href;
            if (!/mobile/g.exec(href)) {
                setInterval(function () {
                    $("div[class^=a]").remove();
                    $("h2").remove();
                    $("h3").remove();
                    $("#footer").remove();
                    $('a[href*=sex]').remove();
                    $("a").css("color", "black");
                }, 100);
            } else {
                setInterval(function () {
                    $("#camb").remove();
                    $('a[href*=sex]').remove();
                    $("a").css("color", "black");
                }, 100);
            }
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('div[class^=p] a').hide();
            $('#player').hide();
            //android
        }, function () {
            $('div[class^=p] a').show();
            $('#player').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: \n", currentPathname);
            let matchSplitArr = currentPathname.split("\/");
            log("matchSplit: \n", matchSplitArr);

            let match = matchSplitArr.filter(function (s) {
                return s && s.trim();
            });
            // let match = trimSpace(matchSplitArr);
            if (!/[a-zA-Z_-]/g.exec(match.slice(-1))) {
                match.pop();
            }
            match = match.join("/");
            log("match: \n", match);
            if (currentPathname !== "\/" && currentPathname.match(/uncensored|japanese/g)) {


                let pageUrl = currentPathname;

                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
                if (os.isPc) {
                    $('div[class^=p]').first().parent().prepend(injectComponent);
                } else {
                    $('#nav').after(injectComponent);
                }
            }

        }).collectPics(function (doc) {
            let imgE = []
            let imgA = $(doc).find("div[class^=p] a");
            $(imgA).each(function () {
                let href = $(this).attr("href");
                // log("href: \n"+href)
                if (/\.jpg/g.exec(href)) {
                    log("href: \n" + href);
                    imgE.push($(`<img src=${href}></img>`));
                }
            });

            return $(imgE);
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------photos18.com----------------------------------------- */
    if (site.photos18.iStatus) {
        injectBtns().domain(site.photos18.hostnames).removeAD(function () {
            setInterval(function () {
                $(".fixed-bottom").remove();
                $(".main-footer").remove();
                $("body script").remove();
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('#app').hide();
            $('#content').hide();
            $('#links').hide();
            //android
        }, function () {
            $('#app').show();
            //$('#content').show();
            $('#links').show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname.match(/(?<=\/).*/g)[0];
            log("currentPathname: \n", currentPathname);
            if (currentPathname) {
                let pageUrl = currentPathname;
                // pageUrl = pageUrl.split("\/");
                // pageUrl = pageUrl.filter(function(s){
                //     return s && s.trim();
                // });
                // pageUrl = pageUrl.join("/");
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
                $('#app').first().after(injectComponent);
            }
        }).collectPics(function (doc) {
            let imgE;
            imgE = $(doc).find("#content img");
            log("imgE: \n" + imgE);
            return imgE;
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------pornpics.com----------------------------------------- */
    if (site.pornpics.iStatus) {
        injectBtns().domain(site.pornpics.hostnames).removeAD(function () {
            setInterval(function () {
                $("#cookie-contract").remove();
                $("div[class^=sponsor]").remove();
                $(".c-model").remove();
                $(".loading-modal").remove();
                $("li.r-frame").remove();
                $(".rel-link h2").parent().remove();
            }, 100);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('#main').hide();

            //android
        }, function () {
            // $('#main').show();

            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname.match(/(?<=\/).*/g)[0];
            log("currentPathname: \n", currentPathname);
            if (currentPathname && /galleries/g.exec(currentPathname)) {
                let pageUrl = currentPathname;
                // pageUrl = pageUrl.split("\/");
                // pageUrl = pageUrl.filter(function(s){
                //     return s && s.trim();
                // });
                // pageUrl = pageUrl.join("/");
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
                $('div.title-section').after(injectComponent);
            }
        }).collectPics(function (doc) {
            let imgE = [];
            let item = $(doc).find("a.rel-link");
            $(item).each(function () {
                let src = $(this).attr("href");
                imgE.push($(`<img src=${src}>`));
            });
            log("imgE: \n" + imgE);
            return $(imgE);
        }, function (imgE) {
            imgE.style = "width: 100%;";
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
    /* --------------------------------------------www.mfsft.com---------------------------------------- */
    if (site.mfsft.iStatus) {
        injectBtns().domain(site.mfsft.hostnames).removeAD(async function () {
            if (!(window.location.pathname.toString() === "/")) {
                let items = $(".h").nextUntil(".page");
                let interestline = items.find(".interestline");
                $(".h").append(interestline);
                $(".nav").first().prevAll().remove();
                $(".nav").first().nextUntil(".b").remove();
                $(".page").nextUntil(".b").remove();
                items.remove();
            };
            $("head").empty();
            setInterval(function () {
                $("img[src$=gif]").parent().remove();
                $("div[classname]").remove();
                $("#pic").remove();
                $("span").remove();
                $("[id^=divStayTop]").remove();
            }, 100);
            await addScript_(null, "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/mslasscss.js");
            addStyle(MSLASS_CSS);
        }).switchAggregationBtn(function () {
            activateFancyBox();
            $('#picg').prev().nextAll().hide();
            //android
        }, function () {
            $('#picg').prev().nextAll().show();
            //android
        }).injectAggregationRef(function (injectComponent, pageUrls) {
            let currentPathname = window.location.pathname;
            log("currentPathname: \n", currentPathname);
            let match = currentPathname.match(/\/(.+?\/)(\d+)(?:_\d+)?\.html/m);
            log("match: \n", match);
            if (match) {
                let totalPageCnt = 1;
                let partPreUrl = match[1];
                let pageId = match[2];
                let suffixUrl = '.html';
                let limitPageMatch = $('.pagelist b').prop("outerHTML");
                log("limitPageMatch: " + limitPageMatch);
                let pageUrl;
                if (limitPageMatch != null) {
                    let totalPics = limitPageMatch.match(/\d+(?=<\/a>)/g);
                    totalPageCnt = Math.max.apply(null, totalPics);
                    log('totalPageCnt', totalPageCnt);
                }
                for (let i = 1; i <= totalPageCnt; i++) {
                    if (i == 1) {
                        pageUrl = partPreUrl + pageId + suffixUrl;
                    } else {
                        pageUrl = partPreUrl + pageId + '_' + i + suffixUrl;
                    }
                    log('push pageUrl:\n', pageUrl);
                    pageUrls.push(pageUrl);
                }
                $('.page').prepend(injectComponent);
            }
        }).collectPics(function (doc) {
            let imgE = [];
            let item = $(doc).find(".page img");
            $(item).each(function () {
                let src = $(this).attr("src");
                imgE.push($(`<img src=${src}>`));
            });
            log("imgE: \n" + imgE);
            return $(imgE);
        }, function (imgE) {
            $(imgE).attr({
                'data-fancybox': 'images'
            });
        }).start(); //urlIsTrue
    }
})();


function switchVId(vId) {
    $('#player-unavailable').not('.hid').addClass('hid');
    let text = $('#unavailable-message').text();
    if (text && text.indexOf('内容警告') != -1) {
        log('内容警告::\n');
        $('#player-api').removeClass('off-screen-target').html('<iframe src="https://www.youtube.com/embed/' +
            vId +
            '" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>');
        return true;
    }
    return false;
}

//注入JS：jquery
function injectJs(e) {
    if (e.jQuery) {
        log('jquery available');
    } else {
        let ele = e.document.createElement('script');
        ele.src = "https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js";
        e.document.body.appendChild(ele);
        let id = e.setInterval(function () {
            if (e.jQuery) {
                e.clearInterval(id);
            }
        }, 100);
    }
}

//等待JQuery加载完毕
function dependenceJQuery(e, callback) {
    let id = e.setInterval(function () {
        if (e.jQuery) {
            e.clearInterval(id);
            callback;
        }
    }, 100);
}