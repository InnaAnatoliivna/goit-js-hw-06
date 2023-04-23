// Напиши скрипт управління формою логіна.
// 1.Обробка відправлення форми form.login - form повинна відбуватися
// відповідно до події submit.
// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// 4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів
// в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля -
// значенням властивості.Для доступу до елементів форми використовуй
// властивість elements.
// 5.Виведи об'єкт із введеними даними в консоль і очисти значення полів
// форми методом reset.

const formLogin = document.querySelector('.login-form');

const loginDate = {};

formLogin.addEventListener('submit', event => {
    event.preventDefault();

    if (formLogin.elements.email.value === '' || formLogin.elements.password.value === '') {
        alert('Please fill in all fields!');
    }
    else {
        
        loginDate.email = formLogin.elements.email.value;
        loginDate.password = formLogin.elements.password.value;
    }
    console.log(loginDate);
    formLogin.reset();
});