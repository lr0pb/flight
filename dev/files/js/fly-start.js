const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('head').append( document.getElementById('stylesheets').content.cloneNode(true) );
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

const sound = document.getElementById('sound-block');

document.getElementById('start-content').addEventListener('click', function(e) {
  console.log(e.target);
  if ( e.target==document.getElementById('news-block') ) {
    click(e);
    setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/news'}, 1200 );
  };
  if ( e.target==document.getElementById('gallery-block') ) {
    click(e);
    setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/gallery'}, 1200 );
  };
  if ( e.target==document.querySelector('.play') playSound();
  function playSound() {
    sound.classList.replace('play','pause');
    sound.style.backgroundColor = '#41b619';
    document.querySelector('.sound-border').classList.add('sound-animation');
    /*for (let i = 0; i < 4; i++) {
      document.querySelectorAll('audio')[i].play();
    };*/
  };
  if ( e.target==document.querySelector('.pause') ) {
    sound.classList.replace('pause','play');
    sound.style.backgroundColor = '';
    document.querySelector('.sound-border').classList.remove('sound-animation');
    /*for (let i = 0; i < 4; i++) {
      document.querySelectorAll('audio')[i].pause();
    };*/
  };
  if ( e.target==sound ) {
    setTimeout( () => {
      document.querySelectorAll('audio')[1].volume = '0';
      setInterval( () => {document.querySelectorAll('audio')[2].volume = '0.7';}, 56000 );
    }, 56000 );
    setInterval( () => {document.querySelectorAll('audio')[2].volume = '0';}, 56000 );
    sessionStorage.setItem('soundIsOn','yes');
  };
});
/*
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
});*/

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

/*sound.addEventListener('mousedown', function() {
  if (localStorage.getItem('playOn')=='no') {
    sound.classList.replace('play','pause');
    sound.style.backgroundColor = '#41b619';
    document.querySelector('.sound-border').classList.add('sound-animation');
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll('audio')[i].play();
    };
    localStorage.setItem('playOn','yes');
  };
  if (localStorage.getItem('playOn')=='yes') {
    sound.classList.replace('pause','play');
    sound.style.backgroundColor = '';
    document.querySelector('.sound-border').classList.remove('sound-animation');
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll('audio')[i].pause();
    };
    localStorage.setItem('playOn','no');
  };
});*/
/*
if ( sessionStorage.getItem('soundIsOn')!=='yes' ) {
  setTimeout( () => {
    document.querySelectorAll('audio')[1].volume = '0';
    setInterval( () => {document.querySelectorAll('audio')[2].volume = '0.7';}, 56000 );
  }, 56000 );
  setInterval( () => {document.querySelectorAll('audio')[2].volume = '0';}, 56000 );
  sessionStorage.setItem('soundIsOn','yes');
};*/
