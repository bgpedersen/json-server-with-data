# JSON API server with existing data

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/bgpedersen/json-server-with-data.svg)](https://github.com/bgpedersen/json-server-with-data/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/bgpedersen/json-server-with-data.svg)](https://github.com/bgpedersen/json-server-with-data/pulls)

---

Quick starter for JSON API server with existing data

## 📝 Table of Contents

- [JSON API server with existing data](#json-api-server-with-existing-data)
  - [📝 Table of Contents](#%f0%9f%93%9d-table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Using the endpoints](#using-the-endpoints)
  - [Modify data](#modify-data)

## About

Quickly get up and running with JSON Server with existing data - built with [json-server](https://github.com/typicode/json-server) and [FakerJS](https://github.com/marak/Faker.js/)

## Getting Started

Clone project and install depenecies

```bash
npm i
```

And start

```bash
npm run start
```

## Using the endpoints

Available endpoints

- **users** (simple info + avatar + array of Posts)
- **posts** (simple info + userId if created from User)
- **images** (simple info + galleryId if created from Gallery)
- **galleries** (simple info + array of Images)
- **employees** (lot of info + companyId if created from Company)
- **companies** (simple info + image + array of Employees)

All HTTP endpoints can be used with REST actions:

```text
GET    /users
GET    /users/{id}
POST   /users
PUT    /users/{id}
PATCH  /users/{id}
DELETE /users/{id}
```

Using queries

```text
http://localhost:3000/users?firstname=John
```

GET examples

```text
GET   http://localhost:3000/users
GET   http://localhost:3000/posts
GET   http://localhost:3000/images
GET   http://localhost:3000/galleries
GET   http://localhost:3000/employees
GET   http://localhost:3000/companies
```

## Modify data

For seperations of concerns each REST API endpoints is located in `data/` as a `.js` file:

`data/users.js`

```javascript
var faker = require('faker');
var generatePosts = require('./posts');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      color: faker.commerce.color(),
      avatar: faker.image.avatar(),
      Posts: generatePosts(faker.random.number(10), id),
    };
    entities.push(entity);
  }

  return entities;
};
```

Control the endpoints to include, and the amount of entities to be created:

`db.js`

```javascript
function generateDB() {
  return {
    employees: require('./data/employees')(50),
    users: require('./data/users')(50),
    posts: require('./data/posts')(50),
    images: require('./data/images')(20),
    galleries: require('./data/galleries')(5),
    companies: require('./data/companies')(3),
  };
}
module.exports = generateDB;
```
