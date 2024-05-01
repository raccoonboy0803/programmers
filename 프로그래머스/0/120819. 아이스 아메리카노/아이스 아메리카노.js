function solution(money) {
  let cups = Math.floor(money / 5500);
  let result = money - cups * 5500;
  return [cups, result];
}
