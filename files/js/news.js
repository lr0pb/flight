$('body').addClass('overflow-hidden');
setTimeout(function() {
  $('#transition-layer').css('display','none');
  $('body').removeClass('overflow-hidden');
}, 1000);

$('#news-head').click(back);
$(document).keydown(function(e) {
  if(e.keyCode===66){
    back();
  };
});
function back() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://lr0pb.github.io/fly";
  }, 1000);
  setTimeout(function() {
    $('body').addClass('overflow-hidden');
    $('#transition-layer').css('display','none');
  }, 1100);
};
