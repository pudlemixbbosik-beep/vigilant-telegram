/**
 * Mobile navigation: toggle panel, close on link click / Escape.
 * Smooth scroll uses CSS scroll-behavior (reduced when prefers-reduced-motion).
 */
(function () {
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".site-nav__toggle");
  var panel = document.querySelector(".site-nav__panel");
  if (!nav || !toggle || !panel) return;

  var mq = window.matchMedia("(max-width: 42rem)");

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  panel.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function () {
      if (mq.matches) setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (!mq.matches) setOpen(false);
  });
})();
