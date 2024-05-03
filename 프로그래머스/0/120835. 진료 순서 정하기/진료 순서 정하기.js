function solution(emergency) {
  const sortArr = [...emergency].sort((a, b) => b - a);
  let result = [];

  emergency.map((v) => {
    result.push(sortArr.indexOf(v) + 1);
  });
  return result;
}