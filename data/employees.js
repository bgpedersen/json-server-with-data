var faker = require('faker');

module.exports = function generateEmployees(amount) {
  var employees = [];
  for (var id = 0; id < amount; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    employees.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      type: 'employee',
    });
  }
  return employees;
};
