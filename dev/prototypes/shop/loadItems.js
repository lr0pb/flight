let i
let response

document.querySelector('#itemsList').addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.display = 'block'
    setTimeout( () => {e.target.nextElementSibling.style.opacity = '1'}, 10 );
  };
});
document.querySelector('#itemsList').addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.dataset.later = 'later';
  };
  if (e.target.parentElement.className == 'item' || e.target.className == 'item') {
    if (e.target.tagName != 'BUTTON') {
      console.log(e.target);
    };
  };
});
document.querySelector('#itemsList').addEventListener('mouseout', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.opacity = '0';
    setTimeout( () => {e.target.nextElementSibling.removeAttribute('style')}, 350 );
  };
});
document.querySelector('#reloadBlock > button').addEventListener('click', async function (e) {
  e.target.parentElement.style.display = 'none';
  document.querySelector('#loadingBlock').removeAttribute('style');
  await loadItems();
  document.querySelector('#loadingBlock').style.display = 'none';
  e.target.parentElement.removeAttribute('style');
});



document.addEventListener('DOMContentLoaded', async function () {
  async function iDetecter() {
    for (let j = 1; j < 30; j++) {
      response = await fetch(`items/itemList${j}.json`);
      console.log(response);
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
  if (document.documentElement.scrollTop >= 1250 && document.documentElement.scrollTop % 1250 >= 0 && document.documentElement.scrollTop % 1250 <= 50) {
    document.querySelector('#loadingBlock').removeAttribute('style');
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
    let hint = document.createElement('h5');
    hint.textContent = 'Смотреть позже';
    let image = document.createElement('div');
    image.style.backgroundImage = 'url(/images/' + json[k].image + '.jpg)';
    let title = document.createElement('h3');
    title.textContent = json[k].title;
    let price = document.createElement('h4');
    price.textContent = json[k].price;
    item.append(document.createElement('button'));
    item.append(hint);
    item.append(image);
    item.append(title);
    item.append(price);
    document.querySelector('#itemsList').append(item);
  };
};
