/* exported numVowels */
function numVowels(string) {
  var lowerCaseString = string.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' || lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
