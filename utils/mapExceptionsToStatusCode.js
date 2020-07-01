module.exports = (exception) => {
  const { code } = exception;
  const isServerError = code === "SERVER_ERROR";
  const isNotFound = code === "NOT_FOUND";
  if (isServerError) return 500;
  if (isNotFound) return 404;
  return 500;
};
