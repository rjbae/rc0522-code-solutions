/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (array.length < count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
