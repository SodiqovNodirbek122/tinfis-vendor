const path = require('path')
const hwp = require('html-webpack-plugin')
// const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 7070

module.exports = {
    mode: 'development',
    entry: {index: path.resolve(__dirname, "src", "index.js")},
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules\/(?!antd\/).*/,
                    name: "vendors",
                    chunks: "all",
                },
                // This can be your own design library.
                antd: {
                    test: /node_modules\/(antd\/).*/,
                    name: "antd",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: {
            name: "manifest",
        },
    },
    devtool: "source-map",
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },
    devServer: {
        port: port,
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#343A40',
                                    'link-color': '#343A40',
                                    'border-radius-base': '1px',
                                    'border-color-base': '#bab4b4'
                                },
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new hwp(
            {
                template: 'public/index.html',
                favicon: 'public/favicon.svg'
            }
        ),
        // new BundleAnalyzerPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'REACT_APP_PORT': JSON.stringify(process.env.REACT_APP_PORT)
        //     }
        // }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public', 'safia_logo.svg'),
                    to: path.resolve(__dirname, 'dist', 'safia_logo.svg')
                }
            ]
        }),
        new Dotenv()
    ]
}
