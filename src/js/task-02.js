/**
 * Напиши скрипт, который для каждого элемента
 * массива ingredients создаст отдельный li,
 * после чего вставит все li за одну операцию в
 * список ul.ingredients. Для создания DOM-узлов
 * используй document.createElement().
 */

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const ingredientsContainer = document.getElementById("ingredients");
const ingredientsContainer = document.querySelector("#ingredients");

const makeIngredientsItems = (prepares) => {
  return prepares.map((prepare) => {
    const prepareEl = document.createElement("li");
    prepareEl.textContent = prepare;

    return prepareEl;
  });
};

const elements = makeIngredientsItems(ingredients);
ingredientsContainer.append(...elements);
