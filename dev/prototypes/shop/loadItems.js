import createItem from '/createItem.js';

(function () {

let i
let response

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
  document.querySelector('#reloadBlock').removeAttribute('style');
});

document.querySelector('#reloadBlock > button').addEventListener('click', async function (e) {
  if (i > 0) {
    e.target.parentElement.style.display = 'none';
    document.querySelector('#loadingBlock').removeAttribute('style');
    await loadItems();
    document.querySelector('#loadingBlock').style.display = 'none';
    e.target.parentElement.removeAttribute('style');
  };
});

document.addEventListener('scroll', async function () {
  if (document.documentElement.offsetHeight - document.documentElement.scrollTop < document.documentElement.clientHeight * 1.5) {
    document.querySelector('#loadingBlock').removeAttribute('style');
    document.querySelector('#reloadBlock').style.display = 'none';
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

    document.querySelector('#reloadBlock').removeAttribute('style');
    i--;
    if (i == 1) {
      document.querySelector('#reloadBlock').style.display = 'none';
    };
  };
};

function showItems(json) {
  for (let j = 0; j < json.length; j++) {
    new createItem('itemsList', json[j].index, json[j].title, json[j].price, json[j].image, json[j].link)
  };
};

})()
