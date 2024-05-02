function solution(rny_string) {
  return rny_string
    .split('')
    .map((val) => {
      return val === 'm' ? (val = 'rn') : val;
    })
    .join('');
}