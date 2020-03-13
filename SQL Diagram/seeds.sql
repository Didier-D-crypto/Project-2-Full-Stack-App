DROP DATABASE IF EXISTS itinerary_db;
CREATE DATABASE itinerary_db;

USE itinerary_db;

CREATE TABLE Cities (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
  
);


CREATE TABLE Users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255)
);

CREATE TABLE Itineraries (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    start_date DATE,
    end_date DATE,
    city VARCHAR (255),
    food VARCHAR (255),
    activities VARCHAR (255),
    nighttime VARCHAR (255),
    reviews VARCHAR (255)  
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


INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id) VALUES ('2020/03/01', '2020/03/09', "San Fransico", "Lazy Bear", "Visit Fishermans Wharf","I was in San Fran for work and a fellow colleague of mines followed this exact itinerary durring our trip in the hopes of wooing me ( SPOLIER ALERT....It worked).", 1, 1);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id) VALUES ( '2020/01/20', '2020/01/25', "Las Vagas", "Kabuto-edomae Shusi","High Roller Observation Wheel", "EBC at Night", "When I booked a flight to Vagas for my 27th this came in soo clutch my guy.",2,2);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2020/03/07', '2020/03/12', "Atlanta","Babette's Cafe","North Georgia Wine Country Tour","Koo Koo Room", "5 stars love it !",3,3);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2020/02/02', '2020/02/10', "Nashville", "Rolf And Daughters", "Grand Ole Opry", "Bourbon Street Blues and Boogie Bar","Highly recommand",4,4);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/06/22','2019/06/30', "New Orleans","GW Fin's","Frenchmen Street Live Music Pub Crawl","The Spotted Cat Music Club", "Dude this is soo dope I love what you guys are doing.",5,5);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/05/05','2019/05/07', "New York", "Katz deli","Broadway play-Wicked","Evil Twin", "You the best.",6,6);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/08/20','2019/08/25', "Miami","Wart at the Rooftop","South beach/Vizcaya Museum","Clevelander", "We did this itinerary for a bachelorette party! Love the Clevelander, ask for Tony he hooked us up!.",7,7);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/09/03','2019/09/07', "Los Angeles","Grand Central Market","Griffith Observatory/Hollywood/Santa Monica Pier","Davey Wayne's/Perch/Élephante", "My homie Micky put me on to you guys, Thanks Micky!",8,8);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/10/13','2019/10/15', "Orlando","LeCellier Steakhouse/California Grill","Disney World/Universal Studios","The Courtesy/Aku Aku Tiki Bar", "My wife is a huge disney lover, i surprised her and took her here for her 40th birthday. We had a great time at The Courtesy, great music and drinks. .",9,9);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/02/13','2019/02/15', "Chicago","Fat Johnnies or Gene & Jude-Chicago hot dog/Giordano's for deep dish/RPM for fancy dinner","Wrigley Field/Tribune Tower/The Bean","Smart Bar/Tao Chicago", "Went here with my boyfriend for a Valentines Day, we wanted to try a chicago dog & pizza, we also went to RPM for valentines day dinner, it was amazing!!!! I would DEFINITELY go back to eat there.",10,10);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/06/24','2019/06/24', "DC","Food trucks/Emilie/Maydan","National Mall/The capital building/ Washington Monument/The Whitehouse","9:30 club/Nellie's Sports Bar/Service Bar", "Food trunks in DC are super underrated.",11,11);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/07/01','2019/07/06', "Boston","Craigie on Main/Omni Parker House","Fenway/cheers bar/Freedom Trail/Faneuil Hall Marketplace","Tunnel/Royale ", "I'm for sure coming back to Boston soon.",12,12);
INSERT INTO Itineraries (start_date, end_date,city,food,activities,nighttime,reviews,user_id,city_id ) VALUES ('2019/11/30','2019/12/04', "Philadelphia","Reading Terminal Market/Jim’s Cheesesteak or Geno’s/Steve Starr Restaurants ","Independence hall/Philly sports/Art Museum-Rocky steps/Eastern State Penitentiary ","Concourse/Assembly/Rumor/Stratus/Noto", "Came to Philadelphia to visit one of my college friends during winter break.Was so excited to see all of the history philly has to offer! Also great nightlife, we had so much fun at Assembly, amazing views.",13,13);