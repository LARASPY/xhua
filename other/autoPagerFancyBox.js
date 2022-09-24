function log() {
  if (false) {
    console.log.apply(this, arguments);
  }
}

function addStateMent(head, type, src, textContent, setAttribute) {
  let statement = document.createElement(type);
  if (src && type === "script") {
    statement.src = src;
  } else if (type === "link") {
    statement.href = src;
  }
  if (textContent) statement.textContent = textContent;
  if (setAttribute) {
    // log(setAttribute);
    for (const [key, value] of Object.entries(setAttribute)) {
      statement.setAttribute(key, value);
    }
  }
  head.appendChild(statement);
}
function isMobile() {
  return (
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|MicroMessenger|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
      navigator.userAgent
    ) ||
    (window.screen.width < 500 && window.screen.height < 800)
  );
}
function fancyboxStart(document) {
  try {
    if (Fancybox !== undefined && $ !== undefined) {
      console.log("Fancybox && $ already exists!!!");
      return;
    }
  } catch (error) {
    console.log(error);
  }
  let head = document.getElementsByTagName("head")[0];
  let srcList = ["https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js"];
  let fancyboxCssArrr = [
    "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.31/dist/fancybox.css",
  ];
  let itemTpye = { rel: "stylesheet" };
  new Promise(function (resolve, reject) {
    let id = setInterval(function () {
      srcList.push(
        "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.31/dist/fancybox.umd.js"
      );
      for (var src of srcList) {
        addStateMent(head, "script", src);
      }
      console.log("waiting...");
      if (Fancybox && $) {
        console.log("Fancybox && $ Initialization succeeded!!!");
        clearInterval(id);
        resolve();
      }
    }, 100);
  })
    .then(function () {
      let fancyBoxCssAdditon = `
      a[data-fancybox] img{cursor:zoom-in}
      .fancybox__container{--carousel-button-bg:rgb(0 0 0 / 44%);--carousel-button-svg-width:24px;--carousel-button-svg-height:24px;--carousel-button-svg-stroke-width:2.5;--carousel-button-svg-filter:none}
      .fancybox__nav{--carousel-button-svg-width:22px;--carousel-button-svg-height:22px;--carousel-button-svg-stroke-width:3}
      .fancybox__nav .carousel__button.is-prev{left:30px}
      .fancybox__nav .carousel__button.is-next{right:30px}
      .carousel__button.is-close{top:30px;right:30px}
      .fancybox__slide{padding:0}
      .fancybox__thumbs{position:absolute;bottom:0;left:0;right:0;z-index:10}
      .fancybox__thumbs .carousel__slide{padding:20px 10px;overflow:visible}
      .fancybox__thumb{border-radius:6px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.3),0 2px 4px -1px rgba(0,0,0,0.26)}
      .is-nav-selected .fancybox__thumb{transform:scale(1.25)}
      .is-nav-selected .fancybox__thumb::after{display:none}`;
      addStateMent(head, "link", fancyboxCssArrr[0], null, itemTpye);
      if (!isMobile()) {
        addStateMent(head, "style", null, fancyBoxCssAdditon, itemTpye);
        return "PC OK";
      }
      return "Android OK";
    })
    .then(function (value) {
      console.log(value);
      let imagePluginSwitch = [
        {
          isViewerOpen: false,
          isFancyBox: true,
          isFancyBoxFullScreen: false,
          isFancyBoxAutoStartFalse: false,
        },
      ];
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
          // log(type(item.type) + " " + item.type);
          if ("attributes" === item.type) {
            if (
              item.target.className ===
              "fancybox__slide has-image can-zoom_in is-selected"
            ) {
              log(item);
              addEvent(item);
            } else if (
              item.target.className ===
              "fancybox__container is-animated is-closing"
            ) {
              log(item);
              destroyFun();
            }
          }
        });
      };
      // 创建一个链接到回调函数的观察者实例
      const Observer = new MutationObserver(Callbacks);
      ContentContainer && Observer.observe(ContentContainer, configObserver);
      function addEvent(item) {
        slideIndex =
          item.target.parentElement.parentElement.parentElement.parentElement
            .children[1].firstElementChild.firstElementChild.firstChild
            .innerText - 1;
        if (slideIndex) {
          log("open - # " + slideIndex + " slide is open!");
        }
      }
      function destroyFun(fancybox, slide) {
        log("close - # " + slideIndex + " slide is closed!");
        let elementById = document.getElementById("imgLocation" + slideIndex);
        if (elementById) {
          elementById.scrollIntoView({
            block: "center",
            behavior: "smooth",
            inline: "center",
          });
        } else {
          console.error("未定位id！");
        }
      }
      if (imagePluginSwitch[0].isFancyBox) {
        if (imagePluginSwitch[0].isFancyBoxFullScreen) {
          Fancybox.bind("[data-fancybox='autoPageImages']", {
            Toolbar: false,
            animated: false,
            dragToClose: false,
            showClass: false,
            hideClass: false,
            closeButton: "top",
            Image: {
              click: "close",
              wheel: "slide",
              zoom: false,
              fit: "cover",
            },
            Thumbs: { minScreenHeight: 0 },
          });
        } else if (imagePluginSwitch[0].isFancyBoxAutoStartFalse) {
          Fancybox.bind("[data-fancybox='autoPageImages']", {
            Thumbs: {
              autoStart: false,
              Carousel: { fill: false, center: true },
            },
          });
        } else {
          Fancybox.bind("[data-fancybox='autoPageImages']", {
            Thumbs: { Carousel: { fill: false, center: true } },
          });
        }
      }
    });
}
fancyboxStart(window.document);
