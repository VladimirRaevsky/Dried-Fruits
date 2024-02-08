/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types/config'

export function buildPlugins(
    webpackOptions: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const { paths, analyze, isDev } = webpackOptions

    return [
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev),
        }),
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
