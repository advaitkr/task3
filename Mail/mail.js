const nodemailer = require("nodemailer");


  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

  transporter.verify((error,success)=>{

    if(error){
        console.log(error)
    }
    else{
        console.log("mail server is running...")
    }

  })
 
  module.exports = transporter;

