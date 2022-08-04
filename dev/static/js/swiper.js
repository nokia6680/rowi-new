const swiper = new Swiper('.article__slider-container', {
    // If we need pagination
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    pagination: {
        el: '.article__pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.article__next',
        prevEl: '.article__prev',
    },

    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [0, 0, -200],
            opacity: '0',
        },
        next: {
            translate: ["50%", 0, 0],
            opacity: '0',
        },
    },
});
