const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
	//Inform webpack that we are building a bundle for nodeJS, not for the browser
	target: 'node',

	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, 'build')
	},
	externals: [
        /^(?!\.|\/).+/i,
    ]
}

module.exports = merge(baseConfig, config)