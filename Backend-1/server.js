//import and use 
const exp=require('express')
const app=exp()
//assign the port number to http server of express app
app.listen(4000,()=>{
    console.log('https server started on port 4000')
})
//for hanlding the get request from client side we have to provide the router to handle
//for this we use get
// app.get('path',(request,response)=>{
//  response.send({message:"all users data"})
// })


//using the json format
app.use(exp.json()) 

//sample data
let userList=[{
    id:1,
    username:"lokesh"
},
{
    id:2,
    username:"Vikas"
}]

app.get('/users',(req,res)=>{
    res.send({message:"all users data",payload:userList})
})
//accessing the particular user
//so we use dynamical findign and retriving 
//url parameters
app.get('/users/:id',(req,res)=>{
    let idByUrl=Number(req.params.id);//id:20
    let userByurl=userList.find((user)=>idByUrl===user.id)
    if(userByurl===undefined){
        res.send({message:"No user Found"})
    }
    else{   
        res.send({message:"User Found",payload:userByurl})
    }
})

//for handling get bikes 
app.get('/bikes',(req,res)=>{
    res.send({message:"bikes are on the way"})
})




//for handling post user route
app.post('/user',(req,res)=>{
    //get new user from req 
    let newUser=req.body
    //push newUser to users array
    userList.push(newUser)
    res.send({message:"user Created"})
})



//for handling put user route
app.put('/user',(req,res)=>{
    //retiving the passed user
    let modifiedUSer=req.body
    //checking the user by finindex method
    let index=userList.findIndex(user=>user.id===modifiedUSer.id)
    //if the user found
    if(index==-1){
        res.send({message:"Invaild Updated the data"})
    }
    else{
        userList[index]=modifiedUSer;
        res.send({message:"Updated the data"})
    }

})

//for handling post user route
app.post('/user',(req,res)=>{
    res.send({message:"user Created"})
})

//for handling delete user route
app.delete('/user',(req,res)=>{
    res.send({message:"user deleted"})
})
