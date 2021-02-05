
const connection = require("./db/connection")
const Query = require("./db/queries")

const query = new Query();

// query.viewAllEmployees();
// query.viewAllDepartments();
// query.viewAllRoles();

query.viewBudget("Engineering");
// quit connection
// connection.end();