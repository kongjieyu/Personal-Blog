const http = require('http')
const PORT = 8000
const serverHandle = require('../app.js')


const server = http.createServer(serverHandle)

server.listen(8000)
console.log('Ok, listen 8000')