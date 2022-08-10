/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let count = 0;
  while (count < index) {
    const frontValue = queue.dequeue();
    queue.enqueue(frontValue);
    count++;
  }
  return queue.dequeue();
}
