 // Sticky Navbar and Scroll-to-Top Button
 window.onscroll = function () {
  var header = document.querySelector('.navbar');
  if (window.pageYOffset >= 50) {
    header.classList.add('sticky-navbar');
  } else {
    header.classList.remove('sticky-navbar');
  }

  // var backToTop = document.querySelector('.back-to-top');
  // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //   backToTop.style.display = 'flex';
  // } else {
  //   backToTop.style.display = 'none';
  // }
};