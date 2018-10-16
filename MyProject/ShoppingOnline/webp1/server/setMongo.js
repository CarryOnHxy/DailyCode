const mongoose = require("mongoose");
const config = require('./config');
mongoose.connect(config.URL, {
	useNewUrlParser: true
});

//链接数据库
mongoose.connect(config.URL, {
	useNewUrlParser: true
});
//监听事件
//链接成功
mongoose.connection.on('connected', function () {
	console.log("链接成功,数据库地址为：", config.URL);
})
//链接失败
mongoose.connection.on('error', function (err) {
	console.log("链接失败,错误为：", err);
})
//链接断开
mongoose.connection.on('disconnected', function () {
	console.log("链接断开");
})


dbModel = mongoose.model(config.TABLE_GOODS,config.SCHEMA);

module.exports = dbModel;