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
  circle.css({
    'opacity':'1',
    'transform-origin':`${x}, ${y}`,
    'transform':'scale(5)'
  });
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
