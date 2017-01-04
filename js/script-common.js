$(document).ready(function() {

    var header = $('.header');
    var scrolledClass = "header-scrolled";

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            header.addClass(scrolledClass);
        } else {
            header.removeClass(scrolledClass);
        }
    });
});
