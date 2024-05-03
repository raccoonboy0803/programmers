function solution(my_string, m, c) {
  let result = [];
  for (let i = c; i <= my_string.length; i += m) {
    result.push(my_string[i - 1]);
  }
  return result.join('');
}