/* exported tail */

// Omit the first value of an array and return the rest of the values in a new array.
// Define a function named tail with one parameter of array.
// Assign an empty array to a new variable.
// Run a for loop with the intial expression being assigned to the value of 1.
// 1 is assigned to indicate where the loop should start, since indexing starts at 0,
// this means that the loop will being after the 1st value.
// After looping through the array, push the values into the empty array and return it.

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Omit the first value of an array and return the rest of the values in a new array.
// Define a function named tail with one parameter of array. - Completed
// Assign an empty array to a new variable. -Completed
// Run a for loop with the intial expression being assigned to the value of 1. - Completed
// 1 is assigned to indicate where the loop should start, since indexing starts at 0,
// this means that the loop will being after the 1st value.
// After looping through the array, push the values into the empty array and return it. - Completed
