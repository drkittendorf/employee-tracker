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

// 2nd tier prompt (c)
async function updateWhat (views) {
    inquirer
        .prompt({
            name: "updatePrompt",
            type: "list",
            message: "What type of items would you like to update in the database?",
            choices: ['Departments', 'Roles', 'Employees']
        })
        .then(function (answer) {
        
            let key = answer.updatePrompt;

            switch (key) {
                case "Departments": viewDepartment(); break;
                case "Roles": return console.log(`roles`);
                case "Employees": return console.log(`employees`); //SELECT * from employees where name = {}, 
                default: return connection.end();;//UPDATE D/R/E SET answer  = {}
            }
        }); // EDIT OR DELETE
};
// 2nd tier prompt (b)
async function viewWhat (views) {
    inquirer
        .prompt({
            name: "viewPrompt",
            type: "list",
            message: "What type of items would you like to view from the database?",
            choices: ['Departments', 'Roles', 'Employees']
        })
        .then(function (answer) {
        
            let key = answer.viewPrompt;

            switch (key) {
                case "Departments": viewDepartment(); break;
                case "Roles": return console.log(`roles`);
                case "Employees": return console.log(`employees`);
                default: return connection.end();;
            }
        });
};
// 2nd tier prompt (a)
async function addWhat (adds) {
    inquirer
        .prompt({
            name: "addPrompt",
            type: "list",
            message: "Which type would you like to add to the database?",
            choices: ['Add a department', 'Add a role', 'Add an employee']
        })
        .then(function (answer) {
        
            let key = answer.addPrompt;

            switch (key) {
                case "Add a department": return console.log(`departments`);
                case "Add a role": return console.log(`roles`);
                case "Add an employee": return console.log(`employees`);
                default: return connection.end();;
            }
        });
};
// initial prompt
function start() {
    inquirer
        .prompt({
            name: "firstPrompt",
            type: "list",
            message: "Welcome to the Employees Management System! What would you like to do?",
            choices: [
                "Add departments, roles, or employees", 
                "View departments, roles, or employees",
                "Update an employee role"]
        })
        .then(function (answer) {
           
            let key = answer.firstPrompt;

            switch (key) {
                case "Add departments, roles, or employees": addWhat();break;
                case "View departments, roles, or employees": viewWhat();break;
                case "Update an employee role": updateWhat();break;
                default: break;
            }
        });
};

start();