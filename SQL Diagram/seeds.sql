DROP DATABASE IF EXISTS itinerary_db;
CREATE DATABASE itinerary_db;

USE itinerary_db;

CREATE TABLE Cities (
    id INT UNSIGNED AUTO_INCREMENT ,
    name VARCHAR(255),
  primary key (id)
);


CREATE TABLE Users (
    id INT UNSIGNED AUTO_INCREMENT ,
    email VARCHAR(255),
	primary key (id)
);

CREATE TABLE Itineraries (
    id INT UNSIGNED AUTO_INCREMENT,
    start_date VARCHAR (255),
    end_date VARCHAR (255),
    city VARCHAR (255),
    food VARCHAR (255),
    
    activities VARCHAR (255),
    nighttime VARCHAR (255),
    reviews VARCHAR (255),
    primary key (id)
);



INSERT INTO Cities (id, name ) VALUES (1,"San Fransico ");
INSERT INTO Cities (id, name ) VALUES (2, "Las Vagas ");
INSERT INTO Cities (id, name ) VALUES (3, "Atlanta");
INSERT INTO Cities (id, name ) VALUES (4, "Nashville ");
INSERT INTO Cities (id, name ) VALUES (5, "New Orleans");


INSERT INTO Users (id, email) VALUES (1,"sallysam@gmail.com");
INSERT INTO Users (id, email) VALUES (2, "roysmith@gmil.com");
INSERT INTO Users (id, email) VALUES (3, "tabttab@hotmail.com");
INSERT INTO Users (id, email) VALUES (4, "bethj@yahoo.com");
INSERT INTO Users (id, email) VALUES (5, "layseya@gmail.com");


INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews) VALUES ('2020/03/01', '2020/03/09', "San Fransico", "Lazy Bear", "Visit Fishermans Wharf","I was in San Fran for work and a fellow colleague of mines followed this exact itinerary durring our trip in the hopes of wooing me ( SPOLIER ALERT....It worked).", 1);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews) VALUES ( '2020/01/20', '2020/01/25', "Las Vagas", "Kabuto-edomae Shusi","High Roller Observation Wheel", "EBC at Night", "When I booked a flight to Vagas for my 27th this came in soo clutch my guy.",2);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews) VALUES ('2020/03/07', '2020/03/12', "Atlanta","Babette's Cafe","North Georgia Wine Country Tour","Koo Koo Room", "5 stars love it !",3);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews) VALUES ('2020/02/02', '2020/02/10', "Nashville", "Rolf And Daughters", "Grand Ole Opry", "Bourbon Street Blues and Boogie Bar","Highly recommand",4);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews) VALUES ('2019/06/22','2019/06/30', "New Orleans","GW Fin's","Frenchmen Street Live Music Pub Crawl","The Spotted Cat Music Club", "Dude this is soo dope I love what you guys are doing.",5);
 