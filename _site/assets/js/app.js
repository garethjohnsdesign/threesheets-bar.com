$(document).foundation();



$('.menu__sub-navigation a').smoothScroll({
  offset: -32,
  easing: 'linear',
});

$('.carousel').flickity({
cellAlign: 'left',
wrapAround: true,
pageDots: false,
imagesLoaded: true,
percentPosition: false,
arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

$(function() {
  var wow = new WOW({
    boxClass: 'wow',
    offset:       32, 
    animateClass: 'is-animating'
  }).init();
});