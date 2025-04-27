const exp=require('express')
const app=exp()
app.use(exp.json())

app.listen(4000,()=>{
    console.log("SERVER Started")
})

let usersList=[{
    id:1,
    name:"lokesh",
    class:"2 nd Btech"
},
{
    id:2,
    name:"chaitu",
    class:"3 rd Btech"
},
{
    id:3,
    name:"kalki",
    class:"4 th Btech"
}
]


//get routing
app.get('/users',(req,res)=>{
    res.send({message:"Users LIst",payload:usersList})
})

//get routing based on url 
app.get('/users/:name',(req,res)=>{
    let nameByUrl=String(req.params.name)
    let UserByUrl=usersList.find((user)=>nameByUrl===user.name)
    if(UserByUrl===undefined){
        res.send({message:"No user Found"})
    }
    else{
        res.send({message:"User Found",payload:UserByUrl})
    }
})

//post routing
app.post('/users',(req,res)=>{
    let newUser=req.body
    let newUserName=newUser.name
    let userFound=usersList.find((user)=>newUserName===user.name)
    if(userFound){
        res.send({message:"User already exits."})
    }
    else{
        usersList.push(newUser)
        res.send({message:"User added Successfully."})
    }
})


//updating(put) the data
app.put('/users',(req,res)=>{
let modifiedUser=req.body
let index=usersList.findIndex((user)=>modifiedUser.id===user.id)
if(index==-1){
res.send({mesaage:"No user found to modify the data"})
}
else{
   if( JSON.stringify(usersList[index])===JSON.stringify(modifiedUser))
{res.send({mesaage:"No changes made"})}
   else{
    usersList[index]=modifiedUser
    res.send({message:"Updated Succesffully"})
}
}

})


//delete the data
    app.delete('/users/:id',(req,res)=>{
    let UserId=Number(req.params.id);
    let UserIndex=usersList.findIndex((user)=>user.id===UserId)
    if(UserIndex===-1){ 
        res.send({message:"User not found to delete"})
    }
    else{
        usersList.splice(UserIndex,1)
        res.send({message:"Succesfully deleted"})
    }
    })