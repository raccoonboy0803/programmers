function solution(code) {
  let result = [];
  let mode = '0';
  let codeArr = code.split('');
  for (let i = 0; i < code.length; i++) {
    if (mode === '0') {
      if (codeArr[i] !== '1' && i % 2 === 0) {
        result.push(codeArr[i]);
      } else if (codeArr[i] === '1') {
        mode = '1';
        continue;
      }
    } else if (mode === '1') {
      if (codeArr[i] !== '1' && i % 2 !== 0) {
        result.push(codeArr[i]);
      } else if (codeArr[i] === '1') {
        mode = '0';
        continue;
      }
    }
  }
  return result.length === 0 ? 'EMPTY' : result.join('');
}