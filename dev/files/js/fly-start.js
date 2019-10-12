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

const circle = document.getElementById('circle');
let circleX = circle.style.left;
let circleY = circle.style.top;

document.getElementById('news-block').addEventListener('click', function(e) {
  circleX = e.pageX + 'px';
  circleY = e.pageY + 'px';
  circle.style.display = 'block';
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
