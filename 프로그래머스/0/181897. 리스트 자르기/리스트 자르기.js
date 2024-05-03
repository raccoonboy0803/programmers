function solution(n, slicer, num_list) {
  let numFourResult = [];
  switch (n) {
    case 1:
      return num_list.slice(0, slicer[1] + 1);
    case 2:
      return num_list.slice(slicer[0], num_list.length);
    case 3:
      return num_list.slice(slicer[0], slicer[1] + 1);
    case 4:
      num_list.slice(slicer[0], slicer[1] + 1).map((v, i) => {
        if (i % slicer[2] === 0) {
          numFourResult.push(v);
        }
      });
      return numFourResult;
  }
}