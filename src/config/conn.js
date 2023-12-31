const mysql = require('mysql2');

const connection = mysql.createPool({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    database: 'funko_test',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
})

connection.getConnection((err, conn) => {
    if (err) {
        console.log('Error en la base de datos', err)
    } else {
        console.log('Conectado a la base de datos')
        conn.release();
    }
})

module.exports = {
    conn: connection.promise()
}