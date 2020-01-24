function createItem(block, later, index, title, price, image, link) {
  let item = document.createElement('div');
  item.className = 'item';
  item.dataset.link = link;
  item.dataset.index = index;
  let button = document.createElement('button');
  button.dataset.later = later;
  let hint = document.createElement('h5');
  hint.className = 'hint';
  hint.textContent = 'Смотреть позже';
  let itemImage = document.createElement('div');
  itemImage.style.backgroundImage = 'url(/images/' + image + '.jpg)';
  let itemTitle = document.createElement('h3');
  itemTitle.textContent = title;
  let itemPrice = document.createElement('h4');
  itemPrice.textContent = price;
  item.append(button);
  item.append(hint);
  item.append(itemImage);
  item.append(itemTitle);
  item.append(itemPrice);
  document.querySelector('#' + block).append(item);
};

let laterItems = [];
let loadStream = 'go';

function showItemHint(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.display = 'block'
    setTimeout( () => {e.target.nextElementSibling.style.opacity = '1'}, 10 );
  };
};
function hideItemHint(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.opacity = '0'
    setTimeout( () => {e.target.nextElementSibling.removeAttribute('style')}, 350 );
  };
};

const counter = document.querySelector('nav > [data-counter=""]');
function deleteLaterItem(e) {
  let toDelete;
  for (let i = 0; i < laterItems.length; i++) {
    if (laterItems[i].index == e.target.parentElement.dataset.index) {
      toDelete = i;
    };
  };
  laterItems.splice(toDelete, 1);
  counter.textContent = laterItems.length;
  if (+counter.textContent == 0 || laterItems.length == 0) counter.removeAttribute('style');
};
