function solution(my_string) {
  const regex = /[a-zA-Z]/g;
  let result = [];
  my_string
    .replace(regex, ' ')
    .split(' ')
    .map((v) => {
      if (!isNaN(parseInt(v))) {
        result.push(parseInt(v));
      }
    });
  return result.reduce((sum, val) => (sum += val), 0);
}