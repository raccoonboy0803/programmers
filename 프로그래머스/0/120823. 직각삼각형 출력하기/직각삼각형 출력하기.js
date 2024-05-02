const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  let logStr = '';
  for (let i = 0; i < Number(input[0]); i++) {
    for (let j = 0; j <= i; j++) {
      logStr += '*';
    }
    logStr += '\n';
  }
  console.log(logStr);
});