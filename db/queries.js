// Dependencies
const connection = require('./connection');
const cTable = require("console.table");

// TO DO
// add promises to each query


// Query class to handle query requests
class Query {
    constructor() { }

    // View departments, roles, and employees
    viewAllEmployees() {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT id as "ID", first_name as "First Name", last_name as "Last Name" FROM employees`, function (err, data) {
                if (err) {

                    throw err
                } else {
                    console.table("\nAll Employees", data);

                    resolve("Resolved")
                };

            })

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

    viewEmployeesByDepartment(departmentId) {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT employees.first_name as "First Name", employees.last_name as "Last Name" FROM departments LEFT JOIN roles ON departments.id = roles.department_id LEFT JOIN employees ON roles.id = employees.role_id WHERE department_id = ?`, [
                departmentId
            ], function (err, data) {
                if (err) {

                    throw err

                } else {

                    if (data.length === 0) {

                        console.log("\nThere are no employees in that department.")

                    } else {

                        console.table("\nEmployees", data);

                    }

                    resolve(data)

                };

            })
        })
    }

    // Return all departments as an objct
    getAllDepartments() {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM departments`, function (err, data) {
                if (err) {

                    throw err
                } else {
                    // console.table("\nAll Employees", data);

                    resolve(data)
                };

            })

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

    // Add departments, roles, and employees
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

    insertEmployee(firstName, lastName, roleId, managerId) {
        connection.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [
            firstName, lastName, roleId, managerId
        ], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

    // Update employee roles & managers
    updateRole(roleId, newTitle, newSalary, newDepartmentId) {
        connection.query(`UPDATE roles SET title = ?, salary = ?, department_id = ? WHERE id = ?;`, [
            newTitle, newSalary, newDepartmentId, roleId
        ], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

    // Updates the manager of an employee
    updateManager(employeeId, newManagerId) {
        connection.query(`UPDATE employees SET manager_id = ? WHERE id = ?;`, [
            newManagerId, employeeId
        ], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

    // Delete departments, roles, and employees
    deleteDepartment(departmentId) {
        connection.query(`DELETE FROM departments WHERE id = ?;`, [
            departmentId
        ], function (err, data) {
            if (err) throw err;
            console.log("Deleted departement. Data: ", data);
        })
    }

    deleteRole(roleId) {
        connection.query(`DELETE FROM roles WHERE id = ?;`, [
            roleId
        ], function (err, data) {
            if (err) throw err;
            console.log("Deleted role. Data: ", data);
        })
    }

    deleteEmployee(employeeId) {
        connection.query(`DELETE FROM employees WHERE id = ?;`, [
            employeeId
        ], function (err, data) {
            if (err) throw err;
            console.log("Deleted employee. Data: ", data);
        })
    }

}

module.exports = Query;