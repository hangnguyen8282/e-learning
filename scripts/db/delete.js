const mysql = require('mysql');  

const dbName = 'elearning'

const connection = mysql.createConnection({  
  host: '127.0.0.1',  
  user: 'root',  
  password: ''  
});  

connection.connect((err) => {
  if (err) throw err;
  connection.query(`DROP SCHEMA ${dbName}`, (err, result) => {
    if (err && err.code === "ER_DB_DROP_EXISTS") {
      console.log("Already deleted");
      process.exit(0);
    }

    if (err) throw err;

    console.log('Deleted db');
    process.exit(0);
  })
})