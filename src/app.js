const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());


app.use(router);

module.exports = app;

