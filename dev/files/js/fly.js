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
    document.querySelector('.images-container').appendChild(document.getElementById('spring19-small').content);
    document.getElementById('im2').style.display = 'none';
    document.getElementById('im3').style.display = 'none';
    document.getElementById('im4').style.display = 'none';
    document.getElementById('im7').style.display = 'none';
    document.getElementById('im10').style.display = 'none';
    document.getElementById('im12').style.display = 'none';
  } else if (screen.width >= 1100) {
    document.querySelector('.images-container').appendChild(document.getElementById('spring19-large').content);
  };
});

const fly = document.getElementById('fly');

document.addEventListener('keydown', function(e) {
  console.log(e);
  if(e.keyCode===83) open();
  if(e.keyCode===70) close();
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

//__c__\\

document.querySelector('.icons-container').addEventListener('mousedown', function(e) {
  let elem = e.target;
  if ( e.target==document.getElementById('im1') ) {
    openImage(1, '1to4', elem);
    document.getElementById('cube1to4').style.transform = 'translateX(74vw)';

    setTimeout( () => {
      document.getElementById('bg1-spawn').classList.remove('bg-open');
      document.getElementById('cube1to4').style.opacity = '1';
    }, 5710 );
  };
  if ( e.target==document.getElementById('im2') ) {
    openImage(2, '-', elem);
    document.getElementById('cube2').classList.add('rotate0');
    setTimeout( () => {
      document.getElementById('bg2-spawn').classList.remove('bg-open');
      document.getElementById('cube2').style.opacity = '1';
      document.getElementById('to-im2-2').classList.remove('not-now');
      document.getElementById('icon3to2').classList.remove('complete');
    }, 5710 );
  };
  if ( e.target==document.getElementById('im3') ) {
    openImage(3, '3to2', elem);
    document.getElementById('icon5to3').classList.remove('complete');
  };
  if ( e.target==document.getElementById('im4') ) {
    openImage(4, '4to1', elem);
    document.getElementById('cube1to4').style.transform = 'rotateY(-180deg) translateX(74vw)';

    setTimeout( () => {
      document.getElementById('bg4-spawn').classList.remove('bg-open');
      document.getElementById('cube1to4').style.opacity = '1';
    }, 5710 );
  };
  if ( e.target==document.getElementById('im5') ) {
    openImage(5, '5to3', elem);
  };
  if ( e.target==document.getElementById('im6') ) {
    openImage(6, '6to7', elem);

    setTimeout( () => {
      document.getElementById('bg6-spawn').classList.remove('bg-open');
      document.getElementById('cube6').style.opacity = '1';
    }, 5710 );
  };
  if ( e.target==document.getElementById('im7') ) {
    openImage(7, '7to10', elem);
    document.getElementById('cube6').classList.add('rotate-90');

    setTimeout( () => {
      document.getElementById('bg7-spawn').classList.remove('bg-open');
      document.getElementById('cube6').style.opacity = '1';
      document.getElementById('icon6to7').classList.remove('complete');
    }, 5710 );
  };
  if ( e.target==document.getElementById('im8') ) {
    openImage(8, '8to9', elem);
    document.getElementById('cube8to9').classList.add('rotate9to8');

    setTimeout( () => {
      document.getElementById('bg8-spawn').classList.remove('bg-open');
      document.getElementById('cube8to9').style.opacity = '1';
    }, 5710 );
  };
  if ( e.target==document.getElementById('im10') ) {
    openImage(10, '-', elem);
    document.getElementById('icon7to10').classList.remove('complete');
  };
  if ( e.target==document.getElementById('im11') ) {
    openImage(11, '13', elem);
    document.getElementById('bg11-spawn').style.transformOrigin = '77vw 33vw';
  };
  if ( e.target==document.getElementById('im12') ) {
    openImage(12, '-', elem);
    document.getElementById('cube12').classList.add('rotate12');

    setTimeout( () => {
      document.getElementById('bg12-spawn').classList.remove('bg-open');
      document.getElementById('cube12').style.opacity = '1';
      document.getElementById('to-im13').classList.remove('not-now');
      document.getElementById('icon13').classList.remove('complete');
    }, 5710 );
  };
  if ( e.target==document.getElementById('icon1to4') ) {
    e.target.classList.add('open');
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
  };
  if ( e.target==document.getElementById('icon4to1') ) {
    e.target.classList.add('open');
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
  };
  if ( e.target==document.getElementById('to-im2-1') ) {
    e.target.classList.add('not-now');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('cube2').classList.replace('rotate-90','rotate0');
    setTimeout( () => {
      document.getElementById('to-im2-2').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
    }, 3000 );
  };
  if ( e.target==document.getElementById('to-im2-2') ) {
    e.target.classList.add('not-now');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('cube2').classList.replace('rotate0','rotate-90');
    setTimeout( () => {
      document.getElementById('to-im2-1').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
    }, 3000 );
  };
  if ( e.target==document.getElementById('icon3to2') ) {
    e.target.classList.add('open');
    e.target.classList.remove('complete');
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
  };
  if ( e.target==document.getElementById('icon5to3') ) {
    e.target.classList.add('open');
    e.target.classList.remove('complete');
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
  };
  if ( e.target==document.getElementById('icon6to7') ) {
    e.target.classList.add('open');
    e.target.classList.remove('complete');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('cube6').classList.add('rotate-90');
    setTimeout( () => {
      document.getElementById('icon7to10').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
      document.getElementById('im7').classList.remove('complete');
    }, 3010 );
  };
  if ( e.target==document.getElementById('icon7to10') ) {
    e.target.classList.add('open');
    e.target.classList.remove('complete');
    document.getElementById('bg6').style.opacity = '0';
    document.getElementById('cube6').classList.replace('rotate-90','rotate0');
    document.getElementById('im10').classList.remove('complete');
  };
  if ( e.target==document.getElementById('icon8to9') ) {
    e.target.classList.add('open');
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
  };
  if ( e.target==document.getElementById('icon9to8') ) {
    e.target.classList.add('open');
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
  };
  if ( e.target==document.getElementById('to-im9-2') ) {
    e.target.classList.add('not-now');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('icon9to4').classList.add('not-now');
    document.getElementById('icon9to8').classList.add('not-now');
    document.getElementById('cube8to9').classList.remove('rotate-to-im9-1');
    document.getElementById('cube8to9').classList.add('rotate-to-im9-2');
    setTimeout( () => {
      document.getElementById('to-im9-1').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
    }, 3610 );
  };
  if ( e.target==document.getElementById('to-im9-1') ) {
    e.target.classList.add('not-now');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('cube8to9').classList.remove('rotate-to-im9-2');
    document.getElementById('cube8to9').classList.add('rotate-to-im9-1');
    setTimeout( () => {
      document.getElementById('icon9to4').classList.remove('not-now');
      document.getElementById('icon9to8').classList.remove('not-now');
      document.getElementById('to-im9-2').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
    }, 3610 );
  };
  if ( e.target==document.getElementById('icon9to4') ) {
    e.target.classList.add('open');
    e.target.classList.remove('complete');
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
  };
  if ( e.target==document.getElementById('icon13') ) {
    e.target.classList.add('open');
    e.target.classList.remove('complete');
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
      document.getElementById('disabled').classList.add('not-now');
      document.getElementById('im12').classList.remove('complete');
    }, 5710 );
  };
  if ( e.target==document.getElementById('to-im12') ) {
    e.target.classList.add('not-now');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('cube12').classList.replace('rotate13','rotate12');
    setTimeout( () => {
      document.getElementById('to-im13').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
    }, 3010 );
  };
  if ( e.target==document.getElementById('to-im13') ) {
    e.target.classList.add('not-now');
    document.getElementById('disabled').classList.remove('not-now');
    document.getElementById('cube12').classList.replace('rotate12','rotate13');
    setTimeout( () => {
      document.getElementById('to-im12').classList.remove('not-now');
      document.getElementById('disabled').classList.add('not-now');
    }, 3010 );
  };
});

document.getElementById('bottom-button').addEventListener('click', closeAnimation);

async function closeAnimation() {
  document.getElementById('bottom-button').classList.remove('button-spawn');
  closeWork();
  await closeWork();
};

async function closeWork() {
  async function imagePointClear() {
    for (let i = 0; i < 17; i++) {
      if ( document.querySelectorAll('.image-point')[i].classList.contains('open') ) {
        document.querySelectorAll('.image-point')[i].classList.remove('open');
      };
    };
  };
  async function imagePointShow() {
    for (let i = 0; i < 11; i++) {
      document.querySelectorAll('.image-point')[i].classList.remove('not-now');
    };
  };
  async function h5Clear() {
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll('h5')[i].classList.add('not-now');
    };
  };
  async function imgClear() {
    for (let i = 0; i < 34; i++) {
      if ( document.querySelectorAll('img')[i].classList.contains('bg-open') ) {
        document.querySelectorAll('img')[i].classList.remove('bg-open');
      };
      if ( document.querySelectorAll('img')[i].classList.contains('bg-close') ) {
        document.querySelectorAll('img')[i].classList.remove('bg-close');
      };
    };
  };
  async function cleanElemClasses(elemID, removeID) {
    if ( document.getElementById(`${elemID}`).classList.contains(`${removeID}`) ) {
      document.getElementById(`${elemID}`).classList.remove(`${removeID}`);
    };
  };

  imagePointClear();
  imagePointShow();
  h5Clear();
  imgClear();

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
  cleanElemClasses('bgo','im8-open');
  cleanElemClasses('bgo','im10-open');
  cleanElemClasses('bgo','im11-open');
  cleanElemClasses('bgo','im12-open');

  for (let i = 0; i < 5; i++) {
    document.querySelectorAll('.cube')[i].style.opacity = '0';
  };

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
