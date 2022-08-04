$(function() {
    $('.article__share').on('mouseover', function() {
        $(this).attr('open', true);
    }).on('mouseout', function() {
        $(this).attr('open', false);
    })
});
