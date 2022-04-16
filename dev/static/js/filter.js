var filterContainer = document.querySelector('.job__list');

$("#filterList").on('click', 'li', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    var id = $(this).attr('data-type');
    $("[data-item='" + id + "']").toggleClass("active");

    if (!$("[data-item='" + id + "']").hasClass("active")) {
         filterContainer.setAttribute('data-type', '0');
    } else {
         filterContainer.setAttribute('data-type', id);
    }
})

// $('.job__filter-item').on('click', function() {
//     var id = $(this).attr('data-type');
//     $("[data-item='" + id + "']").toggleClass("active");
//
//     if (!$("[data-item='" + id + "']").hasClass("active")) {
//         filterContainer.setAttribute('data-type', '0');
//     }
// });
