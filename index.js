
const connection = require("./db/connection")
const Query = require("./db/queries")

const query = new Query();



// Add departments, roles, employees
// query.insertDepartment("HSE");
// query.insertRole("Health & Safety Engineer 1", "55000", "5");
// query.insertEmployee("Kelli", "Kaiser", "7", "1");

// View departments, roles, employees
// query.viewAllEmployees();
// query.viewAllDepartments();
// query.viewAllRoles();

// Update employee roles

// Update employee managers


// View employees by manager
// query.viewByManager();

// Delete departments, roles, and employees


// View the total utilized budget of a department -- ie the combined salaries of all employees in that department
// query.viewBudget("Engineering");

// quit connection
// connection.end();