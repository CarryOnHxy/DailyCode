// Mongo = require('./Mongo');
const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();
let coder = bodyParser.urlencoded({
    extended: true
});
var dbModel = require('./setMongo');
//extended是否解析子对象，即对象里面的子对象不设置extend会变成字符串
var data = {
    ejsData: 'ejsData'
}


router.all('*', function (res, rep, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

router.all('/', function (res, rep) {
    rep.render('main', data);
})
router.post('/post', coder, function (res, rep) {
    rep.send(res.body);
})
router.get('/json', coder, function (res, rep) {
    dbModel.find({}, function (err, docs) {
        rep.json(docs);
    })

})
router.get('/jsonp', coder, function (res, rep) {
    dbModel.find({}, function (err, docs) {
        rep.jsonp(docs);
    })
})
/* 产品排序功能 */
router.all('/sort', function (res, rep) {
    var filter = {
        sort: {}
    }
    var conditions = {
        category: null
    };
    conditions.category = res.query.category;

    conditions.category ? conditions.category = conditions.category : conditions = {};

    res.query.sortName ? filter.sort[res.query.sortName] = res.query.order : filter = {};

    dbModel.find(conditions, [], filter, function (err, docs) {
        rep.jsonp(docs);
    })
})
router.all('/setData', function (res, rep) {
    for (var i = 0; i < 50; i++) {
        dbModel.create(setData(), function (err, docs) {
            // console.log(docs);
        })
    }
    rep.end();
})

module.exports = router;

//牌子 销量 商品名 原价 现价 评论 库存 分类
function setData() {
    var brand = ['百草味', '三只松鼠', '良品铺子', '同仁堂', '西部数据', '台电', '美的'];
    var goods_name = ['夏威夷果', '开心瓜子', '香喷麻薯', '枸杞子', '固态硬盘', 'U盘', '大空调'];
    var or_price = ((Math.random() * 100 + 100).toFixed(2));
    var cu_price = (Math.random() * 100).toFixed(2);
    var sale = 0 | Math.random() * 10000;
    var imgUrl = 'img/' + ((0 | Math.random() * 20) + 1) + '.jpg';
    var item_inventory = 0 | (Math.random() + 1) * 10;
    var comment = 0 | Math.random() * 10000;
    var category = ["中外名酒", "茗茶月饼", "休闲食品", "奶粉", "饮品", "生鲜蔬果", "干货", "保健品", "特产类"];
    var data = {
        brand: brand[0 | Math.random() * 6],
        goods_name: goods_name[0 | Math.random() * 6],
        or_price: or_price,
        cu_price: cu_price,
        sale: sale,
        item_inventory: item_inventory,
        imgUrl: imgUrl,
        comment: comment,
        category: category[0 | Math.random() * 9]
    }
    return data;
}