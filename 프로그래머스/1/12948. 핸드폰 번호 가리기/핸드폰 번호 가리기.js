function solution(phone_number) {
  const last4parts = phone_number.slice(-4);
  const startCount = phone_number.slice(0, phone_number.length - 4).length;
  return '*'.repeat(startCount) + last4parts;
}