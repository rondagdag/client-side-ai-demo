import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        'dist/main': './main.js',
        'dist/main.min': './main.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname,
        library: {
            type: 'module',
        },
    },
    plugins: [
        // Copy .wasm files to dist folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/onnxruntime-web/dist/*.jsep.*',
                    to: 'dist/[name][ext]'
                },
                {
                    from: 'index.html',
                    to: 'dist/index.html'
                },
                {
                    from: 'main.css',
                    to: 'dist/main.css'
                },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8080
    },
    experiments: {
        outputModule: true,
    },
};
