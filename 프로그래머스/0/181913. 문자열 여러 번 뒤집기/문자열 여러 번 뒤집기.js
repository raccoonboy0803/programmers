function solution(my_string, queries) {
  let copyArr = [...my_string];

  queries.map((queries) => {
    copyArr.splice(
      queries[0],
      queries[1] - queries[0] + 1,
      ...copyArr.slice(queries[0], queries[1] + 1).reverse()
    );
  });
  return copyArr.join('');
}