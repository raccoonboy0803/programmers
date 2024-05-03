function solution(arr, queries) {
  let resultArr = Array.from(arr);
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      resultArr[j] += 1;
    }
  }

  return resultArr;
}