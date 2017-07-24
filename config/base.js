import webpack from 'webpack'
import WebpackMd5Hash from 'webpack-md5-hash'
import ManifestPlugin from 'webpack-manifest-plugin'
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin'

import { join, resolve } from 'path'

export const paths = {
    app: join(__dirname, 'src'),
    assets: join(__dirname, 'assets'),
    devapp: join(__dirname, 'dev'),
    build: join(__dirname, 'build'),
    dist: join(__dirname, 'dist.prod'),
    webapp: join(__dirname),
    cdnlib: join(__dirname),
    lib: join(__dirname, 'lib')
}

export default env => {
    return {
        context: resolve(__dirname, '../'),
        entry: {
            'app': paths.app
        },
        output: {
            path: resolve(paths.dist),
            filename: '[name]-[hash].js',
            chunkFilename: '[name]-[chunkhash].js',
            libraryTarget: 'window',
            library: '[name]',
            publicPath: '/static/synoptic-grid/js/'
        },
        module: {
            rules: [
                {
                    test: /\.js|\.jsx$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.woff(\?.*$|$)/,
                    use: [
                        'url-loader?limit=10000&mimetype=application/font-woff',
                    ],
                },
                {
                    test: /\.(ttf|eot|svg)(\?.*$|$)/,
                    use: ['file-loader'],
                },
            ],
        },
        plugins: [
            // Extract all 3rd party modules into a separate 'vendor' chunk
            // Wait -- will this exclude the RPE also? Probably!
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: ({ resource }) => /node_modules/.test(resource),
            }),

            // Generate a 'manifest' chunk to be inlined in the HTML template
            new webpack.optimize.CommonsChunkPlugin('manifest'),

            // Need this plugin for deterministic hashing
            // until this issue is resolved: https://github.com/webpack/webpack/issues/1315
            // for more info: https://webpack.js.org/how-to/cache/
            new WebpackMd5Hash(),

            // This does something anyway
            new ChunkManifestPlugin({
                filename: 'chunk-manifest.json',
                manifestVariable: 'webpackManifest',
            }),

            // Creates a manifest file I can use to refer to the generated outputs.
            new ManifestPlugin({
                publicPath: '/static/synoptic-grid/js/',
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.css'],
        }
    }
}

