var faker = require('faker');

module.exports = function (amount, userCount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
      created: faker.date.recent(10),
      user_id: faker.random.number(userCount),
      image: faker.image.image(),
      likes: faker.random.number(100),
    };
    entities.push(entity);
  }

  return entities;
};
