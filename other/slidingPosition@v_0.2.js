let slideIndex = null;

let isDebugMain = false;
function log_() {
  if (isDebugMain) {
    console.log.apply(this, arguments);
  }
}

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
const ContentContainer = document.querySelector("body");
const configObserver = {
  childList: true,
  subtree: true,
  attributeFilter: ["class"],
};
// 当观察到突变时执行的回调函数
const callbacks = function (mutationsList) {
  mutationsList.forEach(function (item, index) {
    // log_(' # ',type(item.type) + " " + item.type);
    if ("attributes" === item.type) {
      if (
        item.target.className ===
        "fancybox__carousel is-draggable"
      ) {
        log_(' # ', item);
        openEvent(item);
      } else if (
        item.target.className ===
        "fancybox__container is-animated is-closing"
      ) {
        log_(' # ', item);
        closeEvent();
      }
    }
  });
};
// 创建一个链接到回调函数的观察者实例
const Observer = new MutationObserver(callbacks);
ContentContainer && Observer.observe(ContentContainer, configObserver);
function openEvent(item) {
  slideIndex =
    item.target.offsetParent.childNodes[1].firstChild.firstChild
      .childNodes[0].innerText - 1;
  if (slideIndex) {
    log_("open - # " + slideIndex + " slide is open!");
  }
}
function closeEvent() {
  log_("close - # " + slideIndex + " slide is closed!");
  let elementById = document.getElementById("imgLocation" + slideIndex);
  if (elementById) {
    elementById.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "center",
    });
  } else {
    console.error(" # ", "未定位id！");
  }
}

new Promise(function (resolve) {
  let id = setInterval(() => {
    if (Fancybox4) {
      clearInterval(id);
      resolve();
    }
  }, 100);
}).then(function () {
  Fancybox4.bind("[data-fancybox='images']", {
    Thumbs: { Carousel: { fill: false, center: true } }
  });
});
