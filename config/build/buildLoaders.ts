import { buildCssLoader } from './loaders/buildCssLoader'
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

    const scssLoader = buildCssLoader(options.isDev)

    const tsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [tsLoaders, scssLoader, svgLoader, filesLoader]
}
