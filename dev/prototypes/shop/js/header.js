(function () {

document.querySelector('nav > button').addEventListener('mouseover', function (e) {
  e.target.style.marginLeft = '0'
  e.target.previousElementSibling.style.display = 'block'
  setTimeout( () => {e.target.previousElementSibling.style.opacity = '1'}, 10 );
});
document.querySelector('nav > button').addEventListener('mouseout', function (e) {
  e.target.previousElementSibling.style.opacity = '0'
  setTimeout( () => {
    e.target.previousElementSibling.removeAttribute('style');
    e.target.removeAttribute('style');
  }, 350 );
});
document.querySelector('nav > button').addEventListener('click', function (e) {
  if (e.target.dataset.state == 'close') {
    e.target.dataset.state = 'open';
    loadStream = 'stop';
    document.documentElement.style.overflow = 'hidden hidden';
    document.querySelector('#laterBlock').style.display = 'flex';
    setTimeout( () => {document.querySelector('#laterBlock').style.height = '100vh';}, 40 );
    setTimeout( () => {document.querySelector('#laterList').style.opacity = '1';}, 900 );
    for (let i = 0; i < laterItems.length; i++) {
      new createItem('laterList', 'later', laterItems[i].index, laterItems[i].title, laterItems[i].price, laterItems[i].image, laterItems[i].link);
    };
  } else if (e.target.dataset.state == 'open') {
    this.dataset.state = 'close';
    document.documentElement.removeAttribute('style');
    document.querySelector('#laterBlock').style.height = '8rem';
    document.querySelector('#laterList').removeAttribute('style');
    setTimeout( () => {document.querySelector('#laterBlock').removeAttribute('style');}, 1000 );
    for (let i = document.querySelectorAll('#laterList > .item').length - 1; i > -1; i--) {
      document.querySelectorAll('#laterList > .item')[i].remove();
    };
    loadStream = 'go';
  };
});

document.querySelector('#laterList').addEventListener('mouseover', function (e) {
  showItemHint(e);
});
document.querySelector('#laterList').addEventListener('mouseout', function (e) {
  hideItemHint(e);
});

let item;
let eData;
let cancel = 0;
let cancelState;

function createCancel() {
  let cancelPanel = document.createElement('div');
  cancelPanel.className = 'cancelPanel';
  cancelPanel.innerHTML = '<div><h4>5</h4><div><div></div></div><button>Отмена</button></div>';
  document.body.append(cancelPanel);
  let cancelTimer = document.querySelector('.cancelPanel > div > h4');
  for (let i = 5, j = 0; i >= 0, j <= 5; i--, j++) {
    setTimeout( () => {cancelTimer.textContent = i;}, 1000 * j );
  };
  document.querySelector('.cancelPanel > div > div > div').addEventListener('transitionend', function (e) {
    if (e.target.style.width == '4.5%') removeItem();
  });
  document.querySelector('.cancelPanel > div > button').addEventListener('click', function (e) {
    document.querySelector('.cancelPanel').remove();
    item.style.display = 'block';
    setTimeout( () => {item.style.transform = 'scale(1)';}, 40 );
    clearTimeout(cancelState);
    cancel = 0;
  });
};

function removeItem() {
  document.querySelector('.cancelPanel').style.opacity = '0';
  setTimeout( () => {
    document.querySelector('.cancelPanel').remove();
  }, 500 );
  deleteLaterItem(eData);
  clearTimeout(cancelState);
  document.querySelector('#itemsList > [data-index="' + eData.target.parentElement.dataset.index + '"] > button').dataset.later = 'none';
  item.remove();
};

function launchTimer() {
  document.querySelector('.cancelPanel').style.display = 'flex';
  setTimeout( () => {
    document.querySelector('.cancelPanel').style.opacity = '1';
    document.querySelector('.cancelPanel > div > div > div').style.width = '4.5%';
  }, 40 );
};

document.querySelector('#laterList').addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    if (cancel == 0) {
      cancel = new createCancel();
      launchTimer();
    } else {
      removeItem();
      setTimeout( () => {
        cancel = new createCancel();
        launchTimer();
      }, 540);
    };
    item = e.target.parentElement;
    item.style.transform = 'scale(0)';
    setTimeout( () => {item.style.display = 'none';}, 500 );
    eData = e;
    cancelState = setTimeout( () => {
      cancel = 0;
    }, 5000 );
  };
});

})()
