const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  circle.style.top = document.querySelector('.big').offsetTop + 'px';
  circle.style.left = document.querySelector('.big').offsetLeft + 'px';
  setTimeout( () => {
    circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  }, 10 );
  setTimeout( () => {
    circle.style.opacity = '0';
    document.getElementById('cover').style.filter = 'blur(1rem)';
  }, 510 );
  setTimeout( () => {
    circle.style.display = 'none';
    circle.style.transition = 'transform 1.5s, opacity 0.5s';
    document.querySelector('body').classList.remove('overflow-hidden');
  }, 1510 );
});

document.getElementById('to-gallery').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/gallery'}, 1200 );
});

document.getElementById('to-gallery').addEventListener('keydown', function(e) {
  if (e.keyCode===13) document.location.href = 'https://flight.pp.ua/dev/gallery';
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
};

document.getElementById('news-place').addEventListener('focus', () => {
  document.getElementById('news-block').style.filter = 'drop-shadow(0 0 3rem #353c4f)';
});
document.getElementById('news-place').addEventListener('blur', () => {
  document.getElementById('news-block').style.filter = '';
});

document.addEventListener('keydown', function(e) {
  console.log(e);
  if(e.keyCode===66) back();
});

function back() {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
  setTimeout( () => {document.location.href = "https://flight.pp.ua/dev/fly";}, 1200 );
};
