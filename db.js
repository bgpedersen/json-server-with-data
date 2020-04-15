function generateDB() {
  return {
    employees: require('./data/employees')(50),
    residents: require('./data/residents')(50),
  };
}
module.exports = generateDB;
