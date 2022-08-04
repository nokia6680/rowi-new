let preventScroll = false;

function onFullScreenChange() {
    let inFullScreen = Boolean(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    if (inFullScreen) {
        preventScroll = true;
        setTimeout(() => {
            preventScroll = false;
        }, 100);
    }
}

document.addEventListener('fullscreenchange', onFullScreenChange)
document.addEventListener('mozfullscreenchange', onFullScreenChange)
document.addEventListener('msfullscreenchange', onFullScreenChange)
document.addEventListener('webkitfullscreenchange', onFullScreenChange)
let y = 0;
window.addEventListener("scroll", () => {
    if (preventScroll && window.scrollY === 0) {
        window.scrollTo(0, y);
        return;
    }
    y = window.scrollY;
});
