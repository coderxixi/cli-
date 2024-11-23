/*
 * @Author: liuss7 976344695@qq.com
 * @Date: 2024-11-22 14:41:14
 * @LastEditors: liuss7 976344695@qq.com
 * @LastEditTime: 2024-11-22 14:41:23
 * @FilePath: /nodecli/cli_progress/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Bar } from 'cli-progress';

const bar = new Bar({
  format: '进度：{bar} | {percentage}% || {value}/{total} || 速度: {speed}',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true
});

bar.start(200, 0, {
  speed: "0"
});

let value = 0;

const timer = setInterval(function () {
  value++;

  bar.update(value, {
    speed: (60 * Math.random()).toFixed(2) + "Mb/s"
  });

  if (value >= bar.getTotal()) {
    clearInterval(timer);

    bar.stop();
  }
}, 20);
