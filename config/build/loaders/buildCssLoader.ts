import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import type webpack from 'webpack'

export const buildCssLoader = (isDev: boolean): webpack.RuleSetRule => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:8]'
                        : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
})
