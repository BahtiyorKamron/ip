const express = require('express')
const fs = require('fs')
const path = require('path')
const requestIp = require('request-ip')
const port = process.env.PORT || 1800
const middlware = require('./modules/getIp')
const app = express()

app.use(express.static(path.join(process.cwd(),'views')))
app.use(middlware)
app.listen(port,()=>console.log(port))