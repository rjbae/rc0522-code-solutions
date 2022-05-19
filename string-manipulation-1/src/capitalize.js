/* exported capitalize */

// Return the string value with the first letter uppercased and the rest in lowercase.
// Define a function named capitalize with a single parameter of word.
// To access the first character in a string we must use the charAt(0) method.
// To capitalize the first character we must attach another function method called
// toUpperCase().
// To access the rest of the string and make sure it's lowercased, we must use the
// slice method with the starting point of 1 which is after the first character.
// Attach the toLowerCase() method to lowercase the rest of the characters in the string.
// Return the value.

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Return the string value with the first letter uppercased and the rest in lowercase.
// Define a function named capitalize with a single parameter of word. - Completed
// To access the first character in a string we must use the charAt(0) method. - Completed
// To capitalize the first character we must attach another function method called
// toUpperCase(). - Completed
// To access the rest of the string and make sure it's lowercased, we must use the
// slice method with the starting point of 1 which is after the first character. - Completed
// Attach the toLowerCase() method to lowercase the rest of the characters in the string. - Completed
// Return the value. - Completed
