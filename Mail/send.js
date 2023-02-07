const path = require("path")
const ejs = require('ejs')
const {transporter} = require('../Mail/mail')
const send = async({ username,email,shippingaddress}) =>{
const templatePath = path.join(__dirname,"..views/email.ejs")

const data = await ejs.renderFile(templatePath)
const mailOptions = {
    from: '"Daily Shop" advaitkr91@gmail.com',
    to: email,
    subject: `Order Confirmation`,
    html: data
  };
//await transporter.sendMail(mailOptions)
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ', info.response);

    // Save the email data to the database
    const emailData = {
      email,
      dateTime: new Date()
    };
    const Email = mongoose.model('Email', new mongoose.Schema({
      userEmail: String,
      dateTime: Date
    }));
    const email = new Email(emailData);
    email.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error saving email data to the database');
      }
      console.log('Email data saved to the database');

      // Return success response
      return res.send('Order confirmation email sent successfully');
    });
  });
}
module.exports = send