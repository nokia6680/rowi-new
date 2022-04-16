// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var body = document.querySelector('.body');
var header = document.querySelector('.header');
var menuOpener = document.querySelector('.header__toggle');
var menuList = document.querySelector('.nav');
var controls = document.querySelector('.header__controls');

if (menuOpener) {
     menuOpener.addEventListener('click', function() {
        event.preventDefault();
        menuOpener.classList.toggle('opened');
        menuList.classList.toggle('opened');
        controls.classList.toggle('opened');
        header.classList.toggle('opened');
     });
};


var upperItem = document.getElementsByClassName('nav__link');
var elNodes = document.querySelectorAll(".nav__link");

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        menuList.classList.remove('opened');
        menuOpener.classList.remove('opened');
        controls.classList.remove('opened');
        header.classList.remove('opened');
    });
}

function changeText() {
    var x = document.getElementById("toggleText");
    if (x.innerHTML === "Навигация") {
        x.innerHTML = "Закрыть";
    } else {
        x.innerHTML = "Навигация";
    }
};

var jobItem = document.querySelector('.job');
var jobs = document.getElementsByClassName('job__name');
var elNodes = document.querySelectorAll(".job__name");

for (var i = 0; i < jobs.length; i++) {
  var elem = jobs[i];
  elem.addEventListener("click", changeActiveClass);
}

function changeActiveClass(e) {
  event.preventDefault();

  for (var i = 0; i < jobs.length; i++) {
    var elem = jobs[i];
    elem.classList.remove('active');
  }

  e.target.classList.add('active');
}

var shares = document.getElementsByClassName('job__share');
var elNodes = document.querySelectorAll(".job__share");
var shareWrap = document.querySelector('.job__dropdown--mobile');
var breakpoint = window.matchMedia('(max-width: 767px)');

var breakpointChecker = function breakpointChecker() {
  if (breakpoint.matches === true) {
    for (var i = 0; i < shares.length; i++) {
      var elem = shares[i];
      elem.addEventListener("click", function () {
        event.preventDefault();
        shareWrap.classList.add("mobileActive");
        var shareData = elem.getAttribute("data-value");
        shareWrap.setAttribute("data-value", shareData);
        body.classList.add("no-scroll");
      });
      $('.job__dropdown--mobile').on('click', function (event) {
        if (!$(event.target).closest('.job__dropdown-wrap').length) {
          $(this).removeClass('mobileActive');
          $('.body').removeClass('no-scroll');
        }
      });
    }
  } else {
    for (var i = 0; i < shares.length; i++) {
      var elem = shares[i];
      body.classList.remove("no-scroll");
      shareWrap.classList.remove("mobileActive");
      elem.addEventListener("click", function () {
        event.preventDefault();
        this.classList.toggle("active");
        body.classList.remove("no-scroll");
      });
    }
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
