function solution(arr, query) {
  let copyArr = [...arr];
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      copyArr.splice(query[i] + 1);
    } else {
      copyArr.splice(0, query[i]);
    }
  }

  return copyArr;
}