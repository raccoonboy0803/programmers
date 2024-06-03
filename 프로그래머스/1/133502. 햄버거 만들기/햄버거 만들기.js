function solution(ingredient) {
  const stack = [];
  let count = 0;

  const burger = [1, 2, 3, 1];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      if (stack.slice(-4).join('') === burger.join('')) {
        stack.splice(-4);
        count++;
      }
    }
  }

  return count;
}
