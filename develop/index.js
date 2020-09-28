//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require('./questions');

//create connection to database
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'WadiRum2018!',
    database: 'employeeManagement'
});

//error function for connection
 connection.connect(err => {
     if (err) {
         return console.error('error' + err.message);
     }
    promptQuestions();
 })

 //function to prompt questions
 function promptQuestions () {
     inquirer.prompt(questions);
 }