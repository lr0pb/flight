'use strict';

document.querySelector('#startIcons').addEventListener('mousedown', flyRouter);
document.querySelector('#startIcons').addEventListener('keydown', flyRouter);

function flyRouter(e) {
  if (e.target.classList.contains('icon') && (e.keyCode == 13 || (!e.keyCode && e.buttons == 1))) switch (e.target.id) {
    case 'im1':
      animate(e.target, [
        {showFromStart: [e.target, 8, 31, document.querySelector('#im41')]},
      ]); break;
    case 'im2':
      animate(e.target, [
        {showFromStart: [e.target, 11, 39, document.querySelector('#im22')]},
      ]); break;
    case 'im3':
      animate(e.target, [
        {showFromStart: [e.target, 20, 45, document.querySelector('#im21')]},
      ]); break;
    case 'im4':
      animate(e.target, [
        {showFromStart: [e.target, 31, 32, document.querySelector('#im111'), document.querySelector('#im43'), document.querySelector('#im45')]},
      ]); break;
    case 'im5':
      animate(e.target, [
        {showFromStart: [e.target, 34, 40, document.querySelector('#im31')]},
      ]); break;
    case 'im6':
      animate(e.target, [
        {showFromStart: [e.target, 52, 38, document.querySelector('#im71')]},
      ]); break;
    case 'im7':
      animate(e.target, [
        {showFromStart: [e.target, 61, 39, document.querySelector('#im101')]},
      ]); break;
    case 'im8':
      animate(e.target, [
        {showFromStart: [e.target, 70, 29, document.querySelector('#im91'), document.querySelector('#im81')]},
      ]); break;
    case 'im10':
      animate(e.target, [
        {showFromStart: [e.target, 75, 34]},
      ]); break;

    case 'im21':
      animate(e.target, [
        {zoomTranslateZoom: [document.querySelector('#im3'), document.querySelector('#im2'), 20, 45, 6, 4]},
        {show: [document.querySelector('#im22')]},
      ]); break;
    case 'im22':
      animate(e.target, [
        {zoomRotateZoom: [document.querySelector('#im2'), e.target, 'left']},
        {show: [document.querySelector('#im23')]},
      ]); break;
    case 'im23':
      animate(e.target, [
        {zoomRotateZoom: [document.querySelector('#im22'), document.querySelector('#im2'), 'right']},
        {show: [document.querySelector('#im22')]},
      ]); break;
    case 'im31':
      animate(e.target, [
        {zoomTranslateZoom: [document.querySelector('#im5'), document.querySelector('#im3'), 34, 40, 10, -3]},
        {show: [document.querySelector('#im21')]},
      ]); break;
    case 'im43':
      animate(e.target, [
        {zoomRotateZoom: [document.querySelector('#im4'), document.querySelector('#im42'), 'right']},
        {show: [document.querySelector('#im44')]},
      ]); break;
    case 'im44':
      animate(e.target, [
        {zoomRotateZoom: [document.querySelector('#im42'), document.querySelector('#im4'), 'left']},
        {show: [document.querySelector('#im111'), document.querySelector('#im43'), document.querySelector('#im45')]},
      ]); break;
    case 'im45':
      animate(e.target, [
        {filter: [document.querySelector('#im4'), 'dark']},
        {zoom: [e.target, 0.5, 'center', true]},
      ]); break;
    case 'im71':
      animate(e.target, [
        {zoomTranslateZoom: [document.querySelector('#im6'), document.querySelector('#im7'), 52, 38, -7, -1]},
        {show: [document.querySelector('#im101')]},
      ]); break;
    case 'im91':
      animate(e.target, [
        {filter: [bg, 'dark']},
        {placeCube: [document.querySelector('#im8to9'), 'left', 'show']},
        {zoom: [document.querySelector('#im8'), 0.5, 'left', true]},
        {rotate: [document.querySelector('#im8'), document.querySelector('#im8to9'), 'left']},
        {placeCube: [document.querySelector('#im8'), 'right', 'hide']},
        {placeCube: [e.target, 'left', 'show']},
        {zoom: [document.querySelector('#im8to9'), 0.5, 'left', true]},
        {rotate: [document.querySelector('#im8to9'), e.target, 'left']},
        {placeCube: [document.querySelector('#im8to9'), 'right', 'hide']},
        {zoom: [e.target, 1, 'center', false]},
        {filter: [bg, 'light']},
      ]); break;
    case 'im101':
      animate(e.target, [
        {zoomTranslateZoom: [document.querySelector('#im7'), document.querySelector('#im10'), 61, 39, -10, 4]},
      ]); break;
  };
};

/*document.querySelector('main').addEventListener('mousemove', function (e) {
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let x = e.pageX;
  let y = e.pageY;
  let dx = (cx - x) / cx * 10;
  let dy = (cy - y) / cy * 10;
  for (let element of document.querySelectorAll('.icon')) {
    element.style.setProperty('--offset', `${dx}rem, ${dy}rem`);
    //element.style.setProperty('--dy', `${dy}rem`);
  };
});*/
