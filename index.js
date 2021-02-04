const connection = require("./connection")
const Query = require("./db/queries")

const query = new Query("create")
query.test()


// quit connection
// connection.end();