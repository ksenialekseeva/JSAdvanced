const products = [
    {id: 1, img: '1.jpg', title: 'Notebook', price: 2000},
    {id: 2, img: '2.jpg', title: 'Mouse', price: 20},
    {id: 3, img: '3.jpg', title: 'Keyboard', price: 200},
    {id: 4, img: '4.jpg', title: 'Gamepad', price: 50},
];

//Функция для формирования верстки каждого товара
const renderProduct = (products) => {
    return `<div class="product-item">
                <img class="product-img" src="${products.img}" alt="${products.title}">
                <h3 class="product-title">${products.title}</h3>
                <p class="product-price">${products.price}</p>
                <button class="product-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.product').innerHTML = productsList.join(' ');
};

renderPage(products);