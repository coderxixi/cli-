/*
 * @Author: liuss7 976344695@qq.com
 * @Date: 2024-11-22 14:29:02
 * @LastEditors: liuss7 976344695@qq.com
 * @LastEditTime: 2024-11-22 14:29:08
 * @FilePath: /nodecli/ansi-test/index3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ansiEscapes from 'ansi-escapes';

const log = process.stdout.write.bind(process.stdout);

log(ansiEscapes.cursorTo(10, 1) + '111');
log(ansiEscapes.cursorTo(7, 2) + '222');
log(ansiEscapes.cursorTo(5, 3) + '333');

setTimeout(() => {
  log(ansiEscapes.cursorTo(0, 2) + ansiEscapes.eraseEndLine);
  log(ansiEscapes.cursorTo(5, 3) + '444')
}, 1000)

console.log('\u001b[36;1;4mguang');
console.log('\u001b[36;1;4mguang\u001b[0m 666');