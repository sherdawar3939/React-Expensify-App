const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const plugins = [
    new MiniCssExtractPlugin({
      filename: devMode ? "styles.css" : "[name].[contenthash].css",
    }),
  ];
module.exports = ()=>{
    return {
        entry:'./src/app.js',
        output:{
            path: path.join(__dirname, 'public'),
            filename:'bundle.js'
        },
        plugins,
        module:{
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_module/
            },
            {
                test:/\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                          loader:"css-loader",
                          options:{
                            sourceMap:true
                          }
                        },
                        {
                          loader:"sass-loader",
                          options:{
                            sourceMap:true
                          }
                        }
                      ],  
                  }
             ]
        },
         devtool: 'inline-source-map',
         devServer: {
             historyApiFallback:true,
             static: {
              directory: path.join(__dirname, 'public'),
              serveIndex: true
            },
          },
    }
} 