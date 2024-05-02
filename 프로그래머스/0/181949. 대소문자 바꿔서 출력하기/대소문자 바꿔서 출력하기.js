const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  const lowerCaseArr = str.toLowerCase().split('');
  let result = str.split('');
  result.map((v, i) => {
    lowerCaseArr[i] === result[i]
      ? (result[i] = v.toUpperCase())
      : (result[i] = v.toLowerCase());
  });
  console.log(result.join(''));
});