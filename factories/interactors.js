module.exports = (connection) => {
  return Object.keys(INTERACTORS)
    .filter((key) => Boolean(INTERACTORS[key]))
    .reduce((accumulator, interactor) => {
      accumulator[interactor] = new (require(`../interactors/${interactor}`))(
        connection
      );
      return accumulator;
    }, {});
};
