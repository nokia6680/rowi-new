const player = new Plyr('#introVideo', {
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

    ratio: '16:9',
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

player.source = {
    type: 'video',
    sources: [{
            src: '/static/videos/about-video.mp4',
            type: 'video/mp4',
            size: 720,
        },
        {
            src: '/static/videos/about-video.webm',
            type: 'video/webm',
            size: 1080,
        },
    ],
};

var popupPlay = document.querySelector('.intro__btn');
var popupWrap = document.querySelector('.popup-video');
var body = document.querySelector('.body');
var popupVideoCloser = document.querySelector('.popup-video__closer');

if (popupPlay) {
    popupPlay.addEventListener('click', function() {
        popupWrap.classList.add('active');
        player.play();
        body.classList.add('no-scroll');
    });
};

if (popupVideoCloser) {
    popupVideoCloser.addEventListener('click', function() {
        popupWrap.classList.remove('active');
        player.pause();
        player.stop();
        body.classList.remove('no-scroll');
    });
};

popupWrap.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".popup-video__player")) return;

    // If user clicks outside the element, hide it!
    popupWrap.classList.remove('active');
    player.pause();
    player.stop();
    body.classList.remove('no-scroll');
});
