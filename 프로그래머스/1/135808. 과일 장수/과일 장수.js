function solution(k, m, score) {
  let result = 0;
  const descScore = score.sort((a, b) => b - a);

  for (let i = 0; i < Math.floor(descScore.length / m); i++) {
    result += Math.min(...descScore.slice(i * m, i * m + m)) * m;
  }

  return result;
}