// const scroller = document.createElement('div');
// scroller.style.height = '1000vh';
// document.body.appendChild(scroller);
//
// const content = document.getElementById('main');
// const animation = document.getElementById('benefits');
//
// document.addEventListener('scroll', () => {
//
//     const rect = animation.getBoundingClientRect();
//     let offset = window.scrollY;
//
//     const start = Math.floor(rect.top + rect.height);
//     const stop = start + 1000;
//
//     if (offset >= start && offset < stop) {
//         const progress = (offset - start) / (stop - start); // 0..1
//         animation.classList.add('gowno');
//         offset = start;
//     } else if (offset >= stop) {
//         offset -= (stop - start);
//         content.style.top = `-${offset}px`;
//     } else {
//         content.style.top = `-${offset}px`;
//     }
//
// });
