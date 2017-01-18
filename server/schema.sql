CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  message varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);
describe users;
describe messages;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/