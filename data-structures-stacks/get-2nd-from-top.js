/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return;
  const removeTop = stack.pop();
  const secondValue = stack.peek();
  stack.push(removeTop);
  return secondValue;
}
