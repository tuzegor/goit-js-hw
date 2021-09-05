const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

const items = ingredients.map(
    elem => {
        
        const item = document.createElement('li');
        item.textContent = elem;
        return item;
    }
)
ingredientsList.append(...items)

console.log(ingredientsList);
