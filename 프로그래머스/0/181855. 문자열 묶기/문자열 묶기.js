function solution(strArr) {
  let lengthArr = new Array(30).fill(0);

  strArr.map((value) => {
    lengthArr[value.length - 1]++;
  });  
  return Math.max(...lengthArr);
}