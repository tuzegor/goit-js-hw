const textMessage = document.querySelector('#validation-input');
const symbols = document.createElement('span');
textMessage.after(symbols);
symbols.textContent = `Cимволов: ${0}`;

textMessage.onblur = function () {
  symbols.textContent = `Cимволов: ${textMessage.value.length}`;

  if (this.value.length < this.dataset.length) {
    this.classList.add('invalid');
  } else {
    this.classList.replace('invalid', 'valid');
  }
};
