const breakpoint = window.matchMedia('(min-width: 1200px)');
let filterDrop = document.querySelector('.blog__filter-block');

const breakpointChecker = function() {
    if (breakpoint.matches === true) {
        filterDrop.setAttribute("open", '');
    } else if (breakpoint.matches === false) {
        filterDrop.removeAttribute("open");
    }
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
