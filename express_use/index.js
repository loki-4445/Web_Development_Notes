const express=require('express')
const app=express()
const user=require('./API/user')

const port= 3000
app.use("/user",user)
app.get("/about",(req,res)=>{
    res.send("This is about page")  
})


app.listen(port,()=>{
    console.log(`Server Started on the ${port}`)
})