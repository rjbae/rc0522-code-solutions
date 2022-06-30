const fs = require('fs');
const copyFile = process.argv[2];
const newFile = process.argv[3];

fs.readFile(copyFile, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(newFile, data, err => {
    if (err) throw err;
  });
});
