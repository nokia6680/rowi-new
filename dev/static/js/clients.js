$('.clients__line--one').grouploop({
    // animation speed
    velocity: 0.3,
    // false = from left to right
    forward: false,
    // default selectors
    childNode: ".clients__line-item",
    childWrapper: ".clients__line-wrap",
    // enable pause on hover
    pauseOnHover: true,
    // stick the first item
    stickFirstItem: false,
    // callback
    complete: null
});

$('.clients__line--two').grouploop({
    // animation speed
    velocity: 0.3,
    // false = from left to right
    forward: true,
    // default selectors
    childNode: ".clients__line-item",
    childWrapper: ".clients__line-wrap",
    // enable pause on hover
    pauseOnHover: true,
    // stick the first item
    stickFirstItem: false,
    // callback
    complete: null
});

$('.clients__line--three').grouploop({
    // animation speed
    velocity: 0.3,
    // false = from left to right
    forward: false,
    // default selectors
    childNode: ".clients__line-item",
    childWrapper: ".clients__line-wrap",
    // enable pause on hover
    pauseOnHover: true,
    // stick the first item
    stickFirstItem: false,
    // callback
    complete: null
});
