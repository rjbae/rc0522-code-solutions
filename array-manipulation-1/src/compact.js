/* exported compact */

// Removing falsy values from each array and assigning the result to a new array.
// Falsy values are: false, 0, -0, NaN, null, undefined, ''
// Define a function named compact with one parameter of array
// Assign an empty array to a new variable
// Run a for loop checking to see if each value is falsy or not
// If the value of the array does not contain a falsy value then push it into the empty array.
// Return the new array.

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Removing falsy values from each array and assigning the result to a new array
// Falsy values are: false, 0, -0, NaN, null, undefined, ''
// Define a function named compact with one parameter of array - Completed
// Assign an empty array to a new variable - Completed
// Run a for loop checking to see if each value is falsy or not - Completed
// If the value of the array does not contain a falsy value then push it into the empty array - Completed
// Return the new array - Completed
