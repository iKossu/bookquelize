const { body, query, validationResult } = require('express-validator');

// eslint-disable-next-line consistent-return
const checkValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'ValidationError', errors: errors.array(),
    });
  }

  next();
};

const check = {
  author: [
    body('author', '"author" is required')
      .optional()
      .trim()
      .escape(),
    checkValidation,
  ],
  limit: [
    query('limit', 'query parameter "limit" must be an integer bigger than 0')
      .toInt()
      .isInt({ min: 1 }),
    checkValidation,
  ],
  name: [
    body('name', '"name" is required')
      .not()
      .isEmpty()
      .trim()
      .escape(),
    checkValidation,
  ],
  offset: [
    query('offset', 'query parameter "offset" must be a positive integer')
      .toInt()
      .isInt({ min: 0 }),
    checkValidation,
  ],
};

module.exports = {
  check,
};
