var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
        speed: 200,
        disableOnInteraction: false,
    },
    cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
    },
}); 