
const express = require('express')
const next = require('next')
const api = require('./api')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mongoose = require('mongoose')
let config = require('config')


//db connection

var db = mongoose.connect('mongodb://sarasa:sarasa123@ds135547.mlab.com:35547/cats', function(error){
    if(err) throw(err);
    console.log("connection successful");
}) 

app.prepare()
.then(() => {
  const server = express()

  server.use(express.json())

  server.use('/api', api)

  server.get('*', handle)

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})



