const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const booksRouter = require('./src/routes/books');
const db = require('./src/middlewares/sequelize');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(db);

app.use('/books', booksRouter);

app.use((err, _, res) => errorHandler(err, res));

module.exports = app;
