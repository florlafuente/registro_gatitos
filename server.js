const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3000
const api = require('./api')
let config = require('config')

//db connection
mongoose.connect(config.DBHost)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

//don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test'){
  //use morgan to log at command line
  app.use(morgan('combined'))//'combined' outputs the Apache style LOGs 
}

//parse application/json and look for raw text                                        
app.use(bodyParser.json())                                     
app.use(bodyParser.urlencoded({extended: true}))             
app.use(bodyParser.text())                                    
app.use(bodyParser.json({ type: 'application/json'})) 


app.get('/', (req, res)=> res.json({message: "Arrived to api"}))

app.use('/api', api)

app.listen(port)
console.log('Listening on port' + port)
module.exports = app //for testing