let i
let response

document.addEventListener('DOMContentLoaded', async function () {
  document.querySelector('#loadingBlock').style.display = 'flex';
  async function iDetecter() {
    for (let j = 1; j < 30; j++) {
      response = await fetch(`items/itemList${j}.json`);
      if (!response.ok) {
        i = j--;
        break;
      };
    };
  };
  await iDetecter();
  await loadItems();
  document.querySelector('#loadingBlock').style.display = 'none';
});

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop % 1200 > 10 && document.documentElement.scrollTop % 1200 < 20) {
    document.querySelector('#loadingBlock').style.display = 'flex';
    await loadItems();
    document.querySelector('#loadingBlock').style.display = 'none';
  };
});

async function loadItems() {
  if (i > 0) {
    response = await fetch(`items/itemList${i}.json`);

    if (response.ok) {
      let rawJson = await response.json();
      let json = JSON.parse(rawJson);
      showItems(json);
    } else {
      console.log(response.status);
    };

    i--;
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
