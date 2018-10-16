import Vuex from 'vuex';
import Vue from 'vue';


import cart from './modules/cart';
import products from './modules/products';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        products,
        cart
    },
    mutations: {
        /* 每次更新购物车状态需要实时更新购物车状态storage ，以及设置购物车商品*/
        updateCartState(state,cartState) {
              this.commit('cart/setCartState',cartState);
              this.commit('cart/setCartProducts');
              console.log('updateCart',this.state.cart);
              localStorage.setItem('cartState',JSON.stringify(cartState));
              console.log('local',localStorage.getItem('cartState'))
        },
        
    }
})