/**
 * 用来比较提醒未cherry-pick的分支
 */

const exec = require('child_process').exec; //异步子进程
const execSync = require('child_process').execSync; //同步子进程
const fs = require('fs'); //文件读取模块

console.info([
"",    
" ██████╗ ██╗████████╗ ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗",
"██╔════╝ ██║╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝",
"██║  ███╗██║   ██║   ██║     ███████║█████╗  ██║     █████╔╝ ",
"██║   ██║██║   ██║   ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ",
"╚██████╔╝██║   ██║   ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗",
" ╚═════╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝"
].join('\n'));

// 当前脚本的工作目录的路径
var cwd = '"' + process.cwd() + '"' // process-node全局模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载。它是一个EventEmitter对象的实例。process.cwd()表示返回运行当前脚本的工作目录的路径

let authourName = execSync('git show -s --format=%cn').toString().trim(); //姓名
let email = execSync('git show -s --format=%ce').toString().trim(); //邮箱
let date = new Date(execSync('git show -s --format=%cd').toString()); //日期
let message = execSync('git show -s --format=%s').toString().trim(); //说明
let versionStr = `git:\n作者:${authourName}<${email}>\n日期:${date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()}\n说明:${message}\n${new Array(80).join('*')}\n`;
console.log("开始比较最近的分支：", versionStr)