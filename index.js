const connection = require("./db/connection");
const inquirer = require("inquirer");
const Query = require("./db/queries");

// contains all query methods from queries.js
const query = new Query();


// Inquirer

// Main menu
const mainMenu = () => {

    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "\n\nWhat would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Roles",
                "Add Role",
                "Remove Roll",
                "Exit"
            ]
            // pageSize: 

        }
    ])
        .then(({ choice }) => {
            console.log("Your choice was: ", choice)

            switch (choice) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "Exit":
                    exit();
                    break;
                default:
                    break;
            }

        })
        .catch(error => {
            console.log("Uh oh! /n", error)
        })

}

// View All Employees
const viewAllEmployees = () => {

    // query all employees
    query.viewAllEmployees().then(() => prompt());

    const prompt = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "\nWhat would you like to do?",
                choices: [
                    "Back to main menu",
                    "Exit"
                ]
            }
        ])
            .then(({ choice }) => {
                console.log("Your choice was: ", choice)

                switch (choice) {
                    case "Back to main menu":
                        mainMenu();
                        break;

                    case "Exit":
                        exit();
                        break;

                    default:
                        break;
                }

            })
            .catch(error => {
                console.log("Uh oh! /n", error)
            })
    }
}

// View All Employees by Department

// View All Employees by Manager

// Add Employee

// Remove Employee

// Update Employee Role

// Update Employee Manager

// View All Roles

// Add Role

// Remove Role

// Exit
const exit = () => {
    console.log("\nQuitting program...\n")
    connection.end();
}


// X - Add departments, roles, employees
// query.insertDepartment("HSE");
// query.insertRole("Health & Safety Engineer 1", "55000", "5");
// query.insertEmployee("Kelli", "Kaiser", "7", "1");

// X - View departments, roles, employees
// query.viewAllDepartments();
// query.viewAllEmployees();
// query.viewAllRoles();

// X - Update employee roles
// query.updateRole("7", "Health & Safety Engineer 2", "69000", "5");

// X - Update employee managers
// query.updateManager(7, 1);

// X - View employees by manager
// query.viewByManager();

// X - Delete departments, roles, and employees
// query.deleteDepartment(4); //Operations
// query.deleteRole(5); //Engineer Fellow
// query.deleteEmployee(2); // Gordon Mathews

// X - View the total utilized budget of a department -- ie the combined salaries of all employees in that department
// query.viewBudget("Engineering");

// quit connection
// connection.end();

// Start program
mainMenu();