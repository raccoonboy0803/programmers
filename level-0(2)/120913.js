// 잘라서 배열로 저장하기
// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

const solution = (my_str, n) => {
  let result = [];
  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    result.push(my_str.slice(i * n, i * n + n));
  }

  return result;
};

console.log(solution('abc1Addfggg4556b', 6));
console.log('abc1Addfggg4556b'.slice(0, 6));
