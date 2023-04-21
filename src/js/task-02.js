const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1.Створить окремий елемент < li >.Обов'язково використовуй
//  метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі < li > за одну операцію у список
//  ul#ingredients.

const listIngredients = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {

  const itemIngredients = document.createElement('li');
  itemIngredients.classList.add('item');
  itemIngredients.textContent = `${ingredient}`;

  listIngredients.append(itemIngredients);
});

