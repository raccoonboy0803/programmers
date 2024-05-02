function solution(cipher, code) {
  let result = [];
  cipher.split('').map((val, index) => {
    (index + 1) % code === 0 ? result.push(val) : null;
  });
  return result.join('');
}