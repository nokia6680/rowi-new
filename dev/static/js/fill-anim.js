gsap.registerPlugin(DrawSVGPlugin);

var tl = new TimelineMax({});
TweenLite.set("svg", {visibility:"visible"});
TweenLite.set("#intro-main-mobile-mask", {drawSVG:0});
tl.from("#bg", 0.6, {opacity:0})

 .to("#intro-main-mobile-mask", 1, {drawSVG:true, ease:Power1.easeOut} )
