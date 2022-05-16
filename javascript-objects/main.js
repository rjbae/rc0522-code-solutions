var student = {
  firstName: 'Ryan',
  lastName: ' Bae',
  age: 25
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic Sport',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Rocky',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
