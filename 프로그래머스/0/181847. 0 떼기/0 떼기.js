function solution(n_str) {
  let array = n_str.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '0') {
      array[i] = '';
    } else {
      break;
    }
  }

  return array.join('');
}