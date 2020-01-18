export default class createItem {
  constructor(block, index, title, price, image, link) {
    let item = document.createElement('div');
    item.className = 'item';
    item.dataset.link = this.link;
    item.dataset.index = this.index;
    let button = document.createElement('button');
    button.dataset.later = 'none';
    let hint = document.createElement('h5');
    hint.textContent = 'Смотреть позже';
    let image = document.createElement('div');
    image.style.backgroundImage = 'url(/images/' + this.image + '.jpg)';
    let title = document.createElement('h3');
    title.textContent = this.title;
    let price = document.createElement('h4');
    price.textContent = this.price;
    item.append(button);
    item.append(hint);
    item.append(image);
    item.append(title);
    item.append(price);
    document.querySelector('#' + this.block).append(item);
  };
}
