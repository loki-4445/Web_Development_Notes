//importing the fss module
const { Console } = require('console');
const fs=require('fs');
//reading the file
//reading the file assyncrchonursly
//fs.readFile('./Sample.txt',(err,data)=>{
 //   if(err){
   //     console.log("the error is : ",err)
    //}
    //else{
      //  console.log(data.toString())
   // }
//})

//console.log("hi namasthe")

fs.appendFile('./Sample.txt',' i am brave',(err)=>{
    if(err){
        console.log("Eroor is :",err)
    }
    else{
        console.log("succesfully written")
    }

})