-- database/migration.sql

-- Create sales table
CREATE TABLE sales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL
);
