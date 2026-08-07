// Navbar collapse toggle and back-to-top button, matching al-folio's behaviour
// without pulling in Bootstrap's JS.
(function () {
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.getElementById("navbarNav");

  if (toggler && collapse) {
    toggler.addEventListener("click", function () {
      var isOpen = collapse.classList.toggle("show");
      toggler.classList.toggle("collapsed", !isOpen);
      toggler.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    var toggleBackToTop = function () {
      backToTop.classList.toggle("show", window.scrollY > 300);
    };

    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });

    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
