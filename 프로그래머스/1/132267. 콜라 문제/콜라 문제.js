function solution(a, b, n) {
  let result = 0;
  let possess = n;

  while (possess >= a) {
    let newBottle = Math.floor(possess / a) * b;
    result += newBottle;
    possess = newBottle + (possess % a);
  }

  return result;
}