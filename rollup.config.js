import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from "path";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const projectRootDir = path.resolve(__dirname);

export default [
    {
        input: 'src/index.js',
        output: [
            { file: 'dist/index.esm.js', format: 'esm' },
            { file: 'dist/index.cjs.js', format: 'cjs' }
        ],
        plugins: [resolve(), commonjs(), alias({
            entries: [
                // { find: '@common', replacement: './src/common' },
                // { find: '@plugins', replacement: './src/plugins' },
                // { find: '@core', replacement: './src/core' },
                { find: '@common', replacement: path.resolve(projectRootDir, 'src/common') },
                { find: '@plugins', replacement: path.resolve(projectRootDir, 'src/plugins') },
                { find: '@core', replacement: path.resolve(projectRootDir, 'src/core') },
            ]
        })]
    }
];