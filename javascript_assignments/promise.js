let promise=true
const object=new Promise((fullfilled,rejected)=>{
setTimeout(()=>{
if(promise===true){
    fullfilled('Promise Accepted')
}
else{
    rejected('Promise Rejected')
}
},5000)
})
object.then((message)=>{console.log(message)}).catch((message)=>{console.log(message)})
console.log('Program Terminated')