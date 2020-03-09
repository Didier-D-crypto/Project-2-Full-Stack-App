// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  
  /* Sign-Up Is Now Log-In Path: It says "Or log in here" at bottome of page */
  
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

/* login.html was deleted.  It's display is on "signup.html", though. */

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  /* This path was changed to main.html */ 
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  /* Added 3/9/19 below: 3 Files */

  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  /* This path used to be members.html */

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  /* This path used to be members.html */

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
};

/* "/members" brings me to login page. */
/* "/form" brings me to form page. */
/* "/index" brings me to sign-up page. */
/* "/main" brings me to city-search/Itineraries page */

/* "/signin" brings user to Error Page */
/* "/login" shows a 'no such directory' message */


