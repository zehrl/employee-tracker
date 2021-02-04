-- Seed data for developmental purposes

-- departments table
INSERT INTO departments (department_name)
VALUES
("Engineering"),
("Quality Assurance"),
("Planning"),
("Operations");

-- roles table
INSERT INTO roles (title, salary, department_id)
VALUES
("Design Engineer 1", 70000, 1),
("Design Engineer 2", 85000, 1),
("Design Engineer 3", 110000, 1),
("Engineering Manager", 130000, 1),
("Engineer Fellow", 150000, 1);

-- employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Anabella", "Squires", 4, NULL),
("Gordon", "Mathews", 1, 1),
("Rueben", "Allison", 1, 1),
("Lorelei", "Duggan", 1, 1),
("Sofija", "Macfarlane", 2, 1),
("Shayaan", "Lloyd", 2, 1),
("Deb", "Hall", 3, 1),
("Cory", "Kline", 5, 1);
