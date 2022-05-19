/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else if (string.length !== 0) {
    return string.split(' ');
  }
}
