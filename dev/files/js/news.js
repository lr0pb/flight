setTimeout(function() {
  $('#transition-layer').css('display','none');
  $('body').removeClass('overflow-hidden');
}, 1000);

document.getElementById('news-button').addEventListener('click', function() {
  document.getElementById('news-list').scrollIntoView({block: "center", behavior: "smooth"});
})

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
    document.location.href = "https://flight.pp.ua/";
  }, 1000);
};
