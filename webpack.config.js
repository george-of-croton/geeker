
module.exports = {
    entry: "./models/profiles.js",
    output: {
        path: './models',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }
          }
        ]
    }
};
