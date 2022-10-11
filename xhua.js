// ==UserScript==
// @name         图聚合展示by xhua
// @name:zh-CN   图聚合展示by xhua
// @name:zh-TW   圖聚合展示by xhua
// @name:en      Image aggregation display by xhua
// @namespace    https://greasyfork.org/zh-CN/scripts/442098-%E5%9B%BE%E8%81%9A%E5%90%88%E5%B1%95%E7%A4%BAby-xhua
// @version      4.24
// @description  目标是聚合网页美女图
// @description:zh-TW 目標是聚合網頁美女圖
// @description:en  The goal is to aggregate web beauty images
// @author       selang,LARA_SSR
//
// @include      /https?\:\/\/(\w+\.)?hentai-(cosplays|img)\.com/
// @include      /https?\:\/\/(\w+\.)?porn-image\w+-xxx\.com/
// @include      /https?\:\/\/www\.umei(\w+)?\.\w+/
// @include      /https?\:\/\/www.wndfx\.com/
// @include      /https?\:\/\/w+\.(?:les|ls)m(\w+)?.\w*/
// @include      /https?\:\/\/\w+\.win4000\.com/
// @include      /https?\:\/\/(www|m)\.(192t\w+|taotu\d*)\.\w+/
// @include      /https?\:\/\/www\.xiuren\.org/
// @include      /https?\:\/\/\w+\.micmicidol\.com/
// @include      /https?\:\/\/everia\.club/
// @include      /https?\:\/\/www\.[a-z]*xg\w{0,4}\.(top|vip|net|com|cc)/
// @include      /https?\:\/\/\w+\.jpmn\w+\.\w+/
// @include      /https?\:\/\/\w+\.95mm\.\w+/
// @include      /https?\:\/\/\w+\.3gbizhi\.\w+\/\w/
// @include      /https?\:\/\/tw.\w*goddess\w+\.\w+\/(?!people\/)/
// @include      /https?\:\/\/(\w+\.)?meinv\.page/
// @include      /https?\:\/\/asiansister\.com/
// @include      /https?\:\/\/yskhd\.com/
// @include      /https?\:\/\/\w+\.dmmtu\.\w+/
// @include      /https?\:\/\/\w+\.\w+shen(\w+)?\.\w+/
// @include      /https?\:\/\/(www\.)?ikanins\.\w+/
// @include      /https?\:\/\/madoupan\.\w+/
// @include      /https?\:\/\/mrcong\.com/
// @include      /https?\:\/\/\w+\.(?:xiure)\w+\.\w+/
// @include      /https?\:\/\/\w+\.xrmn[0-9w]{0,}.[a-zA-Z]{0,}./
// @include      /https?\:\/\/(www\.)?[0-9]*(m|w|faw|fa)\.(cc|link)/
// @include      /https?\:\/\/www.117.life/
// @include      /https?\:\/\/(\w+\.)?tuiimg\.com/
// @include      /https?\:\/\/(old\.)?(nsfw[a-z]*|picx[a-z]*).\w+/
// @include      /https?\:\/\/\w+\.(mmm131|mm1\d+)\.\w+/
// @include      /https?\:\/\/(\w+\.)?asiantolick\.\w+/
// @include      /https?\:\/\/(\w+\.)?imn5.\w+/
// @include      /https?\:\/\/xchina.\w+/
// @include      /https?\:\/\/jjgirls\.\w+/
// @include      /https?\:\/\/(\w+\.)?photos18\.\w+/
// @include      /https?\:\/\/(\w+\.)?pornpics\.\w+/
// @include      /https?\:\/\/www\.(.*(mnt|nmt)|.*ywt|.*sf(\w){0,3}t|.*mzt|.*wht|.*taotu|.*xzt|.*xzw|.*meinv|.*tuku|.*tuk|(?!.*umei).*meitu|.*youwu|jpnst)\.com/
// @include      /https?\:\/\/xartmodel.net/
// @include      /https?\:\/\/hotgirl.asia/
// @include      /https?\:\/\/hotgirlchina.com/
// @include      /https?\:\/\/blog.baobua.com/
// @include      /https?\:\/\/buondua.com/
// @include      /https?\:\/\/www.4kup.net/
// @include      /https?\:\/\/goddess247.com/
// @include      /https?\:\/\/www.ilovexs.com/
// @include      /https?\:\/\/mitaku.net/
// @include      /https?\:\/\/www.nlegs.com/
// @include      /https?\:\/\/nudecosplaygirls.com/
// @include      /https?\:\/\/nudebird.biz/
// @include      /https?\:\/\/idol.gravureprincess.date/
// @include      /https?\:\/\/asdasfd.net/
// @include      /https?\:\/\/yellowfever18.com/
// @include      /https?\:\/\/allasiangirls.net/
// @include      /https?\:\/\/asdcosplay.com/
// @include      /https?\:\/\/asianpink.net/
// @include      /https?\:\/\/ryuryu.tw/
// @include      /https?\:\/\/(www|m).xinwenba.net/
// @include      /https?\:\/\/(www|m).meitu131.com/
// @include      /https?\:\/\/dongtidemi\w*.(com|net|org)/
// @include      /https?\:\/\/(www|wap)\.cool18\.com\/(bbs(2|5|6|10)?\/|index.*app=index)/
// @include      /https?\:\/\/mm.tvv.tw\/archives/
// @include      /https?\:\/\/www\.f\d+m(n|m)\.com/
// @include      /https?\:\/\/www\.446m\.com/
// @include      /https?\:\/\/www\.elitebabes\.com/
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


// https://tool.lu/markdown/
// Alt+F8显示各网站列表 Esc退出
GM_addStyle(".sl-btn { border:1 !important; } .sl-c-pic { margin-top:6px } ");

let isDebugMain = false;

function log() {
    if (isDebugMain) {
        console.log.apply(this, arguments);
    }
};

let imagePluginSwitch = [{
    isViewerOpen: false,
    isFancyBox: true,
    isFancyBoxFullScreen: false,
    isFancyBoxAutoStartFalse: false,
    isOpenAutoSlidingPosition: false
}]
let curSite = { isReferer: '', isHost: true, isAdjustDomainName: false };

let site = {
    HentaiImage: {
        id: -1,
        name: 'Hentai Image',
        hostnames: [
            'hentai-img.com'
        ],
        iStatus: false,
        _break: false,
    },
    Hentai: { //支持中文https://zh.hentai-cosplays.com/
        id: 0,
        name: 'Hentai Cosplay',
        hostnames: [
            'hentai-cosplays.com'
        ],
        iStatus: false,
        _break: false,
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
            'www.192tt.top',
            'www.192tb.com',
            'www.192tp.com',
            'www.taotu8.xyz'
        ],
        pattern: /https?\:\/\/(www|m)\.(192t\w+|taotu\d*)\.\w+/,
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
            'www.jpxgyw.net',
            'www.xgmn09.com',
            'www.jpxgyw.cc'
        ],
        pattern: /https?\:\/\/www\.[a-z]*xg\w{0,4}\.(top|vip|net|com|cc)/,
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
            'tw.kissgoddesssite.com'
        ],
        pattern: /https?\:\/\/tw.\w*goddess\w+\.\w+/,
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
            'www.xiurenb.net',
            'www.xiurenb.com'
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
        pattern: /https?\:\/\/\w+\.xrmn[0-9w]{0,}.[a-zA-Z]{0,}/,
        iStatus: false,
        _break: false
    },
    _24fa: {
        id: 23,
        name: '24Fa',
        hostnames: [
            'www.112w.cc',
            'www.112w.cc\/c49.aspx',
            'www.24fa.link',
            'www.117.life'
        ],
        pattern: /https?\:\/\/(www\.)?[0-9]*(m|w|faw|fa)\.(cc|link)/,
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
            'nsfwp.buzz',
            'picxx.icu',
            'picxx.xyz',
            'nsfwx.pics',
            'nsfwpicx.com'
        ],
        pattern: /https?\:\/\/(old\.)?(nsfw[a-z]*|picx[a-z]*).\w+/,
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
        pattern: /https?\:\/\/www\.(.*(mnt|nmt)|.*ywt|.*sf(\w){0,3}t|.*mzt|.*wht|.*taotu|.*xzt|.*xzw|.*meinv|.*tuku|.*tuk|(?!.*umei).*meitu|.*youwu|jpnst)\.com/,
        iStatus: false,
        _break: false
    },
    xartmodel: {
        id: 34,
        name: 'XRTMODEL',
        hostnames: [
            'xartmodel.net'
        ],
        pattern: /https?\:\/\/xartmodel.net/,
        iStatus: false,
        _break: false
    },
    hotgirl: {
        id: 35,
        name: 'HOTGIRL.asia',
        hostnames: [
            'hotgirl.asia'
        ],
        pattern: /https?\:\/\/hotgirl.asia/,
        iStatus: false,
        _break: false
    },
    hotgirlchina: {
        id: 36,
        name: 'HOTGIRLchina',
        hostnames: [
            'hotgirlchina.com'
        ],
        pattern: /https?\:\/\/hotgirlchina.com/,
        iStatus: false,
        _break: false
    },
    baobua: {
        id: 37,
        name: 'BAOBUA.COM',
        hostnames: [
            'blog.baobua.com'
        ],
        pattern: /https?\:\/\/blog.baobua.com/,
        iStatus: false,
        _break: false
    },
    buondua: {
        id: 38,
        name: 'Buon Dua',
        hostnames: [
            'buondua.com'
        ],
        pattern: /https?\:\/\/buondua.com/,
        iStatus: false,
        _break: false
    },
    _4kup: {
        id: 39,
        name: '4KUP',
        hostnames: [
            'www.4kup.net'
        ],
        pattern: /https?\:\/\/www.4kup.net/,
        iStatus: false,
        _break: false
    },
    goddess247: {
        id: 40,
        name: 'Goddess247',
        hostnames: [
            'goddess247.com'
        ],
        pattern: /https?\:\/\/goddess247.com/,
        iStatus: false,
        _break: false
    },
    ilovexs: {
        id: 41,
        name: 'NongMo.Zone',
        hostnames: [
            'www.ilovexs.com'
        ],
        pattern: /https?\:\/\/www.ilovexs.com/,
        iStatus: false,
        _break: false
    },
    mitaku: {
        id: 42,
        name: 'Mitaku',
        hostnames: [
            'mitaku.net'
        ],
        pattern: /https?\:\/\/mitaku.net/,
        iStatus: false,
        _break: false
    },
    nlegs: {
        id: 43,
        name: 'Nlegs',
        hostnames: [
            'www.nlegs.com'
        ],
        pattern: /https?\:\/\/www.nlegs.com/,
        iStatus: false,
        _break: false
    },
    nudecosplaygirls: {
        id: 44,
        name: 'NUDECOSPLAY',
        hostnames: [
            'nudecosplaygirls.com'
        ],
        pattern: /https?\:\/\/nudecosplaygirls.com/,
        iStatus: false,
        _break: false
    },
    nudebird: {
        id: 45,
        name: 'NudeBird',
        hostnames: [
            'nudebird.biz'
        ],
        pattern: /https?\:\/\/nudebird.biz/,
        iStatus: false,
        _break: false
    },
    gravureprincess: {
        id: 46,
        name: 'Idol.gravureprincess',
        hostnames: [
            'idol.gravureprincess.date'
        ],
        pattern: /https?\:\/\/idol.gravureprincess.date/,
        iStatus: false,
        _break: false
    },
    asdasfd: {
        id: 47,
        name: 'ASD ASFD',
        hostnames: [
            'asdasfd.net'
        ],
        pattern: /https?\:\/\/asdasfd.net/,
        iStatus: false,
        _break: false
    },
    yellowfever18: {
        id: 48,
        name: 'Yellow Fever',
        hostnames: [
            'yellowfever18.com'
        ],
        pattern: /https?\:\/\/yellowfever18.com/,
        iStatus: false,
        _break: false
    },
    allasiangirls: {
        id: 49,
        name: 'Asian Girls',
        hostnames: [
            'allasiangirls.net'
        ],
        pattern: /https?\:\/\/allasiangirls.net/,
        iStatus: false,
        _break: false
    },
    asdcosplay: {
        id: 50,
        name: 'Make Girls',
        hostnames: [
            'asdcosplay.com'
        ],
        pattern: /https?\:\/\/asdcosplay.com/,
        iStatus: false,
        _break: false
    },
    asianpink: {
        id: 51,
        name: 'Asian Pink',
        hostnames: [
            'asianpink.net'
        ],
        pattern: /https?\:\/\/asianpink.net/,
        iStatus: false,
        _break: false
    },
    ryuryu: {
        id: 52,
        name: "Cypher's ghost",
        hostnames: [
            'ryuryu.tw'
        ],
        pattern: /https?\:\/\/ryuryu.tw/,
        iStatus: false,
        _break: false
    },
    xinwenba: {
        id: 53,
        name: "新闻吧",
        hostnames: [
            'www.xinwenba.net'
        ],
        pattern: /https?\:\/\/(www|m).xinwenba.net/,
        iStatus: false,
        _break: false
    },
    meitu131: {
        id: 54,
        name: "MEITU131",
        hostnames: [
            'www.meitu131.com'
        ],
        pattern: /https?\:\/\/(www|m).meitu131.com/,
        iStatus: false,
        _break: false
    },
    dongtidemi: {
        id: 55,
        name: "胴体的秘密",
        hostnames: [
            'dongtidemi.com',
            'dongtidemimi.org'
        ],
        pattern: /https?\:\/\/dongtidemi\w*.(com|net|org)/,
        iStatus: false,
        _break: false
    },
    cool18: {
        id: 56,
        name: "留园酷18",
        hostnames: [
            'cool18.com',
            'wap.cool18.com'
        ],
        pattern: /https?\:\/\/(www|wap).cool18.com/,
        iStatus: false,
        _break: false
    },
    tvvtw: {
        id: 57,
        name: "妹妹图",
        hostnames: [
            'mm.tvv.tw'
        ],
        pattern: /https?\:\/\/mm.tvv.tw/,
        iStatus: false,
        _break: false
    },
    f4mm: {
        id: 58,
        name: "F4MM爱骚",
        hostnames: [
            'www.f4mn.com'
        ],
        pattern: /https?\:\/\/www\.f\d+m(n|m)\.com/,
        iStatus: false,
        _break: false
    },
    _446m: {
        id: 58,
        name: "萌图社",
        hostnames: [
            'www.446m.com'
        ],
        pattern: /https?\:\/\/www\.446m\.com/,
        iStatus: false,
        _break: false
    },
    elitebabes: {
        id: 58,
        name: "Elite Babes",
        hostnames: [
            'www.elitebabes.com'
        ],
        pattern: /https?\:\/\/www\.elitebabes\.com/,
        iStatus: false,
        _break: false
    }
};
let mainArr = [
    'https://cdn.jsdelivr.net/gh/LARASPY/hello@master/main.js',
    'https://cdn.staticaly.com/gh/LARASPY/hello@master/main.js',
    'https://greasyfork.org/scripts/447371-commonlymainfunctions/code/CommonlyMainFunctions.js?version=1066681'
];
let fancyboxyArr = [
    'https://cdn.jsdelivr.net/gh/LARASPY/hello@master/fancybox.js',
    'https://cdn.staticaly.com/gh/LARASPY/hello@master/fancybox.js'
];
let gridzoneCss = [
    'https://cdn.jsdelivr.net/gh/LARASPY/xhua@master/other/gridzonecss.js',
    'https://cdn.staticaly.com/gh/LARASPY/xhua@master/other/gridzonecss.js'
]
let Alpha_Script = {
    obtainHtml: function (options) {
        options = options || {};
        if (!options.url || !options.method) {
            throw new Error("参数不合法");
        }
        GM_xmlhttpRequest(options);
    },
    parseHeaders: function (headStr, isDebug = true) {
        let o = {};
        let myregexp = /^([^:]+):(.*)$/img;
        let match = /^([^:]+):(.*)$/img.exec(headStr);
        while (match != null) {
            o[match[1].trim()] = match[2].trim();
            match = myregexp.exec(headStr);
        }
        if (isDebug) log("Header # ", o);
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
    let origin = window.location.origin;
    let hostName = window.location.hostname;
    let hostnameArry = null;
    let isEmpty = function (param) {
        if (param) {
            var param_type = typeof (param);
            if (param_type == 'object') {
                if (typeof (param.source) == 'undefined' | '') {
                    return true; //空值，空对象
                }
            }
            return false; //非空值
        } else {
            //空值,例如：
            //(1)null
            //(2)可能使用了js的内置的名称，例如：var name=[],这个打印类型是字符串类型。
            //(3)空字符串''、""。
            //(4)数字0、00等，如果可以只输入0，则需要另外判断。
            return true;
        }
    }
    let meet = function (domain) {
        let matchDomain = false;
        if (Alpha_Script.isArray(domain)) {
            for (let i = 0; i < domain.length; i++) {
                if (domain[i] === hostName) {
                    matchDomain = true;
                    break;
                }
            }
        } else {
            matchDomain = domain === hostName;
        }
        return matchDomain;
    };
    for (let key in site) {
        let isPattern = isEmpty(site[key].pattern);
        if (!isPattern) {
            hostnameArry = site[key].pattern.exec(origin);
            if (hostnameArry != null) {
                let urlHostName = hostnameArry[0].replace(/https?:\/\//i, "");
                site[key].hostnames.push(urlHostName);
                log(site[key].name, " : ", "add new hostName: ", urlHostName);
            }
        } else {
            log(site[key].name, " : ", 'pattern is empty, never add new hostName.');
        }
        site[key].iStatus = meet(site[key].hostnames);
        if (site[key].iStatus) {
            log(site[key].name, ":\n", site[key].hostnames);
        }
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
async function startMain_(arrs = null) {
    function isEmpty(param) {
        if (param) {
            var param_type = typeof (param);
            if (param_type == 'object') {
                //要判断的是【对象】或【数组】或【null】等
                if (typeof (param.length) == 'undefined') {
                    if (JSON.stringify(param) == "{}") {
                        return true; //空值，空对象
                    }
                } else if (param.length == 0) {
                    return true; //空值，空数组
                }
            } else if (param_type == 'string') {
                //如果要过滤空格等字符
                var new_param = param.trim();
                if (new_param.length == 0) {
                    //空值，例如:带有空格的字符串" "。
                    return true;
                }
            } else if (param_type == 'boolean') {
                if (!param) {
                    return true;
                }
            } else if (param_type == 'number') {
                if (!param) {
                    return true;
                }
            }
            return false; //非空值
        } else {
            //空值,例如：
            //(1)null
            //(2)可能使用了js的内置的名称，例如：var name=[],这个打印类型是字符串类型。
            //(3)空字符串''、""。
            //(4)数字0、00等，如果可以只输入0，则需要另外判断。
            return true;
        }
    }

    function Get_(link) {
        return new Promise(function (resolve) {
            $.get(link, data => {
                resolve(data);
            });
        });
    }

    function delayPromise(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    function timeoutPromise(name, promise, ms = 1000) {
        let timeout = delayPromise(ms).then(function () {
            throw new Error(name + ': Operation timed out after ' + ms + ' ms');
        });
        return Promise.race([promise, timeout]);
    }

    let initialArrFunction = async function (arr) {
        for (let index in arr) {
            let data;
            try {
                data = await timeoutPromise(arr[index], Get_(arr[index]));
                if (data) {
                    console.log("Data: " + arr[index] + "is finished!\n");
                }
            } catch (error) {
                console.log(error);
                timeoutPromise(arr[index], addScript_(null, arr[index]));
            }
            if (!isEmpty(data)) {
                addScript_(data);
                break;
            }
        }
    };

    if (!isEmpty(arrs)) {
        await initialArrFunction(arrs);
    } else {
        await initialArrFunction(mainArr);
        await initialArrFunction(fancyboxyArr);
    }
}
function startFancyBoxScript() {
    addScriptCss();
    // 观察者 MutationObserver事件
    function type(param) {
        // es6中null的类型为object
        if (param === null) {
            return param + "";
        }
        if (typeof param === "object") {
            let val = Object.prototype.toString.call(param).split(" ")[1];
            let type = val.substr(0, val.length - 1).toLowerCase();
            return type;
        } else {
            return typeof param;
        }
    }
    let slideIndex = null;
    const ContentContainer = document.querySelector("body");
    const configObserver = {
        childList: true,
        subtree: true,
        attributeFilter: ["class"],
    };
    // 当观察到突变时执行的回调函数
    const Callbacks = function (mutationsList) {
        mutationsList.forEach(function (item, index) {
            if ("attributes" === item.type) {
                // log(item);
                if (
                    item.target.className ===
                    "fancybox__carousel is-draggable"
                ) {
                    log(' # ', item);
                    openEvent(item);
                } else if (
                    item.target.className ===
                    "fancybox__container is-animated is-closing"
                ) {
                    log(' # ', item);
                    closeEvent();
                }
            }
        });
    };
    // 创建一个链接到回调函数的观察者实例
    const Observer = new MutationObserver(Callbacks);
    ContentContainer && Observer.observe(ContentContainer, configObserver);
    function openEvent(item) {
        slideIndex =
            item.target.offsetParent.childNodes[1].firstChild.firstChild
                .childNodes[0].innerText - 1;
        if (slideIndex) {
            log("open - # " + slideIndex + " slide is open!");
        }
    }
    function closeEvent() {
        log("close - # " + slideIndex + " slide is closed!");
        let elementById = document.getElementById("imgLocation" + slideIndex);
        if (elementById) {
            let behavior_ = "smooth";
            if (imagePluginSwitch[0].isOpenAutoSlidingPosition) behavior_ = "auto";
            elementById.scrollIntoView({
                block: "center",
                behavior: behavior_,
                inline: "center",
            });
        } else {
            console.error(" # ", "未定位id！");
        }
    }
    if (imagePluginSwitch[0].isFancyBox) {
        if (imagePluginSwitch[0].isFancyBoxFullScreen) {
            Fancybox4.bind("[data-fancybox='images']", {
                Toolbar: false,
                animated: false,
                dragToClose: false,
                showClass: false,
                hideClass: false,
                closeButton: "top",
                Image: { click: "close", wheel: "slide", zoom: false, fit: "cover" },
                Thumbs: { minScreenHeight: 0 }
            });
        } else if (imagePluginSwitch[0].isFancyBoxAutoStartFalse) {
            Fancybox4.bind("[data-fancybox='images']", {
                Thumbs: { autoStart: false, Carousel: { fill: false, center: true } }
            });
        } else {
            Fancybox4.bind("[data-fancybox='images']", {
                Thumbs: { Carousel: { fill: false, center: true } }
            });
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
    let id = setInterval(function () {
        if ($('.sl-c-pic').length > 0) {
            $('.sl-c-pic').css({
                'margin-top': '6px'
            });
            $('a[data-fancybox="images"]').css({
                'color': '#000',
                'box-shadow': '0 1px 0 #999'
            });
            clearInterval(id);
        }
    }, 100);
    let imgObj = [];
    $(images).each(function () {
        let src = $(this).attr("src");
        imgObj.push($("<img src=" + src + "></img>"));
    });
    let a_imgTag = [];
    if (isDebugMain) {
        console.groupCollapsed("imageSGroupIn");
    }
    $(imgObj).each(function (index) {
        log("start this Object: \n", $(this));
        let src;
        // debugger
        $(this).attr('label', 'sl');
        // src = $(this).attr('src');
        // log("attr src: \n", src);
        src = $(this)[0].src;
        log("array src: \n", src);
        $(this).css({
            "width": "100%",
            "height": "100%"
        });
        let imageItem = $(this).prop("outerHTML").toString();
        log("New this String: \n", imageItem);
        let construct_aTag = $(`<a data-fancybox="images" href="${src}"></a>`);
        construct_aTag.append(imageItem);
        log("New construct_Tag Html: \n", construct_aTag.prop("outerHTML"));
        a_imgTag.push(construct_aTag);
    });
    if (isDebugMain) {
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
    if (!popUpContent) {
        err("弹窗加载失败！！！");
        return;
    }
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
function adoptAutoPage() {
    let id = setInterval(function () {
        if ($('#Autopage_number').length > 0) {
            $('#Autopage_number').click();
            let cssText = $('#Autopage_number').attr('style');
            $('#Autopage_number').css("cssText", "z-index: 1000 !important;" + cssText);
            clearInterval(id);
        }
    }, 100);
}
function type(param) {
    // es6中null的类型为object
    if (param === null) {
        return param + "";
    }
    if (typeof param === "object") {
        let val = Object.prototype.toString.call(param).split(" ")[1];
        let type = val.substr(0, val.length - 1).toLowerCase();
        return type;
    } else {
        return typeof param;
    }
}
(async function () {
    'use strict';
    //清屏
    console.clear();
    // let fancyboxJs = "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js"
    if (isDebugMain) console.groupCollapsed('StartMain');
    await startMain_();
    if (isDebugMain) console.groupEnd('StartMain');
    await new Promise(function (resolve) {
        let id = setInterval(function () {
            try {
                //打印开关
                if (isDebug && Fancybox4) {
                    log("fancybox4js finished!\n");
                    clearInterval(id);
                    resolve();
                };
            } catch (error) {
                log("fancybox4js isn't finished!");
            }
        }, 100);
    });

    if (isDebugMain) console.groupCollapsed('urlActivationGroup');
    currentUrlActivation();
    if (isDebugMain) console.groupEnd('urlActivationGroup');

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
        let removeAD = null;
        let session = document.cookie;
        let isPackageAndDownload = false;
        let isBindBtnDownload = false;
        let newTimeStamp = new Date().getTime();
        let isActivateSlidingFuncNum = 0;

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
                "border-radius": "3px",
                "margin-right": "unset",
                "margin-bottom": "unset",
            });
        };
        let activateSlidingFunc = function () {
            let id = setInterval(function () {
                let dynamicTimeStamp = new Date().getTime();
                let misTiming = dynamicTimeStamp - newTimeStamp;
                // log("MutationRecord MisTiming ", isActivateSlidingFuncNum, " : ", misTiming);
                if (misTiming > 2000) {
                    isActivateSlidingFuncNum++;
                    newTimeStamp = dynamicTimeStamp;
                    let slcPicNums = $("img[label='sl']");
                    if (slcPicNums) {
                        // log("TotalNumberImages: ", slcPicNums.length);
                        for (let i = 0; i < slcPicNums.length; i++) {
                            $(slcPicNums[i]).attr({ "tabindex": "-1", "id": "imgLocation" + i });
                        }
                    }
                    if (isActivateSlidingFuncNum === -1) {
                        clearInterval(id);
                    }
                }
            }, 100);
        };
        let collectPicsTemplateFunc = function (parseImgsFunc, imgStyleFunc) {
            let id = setInterval(function () {
                if ($) {
                    clearInterval(id);
                    // 启动滑动监听
                    activateSlidingFunc();
                    let breakPageLoop = false;
                    for (let i = 0, len = pageUrls.length; i < len; i++) {
                        //创建div去装各自
                        $('#c_container').append('<div id="c_' + i + '"></div>');
                        if (!breakPageLoop) {
                            // debugger
                            let pageUrl = startUrl + pageUrls[i];
                            Alpha_Script.obtainHtml({
                                url: pageUrl,
                                headers: Alpha_Script.parseHeaders(
                                    "Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\n" +
                                    "Accept-Encoding:gzip, deflate, br\n" +
                                    "Accept-Language:zh-CN,zh;q=0.9\n" +
                                    "cookie:" + session + "\n" +
                                    "Referer:" + window.location.href + "\n" +
                                    "User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36"
                                    , false),
                                method: 'GET',
                                onload: function () {
                                    let _i = i;
                                    let _pageUrl = pageUrl;
                                    return function (response) {
                                        if (isDebugMain) {
                                            console.groupCollapsed('imagesGroup_' + _i);
                                        }
                                        log('response pageUrl:\n', _pageUrl);
                                        // log('URL：' + pageUrl, '\n最终 URL：' + response.finalUrl, '\n返回内容：' + response.responseText)
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
                                                $(this).attr({ 'label': 'sl' });
                                                $(imgContainerCssSelector).append('<div class="sl-c-pic">' + $(this).prop('outerHTML') + '</div>');
                                            });
                                            let ContentContainer = document.querySelector("#c_container");
                                            let configObserver = {
                                                childList: true,
                                                subtree: true,
                                            };
                                            // 当观察到突变时执行的回调函数
                                            let Callbacks = function (mutationsList) {
                                                mutationsList.forEach(function (item, index) {
                                                    // log("MutationRecord: - #", item);
                                                    newTimeStamp = new Date().getTime();
                                                });
                                            };
                                            // 创建一个链接到回调函数的观察者实例
                                            const Observer = new MutationObserver(Callbacks);
                                            ContentContainer && Observer.observe(ContentContainer, configObserver);
                                        }
                                        if (isDebugMain) {
                                            console.groupEnd('imagesGroup_' + _i);
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
        let match = function () { };
        let mismatch = function () { };
        let meet = function (options) {
            // debugger
            options = options || {};
            options.domain = options.domain || domain;
            options.match = options.match || match;
            options.mismatch = options.mismatch || mismatch;

            // log("Arr(options.domain): \n" + options.domain);
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

        function isImgHttpStart(imgSrc, isJavaScriptObject = false) {
            if (!imgSrc.startsWith('http')) {
                let re = /^\/.*/g;
                let isNoSlash = re.test(imgSrc);
                if (isNoSlash) {
                    imgSrc = protocol + '//' + hostName + imgSrc;
                } else {
                    imgSrc = startUrl + imgSrc;
                }
            }
            if (isJavaScriptObject) {
                let re = /(?<=:\/\/).*?(?=\/)/g;
                let urlHost = imgSrc.match(re);
                return { "imgSrc": imgSrc, "host": urlHost }
            }
            return imgSrc;
        }
        function packageAndDownload() {
            if (isPackageAndDownload) {
                alert('下载中, 请耐心等待...\n点击确认继续下载');
            } else {
                isPackageAndDownload = true;
                let zip = new JSZip();
                let imgList = $('img[label="sl"]');
                let length = imgList.length;
                let errorNum = 0;
                $.each(imgList, function (index, value) {
                    //zip.file
                    let myDate = new Date(); //获取系统当前时间
                    let times = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate() + "-" + myDate.getHours() + "-" + myDate.getMinutes() + "-" + myDate.getSeconds();
                    let img = zip.folder(times);
                    let imgSrc = $(value).attr('src');
                    if (blobCache[imgSrc]) {
                        img.file(1 + index + ".jpg", blobCache[imgSrc], { base64: false });
                        length--;
                    } else {
                        if (!imgSrc.startsWith('blob:')) {
                            let host = window.location.host;
                            imgSrc = isImgHttpStart(imgSrc, curSite.isAdjustDomainName);
                            log("imgSrc # ", imgSrc);
                            if (type(imgSrc) === 'object') {
                                host = imgSrc.host[0];
                                imgSrc = imgSrc.imgSrc;
                            }
                            Alpha_Script.obtainHtml({
                                url: imgSrc,
                                method: 'GET',
                                headers: Alpha_Script.parseHeaders(
                                    "Accept:" + "*/*\n" +
                                    "User-Agent:" + navigator.userAgent + "\n" +
                                    "Host:" + ((curSite.isHost === true) ? host : '') + "\n" +
                                    "Referer:" + ((curSite.isReferer === true) ? window.location.href : '') + "\n" +
                                    "cookie:" + session + "\n"
                                ),
                                timeout: 30000,
                                responseType: 'blob',
                                onload: function (response) {
                                    try {
                                        //下载
                                        // log('URL：' + imgSrc, '\n最终 URL：' + response.finalUrl, '\n返回内容：' + response.responseText)
                                        if (response && response.status && response.status >= 200 && response.status < 300) {
                                            let responseHeaders = Alpha_Script.parseHeaders(response.responseHeaders, false);
                                            let contentType = responseHeaders['Content-Type'];
                                            if (!contentType) {
                                                contentType = "image/png";
                                            }
                                            let blob = new Blob([response.response], {
                                                type: contentType
                                            });
                                            blobCache[imgSrc] = blob;
                                            img.file(1 + index + ".jpg", blobCache[imgSrc], { base64: false });
                                            // if (length == 1) debugger
                                        } else {
                                            errorNum++;
                                            if (errorNum === imgList.length) {
                                                isPackageAndDownload = false;
                                                err('图片全部下载失败,请使用插件下载。');
                                                alert("图片全部下载失败,请使用插件下载。");
                                            }
                                        }
                                        length--;
                                    } catch (e) {
                                        err('处理获取到的图片内容时出现问题，请检查！', e, response.responseText);
                                    }
                                },
                                onerror: function (response) {
                                    log('URL：' + imgSrc, response)
                                    length--;
                                },
                                ontimeout: function (response) {
                                    errorNum++;
                                    if (errorNum === imgList.length) {
                                        isPackageAndDownload = false;
                                        err('图片全部下载失败,请使用插件下载。');
                                        alert("图片全部下载失败,请使用插件下载。");
                                    }
                                    err("DownlodeUrl " + index + ": 超时");
                                    log('URL：' + imgSrc, response)
                                    length--;
                                }
                            });
                        } else {
                            img.file(1 + index + ".jpg", blobCache[blobUrlCache[imgSrc]], { base64: false });
                            length--;
                        }
                    }
                });
                let packagName = document.title;
                if (!packagName) {
                    packagName = $(".title").first().text();
                    if (!packagName) {
                        packagName = $("#title").first().text();
                        if (!packagName) packagName = "PackageSL";
                    }
                }
                let id = setInterval(function () {
                    if (length === 0) {
                        clearInterval(id);
                        zip.generateAsync({
                            type: "blob"
                        }).then(function (content) {
                            if (errorNum !== imgList.length) {
                                saveAs(content, packagName + ".zip");
                                isPackageAndDownload = false;
                                log("图片下载完成 " + (imgList.length - errorNum) + "张，失败 " + errorNum + "张，总共" + imgList.length + "张。");
                                alert("图片下载完成 " + (imgList.length - errorNum) + "张，失败 " + errorNum + "张，总共" + imgList.length + "张。");
                            }
                        });
                    }
                }, 100);
            }
        }
        function bindBtn(callback) {
            $('#injectaggregatBtn').bind('click', callback);
            $('#captureBtn').bind('click', function (e) {
                if (isBindBtnDownload) {
                    alert('截图中, 请耐心等待...\n点击确认继续截图');
                } else {
                    isBindBtnDownload = true;
                    let imgList = $('img[label="sl"]');
                    let length = imgList.length;
                    let errorNum = 0;
                    $.each(imgList, function (index, value) {
                        let imgSrc = $(value).attr('src');
                        if (blobCache[imgSrc]) {
                            length--;
                        } else {
                            if (!imgSrc.startsWith('blob:')) {
                                let host = window.location.host;
                                imgSrc = isImgHttpStart(imgSrc, curSite.isAdjustDomainName);
                                log("imgSrc # ", imgSrc);
                                if (type(imgSrc) === 'object') {
                                    host = imgSrc.host[0];
                                    imgSrc = imgSrc.imgSrc;
                                }
                                Alpha_Script.obtainHtml({
                                    url: imgSrc,
                                    method: 'GET',
                                    headers: Alpha_Script.parseHeaders(
                                        "Accept:" + "*/*\n" +
                                        'User-Agent:' + navigator.userAgent + "\n" +
                                        'Host:' + ((curSite.isHost === true) ? host : '') + "\n" +
                                        'Referer:' + ((curSite.isReferer === true) ? window.location.href : '') + "\n" +
                                        "cookie:" + session + "\n"
                                    ),
                                    timeout: 30000,
                                    responseType: 'blob',
                                    onload: function (response) {
                                        try {
                                            //截图
                                            // console.log('URL：' + url, '最终 URL：' + response.finalUrl, '返回内容：' + response.responseText)
                                            if (response && response.status && response.status >= 200 && response.status < 300) {
                                                let responseHeaders = Alpha_Script.parseHeaders(response.responseHeaders, false);
                                                let contentType = responseHeaders['Content-Type'];
                                                if (!contentType) {
                                                    contentType = "image/png";
                                                }
                                                let blob = new Blob([response.response], {
                                                    type: contentType
                                                });
                                                blobCache[imgSrc] = blob;
                                            } else {
                                                errorNum++;
                                                if (errorNum === imgList.length) {
                                                    isBindBtnDownload = false;
                                                    err('截图保存失败。');
                                                    alert("截图保存失败。");
                                                }
                                            }
                                            length--;
                                        } catch (e) {
                                            err('处理获取到的图片内容时出现问题，请检查！', e, response.responseText);
                                        }
                                    },
                                    onerror: function (response) {
                                        log('URL：' + imgSrc, response)
                                        length--;
                                    },
                                    ontimeout: function (response) {
                                        errorNum++;
                                        if (errorNum === imgList.length) {
                                            isBindBtnDownload = false;
                                            err('截图保存失败。');
                                            alert("截图保存失败。");
                                        }
                                        err("DownlodeUrl " + index + ": 超时");
                                        log('URL：' + imgSrc, response)
                                        length--;
                                    }
                                });
                            }
                        }
                    });
                    let id = setInterval(function () {
                        if (length === 0) {
                            clearInterval(id);
                            let length2 = imgList.length;
                            $.each(imgList, function (index, value) {
                                let imgSrc = $(value).attr('src'); {
                                    if (!imgSrc.startsWith('blob:')) {
                                        imgSrc = isImgHttpStart(imgSrc);
                                        if (blobCache[imgSrc]) {
                                            let objectURL = URL.createObjectURL(blobCache[imgSrc]);
                                            //objectURL = blob:https://mrcong.com/28c4ef23-b1ce-471a-84a1-c750d642b52c
                                            //imgSrc(原链接)
                                            blobUrlCache[objectURL] = imgSrc;
                                            //将内存blob:new url替换src
                                            $(value).attr('src', objectURL);
                                            log(imgSrc + "\n---> " + objectURL);
                                        }
                                    }
                                    length2--;
                                }
                            });
                            let id2 = setInterval(function () {
                                if (length2 === 0) {
                                    clearInterval(id2);
                                    let cContainner = $('#c_container').get(0);
                                    domtoimage.toBlob(cContainner).then(function (blob) {
                                        if (blob) {
                                            saveAs(blob, "captureSL.png");
                                            log("截图保存完成。");
                                            alert("截图保存完成。");
                                        } else {
                                            err("文件不存在，截图保存失败!");
                                            alert("文件不存在，截图保存失败!");
                                        }
                                        isBindBtnDownload = false;
                                    }).catch(function (error) {
                                        if (errorNum !== imgList.length) {
                                            isBindBtnDownload = false;
                                            err('截图太大不能保存!');
                                            alert("截图太大不能保存!");
                                        }
                                    });
                                }
                            }, 100);
                        }
                    }, 100);
                }
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
                    log('sessionCookie: ', session);
                    if (os.isPc) {
                        popUpMenu();
                    }
                    if (removeAD) {
                        removeAD();
                    }
                    if (injectAggregationRef) {
                        injectAggregationRef.apply(this, [injectComponent, pageUrls]);
                        if ($('#injectComponentIn').length > 0) {
                            $('#injectComponentIn').after('<div id="c_container"></div>');
                            if (switchAggregationBtn) {
                                switchAggregationBtn();
                                if (collectPics) {
                                    collectPics();
                                    hotkeys();
                                    // debugger
                                    adoptAutoPage();
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
    }

    /* --------------------------------------------wndfx.com-------------------------------------------- */

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
        log("currentPathname: " + currentPathname);
        let match = currentPathname.match(/\/(.+\/)(\d+)(?:_\d+)?\.html/m); //http://www.aitaotu.com/weimei/36129.html
        if (match !== null) {
            {
                let totalPageCnt = 1;
                let partPreUrl = match[1];
                let pageId = match[2] + '_';
                let suffixUrl = '.html';
                let limitPageStr = $('.page_imges').html();
                // log('partPreUrl: ', partPreUrl);
                // log('pageId: ', pageId);
                log('limitPageStr: ', limitPageStr);
                let limitPageMatch = limitPageStr.match(/(?<=\>)\d+/img);
                log('limitPageMatch: ', limitPageMatch);
                if (limitPageMatch != null) {
                    let maxpage = Math.max.apply(null, limitPageMatch);
                    totalPageCnt = maxpage;
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
    }).start();

    /* --------------------------------------------hentai-cosplays|img.com & Pron----------------------- */

    injectBtns().domain(site.Hentai.hostnames.concat(site.Pron.hostnames).concat(site.HentaiImage.hostnames)).removeAD(function () {
        setInterval(function () {
            $("div[id^='gn_delivery']").remove();
            $("a[id^='__qdd_ciw_a__']").remove();
            $('iframe').remove(); //移除广告等无必要元素
            $("div #social_button").remove();
            $("div #top_ad").remove();
            $("#header .right-menu").nextAll().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        curSite.isAdjustDomainName = true;
        $('#display_image_detail').hide();
        $('#post').hide();
        //android
        $('#detail_list').hide();
        $('#paginator_area').hide();
        $('.paginator_area').hide();
    }, function () {
        $('#display_image_detail').show();
        $('#post').show();
        //android
        $('#detail_list').show();
        $('#paginator_area').show();
        $('.paginator_area').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        // let match = window.location.pathname.match(/(\/page\/\d+\/)$/im); // /image/cos-cos-1/page/2/
        let limitPageStr = null;
        let limitPageMatchList = null;
        if (os.isAndroid) {
            limitPageStr = $('.paginator_area').prop('outerHTML');
        } else {
            limitPageStr = $('#main_contents').prop('outerHTML');
        }
        // log("limitPageStr: ", limitPageStr);
        debugger
        if (!isEmpty(limitPageStr)) {
            limitPageMatchList = limitPageStr.match(/(?<=page\/)\d+/g);
        }
        if (isEmpty(limitPageMatchList)) {
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
        let imgList = $(doc).find("div#display_image_detail div a img");
        $.each(imgList, function (index, value) {
            let src = $(value).attr("src");
            log("Old # ", src);
            src = src.replace(/\/p=\d*([xX]\d*)?/g, '');
            $(value).attr("src", src);
            log("New # ", $(value).prop('outerHTML'));
        });
        return imgList;
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
    }).start();

    /* --------------------------------------------www.lsm.me & www.lesmao.org-------------------------- */

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

    /* --------------------------------------------www.umei.cc & www.umeitu.com------------------------- */

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
    }).start();

    /* --------------------------------------------www.win4000.com-------------------------------------- */

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
    }).start();

    /* --------------------------------------------www.192tp.com---------------------------------------- */

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
    }).start();

    /* --------------------------------------------www.xiuren.org--------------------------------------- */

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
    }).start();

    /* --------------------------------------------www.micmicidol.com----------------------------------- */

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
    }).start();

    /* --------------------------------------------everia.club------------------------------------------ */

    injectBtns().domain(site.Everia.hostnames).removeAD(async function () {
        debugger
        $("head").empty();
        // await addScript_(null, "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/everiacss.js");
        let arrs = [
            'https://cdn.jsdelivr.net/gh/LARASPY/xhua@master/other/everiacss.js',
            'https://cdn.staticaly.com/gh/LARASPY/xhua@master/other/everiacss.js',
            "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/everiacss.js"
        ]
        await startMain_(arrs);
        addStyle(everiacss);
        //add gridzone themes
        await startMain_(gridzoneCss);
        addStyle(gridzone);
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
    }).start();

    /* --------------------------------------------www.jpxgyw.net & www.jpmn8.com----------------------- */

    injectBtns().domain(site.Jpxgyw.hostnames.concat(site.Jpmn8.hostnames)).removeAD(async function () {
        $("script").remove();
        //$(".header").prevAll().remove();
        $(".footer").nextAll().remove();
        setInterval(function () {
            $("style[id]").remove();
            $(".content > a").remove();
            $("center > a").remove();
            $(".header").css({
                'position': 'unset',
                'z-index': 'unset'
            });
            // $("body>a").remove();
            // $(".fancybox__container").nextAll().remove();
            // $(".footer").nextUntil(".fancybox__container").remove();
            // $(".container").nextUntil(".footer").remove();
        }, 100);
        //add gridzone themes
        await startMain_(gridzoneCss);
        addStyle(gridzone);
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
    }).start();

    /* --------------------------------------------www.95mm.org----------------------------------------- */

    injectBtns().domain(site._95mm.hostnames).removeAD(async function () {
        setInterval(function () {
            $("#post-action").remove();
        }, 100);
        //add gridzone themes
        await startMain_(gridzoneCss);
        addStyle(gridzone);
    }).switchAggregationBtn(function () {
        // FancyBox
        activateFancyBox();
        imagePluginSwitch[0].isOpenAutoSlidingPosition = true;
        $('.text-xs b').hide();
        $(".post-data").hide();
        $(".nc-light-gallery").hide();
    }, function () {
        $('.text-xs b').show();
        $(".post-data").show();
        $(".nc-light-gallery").show();
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

            $('.post').prepend(injectComponent);
        }
    }).collectPics(function (doc) {
        let images = $(doc).find('.nc-light-gallery img').clone();
        let a_imgTag = aImgTagPackaging(images);
        log("New a_imgTag Object: \n", $(a_imgTag));
        return $(a_imgTag);
    }, function (imgE) {
        imgE.style = "width: 100%;height: 100%";
    }).start();

    /* --------------------------------------------www.3gbizhi.com-------------------------------------- */

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
    }).start();

    /* --------------------------------------------tw.kissgoddess.com----------------------------------- */

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
    }).start();

    /* --------------------------------------------meinv.page------------------------------------------- */

    injectBtns().domain(site.Meinv.hostnames).removeAD(function () {
        $("div[id^=art_],.mobile-bar,[class^=go-to-top],.favorite").css({
            "z-index": "999"
        });
        $("div[id^=art_] img").css({
            'width': 'auto',
            'height': 'auto',
            'max-width': '50%',
            'max-height': '50%'
        });
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.entry-content figure').hide();
        $("#comments").hide();
        $(".widget_text").hide();
        $(".blocks-gallery-item").parent().hide();

        $('img[data-fancybox=i]').attr("data-fancybox", "images");
        $('a[data-fancybox=images]').attr("data-fancybox", "i");
    }, function () {
        $('.entry-content figure').show();
        $("#comments").show();
        $(".widget_text").show();
        $(".blocks-gallery-item").parent().show();

        $('img[data-fancybox=images]').attr("data-fancybox", "i");
        $('a[data-fancybox=i]').attr("data-fancybox", "images");
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname; // /Xiuren/Xiuren21393.html
        log("currentPathname: \n", currentPathname);
        if (currentPathname !== null) {
            pageUrls.push(currentPathname);
            if ($('.entry-content>figure').length > 0) {
                $('.entry-content figure').first().prev().after(injectComponent);
            } else {
                $(".blocks-gallery-item").parent().prev().after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find(".entry-content figure a");
        $(item).each(function () {
            let src = $(this).attr("href");
            imgE.push($("<img src=" + src + "></img>"));
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------asiansister.com-------------------------------------- */

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
    }).start();

    /* --------------------------------------------yskhd.com-------------------------------------------- */

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
        curSite.isReferer = true;
        $("div[class^=article]").slice(1,).hide();
        // $("div.article-content > p").next().nextAll().hide();
        $(".single-comment").hide();
    }, function () {
        $("div[class^=article]").slice(1,).show();
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
    }).start();

    /* --------------------------------------------www.dmmtu.com---------------------------------------- */

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
    }).start();

    /* --------------------------------------------www.fnvshen.com && xsnvshen.co----------------------- */

    injectBtns().domain(site.Fnvshen.hostnames).removeAD(function () {
        setInterval(function () {
            $(".yalayi_box").remove();
            $(".yituyu_box").remove();
            $(".collect-unit").first().remove();
            $(".pic_index_headc").css("position", "sticky");
            $("#page").nextAll().remove();
            $('div[style="text-align:center;background:white"]').remove();
        }, 100);
    }).switchAggregationBtn(function () {
        //FancyBox
        activateFancyBox();
        curSite.isReferer = true;
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
            curSite.isAdjustDomainName = true;
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
    }).start();

    /* --------------------------------------------www.ikanins.com-------------------------------------- */

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
    }, function () { }).injectAggregationRef(function (injectComponent, pageUrls) {
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
    }).start();

    /* --------------------------------------------madoupan.com----------------------------------------- */

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
    }).start();

    /* --------------------------------------------mrcong.com------------------------------------------- */

    injectBtns().domain(site.Mrcong.hostnames).removeAD(function () {
        $("body").removeClass();
        $("body").removeAttr("id");
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
            if (os.isPc) {
                $("body").css({
                    "font-family": '-apple-system,BlinkMacSystemFont,Tahoma,Arial,"Hiragino Sans GB","Microsoft YaHei",serif'
                });
                $(".page-link").last().prev().prev().after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let images;
        images = $(doc).find('.entry img');
        let a_imgTag = aImgTagPackaging(images);
        log("New a_imgTag Object: \n", $(a_imgTag));
        return $(a_imgTag);
    }, function (imgE) {
        imgE.style = "width: 100%;height: 100%";
    }).start();


    /* --------------------------------------------www.xrmn5.cc & www.xiurenb.net ---------------------- */

    injectBtns().domain(site.XiurenJi.hostnames.concat(site.Xrmn.hostnames)).removeAD(function () {
        setInterval(function () {
            $("div[class^='ad']").remove();
            $(".main").nextUntil('#popUpContent').remove();
            // $("#popUpContent").nextAll().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        //FancyBox
        activateFancyBox();
        $(".content").hide();
    }, function () {
        $(".content").show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        let match;
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
            if (os.isPc) {
                $('.item_title').last().after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let images;
        images = $(doc).find('.content img');
        log("images: \n", images);
        let a_imgTag = aImgTagPackaging(images);
        log("New a_imgTag Object: \n", $(a_imgTag));
        return $(a_imgTag);
    }, function (imgE) {
        imgE.style = "width: 100%;height: 100%";
    }).start();
    /* --------------------------------------------www.112w.cc------------------------------------------ */

    injectBtns().domain(site._24fa.hostnames).removeAD(function () {
        setInterval(function () {
            $("div[class^='ad']").remove();
            $("#content img[src$='gif']").remove();
            let imgList = $("img");
            imgList.each(function () {
                let src = $(this).attr("original");
                // log($(this).prop("outerHTML")+src);
                $(this).attr('src', src);
            });
        }, 100);
    }).switchAggregationBtn(function () {
        //FancyBox
        activateFancyBox();
        $("div#content>div[style^=text]").hide();
        $("#content>div>img").hide();
        $("table[align]").hide();
    }, function () {
        $("div#content>div[style^=text]").show();
        $("#content>div>img").show();
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
            if (os.isPc) {
                $('#content img').first().parent().prepend(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let imgE = [];
        let images;
        images = $(doc).find('#content img');
        // log("images: \n", images);
        $(images).each(function () {
            let src = $(this).attr("src");
            // log($(this).prop("outerHTML")+src);
            imgE.push($("<img src=" + src + "></img>"));
        });
        log(imgE);
        return $(imgE);
    }, function (imgE) {
        imgE.style = "max-width: 100%;height: auto";
        $(imgE).attr({
            'data-fancybox': 'images'
        });
    }).start();

    /* --------------------------------------------www.tuiimg.com--------------------------------------- */

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
        log("limitPageStr: " + limitPageStr);
        if (limitPageStr !== undefined) {
            let pageUrl = currentPathname;
            log('push pageUrl:\n', pageUrl);
            pageUrls.push(pageUrl);
            $('div.content').prev().after(injectComponent);
        }
    }).collectPics(function (doc) {
        debugger
        let imgE = []
        let currentImgSrc = $(".content img").attr("src").replace("//", "/");
        log("currentImgSrc: " + currentImgSrc);
        let hostName = currentImgSrc.match(/(?<=\/).*?(?=\/)/m);
        let partPreUrl = currentImgSrc.match(/(?<=\w\/).*(?=\/)/m);
        log("partPreUrl: " + partPreUrl);
        let limitPageStr = $('span.all').prop("outerHTML");
        log("limitPageStr: " + limitPageStr);
        if (limitPageStr != null) {
            let limitPageMatch = limitPageStr.match(/(?<=\/)\d+/m);
            log("limitPageMatch: " + limitPageMatch);
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
    }).start();

    /* --------------------------------------------nsfwp.buzz------------------------------------------- */

    injectBtns().domain(site.nsfwp.hostnames).removeAD(async function () {
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
        //add gridzone themes
        await startMain_(gridzoneCss);
        addStyle(gridzone);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.wp-block-image').hide();
        $('.rebeccalite-post-author').hide();
        $('.wrapper').hide();
        $('.entry-content').hide();
        //android
    }, function () {
        $('.wp-block-image').show();
        $('.rebeccalite-post-author').show();
        $('.wrapper').show();
        $('.entry-content').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let button_ = null;
        if (currentPathname !== undefined && currentPathname !== "\/collection" && currentPathname !== "\/") {
            let aTags = $('.entry-content p a');
            aTags.each(function () {
                let text = $(this).text();
                log(text);
                if (!isEmpty(text)) {
                    button_ = $(this).clone();
                }
            });
            button_.css({
                "color": "black",
                "background": "pink",
                "text-decoration": "none"
            }).text("原内容下载");
            let text = $(".entry-content p").last().text();
            text = text.match(/\d*:\d*/g);
            log("-----video--------\n", text);
            if (isEmpty(text)) {
                let pageUrl = currentPathname;
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
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
        let images;
        images = $(doc).find(".entry-content img");
        let a_imgTag = aImgTagPackaging(images);
        log("New a_imgTag Object: \n", $(a_imgTag));
        return $(a_imgTag);
    }, function (imgE) {
        imgE.style = "width: 100%;height: 100%";
    }).start();

    /* --------------------------------------------mmm131.com------------------------------------------- */

    injectBtns().domain(site.mmm131.hostnames).removeAD(function () {
        console.time('global');
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve();
            }, 100);
        }).then(() => {
            console.timeEnd('global');
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
                limitPageStr = $('.content-page');
            } else {
                limitPageStr = $('.paging');
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
    }).start();

    /* --------------------------------------------asiantolick.com-------------------------------------- */

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
    }).start();

    /* --------------------------------------------www.imn5.net-格式------------------------------------ */

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
    }).start();

    /* --------------------------------------------xchina.club------------------------------------------ */

    injectBtns().domain(site.xchina.hostnames).removeAD(function () {
        setInterval(function () {
            $('.aside .center').remove();
            $(".push-bottom").remove();
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
        let skip1 = currentHref.match(/\/photo\//g);
        if (match && !isEmpty(skip1)) {
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
        imgEDiv = $(doc).find(".photos img");
        $(imgEDiv).each(function (index) {
            let src = $(this).attr("src").replace(/\_.*\./g, '.');
            let isTurn = /\/ad\//g.exec(src);
            if (isEmpty(isTurn)) {
                log("src: " + src);
                imgE.push($(`<img src=${src}>`));
            }
        });
        return $(imgE);
    }, function (imgE) {
        imgE.style = "width: 100%;";
        $(imgE).attr({
            'data-fancybox': 'images'
        });
    }).start();

    /* --------------------------------------------jjgirls.com------------------------------------------ */

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
            // log("href: \n"+href);
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
    }).start();

    /* --------------------------------------------photos18.com----------------------------------------- */

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
    }).start();

    /* --------------------------------------------pornpics.com----------------------------------------- */

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
    }).start();

    /* --------------------------------------------www.mfsft.com---------------------------------------- */

    injectBtns().domain(site.mfsft.hostnames).removeAD(function () {
        if (!(window.location.pathname.toString() === "/")) {
            let items = $(".h").nextUntil(".page");
            let interestline = items.find(".interestline");
            let seacher = $("#search");
            if (isEmpty(seacher)) {
                seacher = $("form[onsubmit]").parent();
            }
            log("interestline\n", interestline.prop("outerHTML"));
            log("seacher\n", seacher.prop("outerHTML"));
            $(".h").prev().after(interestline.clone());
            $(".h").prev().after($("#dtag").clone());
            $(".h").prev().after($("#bdssy").clone());
            $(".h").prev().after(seacher.clone());
            $(".h").prev().after($(".pic"));
            // $(".h").prevUntil(".page").remove();
            items.remove();
        };
        $("head").empty();
        setInterval(function () {
            $("#pic").remove();
            $(".bg-text").remove();
        }, 100);
        async function asyncFunc() {
            try {
                var a1 = +new Date();
                // await addScript_(null, "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/mslasscss.js");
                let arrs = [
                    'https://cdn.jsdelivr.net/gh/LARASPY/xhua@master/other/mslasscss.js',
                    'https://cdn.staticaly.com/gh/LARASPY/xhua@master/other/mslasscss.js',
                    "https://larassr.coding.net/p/fancybox4.0/d/fancybox4/git/raw/master/mslasscss.js"
                ]
                await startMain_(arrs);
                addStyle(MSLASS_CSS);
                var a2 = +new Date();
                var time = (a2 - a1);
                log("time", time);
            } catch (error) {
                err(error);
            }
        }
        asyncFunc();
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
            log("limitPageMatch: \n" + limitPageMatch);
            let pageUrl;
            if (limitPageMatch != null) {
                let totalPics = limitPageMatch.match(/\d+(?=<\/)/g);
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
    }).start();

    /* --------------------------------------------xartmodel.net---------------------------------------- */

    injectBtns().domain(site.xartmodel.hostnames).removeAD(function () {
        setInterval(function () {
            $(".penci-rlt-popup").remove();
            $("#navigation").css("position", "unset");
            $("iframe").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        // debugger
        activateFancyBox();
        $('.wp-block-media-text').next().nextAll().hide();
        //android
    }, function () {
        $('.wp-block-media-text').next().nextAll().show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        pageUrls.push(window.location.pathname);
        $('.wp-block-media-text').after(injectComponent);
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find(".inner-item-masonry-gallery img");
        $(item).each(function () {
            let src = $(this).attr("src");
            src = src.replace(/-\d*x.*/g, ".webp");
            imgE.push($(`<img src=${src}>`));
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images'
        });
    }).start();

    /* --------------------------------------------hotgirl.asia----------------------------------------- */

    injectBtns().domain(site.hotgirl.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('#myimg').hide();
        $('#pagination').hide();
        //android
    }, function () {
        $('#myimg').show();
        $('#pagination').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/\/.*?\//m);
        log("match: \n", match);
        if (match) {
            let totalPageCnt = 1;
            let partPreUrl = match[0];
            let pageId = '';
            let suffixUrl = '/';
            let limitPageMatch = $('#pagination').prop("outerHTML");
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
                    pageUrl = partPreUrl + pageId + i + suffixUrl;
                }
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
            }
            $('#myimg').parent().prepend(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find("#myimg img");
        $(item).each(function () {
            let src = $(this).attr("src");
            imgE.push($(`<img src=${src}>`));
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------hotgirlchina.com------------------------------------- */

    injectBtns().domain(site.hotgirlchina.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
            $("header#header").css("position", "unset");
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.entry-inner').hide();
        $('.pagination').hide();
        //android
    }, function () {
        $('.entry-inner').show();
        $('.pagination').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/\/.*?\//m);
        log("match: \n", match);
        if (match) {
            let totalPageCnt = 1;
            let partPreUrl = match[0];
            let pageId = '';
            let suffixUrl = '/';
            let limitPageMatch = $('.pagination').prop("outerHTML");
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
                    pageUrl = partPreUrl + pageId + i + suffixUrl;
                }
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
            }
            $('.entry').prepend(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find(".entry-inner img");
        $(item).each(function () {
            let src = $(this).attr("src");
            imgE.push($(`<img src=${src}>`));
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------blog.baobua.com-------------------------------------- */

    injectBtns().domain(site.baobua.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.article-body').hide();
        //android
    }, function () {
        $('.article-body').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        pageUrls.push(currentPathname);
        $('.article-tldr').after(injectComponent);
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find(".article-img a");
        $(item).each(function () {
            let src = $(this).attr("href");
            imgE.push($(`<img src=${src}>`));
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------buondua.com------------------------------------------ */

    injectBtns().domain(site.buondua.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
            $("#popUpLinks a").css("color", "black");
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.article-fulltext').hide();
        $('.pagination').hide();
        //android
    }, function () {
        $('.article-fulltext').show();
        $('.pagination').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/\/(.*)/m);
        log("match: \n", match);
        if (match) {
            let totalPageCnt = 1;
            let partPreUrl = match[1];
            let pageId = '';
            let suffixUrl = '';
            let limitPageMatch = $('.pagination').prop("outerHTML");
            log("limitPageMatch: " + limitPageMatch);
            let pageUrl;
            if (limitPageMatch != null) {
                let totalPics = limitPageMatch.match(/\d+(?=(|\s+)\<\/a\>)/g);
                totalPageCnt = Math.max.apply(null, totalPics);
                log('totalPageCnt: ', totalPageCnt);
            }
            for (let i = 1; i <= totalPageCnt; i++) {
                if (i == 1) {
                    pageUrl = partPreUrl + pageId + suffixUrl;
                } else {
                    pageUrl = partPreUrl + pageId + '?page=' + i + suffixUrl;
                }
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
            }
            $('.article-tags').first().after(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find(".article-fulltext img").clone();
        $(item).each(function () {
            let src = $(this).attr("src");
            imgE.push($(`<img src=${src}>`));
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------www.4kup.net----------------------------------------- */

    injectBtns().domain(site._4kup.hostnames).removeAD(function () {
        setInterval(() => {
            $("#popUpLinks a").css("color", "black");
            $("#top-menu").css("position", "unset");
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('#gallery').hide();
        //android
    }, function () {
        //$('#gallery').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        pageUrls.push(currentPathname.match(/(?<=\/).*/g)[0]);
        $('#gallery').prev().after(injectComponent);
    }).collectPics(function (doc) {
        debugger
        doc = document.getElementById("gallery").querySelectorAll('.thumb-photo');
        log("doc \n", doc);
        let imgE = [];
        let item = [];
        for (let i = 0; i < doc.length; i++) {
            item.push(doc[i].href);
        }
        log("AAAA---: \n", item);
        item.forEach(function (item_) {
            imgE.push($(`<img src=${item_}>`));
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------goddess247.com--------------------------------------- */

    injectBtns().domain(site.goddess247.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.elementor-widget-container img').parent().hide();
        $('.ihc-locker-wrap').hide();
        //android
    }, function () {
        $('.elementor-widget-container img').parent().show();
        $('.ihc-locker-wrap').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        pageUrls.push(currentPathname);
        $('.elementor-widget-container img').parent().prev().after(injectComponent);
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find(".aligncenter");
        debugger
        $(item).each(function () {
            let src = $(this).attr("src");
            // log("src :",src);
            if (/data:image/.test(src)) {
            } else {
                imgE.push($(`<img src=${src}>`));
            }
        });
        log("imgE: \n" + imgE);
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------www.ilovexs.com-------------------------------------- */

    injectBtns().domain(site.ilovexs.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        curSite.isAdjustDomainName = true;
        $('.entry-content img').hide();
    }, function () {
        // $('.entry-content img').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        debugger
        if (!(match[0] === '')) {
            pageUrls.push(currentPathname);
            if ($('.entry-header').length > 1) { } else {
                $('.entry-header').after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let item = $(doc).find(".entry-content img");
        return item;
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------mitaku.net------------------------------------------- */

    injectBtns().domain(site.mitaku.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.msacwl-slider-wrap').hide();
    }, function () {
        $('.msacwl-slider-wrap').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/)(.*?)(?=\/)/g)
        log("match: ", match);
        if (!isEmpty(match) && !/page|category/g.exec(match[0])) {
            pageUrls.push(currentPathname);
            $('.entry-content p').last().after(injectComponent);
        }
    }).collectPics(function (doc) {
        let item = $(doc).find(".msacwl-slider-wrap img");
        return item;
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------www.nlegs.com---------------------------------------- */

    injectBtns().domain(site.nlegs.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $(".thumbnail").parent().hide();
    }, function () {
        $(".thumbnail").parent().show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/)girl.*/m);
        log("match: \n", match);
        if (!(match[0] === '')) {
            // let totalPageCnt = 1;
            // let partPreUrl = match[0];
            // let pageId = '';
            // let suffixUrl = '.html';
            // let limitPageMatch = $('.pagination').prop("outerHTML");
            // log("limitPageMatch: " + limitPageMatch);
            // let pageUrl;
            // if (limitPageMatch != null) {
            //     let totalPics = limitPageMatch.match(/\d+(?=(|\s+)\<\/a\>)/g);
            //     totalPageCnt = Math.max.apply(null, totalPics);
            //     log('totalPageCnt', totalPageCnt);
            // }
            // for (let i = 1; i <= totalPageCnt; i++) {
            //     if (i == 1) {
            //         pageUrl = partPreUrl + pageId + suffixUrl;
            //     } else {
            //         pageUrl = partPreUrl + pageId + "/" + i + suffixUrl;
            //     }
            //     log('push pageUrl:\n', pageUrl);
            //     pageUrls.push(pageUrl);
            // }
            pageUrls.push(match);
            $('.title').first().parent().after(injectComponent);
        }
    }).collectPics(async function (doc) {
        let item = $(doc).find(".thumbnail");
        let aImgS = [];
        let locateIndex = 0;
        $.each(item, function (index, value) {
            let src = $(value).attr("href");
            src = window.location.origin + src;
            aImgS.push({ "src": src, "value": value, "index": index });
        });
        function parseImgsFunc(item, imgTagDict) {
            let imgContainerCssSelector = '#c_' + 0;
            $(".sl-c-pic").remove();
            if (imgStyleFunc) {
                imgStyleFunc(item);
            } else {
                item.style = "width: 100%;height: 100%";
            }
            item.attr({ 'label': 'sl', "tabindex": "-1", "id": "imgLocation" + locateIndex });
            locateIndex++;
            $(imgContainerCssSelector).append(item.prop('outerHTML'));
            log("outerHTML:\n", item.prop("outerHTML"));
            if (!item.prop("outerHTML")) {
                $(imgContainerCssSelector).append(imgTagDict.value);
                console.error("部分图片丢失！！！\n添加原生模糊图片 # ", imgTagDict.value);
            }
        }
        function imgStyleFunc(imgE) {
            $(imgE).attr({
                'data-fancybox': 'images',
                'width': '100%'
            });
        }
        await new Promise((resolve) => {
            let num = 0;
            for (let i = 0; i < aImgS.length; i++) {
                let pageUrl = aImgS[i].src;
                Alpha_Script.obtainHtml({
                    url: pageUrl,
                    headers: Alpha_Script.parseHeaders(
                        "Accept:application/.*\n" +
                        "cookie:" + document.cookie + "\n" +
                        'User-Agent' + navigator.userAgent + "\n"
                    ),
                    method: 'GET',
                    onload: function (response) {
                        try {
                            if (response && response.status && response.status >= 200 && response.status < 300) {
                                let html = response.responseText;
                                let parser = new DOMParser();
                                let doc = parser.parseFromString(html, "text/html");
                                let item = $(doc).find(".img-res");
                                parseImgsFunc(item, aImgS[i]);
                                num++;
                                if (num === aImgS.length) {
                                    resolve();
                                }
                            }
                        } catch (error) {
                            err('处理获取到的图片网页时出现问题，请检查！', e, response.responseText);
                        }
                    },
                    onerror: function (response) {
                        log('URL：' + pageUrl, response)
                    }
                });
            }
        });
    }).start();

    /* --------------------------------------------nudecosplaygirls.com--------------------------------- */

    injectBtns().domain(site.nudecosplaygirls.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
            $("#popUpLinks a").css("color", "black");
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.g1-content-narrow').hide();
    }, function () {
        // $('.g1-content-narrow').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $('.entry-header').first().after(injectComponent);
        }
    }).collectPics(function (doc) {
        let item = $(doc).find(".g1-content-narrow img");
        debugger
        return item;
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------nudebird.biz----------------------------------------- */

    injectBtns().domain(site.nudebird.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.entry-content').hide();
    }, function () {
        //$('.entry-content').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $('.tags').first().after(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = [];
        let item = $(doc).find(".entry-content img");
        debugger
        $(item).each(function () {
            if (/lazy/.test(this.className)) { } else {
                let src = $(this).attr("src");
                imgE.push($("<img src=" + src + "></img>"));
            }
        });
        debugger
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------idol.gravureprincess.date---------------------------- */

    injectBtns().domain(site.gravureprincess.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $(".separator img").slice(1).hide();
    }, function () {
        // $('.g1-content-narrow').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $(".separator").first().after(injectComponent);
        }
    }).collectPics(function (doc) {
        let item = $(doc).find(".separator img").slice(1);
        return item;
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------asdasfd.net------------------------------------------ */

    injectBtns().domain(site.asdasfd.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $("figure").hide();
        $(".kt-tabs-title-list").hide();
    }, function () {
        $('figure').show();
        $(".kt-tabs-title-list").show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $(".kt-tabs-title-list").parent().prepend(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find("div.kt-tabs-content-wrap img");
        debugger
        $(item).each(function () {
            if (/lazy/.test(this.className)) { } else {
                let src = $(this).attr("data-orig-file");
                imgE.push($("<img src=" + src + "></img>"));
            }
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------yellowfever18.com------------------------------------ */

    injectBtns().domain(site.yellowfever18.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
            $(".jnews-cookie-law-policy").remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $(".default-view").hide();
        $("div[id^=ngg-image]").hide();
    }, function () {
        $('.default-view').show();
        $("div[id^=ngg-image]").show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $(".default-view").parent().prepend(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find(".ngg-gallery-thumbnail a");
        $(item).each(function () {
            let src = $(this).attr("href");
            imgE.push($("<img src=" + src + "></img>"));
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------allasiangirls.net------------------------------------ */

    injectBtns().domain(site.allasiangirls.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
            $(".heateor_sss_sharing_ul").remove();
            $(".row.align-equal.align-center").hide();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $(".aligncenter").hide();
        $("#comments").hide();
    }, function () {
        $('.aligncenter').show();
        $("#comments").show();
        $(".row.align-equal.align-center").show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            if ($("div[style^='text-align: center;']").length > 0) {
                $("div[style^='text-align: center;']").first().after(injectComponent);
            } else {
                $(".heateor_sss_sharing_title").first().after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find(".aligncenter");
        debugger
        $(item).each(function () {
            if (/lazy/.test(this.className)) { } else {
                let src = $(this).attr("src");
                imgE.push($("<img src=" + src + "></img>"));
            }
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------asdcosplay.com--------------------------------------- */

    injectBtns().domain(site.asdcosplay.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $(".entry-content").hide();
    }, function () {
        $('.entry-content').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $(".entry-header").after(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find("figure a");
        $(item).each(function () {
            let src = $(this).attr("href");
            imgE.push($("<img src=" + src + "></img>"));
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------asianpink.net---------------------------------------- */

    injectBtns().domain(site.asianpink.hostnames).removeAD(function () {
        setInterval(function () {
            $("[src*='.gif']").parent().remove();
            $(".elementor-grid").remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $(".e-gallery-item").parent().hide();
    }, function () {
        $(".e-gallery-item").parent().show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $("div[data-elementor-type^=wp]>section").first().after(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find(".e-gallery-item");
        $(item).each(function () {
            let src = $(this).attr("href");
            imgE.push($("<img src=" + src + "></img>"));
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------ryuryu.tw-------------------------------------------- */

    injectBtns().domain(site.ryuryu.hostnames).removeAD(function () {
        setInterval(function () {
            $(".viewport").prevAll().hide();
            $("[src*='.gif']").parent().remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $("article>section").hide();
        $("#ghost-portal-root").hide();
        $(".article-image").hide();
    }, function () {
        $("#ghost-portal-root").show();
        $("article>section").show();
        $(".article-image").show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        if (match[0] !== '') {
            pageUrls.push(match);
            $("article>header").append(injectComponent);
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find("figure img");
        $(item).each(function () {
            let src = $(this).attr("src");
            imgE.push($("<img src=" + src + "></img>"));
        });
        return $(imgE);
    }, function (imgE) {
        $(imgE).attr({
            'data-fancybox': 'images',
            'width': '100%'
        });
    }).start();

    /* --------------------------------------------www.xinwenba.net------------------------------------- */

    injectBtns().domain(site.xinwenba.hostnames).switchAggregationBtn(function () {
        activateFancyBox(1);
        imagePluginSwitch[0].isOpenAutoSlidingPosition = true;
        $('.picture').hide();
        $('div.web').hide();
        $('div.paging').hide();
        //android
        $('.view_img p').hide();
    }, function () {
        $('.picture').show();
        $('div.paging').show();
        //android
        $('.view_img p').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*(?=-)/m);
        log("match: \n", match);
        if (match) {
            let totalPageCnt = 1;
            let partPreUrl = match[0];
            let pageId = '-';
            let suffixUrl = '.html';
            let limitPageMatch = $('.paging').prop("outerHTML");
            log("limitPageMatch: " + limitPageMatch);
            let pageUrl;
            if (limitPageMatch != null) {
                // let totalPics = limitPageMatch.match(/\d+(?=<\/a>)/g);
                // totalPageCnt = Math.max.apply(null, totalPics);
                totalPageCnt = limitPageMatch.match(/(?<=共)\d+/g);
                log('totalPageCnt', totalPageCnt[0]);
            }
            for (let i = 1; i <= totalPageCnt; i++) {
                pageUrl = partPreUrl + pageId + i + suffixUrl;
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
            }
            if (os.isPc) {
                $('.info').after(injectComponent);
            } else {
                $('.text').after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let imgE;
        imgE = $(doc).find(".view_img img");
        return imgE;
    }, function (imgE) {
        imgE.style = "width: 100%;";
        $(imgE).attr({
            'data-fancybox': 'images'
        });
    }).start();

    /* --------------------------------------------www.meitu131.com------------------------------------- */

    injectBtns().domain(site.meitu131.hostnames).switchAggregationBtn(function () {
        activateFancyBox();
        $('.work-content>p').hide();
        $('div#pages').hide();
        //android
        $('.uk-article-bd').hide();
        $('.uk-page').hide();
    }, function () {
        $('.work-content>p').show();
        $('div#pages').show();
        //android
        $('.uk-article-bd').show();
        $('.uk-page').show();
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/)(.+?\/)(\d+).*/m);
        log("match: \n", match);
        if (match[1] === 'meinv/') {
            let totalPageCnt = 1;
            let partPreUrl = match[1];
            let pageId = match[2];
            let suffixUrl = '.html';
            let limitPageMatch = null;
            if (os.isPc) {
                limitPageMatch = $('div#pages').prop("outerHTML");
            } else {
                limitPageMatch = $('.uk-page').prop("outerHTML");
            }
            log("limitPageMatch: " + limitPageMatch);
            let pageUrl;
            if (limitPageMatch != null) {
                let totalPics = limitPageMatch.match(/\d+(?=<\/a>|<\/span>)/g);
                totalPageCnt = Math.max.apply(null, totalPics);
                log('totalPageCnt', totalPageCnt);
            }
            for (let i = 0; i <= totalPageCnt; i++) {
                if (i === 0) {
                    pageUrl = partPreUrl + pageId;
                } else {
                    pageUrl = partPreUrl + pageId + '/index_' + i + suffixUrl;
                }
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
            }
            if (os.isPc) {
                $('.work-content').prepend(injectComponent);
            } else {
                GM_addStyle('div#c_container{padding:5px 10px}');
                $('.uk-article').after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let imgE;
        imgE = $(doc).find('p[align="center"] img');
        return imgE;
    }, function (imgE) {
        if (os.isPc) {
            imgE.style = "max-width: 1100px;max-height: 1500px;vertical-align: middle;";
        } else {
            imgE.style = "padding: 5px; background-color: #fff;width: 100%;";
        }
        $(imgE).attr({
            'data-fancybox': 'images'
        });
    }).start();

    /* --------------------------------------------dongtidemi.com--------------------------------------- */

    injectBtns().domain(site.dongtidemi.hostnames).removeAD(function () {
        setInterval(function () {
            $("div[class^=wpcom_myimg]").remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox(1);
        $('.entry-content').hide();
        //android
    }, function () {
        $('.entry-content').show();
        //android
    }).injectAggregationRef(function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        if (currentPathname) {
            let pageUrl;
            let PageMatch = null;
            let pageMatch = $('.entry-head').prop("outerHTML");
            log("pageMatch: " + pageMatch);
            let skip = /福利汇/g.exec(pageMatch);
            log("skip: \n", skip);
            if (isEmpty(skip)) {
                pageUrl = currentPathname;
                log('push pageUrl:\n', pageUrl);
                pageUrls.push(pageUrl);
                $('.entry-head').after(injectComponent);
            }
        }
    }).collectPics(function (doc) {
        let imgE = []
        let item = $(doc).find(".entry-content img");
        $(item).each(function () {
            let src = $(this).attr("data-original");
            if (!isEmpty(src)) {
                imgE.push($("<img src=" + src + "></img>"));
            }
        });
        return $(imgE);
    }, function (imgE) {
        imgE.style = "width: 100%;";
        $(imgE).attr({
            'data-fancybox': 'images'
        });
    }).start();

    /* --------------------------------------------www.cool18.com-------------------------------------- */

    injectBtns().domain(site.cool18.hostnames).removeAD(function () {
        setInterval(function () {
            $(".img_ad_list").remove();
        }, 100);
    }).switchAggregationBtn(function () {
        activateFancyBox();
        curSite.isAdjustDomainName = true;
        $('div pre').hide();
        $('.show_content pre center').hide();
        //android
        $('.article-content').hide();
    }, function () {
        $('div pre').show();
        $('.show_content pre center').show();
        //android
        $('.article-content').show();
    }).injectAggregationRef(async function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        let search = window.location.search;
        if (match) {
            let pageUrl;
            pageUrl = match[0] + search;
            log('push pageUrl:\n', pageUrl);
            pageUrls.push(pageUrl);
            if (os.isPc) {
                $('.show_content pre').prepend(injectComponent);
            } else {
                if (/app=index/.test(location.search)) {
                    $('.article-head').after(injectComponent);
                } else {
                    $('div pre').parent().prepend(injectComponent);
                }
            }
        }
        GM_addStyle('div#c_container{display:block;text-align:-webkit-center}');
        let id = setInterval(function () {
            let item = $("#c_container");
            if (item) {
                log("item #", item);
                clearInterval(id);
                let imgs = $(document).find("#shownewsc img");
                if (imgs.length === 0) {
                    imgs = $(document).find(".show_content img");
                }
                log("imgs #", imgs);
                $.each(imgs.clone(), function (index, value) {
                    // log("value #", value);
                    $(value).attr({ 'label': "sl", 'data-fancybox': 'images', 'id': 'imgLocation' + index })
                    item.append($(value));
                });
            }
        }, 100);
    }).collectPics(function (doc) {
    }, function (imgE) {
    }).start();

    /* --------------------------------------------mm.tvv.tw------------------------------------------- */

    injectBtns().domain(site.tvvtw.hostnames).removeAD(function () {
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.blog-details-text').hide();
        //android
    }, function () {
        $('.blog-details-text').show();
        //android
    }).injectAggregationRef(async function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        let search = window.location.search;
        if (match) {
            let pageUrl;
            pageUrl = match[0] + search;
            log('push pageUrl:\n', pageUrl);
            pageUrls.push(pageUrl);
            $('.blog-date').first().after(injectComponent);
        }
        GM_addStyle('*{-webkit-box-sizing:unset;-moz-box-sizing:unset;box-sizing:unset;-webkit-transition-timing-function:unset;-moz-transition-timing-function:unset;-o-transition-timing-function:unset;transition-timing-function:unset;-webkit-transition-duration:unset;-moz-transition-duration:unset;-o-transition-duration:unset;transition-duration:unset}');
        let id = setInterval(function () {
            let item = $("#c_container");
            if (item) {
                log("item #", item);
                clearInterval(id);
                let imgs = $(document).find(".blog-details-text img");
                log("imgs #", imgs);
                $.each(imgs.clone(), function (index, value) {
                    // log("value #", value);img[label="sl"]
                    $(value).attr({ 'label': "sl", 'data-fancybox': 'images', 'id': 'imgLocation' + index });
                    $(value).removeAttr("data-cfsrc class");
                    item.append($(value));
                });
            }
        }, 100);
    }).collectPics(function (doc) {
    }, function (imgE) {
    }).start();

    /* --------------------------------------------www.f4mn.com---------------------------------------- */

    injectBtns().domain(site.f4mm.hostnames).removeAD(function () {
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('#masonry').hide();
        //android
    }, function () {
        $('#masonry').show();
        //android
    }).injectAggregationRef(async function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        let search = window.location.search;
        if (match) {
            let pageUrl;
            pageUrl = match[0] + search;
            log('push pageUrl:\n', pageUrl);
            pageUrls.push(pageUrl);
            $('.alert.alert-dismissible.alert-light.mx-auto.d-block').first().after(injectComponent);
        }
        let id = setInterval(function () {
            let item = $("#c_container");
            if (item) {
                log("item #", item);
                clearInterval(id);
                let imgs = $(document).find("#masonry>div");
                log("imgs #", imgs);
                $.each(imgs.clone(), function (index, value) {
                    // log("value #", value);
                    let img = $(value).find('img');
                    let src = img.attr('data-src');
                    log(' # src', src);
                    img.attr({ 'label': "sl", 'src': src });
                    $(value).attr({ "data-fancybox": "images", 'id': 'imgLocation' + index });
                    item.append($(value));
                });
            }
        }, 100);
    }).collectPics(function (doc) {
    }, function (imgE) {
    }).start();

    /* --------------------------------------------www.446m.com---------------------------------------- */

    injectBtns().domain(site._446m.hostnames).removeAD(function () {
    }).switchAggregationBtn(function () {
        activateFancyBox();
        curSite.isAdjustDomainName = true;
        $('.post-content p').hide();
        //android
    }, function () {
        $('.post-content p').show();
        //android
    }).injectAggregationRef(async function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        let search = window.location.search;
        if (match) {
            let pageUrl;
            pageUrl = match[0] + search;
            log('push pageUrl:\n', pageUrl);
            pageUrls.push(pageUrl);
            $('.post-content p').parent().prepend(injectComponent);
        }
        let id = setInterval(function () {
            let item = $("#c_container");
            if (item) {
                log("item #", item);
                clearInterval(id);
                let imgs = $(document).find(".post-content p>span");
                log("imgs #", imgs);
                $.each(imgs.clone(), function (index, value) {
                    // log("value #", value);
                    let img = $(value).find('img');
                    let src = img.attr('data-original');
                    log(' # src', src);
                    img.attr({ 'label': "sl", 'src': src });
                    $(value).attr({ "data-fancybox": "images", 'id': 'imgLocation' + index });
                    item.append($(value));
                });
            }
        }, 100);
    }).collectPics(function (doc) {
    }, function (imgE) {
    }).start();

    /* --------------------------------------------www.elitebabes.com---------------------------------- */

    injectBtns().domain(site.elitebabes.hostnames).removeAD(function () {
    }).switchAggregationBtn(function () {
        activateFancyBox();
        $('.list-gallery.a.css').hide();

        //android
    }, function () {
        $('.list-gallery.a.css').show();

        //android
    }).injectAggregationRef(async function (injectComponent, pageUrls) {
        let currentPathname = window.location.pathname;
        log("currentPathname: \n", currentPathname);
        let match = currentPathname.match(/(?<=\/).*/m);
        log("match: \n", match);
        let search = window.location.search;
        if (match) {
            let pageUrl;
            pageUrl = match[0] + search;
            log('push pageUrl:\n', pageUrl);
            pageUrls.push(pageUrl);
            $('.list-gallery.a.css').prev().after(injectComponent);
        }
        GM_addStyle('input[type=button]{float:unset!important;text-align:center}#c_container img{width:100%}input{width:unset!important}');
        Get('https://cdn.jsdelivr.net/gh/LARASPY/xhua@master/other/elitebabes/icons/icomoon.woff2');
        if (/^\/$|^\/(members|archive|random|latest-updates|top-rated-babes|discover|videos)\//img.test(location.pathname)) {
            addStyle(null, 'https://cdn.jsdelivr.net/gh/LARASPY/xhua@master/other/elitebabes/elitebabes_origin.css');
        } else {
            addStyle(null, 'https://cdn.jsdelivr.net/gh/LARASPY/xhua@master/other/elitebabes/elitebabes.css');
        }
        let id = setInterval(function () {
            let item = $("#c_container");
            if (item) {
                log("item #", item);
                clearInterval(id);
                let imgs = $(document).find(".list-gallery.a.css a");
                log("imgs #", imgs);
                $.each(imgs.clone(), function (index, value) {
                    // log("value #", value);
                    let aTag = $(value);
                    let img = aTag.find('img');
                    let src = aTag.attr('href');
                    img.attr({ 'label': "sl", "src": src });
                    aTag.attr({ "data-fancybox": "images", 'id': 'imgLocation' + index });
                    aTag.removeAttr("srcset sizes alt");
                    img.removeAttr("srcset sizes alt");
                    item.append(aTag);
                });
            }
        }, 100);
    }).collectPics(function (doc) {
    }, function (imgE) {
    }).start();
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