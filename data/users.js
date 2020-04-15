var faker = require('faker');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
    };
    Object.assign(entity, faker.helpers.contextualCard());
    entities.push(entity);
  }

  return entities;
};
