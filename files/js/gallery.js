$('body').addClass('overflow-hidden');
setTimeout(function() {
  $('#transition-layer').css('display','none');
  $('body').removeClass('overflow-hidden');
}, 1000);
$('#next').bind('mousedown', next);
$('#prev').bind('mousedown', prev);

var gl = $('#gallery-box');

function next() {
  var glValue = gl.css('left');
  glValue = parseInt(glValue);

  if (glValue !== -17150) {
    gl.css('left','-=900');
    $('#next').unbind('mousedown', next);
    $('#prev').unbind('mousedown', prev);
    setTimeout(function() {
      $('#next').bind('mousedown', next);
      $('#prev').bind('mousedown', prev);
    }, 1000);
  };
  if (glValue == -17150) {
    gl.css({'left':'-95rem','transition':'0.1s'});
    $('#next').unbind('mousedown', next);
    $('#prev').unbind('mousedown', prev);
    setTimeout(function() {
      gl.css('transition','1s');
      $('#next').bind('mousedown', next);
      $('#prev').bind('mousedown', prev);
    }, 100);
  };
};

function prev() {
  var glValue = gl.css('left');
  glValue = parseInt(glValue);

  if (glValue !== -950) {
    gl.css('left','+=900');
    $('#next').unbind('mousedown', next);
    $('#prev').unbind('mousedown', prev);
    setTimeout(function() {
      $('#next').bind('mousedown', next);
      $('#prev').bind('mousedown', prev);
    }, 1000);
  };
  if (glValue == -950) {
    gl.css({'left':'-1715rem','transition':'0.1s'});
    $('#next').unbind('mousedown', next);
    $('#prev').unbind('mousedown', prev);
    setTimeout(function() {
      gl.css('transition','1s');
      $('#next').bind('mousedown', next);
      $('#prev').bind('mousedown', prev);
    }, 100);
  };
};

$('#gl-head').click(back);
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
    document.location.href = "https://lr0pb.github.io/fly";
  }, 1000);/*
  setTimeout(function() {
    $('body').addClass('overflow-hidden');
    $('#transition-layer').css('display','none');
  }, 1100);*/
};
