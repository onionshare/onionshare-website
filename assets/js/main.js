var languages = ['en', 'ru', 'es', 'de'];

$(function(){
  localizeAll(localStorage.getItem('lang'));
  $.each(languages, function(i, lang){
    $('#' + lang).click(function(e) { e.preventDefault(); localStorage.setItem('lang', lang); localizeAll(lang);});
  });
  $('#verify-more').hide();
  $('#verify-more-link')
    .html('<span data-l10n="read-more">' + l('read-more', 'Read more.') + '</span>')
    .click(function(){
      if($('#verify-more').css('display') == 'none') {
        $('#verify-more').show(200);
        $('#verify-more-link').html('<span data-l10n="hide">' + l('hide', 'Hide.') + '</span>');
      } else {
        $('#verify-more').hide(200);
        $('#verify-more-link').html('<span data-l10n="read-more">' + l('read-more', 'Read more.') + '</span>');
      }
    });
});

function l(string, fallback) {
  var localized = string.toLocaleString();
  if (localized !== string) {
    return localized;
  } else {
    return fallback;
  }
}

function localizeAll(lang) {
  if (!lang) return;
  String.locale = lang;
  $('[data-l10n]').each(function(i) {
    $(this).html(l($(this).attr('data-l10n'),$(this).html()));
  });
  if ('news-reports'.toLocaleString() !== 'news-reports') {
    var news_reports = [];
    $('news-reports'.toLocaleString()).each(function(i,news) {
      news_reports.push('<li>' + 
        '<a href="' + news.url + '">' +
        '<img src="/assets/img/' + news.img + '" alt="' + news.alt + '"><br>' +
        news.title + '</a></li>');
    });
    $('#news ul').html(news_reports);
  }  
  document.documentElement.lang = String.locale;
}
