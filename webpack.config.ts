import path from 'path'
import type webpack from 'webpack'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        scssMixin: path.resolve(__dirname, 'src', './app/styles/mixins/index.scss')
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const mode = env.mode || 'production'
    const isDev = mode === 'development'
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const PORT = env.port || 5000

    console.log(mode)

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
}
