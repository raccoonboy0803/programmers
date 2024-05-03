function solution(intStrs, k, s, l) {
  let result = [];
  intStrs.map((v, i) => {
    const sliceNum = Number(intStrs[i].slice(s, s + l));
    return sliceNum > k ? result.push(sliceNum) : null;
  });
  return result;
}