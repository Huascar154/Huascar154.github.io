let prevScrollPos = window.pageYOffset;
let header = document.getElementById("header");
let headerHeight = header.clientHeight;
let isScrollingUp = false;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll hacia arriba
    isScrollingUp = true;
  } else {
    // Scroll hacia abajo
    isScrollingUp = false;
  }

  prevScrollPos = currentScrollPos;

  if (isScrollingUp) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = `translateY(-${headerHeight}px)`;
  }
});

let label = document.querySelector('.label');
let nav = document.querySelector('nav');

label.addEventListener('click', function() {
  nav.style.zIndex = '1000';
});
