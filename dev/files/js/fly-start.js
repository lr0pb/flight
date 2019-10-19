const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  circle.style.top = document.querySelector('.big').offsetTop + 'px';
  circle.style.left = document.querySelector('.big').offsetLeft + 'px';
  circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  setTimeout( () => {
    circle.style.opacity = '0';
    document.getElementById('cover').style.filter = 'blur(1rem)';
  }, 500 );
  setTimeout( () => {
    circle.style.display = 'none';
    circle.style.transition = 'transform 1.5s, opacity 0.5s';
    document.querySelector('body').classList.remove('overflow-hidden');
  }, 1500 );

  if (localStorage.getItem('isFirstEntry')!=='no') {

    document.getElementById('about-fly').classList.add('large-about-block');
    document.getElementById('understand').classList.remove('not-now');
  };
});

document.getElementById('news-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/news'}, 1200 );
});

document.getElementById('gallery-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/gallery'}, 1200 );
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
};
