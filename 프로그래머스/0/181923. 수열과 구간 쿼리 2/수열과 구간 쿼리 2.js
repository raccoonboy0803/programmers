function solution(arr, queries) {
  let result = [];
  queries.map((item) => {
    let filterArr = arr
      .slice(item[0], item[1] + 1)
      .filter((v) => v > item[2])
      .sort((a, b) => a - b);
    if (filterArr.length !== 0) {
      result.push(filterArr[0]);
    } else {
      result.push(-1);
    }
  });
  return result;
}