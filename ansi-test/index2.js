/*
 * @Author: liuss7 976344695@qq.com
 * @Date: 2024-11-22 14:27:13
 * @LastEditors: liuss7 976344695@qq.com
 * @LastEditTime: 2024-11-22 14:28:23
 * @FilePath: /nodecli/ansi-test/index2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import readline from 'node:readline';

const repeatCount = process.stdout.rows - 2;
const blank = repeatCount > 0 ? '\n'.repeat(repeatCount) : '';
readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);
console.log(blank);