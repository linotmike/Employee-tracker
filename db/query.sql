USE tracker_db;
-- SELECT * FROM department
-- SELECT role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id FROM role;
--SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id;
--SELECT employee.role_id, first_name, last_name, role.title, department.name AS department, role.salary FROM employee JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee;
--SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;

--INSERT INTO department (name) VALUES (?)
--INSERT INTO role (title) VALUES (?);
--INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)
UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?
--UPDATE reviews SET review = ? WHERE id = ?`