import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildOptions } from './types/config'

import type webpack from 'webpack'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        // type: 'asset',
        use: ['@svgr/webpack'],
    }

    const filesLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) =>
                            Boolean(resourcePath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    }

    const tsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [tsLoaders, scssLoader, svgLoader, filesLoader]
}
