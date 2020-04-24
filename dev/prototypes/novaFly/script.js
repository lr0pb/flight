let history = new Set();
    lastElement = null;

async function animate(element, [...steps], hideRule) {
  if (!hideRule) {
    hideOtherIcons(element);
    document.querySelector('#backToTheStart').setAttribute('disabled','');
  };
  for (let step of steps) {
    await step.step();
  };
  if (!hideRule) {
    document.querySelector('#backToTheStart').style.bottom = '5rem';
    document.querySelector('#backToTheStart').removeAttribute('disabled');
  };
};

function hideOtherIcons(element) {
  element.classList.replace('icon','hide');
  element.setAttribute('tabindex','-1');
  let icons = document.querySelectorAll(`.fly`);
  for (let icon of icons) {
    if (icon.classList.contains('icon')) {
      icon.classList.add('hide');
      icon.setAttribute('tabindex','-1');
    };
  };
  setTimeout( () => {
    element.classList.remove('hide');
  }, 370);
};

async function timeout(time) {
  await new Promise(function(resolve, reject) {
    setTimeout( () => {resolve()}, time);
  });
};

//StepFunctions: zoomBg(scale: string, x:number, y:number)
//               zoom(element, scale:number, position:string, rounded:boolean)
// scale values for zoomBg: 0 - initial scale, 1 - x3 scale
// scale values for zoom: 0 - zero view, 0.5 - half view, 1 - full view
// position values: center, left, right
//               placeCube(element, direction:string, state:string)
//               rotate([element, secondElement], direction:string)
// direction values: left, right
// state values: show, hide
//               filter(element, rule:string)
// rule values: light, dark
//               preTranslateBg(originX:number, originY:number)
//               translateBg(x:number, y:number)
//               show(...elements);

const bg = document.querySelector('#bg');

async function zoomBg(scale, x, y) {
  if (x && y) bg.style.transformOrigin = `${x}vw ${y}vw`;
  if (scale == 1) {bg.style.scale = '3'; k = 3.5;}
  else if (scale == 0) {bg.style.scale = '1'; k = 1;}
  await timeout(parseFloat(getComputedStyle(bg).transitionDuration) * 1000 / k);
};

async function preTranslateBg(originX, originY) {
  bg.style.cssText = `
    transform-origin: ${originX}vw ${originY}vw;
    scale: 3; transition: none;
  `;
  setTimeout( () => {
    bg.style.cssText = `
      transform-origin: ${originX}vw ${originY}vw;
      scale: 3;
    `;
  }, 10);
  await timeout(10);
};

async function translateBg(x, y) {
  let time;
  if (x == 0 && y == 0) time = 0;
  else time = parseFloat(getComputedStyle(bg).transitionDuration);
  bg.style.transform = `translate(${x}vw, ${y}vw)`;
  await timeout(time * 1000);
};

async function filter(element, rule) {
  if (rule == 'light') element.style.filter = 'brightness(100%)';
  else if (rule == 'dark') element.style.filter = 'brightness(40%) blur(1px)';
  await timeout(0);
};

async function show(...elements) {
  document.querySelector('#otherIcons').style.visibility = 'visible';
  for (let element of elements) {
    element.removeAttribute('style');
    element.classList.add('icon');
    element.classList.add('hide');
    element.setAttribute('tabindex','0');
    setTimeout( () => element.classList.remove('hide'), 10);
  };
  await timeout(0);
};

async function zoom(element, scale, position, rounded) {
  element.classList.remove('icon');
  element.classList.remove('poster');
  element.classList.remove('hide');
  let time = parseFloat(getComputedStyle(element).transitionDuration);
  if (parseInt(getComputedStyle(element).top) != 0 && parseInt(getComputedStyle(element).left) != 0) {
    element.style.top = '0';
    element.style.left = '0';
    element.style.transition = 'none';
  };
  let borderRadius = 0;
      translateValue = 0;
      scaleValue = 0;
  rounded ? borderRadius = '4rem' : borderRadius = '0';
  switch (position) {
    case 'center':
      translateValue = '0'; break;
    case 'left':
      translateValue = '-15vw'; break;
    case 'right':
      translateValue = '15vw'; break;
  };
  switch (scale) {
    case 0:
      scaleValue = '0'; break;
    case 0.5:
      scaleValue = '0.5'; break;
    case 1:
      scaleValue = '1'; break;
  };
  if (scaleValue == '1') translateValue = '0';
  setTimeout( () => {
    element.style.cssText = `
      top: 0; left: var(--translate); opacity: 1; border-radius: ${borderRadius};
      --scale: ${scaleValue}; --translate: ${translateValue};
    `;
  }, 10);
  history.add(element);
  lastElement = element;
  await timeout(time * 1000);
};

async function placeCube(element, direction, state) {
  let time = 0;
  switch (state) {
    case 'show': time = 400; break;
    case 'hide': time = 100; break;
  };
  setTimeout( () => {
    let rotateValue = 0;
        translateValue = 0;
        originValue = 'center';
        scaleValue = 0;
    switch (direction) {
      case 'left':
        rotateValue = '10deg';
        translateValue = '70vw';
        originValue = 'left'; break;
      case 'right':
        rotateValue = '-10deg';
        translateValue = '-70vw';
        originValue = 'right'; break;
    };
    switch (state) {
      case 'show':
        scaleValue = '0.5'; break;
      case 'hide':
        scaleValue = '0'; break;
    };
    element.classList.remove('icon');
    element.classList.remove('hide');
    element.style.cssText = `
      top: 0; left: var(--translate); opacity: 1; border-radius: 4rem;
      --rotate: ${rotateValue}; --translate: ${translateValue};
      --origin: ${originValue}; --scale: ${scaleValue};
    `;
  }, time);
  history.add(element);
  lastElement = element;
  await timeout(0);
};

async function rotate([element, secondElement], direction) {
  let basic = 'top: 0; left: var(--translate); opacity: 1; border-radius: 4rem;'
      time = parseFloat(getComputedStyle(element).transitionDuration);
  let antiDir = 0; let elemFirstTranslate = 0; let rotateValue = 0; let elemSecondTranslate = 0;
  let secondElemFirstTranslate = 0; let econdElemSecondTranslate = 0;

  switch (direction) {
    case 'left':
      antiDir = 'right'; elemFirstTranslate = '-40.6vw'; rotateValue = '-10deg'; elemSecondTranslate = '-70vw';
      secondElemFirstTranslate = '40.6vw'; secondElemSecondTranslate = '15vw'; break;
    case 'right':
      antiDir = 'left'; elemFirstTranslate = '40.6vw'; rotateValue = '10deg'; elemSecondTranslate = '70vw';
      secondElemFirstTranslate = '-40.6vw'; secondElemSecondTranslate = '-15vw'; break;
  };
  element.style.cssText = `${basic}
    --translate: ${elemFirstTranslate}; --origin: ${antiDir}; --scale: 0.5; transition: none;
  `;
  setTimeout( () => {
    element.style.cssText = `${basic}
      --rotate: ${rotateValue}; --translate: ${elemSecondTranslate};
      --origin: ${antiDir}; --scale: 0.5;
    `;
    secondElement.style.cssText = `${basic}
      --rotate: 0deg; --translate: ${secondElemFirstTranslate};
      --origin: ${direction}; --scale: 0.5;
    `;
    setTimeout( () => {
      secondElement.style.cssText = `${basic}
        --translate: ${secondElemSecondTranslate}; --origin: center; --scale: 0.5; transition: none;
      `;
      setTimeout( () => {
        secondElement.style.cssText = `${basic}
          --translate: ${secondElemSecondTranslate}; --origin: center; --scale: 0.5;
        `;
      }, 10);
    }, time * 1000);
  }, 400);/*
  setTimeout( () => {
    secondElement.style.cssText = `${basic}
      --translate: ${secondElemSecondTranslate}; --origin: center; --scale: 0.5; transition: none;
    `;
  }, time * 1000 + 400);
  setTimeout( () => {
    secondElement.style.cssText = `${basic}
      --translate: ${secondElemSecondTranslate}; --origin: center; --scale: 0.5;
    `;
  }, time * 1000 + 400 + 10);*/
  history.add(element);
  history.add(secondElement);
  lastElement = secondElement;
  await timeout(time * 1000 + 400 + 40);
};

async function showFromStart(element, [x, y], ...elements) {
  let steps = [
    {step: () => zoomBg(1, x, y)},
    {step: () => zoom(element, 1, 'center', false)},
  ];
  for (let otherElement of elements) {
    steps.push({step: () => show(otherElement)});
  };
  await animate(element, steps, true);
  await timeout(0);
};

async function zoomRotateZoom(element, secondElement, direction) {
  let antiDir;
  if (direction == 'left') antiDir = 'right';
  else antiDir = 'left';
  await animate(element, [
    {step: () => filter(bg, 'dark')},
    {step: () => placeCube(secondElement, direction, 'show')},
    {step: () => zoom(element, 0.5, direction, true)},
    {step: () => rotate([element, secondElement], direction)},
    {step: () => placeCube(element, antiDir, 'hide')},
    {step: () => zoom(secondElement, 1, 'center', false)},
    {step: () => filter(bg, 'light')},
  ], true);
  await timeout(0);
};

async function zoomTranslateZoom(element, secondElement, [originX, originY], [x, y]) {
  await animate(element, [
    {step: () => preTranslateBg(originX, originY)},
    {step: () => zoom(element, 0, 'center', true)},
    {step: () => translateBg(x, y)},
    {step: () => zoom(secondElement, 1, 'center', false)},
  ], true);
  await timeout(0);
};



document.querySelector('#backToTheStart').addEventListener('click', backToTheStart);

async function backToTheStart() {
  document.querySelector('#backToTheStart').removeAttribute('style');
  document.querySelector('#backToTheStart').setAttribute('disabled','');
  history.delete(lastElement);
  if (history.size != 0) for (let element of history) {
    element.style.cssText = 'transition: none;';
  };
  for (let icon of document.querySelectorAll('.icon:not(.hide)')) {
    icon.classList.add('hide');
  };
  await animate(null, [
    {step: () => zoom(lastElement, 0, 'center', true)},
    {step: () => translateBg(0, 0)},
    {step: () => zoomBg(0)},
  ], true);
  if (history.size != 0) for (let element of history) {
    element.removeAttribute('style');
  };
  document.querySelector('#otherIcons').removeAttribute('style');
  for (let icon of document.querySelectorAll('.fly')) {
    icon.classList.add('icon');
    icon.classList.remove('hide');
    icon.setAttribute('tabindex','0');
  };
  history.clear();
  lastElement = null;
};

document.querySelector('#startIcons').addEventListener('mousedown', flyRouter);
document.querySelector('#startIcons').addEventListener('keydown', flyRouter);

function flyRouter(e) {
  if (e.target.classList.contains('icon') && (e.keyCode == 13 || !e.keyCode)) switch (e.target.id) {
    case 'im1':
      animate(e.target, [
        {step: () => showFromStart(e.target, [8, 31], document.querySelector('#im41'))},
      ]); break;
    case 'im2':
      animate(e.target, [
        {step: () => showFromStart(e.target, [11, 39], document.querySelector('#im22'))},
      ]); break;
    case 'im3':
      animate(e.target, [
        {step: () => showFromStart(e.target, [20, 45], document.querySelector('#im21'))},
      ]); break;
    case 'im4':
      animate(e.target, [
        {step: () => showFromStart(e.target, [31, 32], document.querySelector('#im111'), document.querySelector('#im43'), document.querySelector('#im45'))},
      ]); break;
    case 'im5':
      animate(e.target, [
        {step: () => showFromStart(e.target, [34, 40], document.querySelector('#im31'))},
      ]); break;
    case 'im6':
      animate(e.target, [
        {step: () => showFromStart(e.target, [52, 38], document.querySelector('#im71'))},
      ]); break;
    case 'im7':
      animate(e.target, [
        {step: () => showFromStart(e.target, [61, 39], document.querySelector('#im101'))},
      ]); break;
    case 'im10':
      animate(e.target, [
        {step: () => showFromStart(e.target, [75, 34])},
      ]); break;

    case 'im21':
      animate(e.target, [
        {step: () => zoomTranslateZoom(document.querySelector('#im3'), document.querySelector('#im2'), [20, 45], [6, 4])},
        {step: () => show(document.querySelector('#im22'))},
      ]); break;
    case 'im22':
      animate(e.target, [
        {step: () => zoomRotateZoom(document.querySelector('#im2'), e.target, 'left')},
        {step: () => show(document.querySelector('#im23'))},
      ]); break;
    case 'im23':
      animate(e.target, [
        {step: () => zoomRotateZoom(document.querySelector('#im22'), document.querySelector('#im2'), 'right')},
        {step: () => show(document.querySelector('#im22'))},
      ]); break;
    case 'im31':
      animate(e.target, [
        {step: () => zoomTranslateZoom(document.querySelector('#im5'), document.querySelector('#im3'), [34, 40], [10, -3])},
        {step: () => show(document.querySelector('#im21'))},
      ]); break;
    case 'im43':
      animate(e.target, [
        {step: () => zoomRotateZoom(document.querySelector('#im4'), document.querySelector('#im42'), 'right')},
        {step: () => show(document.querySelector('#im44'))},
      ]); break;
    case 'im44':
      animate(e.target, [
        {step: () => zoomRotateZoom(document.querySelector('#im42'), document.querySelector('#im4'), 'left')},
        {step: () => show(document.querySelector('#im111'), document.querySelector('#im43'), document.querySelector('#im45'))},
      ]); break;
    case 'im45':
      animate(e.target, [
        {step: () => filter(document.querySelector('#im4'), 'dark')},
        {step: () => zoom(e.target, 0.5, 'center', true)},
      ]); break;
    case 'im71':
      animate(e.target, [
        {step: () => zoomTranslateZoom(document.querySelector('#im6'), document.querySelector('#im7'), [52, 38], [-7, -1])},
        {step: () => show(document.querySelector('#im101'))},
      ]); break;
    case 'im101':
      animate(e.target, [
        {step: () => zoomTranslateZoom(document.querySelector('#im7'), document.querySelector('#im10'), [61, 39], [-10, 4])},
      ]); break;
  };
};

/*document.querySelector('main').addEventListener('mousemove', function (e) {
  let cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
      x = e.pageX;
      y = e.pageY;
      dx = (cx - x) / cx;
      dy = (cy - y) / cy;
  for (let element of document.querySelectorAll('.hide')) {
    element.style.setProperty('--dx', `${dx}rem`);
    element.style.setProperty('--dy', `${dy}rem`);
  };
});*/

let feed = new NewsFeed(document.querySelector('#feed'), './api/news/newsList.json', {
  usePath: true,
  noCache: false,
});
feed.activate({
  cachePeriod: 7,
  newsPerRender: 10,
});
