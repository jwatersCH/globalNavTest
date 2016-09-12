var path =require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/entry.js',
	output: {path: __dirname, filename: './dist/bundle.js'},
	module: {
		loaders: [
		{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
		 {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
          loaders: [
            'url?limit=8192&hash=sha512&digest=hex&name=/img/[hash].[ext]',
            'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]}]
	}
	}