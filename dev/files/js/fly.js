/*$(document).ready(function() {
  if ( localStorage.getItem('isFirstEntry') == 1 ) {
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
  }
});*/

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 11; i++) {
    document.querySelectorAll('.image-point')[i].addEventListener('mousedown', () => {
      document.getElementById('help-point').classList.replace('fade-from-down','fade-to-down');
    });
  };

  for (let i = 0; i < 3; i++) {
    document.querySelectorAll('.point-180')[i].addEventListener('mousedown', () => {
      setTimeout( () => {document.getElementById('help-180').classList.add('fade-from-down');}, 4000 );
    });
  };

  if (screen.width < 1100) {
    document.querySelector('.images-container').append( document.getElementById('spring19-small').content.cloneNode(true) );
  } else if (screen.width >= 1100) {
    document.querySelector('.images-container').append( document.getElementById('spring19-large').content.cloneNode(true) );
  };
});

const fly = document.getElementById('fly');

document.addEventListener('keydown', function(e) {
  console.log(e);
  if(e.keyCode===83) open();
  if(e.keyCode===69) close();
  if(e.keyCode===27) close();
  if(e.keyCode===122) close();
});

document.getElementById('fly-open').addEventListener('click', open);
document.getElementById('fly-open').addEventListener('keydown', function(e) {
  if (e.keyCode===13) open();
});
document.getElementById('cross').addEventListener('click', close);

function open() {
  if (fly.webkitRequestFullscreen) fly.webkitRequestFullscreen();
  else if (fly.requestFullscreen) fly.requestFullscreen();
};
function close() {
  if (fly.webkitRequestFullscreen) document.exitFullscreen();
  else if (fly.requestFullscreen) document.exitFullscreen();
};

function openImage(imID, spawnID, elem) {
  if ( elem.classList.contains('complete') ) {
    elem.classList.replace('complete','open');
  } else {
    elem.classList.add('open');
  };
  for (let i = 0; i < 10; i++) {
    document.querySelectorAll(`.n${imID}`)[i].classList.add('not-now');
  };
  document.getElementById('bgo').classList.add('bgo-open','im' + imID + '-open');
  document.getElementById('bg' + imID + '-spawn').classList.add('bg-open');
  document.getElementById('bottom-button').classList.add('button-spawn');
  document.getElementById('icon' + spawnID).classList.replace('not-now','spawn');
  setTimeout( () => {
    document.getElementById('icon' + spawnID).classList.remove('spawn');
  }, 5710 );
};

//__IMAGE 1__\\

document.getElementById('im1').addEventListener('mousedown', function() {
  let elem = this;
  openImage(1, '1to4', elem);

  setTimeout( () => {
    document.getElementById('bg1-spawn').classList.remove('bg-open');
    document.getElementById('cube1to4').style.opacity = '1';
  }, 5710 );
});

document.getElementById('icon1to4').addEventListener('mousedown', function() {
  this.classList.add('open');
  document.getElementById('disabled').classList.remove('not-now');
  if ( document.getElementById('cube1to4').classList.contains('rotate4to1') ) {
    document.getElementById('cube1to4').classList.replace('rotate4to1','rotate1to4');
  } else {
    document.getElementById('cube1to4').classList.add('rotate1to4');
  };
  document.getElementById('help-180').classList.replace('fade-from-down','fade-to-down');
  setTimeout( () => {
    document.getElementById('icon4to1').classList.replace('not-now','spawn');
    document.getElementById('icon4to1').style.opacity = '0';
  }, 8710 );
  setTimeout( () => {
    document.getElementById('icon1to4').classList.remove('open');
    document.getElementById('icon1to4').classList.add('not-now');
    document.getElementById('icon4to1').classList.remove('spawn');
    document.getElementById('icon4to1').style.opacity = '1';
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('im4').classList.remove('complete');
    document.getElementById('icon9to4').classList.remove('complete');
  }, 14510 );
});

//__IMAGE 2__\\

document.getElementById('im2').addEventListener('mousedown', function() {
  let elem = this;
  openImage(2, '-', elem);
  document.getElementById('cube2').classList.add('rotate0');
  setTimeout( () => {
    document.getElementById('bg2-spawn').classList.remove('bg-open');
    document.getElementById('cube2').style.opacity = '1';
    document.getElementById('to-im2-2').classList.remove('not-now');
    document.getElementById('icon3to2').classList.remove('complete');
  }, 5710 );
});

document.getElementById('to-im2-1').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube2').classList.replace('rotate-90','rotate0');
  setTimeout( () => {
    document.getElementById('to-im2-2').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
  }, 3000 )
});

document.getElementById('to-im2-2').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube2').classList.replace('rotate0','rotate-90');
  setTimeout( () => {
    document.getElementById('to-im2-1').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
  }, 3000 )
});

//__IMAGE 3__\\

document.getElementById('im3').addEventListener('mousedown', function() {
  let elem = this;
  openImage(3, '3to2', elem);
  document.getElementById('icon5to3').classList.remove('complete');
});

document.getElementById('icon3to2').addEventListener('mousedown', function() {
  this.classList.add('open');
  this.classList.remove('complete');
  document.getElementById('bg3-spawn').classList.replace('bg-open','bg-close');
  bgo.classList.add('im3-open','ride3to2');
  document.getElementById('cube2').classList.add('rotate-90');
  document.getElementById('disabled').classList.remove('not-now');
  setTimeout( () => {document.getElementById('bg2-2-spawn').classList.add('bg-open');}, 1000 );
  setTimeout( () => {
    document.getElementById('to-im2-1').classList.remove('not-now');
    document.getElementById('cube2').style.opacity = '1';
    document.getElementById('bg2-2-spawn').classList.remove('bg-open');
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('im2').classList.remove('complete');
  }, 6010 );
});

//__IMAGE 4__\\

document.getElementById('im4').addEventListener('mousedown', function() {
  let elem = this;
  openImage(4, '4to1', elem);
  document.getElementById('cube1to4').style.transform = 'rotateY(-180deg) translateX(74vw)';

  setTimeout( () => {
    document.getElementById('bg4-spawn').classList.remove('bg-open');
    document.getElementById('cube1to4').style.opacity = '1';
  }, 5710 );
});

document.getElementById('icon4to1').addEventListener('mousedown', function() {
  this.classList.add('open');
  document.getElementById('disabled').classList.remove('not-now');
  if ( document.getElementById('cube1to4').classList.contains('rotate1to4') ) {
    document.getElementById('cube1to4').classList.replace('rotate1to4','rotate4to1');
  } else {
    document.getElementById('cube1to4').classList.add('rotate4to1');
  };
  document.getElementById('help-180').classList.replace('fade-from-down','fade-to-down');
  setTimeout( () => {
    document.getElementById('icon1to4').classList.replace('not-now','spawn');
    document.getElementById('icon1to4').style.opacity = '0';
  }, 8710 );
  setTimeout( () => {
    document.getElementById('icon4to1').classList.remove('open');
    document.getElementById('icon4to1').classList.add('not-now');
    document.getElementById('icon1to4').classList.remove('spawn');
    document.getElementById('icon1to4').style.opacity = '1';
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('im1').classList.remove('complete');
  }, 14510 );
});

//__IMAGE 5__\\

document.getElementById('im5').addEventListener('mousedown', function() {
  let elem = this;
  openImage(5, '5to3', elem);
});

document.getElementById('icon5to3').addEventListener('mousedown', function() {
  this.classList.add('open');
  this.classList.remove('complete');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('bg5-spawn').classList.replace('bg-open','bg-close');
  bgo.classList.add('ride5to3');
  setTimeout( () => {
    document.getElementById('bg3-spawn').classList.add('bg-open');
    document.getElementById('icon3to2').classList.replace('not-now','spawn');
    document.getElementById('icon3to2').style.opacity = '0';
  }, 1000 );
  setTimeout( () => {
    document.getElementById('icon3to2').classList.remove('spawn');
    document.getElementById('icon3to2').style.opacity = '1';
    bgo.classList.remove('ride5to3','im5-open');
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('im3').classList.remove('complete');
  }, 6010 );
});

//__IMAGE 6__\\

document.getElementById('im6').addEventListener('mousedown', function() {
  let elem = this;
  openImage(6, '6to7', elem);

  setTimeout( () => {
    document.getElementById('bg6-spawn').classList.remove('bg-open');
    document.getElementById('cube6').style.opacity = '1';
  }, 5710 );
});

document.getElementById('icon6to7').addEventListener('mousedown', function() {
  this.classList.add('open');
  this.classList.remove('complete');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube6').classList.add('rotate-90');
  setTimeout( () => {
    document.getElementById('icon7to10').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('im7').classList.remove('complete');
  }, 3010 );
});

//__IMAGE 7__\\

document.getElementById('im7').addEventListener('mousedown', function() {
  let elem = this;
  openImage(7, '7to10', elem);
  document.getElementById('cube6').classList.add('rotate-90');

  setTimeout( () => {
    document.getElementById('bg7-spawn').classList.remove('bg-open');
    document.getElementById('cube6').style.opacity = '1';
    document.getElementById('icon6to7').classList.remove('complete');
  }, 5710 );
});

document.getElementById('icon7to10').addEventListener('mousedown', function() {
  this.classList.add('open');
  this.classList.remove('complete');
  document.getElementById('bg6').style.opacity = '0';
  document.getElementById('cube6').classList.replace('rotate-90','rotate0');
  document.getElementById('im10').classList.remove('complete');
});

//__IMAGE 10__\\

document.getElementById('im10').addEventListener('mousedown', function() {
  let elem = this;
  openImage(10, '-', elem);
  document.getElementById('icon7to10').classList.remove('complete');
});

//__IMAGE 8__\\

document.getElementById('im8').addEventListener('mousedown', function() {
  let elem = this;
  openImage(8, '8to9', elem);
  document.getElementById('cube8to9').classList.add('rotate9to8');

  setTimeout( () => {
    document.getElementById('bg8-spawn').classList.remove('bg-open');
    document.getElementById('cube8to9').style.opacity = '1';
  }, 5710 );
});

document.getElementById('icon8to9').addEventListener('mousedown', function() {
  this.classList.add('open');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube8to9').classList.replace('rotate9to8','rotate8to9');
  document.getElementById('help-180').classList.replace('fade-from-down','fade-to-down');
  document.getElementById('icon9to8').classList.replace('not-now','spawn');
  document.getElementById('icon9to4').classList.replace('not-now','spawn');
  setTimeout( () => {
    document.getElementById('to-im9-2').classList.remove('not-now');
    document.getElementById('icon9to8').classList.remove('spawn');
    document.getElementById('icon9to4').classList.remove('spawn');
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('icon8to9').classList.replace('open','not-now');
  }, 5710 );
});

document.getElementById('icon9to8').addEventListener('mousedown', function() {
  this.classList.add('open');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube8to9').classList.replace('rotate8to9','rotate9to8');
  document.getElementById('cube8to9').classList.remove('rotate-to-im9-1');
  document.getElementById('icon8to9').classList.replace('not-now','spawn');
  document.getElementById('icon9to4').classList.add('not-now');
  document.getElementById('to-im9-2').classList.add('not-now');
  setTimeout( () => {
    document.getElementById('icon8to9').classList.remove('spawn');
    document.getElementById('disabled').classList.add('not-now');
    document.getElementById('icon9to8').classList.replace('open','not-now');
  }, 5710 );
});

//__IMAGE 9__\\

document.getElementById('to-im9-2').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('icon9to4').classList.add('not-now');
  document.getElementById('icon9to8').classList.add('not-now');
  document.getElementById('cube8to9').classList.remove('rotate-to-im9-1');
  document.getElementById('cube8to9').classList.add('rotate-to-im9-2');
  setTimeout( () => {
    document.getElementById('to-im9-1').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
  }, 3610 );
});

document.getElementById('to-im9-1').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube8to9').classList.remove('rotate-to-im9-2');
  document.getElementById('cube8to9').classList.add('rotate-to-im9-1');
  setTimeout( () => {
    document.getElementById('icon9to4').classList.remove('not-now');
    document.getElementById('icon9to8').classList.remove('not-now');
    document.getElementById('to-im9-2').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
  }, 3610 );
});

document.getElementById('icon9to4').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  this.classList.remove('complete');
  document.getElementById('im4').classList.remove('complete');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('icon9to8').classList.add('not-now');
  document.getElementById('to-im9-2').classList.add('not-now');
  document.getElementById('cube8to9').style.opacity = '0';
  document.getElementById('bg9-1-spawn').style.opacity = '1';
  document.getElementById('bg9-1-spawn').classList.add('bgo-open');
  document.getElementById('bg4-spawn').style.transformOrigin = '60vw 35vw';
  document.getElementById('bg4-spawn').classList.add('bg-open');
  document.getElementById('icon4to1').style.opacity = '0';
  document.getElementById('icon4to1').classList.replace('not-now','spawn');
  setTimeout( () => {
    document.getElementById('bg9-1-spawn').style.opacity = '0';
    document.getElementById('bg9-1-spawn').classList.remove('bgo-open');
    document.getElementById('bg4-spawn').classList.remove('bg-open');
    document.getElementById('bg4-spawn').style.transformOrigin = 'center';
    document.getElementById('icon4to1').style.opacity = '1';
    document.getElementById('icon4to1').classList.remove('spawn');
    document.getElementById('cube1to4').style.opacity = '1';
    document.getElementById('cube1to4').style.transform = 'rotateY(-180deg) translateX(74vw)';
    document.getElementById('disabled').classList.add('not-now');
  }, 5710 );
});

//__IMAGE 11__\\

document.getElementById('im11').addEventListener('mousedown', function() {
  let elem = this;
  openImage(11, '13', elem);
  document.getElementById('bg11-spawn').style.transformOrigin = '77vw 33vw';
});

//__IMAGE 12__\\

document.getElementById('im12').addEventListener('mousedown', function() {
  let elem = this;
  openImage(12, '-', elem);
  document.getElementById('cube12').classList.add('rotate12');

  setTimeout( () => {
    document.getElementById('bg12-spawn').classList.remove('bg-open');
    document.getElementById('cube12').style.opacity = '1';
    document.getElementById('to-im13').classList.remove('not-now');
    document.getElementById('icon13').classList.remove('complete');
  }, 5710 );
});

//__IMAGE 13__\\

document.getElementById('icon13').addEventListener('mousedown', function() {
  this.classList.add('open');
  this.classList.remove('complete');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('bg11-spawn').style.cssText = 'opacity: 1; transform-origin: 35vw 32vw;';
  document.getElementById('bg11-spawn').classList.replace('bg-open','bgo-open');
  document.getElementById('bg13-spawn').classList.add('bg-open');
  document.getElementById('cube12').classList.add('rotate13');
  setTimeout( () => {
    document.getElementById('to-im12').classList.remove('not-now');
    document.getElementById('cube12').style.opacity = '1';
    document.getElementById('bg11-spawn').style.opacity = '0';
    document.getElementById('bg11-spawn').classList.remove('bgo-open');
    document.getElementById('bg11-spawn').classList.remove('bg-open');
    document.getElementById('bg13-spawn').classList.remove('bg-open');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('im12').classList.remove('complete');
  }, 5710 );
});

document.getElementById('to-im12').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube12').classList.replace('rotate13','rotate12');
  setTimeout( () => {
    document.getElementById('to-im13').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
  }, 3010 );
});

document.getElementById('to-im13').addEventListener('mousedown', function() {
  this.classList.add('not-now');
  document.getElementById('disabled').classList.remove('not-now');
  document.getElementById('cube12').classList.replace('rotate12','rotate13');
  setTimeout( () => {
    document.getElementById('to-im12').classList.remove('not-now');
    document.getElementById('disabled').classList.add('not-now');
  }, 3010 );
});

document.getElementById('bottom-button').addEventListener('click', () => {
  closeAnimation();
  setTimeout(realClose, 400);
});

function closeAnimation() {
  document.getElementById('bottom-button').classList.remove('button-spawn');
  document.querySelector('.close-box').style.cssText = 'display: flex; opacity: 1;';
  if (screen.width < 1100) {
    setTimeout( () => {document.querySelector('.close-box').style.cssText = 'display: none; opacity: 0;';}, 1900 );
  } else if (screen.width >= 1100) {
    setTimeout( () => {document.querySelector('.close-box').style.cssText = 'display: none; opacity: 0;';}, 900 );
  };
};

function realClose() {
  for (let i = 0; i < document.querySelectorAll('.image-point').lenght; i++) {
    if ( document.querySelectorAll('.image-point')[i].classList.contains('open') ) {
      document.querySelectorAll('.image-point')[i].classList.remove('open');
    };
  };
  for (let i = 0; i < 11; i++) {
    document.querySelectorAll('.image-point')[i].classList.remove('not-now');
  };
  for (let i = 0; i < document.querySelectorAll('h5').lenght; i++) {
    document.querySelectorAll('h5')[i].classList.add('not-now');
  };
  for (let i = 0; i < document.querySelectorAll('img').lenght; i++) {
    if ( document.querySelectorAll('img')[i].classList.contains('bg-open') ) {
      document.querySelectorAll('img')[i].classList.remove('bg-open');
    };
    if ( document.querySelectorAll('img')[i].classList.contains('bg-close') ) {
      document.querySelectorAll('img')[i].classList.remove('bg-close');
    };
  };
  function cleanElemClasses(elemID, removeID) {
    if ( document.getElementById(`${elemID}`).classList.contains(`${removeID}`) ) {
      document.getElementById(`${elemID}`).classList.remove(`${removeID}`);
    };
  };
  bgo.classList.remove('bgo-open');
  cleanElemClasses('bgo','ride3to2');
  cleanElemClasses('bgo','ride5to3');
  cleanElemClasses('bgo','im1-open');
  cleanElemClasses('bgo','im2-open');
  cleanElemClasses('bgo','im3-open');
  cleanElemClasses('bgo','im4-open');
  cleanElemClasses('bgo','im5-open');
  cleanElemClasses('bgo','im6-open');
  cleanElemClasses('bgo','im7-open');
  cleanElemClasses('bgo','om8-open');
  cleanElemClasses('bgo','im10-open');
  cleanElemClasses('bgo','im11-open');
  cleanElemClasses('bgo','im12-open');

  document.getElementById('bg6').style.opacity = '1';
  document.getElementById('bg9-1-spawn').style.opacity = '0';
  document.getElementById('icon3to2').classList.add('not-now');
  document.getElementById('icon5to3').classList.add('not-now');
  document.getElementById('icon6to7').classList.add('not-now');
  document.getElementById('icon7to10').classList.add('not-now');
  document.getElementById('icon9to4').classList.add('not-now');
  document.getElementById('icon13').classList.add('not-now');

  document.getElementById('icon1to4').classList.add('not-now');
  document.getElementById('icon4to1').classList.add('not-now');
  document.getElementById('to-im2-1').classList.add('not-now');
  document.getElementById('to-im2-2').classList.add('not-now');
  document.getElementById('icon8to9').classList.add('not-now');
  document.getElementById('icon9to8').classList.add('not-now');
  document.getElementById('to-im9-1').classList.add('not-now');
  document.getElementById('to-im9-2').classList.add('not-now');
  document.getElementById('to-im12').classList.add('not-now');
  document.getElementById('to-im13').classList.add('not-now');

  for (let i = 0; i < document.querySelectorAll('.cube').lenght; i++) {
    document.querySelectorAll('.cube')[i].style.opacity = '0';
  };
  cleanElemClasses('cube1to4','rotate1to4');
  cleanElemClasses('cube1to4','rotate4to1');
  cleanElemClasses('cube2','rotate-90');
  cleanElemClasses('cube2','rotate0');
  cleanElemClasses('cube6','rotate-90');
  cleanElemClasses('cube6','rotate0');
  cleanElemClasses('cube8to9','rotate-to-im9-2');
  cleanElemClasses('cube8to9','rotate-to-im9-1');
  cleanElemClasses('cube12','rotate12');
  cleanElemClasses('cube12','rotate13');
};
/*
$('#bottom-button').click(function() {
  closeAnimation();
  setTimeout(realClose, 400);
});

function closeAnimation() {
  document.getElementById('bottom-button').classList.remove('button-spawn');
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
  $('.n1').removeClass('not-now');
  $('.n4').removeClass('not-now');
  $('#bg6').css('opacity','1');
  $('#bg11').css('opacity','0');
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
};*/
