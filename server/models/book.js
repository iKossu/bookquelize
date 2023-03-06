module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: DataTypes.STRING,
    timestamp: DataTypes.STRING,
  }, {
    tableName: 'books',
    timestamps: false,
  });
  Book.removeAttribute('id');
  return Book;
};
