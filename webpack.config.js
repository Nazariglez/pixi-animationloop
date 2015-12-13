'use strict';

var webpack = require('webpack');
var path = require('path');

var DEV = process.env.NODE_ENV !== "production";
var ENTRY = ['./src/index.js'];
var EXTERNALS = {};

if(DEV){
	ENTRY.unshift('pixi.js');
}else{
	EXTERNALS['pixi.js'] = "PIXI";
}

module.exports = {
	entry: ENTRY,
	output: {
		filename: 'build/index.js'
	},
  resolve: {
    extensions: ["", ".js"]
  },
  externals : EXTERNALS,
	module: {
    postLoaders: [
      {
        loader: "transform?brfs"
      }
    ],
		loaders: [
			{
				test: /\.json$/,
				include: path.join(__dirname, 'node_modules', 'pixi.js'),
				loader: 'json',
			},
			{
				test: /\.js$/,
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
			}
		]
	}
};
