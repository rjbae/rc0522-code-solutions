const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const error = { error: 'An unexpected error has occurred.' };
  const sql = `
  select *
  from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    }).catch(err => {
      console.error(err);
      res.status(500).json(error);
    });
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  if (!grade.name || !grade.course || !grade.score) {
    const error = { error: 'Invalid inputs' };
    res.status(400).json(error);
    return;
  }
  if (grade.score < 0 || grade.score > 100) {
    const error = { error: 'Score must be a number between 0 and 100' };
    res.status(400).json(error);
    return;
  }
  const sql = `
      insert into grades (name, course, score)
            values ($1, $2, $3)
        returning *
  `;

  db.query(sql, [grade.name, grade.course, grade.score])
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    }).catch(err => {
      const error = { error: 'An unexpected error has occurred.' };
      console.error(err);
      res.status(500).json(error);
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const grade = req.body;
  if (!Number.isInteger(id) || id < 1) {
    const error = { error: 'ID must be a positive integer value. ' };
    res.status(400).json(error);
    return;
  }
  if (!grade.name || !grade.course || !grade.score) {
    const error = { error: 'Invalid inputs.' };
    res.status(400).json(error);
    return;
  }
  if (grade.score < 0 || grade.score > 100) {
    const error = { error: 'Score must be a number between 0 and 100. ' };
    res.status(400).json(error);
    return;
  }
  const sql = `
    update "grades"
       set "name" = $2,
          "course" = $3,
          "score" = $4
    where "gradeId" = $1
    returning *
  `;

  db.query(sql, [id, grade.name, grade.course, grade.score])
    .then(result => {
      if (!result.rows[0]) {
        const error = { error: `Cannot find grade with given ID, ${id}.` };
        res.status(404).json(error);
        return;
      }
      res.status(200).json(grade.name, grade.course, grade.score);
    })
    .catch(err => {
      console.error(err);
      const error = { error: 'An unexpected error has occurred.' };
      res.status(500).json(error);
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!Number.isInteger(id) || id < 1) {
    const error = { error: 'ID must be a positive integer value. ' };
    res.status(400).json(error);
    return;
  }
  const sql = `
    delete from "grades"
          where "gradeId" = $1
      returning *
  `;
  db.query(sql, [id])
    .then(result => {
      if (!result.rows[0]) {
        const error = { error: `Cannot find grade with given ID, ${id}.` };
        res.status(400).json(error);
      }
      res.status(204);
    }).catch(err => {
      const error = { error: 'An unexpected error has occurred. ' };
      console.error(err);
      res.status(500).json(error);
    });
});
app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
