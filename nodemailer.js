/* Bringing in Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
var PORT = process.env.PORT || 8080;

// Creating view engine, using handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Letting express know to use css directory for styling: (static folder)
app.use('/public', express.static(path.join(__dirname, 'public')));

// app routes
app.get("/", (req, res) => {
    res.render('contact');
    // res.send("hello");
});

app.post('/send', (req, res) => {
   // console.log(req.body);
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.YOURDOMAIN.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'YOUREMAIL', // generated ethereal user
            pass: 'YOURPASSWORD'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <your@email.com>', // sender address
        to: 'RECEIVEREMAILS', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', { msg: 'Email has been sent' });
        
    });
});

// server Port
// app.listen(PORT, () => console.log("App listening on PORT " + PORT));





