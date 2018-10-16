//引入模块
const Path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

//webpack 打包配置
module.exports = {
	//入口配置
	entry:['./src/index'],
	//出口配置
	output:{
		path:Path.resolve("./dist"),
		filename:"./static/js/[name].js"
	},
	//解析
	resolve:{
		//后缀名,省略后缀名
		extensions:['.js','.vue'],
		//路径别名
		alias:{
			//坑：只能提供给import和require方法
			"$src":Path.resolve(__dirname,"src"),
			"~bootstrap":Path.join(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css'),
			"@com":Path.join(__dirname,'src/components')
		}
	},
	module:{
		//加载规则
		//ES6 babel-loader
		rules:[{
			//加载图片、字体等资源
			test:/\.(gif|png|jpg|jpeg|ttf|svg|eot|woff|woff2)$/, 
			use:[{
				loader:"url-loader",
				options:{
					limit:8192,
					outputPath:"./static/assets"
				}
			}]
		},{
			//加载css
			test:/\.css$/,
			use:ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader',
				publicPath:'../../',
			})
		},{
			//less || sass
			test:/\.less$/,
			use:ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader:"css-loader"
				},{
					loader:"less-loader"
				}],
				publicPath:'../../',
			}),
			resolve:{
				alias:{
					"~less":Path.resolve(__dirname,"src/less"),
				}
			}
		},{
			//vue
			test:/\.vue$/,
			use:[{
				loader:"vue-loader",
				options:{
//					加载style
//					css
					css:ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader',
						publicPath:'../../',
					}),
					//less
					less:ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [{
							loader:"css-loader"
						},{
							loader:"less-loader"
						}],
						publicPath:'../../',
					}),
//					sass:[],
//					mine:[]
				},
			}]
		}]
	},
	//插件，用于生产模版和各项功能
	plugins:[
		// 模块热替换(HMR - Hot Module Replacement)
		new Webpack.HotModuleReplacementPlugin(),
		//分离css 插件
		new ExtractTextPlugin({
			filename: 'static/css/[name].css',
		}),
		//html插件
		new HtmlWebpackPlugin({
			template: './src/index.html',//入口路径
			//filename:"./index.html",//出口路径,默认值
		}),
		//预先提供插件/框架   --> 声明为全局变量
		new Webpack.ProvidePlugin({
			$:"jquery",
			jQuery:"jquery"
		}),
		//vue 插件
		new VueLoaderPlugin()
	],
	//服务器设置
	devServer: {
		contentBase: Path.resolve(__dirname, 'dist'), //最好设置成绝对路径
		host: 'localhost',//域名
		port: 8090,//端口
		open: true,//是否自动打开
		hot: true,//是否热加载
		inline: true //是否实时刷新
	}
}













