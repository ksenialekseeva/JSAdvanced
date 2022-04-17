Vue.component('filtercomp', {
    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.filter">
    <input type="text" class="search-field" v-model="$parent.userSearch">
    <button class="btn-search" type="submit">Найти</button>
    </form>`
});