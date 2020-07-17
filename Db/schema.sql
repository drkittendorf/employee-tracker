-- DROP DATABASE IF EXISTS employeeDB;

-- CREATE DATABASE employeeDB;

USE employeeDB;
show tables;
CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);

CREATE TABLE role (
    role_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT
);

CREATE TABLE department (
    department_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL
);