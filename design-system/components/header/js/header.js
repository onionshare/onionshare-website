$(document).ready(function() {

  $('.btnIcon').on('click', function() {
    $('header nav ul').toggleClass('open');
    $('header').toggleClass('open');
  });

  $('NAV li').on('click', function() {
    $('header nav ul').removeClass('open');
    $('header').removeClass('open');
  });

});
