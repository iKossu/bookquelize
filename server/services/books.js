const createOne = async (Book, bookProps) => {
  const book = await Book.create(bookProps);
  return book;
};

const readAll = async (Book, { limit }) => {
  const books = await Book.findAll({ limit, offset: 0, order: [['timestamp', 'DESC']] });
  return books;
};

module.exports = { createOne, readAll };
