$(document).ready(function() {

    // variables
    var body = $("body");
    var wrapperHome = $(".wrapper-home");

    var intro = $('.intro');
    var introGreeting = $('.intro-greeting');
    var introBio = $('.intro-bio');
    var introArrow = $(".intro-arrow");
    var introSpan = $(".intro-bio > span");

    var homeHeader = $("#home-header")

    var workItem = $(".work-item");

    var about = $("#about");
    var aboutContainer = $(".about-container");
    var aboutCloseButton = $(".button-close-x");
    var aboutButton = $(".home-header-about");

    var buttonCloseLegOne = $(".button-close-x-leg-one");
    var buttonCloseLegTwo = $(".button-close-x-leg-two");

    // levers
    var workTileLoadStagger = 200;
    var workTileLoadPoint = 400;


    // setup
    homeHeader.addClass("home-header-loaded"); // .9s

    setTimeout(function(){
        introGreeting.addClass("intro-copy-loaded"); // .9s
        introBio.addClass("intro-copy-loaded"); // .9s
    }, 350);

    setTimeout(function(){
        introArrow.addClass("intro-arrow-loaded"); //.9s
    }, 1000);

    // span hover
    introSpan.hover(function() {
        body.addClass("nightmode-background");
        shapesTriangle.addClass("nightmode-shapes-triangle");
        introGreeting.addClass("nightmode-text-dark");
        introBio.addClass("nightmode-text-light");
        aboutButton.addClass("nightmode-text-dark");
    }, function() {
        body.removeClass("nightmode-background");
        shapesTriangle.removeClass("nightmode-shapes-triangle");
        introGreeting.removeClass("nightmode-text-dark");
        introBio.removeClass("nightmode-text-light");
        aboutButton.removeClass("nightmode-text-dark");
    });

    // about link click
    aboutButton.click(function() {
        body.addClass("nightmode-background is-no-scroll");
        shapesTriangle.addClass("nightmode-shapes-triangle");
        about.addClass("about-visible");
        wrapperHome.addClass("is-hidden");
        aboutButton.addClass("is-hidden home-header-about-hidden");
        aboutCloseButton.addClass("is-visible button-close-x-rotated");
        aboutContainer.addClass("about-container-loaded");
        buttonCloseLegOne.addClass("button-close-x-rotate-right");
        buttonCloseLegTwo.addClass("button-close-x-rotate-left");
    });

    // about close click
    aboutCloseButton.click(function() {
        aboutCloseButton.removeClass("is-visible button-close-x-rotated");
        buttonCloseLegOne.removeClass("button-close-x-rotate-right");
        buttonCloseLegTwo.removeClass("button-close-x-rotate-left");
        about.removeClass("about-visible");
        aboutContainer.removeClass("about-container-loaded");
        introGreeting.removeClass("nightmode-text-dark");
        introBio.removeClass("nightmode-text-light");

        setTimeout(function(){
            body.removeClass("nightmode-background is-no-scroll");
            shapesTriangle.removeClass("nightmode-shapes-triangle");
            wrapperHome.removeClass("is-hidden");
            aboutButton.removeClass("is-hidden nightmode-text-dark home-header-about-hidden");
        }, 300);
    });

    // about escape button close
    document.addEventListener('keyup', function(e) {
        if (e.keyCode == 27) {
            aboutCloseButton.removeClass("is-visible button-close-x-rotated");
            buttonCloseLegOne.removeClass("button-close-x-rotate-right");
            buttonCloseLegTwo.removeClass("button-close-x-rotate-left");
            about.removeClass("about-visible");
            aboutContainer.removeClass("about-container-loaded");
            introGreeting.removeClass("nightmode-text-dark");
            introBio.removeClass("nightmode-text-light");

            setTimeout(function(){
                body.removeClass("nightmode-background is-no-scroll");
                shapesTriangle.removeClass("nightmode-shapes-triangle");
                wrapperHome.removeClass("is-hidden");
                aboutButton.removeClass("is-hidden nightmode-text-dark home-header-about-hidden");
            }, 300);
        }
    });

    // scroll events
    $(window).on('scroll', function() {
       var scrollPosition = $(this).scrollTop();

       if (scrollPosition > 0) {
           introArrow.addClass('intro-arrow-hidden');
       } else {
           introArrow.removeClass('intro-arrow-hidden');
       }

       if (scrollPosition > workTileLoadPoint) {
           workItem.each(function(i, el) {
               var tile = $(this);
               setTimeout(function() {
                   tile.addClass('work-item-loaded');
               }, i * workTileLoadStagger);
           });
       }

       aboutButton.css('transform', 'translateY(' + scrollPosition/-2.5 + 'px)');
       intro.css('transform', 'translateY(' + scrollPosition/-2.5 + 'px)');
    });
});
