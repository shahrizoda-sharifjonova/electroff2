(() => {
  "use strict";
  !(function (e) {
    let t = new Image();
    (t.onload = t.onerror =
      function () {
        !(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        })(2 == t.height);
      }),
      (t.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
  })();
})();