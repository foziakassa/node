const {ReadStream } = require('fs')
const stream = ReadStream('./sth/big.txt')
stream.on('data' , (data)=>{
    console.log(data)
})