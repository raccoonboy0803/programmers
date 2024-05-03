function solution(n, k) {
  const yangPrice = 12000 * n;
  const drinkPrice = 2000 * k;
  const discount = 2000 * Math.floor(n / 10);

  return yangPrice + drinkPrice - discount;
}