var circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  circle.style.opacity = '0';
  setTimeout( () => {
    circle.style.display = 'none';
    circle.style.transition = 'transform 1.5s, opacity 0.5s';
    document.querySelector('body').classList.remove('overflow-hidden');
    document.getElementById('cover').style.filter = 'blur(1rem)';
    document.getElementsByClassName('all').style.opacity = '1';
  }, 1500 );
  localStorage.setItem('isFirstEntry', 'no');
  console.log( localStorage.getItem('isFirstEntry') );
});

document.getElementById('news-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/news'}, 1200 );
});

document.getElementById('gallery-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/gallery'}, 1200 );
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
};
