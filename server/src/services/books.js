const createOne = async (Book, props) => {
  const book = await Book.create(props);
  return book;
};

const readLatest = async (Book, { limit, offset }) => {
  const books = await Book.findAll({ limit, offset, order: [['timestamp', 'DESC']] });
  return books;
};

const readCount = async (Book) => {
  const bookCount = await Book.count();
  return bookCount;
};

module.exports = {
  createOne,
  readLatest,
  readCount,
};
