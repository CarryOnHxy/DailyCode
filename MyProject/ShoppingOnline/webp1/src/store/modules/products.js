import data from '../../data/data'
let actions = {
    addGood(state, good) {
        /* 添加商品
           1.判断库存大小是否添加购物车
           2.购物车是否有此商品
           3.更新购物车信息
        */
        var cartState = this.state.cart.cartState;
        if (good.item_inventory > 0) {
            var searchResult = cartState.find(function (item) {
                return item.tag == good._id;
            });
            console.log('searchResult',searchResult);
            if (searchResult) {
                state.commit('updateItemNum', searchResult);
            } else {
                state.commit('pushCartState', good);
            }
            good.item_inventory--;
        }
    }
}
let mutations = {
    pushCartState(state, good) {
        var cartState = this.state.cart.cartState;
        cartState.push({
            tag: good._id,
            item_num: 1
        })
        this.commit('updateCartState', cartState);
    },
    updateItemNum(state, searchResult) {
        console.log(searchResult);
        searchResult.item_num++;
        this.commit('updateCartState', this.state.cart.cartState);
    },
    setProducts(state, data) {
        data.forEach(v => {
            v.imgUrl = 'http://localhost:8000/'+ v.imgUrl ;
        })
        state.products = data;
    }
}
let getters = {
    getProducts(state) {
        return state.products;
    }
}
let state = {
    products: []
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}