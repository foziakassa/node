const http = require('http')

const server = http.createServer((req , res)=>{
    if(req.url=='/'){
        res.end('welcome to home page ') 
    }
    if(req.url=='/about'){
        res.end('you are to late to know about me ') 
    }
    res.end(`<h1>page note find </h1> <a href="/">go back</a>`)
    
})
server.listen(5000)
