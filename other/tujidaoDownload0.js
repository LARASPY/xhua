let srcList = [
  "https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js",
  "https://cdn.staticfile.org/jszip/3.1.5/jszip.min.js",
];

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
    let myregexp = /^([^:]+):(.*)$/gim;
    let match = /^([^:]+):(.*)$/gim.exec(headStr);
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
    return Object.prototype.toString.apply(value) === "[object Array]";
  },
};

function packageAndDownload() {
  let blobCache = {};
  let zip = new JSZip();
  let imgList = $('img[label="sl"]');
  let length = imgList.length;
  $.each(imgList, function (index, value) {
    // debugger
    let img = zip.folder(document.title);
    let imgSrc = $(value).attr("src");
    {
      if (blobCache[imgSrc]) {
        img.file(index + ".jpg", blobCache[imgSrc], {
          base64: false,
        });
        length--;
      } else {
        Alpha_Script.obtainHtml({
          url: imgSrc,
          method: "GET",
          headers: {
            Accept: "application/*",
            Referer: window.location.origin,
          },
          responseType: "blob",
          onload: function (response) {
            let responseHeaders = Alpha_Script.parseHeaders(
              response.responseHeaders
            );
            let contentType = responseHeaders["Content-Type"];
            if (!contentType) {
              contentType = "image/png";
            }
            let blob = new Blob([response.response], {
              type: contentType,
            });
            blobCache[imgSrc] = blob;
            img.file(index + ".jpg", blobCache[imgSrc], {
              base64: false,
            });
            length--;
          },
        });
      }
    }
  });
  let packagName = document.title;

  let id = setInterval(function () {
    if (length === 0) {
      clearInterval(id);
      zip
        .generateAsync({
          type: "blob",
        })
        .then(function (content) {
          saveAs(content, packagName + ".zip");
        });
    }
  }, 100);
}

function addStateMent(head, type, src, textContent, setAttribute) {
  let statement = document.createElement(type);
  if (src) statement.src = src;
  if (textContent) statement.textContent = textContent;
  if (setAttribute) {
    console.log(setAttribute);
    for (const [key, value] of Object.entries(setAttribute)) {
      statement.setAttribute(key, value);
    }
  }
  head.appendChild(statement);
}

function startDownloadTuJiDao() {
  let itemTpye = { name: "type", value: "text/css" };
  new Promise(function (resolve, reject) {
    let id = setInterval(function () {
      if (srcList) {
        srcList.push("https://cdn.jsdelivr.net/gh/CYqiang-sc/hello@master/fancybox.js");
        for (var src of srcList) {
          addStateMent(head, "script", src);
        }
        console.log("waiting...");
        if (fancyBoxCss && $) {
          console.log("FancyBoxCss && $ OK !!!");
          clearInterval(id);
          resolve();
        }
      }
    }, 100);
  }).then(function () {
    $("#packageBtn").bind("click", function (e) {
      packageAndDownload();
    });
    addStateMent(head, "script", null, fancyboxDefaultJs);
    addStateMent(head, "style", null, fancyBoxCss, itemTpye);
    if (os.isPc) {
      addStateMent(head, "style", null, fancyBoxCssAdditon, itemTpye);
    }
  });
}
