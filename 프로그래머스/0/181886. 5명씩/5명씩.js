function solution(names) {
  let resultArr = [];
  for (let i = 0; i < names.length; i += 5) {
    resultArr.push(names[i]);
  }
  return resultArr;
}