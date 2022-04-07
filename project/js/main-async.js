"use strict";

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class ProductList {
    constructor (container = ".product") {
        this.container = container;
        this.goods = []; // массив товаров из JSON документа
        this._getProducts()
            .then (data => { // data - объект js
                this.goods = data;
                this.render()
            });
    }

    // метод для заполнения списка товаров
    _getProducts() {
        return fetch (`${API}/catalogData.json`)
        .then (result => result.json())
        .catch (error => {
            console.log(error);
        });
    }

    // метод определяет суммарную стоимость всех товаров в массиве
    calculateSum () {
        return this.allPruducts.reduce((accum, item) => accum += item.price, 0)
    }

    // метод выводит список товаров на страницу
    render () {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = "https://www.ldoceonline.com/media/english/illustration/kitten.jpg?version=1.2.45") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    // метод возвращает html-разметку карточки товара
    render () {
        return `<div class="product-item" data-id="${this.id}">
                <img class="product-img" src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class CartList {
    constructor (container = ".header__cart-content") {
        this.container = container;
        this.goods = []; // массив товаров из JSON документа
        this._clickCart();
        this._getCartProducts()
            .then (data => { // data - объект js
                this.goods = data;
                this.render()
            });
    }

    // слушатель события для корзины
    _clickCart() {
        const openCartBtn = document.querySelector('.header-btn');
        const cartEl = document.querySelector('.header__cart');
        openCartBtn.addEventListener('click', function () {
            cartEl.classList.toggle('hidden');
        });
    }

    // метод для заполнения списка товаров корзины
    _getCartProducts() {
        return fetch (`${API}/getBasket.json`)
        .then (result => result.json())
        .catch (error => {
            console.log(error);
        });
    }

    // метод определяет суммарную стоимость всех товаров в массиве корзины
    calculateSum () {
        return this.allPruducts.reduce((accum, item) => accum += item.price, 0)
    }

    // метод выводит список товаров на страницу
    render () {
        const block = document.querySelector(this.container);
        for (let product of this.goods.contents) {
            const cartObj = new CartItem(product);
            block.insertAdjacentHTML("afterend", cartObj.render());
        }
    }
}

class CartItem {
    constructor(product, img = "https://www.ldoceonline.com/media/english/illustration/kitten.jpg?version=1.2.45") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.quantity = product.quantity;
    }

    // метод возвращает html-разметку товара в корзине
    render () {
        return `<div class="header__cart-content">
        <div>${this.title}</div>
        <div>
            <span class="productCount">${this.quantity}</span> шт.
        </div>
        <div>$${this.price}</div>
        <div>
            $<span class="productTotalRow">${this.price * this.quantity}</span>
        </div>
        <button class="delete-btn" data-productId="${this.id_product} type="button">Удалить</button>
    </div>`
    }
}

let list = new ProductList();
let cart = new CartList();