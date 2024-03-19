new Swiper('.swiper-container',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        500 :{
            slidesPerView: 2,
        },
        1150:{
            slidesPerView: 3,
        },
    }
});
$(document).ready(function(){
    $('.acordeon__item h3').click(function(event){
        // для того щоб при відкритті другого пункту закривався попередній (заглянути в html)
        if($('.answered_acordeon div').hasClass('one')){
            $('.acordeon__item h3').not($(this)).removeClass('active');
            $('.acordeon__item p').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});