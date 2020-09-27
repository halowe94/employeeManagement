const { listenerCount } = require("process");

let questions = [
    {
        type: "list",
        name: "begin",
        message: "Would you like to create a new employee?",
        choices: ['yes', 'no']


    },
    {
        type: 'input',
        name: 'department',
        message: "What is the employee's department?"
    },
    {
        type: 'input',
        name: 'role',
        message: "What is the employee's title?"
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Salary for' + questions.role,
    },
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
    },
    {
        type: 'input',
        name: 'role_id',
        message: "What is the employee's id?"
    },
    {
        type: "input",
        name: "manager_id",
        message: "What is the employee's manger's ID?"
    }
];