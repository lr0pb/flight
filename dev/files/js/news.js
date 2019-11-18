const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    document.querySelector('body').classList.remove('overflow-hidden');
    circle.classList.remove('circle-spawn');
    circle.style.display = 'none';
    circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  }, 2010 );
  localStorage.setItem('checkNews','yes');
});

if (document.location.href==='https://flight.pp.ua/news') {
  localStorage.setItem('lang','ru')
};
if (document.location.href==='https://flight.pp.ua/en/news') {
  localStorage.setItem('lang','en')
};

document.getElementById('to-gallery').addEventListener('click', function(e) {
  click(e);
  if (localStorage.getItem('lang')=='ru') setTimeout( () => {document.location.href = 'https://flight.pp.ua/gallery'}, 1200 );
  if (localStorage.getItem('lang')=='en') setTimeout( () => {document.location.href = 'https://flight.pp.ua/en/gallery'}, 1200 );
});

document.getElementById('to-gallery').addEventListener('keydown', function(e) {
  if (e.keyCode===13) function() {
    if (localStorage.getItem('lang')=='ru') document.location.href = 'https://flight.pp.ua/gallery';
    if (localStorage.getItem('lang')=='en') document.location.href = 'https://flight.pp.ua/en/gallery';
  };
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
};

document.getElementById('news-place').addEventListener('focus', () => {
  document.getElementById('news-block').style.filter = 'drop-shadow(0 0 3rem #2b4282)';
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
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)'; circle.style.opacity = '1'}, 15);
  if (localStorage.getItem('lang')=='ru') setTimeout( () => {document.location.href = 'https://flight.pp.ua/'}, 1200 );
  if (localStorage.getItem('lang')=='en') setTimeout( () => {document.location.href = 'https://flight.pp.ua/en/'}, 1200 );
};

document.getElementById('back-button').addEventListener('click', function(e) {
  click(e);
  if (localStorage.getItem('lang')=='ru') setTimeout( () => {document.location.href = 'https://flight.pp.ua/'}, 1200 );
  if (localStorage.getItem('lang')=='en') setTimeout( () => {document.location.href = 'https://flight.pp.ua/en/'}, 1200 );
});
