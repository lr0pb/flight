var circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  circle.style.opacity = '0';
  setTimeout( () => {
    circle.style.display = 'none';
    circle.style.transition = 'transform 1.5s, opacity 0.5s';
    document.querySelector('body').classList.remove('overflow-hidden');
  }, 1500 );
});

document.getElementById('news-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/news'}, 1200 );
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
};

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
