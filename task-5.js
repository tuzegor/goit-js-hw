const userNameInput = document.querySelector('#name-input')
const userOutput = document.querySelector('#name-output')

userNameInput.addEventListener('input', () => {
    userOutput.textContent = userNameInput.value;
})
