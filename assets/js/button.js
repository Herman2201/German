$(function () {
  /*--------- show and hide the menu  ---*/
  $('.burger').on("click", function () {
    if ($('.menu').hasClass('nav_is_visible') == true) {
      $('.menu').removeClass('nav_is_visible');
      $('.burger').removeClass('close');
    }
    else {
      $('.menu').addClass('nav_is_visible');
      $('.burger').addClass('close');
    }
  });

  $('.menu').addClass('home_is_visible');


  function removeClasses() {
    $(".menu ul li").each(function () {
      var custom_class = $(this).find('a').data('class');
      $('.menu').removeClass(custom_class);
    });
  }

  $('.menu a').on('click', function (e) {
    e.preventDefault();
    removeClasses();
    var custom_class = $(this).data('class');
    $('.menu').addClass(custom_class);
  });
});