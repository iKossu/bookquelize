const booksService = require('../services/books');

const postOne = async (req, res, next) => {
  try {
    const {
      body: book,
      db: { models: { Book } },
    } = req;
    await booksService.postOne(Book, book);
    return res.status(204).end();
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
    const { page: limit = 20 } = query;
    const books = await booksService.readAll(Book, { limit });
    return res.status(200).json({ books });
  } catch (error) {
    return next(error);
  }
};

module.exports = { postOne, getAll };
