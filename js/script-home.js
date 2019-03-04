// $(document).ready(function() {

   // $("nav").find("a").click(function(e) {
   //     e.preventDefault();
   //     var section = $(this).attr("href");
   //     $("html, body").animate({scrollTop: $(section).offset().top}, 5000, 'ease', function() {}});
   // });
    // variables
    // var introArrow = $(".intro-arrow");

    // scroll events
    // $(window).on('scroll', function() {
    //    var scrollPosition = $(this).scrollTop();
    //
    //    if (scrollPosition > 0) {
    //        introArrow.addClass('intro-arrow-hidden');
    //    } else {
    //        introArrow.removeClass('intro-arrow-hidden');
    //    }
    //
    //    // intro.css('transform', 'translateY(' + scrollPosition/-2.5 + 'px)');
    // });
// });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("nav > a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
     }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
