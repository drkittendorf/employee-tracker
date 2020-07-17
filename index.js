const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Kittend07!",
    database: "employeeDB"
});

function viewDepartment() {
    connection.query(
		connection.query("SELECT * FROM department;", function (err, res, field) {
            if (err) throw err;
            console.table(res);
        })
    )};


// initial prompt
function start() {
    inquirer
        .prompt({
            name: "firstPrompt",
            type: "list",
            message: "Welcome to the Employees Management System! What task would you like to perform?",
            choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "View Employees by Manager",
            "View Total Budget by Department",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Remove a department",
            "Remove an employee", 
            "Exit"
        ]
        })
        .then(function (answer) {
           
            let key = answer.firstPrompt;

            switch (key) {
                case "View all departments": deptView();break;
                case "View all roles": roleView();break;
                case "View all employees": empView();break;
                case "View Employees by Manager": managerEmpView();break;
                case "View Total Budget by Department": totalBudget();break;// * View the total utilized budget of a department -- ie the combined salaries of all employees in that department
                case "Add a department": addDept();break;
                case "Add a role": addRole();break;
                case "Add an employee": addEmp();break;
                case "Update an employee role": updateEmpRole();break;
                case "Remove a department": deleteDept();break;
                case "Remove a role": deleteDept();break;
                case "Remove an employee": deleteDept();break;
                case "Exit": start() ;break;
                default: break;
            }
            // Update employee managers
            // * View employees by manager
            // * Delete departments, roles, and employees
            
          
        });
};

start();