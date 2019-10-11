/*$('#news-block').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://flight.pp.ua/news";
  }, 1000);
});*/

var circle = document.getElementById('circle');

document.getElementById('news-block').addEventListener('click', function(e) {
  const x = e.pageX;
  const y = e.pageY;
  console.log(x);
  console.log(y);
  circle.style.transformOrigin = `${x}px, ${y}px`;
  //$('#circle').css('transform-origin',`${x}px, ${y}px`);
  $('#circle').css('display','block');
  setTimeout(function() {
    $('#circle').css({
      'opacity':'1',
      'transform':'scale(2.5)'
    });
  }, 15);
});

$('#gallery-block').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://flight.pp.ua/gallery";
  }, 1000);
});
