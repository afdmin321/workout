import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const buildPlugins = (
  options: BuildOptions,
): WebpackPluginInstance[] => {
  const { paths, isDev, apiUrl, project } = options;
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    // new CircularDependencyPlugin({
    //   exclude: /node_modules/,
    //   failOnError: true,
    // }),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     diagnosticOptions: {
    //       semantic: true,
    //       syntactic: true,
    //     },
    //     mode: 'write-references',
    //   },
    // }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
};
