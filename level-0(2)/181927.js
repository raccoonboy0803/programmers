// 마지막 두 원소
// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
const solution = (num_list) => {
  const finalIndex = num_list.length - 1;
  const lastitem =
    num_list[finalIndex] > num_list[finalIndex - 1]
      ? num_list[finalIndex] - num_list[finalIndex - 1]
      : num_list[finalIndex] * 2;
  return num_list.concat(lastitem);
};
