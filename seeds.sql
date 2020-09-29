INSERT INTO department (department) VALUES
("Executive"),
("Sales"),
("Accounting"),
("Finance"),
("IT");

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id) VALUES
("CEO", 900000, 1),
("CFO", 750000, 1),
("COO", 750000, 1),
("Accountant", 75000, 3),
("Financial planner", 60000, 4),
("Sales associate", 40000, 2),
("IT department head", 120000, 5),
("Help desk technician", 55000, 5);

SELECT * FROM roles;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("John", "Doe", 1, NULL),
("Jane", "Doe", 2, 1),
("Josh", "Doe", 3, 1),
("Jerry", "Doe", 4, 3),
("Jordan", "Doe", 5, 4),
("Janet", "Doe", 6, 2),
("Jaden", "Doe", 7, 6);

SELECT * FROM employee;