const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};

const serverConfig = {
  mode: "development",
  target: "node",
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    "index.js": path.resolve(__dirname, "src/server.js")
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]"
  },
  watchOptions: {
    ignored: ["database/*.json", "node_modules/**"]
  }
};

const clientConfig = {
  mode: "development",
  target: "web",
  entry: {
    "bundle.js": path.resolve(__dirname, "src/client/index.js")
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "[name]"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/client/assets" }
    ])
  ]
};


const configuration = [serverConfig, clientConfig];
configuration.watch = true;


module.exports = configuration;
