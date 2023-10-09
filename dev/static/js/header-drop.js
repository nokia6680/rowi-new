// Fetch all the details elements
const details = document.querySelectorAll(".details");

// Add onclick listeners
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all details that are not targetDetail
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

// window.onload = function() {
//     var headDetails = document.getElementsByClassName('detHead');
//     var elNodes = document.querySelectorAll(".detHead");
//     var innerW = window.innerWidth;

//     for (var i = 0; i < headDetails.length; i++) {
//         var elem = headDetails[i];

//         if (innerW < 1200) {
//             elem.setAttribute("open", '');

//         } else if ($(elem).hasClass('open')) {

//         } else {
//             elem.removeAttribute("open");
//         }
//     }
// }


// window.addEventListener("resize", function() {
//     var headDetails = document.getElementsByClassName('detHead');
//     var elNodes = document.querySelectorAll(".detHead");
//     var innerW = window.innerWidth;

//     for (var i = 0; i < headDetails.length; i++) {
//         var elem = headDetails[i];

//         if (innerW < 768) {
//             elem.setAttribute("open", '');
//         } else if ((innerW >= 768) || (innerW < 1000)) {
//             elem.removeAttribute("open");
//         }
//     };
// });

var detailsBtn = document.querySelector('.nav__cabinet-btn');
document.addEventListener('click', function(e) {
    if (!detailsBtn.contains(e.target)) {
        detailsBtn.removeAttribute('open')
    }
})
