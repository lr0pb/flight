$('body').addClass('overflow-hidden');
setTimeout(function() {
  $('#transition-layer').css('display','none');
  $('body').removeClass('overflow-hidden');
}, 1000);
