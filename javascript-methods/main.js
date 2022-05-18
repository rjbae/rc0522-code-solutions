var firstNumber = 23;
var secondNumber = 6;
var thirdNumber = 30;

var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('maximumValue:', maximumValue);

var heroes = ['Superman', 'Batman', 'Spiderman', 'Robin'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Alchemist',
    author: 'Paul Coelho'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Ryan Bae';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
