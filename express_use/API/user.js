const express=require("express")
const app =express()
app.get('/:userId',(req,res)=>{
    const userId=req.params.userId
    console.log(`The userId is :${userId}`)
})
app.get('/:userId/profile/:profileName',(req,res)=>{
    let x=req.params
    console.log(`The use id is : ${x.userId} and the prfoile is : ${x.profileName}`)

})
module.exports=app