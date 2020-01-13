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
    item.append(document.createElement('div').style.backgroundImage = '/images/' + json[i].image + '.jpg');
    item.append(document.createElement('h3').textContent = json[i].title);
    item.append(document.createElement('h4').textContent = json[i].price);
    document.querySelector('#itemsList').append(item);
  };
}
