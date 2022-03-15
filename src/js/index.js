import $ from 'jquery';


import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

global.jQuery = $;
global.$ = $;

$(".mobile-menu-toggle-button").click (function(){
    $("html").toggleClass("mobile-menu-open");
  });

// swiper
Swiper.use([Navigation, Pagination, Autoplay]);

$(".toggle-button").click (function(){
  $(this).parent().toggleClass('open'); 
});

$(".label").click (function(){
  $(this).parent().toggleClass('empty'); 
});

