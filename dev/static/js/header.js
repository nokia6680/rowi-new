window.onload = function() {
    var intro = document.getElementById("intro");
    var header = document.querySelector('.header');
    var stackBlock = document.getElementById("stack");
    var stackTop = stackBlock.offsetTop;

    setTimeout(function() {
        return intro.classList.add('loaded');
    }, 500);

    // setTimeout(function() {
    //     return header.classList.add('loaded');
    // }, 2055);

    if (window.innerWidth >= 2560) {
        if (stackTop < 1200) {
            setTimeout(function() {
                return stackBlock.classList.add('loaded');
            }, 3000);
        }
    }
}

window.addEventListener("resize", function() {
    var header = document.querySelector('.header');
    if (window.innerWidth < 1440) {
        header.classList.add("hidden");

        setTimeout(function() {
            return header.classList.remove('hidden');
        }, 1400);
    }
});
