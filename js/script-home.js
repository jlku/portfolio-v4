$(document).ready(function() {

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    var body = $("body");
    var background = $(".background");
    var introGreeting = $(".intro-greeting");
    var introBody = $(".intro-body");
    var introHeading = $(".intro-heading");

    var nightmodeButton = $(".themes-button-nightmode");
    var daymodeButton = $(".themes-button-daymode");

    var navigation = $(".header-navigation-list");
    var navItem1 = $(".header-navigation-list > li:nth-of-type(1) a");
    var navItem2 = $(".header-navigation-list > li:nth-of-type(2) a");
    var navItem3 = $(".header-navigation-list > li:nth-of-type(3) a");
    var navItem4 = $(".header-navigation-list > li:nth-of-type(4) a");

    var circle1 = $(".shape-circle-1");
    var circle2 = $(".shape-circle-2");
    var circle3 = $(".shape-circle-3");
    var circle4 = $(".shape-circle-4");

    var triangle1 = $(".shape-triangle-1");
    var triangle2 = $(".shape-triangle-2");
    var triangle3 = $(".shape-triangle-3");
    var triangle4 = $(".shape-triangle-4");

    var square1 = $(".shape-square-1");
    var square2 = $(".shape-square-2");
    var square3 = $(".shape-square-3");
    var square4 = $(".shape-square-4");

    var shapes = [circle1, circle2, circle3, circle4, triangle1, triangle2, triangle3, triangle4, square1, square2, square3, square4]
    var shapesSquaresCircles = [circle1, circle2, circle3, circle4, square1, square2, square3, square4]
    var shapesTriangles = [triangle1, triangle2, triangle3, triangle4]

    daymodeButton.addClass("themes-button-active");

    // navigation hover
    navigation.hover(function() {
        background.addClass("background-scaled");

    }, function() {
        background.removeClass("background-scaled");
    });

    // nightmode click
    nightmodeButton.click(function() {
        body.addClass("background-nightmode");
        introHeading.addClass("intro-heading-nightmode");
        introGreeting.addClass("intro-greeting-nightmode");
        introBody.addClass("paragraph-dark");
        daymodeButton.removeClass("themes-button-active");
        nightmodeButton.addClass("themes-button-active");
        navItem1.addClass("header-navigation-item-active-nightmode")
        navItem2.addClass("header-navigation-item-inactive-nightmode")
        navItem3.addClass("header-navigation-item-inactive-nightmode")
        navItem4.addClass("header-navigation-item-inactive-nightmode")

        $.each(shapesSquaresCircles, function(index, value) {
            this.addClass("shape-nightmode");
        });

        $.each(shapesTriangles, function(index, value) {
            this.addClass("shape-nightmode-triangle");
        });
    });

    daymodeButton.click(function() {
        body.removeClass("background-nightmode");
        introHeading.removeClass("intro-heading-nightmode");
        introGreeting.removeClass("intro-greeting-nightmode");
        introBody.removeClass("paragraph-dark");
        nightmodeButton.removeClass("themes-button-active");
        daymodeButton.addClass("themes-button-active");
        navItem1.removeClass("header-navigation-item-active-nightmode")
        navItem2.removeClass("header-navigation-item-inactive-nightmode")
        navItem3.removeClass("header-navigation-item-inactive-nightmode")
        navItem4.removeClass("header-navigation-item-inactive-nightmode")

        $.each(shapesSquaresCircles, function(index, value) {
            this.removeClass("shape-nightmode");
        });

        $.each(shapesTriangles, function(index, value) {
            this.removeClass("shape-nightmode-triangle");
        });
    });
});
