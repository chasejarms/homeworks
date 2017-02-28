module.exports = {
    entry: "./game_view.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" }
      ]
    }
};
