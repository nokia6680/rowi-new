// var popupPlay = document.querySelector('.intro__btn');
// var popupWrap = document.querySelector('.popup-video');
// var popupVideo = document.getElementById('introVideo');
// var popupVideoCloser = document.querySelector('.popup-video__closer');
// var popupVideoReplay = document.querySelector('.popup-video__play');
// var body = document.querySelector('.body');
//
// if (popupPlay) {
//     popupPlay.addEventListener('click', function() {
//         popupWrap.classList.add('active');
//         popupVideo.play();
//         popupVideo.setAttribute("controls", "controls");
//         body.classList.add('no-scroll');
//     });
// };
//
// if (popupVideoCloser) {
//     popupVideoCloser.addEventListener('click', function() {
//         popupWrap.classList.remove('active');
//         popupVideo.pause();
//         popupVideo.load();
//         popupVideo.currentTime = 0;
//         body.classList.remove('no-scroll');
//         popupVideo.removeAttribute("controls");
//     });
// };
//
// popupWrap.addEventListener("click", function(event) {
//     // If user clicks inside the element, do nothing
//     if (event.target.closest(".popup-video__player")) return;
//
//     // If user clicks outside the element, hide it!
//     popupWrap.classList.remove('active');
//     popupVideo.pause();
//     popupVideo.load();
//     popupVideo.currentTime = 0;
//     body.classList.remove('no-scroll');
//     popupVideo.removeAttribute("controls");
// });

// popupVideo.onended = function () {
//     popupVideo.currentTime = 0;
//     popupVideo.load();
//     popupVideoReplay.classList.add('visibleState');
//     popupVideoReplay.classList.remove('playState');
//     popupVideo.removeAttribute("controls");
// };
//
// popupVideoReplay.addEventListener('click', function() {
//     popupVideo.play();
//     popupVideo.setAttribute("controls", "controls");
//     popupVideoReplay.classList.add('playState');
//     popupVideoReplay.classList.remove('visibleState');
// });
