// import {readFile} from 'fs'
const {readFile , writeFile} = require('fs')
const getText=(path)=>{
   return new  Promise((resolve ,reject)=>{

    readFile(path , 'utf8' , (err , result)=>{
        if(err){
            reject(err)
        }
        resolve(result)
    })
   })

}
getText('./sth/tt.txt')
.then((result)=>{console.log(result)})
.catch((err)=>{console.log(err)})

const Try=async()=>{
    try{
        const first = await getText('./sth/tt.txt')
    const second = await getText('./sth/second.txt')
    console.log(first , second)



    }catch(error)
    {
        console.log(error)

    }
    

}
Try()