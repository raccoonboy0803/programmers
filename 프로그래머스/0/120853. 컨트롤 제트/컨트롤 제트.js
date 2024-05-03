function solution(s) {
  let result = 0;
  const splitArr = s.split(' ').map((v) => parseInt(v));

  splitArr.map((value, index) => {
    isNaN(value) ? (result -= splitArr[index - 1]) : (result += value);
  });
  return result;
}