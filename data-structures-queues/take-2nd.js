/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) return firstValue;
  const secondValue = queue.dequeue();
  queue.enqueue(firstValue);
  return secondValue;
}
