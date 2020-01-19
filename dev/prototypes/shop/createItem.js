export default function createItem(block, index, title, price, image, link) {
  let item = document.createElement('div');
  item.className = 'item';
  item.dataset.link = link;
  item.dataset.index = index;
  let button = document.createElement('button');
  button.dataset.later = 'none';
  let hint = document.createElement('h5');
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
}
