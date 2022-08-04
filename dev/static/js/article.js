var articleVideoPlay = document.querySelector('.artPlay');
var articleVideoWrap = document.querySelector('.artVideo');

if (articleVideoPlay) {
    articleVideoPlay.addEventListener('click', function() {
        articleVideoPlay.classList.add('playState');
        articleVideoWrap.play();
        articleVideoWrap.setAttribute("controls", "controls");
    });
};

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            articleVideoWrap.pause();
        } else {
            articleVideoWrap.pause();
        }
    });
});

articleVideoWrap.onended = function () {
    articleVideoWrap.currentTime = 0;
    articleVideoPlay.classList.remove('playState');
    articleVideoWrap.load();
    articleVideoWrap.removeAttribute("controls");
};
