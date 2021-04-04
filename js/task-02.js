const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ingrList = document.querySelector('#ingredients');
const ingrItem = ingredients.map(element =>
  {
    let item = document.createElement('li');
    item.textContent = element;
    return item;
});
ingrList.append(...ingrItem)