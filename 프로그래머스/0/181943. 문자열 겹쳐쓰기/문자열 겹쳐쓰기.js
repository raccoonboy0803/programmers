function solution(my_string, overwrite_string, s) {
  const stringArr = my_string.split('');
  stringArr.splice(s, overwrite_string.length, overwrite_string);
  return stringArr.join('');
}