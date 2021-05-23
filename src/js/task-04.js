/**
 *Счетчик состоит из спана и кнопок, которые должны 
 увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится 
текущее значение счетчика.
Создай функции increment и decrement для увеличения и 
уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и 
обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
 */

const buttonContainer = document.querySelector("p");

const makeButtons = `
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
`;

buttonContainer.insertAdjacentHTML("afterend", makeButtons);

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnImcrementEl = document.querySelector('[data-action="increment"]');
const resValueEl = document.querySelector("#value");

btnImcrementEl.addEventListener("click", onIncrementValue);
btnDecrementEl.addEventListener("click", onDecrementValue);

let counterValue = 0;

function onIncrementValue() {
  counterValue += 1;
  resValueEl.textContent = counterValue;
}

function onDecrementValue() {
  counterValue -= 1;
  resValueEl.textContent = counterValue;
}
