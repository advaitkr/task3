const nodemailer = require("nodemailer");


  // const transporter = nodemailer.createTransport({
  //   host:"sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   secure: false,
  //   auth: {
  //     user:process.env.user,
  //     pass:process.env.pass
  //   }
  // });
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "957b21f9ed81b5",
      pass: "438335d8d9748e"
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

