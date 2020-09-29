DROP DATABASE IF EXISTS employee_manager;

CREATE DATABASE employee_manager;

USE employee_manager;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT DEFAULT NULL,
    FOREIGN KEY(role_id) REFERENCES role(id)
);