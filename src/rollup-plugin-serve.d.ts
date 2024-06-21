declare module 'rollup-plugin-serve' {
    import { Plugin } from 'rollup';
    interface ServeOptions {
        contentBase?: string | string[];
        host?: string;
        port?: number;
        headers?: { [key: string]: string };
        historyApiFallback?: boolean | string | object;
        https?: boolean | object;
    }
    function serve(options?: ServeOptions): Plugin;
    export default serve;
}
