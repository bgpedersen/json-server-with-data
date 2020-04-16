# JSON API server with flexible data

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/bgpedersen/json-server-with-data.svg)](https://github.com/bgpedersen/json-server-with-data/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/bgpedersen/json-server-with-data.svg)](https://github.com/bgpedersen/json-server-with-data/pulls)

---

Quick starter for JSON API server with existing data

## 📝 Table of Contents

- [JSON API server with flexible data](#json-api-server-with-flexible-data)
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

All HTTP endpoints can be used with REST actions:

```text
GET    /employees
GET    /employees/{id}
POST   /employees
PUT    /employees/{id}
PATCH  /employees/{id}
DELETE /employees/{id}
```

Using queries

```text
http://localhost:3000/employees?first_name=John
```

Examples

```text
GET   http://localhost:3000/employees   // get all employees (has avatar and company_id and alot of employee info)
GET   http://localhost:3000/users       // get all users (a lot of user info)
GET   http://localhost:3000/posts       // get all posts (with user_id, image, likes, etc.)
GET   http://localhost:3000/images      // get all images (url, title, description)
GET   http://localhost:3000/galleries   // get all galleries (with included Images array, 0-20 images each)
GET   http://localhost:3000/companies   // get all companies (with included Employees array, 0-20 employees each)


```

For the complete documentation, see [json-server](https://github.com/typicode/json-server) and [FakerJS](https://github.com/marak/Faker.js/)

## Modify data

For seperations of concerns each REST API endpoints is located in `data/` as a `.js` file. See `data/employees.js` as example.

`data/employees.js`

```javascript
var faker = require('faker');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      avatar: faker.image.avatar(),
    };
    Object.assign(entity, faker.helpers.createCard());
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
    employees: require('./data/employees')(50), // 50 employees
    users: require('./data/users')(50), // 50 users
    posts: require('./data/posts')(50, 50), // 50 posts, each with user id from 1-50 (second argument is userCount)
    images: require('./data/images')(20), // 20 images
    galleries: require('./data/galleries')(5), // 5 galleries with Image array of 0-20 images
    companies: require('./data/companies')(3), // 3 companies with Employees array of 0-20 employees
  };
}
module.exports = generateDB;
```
