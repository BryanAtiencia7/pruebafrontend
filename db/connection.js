const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '44.206.255.114',
    user: 'distri',
    password: '12345',
    database: 'users'
});

connection.connect((err) => {
    if (err) {
        console.error('Error to connect MariaDB:', err.message);
        return;
    }
    console.log('Database Successfully Connected');
});

module.exports = connection;