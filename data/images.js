var faker = require('faker');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      title: faker.lorem.sentence(),
      description: faker.lorem.sentences(),
      url: faker.image.image(),
    };
    entities.push(entity);
  }

  return entities;
};
