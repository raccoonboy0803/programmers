function solution(age) {
  const now = new Date();
  const year = now.getFullYear();
  return year - age - 1;
}