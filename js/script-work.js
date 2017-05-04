$(document).ready(function() {

    // variables
    var postHeader = $('#post-header');
    var postHeaderBack = $(".post-header-back");
    var postHeaderBackLabel = $(".post-header-back > span");
    var postHeaderBackIcon = $(".post-header-back-icon");

    var postHero = $('#post-hero');
    var story = $(".story");

    // setup
    postHero.addClass("post-hero-loaded");
    story.addClass("story-loaded");
    postHeaderBack.addClass("post-header-back-loaded");

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var postHeroBottom = postHero.height();

        if (scrollPos > postHeroBottom) {
            postHeader.addClass("post-header-scrolled");
            postHeaderBackLabel.addClass('post-header-label-dark');
            postHeaderBackIcon.attr("class", "post-header-back-icon post-header-back-icon-dark");

        } else {
            postHeader.removeClass("post-header-scrolled");
            postHeaderBackLabel.removeClass('post-header-label-dark');
            postHeaderBackIcon.attr("class", "post-header-back-icon");
        }
    });
});
