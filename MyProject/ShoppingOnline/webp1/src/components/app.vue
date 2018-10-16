<template>
  <div>
    <shop-header></shop-header>

    <router-view></router-view>
    <div class="clearfix"></div>
    <shop-footer></shop-footer>
  </div>
</template>
<script>
import shopHeader from "./common/shopHeader.vue";
import shopFooter from "./common/shopFooter.vue";
export default {
  components: {
    shopHeader,
    shopFooter
  },
  /* app.vue生命周期   
    页面打开就需要获取localStorage里的cartState，
    且赋值于数据仓库里的cartState 
    这里卡了很久，因为自己要在created里面给cartState赋值，
    但是在vuex里面的cart module没有声明cartState属性，而是
    在created里面利用this.$store.state.cart.cartState来默认创建属性，
    这样做计数属性无法监听cartState
    */
  beforeCreate() {
    var cartStorage = JSON.parse(localStorage.getItem("cartState"));
    if (cartStorage != null) {
      this.$store.commit("cart/setCartState", cartStorage);
    }
    /*vue-resource请求数据 */
    this.$http.jsonp("http://localhost:8000/jsonp").then(response => {
      this.$store.commit("products/setProducts", response.body);
      this.$store.commit("cart/setCartProducts");
    });
  },
  destroyed() {
    //关闭浏览器并不能触发app.VUE路由结束。。。。(修改路由代码时可以)
    console.log("app destoryed");
    alert("app destooryed");
  }
};
</script>


