

-- CONSTRAINT fk_role_deptID FOREIGN KEY(department_id) REFERENCES department (id)
-- -- CREATING EMPLOYEE TABLE 
-- create table employee
-- (
--     id int primary key not null auto_increment,
--     name text not null,
--     manager_id int,
--     CONSTRAINT fk_employee foreign key (manager_id) references employee(id)
-- );



--     insert into employee (name, manager_id)
--     values('Mark', 1),
--           ('Ariel', 2),
--           ('Samir', 2),
--           ('Ty', 1);
-- -- select A.name as 'Employee',
-- --     B.name as 'Manager'
-- -- from employee as A
-- --     Inner Join employee as B on A.manager_id = B.id;
-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager


-- // 1 deptView()
-- // 2 roleView()
-- // 3 empView()
-- // 4 managerEmpView()
-- // 5 totalBudget()
-- // 6 addDept()
-- // 7 addRole()
-- // 8 addEmp()
-- // 9 updateEmpRole()
-- // 10 updateEmpManager()
-- // 11 deleteDept()
-- // 12 deleteRole()
-- // 13 deleteEmp()