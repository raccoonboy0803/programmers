function solution(arr, k) {
  const set = new Set(arr);
  const filteredArr = [...set];
  let result = [];
  for (let i = 0; i < filteredArr.length; i++) {
    if (result.length === k) break;

    if (!result.includes(filteredArr[i])) {
      result.push(filteredArr[i]);
    }
  }

  if (result.length !== k) {
    for (let i = result.length; i < k; i++) {
      result.push(-1);
    }
  }
  return result;
}
