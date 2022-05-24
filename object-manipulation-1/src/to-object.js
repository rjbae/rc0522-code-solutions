/* exported toObject */

// Returning  the value of a key and it's value and passing it into an object.
// Define a function named toObject with a parameter of keyValuePair.
// Assign an empty string to pass in the property value and assign it to a new variable.
// Assign an empty string to pass in the property name and assign it to a new variable.
// Assign an empty object literal to a new variable.
// Assign the keyValuePair parameter with the index value of 0 and assign it to the variable
// that represents the property name.
// Assign the keyValuePair with the index value of 1 and assign it to the variabel that
// represents the property value.
// Assign key to the empty object by using bracket notation and assign it to the value.
// Return the result.

function toObject(keyValuePair) {
  var value = '';
  var key = '';
  var object = {};
  key = keyValuePair[0];
  value = keyValuePair[1];
  object[key] = value;
  return object;
}
