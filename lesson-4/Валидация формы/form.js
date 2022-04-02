"use strict";

let formEl = document.querySelector("form");
let inputName = document.getElementById("name");
let inputPhone = document.getElementById("phone");
let inputEmail = document.getElementById("email");
let inputText = document.getElementById("text");

formEl.addEventListener('submit', function(event) {
    if (!inputName.value.match(/^[a-zа-яё]+$/i)) {
        inputName.style.borderColor = 'red';
        alert('Ваше имя должно содержать только буквы');
        event.preventDefault();
    }

    if (!inputPhone.value.match(/\+7\(\d{3}\)\d{3}-\d{4}/)) {
        inputPhone.style.borderColor = 'red';
        alert('Ваш номер телефона должен быть в формате +7(000)000-0000');
        event.preventDefault();
    }

    if (!inputEmail.value.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/i)) {
        inputEmail.style.borderColor = 'red';
        alert('Введите корректный email');
        event.preventDefault();
    }
    
    if (inputText.value === '') {
        inputText.style.borderColor = 'red';
        alert('Введите текст сообщения!');
        event.preventDefault();
    }
});