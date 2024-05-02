function solution(num_list) {
  let oddArr = [];
  let evenArr = [];

  num_list.map((v) => {
    v % 2 === 0 ? evenArr.push(v) : oddArr.push(v);
  });
  return Number(evenArr.join('')) + Number(oddArr.join(''));
}