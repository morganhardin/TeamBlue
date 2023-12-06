const express = require('express')
const hostname = '0.0.0.0'
const port = 3000

const app = module.exports = express()

app.use(express.static(__dirname+'/'))
app.use(express.static('/build'))

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})