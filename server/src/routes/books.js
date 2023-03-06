const router = require('express').Router();
const booksController = require('../controllers/books');

router.post('/', booksController.postOne);
router.get('/latest', booksController.getAll);

module.exports = router;
