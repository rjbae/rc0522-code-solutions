/* exported getLength */

function getLength(list) {
  let length = 0;
  while (list !== null) {
    length++;
    list = list.next;
  }
  return length;
}
