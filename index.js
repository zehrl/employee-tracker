
const connection = require("./db/connection")
const Query = require("./db/queries")

const query = new Query();



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

// Update employee managers
query.updateManager();

// X - View employees by manager
// query.viewByManager();

// Delete departments, roles, and employees
// query.deleteDepartment();
// query.deleteRole();
// query.deleteEmployee();

// X - View the total utilized budget of a department -- ie the combined salaries of all employees in that department
// query.viewBudget("Engineering");

// quit connection
// connection.end();