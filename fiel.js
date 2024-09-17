const {readFileSync , writeFileSync} = require('fs')
const gread = readFileSync('./sth/tt.txt' , 'utf8')
console.log(gread)
 const write = writeFileSync('./sth/tt.txt' , `new one ${gread}`)

 console.log(write);

//  const final= readFileSync('.sth/tt.txt' , 'utf8')
//  console.log(final)

 const finalwrite =writeFileSync('./sth/tt.txt' , ` ${write}` , {flag:'a'})