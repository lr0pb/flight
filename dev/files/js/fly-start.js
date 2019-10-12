/*$('#news-block').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://flight.pp.ua/news";
  }, 1000);
});*/

var circle = document.getElementById('circle');

document.getElementById('news-block').addEventListener('click', function(e) {
  const x = e.pageX;
  const y = e.pageY;
  circle.style.cssText = `display: block; left: ${x}; top: ${y};`;
  setTimeout(function() {
    circle.style.cssText = 'opacity: 1; transform: translate(-50%) scale(3);';
  }, 15);
});

$('#gallery-block').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://flight.pp.ua/gallery";
  }, 1000);
});
