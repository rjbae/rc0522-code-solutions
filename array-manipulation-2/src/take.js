/* exported take */
// Trying to find the find the first count elements of an array.
// Define a function named take with two parameters array and count.
// Assign an empty array to a new variable.
// Create an if statement with the expression of checking if the length of the array
// is greater than 0.
// Loop through the array.
// Push the value into the empty array.
// Return the array.
function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
