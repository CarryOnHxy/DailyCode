<template>
  <div id="cart-con">
    <div class="cart-details center-block">
      <div class="cart-header">
        <p>全部商品
          <span class="badge">{{getCartNum}}</span>
        </p>
      </div>
      <hr>
      <div class="cart-center">
        <div class="good-attr">
          <div><input type="checkbox" :checked='isAll' class="selectAll" @click="selectAll"> 全选
          </div>
          <div>商品详情</div>
          <div>单价</div>
          <div>数量</div>
          <div>操作</div>
        </div>
        <ul class="list-group good-info">
          <li v-for='v in getCartProducts' :key="v.id" class="list-group-item">
            <div class="good-info-detail">
              <div>
                <input type="checkbox" name='selectedSingle' v-model='v.item_choosed'>
                <img :src="v.item_imgUrl" class="thumbnail"></div>
              <div>
                <span>{{v.item_brand}}</span>
                <span>{{v.item_name}}</span>
              </div>
              <div>
                <span>{{v.item_price}}</span>
              </div>
              <div class="num">
                <button @click='reduceCart(v)' class=" btn btn-default">-</button>
                {{v.item_num}}
                <button @click='addCart(v)' class=" btn btn-default">+</button>
              </div>
              <div class="delete">
                <button class="btn btn-danger" @click='removeGood(v)'>删除</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <hr>
      <div class="cart-footer center-block">
        <div class='selected-num text-center'>已选择
          <span class="badge">{{totalChoosed}}</span>件</div>

        <div class="btn-group operation">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            操作
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#">立即结算</a>
            </li>
            <li @click="removeCart">
              <a href="#">全部删除</a>
            </li>

          </ul>
        </div>
        <div class="total">合计:
          <span>{{totalPrice}}</span>元</div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
var getters = mapGetters("cart", [
  "getCartState",
  "getCartProducts",
  "getCartNum"
]);
var actions = mapActions("cart", ["reduceCart", "addCart"]);
var mutations = mapMutations("cart", [
  "removeGood",
  "removeCart",
  "setCartProducts"
]);
export default {
  computed: {
    ...getters,
    /* 判断是否全选的computed属性 */
    isAll() {
      var cartProducts = this.getCartProducts;
      if (cartProducts.length) {
        return cartProducts.every(v => {
          return v.item_choosed == true;
        });
      }
      return false
    },
    /* 判断总价格的computed属性 */
    totalPrice() {
      var totalPrice = 0;
      this.$store.state.cart.cartProducts.map((v, k) => {
        totalPrice += v.item_price * v.item_num;
      });
      return totalPrice.toFixed(2);
    },
    totalChoosed() {
      return this.getCartProducts.filter(v => {
        return v.item_choosed == true;
      }).length;
    }
  },
  methods: {
    ...actions,
    ...mutations,
    /* 全选事件 */
    selectAll() {
      var choosed = this.isAll ? false : true;
      this.getCartProducts.forEach(v => {
        v.item_choosed = choosed;
      });
    }
  }
};
</script>
<style scoped>
.cart-details {
  width: 80%;
}
#cart-con {
  margin-top: 10px;
}
.cart-header {
  padding: 5px;
}
.badge {
  margin-left: 5px;
}
.cart-center {
  width: 90%;
  margin: 0 auto;
}
.good-attr {
  border: solid #ccc 1px;
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  font-size: 15px;
}
.good-attr div {
  width: 200px;
  text-align: center;
  padding: 10px;
}
.good-info-detail {
  display: flex;
  flex-direction: row;
}
.good-info-detail div {
  width: 250px;
  text-align: center;
  border-right: #ccc 1px solid;
  /* padding: 50px; */
}
.good-info-detail img {
  width: 100px;
  height: 100px;
  float: right;
  margin-right: 50px;
  margin-top: 20px;
}
.good-info-detail span {
  position: relative;
  top: 50px;
}
.num {
  padding: 50px;
}
#cart-con .delete {
  border: none;
}
[name="checked"] {
  float: left;
  margin-top: 50px;
}
.cart-footer {
  width: 90%;
  border-radius: 1em;
  border: #ccc solid 1px;
  padding: 5px 10px 5px 10px;
}
.selected-num {
  float: left;
  margin-left: 20px;
  padding: 5px;
  font-size: 17px;
}
.selected-num span {
  font-size: 15px;
}
.operation {
  float: right;
  margin-right: 20px;
}
.total {
  float: right;
  padding: 6px;
  margin-right: 10px;
}
.delete {
  padding: 50px;
}
</style>

