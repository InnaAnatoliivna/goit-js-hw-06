// 1. Напиши скрипт, який під час набору тексту
// в інпуті input#name-input(подія input), підставляє його
// поточне значення в span#name-output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputNameUser = document.querySelector('#name-input');
const greetingsUser = document.querySelector('#name-output');

inputNameUser.addEventListener('input', event => {
    event.preventDefault();

    const inputValue = inputNameUser.value;

    if (inputValue !== '') {
        greetingsUser.textContent = `${inputValue}`;
    } else {
        greetingsUser.textContent = 'Anonymous';
    }
});
