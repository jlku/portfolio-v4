$(document).ready(function() {

    // initialize skollr parallax
    var s = skrollr.init({forceHeight: false});

    var body = $("body");
    // var background = $(".background");
    // var introGreeting = $(".intro-greeting");
    // var introBody = $(".intro-body");
    // var introHeading = $(".intro-heading");
    var aboutButton = $(".header-home-about");
    var aboutCloseButton = $(".header-about-close");
    var about = $("#about");
    var aboutContainer = $(".about-container");
    var content = $("#content");
    // var nightmodeIndicator = $(".header-theme-indicator-nightmode")
    // var indicatorTime = $(".header-theme-indicator-time")
    // var nightmodeButton = $(".themes-button-nightmode");
    // var daymodeButton = $(".themes-button-daymode");
    // var navigation = $(".header-navigation-list");

    // show about
    aboutButton.click(function() {
        body.addClass("background-nightmode no-scroll");
        about.addClass("about-visible");
        content.addClass("content-hidden");
        aboutButton.addClass("content-hidden");
        aboutCloseButton.addClass("content-visible header-about-close-rotated");
        aboutContainer.addClass("about-container-loaded");

        $(".header-about-close > div:nth-of-type(1)").addClass("rotate-right");
        $(".header-about-close > div:nth-of-type(2)").addClass("rotate-left");
    });

    // hide about
    aboutCloseButton.click(function() {
        aboutCloseButton.removeClass("content-visible header-about-close-rotated");
        $(".header-about-close > div:nth-of-type(1)").removeClass("rotate-right");
        $(".header-about-close > div:nth-of-type(2)").removeClass("rotate-left");
        about.removeClass("about-visible");
        aboutContainer.removeClass("about-container-loaded");

        setTimeout(function(){
            body.removeClass("background-nightmode no-scroll");
            content.removeClass("content-hidden");
            aboutButton.removeClass("content-hidden");
        }, 300);
    });
    document.addEventListener('keyup', function(e) {

        if (e.keyCode == 27) {
            aboutCloseButton.removeClass("content-visible header-about-close-rotated");
            $(".header-about-close > div:nth-of-type(1)").removeClass("rotate-right");
            $(".header-about-close > div:nth-of-type(2)").removeClass("rotate-left");
            about.removeClass("about-visible");
            aboutContainer.removeClass("about-container-loaded");

            setTimeout(function(){
                body.removeClass("background-nightmode no-scroll");
                content.removeClass("content-hidden");
                aboutButton.removeClass("content-hidden");
            }, 300);
        }
    });


    var loadDelay = 100;
    $(window).on('scroll', function() {
       var scrollPosition = $(this).scrollTop();

       if (scrollPosition > 550) {
        //    $(".work-item").each(function(i) {
        //        console.log(i);
        //       $(this).delay(i * 200).addClass("work-item-loaded");
        //    });
           console.log("working");
           $(".work-item").each(function(i, el) {
               var $this = $(this);
               setTimeout(function() {
                   $this.addClass('work-item-loaded');
               }, i * loadDelay);
           });
       }
    });
});

// initialize mouse parallax
// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);

// bg shapes
// var circle1 = $(".shape-circle-1");
// var circle2 = $(".shape-circle-2");
// var circle3 = $(".shape-circle-3");
// var circle4 = $(".shape-circle-4");
// var triangle1 = $(".shape-triangle-1");
// var triangle2 = $(".shape-triangle-2");
// var triangle3 = $(".shape-triangle-3");
// var triangle4 = $(".shape-triangle-4");
// var square1 = $(".shape-square-1");
// var square2 = $(".shape-square-2");
// var square3 = $(".shape-square-3");
// var square4 = $(".shape-square-4");
// var shapes = [circle1, circle2, circle3, circle4, triangle1, triangle2, triangle3, triangle4, square1, square2, square3, square4]
// var shapesSquaresCircles = [circle1, circle2, circle3, circle4, square1, square2, square3, square4]
// var shapesTriangles = [triangle1, triangle2, triangle3, triangle4]

// // navigation hover
// aboutButton.hover(function() {
//     background.addClass("background-scaled");
//
// }, function() {
//     background.removeClass("background-scaled");
// });

// $.each(shapesSquaresCircles, function(index, value) {
//     this.removeClass("shape-nightmode");
// });
//
// $.each(shapesTriangles, function(index, value) {
//     this.removeClass("shape-nightmode-triangle");
// });

// $.each(shapesSquaresCircles, function(index, value) {
//     this.addClass("shape-nightmode");
// });
//
// $.each(shapesTriangles, function(index, value) {
//     this.addClass("shape-nightmode-triangle");
// });
