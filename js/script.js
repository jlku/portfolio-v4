$(document).ready(function(){
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  $(".header-navigation-item").hover(function(){
      $(".background-container").addClass("scaled");

      $(".circle-1").addClass("alive");
      $(".circle-2").addClass("alive");
      $(".circle-3").addClass("alive");
      $(".circle-4").addClass("alive");

      $(".triangle-1").addClass("alive");
      $(".triangle-2").addClass("alive");
      $(".triangle-3").addClass("alive");
      $(".triangle-4").addClass("alive");

      $(".square-1").addClass("alive");
      $(".square-2").addClass("alive");
      $(".square-3").addClass("alive");
      $(".square-4").addClass("alive");  //Add the active class to the area is hovered
  }, function () {
      $(".background").removeClass("scaled");

      $(".circle-1").removeClass("alive");
      $(".circle-2").removeClass("alive");
      $(".circle-3").removeClass("alive");
      $(".circle-4").removeClass("alive");

      $(".triangle-1").removeClass("alive");
      $(".triangle-2").removeClass("alive");
      $(".triangle-3").removeClass("alive");
      $(".triangle-4").removeClass("alive");

      $(".square-1").removeClass("alive");
      $(".square-2").removeClass("alive");
      $(".square-3").removeClass("alive");
      $(".square-4").removeClass("alive");
  });

  $(".button-nightmode").click(function(){
      $(".circle-1").toggleClass("alive");  //Add the active class to the area is hovered
      $("body").toggleClass("nightmode-bg")
  });
    //   $("circle-1").toggleClass("alive");
    //   console.log("working");//Toggle the active class to the area is hovered


});
