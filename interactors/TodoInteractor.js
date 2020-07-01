const { Lx } = require("@maxtermax/lux-io");
const TodoInterface = require("../interfaces/TodoInterface.js");
const LxStream = new Lx(100);

const resolveTodo = ({ id, connection }) => {
  return new Promise((resolve, reject) => {
    LxStream.push({
      id,
      cache: true,
      onResult: ({ result }) => resolve(result),
      definition: () => connection.getTodo(id),
    });
  });
};

module.exports = class TodoInteractor extends TodoInterface {
  constructor(connection) {
    super(connection);
    this.connection = connection;
  }
  async retrieveTodo(id) {
    const { ok, error, result } = await surePromise(
      resolveTodo({ id, connection: this.connection })
      // this.connection.getTodo(id)
    );
    if (ok) return Promise.resolve(result);
    return Promise.reject({
      ...Exceptions.SERVER_ERROR,
      details: { ...error },
    });
  }
};
