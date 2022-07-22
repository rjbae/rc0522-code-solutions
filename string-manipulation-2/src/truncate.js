/* exported truncate */
// Slice the string starting at the first index, and ending at the length of the string.
// Concatenate that value with a string of an elipsis.
// Store that value into a variable called newString.
// Return the newString.
function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
