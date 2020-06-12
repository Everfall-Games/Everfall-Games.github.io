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
    to: secrets.email.username,
    subject,
    html: html
      .replace('{{ email }}', email)
      .replace('{{ name }}', name)
      .replace('{{ subject }}', subject)
      .replace('{{ body }}', body),
  })

  console.log(info)
}

// api
const express = require('express')

const app = express()

app.use(require('body-parser').json(), express.json())

app.post('/mail', async (req, res) => {
  const {
    name, 
    email, 
    subject, 
    body, 
  } = req.body

  if (!name) return res.status(400).send('Please provide a name')
  if (!email) return res.status(400).send('Please provide a email')
  if (!subject) return res.status(400).send('Please provide a subject')
  if (!body) return res.status(400).send('Please provide a body')

  console.log('New email', { 
    name, 
    email, 
    subject, 
    body,
  })

  try {
    // const result = await send({
    //   name,
    //   email,
    //   subject,
    //   body,
    // })

    // console.log(result)
  } catch (error) {
    console.error(error)

    return res.status(500).send('Internal server error.')
  }

  res.end()
})

app.listen(44434, () => {
  console.log('Mail server listening on port 44434.')
})
