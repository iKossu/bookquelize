module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: DataTypes.STRING,
    timestamp: {
      type: DataTypes.STRING,
      defaultValue: `${new Date()}`,
    },
  }, {
    tableName: 'books',
    timestamps: false,
  });
  Book.removeAttribute('id');
  return Book;
};
