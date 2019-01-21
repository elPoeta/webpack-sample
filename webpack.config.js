const myPath = __dirname +'/dist';

module.exports = {
  entry : {
    main: './src/js/app.js',
    other: './src/js/other.js'
  },
    module:{
        rules: [
    
          {
            test: /\.js$/,
            exclude: /node_modules/
          },
    
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
    
        ]
      },
      resolve: {
        extensions: ['*', '.js', 'css'],
      },
      output: {
        path: myPath,
        filename : '[name].bundle.js'
    }
}