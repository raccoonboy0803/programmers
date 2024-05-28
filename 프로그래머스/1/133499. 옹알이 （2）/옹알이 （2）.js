function solution(babbling) {
  const pronunciation = ['aya', 'ye', 'woo', 'ma'];
  let result = 0;

  for (let i = 0; i < babbling.length; i++) {
    let currentString = babbling[i];
    let prevPronunciation = '';

    let found = true;
    while (found) {
      found = false;
      for (let j = 0; j < pronunciation.length; j++) {
        if (currentString.startsWith(pronunciation[j])) {
          if (prevPronunciation === pronunciation[j]) {
            found = false;
            break;
          }

          currentString = currentString.slice(pronunciation[j].length);
          prevPronunciation = pronunciation[j];
          found = true;
          break;
        }
      }
    }

    if (currentString === '') {
      result++;
    }
  }

  return result;
}