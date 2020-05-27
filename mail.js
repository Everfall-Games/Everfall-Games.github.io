const { email } = require('./secrets')

// mail
const nodemailer = require('nodemailer')

const send = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email.username, // generated ethereal user
      pass: email.password, // generated ethereal password
    },
  })
  
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `Contact <${email.username}>`, // sender address
    to: email.username, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  })

  console.log(info)
}

send().catch(console.error)


// api
const express = require('express')

const app = express()

app.use(require('body-parser'), express.json())

app.get('/mail', () => {

})
