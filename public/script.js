// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
//       document.getElementsByClassName("bg-dark").style.background = "rgba(0, 0, 0, 0.0) !important";
//     } else {
       
//       document.getElementsByClassName("bg-dark").style.background = "rgba(0, 0, 0, 0.7) !important";
//     }
//   }
//   window.onscroll = function() {scrollFunction()};

$(function () {
    $(document).scroll(function () {
      var $nav = $(".bg-dark");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });