const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
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
});

document.getElementById('news-button').addEventListener('click', function() {
  document.getElementById('news-list').scrollIntoView({block: "start", behavior: "smooth"});
})

document.getElementById('to-gallery').addEventListener('click', function(e) {
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

document.addEventListener('keypress', function(e) {
  if(e.keyCode===66) back();
});

function back() {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
  setTimeout( () => {document.location.href = "https://flight.pp.ua/dev/fly";}, 1200 );
};
