'use strict'

const VL = require('vue-loader');

module.exports = {
	mode: 'development',
	entry: ['./src/app.js'],
	module: {
		rules: [
			{test: /\.vue$/, use: 'vue-loader'}
		]
	},
	plugins: [
		new VL.VueLoaderPlugin()
	]
}
