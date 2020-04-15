function generateDB() {
  return {
    employees: require('./data/employees')(50),
    users: require('./data/users')(50),
    galleries: require('./data/galleries')(5, 20),
  };
}
module.exports = generateDB;
