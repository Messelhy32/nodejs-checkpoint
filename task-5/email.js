const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILME,
    pass: process.env.PASS,
  },
});
var mailOptions = {
  from: process.env.EMAILME,
  to: process.env.EMAILYOU,
  subject: "Test Node Mailer",
  text: "testing",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Email Sent: " + info.response);
  }
});
