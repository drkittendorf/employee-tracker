DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;
show tables;
CREATE TABLE employee (
    employee_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);

CREATE TABLE department (
    department_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE role (
    role_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INT
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    values('Mark', 'Smith', 7, 1),
          ('Ariel', 'Jones', 7, 2),
         ('Samir', 'Jackson', 8, 2),
            ('Ty', 'Law', 9, 1);