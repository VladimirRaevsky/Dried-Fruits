import type webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'

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
