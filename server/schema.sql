
CREATE DATABASE if not exists chat;

USE chat;

CREATE TABLE if not exists rooms (
  id int not null auto_increment,
  -- id primary key integer auto_increment,
  room_name varchar(100),
  primary key (id)
);

CREATE TABLE if not exists user (
  id int not null auto_increment,
  -- id primary key integer auto_increment,
  user_name varchar(100) not null,
  primary key (id)
);



CREATE TABLE if not exists messages (
  /* Describe your table here.*/
  id int not null auto_increment,
  -- id primary key integer auto_increment,
  user_id integer,
  room_id integer,
  message_text varchar(100) not null,
  primary key (id),
  foreign key (user_id) references user(id),
  foreign key (room_id) references rooms(id)
);

describe rooms;
describe user;
describe messages;

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

