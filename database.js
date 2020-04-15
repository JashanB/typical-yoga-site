const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

const getAllEmployees = () => {
  return db.query(
    `SELECT * FROM employees;`)
    .then(data => {
      return data.rows;
    });
};


const getAllClasses = () => {
  return db.query(
    'SELECT * FROM classes;'
  )
  .then(data => {
    return data.rows
  })
}
// const getAllClassesByMonth = (month) => {

// }
exports.getAllEmployees = getAllEmployees;
exports.getAllClasses = getAllClasses;

