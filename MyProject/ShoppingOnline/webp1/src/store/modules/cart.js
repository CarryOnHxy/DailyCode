import Vuex from 'vuex';
let getters = {
    getCartState(state) {
        return state.cartState;
    },
    getProducts(state, getter, rootScope) {
        return rootScope.products.products;
    },
    getCartNum(state) {
        var totalNum = 0;
        state.cartState.forEach(v => {
            totalNum += v.item_num
        })
        return totalNum;
    },
    getCartProducts(state) {
        return state.cartProducts;
    }
}
let actions = {
    /* 减少购物车商品数目，减少为0的时候移除商品条目 */
    reduceCart(state, good) {
        var cartState = state.getters.getCartState;
        var products = state.getters.getProducts;
        var productResult = products.find(function (item) {
            return item.id == good._id;
        });
        if (good.item_num != 1) {
            var search = cartState.find(function (v) {
                return v.tag == good._id;
            })
            search.item_num--;
            this.commit('updateCartState', cartState);
            return;
        }
        state.commit('removeGood', good);
    },
    /* 增加购物车商品数目,购物车商品数量必须小于库存 */
    addCart(state, good) {
        var cartState = state.getters.getCartState;
        var products = state.getters.getProducts;
        var productResult = products.find(function (item) {
            return item._id == good._id;
        });
        if (productResult.item_inventory > good.item_num) {
            var cartResult = cartState.find(function (item) {
                return item.tag == good._id;
            })
            cartResult.item_num++;
        }
        this.commit('updateCartState', cartState);
    }
}
let mutations = {
    /* 设置购物车状态*/
    setCartState(state, cartState) {
        state.cartState = cartState;
    },
    /* 移除购物车商品条目 */
    removeGood(state, good) {
        //过滤购物车状态，过滤掉应被删除的购物车状态信息
        var newCartState = state.cartState.filter((v) => {
            return v.tag != good._id;
        })
        //改变购物车状态
        this.commit('updateCartState', newCartState);
    },
    removeCart(state) {
        this.commit('updateCartState', []);
    },
    /* 设置购物车商品数目，每次更新购物车状态都需要执行此函数 */
    setCartProducts(state) {
        var cartState = state.cartState;
        var products = this.state.products.products;
        state.cartProducts = cartState.map(item => {
            var good = products.find(function (v) {
                return item.tag == v._id;
            });
            return {
                _id: good._id,
                item_brand: good.brand,
                item_name: good.goods_name,
                item_num: item.item_num,
                item_price: good.cu_price,
                item_imgUrl: good.imgUrl,
                item_choosed:false
            };
        });
    }
}
let state = {
    /* state里的数据一定要手动声明，不能隐式创建 state.cartState = [] */
    cartProducts: [],
    cartState: []
}
export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}