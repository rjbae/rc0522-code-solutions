/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCaseString = string.toLowerCase();
  var stringSplit = lowerCaseString.split(' ');
  for (var i = 0; i < stringSplit.length; i++) {
    stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].substring(1);
  }
  return stringSplit.join(' ');
}
