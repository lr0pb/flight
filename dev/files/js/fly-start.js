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
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  console.log(circle.style.left);
  console.log(circle.style.top);
  circle.style.display = 'block';
  console.log(circle.style.display);
  setTimeout(function() {
    circle.style.cssText = 'opacity: 1; transform: translate(-50%) scale(3);';
    console.log(circle.style.display);
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
