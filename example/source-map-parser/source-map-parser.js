import fs from 'fs';
import path from "path";
import { SourceMapConsumer } from 'source-map';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const projectRootDir = path.resolve(__dirname);

async function parseStack(filePath, line, column) {
    const rawSourceMap = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const consumer = await new SourceMapConsumer(rawSourceMap);
    const result = consumer.originalPositionFor({
        line,
        column
    });

    consumer.destroy();
    console.log("返回真实源码位置:", result);
    return result; // 返回真实源码位置
}

/**
 * common_5ee2e5d2.js.map 是从一个 webpack 案例配置中打包生成的 .map 文件
 * 返回真实源码位置：{
        source: 'webpack://webpack_config/src/common/index.js',
        line: 3,
        column: 14,
        name: 'foo'
   }
 */
parseStack(path.resolve(projectRootDir, 'common_5ee2e5d2.js.map'), 1, 174);