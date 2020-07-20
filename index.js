const mysql = require("mysql");
const inquirer = require("inquirer");
require('console.table');
const db = require('./Db/sqlfunctions.js');
const connection = require('./Db/connection.js')


   function deleteDept() {

   };

   function deleteRole() {
    inquirer
    .prompt([
     {  name: "delRolePrompt",
        type: "input",
        message: "Which Role would you like to remove from the database?Enter an id"
    }])
   .then (function (answer) {
    console.log(answer) 
    connection.query("DELETE from role WHERE ?;",[{role_id:answer.delRolePrompt}],
    (err,)=>{ if(err) throw err;
      console.log("You deleted a Role");
      start()    
    });
});
   };

   function deleteEmp() {
    inquirer
    .prompt([
     {  name: "delEmpPrompt",
        type: "input",
        message: "Which employee would you like to remove from the database?Enter an id"
    }])
   .then (function (answer) {
    console.log(answer) 
    connection.query("DELETE from employee WHERE ?;",[{id:answer.delEmpPrompt}],
    (err,)=>{ if(err) throw err;
      console.log("You deleted an Employee");
      start()    
    });
});
   };
//    function updateEmpManager() {

//    }; 

   function updateEmpRole() {
    inquirer
    .prompt([
     {  name: "updateRolePrompt",
        type: "input",
        message: "What role_id would you like to assign in the database? Enter role id"
    },
    {  name: "updateEmpPrompt",
        type: "input",
        message: "What employee would you like to update in the database?Enter employee id."
    },
    ])
   .then (function (answer) {
    console.log(answer) 
    connection.query("UPDATE employee SET ? WHERE ?;",[{role_id:answer.updateRolePrompt},{ id:answer.updateEmpPrompt}],
    (err,)=>{ if(err) throw err;
      console.log("You added an Employee");
      start()    
    });
    });
   };


function addEmp() {
    inquirer
        .prompt([
            {
                name: "addEmpPrompt",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "addEmpLast",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "addEmpRole",
                type: "input",
                message: "What is the employee's role?",
            }])
        .then(function (answer) {
            console.log(answer)
            connection.query("INSERT INTO employee set ?;",
                { first_name: answer.addEmpPrompt, last_name: answer.addEmpLast, role_id: answer.addEmpRole },
                (err,) => {
                    if (err) throw err;
                    console.log("You updated an Employee");
                    start()
                });
        });
};

function addRole() {
    inquirer
        .prompt([{
            name: "newRoleTitle",
            type: "input",
            message: "What role would you like to add?",
        },
        {
            name: "newRoleSalary",
            type: "input",
            message: "What salary will this role have?",
        },
        {
            name: "newRoleDept",
            type: "input",
            message: "What department will this new role be in?",
        }])
        .then(function (answers) {
            console.log(answers)
            connection.query("INSERT INTO role set ?;", { title: answers.newRoleTitle, salary: answers.newRoleSalary, department_id: answers.newRoleDept },
                (err,) => {
                    if (err) throw err;
                    console.log("You added a role");
                    start()
                });
        });
};

function addDept() {
    inquirer
        .prompt({
            name: "addDeptPrompt",
            type: "input",
            message: "What is the name of the Department you would like to add?"
        })
        .then(function (answer) {
            console.log(answer)
            connection.query("INSERT INTO department (name) VALUES (?);", [answer.addDeptPrompt],
                (err,) => {
                    if (err) throw err;
                    console.log("You added a department");
                    start()
                });
        })
};

function managerEmpView() {
    inquirer
        .prompt({
            name: "managerPrompt",
            type: "input",
            message: "Enter the manager_id"
        })
        .then(function (answer) {
            const employees = (answer)
            connection.query
                ("SELECT first_name, last_name FROM employee WHERE ? ;",
                    { manager_id: answer.managerPrompt }, (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        connection.end()
                    })
        })
};

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
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "View Employees by Manager",
                "View Total Budget by Department",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee role",
                "Update an Employee manager",
                "Remove a Department",
                "Remove a Role",
                "Remove an Employee",
                "Exit"
            ]
        })
        .then(function (answer) {
            console.log(answer)
            let key = answer.firstPrompt;

            switch (key) {
                case "View all Departments": deptView(); break;
                case "View all Roles": roleView(); break;
                case "View all Employees": empView(); break;
                case "View Employees by Manager": managerEmpView(); break;
                case "View Total Budget by Department": totalBudget(); break;
                case "Add a Department": addDept(); break;
                case "Add a Role": addRole(); break;
                case "Add an Employee": addEmp(); break;
                case "Update an Employee role": updateEmpRole(); break;
                case "Update an Employee manager": updateEmpManager(); break;
                case "Remove a Department": deleteDept(); break;
                case "Remove a Role": deleteRole(); break;
                case "Remove an Employee": deleteEmp(); break;
                case "Exit": connection.end(); break;
                default: break;
            }

        });
};

start();

// module.exports =  {Start}