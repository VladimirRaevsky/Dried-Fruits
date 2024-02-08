// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import webpack from 'webpack'

import 'webpack-dev-server'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildMinimizer } from './buildMinimizer'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { type BuildOptions } from './types/config'

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        optimization: {
            minimizer: buildMinimizer(),
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}
