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
// parseStack(path.resolve(projectRootDir, 'main_1f1c4078.js.map'), 323，15);

async function restoreErrorContext(filePath, line, column) {
    if (!fs.existsSync(filePath)) {
        return { error: 'SourceMap file not found' };
    }

    const rawSourceMap = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const consumer = await new SourceMapConsumer(rawSourceMap);

    const original = consumer.originalPositionFor({ line, column });

    if (!original.source) {
        return { error: 'Original source not found' };
    }

    const sourcesIndex = rawSourceMap.sources.indexOf(original.source);
    const sourceContent = rawSourceMap.sourcesContent[sourcesIndex !== -1 ? sourcesIndex : 0];

    console.log("rawSourceMap.sources:", rawSourceMap.sources);
    console.log("original.source:", original.source);
    console.log("sourcesIndex:", sourcesIndex);
    console.log("rawSourceMap.sourcesContent:", rawSourceMap.sourcesContent);
    console.log("sourceContent:", sourceContent);

    // return;

    const codeLines = sourceContent.split('\n');
    const start = Math.max(original.line - 3, 1);
    const end = Math.min(original.line + 3, codeLines.length);

    const context = [];
    for (let i = start; i <= end; i++) {
        context.push({
            line: i,
            code: codeLines[i - 1],
            isErrorLine: i === original.line
        });
    }

    console.log({
        source: original.source,
        line: original.line,
        column: original.column,
        context
    });

    return {
        source: original.source,
        line: original.line,
        column: original.column,
        context
    };
}

restoreErrorContext(path.resolve(projectRootDir, 'main_1f1c4078.js.map'), 323, 15)