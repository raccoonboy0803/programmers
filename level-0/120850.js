// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

const solution = (my_string) => {
  let str = my_string
    .split('')
    .map((a) => Number(a))
    .filter((b) => isNaN(b) === false)
    .sort((a, b) => a - b);
  return str;
};
console.log(solution('hi12392'));
