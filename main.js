/* WorkSpeak: URL reutilizável; os links no HTML também funcionam sem JS. */
const CONFIG = {
  READINESS_MAP_URL: "https://workspeak-readiness-map.netlify.app",
};

(function () {
  "use strict";
  document.querySelectorAll('[data-config="READINESS_MAP_URL"]').forEach((el) => {
    el.setAttribute("href", CONFIG.READINESS_MAP_URL);
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
    document.documentElement.classList.add("reveal-enabled");
  }

  const sticky = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero");
  const final = document.querySelector(".section-final");
  if (sticky && hero && final && "IntersectionObserver" in window) {
    let heroVisible = true;
    let finalVisible = false;
    const ctaIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === final) finalVisible = entry.isIntersecting;
      });
      // hidden also removes the off-screen link from keyboard navigation.
      sticky.hidden = heroVisible || finalVisible;
    }, { threshold: 0 });
    ctaIo.observe(hero);
    ctaIo.observe(final);
  }
})();
