import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "dist"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };
    const mode: BuildMode = env.mode || "development";
    const isDev: boolean = mode === "development";
    const PORT: number = env.port || 9000;
    const apiUrl: string = env.apiUrl || "http://localhost:8800";
    const project = "frontend";
    const config = buildWebpackConfig({ paths, mode, isDev, PORT, apiUrl, project });
    return config;
};
