const mysql = require('mysql2')

DB_PARAMS = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}

const connection = mysql.createConnection({ ...DB_PARAMS, database: "acore_auth" });
const connectionChar = mysql.createConnection({ ...DB_PARAMS, database: "acore_characters" });

module.exports = {
  connection: connection,
  connectionChar: connectionChar,
};
