const counterValue = document.querySelector('#value')
const increment = document.querySelector('[data-action="increment"]')
const decrement = document.querySelector('[data-action="decrement"]')


let count = 0

const addCounterValue = () => {
    count += 1;
    return counterValue.textContent = count; 
    
};
const removeCounterValue = () => {
    count -= 1;
    return counterValue.textContent = count; 
};

increment.addEventListener('click', addCounterValue);
decrement.addEventListener('click', removeCounterValue);


const resetButton = document.createElement('button')
resetButton.textContent = "Обнулить"
resetButton.addEventListener('click', () => {
    count = 0;
    return counterValue.textContent = count;
});

document.querySelector('#counter').appendChild(resetButton)
