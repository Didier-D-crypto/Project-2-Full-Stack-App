const mySql = require('mysql');
const util = require("util");

const connection = mySql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yourRootPassword',
    database : 'itinerary_db'
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;