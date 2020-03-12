// Requiring necessary npm packages
 require('dotenv').config()
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
//const bodyParser = require("bodyParser");
//const path = require("path");
//const exphbs = require("express-handlebars");
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");
/* Added to test Association */
const User = require("./models").User;
const Itineraries = require("./models").Itineraries;
const Cities = require("./models").Cities;
const mailer = require('./nodemailer');


// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});