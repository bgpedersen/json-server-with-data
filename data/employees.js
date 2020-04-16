var faker = require('faker');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    var companyId = faker.random.number(3);
    if (companyId === 0) companyId = 1;
    let entity = {
      id: id,
      avatar: faker.image.avatar(),
      company_id: companyId,
    };
    Object.assign(entity, faker.helpers.createCard());
    entities.push(entity);
  }

  return entities;
};
