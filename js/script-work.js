$(document).ready(function() {
    var headerWork = $('.header-work');
    var scrolledClass = "header-scrolled";
    var headerImage = $('.post-header-media');

    headerImage.addClass("post-header-media-loaded");
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            headerWork.addClass(scrolledClass);

        } else {
            headerWork.removeClass(scrolledClass);
        }
    });
});
