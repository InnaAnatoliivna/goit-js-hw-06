// Напиши скрипт, який реагує на зміну
// значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи
// властивість font - size.В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const inputRangeSize = document.querySelector('#font-size-control');
const textResult = document.querySelector('#text');

inputRangeSize.addEventListener('input', changeFontSize);

function changeFontSize () {
    textResult.style.fontSize = this.value + 'px';
};