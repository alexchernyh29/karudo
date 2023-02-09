import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 1,
        navigation: {
            nextEl: ".slider__swiper-button-next-1",
            prevEl: ".slider__swiper-button-prev-1",
        },
    });
});

$('#list-1').click(function(){
    $('#item-1').slideToggle(300);
});

$('#list-2').click(function(){
    $('#item-2').slideToggle(300);
});

$('#list-3').click(function(){
    $('#item-3').slideToggle(300);
});

$('#list-4').click(function(){
    $('#item-4').slideToggle(300);
});

$('#list-5').click(function(){
    $('#item-5').slideToggle(300);
});

$('#list-6').click(function(){
    $('#item-6').slideToggle(300);
});

$('#list-7').click(function(){
    $('#item-7').slideToggle(300);
});

$('ul.tabs-case__tab-caption').on('click', 'li:not(.active)', function() {
    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs-case__tab').find('div.tabs-case__tab-content').removeClass('active').eq($(this).index()).addClass('active');
});

