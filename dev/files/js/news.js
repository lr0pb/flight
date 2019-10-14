var circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  setTimeout( () => {circle.style.opacity = '0'}, 1000 );
  setTimeout( () => {
    circle.style.display = 'none';
    document.querySelector('body').classList.remove('overflow-hidden');
  }, 1500 );
});

document.getElementById('news-button').addEventListener('click', function() {
  document.getElementById('news-list').scrollIntoView({block: "start", behavior: "smooth"});
})

document.addEventListener('keydown', function(e) {
  if(e.keyCode===66) back();
});

function back() {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
  setTimeout( () => {document.location.href = "https://flight.pp.ua/";}, 1200 );
};
