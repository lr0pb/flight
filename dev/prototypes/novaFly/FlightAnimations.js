'use strict';

let history = new Set();
let lastElement = null;

async function animate(element, steps, isTemplate) {
  if (!isTemplate) {
    Animate.hideOtherIcons(element);
    document.querySelector('#backToTheStart').setAttribute('disabled','');
  };
  for (let step of steps) {
    for (let func in step) {
      await Animate[func](step[func]);
    };
  };
  if (!isTemplate) {
    document.querySelector('#backToTheStart').style.bottom = '5rem';
    document.querySelector('#backToTheStart').removeAttribute('disabled');
  };
};

//StepFunctions: zoomBg(scale: string, x:number, y:number)
//               zoom(element, scale:number, position:string, rounded:boolean)
// scale values for zoomBg: 0 - initial scale, 1 - x3 scale
// scale values for zoom: 0 - zero view, 0.5 - half view, 1 - full view
// position values: center, left, right
//               placeCube(element, direction:string, state:string)
//               rotate(element, secondElement, direction:string)
// direction values: left, right
// state values: show, hide
//               filter(element, rule:string)
// rule values: light, dark
//               preTranslateBg(originX:number, originY:number)
//               translateBg(x:number, y:number)
//               show(...elements);

const bg = document.querySelector('#bg');

class Animate {
  constructor() {}

  static hideOtherIcons(element) {
    element.classList.replace('icon','hide');
    element.setAttribute('tabindex','-1');
    let icons = document.querySelectorAll(`.fly:not(#bg)`);
    for (let icon of icons) {
      if (icon.classList.contains('icon')) {
        icon.classList.add('hide');
        icon.setAttribute('tabindex','-1');
      };
    };
    setTimeout( () => {
      element.classList.remove('hide');
    }, 370);
  }
  static async timeout(time) {
    await new Promise(function(resolve, reject) {
      setTimeout( () => {resolve()}, time);
    });
  }

  static async zoomBg([scale, x, y]) {
    let k;
    if (x && y) bg.style.setProperty('--origin', `${x}vw ${y}vw`);
    if (scale == 1) {bg.style.setProperty('--scale', '3'); k = 3.5;}
    else if (scale == 0) {bg.style.setProperty('--scale', '1'); k = 1;}
    await this.timeout(parseFloat(getComputedStyle(bg).transitionDuration) * 1000 / k);
  }
  static async preTranslateBg([originX, originY]) {
    bg.style.cssText = `
      --origin: ${originX}vw ${originY}vw;
      --scale: 3; transition: none;
    `;
    setTimeout( () => {
      bg.style.cssText = `
        --origin: ${originX}vw ${originY}vw;
        --scale: 3;
      `;
    }, 10);
    await this.timeout(10);
  }
  static async translateBg([x, y]) {
    let time;
    if (x == 0 && y == 0) time = 0;
    else time = parseFloat(getComputedStyle(bg).transitionDuration);
    bg.style.setProperty('--offset', `${x}vw, ${y}vw`);
    await this.timeout(time * 1000 - 200);
  }
  static async filter([element, rule]) {
    if (rule == 'light') element.style.filter = 'brightness(100%)';
    else if (rule == 'dark') element.style.filter = 'brightness(25%) blur(5px)';
    await this.timeout(0);
  }
  static async show([...elements]) {
    document.querySelector('#otherIcons').style.visibility = 'visible';
    for (let element of elements) {
      element.removeAttribute('style');
      element.classList.add('icon');
      element.classList.add('hide');
      element.setAttribute('tabindex','0');
      setTimeout( () => element.classList.remove('hide'), 10);
    };
    await this.timeout(0);
  }
  static async zoom([element, scale, position, rounded]) {
    //Sound.zoom();
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
    let translateValue = 0;
    let scaleValue = 0;
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
    }, 40);
    history.add(element);
    lastElement = element;
    await this.timeout(time * 1000);
  }
  static async placeCube([element, direction, state]) {
    let time = 0;
    switch (state) {
      case 'show': time = 400; break;
      case 'hide': time = 100; break;
    };
    setTimeout( () => {
      let rotateValue = 0;
      let translateValue = 0;
      let originValue = 'center';
      let scaleValue = 0;
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
    await this.timeout(0);
  }
  static async rotate([element, secondElement, direction]) {
    let basic = 'top: 0; left: var(--translate); opacity: 1; border-radius: 4rem;'
    let time = parseFloat(getComputedStyle(element).transitionDuration);
    let antiDir = 0; let elemFirstTranslate = 0; let rotateValue = 0; let elemSecondTranslate = 0;
    let secondElemFirstTranslate = 0; let secondElemSecondTranslate = 0;

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
        }, 50);
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
    await this.timeout(time * 1000 + 500);
  }

  static async showFromStart([element, x, y, ...elements]) {
    let steps = [
      {zoomBg: [1, x, y]},
      {zoom: [element, 1, 'center', false]},
    ];
    for (let otherElement of elements) {
      steps.push({show: [otherElement]});
    };
    await animate(element, steps, true);
    await this.timeout(0);
  }
  static async zoomRotateZoom([element, secondElement, direction]) {
    let antiDir;
    if (direction == 'left') antiDir = 'right';
    else antiDir = 'left';
    await animate(element, [
      {filter: [bg, 'dark']},
      {placeCube: [secondElement, direction, 'show']},
      {zoom: [element, 0.5, direction, true]},
      {rotate: [element, secondElement, direction]},
      {placeCube: [element, antiDir, 'hide']},
      {zoom: [secondElement, 1, 'center', false]},
      {filter: [bg, 'light']},
    ], true);
    await this.timeout(0);
  }
  static async zoomTranslateZoom([element, secondElement, originX, originY, x, y]) {
    await animate(element, [
      {preTranslateBg: [originX, originY]},
      {zoom: [element, 0, 'center', true]},
      {translateBg: [x, y]},
      {zoom: [secondElement, 1, 'center', false]},
    ], true);
    await this.timeout(0);
  }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

class Sound {
  constructor() {}

  static zoom(frequency) {
    let oscillator = audioCtx.createOscillator();
    let filter = audioCtx.createBiquadFilter();
    let gainNode = audioCtx.createGain();
    let now = audioCtx.currentTime;

    if (!frequency) frequency = 320;
    filter.type = 'lowpass';
    oscillator.frequency.value = frequency;
    oscillator.frequency.exponentialRampToValueAtTime(frequency + 80, now + 1.5);
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    oscillator.connect(gainNode).connect(audioCtx.destination);
    oscillator.start(now);
    oscillator.stop(now + 3);
  }
}

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
    {zoom: [lastElement, 0, 'center', true]},
    {translateBg: [0, 0]},
    {zoomBg: [0]},
  ], true);
  if (history.size != 0) for (let element of history) {
    element.removeAttribute('style');
  };
  document.querySelector('#otherIcons').removeAttribute('style');
  for (let icon of document.querySelectorAll('.fly:not(#bg)')) {
    icon.classList.add('icon');
    icon.classList.remove('hide');
    icon.setAttribute('tabindex','0');
  };
  history.clear();
  lastElement = null;
};
