### Schema

CREATE DATABASE bobjb2q2cw1wuplf;
USE bobjb2q2cw1wuplf;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
