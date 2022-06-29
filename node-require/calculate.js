const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log('Add Result:', add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log('Subtract Result:', subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'times') {
  console.log('Multiply Result:', multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log('Divide Result:', divide(Number(process.argv[2]), Number(process.argv[4])));
} else {
  console.log('Invalid Operation');
}
