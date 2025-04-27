const express=require('express')
const app=express()
app.use(express.json())
//impor tthe routers
const userApi=require('./API/users')
//import mongo client
const {MongoClient}=require('mongodb')

const mongoUrl='mongodb://127.0.0.1:27017'
const mClinet=new MongoClient(mongoUrl)

mClinet.connect()
.then((connectionObj)=>{
    console.log("Data base is connected")
    //connect to the database
    const fsdb=connectionObj.db('shop')
    //connect to the connection
    const usersCollection=fsdb.collection('users')
    //making avaliable for all the apis
    app.set('usersCollection',usersCollection)
    //use routers
    app.listen(3500,()=>{
        console.log("SERVER STARTED")
    })
    
    app.use('user-api',userApi);
    app.use('*',(req,res,next)=>{
        console.log(req.path)
        res.send({message:"Invaild path"})
    })

})
.catch((err)=>{
    console.error(err)
})
    