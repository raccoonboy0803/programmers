function solution(myStr) {
  const splitArr = ['a', 'b', 'c'];
  let result = myStr;
  splitArr.map((value) => {
    result = result.split(value).join('_');
  });
  const answer = result.split('_').filter((v) => v.length !== 0);
  return answer.length !== 0 ? answer : ['EMPTY'];
}