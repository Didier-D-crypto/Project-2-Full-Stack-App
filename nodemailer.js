"use strict";
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: "malabobby223@gmail.com", // generated ethereal user
      pass: "1970swascool" // generated ethereal password
    }
  });
  // send mail with defined transport object
  transporter.sendMail({
    from: "malabobby223@gmail.com", // sender address
    to: "malabobby223@gmail.com", // list of receivers
    subject: "Hello ✔",
    html:  ` <p>You have a new contact request</p>
    //        <h3>Contact Details</h3>
    //        <ul>  
    //          <li>Name:Tom is cool</li>
    //          <li>Company: i love LA </li>
    //          <li>Email: ASDGFDSA@gmail.com</li>
    //          <li>Phone:215778900</li>
    //        </ul>
    //        <h3>Message</h3>
    //        <p>a yo</p>;`
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

}
main();