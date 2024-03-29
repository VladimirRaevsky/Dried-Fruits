import { type ResolveOptions } from 'webpack'

import { type BuildOptions } from './types/config'

export function buildResolve(options: BuildOptions): ResolveOptions {
    const {
        paths: { src, scssMixin },
    } = options

    return {
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        alias: {
            'scss-mixin': scssMixin,
        },
    }
}
