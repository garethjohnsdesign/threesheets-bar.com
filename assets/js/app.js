// 1. Smooth Scroll
// ----------------

$(document).foundation();

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

/*
$(document).ready(function () {
  AOS.init({ 
   offset: 32,
   easing: 'ease-in-out-quart', 
   duration: 600,  once: false });            
});
*/

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});