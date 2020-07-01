exports.getAllTodos = async (req, res) => {
  const { params } = req;
  const { id } = params;
  const {
    ok,
    error: retrieveTodosException,
    result: todos,
  } = await surePromise(TodoInteractor.retrieveTodo(id));
  if (ok) return res.json(todos);
  return res
    .status(mapExceptionsToStatusCode(retrieveTodosException))
    .json(retrieveTodosException);
};
