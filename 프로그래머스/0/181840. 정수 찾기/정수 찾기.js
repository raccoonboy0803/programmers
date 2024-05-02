function solution(num_list, n) {
  let result = 0;
  num_list.map((v) => {
    v === n ? (result = 1) : null;
  });
  return result;
}