import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfigration} from "webpack-dev-server"
export function buildDevServer(options: BuildOptions): DevServerConfigration {
    return {
        port: options.port,
        // TODO: Поменять open на true, когда проект будет готов
        open: false,
        historyApiFallback: true,
    }
}