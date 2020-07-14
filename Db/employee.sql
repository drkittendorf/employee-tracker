ALTER USER 'root'@'localhost' IDENTIFIED
WITH mysql_native_password BY 'Erikmysql';

CREATE DATABASE employeeDB;

USE employeeDB;

--  DEPARTMENT


-- CREATING ROLE TABLE  
CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    salary DECIMAL NOT NULL,
)
-- CREATING EMPLOYEE TABLE 
create table employee
(
    id int primary key not null
    auto_increment,
    name text not null,
    manager_id int,
    constraint fk_employee foreign key
    (manager_id) references employee
    (id)
);

    insert into employee
        (name, manager_id)
    values('Mark', 1),
        ('Ariel', 2),
        ('Samir', 2),
        ('Ty', 1);
    select A.name as 'Employee',
        B.name as 'Manager'
    from employee as A
        Inner Join employee as B on A.manager_id = B.id;