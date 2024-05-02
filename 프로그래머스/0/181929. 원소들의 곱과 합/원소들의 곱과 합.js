function solution(num_list) {
  const mulNum = num_list.reduce((mul, v) => (mul *= v), 1);
  const sumNum = num_list.reduce((sum, v) => (sum += v), 0) ** 2;
  return mulNum < sumNum ? 1 : 0;
}