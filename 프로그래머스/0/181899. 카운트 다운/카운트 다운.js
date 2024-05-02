function solution(start, end_num) {
  let resultArr = [];
  for (let i = start; i >= end_num; i--) {
    resultArr.push(i);
  }
  return resultArr;
}