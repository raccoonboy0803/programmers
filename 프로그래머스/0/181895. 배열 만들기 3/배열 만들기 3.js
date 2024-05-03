function solution(arr, intervals) {
  const firstArr = arr.slice(intervals[0][0], intervals[0][1] + 1);
  const lastArr = arr.slice(intervals[1][0], intervals[1][1] + 1);
  return firstArr.concat(lastArr);
}