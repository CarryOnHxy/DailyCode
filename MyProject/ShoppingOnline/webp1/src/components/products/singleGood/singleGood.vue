<template>
  <li>
    <div class='goods_container pull-left'>
      <div class="good">
        <div class="shop_img text-center">
          <router-link :to="{name:'productDetail',query:good}">
            <img :src="good.imgUrl">
          </router-link>
        </div>
        <p class='goods_name'>
          <a href="#">
            <span class="brand">
              {{ good.brand}}
            </span>
            <span class="name ">
              {{good.goods_name}}
            </span>
          </a>
        </p>
        <p class="goods_prize">
          <strong>
            ￥{{good.cu_price}}</strong>
          <del class="old_price pull-right">
            ￥ {{good.or_price}}
          </del>
        </p>
        <button class='btn btn-default center-block' @click="addGood(good)">
          <i class="glyphicon glyphicon-shopping-cart"></i>
          加入购物车
        </button>
      </div>
    </div>
  </li>
</template>
<script>
import { mapActions } from "vuex";
const actions = mapActions("products", ["addGood"]);
export default {
  methods: {
    ...actions
  },
  props: ["good"]
};
</script>
<style scoped>
.goods_container {
  border: solid #ccc 1px;
  border-radius: 1em;
  width: 210px;
  margin: 10px;
  padding: 5px;
}
.goods_name {
  margin-top: 1em;
  text-indent: 1em;
}
.goods_name a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
.goods_prize {
  color: #f54516;
  font-size: 18px;
  text-indent: 1em;
  line-height: 30px;
}
.old_price {
  color: #ccc;
  font-size: 14px;
  margin-right: 1em;
}
.shop_img img{
  width: 200px;
  height: 200px
}
</style>


