// Requiring our models and passport as we've configured it
const nodemailer = require("nodemailer");

var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  //if you want login for your app, you can setup with code below
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/send", (req, res) => {
    console.log(req.body)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "malabobby223@gmail.com", // generated ethereal user
        pass: "1970swascool" // generated ethereal password
      }
    });

    const start = req.body.start_date;

    // console.log("_____", mailOptions);
  transporter.sendMail({
    from: "malabobby223@gmail.com", // sender address
    to: "malabobby223@gmail.com", // list of receivers
    subject: "Your Itinerary",
    html: 
    
    // ` <p>You have a new contact request</p>
    // //        <h3>Contact Details</h3>
    // //        <ul>  
    // //          <li>Start Date: ${req.body.start_date}</li>
    // //          <li>End Date: ${req.body.end_date}</li>
    // //          <li>City: ${req.body.city}</li>
    // //          <li>Food: ${req.body.food}</li>
    // //          <li>Activities: ${req.body.activities}</li>
    // //          <li>Nighttime: ${req.body.nighttime}</li>
    // //          <li>Review: ${req.body.reviews}</li>
    // //        </ul>
    // //        <h3>Message</h3>
    // //        <p>a yo</p>;`

`  <head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>Your Itinerary</title>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
/>
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Saira&display=swap"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald"
  rel="stylesheet"
/>
<script
  defer
  src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
></script>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"
/>
</head>
<body>
 
<div class="container">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title" style="font-size: 25px; letter-spacing: 5px;">
        Your Itinerary For Your Trip To:
      </p>
      <p class="title" style="font-size: 25px; letter-spacing: 5px;">
        <i class="fas fa-map-marker-alt"></i>
        <!-- **** GRAB CITY FROM ITINERARY FORM *** -->
        ${req.body.city}
      </p>
      <!-- **** GRAB START DATE AND END DATE **** -->
      <p class="subtitle">
        <span class="start-date">${req.body.start_date}</span>-<span class="end-date"
          >${req.body.end_date}</span
        >
      </p>
      <p class="card-subhead">Food:</p>
      <!--  **** GRAB FOOD FROM FORM **** -->
      ${req.body.food}
      <p class="card-subhead">Activites:</p>
      <!-- GRAB ACTIVITIES FROM FORM -->
      ${req.body.activities}
      <p class="card-subhead">Nightlife:</p>
      <!-- GRAB NIGHT LIFE FROM FORM -->
      ${req.body.nighttime}
      <p class="card-subhead">Reviews:</p>
      <p>
        <!-- IF WE WANT GRAB REVIEWS IF NOT LEAVE OFF OF NODEMAILER -->
        ${req.body.reviews}
      </p>
      <br />
    </article>
  </div>
</div>`




    
  }, function (err) {
      if (err) {
          console.log(err)
      } else {
        console.log("--------------");
        console.log("--------------");
        console.log("--------------");
        console.log("--------------");
      }
  });
  })

  /* Added 3/10/19 */

  /* Finding All Users */
  app.get("/api/users", (req, res) => {
    db.User.findAll({}).then(dbPost => {
      res.json(dbPost);
    });
  });

  /* Finding Users By Id and Itineraries */
  app.get("/api/users/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      //include: [db.Itineraries]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  /* Posting the User's Name */
  // app.post("/api/users", (req, res) => {
  //     db.User.create(req.body).then(dbUser => {
  //     res.json(dbUser);
  // });
  // });

  /* Deleting a User */
  // app.delete("/api/users/:id", (req, res) => {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(dbUser => {
  //     res.json(dbUser);
  //   });
  // });

  /* Code For itinerary-routes.js */

  // Check the user_id + userId difference!!!!
  // Getting all of the Itineraries: note that this uses "user_id" + "userId"

  app.get("/api/itineraries", (req, res) => {
    var query = {};
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Itineraries.findAll({
      where: query,
     // include: [db.User]
    }).then(dbItin => {
      res.json(dbItin);
    });
  });

  // route for retrieving a single Itinerary

  app.get("/api/itineraries/:id", (req, res) => {
    db.Itineraries.findOne({
      where: {
        id: req.params.id
      },
    //  include: [db.User]
    }).then(dbItin => {
      res.json(dbItin);
    });
  });

  // Post route for saving Itineraries
  // was: itineraries; now: newItin
  app.post("/api/itineraries", (req, res) => {
    db.Itineraries.create(req.body).then(dbItin => {
      res.json(dbItin);
    });
  });

  // DELETE route for deleting Itineraries
  app.delete("/api/itineraries/:id", (req, res) => {
    db.Itineraries.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbItin => {
      res.json(dbItin);
    });
  });

  // PUT route for updating Itineraries
  app.put("api/itineraries", (req, res) => {
    db.Itineraries.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(dbItin => {
        res.json(dbItin)
      });
  });

  /* Cities API-Routes */

  /* API Routes For Cities:
  
  Routes Attached To User */

  app.get("/api/cities", (req, res) => {
    var query = {};
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Cities.findAll({
      where: query,
    //  include: [db.Itineraries]
    }).then(dbItin => {
      res.json(dbItin);
    });
  });

  // route for retrieving a single City
  app.get("/api/cities/:id", (req, res) => {
    db.Cities.findOne({
      where: {
        id: req.params.id
      },
     // include: [db.Itineraries]
    }).then(dbItin => {
      res.json(dbItin);
    });
  });

  // Post route for saving City
  // app.post('api/cities', (req, res) => {
  //   db.Cities.create(req.body).then(dbItin => {
  //     res.json(dbItin);
  //   });
  // });

  // DELETE route for deleting City
  // app.delete("api/cities/:id", (req, res) => {
  //   db.Cities.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(dbItin => {
  //     res.json(dbItin);
  //   });
  // });

  /* Finding All Itineraries */
  // app.get("/api/itineraries", (req, res) =>{
  //     db.Itineraries.findAll({}).then(dbItin => {
  //       res.json(dbItin);
  //     });
  //   });

  /* Finding All Cities */
  /* Finding Users and Including Itineraries */
  // app.get("/api/users", (req,res) => {
  //   db.User.findAll({
  //     include: [db.Itineraries]
  //   }).then(dbUsers => {
  //     console.log(dbUsers);
  //   });
  // });
};
