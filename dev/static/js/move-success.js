var success = document.getElementById("success");
var successCircle = document.querySelector('.success-round-tb');

TweenMax.set(successCircle, {
    xPercent: -50,
    yPercent: -50
});

success.addEventListener("pointerenter", function(e) {
    successPositionCircle(e);
});

success.addEventListener("pointerleave", function(e) {
    successPositionCircle(e);
});

success.addEventListener("pointermove", function(e) {
    successPositionCircle(e);
});

function successPositionCircle(e) {
    var rect = success.getBoundingClientRect();
    var successRelX = e.clientX;
    var successRelY = e.clientY;

    TweenMax.to(successCircle, 3, {
        x: successRelX,
        y: successRelY
    });
};
