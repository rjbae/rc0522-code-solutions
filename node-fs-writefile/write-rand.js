const fs = require('fs');
const number = Math.random();
const randomNum = number.toString() + '\n';

fs.writeFile('random.txt', randomNum, err => {
  if (err) throw err;
});
