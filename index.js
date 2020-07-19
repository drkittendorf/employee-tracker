const mysql = require("mysql");
const inquirer = require("inquirer");
require('console.table');
const db = require('./Db/sqlfunctions.js');
const connection = require ('./Db/connection.js')

// console.log(db);


   

   function updateEmpRole() {

   };
   
   function updateEmpManager() {

   };
   
   function deleteDept() {

   };
   
   function deleteRole() {

   };
   
   function deleteEmp() {

   };

    function addEmp(){
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
    .then (function (answer) {
        console.log(answer) 
        connection.query("INSERT INTO employee set ?;",
        {first_name:answer.addEmpPrompt, last_name:answer.addEmpLast, role_id:answer.addEmpRole},
        (err,)=>{ if(err) throw err;
          console.log("You added an Employee");
          start()
        });
   });
}
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
    .then (function (answers) {
        console.log(answers)
        connection.query("INSERT INTO role set ?;",{title:answers.newRoleTitle, salary:answers.newRoleSalary, department_id:answers.newRoleDept},
        (err,)=>{ if(err) throw err;
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
    .then (function (answer) {
      console.log(answer) 
      connection.query("INSERT INTO department (name) VALUES (?);",[answer.addDeptPrompt],
      (err,)=>{ if(err) throw err;
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
          .then (function (answer) {
             const employees = (answer)
             connection.query
          ("SELECT first_name, last_name FROM employee WHERE ? ;",
          {manager_id:answer.managerPrompt},(err,res)=>{ 
            if(err) throw err;
            console.table(res);
            connection.end()   
          })
        })};

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