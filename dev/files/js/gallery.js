const circle = document.getElementById('circle');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    document.querySelector('body').classList.remove('overflow-hidden');
    circle.classList.remove('circle-spawn');
    circle.style.display = 'none';
    circle.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
  }, 2010 );

  if (localStorage.getItem('checkNews')!=='yes') {
    document.getElementById('to-news').classList.add('not-read');
  };
});

document.getElementById('to-news').addEventListener('click', function(e) {
  click(e);
  setTimeout( () => {document.location.href = 'https://flight.pp.ua/dev/news'}, 1200 );
});

document.getElementById('to-news').addEventListener('keydown', function(e) {
  if (e.keyCode===13) document.location.href = 'https://flight.pp.ua/dev/news';
});

function click(e) {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  circle.style.top = e.pageY + 'px';
  circle.style.left = e.pageX + 'px';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)';circle.style.opacity = '1'}, 15);
};

document.getElementById('gallery-place').addEventListener('focus', () => {
  document.getElementById('gallery-block').style.filter = 'drop-shadow(0 0 3rem #2b4282)';
});
document.getElementById('gallery-place').addEventListener('blur', () => {
  document.getElementById('gallery-block').style.filter = '';
});

document.addEventListener('keydown', function(e) {
  console.log(e);
  if(e.keyCode===66) back();
});

function back() {
  document.querySelector('body').classList.add('overflow-hidden');
  circle.style.display = 'block';
  setTimeout( () => {circle.style.transform = 'translateX(-50%) translateY(-50%) scale(5)'; circle.style.opacity = '1'}, 15);
  setTimeout( () => {document.location.href = "https://flight.pp.ua/dev/fly";}, 1200 );
};

let i = 0;
document.getElementById('next-field').addEventListener('click', function() {
  i++;
  document.querySelectorAll('img')[i].scrollIntoView({block: 'start', behavior: 'smooth'});
  return i;
  if (i=18) {
    document.getElementById('next-field').classList.add('not-now');
  } else {
    if (document.getElementById('next-field').classList.contains('not-now');) {
      document.getElementById('next-field').classList.remove('not-now');
    };
  };
});
document.getElementById('prev-field').addEventListener('click', function() {
  i--;
  document.querySelectorAll('img')[i].scrollIntoView({block: 'start', behavior: 'smooth'});
  return i;
  if (i=0) {
    document.getElementById('prev-field').classList.add('not-now');
  } else {
    if (document.getElementById('prev-field').classList.contains('not-now');) {
      document.getElementById('prev-field').classList.remove('not-now');
    };
  };
});

/*const bg131 = document.getElementById('bg13-1');
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
};*/
