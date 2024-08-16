$(document).ready(function() {

  var pageOffset = $('.wrapper').offset().top;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.hint').addClass('fade');
    } else {
      $('.hint').removeClass('fade');
    }
  });

  $('.mobileNav').on('click', function() {
    $('header nav ul').toggleClass('open');
    $('header').toggleClass('open');
    if ($('.mobileNav').attr('aria-expanded') == 'false') {
      $('.mobileNav').attr('aria-expanded', 'true');
    } else {
      $('.mobileNav').attr('aria-expanded', 'false');
    }
  });

  $('NAV li').on('click', function() {
    $('header nav ul').removeClass('open');
    $('header').removeClass('open');
  });

  $('.bannerBtn').on('click', function() {
    $('.banner').toggleClass('hidden');
  });

  $('.bannerBtn').on('click', function() {
    $('BODY + div').removeClass('banner');
  });

  $('.btnCollapse').on('click', function() {
    $('.btnCollapse').addClass('hidden');
    $('.btnExpand').removeClass('hidden');
    $('.toc ol').addClass('hidden');
  });

  $('.btnExpand').on('click', function() {
    $('.btnExpand').addClass('hidden');
    $('.btnCollapse').removeClass('hidden');
    $('.toc ol').removeClass('hidden');
  });
});
