const renderButton = document.querySelector('[data-action="render"]')
const destroyButton = document.querySelector('[data-action="destroy"]')
const boxes = document.querySelector('#boxes')
const valueInput = document.querySelector('#controls input')

// destroyButton.addEventListener('click', () => {
//     boxes.children.remove();
// });

// console.log(Number(valueInput.value));

// valueInput.addEventListener('input', () => {
//     amount = Number(valueInput.value);
// })
// console.log(amount);
let amount = 0;

const createBoxes = (amount) => {
valueInput.addEventListener('input', () => {
    amount = Number(valueInput.value);
})
    console.log(Number(valueInput.value));
    console.log(amount);

    let arrBoxes = [];
    for (let i = 0; i < Number(valueInput.value); i++) {
        arrBoxes.push(document.createElement('div'));
    }
    boxes.append(...arrBoxes);

console.log(arrBoxes);
};



const destroyBoxes = () => {
boxes.innerHTML = '';
};

renderButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', destroyBoxes)


function getRGB() {
  const r = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  return [r, g, b];
} 