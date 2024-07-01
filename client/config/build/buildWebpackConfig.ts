import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { paths, mode, isDev } = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
            publicPath: "/",
        },
        plugins: buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};