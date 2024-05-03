function solution(binomial) {
  const arr = binomial.split(' ').map((v) => {
    return isNaN(Number(v)) ? v : Number(v);
  });

  return arr[1] === '+'
    ? arr[0] + arr[2]
    : arr[1] === '-'
    ? arr[0] - arr[2]
    : arr[0] * arr[2];
}