function solution(my_string, alp) {
  return my_string
    .split('')
    .map((value) => {
      return value === alp ? (value = value.toUpperCase()) : value;
    })
    .join('');
}