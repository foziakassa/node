const {readFileSync} = require('fs')
const first = readFileSync('./sth/big.txt' , 'utf8')
console.log(first)