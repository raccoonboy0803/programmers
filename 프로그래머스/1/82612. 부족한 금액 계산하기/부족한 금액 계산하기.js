function solution(price, money, count) {
  let totalMoney = 0;

  for (let i = 1; i <= count; i++) {
    totalMoney += price * i;
  }
  return money - totalMoney >= 0 ? 0 : totalMoney - money;
}