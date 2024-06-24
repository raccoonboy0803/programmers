function solution(s) {
  const answer = [];
  const lowerCase = s.replace(/[A-Z]/g, (char) => char.toLowerCase());
  let splitS = lowerCase.split(' ');

  for (i = 0; i < splitS.length; i++) {
    if (splitS[i] === '') {
      answer.push(splitS[i]);
      continue;
    }

    answer.push(splitS[i][0].toUpperCase().concat(splitS[i].slice(1)));
  }

  return answer.join(' ');
}