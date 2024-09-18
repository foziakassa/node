const {writeFileSync} = require('fs')
for(i=0 ; i<=100000 ; i++){
    writeFileSync('./sth/big.txt' , 'hello there : big file ' , {flag:'a'})
}