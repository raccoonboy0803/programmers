function solution(food) {
  let result = [0];
  for (let i = food.length - 1; i >= 1; i--) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      result.unshift(i);
      result.push(i);
    }
  }
  return result.join('');
}