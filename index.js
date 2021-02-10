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

                // Employees Options
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",

                // Roles options
                "View All Roles",
                "Add Role",
                "Remove Roll",

                // !!! Department options?

                // Exit
                "Exit",
            ],
            loop: false,
            pageSize: 11

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
                    removeRole();
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
                console.log("Uh oh! \n", error);
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
    };

}

// View All Employees by Manager
const viewEmployeesByManager = () => {

    // Call query to return managers object with: id, manager's first & last name
    query.getAllManagers().then((data, err) => {

        // Change object to inquirer friendly object using: name & value properties
        const choices = data.map(entry => {
            return {
                // !!! combine first and last name and return as "name"
                name: `${entry["First Name"]} ${entry["Last Name"]} (${entry.Department})`,
                value: entry.ID
            }
        })

        // Add choice to exit  
        choices.push("Back to main menu")

        // Prompt user for department selection
        selectManagerPrompt(choices);

    });

    const selectManagerPrompt = (choices) => {
        inquirer.prompt([
            {
                type: "list",
                name: "managerId",
                message: "\nSelect a Manager:",
                choices
            }
        ])
            .then(({ managerId }) => {

                // Send user to main menu and exit current prompt
                if (managerId === "Back to main menu") {
                    mainMenu();
                    return;
                }

                // Print employees list based on department managerId
                query.viewEmployeesByManager(managerId).then(() => { nextPrompt() });

            })
            .catch(error => {
                console.log("Uh oh! \n", error);
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
                        viewEmployeesByManager()
                        break;

                    case "Main menu":
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
    };
}

// Add Employee

const addEmployee = () => {
    // Prompt user: select department of new employee (or exit)
    // Prompt user: select role of new employee (or exit)
    // Prompt user: select manager of new employee (or exit)
    // Prompt user: employee first name, last name
    // query.insertEmployee(firstName, lastName, roleId, managerId)
    // nextPrompt()
}

// Remove Employee

const removeEmployee = () => {
    // Prompt user: select department
    // Prompt user: select employee
    // query.deleteEmployee(employeeId)
    // nextPrompt()
}

// Update Employee Role

const updateEmployeeRole = () => {
    // Prompt user: select department of employee
    // Prompt user: select employee
    // Prompt user: select employee's new role
    // query. update employee's role_id
    // nextPrompt()
}

// Update Employee Manager

const updateEmployeeManager = () => {
    // Prompt user: select department of employee
    // Prompt user: select employee
    // Prompt user: select new manager
    // query.updateManager(employeId, newManagerId)
    // nextPrompt

}

// View All Roles

const viewAllRoles = () => {
    query.viewAllRoles().then(() => { mainMenu() })
}

// Add Role

const addRole = () => {
    // Prompt user: getAllDepartments() and select department
    // Prompt user: Enter title of role & salary
    // insertRole(title, salary, departmentId)
    // nextPrompt()
}

// Remove Role

const removeRole = () => {
    // Prompt user: Select department -> getAllDepartments()
    query.getAllDepartments().then((data, err) => {

        const choices = data.map(entry => {
            return {
                name: entry.department_name,
                value: entry.id
            }
        })

        choices.push("Back to main menu")

        promptDepartments(choices);
    })

    const promptDepartments = (choices) => {
        inquirer.prompt([
            {
                type: "list",
                name: "departmentId",
                message: "\nSelect a department that contains the role:",
                choices
            }
        ])
            .then(({ departmentId }) => {
                // Send user to main menu and exit current prompt
                if (departmentId === "Back to main menu") {
                    mainMenu();
                    return;
                }

                query.getRolesByDepartment(departmentId).then((data, err) => {

                    // If there are no roles in the department
                    if (data.length === 0) {
                        removeRole();
                    } else {

                        const choices = data.map(entry => {
                            return {
                                name: entry.title,
                                value: entry.id
                            }
                        })

                        choices.push("Back to main menu")

                        promptRoles(choices);
                    }
                });

            })
            .catch(error => {
                console.log("Uh oh! \n", error);
            })
    };

    // Prompt user: Select role -> getRolesByDepartment(department_id)
    const promptRoles = (choices) => {

        inquirer.prompt([
            {
                type: "list",
                name: "roleId",
                message: "\nSelect a role to remove:",
                choices
            }
        ])
            .then(({ roleId }) => {
                // Return to main menu, else confirm role removal
                if (roleId === "Back to main menu") {
                    mainMenu();
                } else {
                    promptConfirm().then((reply) => {

                        if (reply) {
                            deleteRole(roleId);
                        } else {
                            removeRole();
                        }
                    })

                }

            })
    }

    const promptConfirm = () => {
        return new Promise((resolve, reject) => {

            inquirer.prompt([
                {
                    type: "confirm",
                    name: "confirm",
                    message: "\nAre you sure you would like to remove this role?"
                }
            ])
                .then(({ confirm }) => {
                    resolve(confirm)
                })

        })

    }

    // deleteRole(roleId)
    const deleteRole = (roleId) => {
        query.deleteRole(roleId).then((data) => {
            console.log("\nRole deleted successfully.\n");
            nextPrompt();
        })
    }

    // nextPrompt()
    const nextPrompt = (choices) => {
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "\nWhat would you like to do?",
                choices: [
                    "Delete another role",
                    "Main menu",
                    "Exit"
                ]
            }
        ])
            .then(({ choice }) => {

                switch (choice) {
                    case "Search again":
                        deleteRole()
                        break;

                    case "Main menu":
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

// Exit
const exit = () => {
    console.log("\nQuitting program...\n")
    connection.end();
}

// Start program
mainMenu();


// !!! Future Development
// -combine the nextPrompt as a function that accepts a callback function!
// -no employees console.log for query results