function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((sum, val) => (sum += val), 0);
  } else {
    return num_list.reduce((mul, val) => (mul *= val), 1);
  }
}