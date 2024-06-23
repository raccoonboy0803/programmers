function solution(A, B) {
  let answer = 0;

  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    const mutiply = sortA[i] * sortB[i];
    answer += mutiply;
  }

  return answer;
}