// 배열의 길이를 2의 거듭제곱으로 만들기
// 문제 설명
// 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000
// 1 ≤ arr의 원소 ≤ 1,000

const solution = (arr) => {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (arr.length > 2 ** i && arr.length < 2 ** (i + 1)) {
      answer = i + 1;
      let zeroNum = 2 ** answer - arr.length;
      for (let j = 0; j < zeroNum; j++) {
        arr.push(0);
      }
      break;
    } else if (arr.length === 2 ** i) {
      break;
    }
  }

  return arr;
};

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
