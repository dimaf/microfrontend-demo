
const express = require("express")
const path = require("path")
const app = express()
var cors = require('cors')
app.use(cors())
app.use('/static',express.static('dist'))

app.listen(8080, () => {
  console.log("Web server started",process.cwd())
})