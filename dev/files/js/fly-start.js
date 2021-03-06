const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    document.querySelector('body').classList.remove('overflow-hidden');
    circle.classList.remove('circle-spawn');
    circle.style.display = 'none';
    circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  }, 2010 );

  if (localStorage.getItem('whatIsVersion')==1) {
    localStorage.setItem('isFirstEntry','no');
    document.getElementById('news-block').classList.add('look-here');
    localStorage.setItem('whatIsVersion', 2); //Version list - /version.txt
  };

  if (localStorage.getItem('isFirstEntry')!=='no') {
    for (let i = 0; i < 6; i++) {
      document.querySelectorAll('.for-hide')[i].style.display = 'none';
    };
    document.getElementById('fly-block').style.backgroundColor = 'transparent';
    document.getElementById('about-fly').classList.add('large-about-block');
    document.getElementById('understand').classList.remove('not-now');
    localStorage.setItem('whatIsVersion', 2); //Version list - /version.txt
  };

  if (localStorage.getItem('checkNews')!=='yes') {
    document.getElementById('news-block').classList.add('not-read');
  };
});

document.getElementById('understand').addEventListener('click', understandClose);
document.getElementById('understand').addEventListener('keydown', function(e) {
  if (e.keyCode===13) understandClose();
});

function understandClose() {
  for (let i = 0; i < 6; i++) {
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

if (document.location.href==='https://flight.pp.ua/') {
  localStorage.setItem('lang','ru')
};
if (document.location.href==='https://flight.pp.ua/en/') {
  localStorage.setItem('lang','en')
};

document.getElementById('news-block').addEventListener('click', function(e) {
  click(e);
  if (localStorage.getItem('lang')=='ru') setTimeout( () => {document.location.href = 'https://flight.pp.ua/news'}, 1200 );
  if (localStorage.getItem('lang')=='en') setTimeout( () => {document.location.href = 'https://flight.pp.ua/en/news'}, 1200 );
});

document.getElementById('news-block').addEventListener('keydown', function(e) {
  if (e.keyCode===13) {
    if (localStorage.getItem('lang')=='ru') document.location.href = 'https://flight.pp.ua/news';
    if (localStorage.getItem('lang')=='en') document.location.href = 'https://flight.pp.ua/en/news';
  };
});

document.getElementById('gallery-block').addEventListener('click', function(e) {
  click(e);
  if (localStorage.getItem('lang')=='ru') setTimeout( () => {document.location.href = 'https://flight.pp.ua/gallery'}, 1200 );
  if (localStorage.getItem('lang')=='en') setTimeout( () => {document.location.href = 'https://flight.pp.ua/en/gallery'}, 1200 );
});

document.getElementById('gallery-block').addEventListener('keydown', function(e) {
  if (e.keyCode===13) {
    if (localStorage.getItem('lang')=='ru') document.location.href = 'https://flight.pp.ua/gallery';
    if (localStorage.getItem('lang')=='en') document.location.href = 'https://flight.pp.ua/en/gallery';
  };
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(6)'; circle.style.opacity = '1'}, 15);
};

document.querySelectorAll('audio')[1].volume = '0.03';
document.querySelectorAll('audio')[2].volume = '0.7';
document.querySelectorAll('audio')[3].volume = '0.05';

const sound = document.getElementById('sound-block');

sound.addEventListener('mousedown', soundControl);
sound.addEventListener('keydown', function(e) {
  if (e.keyCode===13) soundControl();
});

function soundControl() {
  if ( sound.classList.contains('play') ) {
    sound.classList.replace('play','pause');
    sound.style.backgroundColor = '#41b619';
    document.querySelector('.sound-border').classList.add('sound-animation');
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll('audio')[i].play();
    };
  } else if ( sound.classList.contains('pause') ) {
    sound.classList.replace('pause','play');
    sound.style.backgroundColor = '';
    document.querySelector('.sound-border').classList.remove('sound-animation');
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll('audio')[i].pause();
    };
  };
  if ( sessionStorage.getItem('soundIsOn')!=='yes' ) {
    setTimeout( () => {
      document.querySelectorAll('audio')[1].volume = '0';
      setInterval( () => {document.querySelectorAll('audio')[2].volume = '0.7';}, 56000 );
    }, 28000 );
    setInterval( () => {document.querySelectorAll('audio')[2].volume = '0';}, 56000 );
    sessionStorage.setItem('soundIsOn','yes');
  };
};
document.addEventListener('beforeunload', function() {
  sessionStorage.removeItem('soundIsOn');
});
