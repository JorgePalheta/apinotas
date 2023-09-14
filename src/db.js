const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("Conectado ao BD");
});

module.exports = connection;
