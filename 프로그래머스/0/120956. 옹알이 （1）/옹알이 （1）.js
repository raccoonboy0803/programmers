function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < words.length; j++) {
      babble = babble.split(words[j]).join(' ');
    }

    if (babble.split(' ').join('').length === 0) {
      count += 1;
    }
  }

  return count;
}