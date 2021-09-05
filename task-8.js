const renderButton = document.querySelector('[data-action="render"]')
const destroyButton = document.querySelector('[data-action="destroy"]')
const boxes = document.querySelector('#boxes')

// destroyButton.addEventListener('click', () => {
//     boxes.children.remove();
// });
const valueInput = document.querySelector('#controls input')

let amount = 4;
valueInput.addEventListener('input', () => {
    amount = Number(valueInput.value);
})
console.log(amount);




const createBoxes = (amount) => {

    console.log(amount);

    let arrBoxes = [];
    for (let i = 0; i < amount; i++) {
        arrBoxes.push(document.createElement('div'));
        
    }

console.log(arrBoxes);
};



const destroyBoxes = () => {
boxes.removeChild();
};

renderButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', destroyBoxes)


function getRGB() {
  const r = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  return [r, g, b];
} 