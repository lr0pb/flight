$(document).ready(function() {
  setTimeout(function() {
    $('#transition-layer').css('display','none');
    $('body').removeClass('overflow-hidden');
  }, 1000);
  responsiveImages();
});

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

const bg131 = document.getElementById('bg13-1');
const bg111 = document.getElementById('bg1-1');
const bg132 = document.getElementById('bg13-2');
const bg112 = document.getElementById('bg1-2');
const gl1 = document.getElementById('gl1');
const gl2 = document.getElementById('gl2');
const gl3 = document.getElementById('gl3');
const bg4 = document.getElementById('bg4');
const bg21 = document.getElementById('bg2-1');
const bg22 = document.getElementById('bg2-2');
const bg6 = document.getElementById('bg6');
const bg7 = document.getElementById('bg7');
const bg10 = document.getElementById('bg10');
const bg8 = document.getElementById('bg8');
const bg8to9 = document.getElementById('bg8to9');
const bg91 = document.getElementById('bg9-1');
const bg92 = document.getElementById('bg9-2');
const bg12 = document.getElementById('bg12');
const bg3 = document.getElementById('bg3');
const bg5 = document.getElementById('bg5');
const bg11 = document.getElementById('bg11');

$(window).resize(responsiveImages);

function responsiveImages() {
  if ( $(window).width() >= 1100 ) {
    bg111.src="/images/jpg-large/im1.jpg";
    bg112.src="/images/jpg-large/im1.jpg";
    gl1.src="/images/jpg-large/gl1.jpg";
    gl2.src="/images/jpg-large/gl2.jpg";
    gl3.src="/images/jpg-large/gl3.jpg";
    bg4.src="/images/jpg-large/im4.jpg";
    bg21.src="/images/jpg-large/im2-1.jpg";
    bg22.src="/images/jpg-large/im2-2.jpg";
    bg6.src="/images/jpg-large/im6.jpg";
    bg7.src="/images/jpg-large/im7.jpg";
    bg10.src="/images/jpg-large/im10.jpg";
    bg8.src="/images/jpg-large/im8.jpg";
    bg8to9.src="/images/jpg-large/im8to9.jpg";
    bg91.src="/images/jpg-large/im9-1.jpg";
    bg92.src="/images/jpg-large/im9-2.jpg";
    bg12.src="/images/jpg-large/im12.jpg";
    bg131.src="/images/jpg-large/im13.jpg";
    bg132.src="/images/jpg-large/im13.jpg";
    bg3.src="/images/jpg-large/im3.jpg";
    bg5.src="/images/jpg-large/im5.jpg";
    bg11.src="/images/jpg-large/im11.jpg";
  }
  if ( $(window).width() < 1099 ) {
    bg111.src="/images/jpg-small/im1.jpg";
    bg112.src="/images/jpg-small/im1.jpg";
    gl1.src="/images/jpg-small/gl1.jpg";
    gl2.src="/images/jpg-small/gl2.jpg";
    gl3.src="/images/jpg-small/gl3.jpg";
    bg4.src="/images/jpg-small/im4.jpg";
    bg21.src="/images/jpg-small/im2-1.jpg";
    bg22.src="/images/jpg-small/im2-2.jpg";
    bg6.src="/images/jpg-small/im6.jpg";
    bg7.src="/images/jpg-small/im7.jpg";
    bg10.src="/images/jpg-small/im10.jpg";
    bg8.src="/images/jpg-small/im8.jpg";
    bg8to9.src="/images/jpg-small/im8to9.jpg";
    bg91.src="/images/jpg-small/im9-1.jpg";
    bg92.src="/images/jpg-small/im9-2.jpg";
    bg12.src="/images/jpg-small/im12.jpg";
    bg131.src="/images/jpg-small/im13.jpg";
    bg132.src="/images/jpg-small/im13.jpg";
    bg3.src="/images/jpg-small/im3.jpg";
    bg5.src="/images/jpg-small/im5.jpg";
    bg11.src="/images/jpg-small/im11.jpg";
  }
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
    document.location.href = "https://lr0pb.pp.ua/";
  }, 1000);
};
