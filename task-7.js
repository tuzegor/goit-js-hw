const fontControl = document.querySelector('#font-size-control');
const textMessage = document.querySelector('#text');

const changeFont = () => (textMessage.style.fontSize = `${fontControl.value}px`);

fontControl.addEventListener('input', changeFont);
