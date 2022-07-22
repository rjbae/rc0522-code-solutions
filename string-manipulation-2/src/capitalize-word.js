/* exported capitalizeWord */

// Lower case the word by using toLowerCase method and store that value into a variable called lowerCasedWord.
// Write a conditional checking to see if the lowerCasedWord is strictly equal to the string javascript.
// If it is true, then return the string JavaScript.
// Access the first character of the lowerCasedWord by using the charAt method, then attach the toUpperCase method to uppercase it.
// Store that value into a new variable called upperCasedWord.
// Return the upperCasedWord concatenated with the lowerCasedWord with the first index sliced.
function capitalizeWord(word) {
  var lowerCasedWord = word.toLowerCase();
  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  }
  var upperCasedWord = lowerCasedWord.charAt(0).toUpperCase();
  return upperCasedWord + lowerCasedWord.slice(1);
}
