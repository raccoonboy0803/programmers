function solution(array, n) {
  let result = [];

  array.map((v) => {
    result.push(v - n);
  });
  const minInterval = Math.min(...result.map((v) => Math.abs(v)));
  return array
    .filter((v) => Math.abs(v - n) === minInterval)
    .sort((a, b) => a - b)[0];
}