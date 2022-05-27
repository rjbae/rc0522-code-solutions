/* exported includes */
// Trying to see if the presence of value is in the array.
// Define a function named includes with two parameters array and value.
// Loop through the array.
// Create a conditional if statement that checks if at any point in the array
// index is strictly equal to the value.
// Return true if it is, and return false if it isn't.
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
