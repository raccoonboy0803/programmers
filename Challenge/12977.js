//소수 만들기

const solution = (nums) => {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        devide(nums[i] + nums[j] + nums[k]) === 2 && answer++;
        //약수개수가 2인 수는 소수!!
      }
    }
  }
  return answer;
};
const devide = (num) => {
  //해당 숫자의 총 약수개수 구하는 함수
  let count = 0;
  for (let i = 1; i <= num; i++) {
    num % i === 0 && count++;
  }
  return count;
};
