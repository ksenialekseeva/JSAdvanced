Vue.component('cart', {
    props: ['cartItems', 'visability'],
    template: `
        <div class="header__cart" v-show="visability">
        <div class="header__cart-content">
                <div class="header__cart-header">Название товара</div>
                <div class="header__cart-header">Количество</div>
                <div class="header__cart-header">Цена за шт.</div>
                <div class="header__cart-header">Итого</div>
                <div class="header__cart-header">Удалить</div>
            </div>
        <cart-item v-for="cartItem of cartItems"
        :key="cartItem.id_product"
        :cart-item="cartItem">
        </cart-item>
    </div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
            <div class="header__cart-content">
                <div>{{cartItem.product_name}}</div>
                <div>
                    <span class="productCount">{{cartItem.quantity}}</span> шт.
                </div>
                <div>$ {{cartItem.price}}</div>
                <div>
                    $<span class="productTotalRow">{{cartItem.price * cartItem.quantity}}</span>
                </div>
                <button class="delete-btn" @click="$root.remove(cartItem)" type="button">Удалить</button>
            </div>`
});