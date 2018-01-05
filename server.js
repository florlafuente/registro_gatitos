const express = require('express')
const next = require('next')
const api = require('./api')

const mongoose = require('mongoose')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
let config = require('config')

const app = next({ dev })
const handle = app.getRequestHandler()

//db connection
mongoose.connect(config.DBHost)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))


app.prepare()
.then(() => {
  const server = express()
  server.use(express.json())
  server.use('/api', api)
  server.get('*', handle)
  server.listen(port, (err)=>{
    if (err) throw err
    console.log('Listening on port' + port)
  })
})

module.exports = app //for testing