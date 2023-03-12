const { Sequelize, DataTypes } = require('sequelize');
const Book = require('../models/book');

const db = (req, _, next) => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/books.db',
    logQueryParameters: true,
    benchmark: true,
  });
  const modelDefiners = [Book];
  modelDefiners.forEach((modelDefiner) => {
    modelDefiner(sequelize, DataTypes);
  });

  req.db = sequelize;
  next();
};

module.exports = db;
