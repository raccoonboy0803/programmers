function solution(arr) {
  const firstIndex = arr.indexOf(2);
  const lastIndex = arr.lastIndexOf(2);
  const answerArr = arr.slice(firstIndex, lastIndex + 1);
  return answerArr.length !== 0 ? answerArr : [-1];
}