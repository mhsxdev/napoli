(function () {
  "use strict";

  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (document.querySelector(".fork-cursor")) return;

  var svg =
    '<svg viewBox="139 83 225 349" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path fill="#000" fill-rule="evenodd" d="M336.7 430.9C328.0 429.5 326.4 426.6 273.2 320.0C229.2 231.7 230.0 233.2 221.2 223.9C215.6 217.9 213.1 216.2 203.6 211.6C190.8 205.4 188.7 203.5 182.4 192.0C173.0 174.8 142.0 113.3 140.5 108.9L139.0 104.5L141.0 106.8C142.1 108.1 148.7 118.7 155.6 130.3C177.3 166.4 189.5 184.0 192.9 184.0C195.4 184.0 195.0 180.8 191.8 173.3C188.6 166.1 185.5 160.4 164.5 124.0C155.7 108.7 150.8 98.9 151.6 98.1C152.5 97.1 155.7 102.0 170.7 127.0C186.8 154.1 196.3 168.8 201.0 173.8C204.7 177.9 207.6 177.8 207.2 173.5C206.8 170.2 198.7 152.5 193.1 143.0C172.4 107.7 164.7 93.5 165.2 91.3C165.7 88.6 169.2 94.1 195.0 138.0C207.7 159.7 214.5 169.0 217.7 169.0C221.7 169.0 216.2 155.1 201.8 129.0C197.7 121.6 190.4 108.4 185.5 99.7C170.7 73.2 176.1 78.9 200.2 115.5C232.0 163.8 236.2 170.6 237.7 176.3C238.7 180.2 238.7 183.3 237.8 190.9C235.5 210.5 239.3 219.1 270.5 265.0C328.2 349.9 361.4 400.9 363.1 407.2C366.6 420.5 352.1 433.5 336.7 430.9Z"/>' +
    "</svg>";

  var el = document.createElement("div");
  el.className = "fork-cursor";
  el.innerHTML = svg;
  document.body.appendChild(el);
  document.documentElement.classList.add("fork-cursor-on");

  var box = el.getBoundingClientRect();
  var hotX = box.width * 0.094;
  var hotY = box.height * 0.039;

  var x = 0,
    y = 0,
    queued = false;

  function draw() {
    queued = false;
    el.style.transform =
      "translate3d(" + (x - hotX) + "px," + (y - hotY) + "px,0)";
  }

  document.addEventListener(
    "mousemove",
    function (e) {
      x = e.clientX;
      y = e.clientY;
      el.classList.add("is-visible");
      if (!queued) {
        queued = true;
        requestAnimationFrame(draw);
      }
    },
    { passive: true },
  );

  document.addEventListener("mousedown", function () {
    el.classList.add("is-down");
  });
  document.addEventListener("mouseup", function () {
    el.classList.remove("is-down");
  });

  document.documentElement.addEventListener("mouseleave", function () {
    el.classList.remove("is-visible");
  });
  document.documentElement.addEventListener("mouseenter", function () {
    el.classList.add("is-visible");
  });
})();
