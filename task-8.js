// Дополнительное задание со звездочкой

const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const valueInput = document.querySelector('#controls input');

const createBoxes = amount => {
  let arrBoxes = [];
  for (let i = 0; i < amount; i++) {
    let element = document.createElement('div');
    element.style.backgroundColor = `rgb(${getRGB()})`;
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    arrBoxes.push(element);
  }
  boxes.append(...arrBoxes);
  console.log(arrBoxes);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  //   [...boxes.children].forEach(element => element.remove());
};

renderButton.addEventListener('click', () => {
  createBoxes(valueInput.value);
});
destroyButton.addEventListener('click', destroyBoxes);

function getRGB() {
  const r = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  return `${r}, ${g}, ${b}`;
}
