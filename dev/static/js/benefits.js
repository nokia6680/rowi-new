var careerVideoPlay = document.querySelector('.comfort__play');
var careerVideoWrap = document.getElementById('aboutVideo');

if (careerVideoPlay) {
    careerVideoPlay.addEventListener('click', function() {
        careerVideoPlay.classList.add('playState');
        careerVideoWrap.classList.add('active');
        careerVideoWrap.play();
        careerVideoWrap.setAttribute("controls", "controls");
    });
};

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            careerVideoWrap.pause();
        } else {
            careerVideoWrap.pause();
        }
    });
});

careerVideoWrap.onended = function () {
    careerVideoWrap.currentTime = 0;
    careerVideoWrap.classList.remove('active');
    careerVideoPlay.classList.remove('playState');
    careerVideoWrap.load();
    careerVideoWrap.removeAttribute("controls");
};
