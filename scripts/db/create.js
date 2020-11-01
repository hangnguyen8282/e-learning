const mysql = require('mysql');  

const dbName = 'elearning'

const connection = mysql.createConnection({  
  host: '127.0.0.1',  
  user: 'root',  
  password: ''  
});  

connection.connect((err) => {
  if (err) throw err;
  connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
    
    if (err && err.code === "ER_DB_CREATE_EXISTS") {
      console.log('Db already created');
      process.exit(0);
    } 
    
    if (err) {
      throw err;
    }

    console.log('Created db');
    process.exit(0);
  })
})