/**
 * Напиши скрипт, который бы при потере фокуса на инпуте, 
 * проверял его содержимое на правильное количество 
 * символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его 
атрибуте data-length.
Если введено подходящее количество, то border инпута 
становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и 
invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
 */

const pEl = document.querySelector("p");
const inputCotnainer = `
    <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
`;
pEl.insertAdjacentHTML("afterend", inputCotnainer);

const inputEl = document.querySelector("#validation-input");

const VAL_ATRIBUTE = +inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputBlur);
function onInputBlur() {
  if (inputEl.value.length !== VAL_ATRIBUTE) {
    inputEl.classList.contains("valid")
      ? inputEl.classList.replace("valid", "invalid")
      : inputEl.classList.add("invalid");
  } else {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  }
}
