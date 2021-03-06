const express = require(`express`)
const { join } = require(`path`)
const app = express()

app.use(express.static(join(__dirname, `/public`)))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require(`./routes`)(app)

require(`./config`).connect(e => e ? console.log(e) : app.listen(3000, console.log(`hi`)))