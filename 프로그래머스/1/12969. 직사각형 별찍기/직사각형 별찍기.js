process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let starStr = [];
  for (let i = 0; i < b; i++) {
    starStr = [];
    for (let j = 0; j < a; j++) {
      starStr.push('*');
    }
    console.log(starStr.join(''));
  }
});