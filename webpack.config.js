module.exports = {
    // ... other configuration options ...
    module: {
      rules: [
        // ... other rules ...
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
      ],
    },
  };
  