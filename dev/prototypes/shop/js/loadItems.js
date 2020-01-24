(function () {

let index;
let response;

document.addEventListener('DOMContentLoaded', async function () {
  async function iDetecter() {
    for (let i = 1; i < 30; i++) {
      response = await fetch(`items/itemList${i}.json`);
      console.log(response);
      if (!response.ok) {
        index = --i;
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
  if (index > 0) {
    e.target.parentElement.style.display = 'none';
    document.querySelector('#loadingBlock').removeAttribute('style');
    await loadItems();
    document.querySelector('#loadingBlock').style.display = 'none';
    e.target.parentElement.removeAttribute('style');
  };
});

document.addEventListener('scroll', async function () {
  if (document.documentElement.offsetHeight - document.documentElement.scrollTop < document.documentElement.clientHeight * 1.3 && loadStream == 'go') {
    document.querySelector('#loadingBlock').removeAttribute('style');
    document.querySelector('#reloadBlock').style.display = 'none';
    await loadItems();
    document.querySelector('#loadingBlock').style.display = 'none';
  };
});

async function loadItems() {
  if (index > 0) {
    response = await fetch(`items/itemList${index}.json`);

    if (response.ok) {
      let rawJson = await response.json();
      let json = JSON.parse(rawJson);
      showItems(json);
    } else {
      console.log(response.status);
    };

    document.querySelector('#reloadBlock').removeAttribute('style');
    index--;
    if (i == 1) {
      document.querySelector('#reloadBlock').style.display = 'none';
    };
  };
};

function showItems(json) {
  for (let i = 0; i < json.length; i++) {
    new createItem('itemsList', 'none', json[i].index, json[i].title, json[i].price, json[i].image, json[i].link);
  };
};

})()
