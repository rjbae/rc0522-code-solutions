/* exported swapFront */

function swapFront(list) {
  const firstValue = list;
  if (list.next !== null) {
    const secondValue = list.next;
    const thirdValue = list.next.next;
    firstValue.next = thirdValue;
    secondValue.next = firstValue;
    return secondValue;
  }
  return firstValue;
}
