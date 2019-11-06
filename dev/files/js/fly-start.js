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

  if (localStorage.getItem('whatIsVersion')==1) {
    localStorage.setItem('isFirstEntry','no');
    document.getElementById('news-block').classList.add('look-here');
    localStorage.setItem('whatIsVersion', 2); //Version list - /version.txt
  };

  if (localStorage.getItem('isFirstEntry')!=='no') {
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll('.for-hide')[i].style.display = 'none';
    };
    document.getElementById('fly-block').style.backgroundColor = 'transparent';
    document.getElementById('about-fly').classList.add('large-about-block');
    document.getElementById('understand').classList.remove('not-now');
    localStorage.setItem('whatIsVersion', 2); //Version list - /version.txt
  };
});

document.getElementById('understand').addEventListener('click', understandClose);
document.getElementById('understand').addEventListener('keydown', function(e) {
  if (e.keyCode===13) understandClose();
});

function understandClose() {
  for (let i = 0; i < 5; i++) {
    document.querySelectorAll('.for-hide')[i].removeAttribute('style');
  };
  if (screen.width < 650) {
    document.getElementById('fly-block').removeAttribute('style');
  };
  document.getElementById('understand').classList.add('not-now');
  document.getElementById('fly-block').removeAttribute('style');
  document.getElementById('about-fly').classList.remove('large-about-block');
  localStorage.setItem('isFirstEntry','no');
};

document.getElementById('news-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/news'}, 1200 );
});

document.getElementById('news-block').addEventListener('keydown', function(e) {
  if (e.keyCode===13) document.location.href = 'https://flight.pp.ua/dev/news';
});

document.getElementById('gallery-block').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/gallery'}, 1200 );
});

document.getElementById('gallery-block').addEventListener('keydown', function(e) {
  if (e.keyCode===13) document.location.href = 'https://flight.pp.ua/dev/gallery';
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(6)';circle.style.opacity = '1'}, 15);
};
