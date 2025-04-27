const express=require('express')
const UserApp=express.Router()

UserApp.get('users',async (req,res)=>{
    //get the db object
    const userCollection=req.app.get('usersCollection')

    //GET THE BODY
    let usersList=await userCollection.find().toArray()
    //send the data to the user
    if(!usersList){
        res.send({message:"Users List Is Empty "})
    }
    else{
        res.send({message:"All users",payload:usersList})
    }

})

//exporting the product app 
module.exports=UserApp