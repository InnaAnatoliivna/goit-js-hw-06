// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

//1.Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data-length.
// 2.Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже
// додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');
const inputValue = input.value;


input.addEventListener('blur', () => {
    const inputValue = input.value.trim();
    const dataValue = input.dataset.length * 1;

    if (inputValue.length === dataValue) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (inputValue.length !== dataValue) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } 
});