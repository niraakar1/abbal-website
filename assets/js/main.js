/* Niraakar — small enhancements, no dependencies. */
(function () {
  "use strict";

  /* 1. Seamless marquee: clone the track so the -50% scroll loops perfectly. */
  document.querySelectorAll("[data-marquee]").forEach(function (m) {
    var track = m.querySelector(".marquee-track");
    if (!track) return;
    track.innerHTML += track.innerHTML; // duplicate logos for an unbroken loop
  });

  /* 2. Gentle reveal-on-scroll for sections. */
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".card, .quote, .project, .section-head, .results-inner")
      .forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
