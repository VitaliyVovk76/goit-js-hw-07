/**
 *Напиши скрипт, который реагирует на изменение значения 
 input#font-size-control (событие input) и изменяет 
 инлайн-стиль span#text обновляя свойство font-size. 
 В результате при перетаскивании ползунка будет меняться 
 размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
 */
const pEl = document.querySelector("p");
const inputCotnainer = `
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>`;
pEl.insertAdjacentHTML("afterend", inputCotnainer);

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onCangeSize);

function onCangeSize(event) {
  textEl.style.fontSize = inputEl.value + "px";
}
