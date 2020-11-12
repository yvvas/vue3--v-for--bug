const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = ( env = {} ) => {
    return {
        mode: env.production ? 'production' : 'development',
        resolve: {
            extensions: ['*', '.js', '.vue', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /(\.html$|favicon)/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(env.production)
            }),
            new VueLoaderPlugin()
        ],
        output: {
            path: path.join(__dirname, 'public'),
            publicPath: '/'
        },
        devtool: env.production ? false : 'cheap-module-eval-source-map',
        devServer: {
            historyApiFallback: true
        }
    }
}