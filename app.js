const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: employee_trackerDB
});

connection.connect(function (err) {
    if (err) throw err;

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
