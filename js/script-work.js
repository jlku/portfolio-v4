$(document).ready(function() {
    var headerWork = $('.header-work');
    var scrolledClass = "header-scrolled";
    var headerImage = $('.post-header-media');
    var headerWorkBack = $(".header-work-back");
    var backText = $(".header-work-back > span");
    var backIcon = $(".header-work-back-icon");
    var story = $(".story");

    headerImage.addClass("post-header-media-loaded");
    story.addClass("story-loaded");
    headerWorkBack.addClass("header-work-back-loaded");

    $(window).scroll(function() {

        var scrollingPoint = $(window).scrollTop();
        var headerBottom = headerImage.height();

        console.log(scrollingPoint);
        console.log("the header is " + headerBottom);

        if (scrollingPoint > headerBottom) {
            headerWork.addClass(scrolledClass);
            backText.addClass('header-work-back-dark');
            backIcon.attr("class", "header-work-back-icon header-work-back-icon-dark");


        } else {
            headerWork.removeClass(scrolledClass);
            backText.removeClass('header-work-back-dark');
            backIcon.attr("class", "header-work-back-icon");
        }
    });
});
