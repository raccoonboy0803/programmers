function solution(date1, date2) {
  const firstDate = new Date(date1);
  const lastDate = new Date(date2);
  return firstDate >= lastDate ? 0 : 1;
}