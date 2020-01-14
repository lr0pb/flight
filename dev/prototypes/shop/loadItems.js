let i
let response
let timeStamp

document.addEventListener('DOMContentLoaded', async function () {
  async function iDetecter() {
    for (let j = 1; j < 30; j++) {
      response = await fetch(`items/itemList${j}.json`);
      if (!response.ok) {
        i = --j;
        break;
      };
    };
  };
  await iDetecter();
  await loadItems();
  document.querySelector('#loadingBlock').style.display = 'none';
});

document.addEventListener('scroll', async function () {
  if (document.documentElement.scrollTop > 1250 && document.documentElement.scrollTop % 1250 > 0 && document.documentElement.scrollTop % 1250 < 50) {
    document.querySelector('#loadingBlock').style.display = 'flex';
    await loadItems();
    document.querySelector('#loadingBlock').style.display = 'none';
  };
});

async function loadItems() {
  console.log(i);
  if (i > 0) {
    response = await fetch(`items/itemList${i}.json`);

    if (response.ok) {
      console.log(response);
      let rawJson = await response.json();
      let json = JSON.parse(rawJson);
      showItems(json);
    } else {
      console.log(response.status);
    };

    i--;
    console.log(i);
  };
};

function showItems(json) {
  for (let k = 0; k < json.length; k++) {
    let item = document.createElement('div');
    item.className = 'item';
    item.dataset.link = json[k].link;
    let image = document.createElement('div');
    image.style.backgroundImage = 'url(/images/' + json[k].image + '.jpg)';
    let title = document.createElement('h3');
    title.textContent = json[k].title;
    let price = document.createElement('h4');
    price.textContent = json[k].price;
    item.append(image);
    item.append(title);
    item.append(price);
    document.querySelector('#itemsList').append(item);
  };
};
