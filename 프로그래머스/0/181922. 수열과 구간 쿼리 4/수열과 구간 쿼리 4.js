function solution(arr, queries) {
  queries.map((qValue, qIndex) => {
    for (let i = qValue[0]; i <= qValue[1]; i++) {
      if (i % qValue[2] === 0) {
        arr[i] += 1;
      }
    }
  });
  return arr;
}