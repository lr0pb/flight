$('#burger').mousedown(function() {
  $('nav').toggleClass('nav-burger');
  $('a.norm').toggleClass('a-burger');
  $('span:nth-child(1)').toggleClass('margin-top8');
  $('span:nth-child(1)').toggleClass('cross-left');
  $('span:nth-child(2)').toggleClass('cross-right');
  $('span:nth-child(3)').toggleClass('not-now');
});
