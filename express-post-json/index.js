const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.status(201).send(grade);
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
