const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cartItems: [],
        imgCatalog: 'https://www.ldoceonline.com/media/english/illustration/kitten.jpg',
        userSearch: '',
        show: false,
        error: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.error= true;
                })
        },
        // метод выполняет поиск товаров, вводимых в поле поиска
        filter(){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
           },

        // метод добавляет товар в корзину
        addProduct(cartItem){
            this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result === 1) {
                    let find = this.cartItems.find (el => el.id_product === cartItem.id_product);
                    if (find) {
                        find.quantity++;
                    } else {
                        const prod = Object.assign({quantity: 1}, cartItem);
                        this.cartItems.push(prod);
                    }
                }
            })
        },

        // метод удаляет товар из корзины
        remove(cartItem) {
            this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(cartItem.quantity > 1) {
                    cartItem.quantity--;
                } else {
                    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1)
                }
            })
        }
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
            this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            })
    }
})