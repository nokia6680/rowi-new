const playerComform = new Plyr('#aboutVideo', {
    controls: ['play-large', 'restart', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'fullscreen'],
    settings: ['quality', 'speed'],
    resetOnEnd: true,
    invertTime: false,
    displayDuration: true,
    hideControls: false,
    quality: {
        default: 576,
        options: [2160, 1440, 1080, 720],
    },

    speed: {
        selected: 1,
        options: [0.5, 0.75, 1, 1.25, 1.5],
    },

    selectors: {
        buttons: {
            settings: '[class="settings-btn plyr__control", data-plyr="settings"]',
        },
    },

    // Localisation
    i18n: {
        restart: 'Перезапустить',
        rewind: 'Перемотать {seektime}s',
        play: 'Проиграть',
        pause: 'Пауза',
        fastForward: 'Вперёд {seektime}s',
        seek: 'Поиск',
        seekLabel: '{currentTime} of {duration}',
        played: 'Проиграно',
        buffered: 'Буферизовано',
        currentTime: 'Текущее время',
        duration: 'Длительность',
        volume: 'Громкость',
        mute: 'Выключить звук',
        unmute: 'Включить звук',
        enableCaptions: 'Включить субтитры',
        disableCaptions: 'Выключить субтитры',
        download: 'Скачать',
        enterFullscreen: 'Включить полноэкранный режим',
        exitFullscreen: 'Выйти из полноэкранного режима',
        frameTitle: 'Плеер для {title}',
        captions: 'Субтитры',
        settings: 'Настройки',
        pip: 'Картинка в картинке',
        menuBack: 'В предыдущее меню',
        speed: 'Скорость',
        normal: 'Обычный режим',
        quality: 'Качество',
        loop: 'Loop',
        start: 'Начало',
        end: 'Конец',
        all: 'Все',
        reset: 'Сброс',
        disabled: 'Выключено',
        enabled: 'Включено',
        advertisement: 'Реклама',
        qualityBadge: {
            2160: '4K',
            1440: 'HD',
            1080: 'HD',
            720: 'HD',
            576: 'SD',
            480: 'SD',
        },
    },
});

playerComform.source = {
    type: 'video',
    sources: [{
            src: '/static/videos/benefits-video.mp4',
            type: 'video/mp4',
            size: 720,
        },
        {
            src: '/static/videos/benefits-video.webm',
            type: 'video/webm',
            size: 1080,
        },
    ],
};

playerComform.poster = "static/images/content/comfort-poster.png";

// var poster = document.querySelector('.plyr__poster');
// // Expose player so it can be used from the console
//
// playerComform.on("pause", (event) => {
// 	poster.classList.add('active');
// });
//
// playerComform.on("stop", (event) => {
// 	poster.classList.add('active');
// });
//
// playerComform.on("play", (event) => {
// 	poster.classList.remove('active');
// });

var videoComfortInfo = document.querySelector('.comfort__info');

playerComform.on('playing', (event) => {
    videoComfortInfo.classList.add('active');
});

playerComform.on('ended', (event) => {
    videoComfortInfo.classList.remove('active');
});

playerComform.on('enterfullscreen', (event) => {

});

var videoMenu = document.querySelector('.settings-btn');

if (videoMenu) {
    videoMenu.addEventListener('click', function() {
        var stateMenu = videoMenu.getAttribute('aria-expanded');
        console.log(stateMenu);

        if (stateMenu === 'true') {
            videoComfortInfo.classList.add('active');
        }

        else if (playerComform.playing) {
            videoComfortInfo.classList.add('active');
        }

        else {
            videoComfortInfo.classList.remove('active');
        }
    });
};
//
// const vids = document.querySelectorAll('.comfort__player');
//
// const callbackVid = (elements) => {
//     elements.forEach(ele => {
//         if (ele.isIntersecting && playerComform.playing) {
//             playerComform.play();
//         }
//
//         else if (ele.isIntersecting && playerComform.fullscreen.active === 'true') {
//             playerComform.play();
//         }
//
//         else {
//             playerComform.pause();
//         }
//     })
// }
//
// let observerOptions = {
//     root: null,
//     threshold: 0.5
// };
//
// const observerNew = new IntersectionObserver(callbackVid, observerOptions);
// vids.forEach(vid => observerNew.observe(vid))

$(function() {
    $(window).scroll(function() {
        if (($(this).scrollTop() > 100) && (playerComform.fullscreen.active != 'true')) {
            playerComform.pause();
        }

        else {
            return false;
        }
    });
});
