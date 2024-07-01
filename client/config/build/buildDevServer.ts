import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    const { PORT } = options;
    return {
        port: PORT,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
};
