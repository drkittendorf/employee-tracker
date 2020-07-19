const connection = require ('./connection.js')

class Database {

    deptView() {
      return connection.query("SELECT * FROM department")
    // console.log("test");
    connection.end() 
    };    
 
    roleView() {
     return connection.query("SELECT * FROM role")
     connection.end() 
    };

    empView() {
     return connection.query("SELECT * FROM employee")
     connection.end()   
    };
};

module.exports = new Database()