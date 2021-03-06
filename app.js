const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_manager"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Listening on port 3306");
    firstPrompt();
});

function firstPrompt() {
    inquirer
        .prompt({
            type: "list",
            name:  "choices",
            message: "What would you like to do?",
            choices: [
                "View employees",
                "View departments",
                "View roles",
                "Add employee",
                "Add department",
                "Add role",
                "Update employee role",
                "Exit"
            ]
        })
        .then(function(res) {
            switch(res.choices) {
                case "View employees":
                    viewEmployee();
                    break;
                
                case "View departments":
                    viewDepartment();
                    break;

                case "View roles":
                    viewRoles();
                    break;
                
                case "Add employee":
                    addEmployee();
                    break;

                case "Add department":
                    addDepartment();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Update employee role":
                    updateRole();
                    break;

                case "Exit":
                    connection.end();
            }
        });
} 

function viewEmployee() {
    var query = "SELECT * FROM employee";

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        firstPrompt();
    })
}

function viewDepartment() {
    var query = "SELECT * FROM department";

    connection.query(query, function (err, res) {
        if(err) throw err;

        console.table(res);

        firstPrompt();
    })
}

function viewRoles() {
    var query = "SELECT * FROM roles";

    connection.query(query, function (err, res) {
        if(err) throw err;

        console.table(res);

        firstPrompt();
    })
}

function addEmployee() {
    var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)";

    inquirer
    .prompt([
        {
            name: "firstName",
            type: "input",
            message: "First name?"
        },
        {
            name: "lastName",
            type: "input",
            messsage: "Last name?"
        },
        {
            name: "roleID",
            type: "input",
            message: "What is the employee role id?"
        },
        {
            name: "managerID",
            type: "input",
            message: "What is the manager id?"
        }
    ]).then(function(res) {
        var employee = [res.firstName, res.lastName, res.roleID, res.managerID];

        connection.query(query, employee, function(err, res) {
            if (err) throw err;
            console.log("Added employee");
            firstPrompt();
        })
    })
}

function addRole() {
    var query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)"
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the new role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the new salary for the role?"
        },
        {
            name: "depID",
            type: "input",
            message: "What is the department ID for the new role?"
        }
    ]).then(function(res) {
        var role = [res.title, res.salary, res.depID];
        connection.query(query, role, function(err, res) {
            if (err) throw err;
            console.log("Added new role");
            firstPrompt();
        })
    })
}

function addDepartment() {
    var query = "INSERT INTO department (name) VALUES (?)"
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the new department name?"
        }
    ]).then(function(res) {
        var departmentName = [res.department]
        connection.query(query, departmentName, function(err, res) {
            if (err) throw err;
            console.log("Added new department");
            firstPrompt();
        })
    })
}

function updateRole() {
    inquirer.prompt([
        {
            name: "employee",
            type: "input",
            message: "What is the employee ID?"
        },
        {
            name: "role",
            type: "input",
            message: "What is the employee's new role ID?"
        }
    ]).then(function(res) {
        var sql = "UPDATE employee SET role_id = " + res.role + " WHERE id = " + res.employee;
        connection.query(sql, function (err, res) {
            if (err) throw err;
            console.log("Role updated")
            firstPrompt();
        })
    })
}

// firstPrompt();