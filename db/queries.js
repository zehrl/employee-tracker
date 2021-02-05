// Dependencies
const connection = require('./connection');
const cTable = require("console.table");

// Query class to handle query requests
class Query {
    constructor(){}
    
    // constructor(crud) {
    //     if (
    //         (crud !== "create") &&
    //         (crud !== "read") &&
    //         (crud !== "update") &&
    //         (crud !== "delete")
    //     ) {
    //         throw new Error(`crud property must = create, read, update, or delete.`);
    //     }

    //     this.crud = crud;

    // }

    viewAllEmployees() {
        connection.query(`SELECT id as "ID", first_name as "First Name", last_name as "Last Name" FROM employees`, function (err, data) {
            if (err) throw err;
            console.table("\nAll Employees", data);
        })
    }

    viewAllDepartments() {
        connection.query(`SELECT id as "ID", department_name as "Department Name" FROM departments`, function (err, data) {
            if (err) throw err;
            console.table("\nAll Departments", data);
        })
    }

    viewAllRoles() {
        connection.query(`SELECT id as "ID", title as "Job Title", salary as "Salary" FROM roles`, function (err, data) {
            if (err) throw err;
            console.table("\nAll Roles", data);
        })
    }

    // viewBudget(department) {
        
    // }

}

module.exports = Query;