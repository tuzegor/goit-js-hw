const textMessage = document.querySelector('#validation-input');
const symbols = document.createElement('span');
textMessage.after(symbols);
symbols.textContent = `Cимволов: ${0}`;

textMessage.onblur = function () {
  symbols.textContent = `Cимволов: ${textMessage.value.length}`;

  if (this.value.length === 0) {
    this.className = '';
  } else if (this.value.length < this.dataset.length) {
    this.classList.replace('valid', 'invalid') || this.classList.add('invalid');
  } else {
    this.classList.replace('invalid', 'valid') || this.classList.add('valid');
  }
};
console.log(textMessage.dataset.length);
console.log(textMessage.value.length);
