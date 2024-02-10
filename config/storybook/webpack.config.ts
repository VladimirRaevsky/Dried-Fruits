import { DefinePlugin, type Configuration, type RuleSetRule } from 'webpack'

import path from 'path'

import { buildCssLoader } from '../build/loaders/buildCssLoader'

import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: Configuration }): Configuration => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        scssMixin: path.resolve(
            __dirname,
            '..', '..',
            'src',
            './app/styles/mixins/index.scss')
    }

    const rules = config.module?.rules as RuleSetRule[]

    config.resolve!.modules?.push(paths.src)
    config.resolve!.alias = { 'scss-mixin': paths.scssMixin }
    config.resolve!.extensions?.push('.ts', '.tsx')

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.module?.rules?.push(buildCssLoader(true))

    config.module!.rules = rules.map((rule) => (
        (typeof rule.test === 'string' && rule.test.includes('svg'))
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ))

    config.plugins?.push(
        new DefinePlugin({
            IS_DEV: JSON.stringify(true),
        })
    )

    return config
}
