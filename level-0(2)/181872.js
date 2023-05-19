// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
// 문제 설명
// 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 5 ≤ myString ≤ 20
// 1 ≤ pat ≤ 5
// pat은 반드시 myString의 부분 문자열로 주어집니다.
// myString과 pat에 등장하는 알파벳은 대문자와 소문자를 구분합니다.

const solution = (myString, pat) => {
  const result = [];
  myString.split('').forEach((a, i) => {
    const curStr = myString.slice(0, i + 1);
    if (curStr.endsWith(pat)) {
      result.push(curStr);
    }
  });
  return result.sort((a, b) => b.length - a.length)[0];
};

console.log(solution('AbCdEFG', 'dE'));
// console.log('AAAAaaaa'.split('AA'));
console.log(solution('AAAAaaaa', 'a'));
