const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/index')

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.use(router);

module.exports = app;

