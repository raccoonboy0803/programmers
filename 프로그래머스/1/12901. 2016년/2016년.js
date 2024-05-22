function solution(a, b) {
  const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = new Date(2016, a - 1, b).getDay();

  return dayArr[day];
}