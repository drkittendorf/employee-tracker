const mysql = require("mysql");
const inquirer = require("inquirer");
require('console.table');
const db = require('./Db/sqlfunctions.js');

// console.log(db);



async function empView() {
    const employee = await db.empView()
    console.table(employee)
    
};

async function roleView() {
    const role = await db.roleView()
    console.table(role)

};

async function deptView() {
    const dept = await db.deptView()
    console.table(dept)
    
};

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
            "Update an employee manager",            
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
                case "View Total Budget by Department": totalBudget();break;
                case "Add a department": addDept();break;
                case "Add a role": addRole();break;
                case "Add an employee": addEmp();break;
                case "Update an employee role": updateEmpRole();break;
                case "Update an employee manager": updateEmpManager();break;
                case "Remove a department": deleteDept();break;
                case "Remove a role": deleteRole();break;
                case "Remove an employee": deleteEmp();break;
                case "Exit": connection.end();break;
                default: break;
            }

        });
};

start();