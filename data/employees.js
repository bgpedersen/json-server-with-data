var faker = require('faker');

module.exports = function (amount) {
  var entities = [];
  for (var id = 0; id < amount; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    entities.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      type: 'employee',
    });
  }
  return entities;
};
