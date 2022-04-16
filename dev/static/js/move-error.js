var error = document.getElementById("error");
var errorCircle = document.querySelector('.error-round-tb');

TweenMax.set(errorCircle, {
    xPercent: -50,
    yPercent: -50
});

error.addEventListener("pointerenter", function(e) {
    errorPositionCircle(e);
});

error.addEventListener("pointerleave", function(e) {
    errorPositionCircle(e);
});

error.addEventListener("pointermove", function(e) {
    errorPositionCircle(e);
});

function errorPositionCircle(e) {
    var rect = error.getBoundingClientRect();
    var errorRelX = e.clientX;
    var errorRelY = e.clientY;

    TweenMax.to(errorCircle, 3, {
        x: errorRelX,
        y: errorRelY
    });
};
