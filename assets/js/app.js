$(document).foundation();

// $('body').removeClass('fade-out');

$('.menu__sub-navigation a').smoothScroll({
  offset: -32,
  easing: 'linear',
});

$(function() {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'is-animating'
  }).init();
})