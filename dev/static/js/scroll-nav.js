// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const id = entry.target.getAttribute('id');
//         if (entry.isIntersecting && entry.intersectionRatio === 1) {
//             document.querySelector(`.filter__nav[href="#${id}"]`).classList.add('active');
//             // console.log(entries[0].target.getAttribute('id'), ": ", entries[0].intersectionRatio)
//         } else {
//             document.querySelector(`.filter__nav[href="#${id}"]`).classList.remove('active');
//         }
//     });
// });

const cards = document.querySelectorAll('section[id]');

const callback = (entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
            document.querySelector(`.filter__nav[href="#${id}"]`).classList.add('active');
            console.log(entries[0].target.getAttribute('id'), ": ", entries[0].intersectionRatio)
        } else {
            document.querySelector(`.filter__nav[href="#${id}"]`).classList.remove('active');
        }
    });
}

let observerOptions = {
    root: null,
    threshold: 0.35
};

const observer = new IntersectionObserver(callback, observerOptions);
cards.forEach(card => observer.observe(card))
