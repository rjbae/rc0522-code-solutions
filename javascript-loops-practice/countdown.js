/* exported countdown */
function countdown(number) {
  var numberArray = [];
  for (var i = number; i >= 0; i--) {
    numberArray.push(number--);
  }
  return numberArray;
}
