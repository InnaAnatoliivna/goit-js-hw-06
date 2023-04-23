function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і виводить значення
// кольору в span.color.
// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.

const btnChange = document.querySelector('.change-color');
const widgetColor = document.querySelector('.color')

btnChange.addEventListener('click', () => {
  const colorStyle = getRandomHexColor();

  widgetColor.textContent = colorStyle;
  document.body.style.backgroundColor = colorStyle;
});

