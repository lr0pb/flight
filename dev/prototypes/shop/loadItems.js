let arr = [
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
  {title: 'Futbolka', price: 7, image: 'image', link: 'link'},
]

let response

async function loadItems() {
  response = await fetch('items/itemList1.json');

  if (response.ok) {
    let rawJson = await response.json();
    let json = JSON.parse(rawJson);
    showItems(json);
  } else {
    console.log(response.status);
  };
}
loadItems()

function showItems(json) {
  for (let i = 0; i < json.length; i++) {
    let item = document.createElement('div');
    item.className = 'item';
    item.dataset.link = json[i].link;
    let image = document.createElement('div');
    image.style.backgroundImage = '/images/' + json[i].image + '.jpg';
    let title = document.createElement('h3');
    title.textContent = json[i].title;
    let price = document.createElement('h4');
    price.textContent = json[i].price;
    item.append(image);
    item.append(title);
    item.append(price);
    document.querySelector('#itemsList').append(item);
  };
}
