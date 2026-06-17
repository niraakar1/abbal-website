/* Abbal Dhakal — tiny, dependency-free enhancements. */
(function () {
  "use strict";

  // Seamless marquee: duplicate the row so the -50% scroll loops perfectly.
  document.querySelectorAll("[data-marquee] .marquee__row").forEach(function (row) {
    row.innerHTML += row.innerHTML;
  });

  // Reveal-on-scroll.
  var rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!rm && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    document.querySelectorAll(".svc, .step, .quote, .proj, .stats, .s-head")
      .forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
