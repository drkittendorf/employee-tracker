INSERT INTO department (name)
VALUES ("Engineering"), ("Field Operations"), ("Finance"), ("Cleaning");

INSERT INTO role (title, salary, department_id)
VALUES ("Fixer", 150000, 1), ("Driver", 90000, 2), ("Team Lead", 100000, 2), ("Salesperson", 80000, 2), ("Accountant", 125000, 3), ("Cleaner", 250000, 4), ("Lawyer", 190000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mia", "Wallace", 3, NULL), ("Hans", "Landa", 2, NULL), ("Gogo", "Yubari", 3, NULL), ("Jules", "Winfield", 2, 1), ("Jackie", "Brown", 3, 2), ("Vincent", "Vega", 7, 3), ("Vernita", "Green", 5, NULL);