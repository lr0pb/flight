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

document.getElementById('news-block').addEventListener('click', function(e) {
  circle.style.cssText = 'opacity: 1; transform: translate(-50%) scale(5);';
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  circle.style.display = 'block';
  console.log(circle.style.cssText);
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
