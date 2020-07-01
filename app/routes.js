const routes = ({ app, controllers }) => {
  app.route("/todos/:id").get(controllers.todos.getAllTodos);
};

module.exports = routes;
