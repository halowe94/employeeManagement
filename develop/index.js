//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

//create connection to database
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeManagement'
});

//error function for connection
 connection.connect(err => {
     if (err) {
         return console.error('error' + err.message);
     }
    promptQuestions();
 })
