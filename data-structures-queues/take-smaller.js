/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const frontValue = queue.dequeue();
  if (queue.peek() === undefined) return frontValue;
  if (queue.peek() > frontValue) {
    const nextValue = queue.dequeue();
    queue.enqueue(nextValue);
    return frontValue;
  }
  queue.enqueue(frontValue);
  return queue.dequeue();
}
