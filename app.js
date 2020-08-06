// variables
const hamburger = document.querySelector(".menu-toggler");
const navbar = document.querySelector(".top-nav");
const topNav = document.querySelectorAll(".nav-link");
const btnFilter = document.querySelectorAll(".btn-filter");

// event listener
hamburger.addEventListener("click", function() {
    this.classList.toggle("open");
    navbar.classList.toggle("open");
});

topNav.forEach(function(item) {
    item.addEventListener("click", function() {
        hamburger.classList.remove("open");
        navbar.classList.remove("open");
    });
});

// scroll top
const scrollToTop = function() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 12);
    }
};
//   scrollToTop();

// animation
AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
});