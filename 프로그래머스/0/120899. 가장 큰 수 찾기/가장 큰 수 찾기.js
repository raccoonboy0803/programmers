function solution(array) {
  const copyArr = [...array];
  const maxValue = copyArr.sort((a, b) => b - a)[0];
  const maxIndex = array.indexOf(maxValue);
  return [maxValue, maxIndex];
}