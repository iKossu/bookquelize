const handleError = (err, res) => {
  const {
    statusCode, log, message, stack,
  } = err;
  console.error(`${log}\n${stack}`);
  res.status(statusCode || 400).send({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = handleError;
