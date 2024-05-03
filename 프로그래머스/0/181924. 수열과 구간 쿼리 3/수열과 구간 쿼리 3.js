function solution(arr, queries) {
  queries.map((v) => {
    const IValue = arr[v[0]];
    const JValue = arr[v[1]];
    arr.splice(v[0], 1, JValue);
    arr.splice(v[1], 1, IValue);
  });
  return arr;
}