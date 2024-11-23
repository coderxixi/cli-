/*
 * @Author: liuss7 976344695@qq.com
 * @Date: 2024-11-23 10:10:14
 * @LastEditors: liuss7 976344695@qq.com
 * @LastEditTime: 2024-11-23 10:10:20
 * @FilePath: /nodecli/cli_progress/src/ProgressBar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ansiEscapes from 'ansi-escapes';
import { EOL } from 'os';

const write = process.stdout.write.bind(process.stdout);

export class ProgressBar {
  total: number = 0;
  value: number = 0;

  constructor() { }

  start(total: number, initVlaue: number) {
    this.total = total;
    this.value = initVlaue;

    write(ansiEscapes.cursorHide)
    write(ansiEscapes.cursorSavePosition)

    this.render()
  }

  render() {
    let progress = this.value / this.total;

    if (progress < 0) {
      progress = 0;
    } else if (progress > 1) {
      progress = 1;
      this.value = this.total;
    }

    const barSize = 40;

    const completeSize = Math.floor(progress * barSize);
    const incompleteSize = barSize - completeSize;

    write(ansiEscapes.cursorRestorePosition)

    write('█'.repeat(completeSize));
    write('░'.repeat(incompleteSize));
    write(` ${this.value} / ${this.total}`)

  }

  update(value: number) {
    this.value = value;

    this.render();
  }

  getTotalSize() {
    return this.total;
  }

  stop() {
    write(ansiEscapes.cursorShow)
    write(EOL)
  }

}
