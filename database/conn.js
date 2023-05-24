const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'latihan_crud_mysql',
});

connection.connect((err) => {
    if (!!err) {
        console.log(err);
    } else {
        console.log('koneksi ke MySQL berhasil');
    }
});

module.exports = connection;