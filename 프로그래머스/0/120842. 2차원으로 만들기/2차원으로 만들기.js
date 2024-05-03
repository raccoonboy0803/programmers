function solution(num_list, n) {
  const result = Array.from(Array(num_list.length / n), () => new Array(n));
  let index = 0;

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = num_list[index];
      index++;
    }
  }
  return result;
}