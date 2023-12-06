//const http = require('http')

const express = require('express')
const hostname = '0.0.0.0'
const port = 3000

/*const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('SmartReserve\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})*/

const app = module.exports = express()

app.use(express.static(__dirname+'/'))
app.use(express.static('/build'))

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})