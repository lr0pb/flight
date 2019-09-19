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

  $('#fly-start').addClass('not-now');
  $('#cards-block').addClass('not-now');
  setTimeout(function() {
    $('#transition-layer').css('display','none');
  }, 1000);
  setTimeout(function() {
    $('#fly-start').removeClass('not-now');
    $('#cards-block').removeClass('not-now');
    $('body').removeClass('overflow-hidden');
  }, 12500);

  $('.image-point').addClass('complete');
  $('#help-point').addClass('fade-from-down');
  $('.image-point').mousedown(function() {
    $('#help-point').removeClass('fade-from-down');
    $('#help-point').addClass('fade-to-down');
  });
  $('.180-point').mousedown(function() {
    setTimeout(function() {
      $('#help-180').addClass('fade-from-down');
    }, 4010);
  });
});

$('#im1').mousedown(function() {
  $('#im1').addClass('open');
  $('#im1').removeClass('complete');
  $('#bgo').addClass('im1-open');
  $('#bgo').addClass('bgo-open');
  $('.1').addClass('not-now');
  $('#bg1-spawn').addClass('bg-open');
  $('#text1to4').removeClass('not-now');
  $('#text1to4').css('opacity','0');
  $('#text1to4').addClass('spawn');
  setTimeout(function() {
    $('#text1to4').removeClass('spawn');
    $('#text1to4').css('opacity','1');
    $('#bg1-spawn').removeClass('bg-open');
    $('#cube1to4').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
  }, 5710);
});

$('.icon1to4').mousedown(function() {
  $('#text1to4').addClass('open');
  $('#im1to4').addClass('not-now');
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

$('#im2').mousedown(function() {
  $('#im2').addClass('open');
  $('#im2').removeClass('complete');
  $('#bgo').addClass('im2-open');
  $('#bgo').addClass('bgo-open');
  $('.2').addClass('not-now');
  $('#bg2-1-spawn').addClass('bg-open');
  setTimeout(function() {
    $('#bg2-1-spawn').removeClass('bg-open');
    $('#to-im2-2').removeClass('not-now');
    $('#cube2').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
    $('#im3to2').removeClass('complete');
  }, 5010);
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

$('#im3').mousedown(function() {
  $('#im3').addClass('open');
  $('#im3').removeClass('complete');
  $('#bgo').addClass('im3-open');
  $('#bgo').addClass('bgo-open');
  $('.3').addClass('not-now');
  $('#bg3').addClass('bg-open');
  $('#im3to2').removeClass('not-now');
  $('#im3to2').css('opacity','0');
  $('#im3to2').addClass('spawn');
  setTimeout(function() {
    $('#im3to2').removeClass('spawn');
    $('#im3to2').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
    $('#im5to3').removeClass('complete');
  }, 5710);
});

$('#im3to2').mousedown(function() {
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

$('#im4').mousedown(function() {
  $('#im4').addClass('open');
  $('#im4').removeClass('complete');
  $('#bgo').addClass('im4-open');
  $('#bgo').addClass('bgo-open');
  $('.4').addClass('not-now');
  $('#bg4-spawn').addClass('bg-open');
  $('#text4to1').removeClass('not-now');
  $('#text4to1').css('opacity','0');
  $('#text4to1').addClass('spawn');
  $('#cube1to4').css('transform','rotateY(-180deg) translateX(74vw)');
  setTimeout(function() {
    $('#im4to1').removeClass('not-now');
  }, 5010);
  setTimeout(function() {
    $('#text4to1').removeClass('spawn');
    $('#text4to1').css('opacity','1');
    $('#bg4-spawn').removeClass('bg-open');
    $('#cube1to4').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
    $('#im9to4').removeClass('complete');
  }, 5710);
});

$('.icon4to1').mousedown(function() {
  $('#text4to1').addClass('open');
  $('#im4to1').addClass('not-now');
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

$('#im5').mousedown(function() {
  $('#im5').addClass('open');
  $('#im5').removeClass('complete');
  $('#bgo').addClass('im5-open');
  $('#bgo').addClass('bgo-open');
  $('.5').addClass('not-now');
  $('#bg5').addClass('bg-open');
  $('#im5to3').removeClass('not-now');
  $('#im5to3').css('opacity','0');
  $('#im5to3').addClass('spawn');
  setTimeout(function() {
    $('#im5to3').removeClass('spawn');
    $('#im5to3').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
  }, 5710);
});

$('#im5to3').mousedown(function() {
  $('#im5to3').addClass('open');
  $('#im5to3').removeClass('complete');
  $('#bg5').addClass('bg-close');
  $('#bgo').addClass('ride5to3');
  $('#im3to2').removeClass('not-now');
  $('#im3to2').css('opacity','0');
  $('#im3to2').addClass('spawn');
  $('#disabled').removeClass('not-now');
  setTimeout(function() {
    $('#bg3').addClass('bg-open');
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

$('#im6').mousedown(function() {
  $('#im6').addClass('open');
  $('#im6').removeClass('complete');
  $('#bgo').addClass('im6-open');
  $('#bgo').addClass('bgo-open');
  $('.6').addClass('not-now');
  $('#bg6-spawn').addClass('bg-open');
  $('#im6to7').removeClass('not-now');
  $('#im6to7').css('opacity','0');
  $('#im6to7').addClass('spawn');
  setTimeout(function() {
    $('#bg6-spawn').removeClass('bg-open');
    $('#cube6').css('opacity','1');
  }, 5010);
  setTimeout(function() {
    $('#im6to7').removeClass('spawn');
    $('#im6to7').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
  }, 5710);
});

$('#im6to7').mousedown(function() {
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

$('#im7').mousedown(function() {
  $('#im7').addClass('open');
  $('#im7').removeClass('complete');
  $('#bgo').addClass('im7-open');
  $('#bgo').addClass('bgo-open');
  $('.7').addClass('not-now');
  $('#bg7-spawn').addClass('bg-open');
  $('#cube6').addClass('rotate-90');
  $('#im7to10').removeClass('not-now');
  $('#im7to10').css('opacity','0');
  $('#im7to10').addClass('spawn');
  setTimeout(function() {
    $('#bg7-spawn').removeClass('bg-open');
    $('#cube6').css('opacity','1');
  }, 5010);
  setTimeout(function() {
    $('#im7to10').removeClass('spawn');
    $('#im7to10').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
    $('#im6to7').removeClass('complete');
  }, 5710);
});

$('#im7to10').mousedown(function() {
  $('#im7to10').addClass('open');
  $('#im7to10').removeClass('complete');
  $('#bg6').css('opacity','0');
  $('#cube6').removeClass('rotate-90');
  $('#cube6').addClass('rotate0');
  $('#im10').removeClass('complete');
});

$('#im10').mousedown(function() {
  $('#im10').addClass('open');
  $('#im10').removeClass('complete');
  $('#bgo').addClass('im10-open');
  $('#bgo').addClass('bgo-open');
  $('.10').addClass('not-now');
  $('#bg10-spawn').addClass('bg-open');
  setTimeout(function() {
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
    $('#im7to10').removeClass('complete');
  }, 5010);
});

$('#im8').mousedown(function() {
  $('#im8').addClass('open');
  $('#im8').removeClass('complete');
  $('#bgo').addClass('im8-open');
  $('#bgo').addClass('bgo-open');
  $('.8').addClass('not-now');
  $('#cube8to9').addClass('bg-open');
  $('#text8to9').removeClass('not-now');
  $('#text8to9').css('opacity','0');
  $('#text8to9').addClass('spawn');
  setTimeout(function() {
    $('#im8to9').removeClass('not-now');
    $('#cube8to9').removeClass('bg-open');
    $('#cube8to9').css('opacity','1');
  }, 5010);
  setTimeout(function() {
    $('#text8to9').removeClass('spawn');
    $('#text8to9').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
  }, 5710);
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

$('#im9to4').mousedown(function() {
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

$('#im11').mousedown(function() {
  $('#im11').addClass('open');
  $('#im11').removeClass('complete');
  $('#bgo').addClass('im11-open');
  $('#bgo').addClass('bgo-open');
  $('.11').addClass('not-now');
  $('#bg11').css('transform-origin','77vw 54vh');
  $('#bg11').addClass('bg-open');
  $('#im13').removeClass('not-now');
  $('#im13').css('opacity','0');
  $('#im13').addClass('spawn');
  setTimeout(function() {
    $('#im13').removeClass('spawn');
    $('#im13').css('opacity','1');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
  }, 5710);
});

$('#im12').mousedown(function() {
  $('#im12').addClass('open');
  $('#im12').removeClass('complete');
  $('#bgo').addClass('im12-open');
  $('#bgo').addClass('bgo-open');
  $('.12').addClass('not-now');
  $('#bg12-spawn').addClass('bg-open');
  setTimeout(function() {
    $('#bg12-spawn').removeClass('bg-open');
    $('#cube12').css('transform','rotateY(180deg)')
    $('#cube12').css('opacity','1');
    $('#to-im13').removeClass('not-now');
    $('#bottom-button').css('display','block');
    $('#bottom-button').addClass('button-spawn');
    $('#im13').removeClass('complete');
  }, 5010);
});

$('#im13').mousedown(function() {
  $('#im13').addClass('open');
  $('#im13').removeClass('complete');
  $('#bg11').removeClass('bg-open');
  $('#bg11').css({'transform-origin':'35vw 40vh','opacity':'1'});
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

$('#bottom-button').click(function() {
  closeAnimation();
  setTimeout(realClose, 400);
});

function closeAnimation() {
  $('#bottom-button').css('display','none');
  $('.close-box').css({'display':'flex','opacity':'1'});

  if ( $(window).width() < 1000 ) {
    setTimeout(function() {
      $('.close-box').css({'display':'none','opacity':'0'});
    }, 2100);
  };
  if ( $(window).width() >= 1000 ) {
    setTimeout(function() {
      $('.close-box').css({'display':'none','opacity':'0'});
    }, 900);
  };
};

function realClose() {
  $('#bottom-button').removeClass('button-spawn');
  $('.image-point').removeClass('open');
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

  $('#im1to4').addClass('not-now');
  $('#im4to1').addClass('not-now');
  $('#im3to2').addClass('not-now');
  $('#im5to3').addClass('not-now');
  $('#im6to7').addClass('not-now');
  $('#im7to10').addClass('not-now');
  $('#im9to4').addClass('not-now');
  $('#im13').addClass('not-now');

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

var fly = document.getElementById('fly');

$(document).keydown(function(e) {
  if(e.keyCode===83){
    open();
  };
  if(e.keyCode===69){
    close();
  };
});
$('#fly-open').mousedown(open);
function open() {
  if (fly.webkitRequestFullscreen) fly.webkitRequestFullscreen();
  else if (fly.requestFullscreen) fly.requestFullscreen();
};
$('#cross').click(close);
function close() {
  if (fly.webkitRequestFullscreen) document.exitFullscreen();
  else if (fly.requestFullscreen) document.exitFullscreen();
};
$('#about').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://lr0pb.github.io";
  }, 1000);
});
$('#log').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://lr0pb.github.io/news";
  }, 1000);/*
  setTimeout(function() {
    $('body').removeClass('overflow-hidden');
    $('#transition-layer').css('display','none');
  }, 1100);*/
});
$('#img').click(function() {
  $('body').addClass('overflow-hidden');
  $('#transition-layer').css({
    'display':'block',
    'animation':'1s transition-start-phase'
  });
  setTimeout(function() {
    document.location.href = "https://lr0pb.github.io/gallery";
  }, 1000);/*
  setTimeout(function() {
    $('body').removeClass('overflow-hidden');
    $('#transition-layer').css('display','none');
  }, 1100);*/
});
