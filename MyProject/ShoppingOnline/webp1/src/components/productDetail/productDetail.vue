<template>
    <div class="detail-con center-block">
        <div class="img-con pull-left">
            <div class="master-map ">
                <img :src="good.imgUrl" />
            </div>
            <div class="thumbnails">
                <img :src="good.imgUrl" class="thumbnail">
                <img :src="good.imgUrl" class="thumbnail">
                <img :src="good.imgUrl" class="thumbnail">
                <img :src="good.imgUrl" class="thumbnail">
            </div>
        </div>
        <div class="details pull-right">
            <div class="title">
                <strong>{{good.brand}}</strong>
                <strong>{{good.goods_name}}</strong>
            </div>
            <div class="price">
                <span class='cu_price'>
                    <strong>￥{{good.cu_price}}</strong>
                </span>
                <span class="or_price pull-right">
                    <del>￥{{good.or_price}}</del>
                </span>
            </div>
            <div class="inventory ">
                数量:
                <button class="btn btn-danger">-</button>
                <span class="num">0</span>
                <button class="btn btn-danger">+</button>
            </div>
            <div class="operation center-block">
                <button class="btn btn-active pull-left">加入购物车</button>
                <button class="btn btn-danger pull-right">立即购买</button>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<script>
export default {
  computed: {
    good() {
      return this.$route.query;
    }
  }
};
</script>
<style>
.detail-con {
  width: 40%;
  margin-top: 10px;
  padding: 5px;
  border: dashed 1px #ccc;
}
.img-con {
  width: 25%;
  padding: 5px;
}
.master-map {
  margin-bottom: 5px;
  text-align: center;
}
.master-map img {
  width: 250px;
  height: 250px;
}
.thumbnails {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.thumbnails img {
  width: 65px;
  height: 65px;
  padding: 2px;
}
.details {
  width: 300px;
  padding: 10px;
}
.details div {
  padding: 20px;
  margin-top: 10px;
}
.title {
  padding: 10px;
  font-size: 18px;
  border: dashed 1px #ccc;
}
.price {
  border-bottom: dashed 1px #ccc;
}
.cu_price {
  text-indent: 1em;
  color: #ff5511;
  font-size: 20px;
}
.or_price {
  margin-top: 5px;
}
.inventory {
  border-bottom: dashed 1px #ccc;
  text-align: center;
}
.operation {
  text-align: center;
}
</style>

