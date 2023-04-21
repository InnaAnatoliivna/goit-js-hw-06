// 1.Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// 2.Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// 3.Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');
const showResult = document.querySelector('#value');

const decrementValue = () => {
    counterValue -= 1;
    showResult.textContent = `${counterValue}`;
};

const incrementValue = () => {
    counterValue += 1;
    showResult.textContent = `${counterValue}`;
};

minusBtn.addEventListener('click', decrementValue);
plusBtn.addEventListener('click', incrementValue);

