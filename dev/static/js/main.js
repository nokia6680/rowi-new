// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const sandwichToggle = function () {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.header__toggle');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let navMenu = document.querySelector('.nav');
        let body = document.querySelector('body');
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        navMenu.classList.toggle('opened');
        body.classList.toggle('no-scroll');

        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};
sandwichToggle();

$('.tagOpener').on('click', function () {
    $(this).closest('.tagList').removeClass('closed');
});

$('.js-popup-opener').on('click', function (event) {
    const popupId = $(this).attr('data-modal');
    event.preventDefault();
    $(popupId).addClass('active');
    $('body').addClass('no-scroll');
});

$('.js-popup-closer').on('click', function () {
    $(this).closest('.js-popup-wrap').removeClass('active');
    $('body').removeClass('no-scroll');
});

$('.js-popup-wrap').on('click', function (event) {
    if (!$(event.target).closest('.js-popup-inner').length) {
        $(this).removeClass('active');
        $('body').removeClass('no-scroll');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var detailsElements = document.querySelectorAll('.nav__list-item--desktop');

    detailsElements.forEach(function (detailsElement) {
        var summary = detailsElement.querySelector('.nav__list-summary');
        var main = document.querySelector('.main');
        var isHoveringDetails = false; // Track if cursor is hovering over details element
        var isHoveringSummary = false; // Track if cursor is hovering over summary element

        detailsElement.addEventListener('mouseenter', function () {
            detailsElement.setAttribute('open', true);
            isHoveringDetails = true;
            main.classList.add('menu-opened');
        });

        detailsElement.addEventListener('mouseleave', function () {
            isHoveringDetails = false;
            main.classList.remove('menu-opened')
            // Delay removing 'open' class to allow cursor to move to summary
            setTimeout(function () {
                if (!isHoveringDetails && !isHoveringSummary) {
                    detailsElement.removeAttribute('open');
                }
            }, 0);
        });

        detailsElement.addEventListener('click', function(event) {
            if (window.innerWidth >= 1200 && !event.target.closest('a')) { // Check if screen width is greater than or equal to 1200px
                event.preventDefault(); // Prevent the default behavior of the click event
                event.stopPropagation(); // Stop the event from propagating further
            }
        });

        summary.addEventListener('mouseenter', function () {
            isHoveringSummary = true;
            main.classList.add('menu-opened');
        });

        summary.addEventListener('mouseleave', function () {
            isHoveringSummary = false;
            // Delay removing 'open' class to allow cursor to move back to details
            setTimeout(function () {
                if (!isHoveringDetails && !isHoveringSummary) {
                    detailsElement.removeAttribute('open');
                }
            }, 300);
        });
    });
});