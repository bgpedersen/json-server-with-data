var faker = require('faker');

module.exports = function (amount, imageCount) {
  var entities = [];
  var images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push({
      id: i,
      title: faker.lorem.word(),
      url: faker.image.image(),
    });
  }

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      images: images,
    };
    entities.push(entity);
  }

  return entities;
};
