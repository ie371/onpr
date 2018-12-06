let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let VueLoaderPlugin  =  require ( "vue-loader/lib/plugin"  );


let conf = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname,'./build'),
		publicPath: '/build/',
		filename: 'bundle.js'	
	},
	 
	devServer: {
		overlay: true
	},
	module: {
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					// fallback: "style-loader",
					use: "css-loader"
        		})
			},

		]
	},
	  plugins: [
    		new ExtractTextPlugin("styles.css"),
    		new VueLoaderPlugin()
  		],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
      // vue: 'vue/dist/vue.min.js'
    }
  }
};

module.exports = (env, options) => {

let production = options.mode === 'production';
	conf.devtool = production
					? false
					: 'eval-sourcemap';
	return conf;
}
