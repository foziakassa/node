const {readFileSync} = require('fs')
const http= require('http')

const read = readFileSync('./sth/big.txt' , 'utf8' , )
const server = http.createServer((req , res)=>{
    res.end(read)
})
server.listen(5000)