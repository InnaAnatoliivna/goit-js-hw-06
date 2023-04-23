//1.Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.

const categoriesAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesAll.length}`);

//2.Для кожного элемента li.item у списку ul#categories, знайде і виведе
//в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів
//в категорії(усіх < li >, вкладених в нього).

categoriesAll.forEach(element => {
    const listLength = element.querySelectorAll('li').length;
    const titleText = element.firstElementChild.textContent;

    console.log(`Category: ${titleText}`);
    console.log(`Elements: ${listLength}`)
})