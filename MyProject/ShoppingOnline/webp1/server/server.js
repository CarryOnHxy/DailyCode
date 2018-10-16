const express = require('express');
const router = require('./router');
const ejs = require('ejs');
let app = express();

app.listen(8000);

app.set('view engine','html');
app.engine('html',ejs.__express);
app.set('views',__dirname+'/public');//设置views的路径

app.use(express.static('public'));

app.use(router);