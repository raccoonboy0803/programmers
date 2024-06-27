function solution(brown, yellow) {
  function factorize(num) {
    let pairs = [];
    let sqrt = Math.sqrt(num);

    for (let i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        let pair = [num / i, i];
        pairs.push(pair);
      }
    }

    return pairs;
  }

  let answer = [];
  const area = brown + yellow;
  let pairs = factorize(area);

  for (let i = 0; i < pairs.length; i++) {
    const width = pairs[i][0];
    const height = pairs[i][1];

    if ((width - 2) * (height - 2) === yellow) {
      answer.push(width);
      answer.push(height);
      break;
    }
  }

  return answer;
}