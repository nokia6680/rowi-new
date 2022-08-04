const breakpoint = window.matchMedia('(min-width: 1200px)');
var tagDrops = document.getElementsByClassName('tagList');
var elNodes = document.querySelectorAll(".tagList");

const breakpointChecker = function() {
    for (var i = 0; i < tagDrops.length; i++) {
        var tag = tagDrops[i];

        if (breakpoint.matches === true) {
            tag.classList.remove('closed');
        } else if (breakpoint.matches === false) {
            tag.classList.add('closed');
        }
    }
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
