let slideIndex = 0;

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
      done: (fancybox, slide) => {
        slideIndex = fancybox.getSlide().index;
        console.log("#" + fancybox.getSlide().index + "slide is loaded!");
      },
      destroy: (fancybox, slide) => {
        console.log("#" + slideIndex + "slide is closed!");
        let elementById = document.getElementById("imgLocation" + slideIndex);
        if (!elementById) {
          elementById.scrollIntoView({
            block: "center",
            behavior: "auto",
            inline: "center"
          });
        }
      }
    }
  });
});
