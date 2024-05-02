function solution(n) {
  const array = [...n.toString()];
  const toNumberArray = array.map((val) => Number(val));

  return toNumberArray.reduce((sum, val) => (sum += val), 0);
}