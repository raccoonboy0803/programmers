function solution(my_string) {
  let result = [];
  my_string.split(' ').map((value) => {
    if (value !== '') result.push(value);
  });
  return result;
}