function solution(strArr) {
  let resultArr = [];
  strArr.map((v) => {
    v.includes('ad') ? null : resultArr.push(v);
  });
  return resultArr;
}