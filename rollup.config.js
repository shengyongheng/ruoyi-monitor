import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import path from "path";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const projectRootDir = path.resolve(__dirname);

const env = process.env.NODE_ENV;

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'esm'
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs'
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            env === "production" && terser(),
            alias({
                entries: [
                    { find: '@common', replacement: path.resolve(projectRootDir, 'src/common') },
                    { find: '@plugins', replacement: path.resolve(projectRootDir, 'src/plugins') },
                    { find: '@core', replacement: path.resolve(projectRootDir, 'src/core') },
                ]
            })].filter(Boolean)
    }
];