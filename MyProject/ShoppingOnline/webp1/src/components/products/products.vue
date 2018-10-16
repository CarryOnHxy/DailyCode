<template>
  <div id="products-outer">
    <div class="products-con center-block">
      <ul class="nav nav-pills nav-stacked catalog pull-left">
        <li v-for='v in category' :key='v' @click="clickCategory(v)">
          <a href="#" class="text-center">{{v}}</a>
        </li>
      </ul>

      <div class="products-detail pull-right pullleft">
        <div class="condition navbar navbar-default">
          <div class="btn-group cod-type">
            <button v-for='v in condition' :key='v.id' type="button" :class="v.class" @click='clickCon(v)'>
              {{v.text}}
            </button>
          </div>
        </div>
        <ul class="products">
          <single-good v-for="v in getProducts" :key='v.key' :good='v'></single-good>
        </ul>
      </div>
    </div>
  </div>
</template>
<script scoped>
import singleGood from "./singleGood/singleGood.vue";
import { mapGetters, mapMutations } from "vuex";
const getters = mapGetters("products", ["getProducts"]);
const mutations = mapMutations("products", ["setProducts"]);
export default {
  data: function() {
    return {
      condition: [
        { order: 1, text: "全部", class: "btn btn-default", sortName: "" },
        { order: 1, text: "销量", class: "btn btn-default", sortName: "sale" },
        {
          order: 1,
          text: "评论",
          class: "btn btn-default",
          sortName: "comment"
        },
        {
          order: 1,
          text: "价格",
          class: "btn btn-default",
          sortName: "cu_price"
        }
      ],
      category: [
        "中外名酒",
        "茗茶月饼",
        "休闲食品",
        "奶粉",
        "饮品",
        "生鲜蔬果",
        "干货",
        "保健品",
        "特产类"
      ]
    };
  },
  computed: {
    ...getters
  },
  methods: {
    ...mutations,
    /* 点击排序条件进行排序，每点击一次改变升降序 */
    clickCon(v) {
      this.condition.map(v => {
        v.class = "btn btn-default";
      });
      if (v.order == 1) {
        v.class = "btn btn-danger";
        v.order = -1;
      } else {
        v.class = "btn btn-default";
        v.order = 1;
      }
      this.getServerData('/?sortName='+v.sortName +"&order=" +v.order);
    },
    /* 点击分类返回分类商品*/
    clickCategory(category) {
      this.getServerData('/?category='+category);
    },
    getServerData(query) {
      this.$http.jsonp("http://localhost:8000/sort" +query).then(response => {
          this.$store.commit("products/setProducts", response.body);
        });
    }
  },
  components: {
    singleGood: singleGood
  }
};
</script>
<style scoped>
.products-outer {
  margin-top: 30px;
}
.products-con {
  width: 80%;
}
.catalog {
  width: 200px;
}
.catalog li {
  border: solid #ccc 1px;
  border-radius: 4px;
}
.products-detail {
  width: 950px;
}
.cod-type {
  margin-left: 30px;
}
#products-outer {
  margin-top: 15px;
}
#products-outer .condition {
  min-height: 40px;
  padding: 2px;
}
.products {
  list-style-type: none;
  margin-left: 20px;
}
.pullleft {
  float: left;
}
</style>
