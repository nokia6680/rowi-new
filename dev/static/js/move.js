var intro = document.getElementById("intro");
var freedom = document.getElementById("freedom");
var freedomCircle = document.querySelector('.freedom-round-tb');
var introCircle = document.querySelector(".intro-round-tb");
var cta = document.getElementById("cta");
var ctaCircle = document.querySelector('.cta-round-tb');

TweenMax.set(introCircle, {
    xPercent: -50,
    yPercent: -50
});

intro.addEventListener("pointerenter", function(e) {
    introPositionCircle(e);
});

intro.addEventListener("pointerleave", function(e) {
    introPositionCircle(e);
});

intro.addEventListener("pointermove", function(e) {
    introPositionCircle(e);
});

function introPositionCircle(e) {
    var rect = intro.getBoundingClientRect();
    var introRelX = e.clientX;
    var introRelY = e.clientY;

    TweenMax.to(introCircle, 2, {
        x: introRelX,
        y: introRelY
    });
};

/////////////////////////////////////////////////

TweenMax.set(freedomCircle, {
    xPercent: -50,
    yPercent: -50
});

freedom.addEventListener("pointerenter", function(e) {
    freedomPositionCircle(e);
});

freedom.addEventListener("pointerleave", function(e) {
    freedomPositionCircle(e);
});

freedom.addEventListener("pointermove", function(e) {
    freedomPositionCircle(e);
});

function freedomPositionCircle(e) {
    var rect = freedom.getBoundingClientRect();
    var freeRelX = e.clientX;
    var freeRelY = e.clientY;

    TweenMax.to(freedomCircle, 2, {
        x: freeRelX,
        y: freeRelY
    });
};

/////////////////////////////////////////////////
TweenMax.set(ctaCircle, {
    xPercent: -50,
    yPercent: -50
});

cta.addEventListener("pointerenter", function(e) {
    ctaPositionCircle(e);
});

cta.addEventListener("pointerleave", function(e) {
    ctaPositionCircle(e);
});

cta.addEventListener("pointermove", function(e) {
    ctaPositionCircle(e);
});

function ctaPositionCircle(e) {
    var rect = cta.getBoundingClientRect();
    var ctaRelX = e.clientX;
    var ctaRelY = e.clientY;

    TweenMax.to(ctaCircle, 2, {
        x: ctaRelX,
        y: ctaRelY
    });
};
