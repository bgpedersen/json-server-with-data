var faker = require('faker');

module.exports = function generateResidents(amount) {
  var residents = [];
  for (var id = 0; id < amount; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    residents.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      type: 'resident',
    });
  }
  return residents;
};
