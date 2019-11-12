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
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)'; circle.style.opacity = '1'}, 15);
  setTimeout( () => {document.location.href = "https://flight.pp.ua/dev/fly";}, 1200 );
};
