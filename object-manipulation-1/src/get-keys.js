/* exported getKeys */

// Obtain an object's property keys and assign it to a new array.
// Define a function named getKeys with one parameter of object.
// Assign an empty array literal to a new variable.
// Use a for in loop to iterate through the object's properties.
// Push the value of the object's properties to the variable with the empty array.
// Return the value.

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
