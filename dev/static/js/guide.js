var filterOpener = document.getElementsByClassName('filter__opener');
var elNodes = document.querySelectorAll(".filter__opener");
var filterBody = document.querySelector('.filter__wrap');
var filterCloser = document.querySelector('.filter__closer');

for (var i = 0; i < filterOpener.length; i++) {
    var elem = filterOpener[i];

    elem.addEventListener("click", function() {
        filterBody.classList.add('active');
    });

    if (filterCloser) {
        filterCloser.addEventListener('click', function() {
            filterBody.classList.remove('active');
        });
    };
};
