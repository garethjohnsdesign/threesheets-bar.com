// 1. Smooth Scroll
// ----------------

$('.menu__sub-navigation a').smoothScroll({
  offset: -32,
  easing: 'linear',
});

// 2. Carousel
// -----------

$('.carousel').flickity({
cellAlign: 'left',
wrapAround: true,
pageDots: false,
imagesLoaded: true,
percentPosition: false,
arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

// 3. Animate on Scroll
// --------------------

$(window).on('resize', function () { AOS.refresh(); });
$(window).on('load', function() { setTimeout(AOS.refreshHard, 150); });

$(document).ready(function () {
  AOS.init({ 
   startEvent: 'load', 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600,  once: false });            
});


$(document).foundation();