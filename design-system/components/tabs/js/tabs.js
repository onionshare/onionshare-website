$(document).ready(function(){

  $('.tabs').before($('.tabs').clone(true).addClass('clonedTabs'));

  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 266;
  if ($(window).scrollTop() > navHeight) {
    $('.clonedTabs').addClass('tabContainerScrolled');
    $('.clonedTabs').addClass('clonedTabsVisible');
  }
  else {
    $('.clonedTabs').removeClass('tabContainerScrolled');
    $('.clonedTabs').removeClass('clonedTabsVisible');

  }
  });
});
