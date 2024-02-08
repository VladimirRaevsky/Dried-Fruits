import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

import type webpack from 'webpack'

export function buildMinimizer(): webpack.WebpackPluginInstance[] {
    return [
        new TerserPlugin({
            extractComments: true,
        }),
        new ImageMinimizerPlugin({
            minimizer: [
                {
                    implementation: ImageMinimizerPlugin.svgoMinify,
                    options: {
                        encodeOptions: {
                            multipass: true,
                            plugins: ['preset-default'],
                        },
                    },
                },
                {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            jpeg: {
                                quality: 20,
                                progressive: true,
                            },
                            png: {
                                quality: 20,
                                progressive: true,
                                compressionLevel: 9,
                            },
                        },
                    },
                },
            ],
        }),
    ]
}
