DROP DATABASE IF EXISTS blogpost_db;
CREATE DATABASE blogpost_db;
USE blogpost_db;

CREATE TABLE authors(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    authorId INTEGER(11),
    posts VARCHAR(3000),
    PRIMARY KEY (id)
);