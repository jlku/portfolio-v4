$(document).ready(function() {
    var headerWork = $('#post-header');
    var scrolledClass = "post-header-scrolled";
    var heroMedia = $('#post-hero');
    var headerWorkBack = $(".post-header-back");
    var backText = $(".post-header-back > span");
    var backIcon = $(".post-header-back-icon");
    var story = $(".story");

    heroMedia.addClass("post-hero-loaded");
    story.addClass("story-loaded");
    headerWorkBack.addClass("post-header-back-loaded");

    $(window).scroll(function() {

        var scrollingPoint = $(window).scrollTop();
        var headerBottom = heroMedia.height();

        console.log(scrollingPoint);
        console.log("the header is " + headerBottom);

        if (scrollingPoint > headerBottom) {
            headerWork.addClass(scrolledClass);
            backText.addClass('post-header-label-dark');
            backIcon.attr("class", "post-header-back-icon post-header-back-icon-dark");


        } else {
            headerWork.removeClass(scrolledClass);
            backText.removeClass('post-header-label-dark');
            backIcon.attr("class", "post-header-back-icon");
        }
    });
});
