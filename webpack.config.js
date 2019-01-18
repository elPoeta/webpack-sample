module.exports = {
    entry : './src/js/app.js',
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
        path: __dirname +'/dist',
        filename : 'bundle.js'
    }
}