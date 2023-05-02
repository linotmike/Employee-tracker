use tracker_db;

INSERT INTO department (name) VALUES
("Engineering"),
("Finance"),
("Legal"),
("Sales"),
("Pilot");


INSERT INTO role (title, salary, department_id) VALUES
("Electrical engineer", 90000, 1),
("Mechanical engineer", 95000, 1),
("Software engineer", 190000, 1),
("Investment banker", 80000, 2),
("Financial analyst", 70000, 2),
("Accountant", 90000, 2),
("Lawyer", 150000, 3),
("Legal team lead", 80000, 3),
("Senior lawyer", 90000, 3),
("Sales lead", 120000, 4),
("Investor", 40000, 4),
("sales agent", 90000, 4),
("Private pilot", 90000, 5),
("Co pilot", 65000, 5),
("Captain", 85000, 5);

INSERT INTO employee (first_name, last_name, role_id) VALUES
("Jhonny", "Mike" , 1),
("Lino", "Haile" , 2),
("Andrew", "Michael" , 6),
("Tesfa", "Werke" , 3),
("Bamlak", "Woods" , 9),
("Eden", "Molla" , 8),
("Jackson", "Mj" , 1),
("Tyga", "Dolche" , 10);

UPDATE employee SET manager_id = 3 WHERE id = 2;
UPDATE employee SET manager_id = 2 WHERE id = 8;
UPDATE employee SET manager_id = 1 WHERE id = 3;
