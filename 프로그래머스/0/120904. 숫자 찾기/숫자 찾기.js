function solution(num, k) {
  const findIndex = num.toString().indexOf(k);
  return findIndex !== -1 ? findIndex + 1 : -1;
}