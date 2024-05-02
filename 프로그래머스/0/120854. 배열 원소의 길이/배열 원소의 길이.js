function solution(strlist) {
  let result = [];
  strlist.map((v) => {
    result.push(v.length);
  });
  return result;
}