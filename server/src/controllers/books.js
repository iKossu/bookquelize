const booksService = require('../services/books');

const postOne = async (req, res, next) => {
  try {
    const {
      body: props,
      db: { models: { Book } },
    } = req;
    const book = await booksService.createOne(Book, props);
    return res.json({ book });
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const {
      db: { models: { Book } },
      query,
    } = req;
    const books = await booksService.readLatest(Book, query);
    const bookCount = await booksService.readCount(Book);
    return res.json({ bookCount, books });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  postOne,
  getAll,
};
