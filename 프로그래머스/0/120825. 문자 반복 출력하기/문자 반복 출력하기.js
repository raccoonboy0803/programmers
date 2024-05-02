function solution(my_string, n) {
  let result = [];
  const array = my_string.split('');
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= n; j++) {
      result.push(array[i]);
    }
  }
  return result.join('');
}