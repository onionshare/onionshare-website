$(function(){
  $('#verify-more').hide();
  $('#verify-more-link')
    .html('Read more.')
    .click(function(){
      if($('#verify-more').css('display') == 'none') {
        $('#verify-more').show(200);
        $('#verify-more-link').html('Hide.');
      } else {
        $('#verify-more').hide(200);
        $('#verify-more-link').html('Read more.');
      }
    });
});
