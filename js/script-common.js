$(document).ready(function() {
    var header = $('.header');
    var scrolledClass = "header-scrolled";

    var bLazy = new Blazy({
        // load image 100px before you reach it
        offset: 100
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            header.addClass(scrolledClass);
        } else {
            header.removeClass(scrolledClass);
        }
    });
});
