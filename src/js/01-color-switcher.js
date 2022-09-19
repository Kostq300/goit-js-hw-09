const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.body;

let timerId = null;

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  timerId = setInterval(changeColorBody, 1000);
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;

};

function onStopBtnClick() {
  clearInterval(timerId);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;

};

function changeColorBody() {
  bodyRef.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};