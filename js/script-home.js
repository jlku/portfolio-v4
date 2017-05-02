$(document).ready(function() {

    // initialize mouse parallax
    var scene = document.getElementById('scene');
    // var parallax = new Parallax(scene);

    var body = $("body");

    var allShapes = $(".background")
    var introGreeting = $('.intro-greeting');
    var introBio = $('.intro-bio');
    var intro = $('.intro');
    // var shapesSquare = $("[class*='shape-square']");
    // var shapesCircle = $("[class*='shape-circle']");
    var shapesTriangle = $("[class*='shape-triangle']");
    var aboutButton = $(".header-home-about");
    var aboutCloseButton = $(".header-about-close");
    var about = $("#about");
    var aboutContainer = $(".about-container");
    var content = $("#content-home");
    var introArrow = $(".intro-arrow");

    // about hover
    aboutButton.hover(function() {
        body.addClass("nightmode-background");
        shapesTriangle.addClass("nightmode-shapes-triangle");
        introGreeting.addClass("nightmode-text-dark");
        introBio.addClass("nightmode-text-light");
        aboutButton.addClass("nightmode-text-dark");
    }, function() {

        var hasClass = about.hasClass("about-visible");

        if (hasClass == false) {
            body.removeClass("nightmode-background");
            shapesTriangle.removeClass("nightmode-shapes-triangle");
            introGreeting.removeClass("nightmode-text-dark");
            introBio.removeClass("nightmode-text-light");
            aboutButton.removeClass("nightmode-text-dark");

        } else {
            // do nothing
        }

    });

    // about click
    aboutButton.click(function() {
        body.addClass("no-scroll");
        allShapes.addClass("background-hidden")
        about.addClass("about-visible");
        content.addClass("content-hidden");
        aboutButton.addClass("content-hidden header-home-about-hidden");
        aboutCloseButton.addClass("content-visible header-about-close-rotated");
        aboutContainer.addClass("about-container-loaded");
        $(".header-about-close > div:nth-of-type(1)").addClass("rotate-right");
        $(".header-about-close > div:nth-of-type(2)").addClass("rotate-left");
    });

    // about close
    aboutCloseButton.click(function() {

        aboutCloseButton.removeClass("content-visible header-about-close-rotated");
        $(".header-about-close > div:nth-of-type(1)").removeClass("rotate-right");
        $(".header-about-close > div:nth-of-type(2)").removeClass("rotate-left");
        about.removeClass("about-visible");
        aboutContainer.removeClass("about-container-loaded");
        introGreeting.removeClass("nightmode-text-dark");
        introBio.removeClass("nightmode-text-light");


        setTimeout(function(){
            body.removeClass("nightmode-background no-scroll");
            allShapes.removeClass("background-hidden");
            shapesTriangle.removeClass("nightmode-shapes-triangle");
            content.removeClass("content-hidden");
            aboutButton.removeClass("content-hidden nightmode-text-dark header-home-about-hidden");

        }, 300);
    });

    // escape button functionality
    document.addEventListener('keyup', function(e) {

        if (e.keyCode == 27) {
            allShapes.removeClass("background-hidden")
            aboutCloseButton.removeClass("content-visible header-about-close-rotated");
            $(".header-about-close > div:nth-of-type(1)").removeClass("rotate-right");
            $(".header-about-close > div:nth-of-type(2)").removeClass("rotate-left");
            about.removeClass("about-visible");
            aboutContainer.removeClass("about-container-loaded");
            shapesTriangle.removeClass("nightmode-shapes-triangle");

            setTimeout(function(){
                body.removeClass("nightmode-background no-scroll");
                content.removeClass("content-hidden");
                aboutButton.removeClass("content-hidden nightmode-text-dark header-home-about-hidden");
                introGreeting.removeClass("nightmode-text-dark");
                introBio.removeClass("nightmode-text-light");
            }, 300);
        }
    });


    var limit = 20;  /* scrolltop value when opacity should be 0 */
    var loadDelay = 200;
    $(window).on('scroll', function() {
       var scrollPosition = $(this).scrollTop();

       if (scrollPosition > 0) {
           introArrow.addClass('intro-arrow-hidden');
           console.log("working");
       } else {
           introArrow.removeClass('intro-arrow-hidden');
       }

       if (scrollPosition > 400) {
           $(".work-item").each(function(i, el) {
               var $this = $(this);
               setTimeout(function() {
                   $this.addClass('work-item-loaded');
               }, i * loadDelay);
           });
       }



       aboutButton.css('transform', 'translateY(' + scrollPosition/-3 + 'px)');
       intro.css('transform', 'translateY(' + scrollPosition/-3 + 'px)');
       allShapes.css('transform', 'translateY(' + scrollPosition/-5 + 'px)');

    //    if (scrollPosition <= limit) {
    //        introArrow.css({ 'opacity' : (1 - scrollPosition/limit) });
    //    }
    });
});
