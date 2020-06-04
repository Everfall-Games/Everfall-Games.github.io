const fs = require('fs')
const path = require('path')

// mail
const secrets = require('./secrets')

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: secrets.email.username, // generated ethereal user
    pass: secrets.email.password, // generated ethereal password
  },
})

const html = fs.readFileSync(path.resolve('public/email.html'), 'utf8')

const send = async ({
  name,
  email,
  subject,
  body,
} = {}) => {
  const info = await transporter.sendMail({
    from: `${name} <${secrets.email.username}>`,
    to: 'andrewarivers@gmail.com', //email.username
    subject,
    html: html
      .replace('{{ email }}', email)
      .replace('{{ name }}', name)
      .replace('{{ subject }}', subject)
      .replace('{{ body }}', body),
  })

  console.log(info)
}

send({
  name: 'Andres',
  email: 'andrewarivers@gmail.com',
  subject: 'I have a question.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo pulvinar, sagittis enim et, porta mauris. Nunc mi ex, elementum sed tempor eget, vestibulum at lacus.',
}).catch(console.error)


// api
const express = require('express')

const app = express()

app.use(require('body-parser'), express.json())

app.get('/mail', () => {

})
