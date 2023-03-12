const router = require('express').Router();
const booksController = require('../controllers/books');
const { check } = require('../middlewares/validation');

router.post('/', check.name, booksController.postOne);
router.get('/latest', check.limit, check.offset, booksController.getAll);

module.exports = router;
