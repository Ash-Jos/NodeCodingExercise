const path = require('path');

module.exports = {
//   entry: './src/*.tsx',
entry: {
    main: ['./src/Sum/index.ts', './src/Sum/userInputCalc.ts']
  },  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
        fs: false,
        child_process: false,
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/"),
        "util": require.resolve("util/"),
      },
  },
};
