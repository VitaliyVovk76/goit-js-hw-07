/**
 * Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в 
ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента 
(тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
 */

const mainUlEl = document.querySelector("#categories");
const mainLiCildren = mainUlEl.children;

const getAmountCategories = (object) => {
  console.log(`в списке ${object.children.length} категории`);
};

const getDescriptionCategories = (object) => {
  for (const iterator of object) {
    console.log(`Категория: ${iterator.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${iterator.lastElementChild.children.length}`
    );
  }
};

getAmountCategories(mainUlEl);
getDescriptionCategories(mainLiCildren);
