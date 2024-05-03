function solution(my_string, s, e) {
  const arr = [...my_string];
  const reverseSection = arr.slice(s, e + 1).reverse();

  arr.splice(s, e - s + 1, ...reverseSection);
  return arr.join('');
}