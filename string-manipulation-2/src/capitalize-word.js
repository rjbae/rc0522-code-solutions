/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCasedWord = word.toLowerCase();
  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  }
  var upperCasedWord = lowerCasedWord.charAt(0).toUpperCase();
  return upperCasedWord + lowerCasedWord.slice(1);
}
