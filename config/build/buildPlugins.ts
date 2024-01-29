import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildPlugins(
    options: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options

    return [
        // new webpack.DefinePlugin({
        // eslint-disable-next-line no-tabs
        // 	__IS_DEV__: JSON.stringify(isDev),
        // }),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
    ]
}
