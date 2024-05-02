function solution(my_string) {
  let result = [];
  my_string.split('').map((value, index) => {
    if (value === my_string[index].toUpperCase()) {
      result.push(my_string[index].toLowerCase());
    } else {
      result.push(my_string[index].toUpperCase());
    }
  });
  return result.join('');
}