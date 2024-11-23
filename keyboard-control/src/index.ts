import readline from "node:readline";
//readline 模块的 emitKeypressEvents 可以让输入流处理键盘事件。
readline.emitKeypressEvents(process.stdin);
//stdin.setRawMode(true) 是禁用掉内置的一些键盘事件处理，比如 ctrl + c 退出进程
process.stdin.setRawMode(true);

process.stdin.on('keypress',(str,key)=>{
  if(key.sequence==='\u0003'){
    process.exit();
  }
     console.log(str,key);
     
})