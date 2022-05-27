/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  newArray = array.slice(0, -count);
  return newArray;
}
