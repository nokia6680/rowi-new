function animateScroll(coords, offset) {
    var browserHeight = window.innerHeight;
    var stackBlock = document.getElementById("stack");
    var stackTop = stackBlock.offsetTop;
    var freedomBlock = document.getElementById("freedom");
    var freedomTop = freedomBlock.offsetTop;
    var howBlock = document.getElementById("how");
    var howTop = howBlock.offsetTop;
    var beneBlock = document.getElementById("benefits");
    var beneTop = beneBlock.offsetTop;
    var aboutBlock = document.getElementById("about");
    var aboutTop = aboutBlock.offsetTop;
    var numBlock = document.getElementById("number");
    var numTop = numBlock.offsetTop;
    var jobBlock = document.getElementById("jobs");
    var jobTop = jobBlock.offsetTop;
    var applyBlock = document.getElementById("apply-form");
    var applyTop = applyBlock.offsetTop;

    var scrollHeight = window.pageYOffset;

    var heightPercent = browserHeight / 100;
    var visibleHeight = heightPercent * 85;
//    console.log(visibleHeight);

    var collision = stackTop - scrollHeight;
    var collision2 = freedomTop - scrollHeight;
    var collision3 = howTop - scrollHeight;
    var collision4 = beneTop - scrollHeight;
    var collision5 = aboutTop - scrollHeight;
    var collision6 = numTop - scrollHeight;
    var collision7 = jobTop - scrollHeight;
    var collision9 = applyTop - scrollHeight;

    if (window.innerWidth >= 320) {
        //console.log(freedomBlock.getBoundingClientRect(), collision2, freedomTop);

        if (collision < visibleHeight) {
            stackBlock.classList.add('loaded');
        }

        if (collision2 < visibleHeight) {
            freedomBlock.classList.add('loaded');
        }

        if (collision3 < visibleHeight) {
            howBlock.classList.add('loaded');
        }

        if (collision4 < visibleHeight) {
            beneBlock.classList.add('loaded');
            swiper.enable();
        }

        if (collision5 < visibleHeight) {
            aboutBlock.classList.add('loaded');
        }

        if (collision6 < visibleHeight) {
            numBlock.classList.add('loaded');
        }

        if (collision7 < visibleHeight) {
            jobBlock.classList.add('loaded');
        }

        if (collision9 < visibleHeight) {
            applyBlock.classList.add('loaded');
        }

    } else {
        return;
    }
}

window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    setTimeout(function() {
        animateScroll(windowHeight);
    }, 500);
});
