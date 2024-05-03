function solution(myString, pat) {
  let longestStr = '';
  for (let i = 0; i < myString.length; i++) {
    let sliceStr = myString.slice(0, i + 1).toString();
    if (sliceStr.endsWith(pat)) longestStr = sliceStr;
  }
  return longestStr;
}