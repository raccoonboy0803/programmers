// 카운트 다운
// 문제 설명
// 정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ end ≤ start ≤ 50
const solution = (start, end) => {
  let result = [];
  for (let i = start; i >= end; i--) {
    result.push(i);
  }
  return result;
};
