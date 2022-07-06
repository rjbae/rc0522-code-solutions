const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    const error = { error: `id ${req.params.id} needs to be a positive integer` };
    res.status(400).json(error);
    return;
  } else if (!data.notes[req.params.id]) {
    const error = { error: `no note found with id ${req.params.id}` };
    res.status(404).json(error);
    return;
  }
  res.json(data.notes[req.params.id]);
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    const error = { error: 'content property not included in request body' };
    res.status(400).json(error);
    return;
  }
  req.body.id = data.nextId;
  data.notes[data.nextId] = req.body;
  data.nextId++;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      const error = { error: 'An unexpected error occurred. ' };
      res.status(500).json(error);
    }
    res.status(201).json(data.notes[data.nextId]);
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).json(error);
    return;
  } else if (!data.notes[req.params.id]) {
    const error = { error: `cannot find note with id ${req.body.id}` };
    res.status(404).json(error);
    return;
  }
  delete data.notes[req.params.id];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      const error = { error: 'An unexpected error occurred.' };
      res.status(500).json(error);
    }
    res.status(204).json();
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).json(error);
  } else if (!req.body.content) {
    const error = { error: 'content is a required field' };
    res.status(400).json(error);
  } else if (!data.notes[req.params.id]) {
    const error = { error: `cannot find note with id ${req.params.id}` };
    res.status(404).json(error);
  }
  req.body.id = parseInt(req.params.id);
  data.notes[req.params.id] = req.body;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      const error = { error: 'An unexpected error occurred.' };
      res.status(500).json(error);
    }
    res.status(200).json(data.notes[req.params.id]);
  });
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
