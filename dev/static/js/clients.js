let SwiperTop = new Swiper('.clients__line--one', {
    spaceBetween: 0,
    centeredSlides: true,
    slideClass: 'clients__line-item',
    wrapperClass: 'clients__line-wrap',
    speed: 3000,
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});
