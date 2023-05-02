const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tracker_db",
  });

  const department = [];
  const role = [];
  const employee = [];

  
  
  
