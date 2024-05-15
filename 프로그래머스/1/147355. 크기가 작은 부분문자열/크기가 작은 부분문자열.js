function solution(t, p) {
  let sliceArr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    sliceArr.push(t.slice(i, i + p.length));
  }
  console.log(sliceArr);
  return sliceArr.filter((item) => Number(item) <= Number(p)).length;
}