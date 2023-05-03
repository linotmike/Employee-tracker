const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tracker_db",
});

// const department = [];
// const role = [];
// const employee = [];

const questionsStart = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((ans) => {
      // console.log(ans);
      switch (ans.start) {
        case "view all departments":
          viewDepartment();
          break;
        case "view all roles":
          viewRoles();
          break;
        case "view all employees":
          viewEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployee();
          break;
        case "quit":
          db.end();
          break;
      }
    });
};
const viewDepartment = () => {
  db.query(`SELECT * FROM department`, (err, data) => {
    if (err) {
      throw err;
    }
    console.table(data);
    questionsStart();
  });
};

const viewRoles = () => {
  db.query(
    `SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id`,
    (err, data) => {
      if (err) {
        throw err;
      }
      console.table(data);
      questionsStart();
    }
  );
};

const viewEmployees = () => {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;`,
    (err, data) => {
      if (err) {
        throw err;
      }
      console.table(data);
      questionsStart();
    }
  );
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department?",
      },
    ])
    .then((ans) => {
      db.query(
        `INSERT INTO department (name) VALUES (?)`,
        [ans.department],
        (err, data) => {
          if (err) {
            throw err;
          } else {
            console.log("Department was added sucessfully");
          }

          questionsStart();
        }
      );
    });
  }
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "What is the name of the role?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of this role?",
      },
      {
        name: "department",
        type: "input",
        message: "What is the department id?",
      },
    ])
    .then((ans) => {
      db.query(
        `INSERT INTO role (title, salary, department_id) VALUES (?,?,?) `,
        [ans.role, ans.salary, ans.department],
        (err, data) => {
          if (err) {
            throw err;
          } else {
            console.log("Added new role");
          }

          questionsStart();
        }
      );
    });
};
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first",
        type: "input",
        message: "What is the first name?",
      },
      {
        name: "last",
        type: "input",
        message: "What is the last name?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the role id?",
      },
      {
        name: "manager",
        type: "input",
        message: "What is the manager's employee id?",
      },
    ])
    .then((ans) => {
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,
        [ans.first, ans.last, ans.role, ans.manager],
        (err, data) => {
          if (err) {
            throw err;
          } else {
            console.log("Added new employee");
          }

          questionsStart();
        }
      );
    });
};
const updateEmployee = () => {
  db.query(
    `UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?`,
    (err, data) => {
      if (err) {
        throw err;
      }
      console.table(data);
      questionsStart();
    }
  );
};

questionsStart();
