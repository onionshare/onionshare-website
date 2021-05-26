$(document).ready(function() {
  $('.navButton').on('click', function() {
    $('.staged').toggleClass('open');
  });

  $('.closeButton').on('click', function() {
    $('.staged').removeClass('open');
  });

  $('NAV li').on('click', function() {
    $('.staged').removeClass('open');
  });
});
