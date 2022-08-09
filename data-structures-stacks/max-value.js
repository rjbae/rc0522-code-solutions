/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) return -Infinity;
  let highestValue = -Infinity;
  while (stack.peek() !== undefined) {
    const number = stack.pop();
    if (number > highestValue) {
      highestValue = number;
    }
  }
  return highestValue;
}
