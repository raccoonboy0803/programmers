function solution(q, r, code) {
  let result = [];
  for (let i = 0; i < code.length; i += q) {
    result.push(code.split('').slice(i, i + q)[r]);
  }
  return result.join('');
}
