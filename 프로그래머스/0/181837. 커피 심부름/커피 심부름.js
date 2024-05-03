function solution(order) {
  let americanoCount = 0;
  let cafelatteCount = 0;
  order.map((v) => {
    if (v.includes('americano')) {
      americanoCount++;
    } else if (v.includes('cafelatte')) {
      cafelatteCount++;
    } else {
      americanoCount++;
    }
  });
  return americanoCount * 4500 + cafelatteCount * 5000;
}