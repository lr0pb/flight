const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  setTimeout( () => {circle.style.opacity = '0'}, 1000 );
  setTimeout( () => {circle.style.display = 'none'}, 1500 );
});

setTimeout(function() {
  $('#transition-layer').css('display','none');
  $('body').removeClass('overflow-hidden');
}, 1000);

document.getElementById('news-button').addEventListener('click', function() {
  document.getElementById('news-list').scrollIntoView({block: "start", behavior: "smooth"});
})

$(document).keydown(function(e) {
  if(e.keyCode===66){
    back();
  };
});
function back() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://flight.pp.ua/";
  }, 1000);
};
