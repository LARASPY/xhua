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
const Callbacks = function (mutationsList) {
  mutationsList.forEach(function (item, index) {
    // log_(type(item.type) + " " + item.type);
    if ("attributes" == item.type) {
      if (
        item.target.className ==
        "fancybox__slide has-image can-zoom_in is-selected"
      ) {
        log_(item);
        addEvent(item);
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
      .children[1].firstElementChild.firstElementChild.firstChild.innerText - 1;
  if (slideIndex) {
    log_("open - # " + slideIndex + " slide is open!");
  }
}

function destroyFun(fancybox, slide) {
    log_("close - # " + slideIndex + " slide is closed!");
  let elementById = document.getElementById("imgLocation" + slideIndex);
  if (elementById) {
    elementById.scrollIntoView({
      block: "center",
      behavior: "auto",
      inline: "center",
    });
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
    Thumbs: { Carousel: { fill: false, center: true } },
    on: {
      destroy: (fancybox, slide) => {
        destroyFun(fancybox, slide);
      },
    },
  });
});
