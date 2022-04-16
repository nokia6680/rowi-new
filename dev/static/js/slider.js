var menu = ['Современные офисы в Москве и Саратове', 'Гибридный график или удаленка. Распределенные команды', 'Открытая среда без бюрократии и сложных процессов']
const swiper = new Swiper('.swiper-benefits-container', {
    slidesPerView: '1',
    variableWidth: true,
    draggable: true,
    // direction: 'vertical',
    // autoHeight: true,
    spaceBetween: 0,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    effect: "creative",
    creativeEffect: {
        prev: {
            opacity: '0',
            shadow: false,
            translate: [0, 0, -1],
        },
        next: {
            opacity: '0',
            translate: [0, 0, 0],
        },
    },

    pagination: {
        el: ".benefits__list",
        clickable: true,
        bulletClass: 'benefits__item',
        bulletActiveClass: 'benefits__item-active',

        renderBullet: function (index, className) {
          return '<li class="' + className + '">' + '<span>' + (menu[index]) + '</span>' + '</li>';
        },
    }
});

swiper.disable();

swiper.on('beforeInit', function () {
    var currEl = document.querySelector('.swiper-slide-active');
    var dataCurr = currEl.getAttribute("data-value");
    var sliderNav = document.querySelector('.benefits__list');

    sliderNav.setAttribute("data-value", dataCurr);

});

swiper.on('slideChangeTransitionStart', function () {
    var currEl = document.querySelector('.swiper-slide-active');
    var dataCurr = currEl.getAttribute("data-value");
    var sliderNav = document.querySelector('.benefits__list');

    sliderNav.setAttribute("data-value", dataCurr);
});
