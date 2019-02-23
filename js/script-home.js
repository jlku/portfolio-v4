$(document).ready(function() {

    // variables
    var introArrow = $(".intro-arrow");

    // scroll events
    $(window).on('scroll', function() {
       var scrollPosition = $(this).scrollTop();

       if (scrollPosition > 0) {
           introArrow.addClass('intro-arrow-hidden');
       } else {
           introArrow.removeClass('intro-arrow-hidden');
       }

       // intro.css('transform', 'translateY(' + scrollPosition/-2.5 + 'px)');
    });
});
