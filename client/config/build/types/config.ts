export type BuildMode = "development" | "production";

export interface BuildPath {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    PORT: number;
    apiUrl: string;
    project: "frontend" | "jest";
}
