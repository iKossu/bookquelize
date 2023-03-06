const handleError = (err, req, res, next) => {
  const {
    statusCode, log, message, stack, original,
  } = err;
  console.error(`${log}\n${stack}`);
  res.status(statusCode || 400).send({
    status: 'error',
    statusCode,
    message,
    original,
  });
};

module.exports = handleError;
