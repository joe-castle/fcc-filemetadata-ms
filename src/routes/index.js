'use strict';

const upload = require('multer')();
const express = require('express');
const app = express();

app.use('/', express.static(`${__dirname}/../public`));

app.post('/analyse', upload.single('file'), (req, res) => {
  if (req.file.size) {
    res.json(req.file.size);
  } else {
    res.status(400).json('Error');
  }
});

module.exports = app;
