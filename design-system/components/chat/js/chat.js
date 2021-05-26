$(document).ready(function() {

  $('.chatWindow').scrollTop($('.chatWindow')[0].scrollHeight);

  $('.usersTab').on('click', function() {
    $('.pinnedList').addClass('pinnedListVisible');
    $('.usersTab').addClass('selected');
    $('.chatTab').removeClass('selected');
    $('p.badge').addClass('hidden');
  });

  $('.chatTab').on('click', function() {
    $('.pinnedList').removeClass('pinnedListVisible');
    $('.usersTab').removeClass('selected');
    $('.chatTab').addClass('selected');
  });

});
