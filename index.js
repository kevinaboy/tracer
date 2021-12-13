const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
require('dotenv').config();
require("console.table");

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What would you like to do?'
//     },
//     {
//       type: 'checkbox',
//       message: 'What is the name of your department?',
//       name: 'departments',
//       choices: ['Services', 'Sales', 'Engineering']
//     }
//   ])

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
})

connection.connect(function (err) {
  if (err) throw err;
})


connection.promise().query("SELECT * FROM department;")
  .then(([res]) => {
    console.table(res)
  })


// inquirer prompt
// var newDepartmentName = "HR"

// connection.promise().query(`INSERT INTO department (id, name) VALUES (2, "${newDepartmentName}");`)
//   .then(([res]) => {
//     console.table(res)
//   })