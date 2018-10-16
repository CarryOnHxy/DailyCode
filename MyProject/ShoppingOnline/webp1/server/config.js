const URL = 'mongodb://localhost:27017/test';

const TABLE_GOODS = 'goods';

const SCHEMA ={
	brand: String,
	goods_name: String,
	or_price: Number,
	cu_price: Number,
	sale: Number,
	imgUrl:String,
	item_inventory:Number,
	category:String,
	comment:String
}

module.exports = {
    URL,
    TABLE_GOODS,
    SCHEMA
}