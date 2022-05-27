/* exported drop */

// Returning a new array containing the elements after the first coutn elemments.
// Define a function named drop with two parameters array and count.
// Assign and empty array to a new variable.
// Use the slice method on the array with the arguments of count and the length of
// the array and update the value of the variable.
// Return the value.
function drop(array, count) {
  var newArray = [];
  newArray = array.slice(count, array.length);
  return newArray;
}
