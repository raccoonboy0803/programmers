function solution(s, skip, index) {
  const alphabetArray = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  for (let i = 0; i < skip.length; i++) {
    alphabetArray.splice(alphabetArray.indexOf(skip[i]), 1);
  }
  let result = [];

  for (let i = 0; i < s.length; i++) {
    const findIndex = alphabetArray.indexOf(s[i]);
    result.push(alphabetArray[(findIndex + index) % alphabetArray.length]);
  }
  return result.join('');
}