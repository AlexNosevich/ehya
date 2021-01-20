$(document).ready(function() {
    var tabsItem = $('.tabs__item');
    var contentItem = $('.content__item');

    tabsItem.on('click', function(event){
        var activeContent = $(this).attr('data-target');
        tabsItem.removeClass('tabs__item-active');
        contentItem.removeClass('content__item-active');
        $(activeContent).addClass('content__item-active');
        $(this).addClass('tabs__item-active');
    });

});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })