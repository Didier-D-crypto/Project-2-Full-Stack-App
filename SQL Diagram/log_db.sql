CREATE DATABASE log_db;

USE log_db;

CREATE TABLE panda
(
	id int NOT NULL ,
	panda_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE panda
(
	id int NOT NULL ,
	panda_name varchar(255) NOT NULL,
	panda_type varchar(255) NOT NULL,
	panda_cost int NOT NULL,
	panda_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (panda_id) REFERENCES panda(id)
);
