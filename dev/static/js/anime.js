function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = (Math.floor(progress * (end - start) + start)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// var itemFirst = document.querySelector('.intro__info-item--first');
// const obj = document.getElementById("counter");
//
// itemFirst.addEventListener('mouseover', (event) => {
//     if (itemFirst.classList.contains('hovered')) {
//         return false;
//     } else {
//         itemFirst.classList.add('reseted');
//         setTimeout(function() {
//             itemFirst.classList.remove('reseted');
//             itemFirst.classList.add('hovered');
//             animateValue(obj, 4500000, 7600000, 1300);
//         }, 400);
//     }
// });
//
// var itemSecond = document.querySelector('.intro__info-item--second');
//
// itemSecond.addEventListener('mouseover', (event) => {
//     if (itemSecond.classList.contains('hovered')) {
//         return false;
//     } else {
//         itemSecond.classList.add('reseted');
//         setTimeout(function() {
//             itemSecond.classList.remove('reseted');
//             itemSecond.classList.add('hovered');
//         }, 150);
//     }
// });
//
// var itemThird = document.querySelector('.intro__info-item--third');
// const objThird = document.getElementById("counter2");
//
// itemThird.addEventListener('mouseover', (event) => {
//     if (itemThird.classList.contains('hovered')) {
//         return false;
//     } else {
//         itemThird.classList.add('reseted');
//         setTimeout(function() {
//             itemThird.classList.remove('reseted');
//             itemThird.classList.add('hovered');
//             animateValue(objThird, 38, 100, 1200);
//         }, 150);
//     }
// });
//
// var itemFourth = document.querySelector('.intro__info-item--fourth');
//
// itemFourth.addEventListener('mouseover', (event) => {
//     if (itemFourth.classList.contains('hovered')) {
//         return false;
//     } else {
//         itemFourth.classList.add('reseted');
//         setTimeout(function() {
//             itemFourth.classList.remove('reseted');
//             itemFourth.classList.add('hovered');
//         }, 150);
//     }
// });

const obj = document.getElementById("counter");
setTimeout(function() {
    animateValue(obj, 4500000, 7600000, 500);
}, 1000);
//
const obj2 = document.getElementById("counter2");
setTimeout(function() {
    animateValue(obj2, 58, 100, 300);
}, 1000);
