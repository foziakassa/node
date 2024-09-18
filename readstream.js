const {createReadStream } = require('fs')
const stream = createReadStream('./sth/big.txt' , {highWaterMark:90000})
stream.on('data' , (data)=>{
    console.log(data)
})