/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins(
    webpackOptions: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const { paths, analyze } = webpackOptions

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
        new BundleAnalyzerPlugin({
            analyzerMode: analyze,
        }),
    ]
}
