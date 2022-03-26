"use strict";

// класс для одного товара
class GoodsItem {
    constructor(id, img, title, price) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
    }
    // метод возвращает html-разметку карточки товара
    render () {
        return `<div class="product-item">
        <img class="product-img" src="${this.img}" alt="${this.title}">
        <h3 class="product-title">${this.title}</h3>
        <p class="product-price">${this.price}</p>
        <button class="product-btn">Купить</button>
    </div>`
    }
}

// класс для списка товаров
class GoodsList {
    constructior () {
        this.goods = [];
    }
    // метод для заполнения списка товаров
    fetchGoods () {
        this.goods = [
            {id: 1, img: '1.jpg', title: 'Notebook', price: 50},
            {id: 2, img: '2.jpg', title: 'Mouse', price: 100},
            {id: 3, img: '3.jpg', title: 'Keyboard', price: 200},
            {id: 4, img: '4.jpg', title: 'Gamepad', price: 300},
            {id: 5, img: '5.jpg', title: 'Headset', price: 500},
            {id: 6, img: '6.jpg', title: 'StereoSystem', price: 800},
        ]
    }
    // метод выводит список товаров на страницу
    render () {
        let listHtml = '';
        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.id, good.img, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.product').innerHTML = listHtml;
    }
    // метод определяет суммарную стоимость всех товаров в массиве
    calculateSum () {
        let totalGoodsSum = 0;
        this.goods.forEach (goodPrice => {
            totalGoodsSum += goodPrice.price;
        });
        console.log(totalGoodsSum);
    }
}

// класс для одного элемента корзины товаров
class CartItem {
    constructor(id, title, price, quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
    // метод возвращает html-разметку для элемента корзины товара
    render () {

    }
    // метод добавляет товар в корзину
    addItemToCart () {

    }
    // метод изменяет количество товара в корзине
    changeItemQuantity () {

    }
    // метод определяет стоимость товара в корзине с учетом количества
    calculateItemSum () {

    }
    // метод удаляет товар из корзины
    deleteItem () {

    }
}


// класс для корзины товаров
class CartList {
    // метод выводит товары корзины на страницу
    render () {

    }
    // метод определяет суммарную стоимость товаров в корзине
    calculateCartSum () {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.calculateSum();