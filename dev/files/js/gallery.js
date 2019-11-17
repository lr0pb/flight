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

if (screen.width < 1100) {
  document.getElementById('gallery-place').appendChild(document.getElementById('spring19-small').content);
} else if (screen.width >= 1100) {
  document.getElementById('gallery-place').appendChild(document.getElementById('spring19-large').content);
};

document.getElementById('gallery-place').addEventListener('focus', () => {
  document.getElementById('gallery-block').style.filter = 'drop-shadow(0 -2rem 3rem #2b4282)';
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
document.getElementById('prev-field').addEventListener('click', function() {
  i--;
  document.querySelectorAll('img')[i].scrollIntoView({block: 'start', behavior: 'smooth'});
  if (i===0) {
    document.getElementById('prev-field').style.display = 'none';
  } else {
    document.getElementById('next-field').style.display = '';
    document.getElementById('prev-field').style.display = '';
  };
  return i;
});
document.getElementById('next-field').addEventListener('click', function() {
  i++;
  document.querySelectorAll('img')[i].scrollIntoView({block: 'start', behavior: 'smooth'});
  if (i===18) {
    document.getElementById('next-field').style.display = 'none';
  } else {
    document.getElementById('next-field').style.display = '';
    document.getElementById('prev-field').style.display = '';
  };
  return i;
});
document.getElementById('gallery-place').addEventListener('keydown', function(e) {
  if(e.keyCode===37) {
    if (i>0) {
      i--;
    };
    if (i===0) {
      document.getElementById('prev-field').style.display = 'none';
    } else {
      document.getElementById('next-field').style.display = '';
      document.getElementById('prev-field').style.display = '';
    };
    return i;
  };
  if (e.keyCode===39) {
    if (i<18) {
      i++;
    };
    if (i===18) {
      document.getElementById('next-field').style.display = 'none';
    } else {
      document.getElementById('next-field').style.display = '';
      document.getElementById('prev-field').style.display = '';
    };
    return i;
  };
});
