$(document).ready(function() {
  /*if ( $(window).width() > 1440 ) {
    $("#fly").on('mousemove', (e) => {
      const cx = $(window).width() / 2;
      const cy = $(window).height() / 2;

      const x = ((cx - e.pageX) / cx) * 10;
      const y = ((cy - e.pageY) / cy) * 10;
      $(".bgo").css('transform',`translate(${x}px, ${y}px)`);
    });
  };*/

  /*if ( localStorage.getItem('isFirstEntry') == 1 ) {
    $('#first-load-view').addClass('not-now');
    setTimeout(function() {
      $('body').removeClass('overflow-hidden');
    }, 1500);
  }
  else {
    $('#start-content').css('display','none');
    setTimeout(function() {
      $('#fly').removeClass('not-now');
      $('#fly').addClass('invisible-loading');
    }, 1000);
    setTimeout(function() {
      $('#fly').removeClass('invisible-loading');
      $('#fly').addClass('not-now');
    }, 11000);
    setTimeout(function() {
      $('#start-content').css('display','grid');
      $('#first-load-view').addClass('not-now');
      $('body').removeClass('overflow-hidden');
      localStorage.setItem('isFirstEntry', 1); //1 - no
      localStorage.setItem('whatIsVersion', 1); //Version list - /version.txt
    }, 11500);
  }*/
});

$('.image-point').mousedown(function() {
  $('#help-point').removeClass('fade-from-down');
  $('#help-point').addClass('fade-to-down');
});
$('.180-point').mousedown(function() {
  setTimeout(function() {
    $('#help-180').addClass('fade-from-down');
  }, 4010);
});

document.getElementById('im1').addEventListener("mousedown", function() {
  let elem = this;
  openImage(1, '1to4', elem);

  setTimeout( () => {
    document.getElementById('bg1-spawn').classList.remove('bg-open');
    document.getElementById('cube1to4').style.opacity = "1";
  }, 5710 );
});

$('.icon1to4').mousedown(function() {
  $('#text1to4').addClass('open');
  $('#cube1to4').removeClass('rotate4to1');
  $('#cube1to4').addClass('rotate1to4');
  $('#disabled').removeClass('not-now');
  $('#help-180').removeClass('fade-from-down');
  $('#help-180').addClass('fade-to-down');
  setTimeout(function() {
    $('#text4to1').removeClass('not-now');
    $('#text4to1').css('opacity','0');
    $('#text4to1').addClass('spawn');
  }, 8710);
  setTimeout(function() {
    $('#text1to4').css('opacity','0')
    $('#text1to4').removeClass('open');
    $('#text4to1').removeClass('spawn');
    $('#text4to1').css('opacity','1');
    $('#disabled').addClass('not-now');
    $('#im4').removeClass('complete');
    $('#im9to4').removeClass('complete');
  }, 14600);
});

document.getElementById('im2').addEventListener("mousedown", function() {
  let elem = this;
  openImage(2, '-', elem);

  setTimeout( () => {
    document.getElementById('bg2-spawn').classList.remove('bg-open');
    document.getElementById('cube2').style.opacity = "1";
    document.getElementById('to-im2-2').classList.remove('not-now');
    document.getElementById('icon3to2').classList.remove('complete');
  }, 5710 );
});

$('#to-im2-1').mousedown(function() {
  $('#to-im2-1').addClass('not-now');
  $('#cube2').removeClass('rotate-90');
  $('#cube2').addClass('rotate0');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im2-2').removeClass('not-now');
    $('#disabled').addClass('not-now');
  }, 3000);
});
$('#to-im2-2').mousedown(function() {
  $('#to-im2-2').addClass('not-now');
  $('#cube2').removeClass('rotate0');
  $('#cube2').addClass('rotate-90');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im2-1').removeClass('not-now');
    $('#disabled').addClass('not-now');
  }, 3000);
});

document.getElementById('im3').addEventListener("mousedown", function() {
  let elem = this;
  openImage(3, '3to2', elem);
  document.getElementById('icon5to3').classList.remove('complete');
});

$('#icon3to2').mousedown(function() {
  $('#im3to2').addClass('open');
  $('#im3to2').removeClass('complete');
  $('#bg3').addClass('bg-close');
  $('#bgo').addClass('im3-open');
  $('#bgo').addClass('ride3to2');
  $('#cube2').css('transform','rotateY(-90deg)');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#bg2-2-spawn').addClass('bg-open');
  }, 1000);
  setTimeout(function() {
    $('#to-im2-1').removeClass('not-now');
    $('#cube2').css('opacity','1');
    $('#bgo').removeClass('ride3to2');
    $('#bg2-2-spawn').removeClass('bg-open');
    $('#disabled').addClass('not-now');
    $('#im2').removeClass('complete');
  }, 6010);
});

document.getElementById('im4').addEventListener("mousedown", function() {
  let elem = this;
  openImage(4, '4to1', elem);

  setTimeout( () => {
    document.getElementById('bg4-spawn').classList.remove('bg-open');
    document.getElementById('cube1to4').style.opacity = "1";
  }, 5710 );
});

$('.icon4to1').mousedown(function() {
  $('#text4to1').addClass('open');
  $('#cube1to4').removeClass('rotate1to4');
  $('#cube1to4').addClass('rotate4to1');
  $('#disabled').removeClass('not-now');
  $('#help-180').removeClass('fade-from-down');
  $('#help-180').addClass('fade-to-down');
  setTimeout(function() {
    $('#text1to4').removeClass('not-now');
    $('#text1to4').css('opacity','0');
    $('#text1to4').addClass('spawn');
  }, 8710);
  setTimeout(function() {
    $('#text4to1').css('opacity','0')
    $('#text4to1').removeClass('open');
    $('#text1to4').removeClass('spawn');
    $('#text1to4').css('opacity','1');
    $('#disabled').addClass('not-now');
    $('#im1').removeClass('complete');
  }, 14600);
});

document.getElementById('im5').addEventListener("mousedown", function() {
  let elem = this;
  openImage(5, '5to3', elem);
});

$('#icon5to3').mousedown(function() {
  $('#im5to3').addClass('open');
  $('#im5to3').removeClass('complete');
  $('#bg5').addClass('bg-close');
  $('#bgo').addClass('ride5to3');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#bg3').addClass('bg-open');
    $('#im3to2').removeClass('not-now');
    $('#im3to2').css('opacity','0');
    $('#im3to2').addClass('spawn');
  }, 1000);
  setTimeout(function() {
    $('#im3to2').removeClass('spawn');
    $('#im3to2').css('opacity','1');
    $('#bgo').removeClass('ride5to3');
    $('#bgo').removeClass('im5-open');
    $('#disabled').addClass('not-now');
    $('#im3').removeClass('complete');
  }, 5710);
});

document.getElementById('im6').addEventListener("mousedown", function() {
  let elem = this;
  openImage(6, '6to7', elem);

  setTimeout( () => {
    document.getElementById('bg6-spawn').classList.remove('bg-open');
    document.getElementById('cube6').style.opacity = "1";
  }, 5710 );
});

$('#icon6to7').mousedown(function() {
  $('#im6to7').addClass('open');
  $('#im6to7').removeClass('complete');
  $('#cube6').addClass('rotate-90');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#im7to10').removeClass('not-now');
    $('#disabled').addClass('not-now');
    $('#im7').removeClass('complete');
  }, 3000);
});

document.getElementById('im7').addEventListener("mousedown", function() {
  let elem = this;
  openImage(7, '7to10', elem);

  setTimeout( () => {
    document.getElementById('bg7-spawn').classList.remove('bg-open');
    document.getElementById('cube6').style.opacity = "1";
    document.getElementById('icon6to7').classList.remove('complete');
  }, 5710 );
});

$('#icon7to10').mousedown(function() {
  $('#im7to10').addClass('open');
  $('#im7to10').removeClass('complete');
  $('#bg6').css('opacity','0');
  $('#cube6').removeClass('rotate-90');
  $('#cube6').addClass('rotate0');
  $('#im10').removeClass('complete');
});

document.getElementById('im10').addEventListener("mousedown", function() {
  let elem = this;
  openImage(10, '-', elem);
  document.getElementById('icon7to10').classList.remove('complete');
});

document.getElementById('im8').addEventListener("mousedown", function() {
  let elem = this;
  openImage(8, '8to9', elem);

  setTimeout( () => {
    document.getElementById('bg8-spawn').classList.remove('bg-open');
    document.getElementById('cube8to9').style.opacity = "1";
  }, 5710 );
});

$('.icon8to9').mousedown(function() {
  $('#text8to9').addClass('open');
  $('#cube8to9').removeClass('rotate9to8');
  $('#cube8to9').addClass('rotate8to9');
  $('#text9to8').removeClass('not-now');
  $('#text9to8').css('opacity','0');
  $('#text9to8').addClass('spawn');
  $('#im9to4').removeClass('not-now');
  $('#im9to4').css('opacity','0');
  $('#im9to4').addClass('spawn');
  $('#disabled').removeClass('not-now');
  $('#help-180').removeClass('fade-from-down');
  $('#help-180').addClass('fade-to-down');
  setTimeout(function() {
    $('#to-im9-2').removeClass('not-now');
    $('#text8to9').removeClass('open');
    $('#text8to9').addClass('not-now');
    $('#im9to4').removeClass('not-now');
  }, 5000);
  setTimeout(function() {
    $('#text9to8').removeClass('spawn');
    $('#text9to8').css('opacity','1');
    $('#im9to4').removeClass('spawn');
    $('#im9to4').css('opacity','1');
    $('#disabled').addClass('not-now');
  }, 6800);
});

$('.icon9to8').mousedown(function() {
  $('#text9to8').addClass('open');
  $('#im9to4').addClass('not-now');
  $('#to-im9-2').addClass('not-now');
  $('#cube8to9').removeClass('rotate-to-im9-2');
  $('#cube8to9').removeClass('rotate-to-im9-1');
  $('#cube8to9').removeClass('rotate8to9');
  $('#cube8to9').addClass('rotate9to8');
  $('#text8to9').removeClass('not-now');
  $('#text8to9').css('opacity','0');
  $('#text8to9').addClass('spawn');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#text9to8').removeClass('open');
    $('#text9to8').addClass('not-now');
  }, 5000);
  setTimeout(function() {
    $('#text8to9').removeClass('spawn');
    $('#text8to9').css('opacity','1');
    $('#disabled').addClass('not-now');
  }, 6800);
});

$('#to-im9-2').mousedown(function() {
  $('#to-im9-2').addClass('not-now');
  $('#text9to8').addClass('not-now');
  $('#im9to4').addClass('not-now');
  $('#cube8to9').removeClass('rotate-to-im9-1');
  $('#cube8to9').addClass('rotate-to-im9-2');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im9-1').removeClass('not-now');
    $('#disabled').addClass('not-now');
  }, 3600);
});

$('#to-im9-1').mousedown(function() {
  $('#to-im9-1').addClass('not-now');
  $('#cube8to9').removeClass('rotate-to-im9-2');
  $('#cube8to9').addClass('rotate-to-im9-1');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im9-2').removeClass('not-now');
    $('#text9to8').removeClass('not-now');
    $('#im9to4').removeClass('not-now');
    $('#disabled').addClass('not-now');
  }, 3600);
});

$('#icon9to4').mousedown(function() {
  $('#im9to4').addClass('open');
  $('#im9to4').removeClass('complete');
  $('#to-im9-2').addClass('not-now');
  $('.icon9to8').addClass('not-now');
  $('#cube8to9').css('opacity','0');
  $('#bg9-1-spawn').css('opacity','1');
  $('#bg9-1-spawn').addClass('bgo-open');
  $('#bg4-spawn').css('transform-origin','60vw 45vh');
  $('#bg4-spawn').addClass('bg-open');
  $('#text4to1').removeClass('not-now');
  $('#text4to1').css('opacity','0');
  $('#text4to1').addClass('spawn');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#bg4-spawn').removeClass('bg-open');
    $('#bg9-1-spawn').removeClass('bgo-open');
    $('#bg9-1-spawn').css('opacity','0');
    $('#cube1to4').css('transform','rotateY(-180deg) translateX(74vw)');
    $('#cube1to4').css('opacity','1');
    $('#im4to1').removeClass('not-now');
  }, 5010);
  setTimeout(function() {
    $('#text4to1').removeClass('spawn');
    $('#text4to1').css('opacity','1');
    $('#disabled').addClass('not-now');
    $('#bg4-spawn').css('transform-origin','center');
    $('#im4').removeClass('complete');
  }, 5710);
});

document.getElementById('im11').addEventListener("mousedown", function() {
  let elem = this;
  openImage(11, '13', elem);
  document.getElementById('bg11-spawn').style.transformOrigin = '77vw 33vw';
});

document.getElementById('im12').addEventListener("mousedown", function() {
  let elem = this;
  openImage(12, '-', elem);

  setTimeout( () => {
    document.getElementById('bg12-spawn').classList.remove('bg-open');
    document.getElementById('cube12').style.cssText = 'opacity: 1; transform: rotateY(180deg)';
    document.getElementById('to-im13').classList.remove('not-now');
    document.getElementById('icon13').classList.remove('complete');
  }, 5710 );
});

$('#icon13').mousedown(function() {
  $('#im13').addClass('open');
  $('#im13').removeClass('complete');
  $('#bg11').removeClass('bg-open');
  $('#bg11').css({'transform-origin':'35vw 32vw','opacity':'1'});
  $('#bg11').addClass('bgo-open');
  $('#bg13-spawn').addClass('bg-open');
  $('#cube12').css('transform','rotateY(90deg)');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im12').removeClass('not-now');
    $('#cube12').css('opacity','1');
    $('#bg11').css('opacity','0');
    $('#bg11').removeClass('bgo-open');
    $('#bg13-spawn').removeClass('bg-open');
    $('#disabled').addClass('not-now');
    $('#im12').removeClass('complete');
  }, 5010);
});

$('#to-im12').mousedown(function() {
  $('#to-im12').addClass('not-now');
  $('#cube12').removeClass('rotate13');
  $('#cube12').addClass('rotate12');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im13').removeClass('not-now');
    $('#disabled').addClass('not-now');
  }, 3000);
});

$('#to-im13').mousedown(function() {
  $('#to-im13').addClass('not-now');
  $('#cube12').removeClass('rotate12');
  $('#cube12').addClass('rotate13');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#to-im12').removeClass('not-now');
    $('#disabled').addClass('not-now');
  }, 3000);
});

const bgo = document.getElementById('bgo');
const closeButton = document.getElementById('bottom-button');

function openImage(imID, spawnID, elem) {
  if ( elem.classList.contains('complete') ) {
    elem.classList.replace('complete','open');
  } else {
    elem.classList.add('open');
  };
  $('.' + imID).addClass('not-now');
  bgo.classList.add('bgo-open','im' + imID + '-open');
  document.getElementById('bg' + imID + '-spawn').classList.add('bg-open');
  closeButton.classList.add('button-spawn');
  document.getElementById('icon' + spawnID).classList.replace('not-now','spawn');
  setTimeout( () => {
    document.getElementById('icon' + spawnID).classList.remove('spawn');
  }, 5710 );
};

$('#bottom-button').click(function() {
  closeAnimation();
  setTimeout(realClose, 400);
});

function closeAnimation() {
  closeButton.classList.remove('button-spawn');
  $('.close-box').css({'display':'flex','opacity':'1'});

  if ( $(window).width() < 1100 ) {
    setTimeout(function() {
      $('.close-box').css({'display':'none','opacity':'0'});
    }, 1900);
  };
  if ( $(window).width() >= 1100 ) {
    setTimeout(function() {
      $('.close-box').css({'display':'none','opacity':'0'});
    }, 900);
  };
};

function realClose() {
  $('.image-point').removeClass('open');
  $('.image-point').removeClass('spawn');
  $('h5').removeClass('spawn');
  $('img').removeClass('bg-open');
  $('img').removeClass('bg-close');
  $('#bgo').removeClass('bgo-open');
  $('#bgo').removeClass('ride3to2');
  $('#bgo').removeClass('ride5to3');
  $('.1').removeClass('not-now');
  $('.4').removeClass('not-now');
  $('#bg6').css('opacity','1');
  /*$('#bg11').css('opacity','0');*/
  $('#bg9-1-spawn').css('opacity','0');

  $('#bgo').removeClass('im1-open');
  $('#bgo').removeClass('im2-open');
  $('#bgo').removeClass('im3-open');
  $('#bgo').removeClass('im4-open');
  $('#bgo').removeClass('im5-open');
  $('#bgo').removeClass('im6-open');
  $('#bgo').removeClass('im7-open');
  $('#bgo').removeClass('im8-open');
  $('#bgo').removeClass('im10-open');
  $('#bgo').removeClass('im11-open');
  $('#bgo').removeClass('im12-open');

  $('#icon3to2').addClass('not-now');
  $('#icon5to3').addClass('not-now');
  $('#icon6to7').addClass('not-now');
  $('#icon7to10').addClass('not-now');
  $('#icon9to4').addClass('not-now');
  $('#icon13').addClass('not-now');

  $('h5').addClass('not-now');
  $('h5').removeClass('open');
  $('.icon1to4').addClass('not-now');
  $('.icon4to1').addClass('not-now');
  $('.icon2').addClass('not-now');
  $('.icon8to9').addClass('not-now');
  $('.icon9to8').addClass('not-now');
  $('.icon9').addClass('not-now');
  $('.icon12').addClass('not-now');

  $('.cube').css('opacity','0');
  $('#cube1to4').removeClass('rotate1to4');
  $('#cube1to4').removeClass('rotate4to1');
  $('#cube1to4').css('transform','rotateY(0) translateX(74vw)');
  $('#cube2').css('transform','rotateY(0)');
  $('.cube').removeClass('rotate-90');
  $('.cube').removeClass('rotate0');
  $('#cube8to9').removeClass('rotate-to-im9-2');
  $('#cube8to9').removeClass('rotate-to-im9-1');
  $('#cube8to9').removeClass('rotate8to9');
  $('#cube8to9').removeClass('rotate9to8');
  $('#cube12').removeClass('rotate12');
  $('#cube12').removeClass('rotate13');
};

const fly = document.getElementById('fly');

document.addEventListener('keydown', function(e) {
  if(e.keyCode===83) open();
  if(e.keyCode===69) close();
});

document.getElementById('fly-open').addEventListener('mousedown', open);
document.getElementById('cross').addEventListener('mousedown', close);

function open() {
  if (fly.webkitRequestFullscreen) fly.webkitRequestFullscreen();
  else if (fly.requestFullscreen) fly.requestFullscreen();
  
  if (screen.width < 1099px) {
    document.getElementById('images-container').append( document.getElementById('spring19-small').content.cloneNode(true) );
  } else if (screen.width >= 1100px) {
    document.getElementById('images-container').append( document.getElementById('spring19-large').content.cloneNode(true) );
  };
};
function close() {
  if (fly.webkitRequestFullscreen) document.exitFullscreen();
  else if (fly.requestFullscreen) document.exitFullscreen();
};
