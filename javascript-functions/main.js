function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(3);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hello ' + name;
  return greeting;
}

var greetResult = greet('Ryan');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(4, 5);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameResult = getFirstName({ firstName: 'Ryan', lastName: 'Bae' });
console.log('firstNameResult:', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var lastElementResult = getLastElement(['Basketball', 'Football', 'Soccer', 'Baseball']);
console.log('getLastElementResult:', lastElementResult);
