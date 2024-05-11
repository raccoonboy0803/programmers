function solution(dots) {
  let result = [];
  const inclination1 =
    Math.abs(dots[1][1] - dots[0][1]) / Math.abs(dots[1][0] - dots[0][0]);
  const inclination2 =
    Math.abs(dots[3][1] - dots[2][1]) / Math.abs(dots[3][0] - dots[2][0]);
  result.push([inclination1, inclination2]);

  const inclination3 =
    Math.abs(dots[2][1] - dots[0][1]) / Math.abs(dots[2][0] - dots[0][0]);
  const inclination4 =
    Math.abs(dots[3][1] - dots[1][1]) / Math.abs(dots[3][0] - dots[1][0]);
  result.push([inclination3, inclination4]);

  const inclination5 =
    Math.abs(dots[3][1] - dots[0][1]) / Math.abs(dots[3][0] - dots[0][0]);
  const inclination6 =
    Math.abs(dots[2][1] - dots[1][1]) / Math.abs(dots[2][0] - dots[1][0]);
  result.push([inclination5, inclination6]);

  let isSame = false;
  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === result[i][1]) {
      isSame = true;
      break;
    }
  }
  return isSame ? 1 : 0;
}