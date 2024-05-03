function solution(my_string) {
  const LowerAlphabet = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97));
  const UpperAlphabet = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65));
  let result = Array(52).fill(0);
  my_string.split('').map((v) => {
    if (UpperAlphabet.includes(v)) {
      result[UpperAlphabet.indexOf(v)] += 1;
    } else {
      result[LowerAlphabet.indexOf(v) + 26] += 1;
    }
  });
  return result;
}