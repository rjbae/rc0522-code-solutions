const express = require('express');
const path = require('node:path');

const app = express();

const joinPath = path.join(__dirname, './public');
console.log(joinPath);

const expressStatic = express.static('./public');
app.use(expressStatic);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
