/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var splitString = string.split('');
  var firstCharIndex = string[firstIndex];
  splitString[firstIndex] = splitString[secondIndex];
  splitString[secondIndex] = firstCharIndex;
  var swapChars = splitString.join('');
  return swapChars;
}
