
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1;
var player2;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('aboutVideo', {
        videoId: 'R5IjcsMNMNo',
    });

    player2 = new YT.Player('benVideo', {
        videoId: 'uzWPDQOCV3o',
    });
}

var body = document.querySelector('.body');

var videoBtn = document.querySelector('.about__play');
var videoFrame = document.getElementById('aboutVideo');
var videoPoster = document.querySelector('.about__player-poster');

if (videoBtn) {
    videoBtn.addEventListener('click', function() {
        videoBtn.classList.add('playState');
        videoFrame.classList.add('active');
        videoPoster.classList.add('hidden');
        player1.playVideo();
    });
};

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            player1.pauseVideo();

        } else {
            player1.pauseVideo();

        }
    });
});

var benePlay = document.querySelector('.benefits__play');
var beneWrap = document.querySelector('.popup-video');
var beneVideo = document.getElementById('benVideo');
var beneCloser = document.querySelector('.popup-video__closer');

if (benePlay) {
    benePlay.addEventListener('click', function() {
        beneWrap.classList.add('active');
        player2.playVideo();
        swiper.autoplay.stop()
        body.classList.add('no-scroll');
    });
};

if (beneCloser) {
    beneCloser.addEventListener('click', function() {
        beneWrap.classList.remove('active');
        player2.stopVideo();
        swiper.autoplay.start()
        body.classList.remove('no-scroll');
    });
};

beneWrap.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".popup-video__player")) return;

    // If user clicks outside the element, hide it!
    beneWrap.classList.remove('active');
    player2.stopVideo();
    swiper.autoplay.start()
    body.classList.remove('no-scroll');
});
