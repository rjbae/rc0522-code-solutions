/* exported ransomCase */

// Returning a string with every-other character uppercased.
// Uppercase the string by using the toUpperCase method and assign that to a new variable called upperCaseString.
// Assign an empty string to a new variable called newString. This will take in the value of the new string.
// Loop through the length of the upperCaseString.
// Write a conditional checking to see if the character index is even.
// If it is even then access the character the loop is currently at by using the charAt method and use the toLowerCase method to lowercase it.
// Concatenate that with the value of the newString value and assign it back to newString.
// Return the newString.
function ransomCase(string) {
  var upperCaseString = string.toUpperCase();
  var newString = '';
  for (var i = 0; i < upperCaseString.length; i++) {
    if (i % 2 === 0) {
      newString += upperCaseString.charAt(i).toLowerCase();
    } else {
      newString += upperCaseString.charAt(i);
    }
  }
  return newString;
}
