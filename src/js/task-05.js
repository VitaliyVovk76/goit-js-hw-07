/**
 * Напиши скрипт который, при наборе текста в инпуте 
 * input#name-input (событие input), подставляет его 
 * текущее значение в span#name-output. Если инпут пустой, 
 * в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */

const pEl = document.querySelector("p");
const formEl = `
<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
`;
pEl.insertAdjacentHTML("afterend", formEl);

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (inputEl.value === "" || inputEl.value.trim(" ") === "") {
    return;
  }
  outputEl.textContent = inputEl.value;
}
