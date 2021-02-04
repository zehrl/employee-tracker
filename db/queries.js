const connection = require('../connection')

class Query {
    constructor(crud) {
        if (
            (crud !== "create") &&
            (crud !== "read") &&
            (crud !== "update") &&
            (crud !== "delete")
        ) {
            throw new Error(`crud property must = create, read, update, or delete.`);
        }

        this.crud = crud;

    }

    test() {
        connection.query(`SELECT * FROM employees`, function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

}

module.exports = Query;