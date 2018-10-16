<template>
    <div id="shop_header">
        <nav class="navbar navbar-default">
            <div class="navbar-con center-block">
                <div class="user-operation navbar-left">
                    <a class="text-left login">
                        <i class='glyphicon glyphicon-user'></i>登录</a>
                    <a class="text-right register">
                        <i class='glyphicon glyphicon-plus'></i>注册</a>
                </div>
                <div class="button-group navbar-right">
                    <button class='btn btn-default' @click="clickCart">
                        <i class="glyphicon glyphicon-shopping-cart"></i>
                        购物车
                        <span class="badge">{{getCartNum}}</span>
                    </button>
                    <button class='btn btn-default'>
                        <i class="glyphicon glyphicon-phone-alt"></i>
                        一键客服
                    </button>
                </div>
            </div>
        </nav>
        <div class="header-center">
            <div class="center-con center-block">
                <div class='logo pull-left'>
                    <a href="#"></a>
                </div>
                <div class="input-group pull-left search-con">
                    <span class="input-group-btn">
                        <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            城市
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">惠州</a>
                            </li>
                            <li>
                                <a href="#">北京</a>
                            </li>
                            <li>
                                <a href="#">上海</a>
                            </li>
                            <li>
                                <a href="#">广州</a>
                            </li>
                            <li>
                                <a href="#">深圳</a>
                            </li>
                        </ul>
                    </span>
                    <input type="text" class="form-control">
                    <span class="input-group-btn">
                        <button class="btn btn-default ">
                            <i class='glyphicon glyphicon-search' style=" outline: none"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class='bottom-con center-block'>
                <ul class="nav navbar-default center-block ">
                    <li class="active">
                        <a href="#1">首页</a>
                    </li>
                    <li>
                        <a href='#2'>精彩生活</a>
                    </li>
                    <li>
                        <a href="#/products">生活食品</a>
                    </li>
                    <li>
                        <a href="#4">生活用品</a>
                    </li>
                    <li>
                        <a href="#5">生活家居</a>
                    </li>
                    <li>
                        <a href="#6">会员杂锦</a>
                    </li>
                    <li>
                        <a href="#7">关于我们</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
const getters = mapGetters('cart',['getCartNum']); 
export default {
  computed: {
      ...getters
  },
  methods: {
    clickCart() {
      location.hash = "/cart";
    }
  }
};
</script>
<style scoped>
.navbar-con {
  width: 80%;
  padding: 10px;
}
.user-operation {
  margin-top: 5px;
  font-size: 14px;
}
.user-operation a {
  text-decoration: none;
  cursor: pointer;
}
.logo {
  background: url(https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png)
    no-repeat 0px -47px;
  background-size: 250px 200px;
  width: 117px;
  height: 48px;
}
.header-center {
  padding: 10px;
  height: 60px;
}
.search-con {
  width: 800px;
  margin-left: 100px;
  margin-top: 10px;
}
.center-con {
  width: 80%;
}
.header-bottom {
  font-size: 16px;
  font-weight: bold;
}
.bottom-con {
  margin-top: 10px;
  width: 80%;
}
#shop_header .nav {
  display: flex;
  flex-direction: row;
}
.cart {
  text-decoration: none;
  color: #333;
}
.cart:hover {
  text-decoration: none;
  color: #333;
}
</style>

