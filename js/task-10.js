function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову
// функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
// всі створені елементи.

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const amount = document.querySelector('input');
const amountValue = amount.value;

console.log(amountValue);

function createBoxes(amount) {

};

function destroyBoxes() {

};

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);