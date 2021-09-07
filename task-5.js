const userNameInput = document.querySelector('#name-input');
const userOutput = document.querySelector('#name-output');
let defaultOutputValue = 'Незнакомец';

userNameInput.addEventListener('input', event => {
  if (event.target.value) {
    userOutput.textContent = event.target.value;
  } else {
    userOutput.textContent = defaultOutputValue;
  }
});
