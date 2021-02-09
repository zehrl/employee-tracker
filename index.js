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

                case "View All Employees by Department":
                    viewEmployeesByDepartment();
                    break;

                case "View All Employees by Manager":
                    viewEmployeesByManager();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Remove Roll":
                    removeRoll();
                    break;

                case "Exit":
                    exit();
                    break;

                default:
                    break;
            }

        })
        .catch(error => {
            console.log("Uh oh! \n", error)
        })

}

// TO DO
// add .then() and prompt() functions
// make sure queries give you what you want!


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
                console.log("Uh oh! \n", error)
            })
    }
}

// View All Employees by Department
const viewEmployeesByDepartment = () => {

    // Call query to return departments object with: id & department_name
    query.getAllDepartments().then((data, err) => {

        // Change object to inquirer friendly object using: name & value properties
        const choices = data.map(entry => {
            return {
                name: entry.department_name,
                value: entry.id
            }
        })

        // Add choice to exit  
        choices.push("Back to main menu")

        // Prompt user for department selection
        selectDepartmentPrompt(choices);

    });

    const selectDepartmentPrompt = (choices) => {
        inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "\nSelect a department:",
                choices
            }
        ])
            .then(({ id }) => {

                // Send user to main menu and exit current prompt
                if (id === "Back to main menu") {
                    mainMenu();
                    return;
                }

                // Print employees list based on department id
                query.viewEmployeesByDepartment(id).then(() => { nextPrompt() });

            })
            .catch(error => {
                console.log("Uh oh! \n", error)
            })
    };

    // Prompt that gives user next steps
    const nextPrompt = (choices) => {
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "\nWhat would you like to do?",
                choices: [
                    "Search again",
                    "Main menu",
                    "Exit"
                ]
            }
        ])
            .then(({ choice }) => {

                switch (choice) {
                    case "Search again":
                        viewEmployeesByDepartment()
                        break;

                    case "Main menu":
                        mainMenu()
                        break;

                    case "Exit":
                        exit();
                        break;

                    default:
                        break;
                }

            })
            .catch(error => {
                console.log("Uh oh! \n", error)
            })
    };

}


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