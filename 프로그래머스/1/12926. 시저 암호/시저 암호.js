function solution(s, n) {
  const lowerAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  const upperAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const blankSplitArr = s.split(' ');

  for (let i = 0; i < blankSplitArr.length; i++) {
    const item = blankSplitArr[i];
    const chars = item.split('');

    for (let j = 0; j < chars.length; j++) {
      const char = chars[j];
      if (char.toUpperCase() === char) {
        const upperIndex = (upperAlphabet.indexOf(char) + n) % 26;
        chars[j] = upperAlphabet[upperIndex];
      } else {
        const lowerIndex = (lowerAlphabet.indexOf(char) + n) % 26;
        chars[j] = lowerAlphabet[lowerIndex];
      }
    }
    blankSplitArr[i] = chars.join('');
  }

  return blankSplitArr.join(' ');
}