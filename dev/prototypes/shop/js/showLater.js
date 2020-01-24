(function () {

document.querySelector('#itemsList').addEventListener('mouseover', function (e) {
  showItemHint(e);
});
document.querySelector('#itemsList').addEventListener('mouseout', function (e) {
  hideItemHint(e);
});

document.querySelector('#itemsList').addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.dataset.later == 'none') {
      e.target.dataset.later = 'later';
      let item = e.target.parentElement;
      laterItems.push({
        index: item.dataset.index,
        title: item.children[3].textContent,
        price: item.children[4].textContent,
        image: item.children[2].style.backgroundImage.match(/\d/g).join(''),
        link: item.dataset.link,
      });
      animateMoving(e);
    } else if (e.target.dataset.later == 'later') {
      e.target.dataset.later = 'none';
      deleteLaterItem(e);
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
  const folder = document.querySelector('nav > button');
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
file.addEventListener('transitionend', function (e) {
  console.log(e);
  file.removeAttribute('style');
  if (+counter.textContent == 0 || laterItems.length >= 0) counter.style.display = 'block';
  counter.textContent = laterItems.length;
});

})()
