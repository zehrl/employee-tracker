
const connection = require("./db/connection")
const Query = require("./db/queries")

const query = new Query("create")
query.viewAllEmployees();
query.viewAllDepartments();
query.viewAllRoles();


// quit connection
// connection.end();