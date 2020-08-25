INSERT INTO department (dept) VALUES
("Executive"),
("Sales"),
("Accounting"),
("Finance"),
("IT");

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id) VALUES
("CEO", 900,000, 1),
("CFO", 750,000, 1),
("COO", 750,000, 1),
("Accountant", 75,000, 3),
("Financial planner", 60,000, 4),
("Sales associate", 40,000, 2),
("IT department head", 120,000),
("Help desk technician", 55,000, 5);

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