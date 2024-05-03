function solution(num_list) {
  let count = 0;
  num_list.map((v) => {
    for (let i = 1; i <= 5; i++) {
      if (v === 1) break;
      if (v % 2 === 0) {
        v /= 2;
        count++;
      } else {
        v = (v - 1) / 2;
        count++;
      }
    }
  });
  return count;
}