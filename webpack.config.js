const path = require('path');
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.ts',
        bot: './src/bot.ts'
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
        alias: {
            '@': path.resolve('src'),
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: "node",
    externalsPresets: {
        node: true,
    },
    externals: [nodeExternals()],
}