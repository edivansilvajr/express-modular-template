const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/error.middleware');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);

app.use(errorMiddleware);

module.exports = app;

