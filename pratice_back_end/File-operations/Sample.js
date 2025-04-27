const fs=require('fs')
//reading the data from the file
fs.readFile('./dairy.txt',(err,data)=>{
if(err){
    console.error(err)
}
else{
    console.log(data.toString())
}
})
//writing the data from file
//fs.writeFile('./dairy.txt',"HI everyone this lokeshquuuuuuuuuuuuu",(err)=>{
 //   if(err){
  //      console.error(err)
   // }
   // else{
    //    console.log("Successfully written")
   // }
//})


//appending thecoontent
fs.appendFile('./dairy.txt',"jsdfjl; jja;j lsdjlj; dl daff",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("appending Successful")
    }
})
