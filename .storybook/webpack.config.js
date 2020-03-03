const webpack = require("webpack");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const React = require("react");
const ReactDOM = require("react-dom");

// Cenerates an HTML5 file that includes all your webpack bundles
// just the plugin to the webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ config }) => {
  mode: "development";
  devtool: "source-map";
  // Sets the base directory location
  // to be used via built-in '__dirname'
  context: path.resolve(__dirname, "${workspaceFolder}");

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"];
  }

  entry: {
    path: path.join(__dirname, "/src");
    filename: "index.tsx";
    publicPath: ".storybook";
  }
  output: {
    path: path.join(__dirname, "/dist");
    filename: "index.js";
    publicPath: ".storybook";
  }

  entry: {
    path: path.join(__dirname, "/src/components");
    filename: "buttons.stories.tsx";
    publicPath: ".storybook";
  }

  output: {
    path: path.join(__dirname, "/dist/components");
    filename: "button.stories.js";
    publicPath: ".storybook";
  }

  entry: {
    path: path.join(__dirname, "/src/test/components");
    filename: "App.test.tsx";
    publicPath: "src/test/components";
  }

  output: {
    path: path.join(__dirname, "/src/test/output");
    filename: "App.test.js";
    publicPath: "src/test/output";
  }

  externals: {
    react: React;
    reactDom: ReactDOM;
  }

  config.module.rules.push({
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
          configFile: "./tsconfig.json"
        }
      },
      {
        loader: require.resolve("react-docgen-typescript-loader")
      },
      {
        loader: "source-map-loader",
        options: { enforce: "pre", test: /\.js?/ }
      }
    ]
  });

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html")
    }),
    new TsconfigPathsPlugin({
      configFile: path.join(__dirname, "../tsconfig.json")
    }),
    new webpack.SourceMapDevToolPlugin({})
  ];
  return config;
};
