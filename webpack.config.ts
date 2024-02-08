/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

import type webpack from 'webpack'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        scssMixin: path.resolve(
            __dirname,
            'src',
            './app/styles/mixins/index.scss',
        ),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const analyze = env.analyze ? 'server' : 'disabled'
    const PORT = env.port || 5000

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        analyze,
        port: PORT,
    })

    return config
}
