/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray[i] = 'even';
    } else {
      newArray[i] = 'odd';
    }
  }
  return newArray;
}
