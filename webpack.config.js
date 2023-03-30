import { resolve } from 'path';

export const mode = 'production';
export const entry = './src/index.js';
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'my-react-component.js',
    library: 'MyReactComponent',
    libraryTarget: 'umd',
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        },
    ],
};
export const externals = {
    react: 'react',
    'react-dom': 'react-dom',
};
