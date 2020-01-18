(function () {

document.querySelector('header > button').addEventListener('mouseover', function (e) {
  e.target.style.marginLeft = '0'
  e.target.previousElementSibling.style.display = 'block'
  setTimeout( () => {e.target.previousElementSibling.style.opacity = '1'}, 10 );
});
document.querySelector('header > button').addEventListener('mouseout', function (e) {
  e.target.previousElementSibling.style.opacity = '0'
  setTimeout( () => {
    e.target.previousElementSibling.removeAttribute('style');
    e.target.removeAttribute('style');
  }, 350 );
});

let laterItems = []

document.querySelector('#itemsList').addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.display = 'block'
    setTimeout( () => {e.target.nextElementSibling.style.opacity = '1'}, 10 );
  };
});
document.querySelector('#itemsList').addEventListener('mouseout', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.opacity = '0'
    setTimeout( () => {e.target.nextElementSibling.removeAttribute('style')}, 350 );
  };
});

const counter = document.querySelector('header > [data-counter=""]');

document.querySelector('#itemsList').addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.dataset.later == 'none') {
      e.target.dataset.later = 'later';
      laterItems.push(e.target.parentElement.dataset.index);
      animateMoving(e);
    } else if (e.target.dataset.later == 'later') {
      e.target.dataset.later = 'none';
      let toDelete
      for (let i = 0; i < laterItems.length; i++) {
        if (laterItems[i] == e.target.parentElement.dataset.index) {
          toDelete = i;
        };
      };
      laterItems.splice(toDelete, 1);
      counter.textContent = laterItems.length;
      if (+counter.textContent == 0) counter.removeAttribute('style');
    };
  };

  if (e.target.parentElement.className == 'item' || e.target.className == 'item') {
    if (e.target.tagName != 'BUTTON') {
      console.log(e.target);
    };
  };
});

function animateMoving(e) {
  const file = document.querySelector('#file');
  const folder = document.querySelector('header > button');
  let startX = e.pageX;
  let startY = e.pageY - document.documentElement.scrollTop - 20;
  let finishX = folder.offsetLeft + 25;
  let finishY = folder.offsetTop + 25;
  let controlX =  finishX - (finishX / 5);
  let controlY =  startY - (startY / 5);
  let distance = Math.round( Math.pow( ( Math.pow( (finishX - startX), 2) + Math.pow( (finishY - startY), 2) ), 0.5 ) );
  let speed;
  if (distance <= 300) speed = 0.0039
  else if (distance > 300 && distance <= 600) speed = 0.0027
  else if (distance > 600 && distance <= 1000) speed = 0.0022
  else if (distance > 1000) speed = 0.0018;
  file.style.transitionDuration = (speed * distance).toFixed(3) + 's';
  file.style.display = 'block';
  file.style.offsetPath = `path('M ${startX} ${startY} Q ${controlX} ${controlY} ${finishX} ${finishY}')`;
  setTimeout( () => file.style.offsetDistance = '100%', 20 );
};
file.addEventListener('transitionend', () => {
  file.removeAttribute('style');
  if (+counter.textContent == 0) counter.style.display = 'block';
  counter.textContent = laterItems.length;
});

})()
