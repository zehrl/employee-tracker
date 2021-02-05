// Dependencies
const connection = require('./connection');
const cTable = require("console.table");

// Query class to handle query requests
class Query {
    constructor() { }

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

    viewBudget(department) {
        connection.query(`SELECT SUM(roles.salary) as "Employee Budget for Engineering" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id WHERE departments.id = 1`, function (err, data) {
            if (err) throw err;

            // pull out budget sum from query and assign it to the budgetRaw variable
            const budgetRaw = data[0]["Employee Budget for Engineering"];

            // convert budgetRaw to formatted curency string
            const budgetStr = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseInt(budgetRaw));

            console.log(`\nBudget of ${department}: ${budgetStr}`)
        })
    }

    viewByManager() {
        connection.query(`SELECT A.id as "ID", A.first_name as "First Name", A.last_name as "Last Name" FROM employees A, employees B WHERE A.manager_id = B.id AND A.manager_id = 1`, function (err, data) {
            if (err) throw err;
            console.table("\nManager's Employees", data);
        })
    }

    insertDepartment(departmentName) {
        connection.query(`INSERT INTO departments(department_name) VALUES (?)`, [
            departmentName
        ], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

    insertRole(title, salary, departmentId) {
        connection.query(`INSERT INTO roles(title, salary, department_id)
        VALUES (?, ?, ?)`, [
            title, salary, departmentId 
        ], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

}

module.exports = Query;