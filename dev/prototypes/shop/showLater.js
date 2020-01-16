let laterItems = []

document.querySelector('#itemsList').addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.display = 'block'
    setTimeout( () => {e.target.nextElementSibling.style.opacity = '1'}, 10 );
  };
});
document.querySelector('#itemsList').addEventListener('mouseout', function (e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.nextElementSibling.style.opacity = '0';
    setTimeout( () => {e.target.nextElementSibling.removeAttribute('style')}, 350 );
  };
});

document.querySelector('#itemsList').addEventListener('click', function (e) {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.dataset.later == 'none') {
      e.target.dataset.later = 'later';
      laterItems.push(e.target.parentElement.dataset.index);
    } else if (e.target.dataset.later == 'later') {
      e.target.dataset.later = 'none';
      let toDelete
      for (let j = 0; j < laterItems.length; j++) {
        if (laterItems[j] == e.target.parentElement.dataset.index) {
          toDelete = j;
        };
      };
      laterItems.splice(toDelete, 1);
    };
  };
  if (e.target.parentElement.className == 'item' || e.target.className == 'item') {
    if (e.target.tagName != 'BUTTON') {
      console.log(e.target);
    };
  };
});
