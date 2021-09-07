// const quantityCategories = document.querySelector('#categories').children.length;
// let categories = document.querySelector('#categories');

// console.log('Количество категорий:', quantityCategories);

// categories.querySelectorAll('li h2').forEach(elem => {
//   console.log(
//     `Категория: ${elem.textContent}, Количество: ${elem.nextElementSibling.children.length}`,
//   );
// });

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
  const h2 = node.querySelector('h2');
  const nodeItems = node.querySelectorAll('li');
  console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});
