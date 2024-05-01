function solution(array, height) {
  let count = 0;
  array.map((value) => {
    if (value > height) {
      count++;
    }
  });
  return count;
}