const cards = document.querySelectorAll('section');

const callback = (elements) => {
    elements.forEach(ele => {
        if (ele.isIntersecting && !ele.target.classList.contains('loaded')) {
            setTimeout(function() {
                ele.target.classList.add('loaded');
            }, 300);
        }
    })
}

let observerOptions = {
    root: null,
    threshold: 0.35
};

const observer = new IntersectionObserver(callback, observerOptions);
cards.forEach(card => observer.observe(card))
