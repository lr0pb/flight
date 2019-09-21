$(document).ready(function() {
  localStorage.clear();
  if ( localStorage.getItem('isFirstEntry') == 1 ) {
    $('.light').addClass('not-now');
    $('#first-load-view').addClass('not-now');
    setTimeout(function() {
      $('body').removeClass('overflow-hidden');
    }, 1000);
  }
  else {
    $('#fly-start').addClass('not-now');
    $('#cards-block').addClass('not-now');
    $('header').addClass('not-now');
    $('footer').addClass('not-now');
    setTimeout(function() {
      $('#fly').addClass('invisible-loading');
    }, 1000);
    setTimeout(function() {
      $('#fly').removeClass('invisible-loading');
    }, 11000);
    setTimeout(function() {
      $('#fly-start').removeClass('not-now');
      $('#cards-block').removeClass('not-now');
      $('header').removeClass('not-now');
      $('footer').removeClass('not-now');
      $('.light').addClass('not-now');
      $('#first-load-view').addClass('not-now');
      $('body').removeClass('overflow-hidden');
      localStorage.setItem('isFirstEntry', 1); //1 - no
    }, 11500);
  }

  setTimeout(function() {
    $('#transition-layer').css('display','none');
  }, 1000);
});
