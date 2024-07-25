const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clientes'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

const Cliente = {};

Cliente.getAll = (callback) => {
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        callback(null, results);
    });
};

Cliente.getById = (id, callback) => {
    connection.query('SELECT * FROM clientes WHERE idCliente = ?', [id], (err, results) => {
        if (err) throw err;
        callback(null, results[0]);
    });
};

Cliente.create = (data, callback) => {
    connection.query('INSERT INTO clientes SET ?', data, (err, results) => {
        if (err) throw err;
        callback(null, results.insertId);
    });
};

Cliente.update = (id, data, callback) => {
    connection.query('UPDATE clientes SET ? WHERE idCliente = ?', [data, id], (err, results) => {
        if (err) throw err;
        callback(null, results);
    });
};

Cliente.delete = (id, callback) => {
    connection.query('DELETE FROM clientes WHERE idCliente = ?', [id], (err, results) => {
        if (err) throw err;
        callback(null, results);
    });
};

module.exports = Cliente;
