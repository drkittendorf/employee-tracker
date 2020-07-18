const connection = require ('./connection.js')


class Database {
    deptView() {
      return connection.query("SELECT * FROM department")
    console.log("test");
    };    
 
    roleView() {
     return connection.query("SELECT * FROM role")
    };

    empView() {
     return connection.query("SELECT * FROM department")  
    };

    managerEmpView(answer) {
        // console.log(answer);
     connection.query
     ("SELECT first_name, last_name FROM employee WHERE ? ;",
     {manager_id:answer.managerPrompt},(err,res)=>{ 
        if(err) throw err;
        console.log(res);
        connection.end()
        return (res);

     })
    };
    
    totalBudget() {
     return connection.query("SELECT salary FROM role")
    };
    
    addDept() {

    };
    addRole(){


    };
    
    addEmp(){

    };

    updateEmpRole() {

    };
    
    updateEmpManager() {

    };
    
    deleteDept() {

    };
    
    deleteRole() {

    };
    
    deleteEmp() {

    };

};








    
    // function empSearch() {
    //     inquirer
    //       .prompt({
    //         name: "employee",
    //         type: "input",
    //         message: "What employee would you like to update?"
    //       })
    //       .then(function(answer) {
    //         console.log(answer.song);
    //         connection.query("SELECT * FROM employee WHERE ?", { employee: answer.employee }, function(err, res) {
    //           if (err) throw err;
    //           console.log(employee)            
    //         });
    // });




module.exports = new Database()