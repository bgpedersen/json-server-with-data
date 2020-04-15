# JSON API server with flexible data

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/bgpedersen/json-api-server-with-data.svg)](https://github.com/bgpedersen/json-api-server-with-data/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/bgpedersen/json-api-server-with-data.svg)](https://github.com/bgpedersen/json-api-server-with-data/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

---

Get up and running with pre-filled JSON API server

## 📝 Table of Contents

- [JSON API server with flexible data](#json-api-server-with-flexible-data)
  - [📝 Table of Contents](#%f0%9f%93%9d-table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Running the server](#running-the-server)
  - [Modify data](#modify-data)

## About

Get quick up and running with JSON Server with easy flexible data setup based on [json-server](https://github.com/typicode/json-server) and [FakerJS](https://github.com/marak/Faker.js/)

## Getting Started

Clone project and install depenecies

```bash
npm i
```

## Running the server

To run the server

```bash
npm run start
```

## Modify data

For seperations of concern and to be flexible, create each REST API endpoints in `data/` as a `.js` file. See `employee.js` as example.

`employee.js`

```javascript
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
```

Define the name of each endpoint should be created and require the data file with amount

`db.js`

```javascript
function generateDB() {
  return {
    employees: require('./data/employees')(50),
    residents: require('./data/residents')(50),
  };
}
module.exports = generateDB;
```
