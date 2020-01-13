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
];

let response;

async function loadItems() {
  response = await fetch('items/itemsList1.json');

  if (response.ok) {
    let json = await response.json();
    console.log(json);
  } else {
    console.log(response.status);
  };
};

loadItems();
