CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE pages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_alias VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    meta_tags TEXT,
    sections JSON
);

CREATE TABLE action_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);